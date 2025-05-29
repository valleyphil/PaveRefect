
import { MapPin, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Expertise Locale à 
              <span className="text-green-600"> Valleyfield</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              PavéRéfect est votre partenaire de confiance pour tous vos projets de restauration 
              de pavé uni dans la région de Salaberry-de-Valleyfield et ses environs. Notre 
              département spécialisé se concentre exclusivement sur les projets résidentiels.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nous croyons fermement qu'une approche respectueuse de l'environnement et de votre 
              tranquillité est possible. C'est pourquoi nous privilégions la restauration plutôt 
              que le remplacement, vous offrant ainsi une solution économique et durable.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="text-green-600" size={28} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Service Local</h3>
                <p className="text-gray-600 text-sm">Valleyfield et environs</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="text-green-600" size={28} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Résidentiel</h3>
                <p className="text-gray-600 text-sm">Spécialisé maisons</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-green-600" size={28} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Qualité</h3>
                <p className="text-gray-600 text-sm">Résultats garantis</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Pourquoi Choisir PavéRéfect?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-green-600 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    <strong>Tarification transparente</strong> - Prix au pi² sans surprise
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-green-600 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    <strong>Dépôt limité</strong> - Maximum 50% du projet
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-green-600 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    <strong>Garantie étendue</strong> - 2 ans sur le nivellement
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-green-600 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">
                    <strong>Approche écoresponsable</strong> - Réutilisation des pavés
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
