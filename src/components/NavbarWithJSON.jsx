import React, { useState, useEffect } from 'react';

const NavbarWithJSON = () => {
  const [navLinks, setNavLinks] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  useEffect(() => {
    // Fetch the JSON data from the public folder
    fetch('/navLinks.json')
      .then((response) => response.json())
      .then((data) => setNavLinks(data))
      .catch((error) => console.error('Error fetching navigation data:', error));
  }, []);

  const handleDropdownToggle = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-900">BrandLogo</a>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative">
                {/* Check if the link has a dropdown */}
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className="text-gray-900 hover:text-blue-600"
                    >
                      {link.name}
                    </button>
                    {/* Dropdown Menu */}
                    {dropdownOpen === index && (
                      <div className="absolute mt-2 w-48 bg-white border rounded-md shadow-lg">
                        {link.dropdown.map((dropdownLink, subIndex) => (
                          <a
                            key={subIndex}
                            href={dropdownLink.url}
                            className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                          >
                            {dropdownLink.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a href={link.url} className="text-gray-900 hover:text-blue-600">
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Hamburger Menu for mobile */}
          <div className="md:hidden">
            <button className="text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

export default NavbarWithJSON;
