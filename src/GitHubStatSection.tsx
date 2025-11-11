import { useEffect, useState, useMemo } from 'react';
import { StatEndPointResponse, StatLocalState } from '../libs/types/stat';
import HeatMap from '../src/components/chart/Heatmap';
import Donut from '../src/components/chart/Donut';
import GitHubStatLoading from './components/GitHubStatLoading';
const GitHubStatSection = () => {
  const [stat, setStat] = useState<StatLocalState | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState<string>('');

  useEffect(() => {
    const worker = new Worker(
      new URL('./workers/repoLanguage.worker', import.meta.url),
      { type: 'module' }
    );
    worker.onmessage = (e: MessageEvent) => {
      const { topLanguages, contributions } = e.data as StatLocalState;
      setStat({
        topLanguages,
        contributions,
      });
    };

    worker.onerror = (err) => {
      console.error('worker error: ', err);
      setLoading(false);
    };
    const fetchStat = async () => {
      const res = await fetch('/api/github/stat');
      const json = (await res.json()) as StatEndPointResponse;
      return json;
    };
    fetchStat()
      .then((json) => {
        worker.postMessage(json);
      })
      .catch((error) => {
        console.error(error);
        setStat(null);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => worker.terminate();
  }, []);

  const availableYears = useMemo(() => {
    if (!stat?.contributions?.weeks) return [];
    const years = new Set<string>();
    stat.contributions.weeks.forEach((week) => {
      week.contributionDays.forEach((day) => {
        years.add(day.date.substring(0, 4));
      });
    });
    const sortedYears = Array.from(years).sort().reverse();
    if (sortedYears.length > 0 && !selectedYear) {
      setSelectedYear(sortedYears[0]);
    }
    return sortedYears;
  }, [stat, selectedYear]);

  if (loading) return <GitHubStatLoading />;

  if (!stat?.contributions?.weeks)
    return (
      <div className='flex justify-center items-center h-96'>
        <div className='text-center'>
          <h2 className='text-2xl text-center font-bold text-white mb-2'>
            No Data Available
          </h2>
          <p className='text-xl text-white'>
            Unable to fetch GitHub statistics. The GitHub API provider might be
            temporarily unavailable.
          </p>
        </div>
      </div>
    );

  const filteredContributions = stat.contributions.weeks
    .flatMap((week) => week.contributionDays)
    .filter((day) => day.date.startsWith(selectedYear));

  const topLanguages = stat.topLanguages;

  return (
    <section id='githubStatPin'>
      <div>
        <h2 className='text-2xl text-center font-bold text-white'>
          GitHub Stats
        </h2>
        <div className='flex flex-col items-center justify-center gap-2'>
          <select
            className='bg-gray-800 text-white p-2 rounded'
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            disabled={availableYears.length <= 1}
          >
            {availableYears.map((year) => (
              <option
                key={year}
                value={year}
              >
                {year}
              </option>
            ))}
          </select>
          <HeatMap contributions={filteredContributions} />
          <Donut topLanguages={topLanguages} />
          <p className='text-xs text-gray-400'>
            Note: Data provided by GitHub API. retrieved using{' '}
            <a
              href='https://docs.github.com/en/graphql'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub GraphQL API
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default GitHubStatSection;
