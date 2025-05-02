
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "./button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-brand-black">ThoughtNudge</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/product" className="text-gray-700 hover:text-brand-orange transition-colors">
            Product
          </Link>
          <Link to="/use-cases" className="text-gray-700 hover:text-brand-orange transition-colors">
            Use Cases
          </Link>
          <Link to="/integrations" className="text-gray-700 hover:text-brand-orange transition-colors">
            Integrations
          </Link>
          <Link to="/blogs" className="text-gray-700 hover:text-brand-orange transition-colors">
            Blogs
          </Link>
          <Link to="/brochure" className="text-gray-700 hover:text-brand-orange transition-colors">
            Brochure
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-brand-orange transition-colors">
            About
          </Link>
          <Button variant="orange" className="ml-4">
            Book a Demo
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-700 hover:text-brand-orange"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/product" 
              className="text-gray-700 hover:text-brand-orange py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Product
            </Link>
            <Link 
              to="/use-cases" 
              className="text-gray-700 hover:text-brand-orange py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Use Cases
            </Link>
            <Link 
              to="/integrations" 
              className="text-gray-700 hover:text-brand-orange py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Integrations
            </Link>
            <Link 
              to="/blogs" 
              className="text-gray-700 hover:text-brand-orange py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link 
              to="/brochure" 
              className="text-gray-700 hover:text-brand-orange py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Brochure
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-brand-orange py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Button variant="orange" className="mt-2">
              Book a Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
