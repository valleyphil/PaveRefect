
import { Phone, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      {/* Top contact bar */}
      <div className="bg-green-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-center space-x-6 text-sm">
          <a href="tel:450-288-5564" className="flex items-center space-x-2 hover:text-green-200 transition-colors">
            <Phone size={16} />
            <span>450-288-5564</span>
          </a>
          <a href="mailto:valleyphil125@gmail.com" className="flex items-center space-x-2 hover:text-green-200 transition-colors">
            <Mail size={16} />
            <span>valleyphil125@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/33be65b8-9633-4858-b169-5d06aa65fe90.png" 
              alt="PavéRéfect" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Accueil</a>
            <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Services</a>
            <a href="#galerie" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Galerie</a>
            <a href="#apropos" className="text-gray-700 hover:text-green-600 transition-colors font-medium">À propos</a>
            <a href="#contact" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
              Estimation gratuite
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#accueil" className="text-gray-700 hover:text-green-600 transition-colors font-medium" onClick={toggleMenu}>Accueil</a>
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors font-medium" onClick={toggleMenu}>Services</a>
              <a href="#galerie" className="text-gray-700 hover:text-green-600 transition-colors font-medium" onClick={toggleMenu}>Galerie</a>
              <a href="#apropos" className="text-gray-700 hover:text-green-600 transition-colors font-medium" onClick={toggleMenu}>À propos</a>
              <a href="#contact" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium text-center" onClick={toggleMenu}>
                Estimation gratuite
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
