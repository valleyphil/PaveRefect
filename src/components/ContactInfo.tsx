
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Contactez-nous directement
      </h3>
      <div className="space-y-6">
        <a href="tel:450-288-5564" className="flex items-center space-x-4 p-4 rounded-lg hover:bg-green-50 transition-colors group">
          <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition-colors">
            <Phone className="text-green-600" size={24} />
          </div>
          <div>
            <div className="font-semibold text-gray-900">Téléphone</div>
            <div className="text-green-600">450-288-5564</div>
          </div>
        </a>

        <a href="mailto:paverefect@gmail.com" className="flex items-center space-x-4 p-4 rounded-lg hover:bg-green-50 transition-colors group">
          <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition-colors">
            <Mail className="text-green-600" size={24} />
          </div>
          <div>
            <div className="font-semibold text-gray-900">Courriel</div>
            <div className="text-green-600">paverefect@gmail.com</div>
          </div>
        </a>

        <div className="flex items-center space-x-4 p-4">
          <div className="bg-green-100 p-3 rounded-full">
            <MapPin className="text-green-600" size={24} />
          </div>
          <div>
            <div className="font-semibold text-gray-900">Zone de service</div>
            <div className="text-gray-600">Salaberry-de-Valleyfield et environs</div>
          </div>
        </div>

        <div className="flex items-center space-x-4 p-4">
          <div className="bg-green-100 p-3 rounded-full">
            <Clock className="text-green-600" size={24} />
          </div>
          <div>
            <div className="font-semibold text-gray-900">Réponse rapide</div>
            <div className="text-gray-600">Estimation sous 24-48h</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
