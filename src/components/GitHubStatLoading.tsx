const GitHubStatLoading = () => {
  return (
    <section id='githubStatPin'>
      <div>
        <h2 className='text-2xl text-center font-bold text-white'>
          GitHub Stats
        </h2>
        <div className='flex flex-col items-center justify-center gap-2'>
          {/* Year Selector Skeleton */}
          <div className='bg-gray-700 h-10 w-24 rounded animate-pulse'></div>
          {/* Heatmap Skeleton */}
          <div className='bg-gray-700 h-40 w-full max-w-4xl rounded animate-pulse mt-4'></div>
          {/* Donut Chart Skeleton */}
          <div className='bg-gray-700 h-64 w-64 rounded-full animate-pulse mt-4'></div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStatLoading;
