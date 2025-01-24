import React from "react";
export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 bottom-0">
      <div className="px-3 py-2">
        <a
          href="#Home"
          className="hover:text-pink-700 px-4 text-white font-semibold"
        >
          Home
        </a>
        <a
          href="#About"
          className="hover:text-pink-700 px-4 text-white font-semibold"
        >
          About
        </a>
        <a
          href="#Project"
          className="hover:text-pink-700 px-4 text-white font-semibold"
        >
          Projects
        </a>
      </div>
      <div className="text-white px-3 py-4">
        <p className="text-sm font-thin">
          Portfolio - Designed by
          <span className="font-semibold">Reanz Arthur A. Monera</span>
        </p>
      </div>
    </div>
  );
}
