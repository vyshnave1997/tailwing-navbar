import React, { useState, useEffect } from 'react';

const NavbarWithDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle between dark and light modes
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Toggle login dropdown
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".dropdown")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", closeDropdown);

    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <nav
      className={`${
        darkMode
          ? 'bg-gray-900 text-gray-100'
          : 'bg-white text-gray-900'
      } shadow-md fixed w-full z-50 transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold">
              BrandLogo
            </a>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="/"
              className={`hover:text-blue-600 ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}
            >
              Home
            </a>
            <a
              href="/services"
              className={`hover:text-blue-600 ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}
            >
              Services
            </a>
            <a
              href="/about"
              className={`hover:text-blue-600 ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}
            >
              About
            </a>
            <a
              href="/contact"
              className={`hover:text-blue-600 ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}
            >
              Contact
            </a>
          </div>

          {/* Right Side: Dark Mode Toggle and Login */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button onClick={handleDarkModeToggle} className="focus:outline-none">
              {darkMode ? (
                <svg
                  className="w-6 h-6 text-gray-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m8.485-8.485l-.707-.707M4.222 4.222l-.707-.707m16.263 12.142l.707-.707M7.05 7.05l.707-.707M16 12h1m-8 0H7m4-5a5 5 0 000 10 5 5 0 000-10z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3.219a9 9 0 015.825 15.676c-.31-.42-.646-.822-1.003-1.205A9.002 9.002 0 0012 3.219z"
                  />
                </svg>
              )}
            </button>

            {/* Login Dropdown */}
            <div className="relative dropdown">
              <button
                onClick={handleDropdownToggle}
                className={`hover:text-blue-600 ${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}
              >
                Login
              </button>
              {dropdownOpen && (
                <div
                  className={`absolute right-0 mt-2 w-48 ${
                    darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'
                  } border rounded-md shadow-lg`}
                >
                  <a
                    href="/profile"
                    className={`block px-4 py-2 ${darkMode ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-100'}`}
                  >
                    Profile
                  </a>
                  <a
                    href="/settings"
                    className={`block px-4 py-2 ${darkMode ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-100'}`}
                  >
                    Settings
                  </a>
                  <a
                    href="/logout"
                    className={`block px-4 py-2 ${darkMode ? 'text-gray-100 hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-100'}`}
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Hamburger Menu for mobile */}
          <div className="md:hidden">
            <button className="focus:outline-none">
              <svg
                className={`h-6 w-6 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarWithDarkMode;
