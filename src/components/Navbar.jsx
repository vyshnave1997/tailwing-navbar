import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-3xl font-bold text-blue-600">
              {/* Vibrant Logo */}
              VIKI
            </a>
          </div>

          {/* Links for larger screens */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-800 hover:text-blue-600 px-3 py-2 text-lg font-medium">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600 px-3 py-2 text-lg font-medium">
              Services
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600 px-3 py-2 text-lg font-medium">
              About
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600 px-3 py-2 text-lg font-medium">
              Contact
            </a>
          </div>

          {/* Hamburger Menu for smaller screens */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Only visible when hamburger is clicked */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium">
            Home
          </a>
          <a href="#" className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium">
            Services
          </a>
          <a href="#" className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium">
            About
          </a>
          <a href="#" className="block text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
