
import { Wrench, Shield, Leaf, Clock } from 'lucide-react';

const services = [
  {
    icon: <Wrench className="text-green-600" size={40} />,
    title: "Relevage et Nivellement",
    description: "Nous relevons méticuleusement vos pavés existants pour corriger les affaissements et créer une surface parfaitement plane."
  },
  {
    icon: <Shield className="text-green-600" size={40} />,
    title: "Nettoyage Haute Pression",
    description: "Élimination complète des taches, mousses et salissures grâce à notre équipement professionnel de nettoyage."
  },
  {
    icon: <Leaf className="text-green-600" size={40} />,
    title: "Jointement Polymère",
    description: "Application de sable polymère haute qualité pour des joints durables qui résistent aux intempéries et aux mauvaises herbes."
  },
  {
    icon: <Clock className="text-green-600" size={40} />,
    title: "Scellant",
    description: "Application de scellant protecteur pour redonner une aspect neuf a votre pavé."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Services Spécialisés
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pourquoi remplacer quand on peut restaurer? Notre solution complète transforme vos pavés existants 
            en une surface comme neuve, alliant esthétique, sécurité et durabilité.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Une Alternative Écoresponsable
          </h3>
          <p className="text-lg mb-6 max-w-4xl mx-auto">
            En réutilisant vos pavés existants, nous réduisons l'impact environnemental tout en vous 
            offrant des économies substantielles par rapport à un remplacement complet.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">2 ans</div>
              <div className="text-green-100">Garantie nivellement</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50%</div>
              <div className="text-green-100">Dépôt maximum</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-green-100">Satisfaction client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
