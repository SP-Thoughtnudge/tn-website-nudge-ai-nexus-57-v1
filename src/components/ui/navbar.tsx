
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "./button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed w-full bg-white/95 backdrop-blur-md z-50 py-4 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'border-b border-gray-100'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <span className="text-2xl font-bold text-brand-black group-hover:text-brand-orange transition-colors">ThoughtNudge</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">Product</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li className="row-span-3">
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-brand-orange/20 to-brand-pink/20 p-6 no-underline outline-none focus:shadow-md"
                        to="/product"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium">
                          Thoughtnudge Platform
                        </div>
                        <p className="text-sm leading-tight text-gray-600">
                          Our AI-powered solution that makes every customer interaction personal and effective.
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50"
                        to="/how-it-works"
                      >
                        <div className="text-sm font-medium leading-none">How It Works</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                          See our AI decision engine in action
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50"
                        to="/use-cases"
                      >
                        <div className="text-sm font-medium leading-none">Use Cases</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                          Explore how businesses use our platform
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50"
                        to="/integrations"
                      >
                        <div className="text-sm font-medium leading-none">Integrations</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                          Connect with your existing tech stack
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/blogs"
                  className={`flex items-center px-4 py-2 text-gray-700 hover:text-brand-orange transition-colors ${isActive('/blogs') ? 'text-brand-orange font-medium' : ''}`}
                >
                  Blogs
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/brochure"
                  className={`flex items-center px-4 py-2 text-gray-700 hover:text-brand-orange transition-colors ${isActive('/brochure') ? 'text-brand-orange font-medium' : ''}`}
                >
                  Brochure
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/about"
                  className={`flex items-center px-4 py-2 text-gray-700 hover:text-brand-orange transition-colors ${isActive('/about') ? 'text-brand-orange font-medium' : ''}`}
                >
                  About
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button variant="orange" className="ml-8" size="sm">
            Book a Demo
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-700 hover:text-brand-orange transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <div className="py-2 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <span className="font-medium">Product</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="mt-2 ml-4 space-y-2">
                <Link 
                  to="/product" 
                  className="block py-2 text-gray-700 hover:text-brand-orange transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Overview
                </Link>
                <Link 
                  to="/how-it-works" 
                  className="block py-2 text-gray-700 hover:text-brand-orange transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link 
                  to="/use-cases" 
                  className="block py-2 text-gray-700 hover:text-brand-orange transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Use Cases
                </Link>
                <Link 
                  to="/integrations" 
                  className="block py-2 text-gray-700 hover:text-brand-orange transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Integrations
                </Link>
              </div>
            </div>
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
            <Button variant="orange" className="mt-2" onClick={() => setIsMenuOpen(false)}>
              Book a Demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
