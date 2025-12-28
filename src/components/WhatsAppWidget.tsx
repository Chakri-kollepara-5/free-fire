import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
  return (
    <a
      href="https://wa.me/916281998130?text=Hi%2C%20I%20have%20a%20query%20about%20the%20Free%20Fire%20Tournament"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>

        <div className="relative bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(34,197,94,0.8)] active:scale-95">
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2} />
        </div>

        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
      </div>

      <div className="absolute bottom-full right-0 mb-3 hidden group-hover:block animate-fade-in">
        <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap text-sm font-semibold border border-green-500/30">
          Need Help? Chat with us!
          <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-gray-900"></div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppWidget;
