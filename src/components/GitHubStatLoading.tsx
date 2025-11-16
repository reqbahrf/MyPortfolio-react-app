import HeatMap from '../components/skeleton/chart/HeatMap';
import Donut from '../components/skeleton/chart/Donut';
const GitHubStatLoading = () => {
  return (
    <section id='githubStatPin'>
      <div>
        <h2 className='text-2xl text-center font-bold dark:text-white text-black'>
          GitHub Stats
        </h2>
        <div className='flex flex-col items-center justify-center gap-2'>
          {/* Year Selector Skeleton */}
          <div className='bg-gray-700 h-10 w-24 rounded-sm animate-pulse'></div>
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
