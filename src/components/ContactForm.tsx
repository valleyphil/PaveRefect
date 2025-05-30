
import { useState, useEffect } from 'react';

interface FormData {
  nom: string;
  email: string;
  telephone: string;
  projet: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    email: '',
    telephone: '',
    projet: '',
    message: ''
  });

  // Focus automatique sur le champ nom si l'URL contient #contact
  useEffect(() => {
    if (window.location.hash === '#contact') {
      const nomField = document.getElementById('nom-complet');
      if (nomField) {
        setTimeout(() => {
          nomField.focus();
        }, 500); // Petit délai pour s'assurer que le scroll est terminé
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Créer le lien mailto avec les informations du formulaire
    const subject = encodeURIComponent(`Demande d'estimation - ${formData.projet}`);
    const body = encodeURIComponent(`
Bonjour,

Je souhaite obtenir une estimation gratuite pour mon projet de pavé uni.

Nom: ${formData.nom}
Téléphone: ${formData.telephone}
Type de projet: ${formData.projet}

Message:
${formData.message}

Cordialement,
${formData.nom}
    `);
    
    window.location.href = `mailto:paverefect@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Obtenir une estimation
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="nom-complet" className="block text-sm font-medium text-gray-700 mb-2">
              Nom complet *
            </label>
            <input
              type="text"
              id="nom-complet"
              name="nom"
              required
              value={formData.nom}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
            />
          </div>
          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
              Téléphone *
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              required
              value={formData.telephone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Courriel
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
          />
        </div>

        <div>
          <label htmlFor="projet" className="block text-sm font-medium text-gray-700 mb-2">
            Type de projet *
          </label>
          <select
            id="projet"
            name="projet"
            required
            value={formData.projet}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
          >
            <option value="">Sélectionnez votre projet</option>
            <option value="Trottoir/Allée piétonne">Trottoir/Allée piétonne</option>
            <option value="Entrée de garage">Entrée de garage</option>
            <option value="Patio/Terrasse">Patio/Terrasse</option>
            <option value="Stationnement">Stationnement</option>
            <option value="Autre">Autre</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Décrivez votre projet
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Décrivez l'état actuel de votre pavé uni, la superficie approximative et vos attentes..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent transition-colors"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105 font-semibold text-lg"
        >
          Envoyer ma demande d'estimation
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
