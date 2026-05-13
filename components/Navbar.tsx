import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldCheck, Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-navy-950/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-navy-950 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-amber-500 text-navy-950 p-2 rounded-lg group-hover:bg-amber-400 transition-colors">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl text-white tracking-wide leading-none">ukclaims.online</span>
              <span className="text-[10px] text-navy-300 font-medium tracking-wider uppercase hidden sm:block mt-1 opacity-70">
                Helping you claim what's yours
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/about" className="text-sm text-white/80 hover:text-amber-400 font-medium transition-colors">About Us</Link>
            <a href="/#how-it-works" className="text-sm text-white/80 hover:text-amber-400 font-medium transition-colors">How It Works</a>
            <a href="/#faq" className="text-sm text-white/80 hover:text-amber-400 font-medium transition-colors">FAQ</a>
            
            <div className="flex items-center gap-6 ml-4">
              <a href="tel:08001234567" className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors group">
                <div className="bg-white/10 p-2 rounded-full group-hover:bg-amber-500/20 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="font-bold tracking-wide">0800 123 4567</span>
              </a>
              
              <Link 
                to="/#claim-form" 
                className="bg-amber-500 hover:bg-amber-400 text-navy-950 px-6 py-2.5 rounded-full font-bold shadow-gold hover:shadow-glow transition-all transform hover:-translate-y-0.5"
              >
                Start Your Claim
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-4">
            <a href="tel:08001234567" className="bg-white/10 text-white p-2 rounded-full hover:bg-amber-500/20 hover:text-amber-400 transition-colors">
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-amber-400 focus:outline-none p-1"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-7 w-7" aria-hidden="true" />
              ) : (
                <Menu className="block h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-navy-950 border-t border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-4 shadow-xl">
          <Link
            to="/about"
            className="block text-lg font-medium text-white hover:text-amber-400 py-2"
          >
            About Us
          </Link>
          <a
            href="/#how-it-works"
            className="block text-lg font-medium text-white hover:text-amber-400 py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </a>
          <a
            href="/#faq"
            className="block text-lg font-medium text-white hover:text-amber-400 py-2 border-b border-white/10 pb-4"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </a>
          
          <div className="pt-2">
            <Link
              to="/#claim-form"
              className="block w-full text-center bg-amber-500 text-navy-950 font-bold py-4 rounded-xl shadow-gold"
            >
              Start Your Claim
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
