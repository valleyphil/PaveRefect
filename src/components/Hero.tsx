import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block">
                  Pavé<span className="text-black">R</span><span className="text-green-600">é</span>fect
                </span>
                <span className="text-green-600 block">Philippe Jean</span>
                
                <span className="block mt-4">Votre pavé uni</span>
                <span className="text-green-600 block">retrouvé, durable</span>
                et écoresponsable
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Redonnez vie à vos trottoirs et stationnements en pavé uni grâce à notre expertise locale à 
                <span className="font-semibold text-green-600"> Salaberry-de-Valleyfield</span> et ses environs.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                <span className="text-gray-700">Garantie de 2 ans sur le nivellement</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                <span className="text-gray-700">Tarification claire au pi² - Dépôt 50% max</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                <span className="text-gray-700">Solution rapide et économique</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 font-semibold text-lg flex items-center justify-center space-x-2 group"
              >
                <span>Estimation gratuite</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href="tel:450-288-5564" 
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 font-semibold text-lg text-center"
              >
                450-288-5564
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/36e45d6e-4328-44a6-992a-47e0c3b9e831.png" 
                alt="Transformation pavé uni - Avant et Après" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
