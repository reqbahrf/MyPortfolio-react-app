import { useEffect, useState, useMemo } from 'react';
import { StatEndPointResponse } from '../libs/types/stat';
import HeatMap from '../src/components/chart/Heatmap';
import Donut from '../src/components/chart/Donut';
const GitHubStatSection = () => {
  const [stat, setStat] = useState<StatEndPointResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState<string>('');

  useEffect(() => {
    const fetchStat = async () => {
      const res = await fetch('/api/github/stat');
      const json = (await res.json()) as StatEndPointResponse;
      return json;
    };
    fetchStat()
      .then((json) => {
        setStat(json);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const availableYears = useMemo(() => {
    if (!stat) return [];
    const years = new Set<string>();
    stat.contributions.weeks.forEach((week) => {
      week.contributionDays.forEach((day) => {
        years.add(day.date.substring(0, 4));
      });
    });
    const sortedYears = Array.from(years).sort().reverse();
    if (sortedYears.length > 0 && !selectedYear) {
      setSelectedYear(sortedYears[0]); // Fix: Set to the first year (string)
    }
    return sortedYears;
  }, [stat, selectedYear]);

  if (!stat) return <p>No data</p>;
  if (loading) return <p>Loading...</p>;

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
        </div>
      </div>
    </section>
  );
};

export default GitHubStatSection;
