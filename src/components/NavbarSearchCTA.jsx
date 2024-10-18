import React, { useState } from 'react';

const NavbarSearchCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-white">BrandLogo</a>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:block">
            <input
              type="text"
              className="px-4 py-2 rounded-lg text-gray-800"
              placeholder="Search..."
            />
          </div>

          {/* Sign Up Button */}
          <div className="hidden md:block">
            <a
              href="#"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
            >
              Sign Up
            </a>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg text-gray-800"
            placeholder="Search..."
          />
          <a href="#" className="block text-white px-3 py-2 rounded-md text-base font-medium">Sign Up</a>
        </div>
      )}
    </nav>
  );
};

export default NavbarSearchCTA;
