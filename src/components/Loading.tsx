const Loading = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center backdrop-blur-xs'>
      <div className='border-sage h-32 w-32 animate-spin rounded-full border-t-2 border-b-2'></div>
    </div>
  );
};

export default Loading;
