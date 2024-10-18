import React, { useState } from 'react';

const NavbarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-900">Logo</a>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-900 hover:text-blue-600">Home</a>

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-gray-900 hover:text-blue-600"
              >
                Services
              </button>
              {dropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg">
                  <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">Web Development</a>
                  <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">App Development</a>
                  <a href="#" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">SEO</a>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-900 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-900 hover:text-blue-600">Contact</a>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <a href="#" className="block text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md">Home</a>
          <a href="#" className="block text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md">Services</a>
          <a href="#" className="block text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md">About</a>
          <a href="#" className="block text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default NavbarDropdown;
