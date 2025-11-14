import logo from '/assets/pageImg/logo.webp';

export default function Header() {
  return (
    <div className='flex justify-between items-center border-y-black shadow-xl bg-gray-900 bg-opacity-70 fixed top-0 w-full z-50 px-0 sm:px-40 md:px-40 lg:px-40 xl:px-40'>
      <div className='px-4 py-2'>
        <img
          src={logo}
          alt='Logo'
          className='h-10 w-10 rounded-full'
        />
      </div>
    </div>
  );
}
