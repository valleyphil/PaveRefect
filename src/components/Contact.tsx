
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';
import ContactCallToAction from './ContactCallToAction';

const Contact = () => {
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
          <ContactForm />

          {/* Informations de contact */}
          <div className="space-y-8">
            <ContactInfo />
            <SocialLinks />
            <ContactCallToAction />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
