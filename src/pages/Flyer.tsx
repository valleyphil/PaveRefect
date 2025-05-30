
import Flyer from '../components/Flyer';

const FlyerPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 print:bg-white print:py-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 print:hidden">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Flyer de Vente - PavéRéfect
          </h1>
          <p className="text-gray-600 mb-4">
            Format 3.5" x 8.5" - Optimisé pour l'impression
          </p>
          <button 
            onClick={() => window.print()} 
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Imprimer le flyer
          </button>
        </div>
        <Flyer />
      </div>
    </div>
  );
};

export default FlyerPage;
