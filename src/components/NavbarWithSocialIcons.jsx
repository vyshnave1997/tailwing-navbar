import React, { useState } from 'react';

const NavbarWithSocialIcons = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold">BrandLogo</a>
          </div>

          {/* Social Media Links */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-blue-500">Twitter</a>
            <a href="#" className="hover:text-pink-500">Instagram</a>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
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
          <a href="#" className="block text-white px-3 py-2 rounded-md">Facebook</a>
          <a href="#" className="block text-white px-3 py-2 rounded-md">Twitter</a>
          <a href="#" className="block text-white px-3 py-2 rounded-md">Instagram</a>
        </div>
      )}
    </nav>
  );
};

export default NavbarWithSocialIcons;
