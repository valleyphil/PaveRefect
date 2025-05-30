
const ContactCallToAction = () => {
  return (
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
  );
};

export default ContactCallToAction;
