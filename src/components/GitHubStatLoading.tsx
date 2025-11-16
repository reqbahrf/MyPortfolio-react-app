import HeatMap from '../components/skeleton/chart/HeatMap';
import Donut from '../components/skeleton/chart/Donut';
const GitHubStatLoading = () => {
  return (
    <section id='githubStatPin'>
      <div>
        <h2 className='text-center text-2xl font-bold text-black dark:text-white'>
          GitHub Stats
        </h2>
        <div className='flex flex-col items-center justify-center gap-2'>
          {/* Year Selector Skeleton */}
          <div className='h-10 w-24 animate-pulse rounded-sm bg-gray-700'></div>
          {/* Heatmap Skeleton */}
          <HeatMap />
          {/* Donut Chart Skeleton */}
          <Donut />
        </div>
      </div>
    </section>
  );
};

export default GitHubStatLoading;
