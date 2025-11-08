import { useEffect, useState } from 'react';
import { StatEndPointResponse } from '../libs/types/stat';
import HeatMap from '../src/components/chart/Heatmap';
import Donut from '../src/components/chart/Donut';
const GitHubStatSection = () => {
  const [stat, setStat] = useState<StatEndPointResponse | null>(null);
  const [loading, setLoading] = useState(true);

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

  if (!stat) return <p>No data</p>;
  const contributions = stat.contributions.weeks.flatMap(
    (week) => week.contributionDays
  );
  const topLanguages = stat.topLanguages;
  if (loading) return <p>Loading...</p>;

  return (
    <section id='githubStatPin'>
      <div>
        <h2 className='text-2xl text-center font-bold text-white'>
          GitHub Stats
        </h2>
        <div className='flex flex-col items-center justify-center gap-2'>
          <HeatMap contributions={contributions} />
          <Donut topLanguages={topLanguages} />
        </div>
      </div>
    </section>
  );
};

export default GitHubStatSection;
