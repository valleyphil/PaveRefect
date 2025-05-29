
const beforeAfterImages = [
  {
    before: "/lovable-uploads/36e45d6e-4328-44a6-992a-47e0c3b9e831.png",
    title: "Réfection de trottoir"
  },
  {
    before: "/lovable-uploads/786baf83-c418-49a3-bc4e-ad29e328f2d2.png", 
    title: "Restauration d'allée"
  },
  {
    before: "/lovable-uploads/cc530a77-5b93-4a9e-af2b-4e2068985ad5.png",
    title: "Rénovation de patio"
  },
  {
    before: "/lovable-uploads/d4087906-ba88-41f0-987c-0c18c2d8c74e.png",
    title: "Entrée de garage"
  },
  {
    before: "/lovable-uploads/c41d0a2d-8f46-45a1-b75e-40f62e215388.png",
    title: "Allée résidentielle"
  }
];

const Gallery = () => {
  return (
    <section id="galerie" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Transformations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez la qualité de notre travail à travers ces exemples de restauration 
            complète de pavé uni dans la région de Valleyfield.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beforeAfterImages.map((image, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                <img 
                  src={image.before} 
                  alt={image.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <p className="text-sm text-gray-200">Avant / Après</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 font-semibold inline-flex items-center space-x-2"
          >
            <span>Voir votre projet transformé</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
