import { Flame, Trophy, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToCategories = () => {
    const el = document.getElementById("categories");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-900 to-gray-900 border-t border-green-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* REGISTER BUTTON — NOW SCROLLS */}
        <div className="text-center mb-12">
          <button
            onClick={scrollToCategories}
            className="inline-block group relative px-10 sm:px-16 py-5 sm:py-6 bg-gradient-to-r from-pink-500 to-pink-600 text-white text-lg sm:text-xl font-bold rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_50px_rgba(236,72,153,0.6)] active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Trophy className="w-6 h-6" />
              Register Now
              <Trophy className="w-6 h-6" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <p className="text-gray-400 mt-6 text-sm sm:text-base">
            Don't miss out on the action. Register before slots fill up!
          </p>
        </div>

        {/* MIDDLE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Flame className="w-8 h-8 text-green-400" />
              <h3 className="text-xl font-black text-white">FREE FIRE FRENZY</h3>
            </div>
            <p className="text-gray-400 text-sm">
              The ultimate college fest tournament experience
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-bold text-white mb-4">Quick Info</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Date: 29-12-2025</p>
              <p>Prize Pool: Up to ₹1300/-</p>
              <p>Multiple Categories Available</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:8885628836"
                className="flex items-center justify-center md:justify-end gap-2 text-green-400 hover:text-green-300 transition-colors text-sm group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                8885628836
              </a>
              <a
                href="tel:8374210765"
                className="flex items-center justify-center md:justify-end gap-2 text-green-400 hover:text-green-300 transition-colors text-sm group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                8374210765
              </a>
              <a
                href="https://wa.me/916281998130?text=Hi%2C%20I%20have%20a%20query%20about%20the%20Free%20Fire%20Tournament"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end gap-2 text-pink-400 hover:text-pink-300 transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2025 Free Fire Frenzy. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm text-center sm:text-right">
              Built for champions. Powered by passion.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;
