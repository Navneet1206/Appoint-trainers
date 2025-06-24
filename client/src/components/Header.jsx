import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const mockUser = JSON.parse(localStorage.getItem('yogaUser') || 'null');
    setUser(mockUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('yogaUser');
    setUser(null);
    setIsMenuOpen(false);
    navigate('/');
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              SavayasYoga
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">Home</Link>
            <Link to="/trainers" className="text-gray-700 hover:text-green-600 transition-colors">Trainers</Link>
            <Link to="/book-appointment" className="text-gray-700 hover:text-green-600 transition-colors">Book Session</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors">About</Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="text-gray-700 hover:text-green-600 transition-colors flex items-center space-x-1">
                  <User size={18} />
                  <span>{user.name}</span>
                </Link>
                <button onClick={handleLogout} className="text-gray-700 hover:text-red-600 transition-colors">
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-gray-700 hover:text-green-600 transition-colors">Login</Link>
                <Link to="/signup" className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all">
                  Sign Up
                </Link>
              </div>
            )}
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/trainers" className="text-gray-700 hover:text-green-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Trainers</Link>
              <Link to="/book-appointment" className="text-gray-700 hover:text-green-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Book Session</Link>
              <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
              
              {user ? (
                <>
                  <Link to="/profile" className="text-gray-700 hover:text-green-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                    Profile
                  </Link>
                  <button onClick={handleLogout} className="text-left text-gray-700 hover:text-red-600 transition-colors">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-gray-700 hover:text-green-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Login</Link>
                  <Link to="/signup" className="text-gray-700 hover:text-green-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
                </>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;