import React, { useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Building2 className="h-8 w-8 text-orange-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">HomeHub</span>
            </Link>

            <div className="hidden md:flex md:ml-10 space-x-8">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/advice" 
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Advice
              </Link>
              <Link 
                to="/developments" 
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Developments
              </Link>
              <Link 
                to="/agents" 
                className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Agents
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="text-gray-600 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors"
            >
              Sign in
            </Link>
            <Link 
              to="/register" 
              className="bg-orange-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Sign up
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 p-2 rounded-md transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } fixed top-0 right-0 bottom-0 w-64 bg-white z-40 transform transition-transform ease-in-out duration-300 md:hidden shadow-lg`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 p-2 rounded-md transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex flex-col px-4 py-6 space-y-4">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/advice" 
              className="text-gray-600 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors"
              onClick={toggleMenu}
            >
              Advice
            </Link>
            <Link 
              to="/developments" 
              className="text-gray-600 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors"
              onClick={toggleMenu}
            >
              Developments
            </Link>
            <Link 
              to="/agents" 
              className="text-gray-600 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors"
              onClick={toggleMenu}
            >
              Agents
            </Link>
            <hr className="border-gray-200" />
            <Link 
              to="/login" 
              className="text-gray-600 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors"
              onClick={toggleMenu}
            >
              Sign in
            </Link>
            <Link 
              to="/register" 
              className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg text-base font-medium transition-colors text-center"
              onClick={toggleMenu}
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-30 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default NavBar;