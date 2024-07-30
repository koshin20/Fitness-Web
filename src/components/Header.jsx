import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">FitLife</div>
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-white text-lg hover:text-green-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/register"
            className="text-white text-lg hover:text-green-400 transition-colors duration-300"
          >
            Register
          </Link>
          <Link
            to="/lists"
            className="text-white text-lg hover:text-green-400 transition-colors duration-300"
          >
            List
          </Link>
          <Link
            to="/receipts"
            className="text-white text-lg hover:text-green-400 transition-colors duration-300"
          >
            Receipts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
