const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen backdrop-blur-xs'>
      <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#8a7391]'></div>
    </div>
  );
};

export default Loading;
