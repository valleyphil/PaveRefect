
import { Phone, CheckCircle, MapPin } from 'lucide-react';

const Flyer = () => {
  return (
    <div className="w-[3.5in] h-[8.5in] bg-white mx-auto shadow-lg print:shadow-none overflow-hidden">
      {/* Header avec logo */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-3 text-center">
        <img 
          src="/lovable-uploads/cc76582f-ef6e-43e6-9a67-02e393a24088.png" 
          alt="PavéRéfect Philippe Jean" 
          className="h-8 w-auto mx-auto brightness-0 invert mb-2"
        />
        <h1 className="text-lg font-bold leading-tight">
          Pavé<span className="text-black">R</span><span className="text-green-200">é</span>fect
        </h1>
        <p className="text-xs text-green-100">Philippe Jean</p>
      </div>

      {/* Image principale */}
      <div className="relative h-32 overflow-hidden">
        <img 
          src="/lovable-uploads/36e45d6e-4328-44a6-992a-47e0c3b9e831.png" 
          alt="Transformation pavé uni" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-2 left-2 text-white">
          <p className="text-xs font-semibold">AVANT / APRÈS</p>
          <p className="text-xs">Résultats garantis</p>
        </div>
      </div>

      {/* Titre principal */}
      <div className="p-3 text-center bg-gray-50">
        <h2 className="text-base font-bold text-gray-900 leading-tight mb-1">
          Votre pavé uni retrouvé, 
          <span className="text-green-600"> durable</span> et 
          <span className="text-green-600"> écoresponsable</span>
        </h2>
        <p className="text-xs text-gray-600">
          Valleyfield et environs
        </p>
      </div>

      {/* Services */}
      <div className="p-3">
        <h3 className="text-sm font-bold text-gray-900 mb-2">Nos Services:</h3>
        <div className="space-y-1 text-xs">
          <div className="flex items-center space-x-2">
            <CheckCircle className="text-green-600 flex-shrink-0" size={12} />
            <span>Relevage et nivellement</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="text-green-600 flex-shrink-0" size={12} />
            <span>Nettoyage haute pression</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="text-green-600 flex-shrink-0" size={12} />
            <span>Jointement polymère</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="text-green-600 flex-shrink-0" size={12} />
            <span>Application de scellant</span>
          </div>
        </div>
      </div>

      {/* Avantages */}
      <div className="bg-green-50 p-3 mx-3 rounded-lg">
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div>
            <div className="text-base font-bold text-green-600">2 ans</div>
            <div className="text-gray-700">Garantie</div>
          </div>
          <div>
            <div className="text-base font-bold text-green-600">50%</div>
            <div className="text-gray-700">Dépôt max</div>
          </div>
          <div>
            <div className="text-base font-bold text-green-600">Gratuit</div>
            <div className="text-gray-700">Estimation</div>
          </div>
        </div>
      </div>

      {/* Galerie mini */}
      <div className="p-3">
        <h3 className="text-xs font-bold text-gray-900 mb-2">Nos réalisations:</h3>
        <div className="grid grid-cols-3 gap-1">
          <img 
            src="/lovable-uploads/786baf83-c418-49a3-bc4e-ad29e328f2d2.png" 
            alt="Réalisation 1" 
            className="w-full h-12 object-cover rounded"
          />
          <img 
            src="/lovable-uploads/cc530a77-5b93-4a9e-af2b-4e2068985ad5.png" 
            alt="Réalisation 2" 
            className="w-full h-12 object-cover rounded"
          />
          <img 
            src="/lovable-uploads/d4087906-ba88-41f0-987c-0c18c2d8c74e.png" 
            alt="Réalisation 3" 
            className="w-full h-12 object-cover rounded"
          />
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-green-600 text-white p-3 text-center">
        <h3 className="text-sm font-bold mb-2">ESTIMATION GRATUITE</h3>
        <div className="space-y-1">
          <div className="flex items-center justify-center space-x-2">
            <Phone size={14} />
            <span className="text-lg font-bold">450-288-5564</span>
          </div>
          <p className="text-xs">paverefect@gmail.com</p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white p-2 text-center">
        <div className="flex items-center justify-center space-x-1 text-xs">
          <MapPin size={10} />
          <span>Salaberry-de-Valleyfield et environs</span>
        </div>
        <p className="text-xs mt-1 text-gray-300">
          Solution économique • Écoresponsable • Résidentiel
        </p>
      </div>
    </div>
  );
};

export default Flyer;
