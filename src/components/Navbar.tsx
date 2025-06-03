
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const { itemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-orange">
              Dreamy<span className="text-orange-800">Cakes</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-orange transition-colors">
              Home
            </Link>
            <Link to="/products" className="font-medium hover:text-orange transition-colors">
              Cakes
            </Link>
            <Link to="/about" className="font-medium hover:text-orange transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-medium hover:text-orange transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Auth & Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <User size={18} />
                <span>Login</span>
              </Button>
            </Link>
            <Link to="/cart" className="relative">
              <Button variant="outline" size="icon" className="rounded-full">
                <ShoppingCart size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium hover:text-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="font-medium hover:text-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cakes
              </Link>
              <Link 
                to="/about" 
                className="font-medium hover:text-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="font-medium hover:text-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2 flex items-center gap-4">
                <Link 
                  to="/login" 
                  className="btn-secondary inline-flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={18} />
                  <span>Login</span>
                </Link>
                <Link 
                  to="/cart" 
                  className="relative btn-primary inline-flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShoppingCart size={18} />
                  <span>Cart</span>
                  {itemCount > 0 && (
                    <span className="bg-white text-orange text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
