import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {

  return (
    <header className="bg-blue shadow-lg border-b-2 border-secondary-dark sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-3 text-text-default hover:text-secondary-dark transition-colors duration-300"
          >
            <div className="w-10 h-10 bg-pink rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className='text-md text-text-light'>React Study - Cagdas Aldogan</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
