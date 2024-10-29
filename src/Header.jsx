import logo from './assets/pageImg/logo.jpg'

export default function Header() {
  return (
    <div className="flex justify-between items-center border-y-black shadow-xl bg-gray-900 bg-opacity-70 fixed top-0 w-full z-50 px-0 sm:px-40 md:px-40 lg:px-40 xl:px-40">
      <div className="px-4 py-2">
        <img src={logo} className="h-14" alt="Logo" />
      </div>
      <div className="md:hidden">
        <button id="burger-menu" className="px-4 py-2 text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <nav id="nav-links" className="hidden sm:flex md:flex my-2">
        <a href="#Home" className="hover:text-pink-700 px-4 my-2 py-2 text-white">Home</a>
        <a href="#About" className="hover:text-pink-700 px-4 my-2 py-2 text-white">About</a>
        <a href="#Project" className="hover:text-pink-700 px-4 my-2 py-2 text-white">Projects</a>
      </nav>
    </div>
  )
}