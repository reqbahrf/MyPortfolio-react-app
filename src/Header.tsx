import logo from '/assets/pageImg/logo.webp';

export default function Header() {
  return (
    <div className='bg-opacity-70 fixed top-0 z-50 flex w-full items-center justify-between border-y-black bg-gray-900 px-0 shadow-xl sm:px-40 md:px-40 lg:px-40 xl:px-40'>
      <div className='px-4 py-2'>
        <img src={logo} alt='Logo' className='h-10 w-10 rounded-full' />
      </div>
    </div>
  );
}
