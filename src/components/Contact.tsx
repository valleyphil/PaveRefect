
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    projet: '',
    message: ''
  });

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
    
    window.location.href = `mailto:valleyphil125@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Demandez Votre Estimation Gratuite
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transformez vos pavés en un investissement intelligent! Contactez-nous dès aujourd'hui 
            pour discuter de votre projet et obtenir une estimation personnalisée.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Obtenir une estimation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="nom"
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

          {/* Informations de contact */}
          <div className="space-y-8">
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

                <a href="mailto:valleyphil125@gmail.com" className="flex items-center space-x-4 p-4 rounded-lg hover:bg-green-50 transition-colors group">
                  <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition-colors">
                    <Mail className="text-green-600" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Courriel</div>
                    <div className="text-green-600">valleyphil125@gmail.com</div>
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

            <div className="bg-green-600 text-white rounded-2xl p-8 text-center">
              <h4 className="text-xl font-bold mb-4">Urgence ou questions?</h4>
              <p className="mb-6">N'hésitez pas à nous appeler directement pour une réponse immédiate.</p>
              <a 
                href="tel:450-288-5564" 
                className="bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-block"
              >
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
