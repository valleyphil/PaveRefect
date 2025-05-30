
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/33be65b8-9633-4858-b169-5d06aa65fe90.png" 
              alt="PavéRéfect" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed">
              Votre spécialiste en restauration de pavé uni dans la région de Valleyfield. 
              Une solution durable et écoresponsable pour redonner vie à vos surfaces.
            </p>
          </div>

          {/* Contact rapide */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <a href="tel:450-288-5564" className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors">
              <Phone size={18} />
              <span>450-288-5564</span>
            </a>
            <a href="mailto:paverefect@gmail.com" className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors">
              <Mail size={18} />
              <span>paverefect@gmail.com</span>
            </a>
            <div className="flex items-center space-x-3 text-gray-300">
              <MapPin size={18} />
              <span>Salaberry-de-Valleyfield et environs</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Relevage et nivellement</li>
              <li>• Nettoyage haute pression</li>
              <li>• Jointement au sable polymère</li>
              <li>• Application de scellant (bientôt)</li>
              <li>• Réfection de murets (bientôt)</li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="space-y-3">
              <a href="https://www.facebook.com/profile.php?id=61576602792197&locale=fr_CA" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors">
                <Facebook size={18} />
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors">
                <Instagram size={18} />
                <span>Instagram</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors">
                <Youtube size={18} />
                <span>YouTube / Reels</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 PavéRéfect. Tous droits réservés.
            </div>
            <div className="text-gray-400 text-sm">
              Garantie 2 ans • Estimation gratuite • Service résidentiel
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
