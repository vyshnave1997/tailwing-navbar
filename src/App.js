import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importing the different Navbar components
import NavbarSearchCTA from './components/NavbarSearchCTA';
import NavbarDropdown from './components/NavbarDropdown';
import NavbarWithSocialIcons from './components/NavbarWithSocialIcons';
import Navbar from './components/Navbar';
import NavbarWithJSON from './components/NavbarWithJSON';
import NavbarWithDarkMode from './components/NavbarWithDarkMode';
// Import others if needed

const App = () => {
  return (
    <Router>
      <div>
        {/* Main Navigation Links to switch between different Navbar examples */}
        <nav className="bg-gray-100 p-4 shadow-md">
          <ul className="flex space-x-6">
          <li>
              <Link to="/navbar" className="text-blue-600 hover:underline">
                Navbar
              </Link>
            </li>
            <li>
              <Link to="/navbar-search-cta" className="text-blue-600 hover:underline">
                Navbar with Search & CTA
              </Link>
            </li>
            <li>
              <Link to="/navbar-dropdown" className="text-blue-600 hover:underline">
                Navbar with Dropdown
              </Link>
            </li>
            <li>
              <Link to="/navbar-social-icons" className="text-blue-600 hover:underline">
                Navbar with Social Icons
              </Link>
            </li>
            <li>
              <Link to="/navbarwithJSON" className="text-blue-600 hover:underline">
                Navbar read data from json
              </Link>
            </li>
            <li>
              <Link to="/navbar-dark" className="text-blue-600 hover:underline">
                Navbar Dark mode
              </Link>
            </li>
            {/* Add more navbar links */}
          </ul>
        </nav>

        {/* Routes to render each Navbar component */}
        <Routes>
        <Route path="/navbar" element={<Navbar />} />
          <Route path="/navbar-search-cta" element={<NavbarSearchCTA />} />
          <Route path="/navbar-dropdown" element={<NavbarDropdown />} />
          <Route path="/navbar-social-icons" element={<NavbarWithSocialIcons />} />
          <Route path="/navbarwithJson" element={<NavbarWithJSON />} />
          <Route path="/navbar-dark" element={<NavbarWithDarkMode />} />
          {/* Add more routes for other navbars */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
