import { useEffect, useState, useMemo, lazy, Suspense } from 'react';
import { StatLocalState } from '../libs/types/stat';
import HeatMapSkeleton from './components/skeleton/chart/HeatMap';
import DonutSkeleton from './components/skeleton/chart/Donut';
const HeatMap = lazy(() => import('../src/components/chart/Heatmap'));
const Donut = lazy(() => import('../src/components/chart/Donut'));
import GitHubStatLoading from './components/GitHubStatLoading';
import { useThemeContext } from './context/ThemeContext';
const GitHubStatSection = () => {
  const { isDarkTheme } = useThemeContext();
  const [stat, setStat] = useState<StatLocalState | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    const worker = new Worker(
      new URL('./workers/githubStat.worker', import.meta.url),
      { type: 'module' }
    );
    worker.onmessage = (e: MessageEvent) => {
      const { topLanguages, contributions } = e.data as StatLocalState;
      setStat({
        topLanguages,
        contributions,
      });
      setLoading(false);
    };

    worker.onerror = (err) => {
      console.error('worker error: ', err);
      setLoading(false);
    };

    worker.postMessage('process GitHub stat start');

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
    return Array.from(years).sort().reverse();
  }, [stat]);

  useEffect(() => {
    if (availableYears.length > 0 && !selectedYear) {
      setSelectedYear(availableYears[0]);
    }
  }, [availableYears, selectedYear]);

  const filteredContributions = useMemo(() => {
    if (!stat?.contributions?.weeks || !selectedYear) return [];
    return stat.contributions.weeks
      .flatMap((week) => week.contributionDays)
      .filter((day) => day.date.startsWith(selectedYear));
  }, [stat, selectedYear]);

  if (loading) return <GitHubStatLoading />;

  if (!stat?.contributions?.weeks || !stat?.topLanguages) {
    return (
      <div className='flex justify-center items-center h-96'>
        <div className='text-center'>
          <h2 className='text-2xl text-center font-bold text-black dark:text-white mb-2'>
            No Data Available
          </h2>
          <p className='text-xl text-black dark:text-white'>
            Unable to fetch GitHub statistics. The GitHub API provider might be
            temporarily unavailable.
          </p>
        </div>
      </div>
    );
  }

  const topLanguages = stat?.topLanguages;
  return (
    <section id='githubStatPin'>
      <div>
        <h2 className='text-2xl text-center font-bold dark:text-white text-black'>
          GitHub Stats
        </h2>
        <div className='flex flex-col items-center justify-center gap-2'>
          <select
            className='bg-gray-800 text-white p-2 rounded-sm'
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
          <Suspense fallback={<HeatMapSkeleton />}>
            <HeatMap
              contributions={filteredContributions}
              theme={isDarkTheme ? 'dark' : 'light'}
            />
          </Suspense>
          <Suspense fallback={<DonutSkeleton />}>
            <Donut
              topLanguages={topLanguages}
              theme={isDarkTheme ? 'dark' : 'light'}
            />
          </Suspense>
          <p className='text-xs text-gray-400 dark:text-gray-800'>
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
