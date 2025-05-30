
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Suivez-nous
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <a href="https://www.facebook.com/profile.php?id=61576602792197&locale=fr_CA" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 transition-colors group">
          <div className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors">
            <Facebook className="text-blue-600" size={20} />
          </div>
          <span className="font-medium text-gray-700">Facebook</span>
        </a>
        
        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 transition-colors group">
          <div className="bg-pink-100 p-2 rounded-full group-hover:bg-pink-200 transition-colors">
            <Instagram className="text-pink-600" size={20} />
          </div>
          <span className="font-medium text-gray-700">Instagram</span>
        </a>
        
        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 transition-colors group">
          <div className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors">
            <Linkedin className="text-blue-600" size={20} />
          </div>
          <span className="font-medium text-gray-700">LinkedIn</span>
        </a>
        
        <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 transition-colors group">
          <div className="bg-red-100 p-2 rounded-full group-hover:bg-red-200 transition-colors">
            <Youtube className="text-red-600" size={20} />
          </div>
          <span className="font-medium text-gray-700">YouTube</span>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
