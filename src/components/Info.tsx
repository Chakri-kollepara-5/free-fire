import { Calendar, MapPin, DollarSign, Trophy, Phone } from 'lucide-react';

const Info = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Tournament <span className="text-green-400">Details</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md border border-green-500/30 rounded-2xl p-8 hover:border-green-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6 group-hover:bg-green-500/30 transition-colors">
              <Calendar className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Date</h3>
            <p className="text-2xl font-black text-green-400">29-12-2025</p>
          </div>

          <div className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md border border-green-500/30 rounded-2xl p-8 hover:border-green-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6 group-hover:bg-green-500/30 transition-colors">
              <DollarSign className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Entry Fee</h3>
            <p className="text-xl font-bold text-green-400">Per Match Basis</p>
          </div>

          <div className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md border border-pink-500/30 rounded-2xl p-8 hover:border-pink-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:scale-105 md:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-center w-16 h-16 bg-pink-500/20 rounded-full mb-6 group-hover:bg-pink-500/30 transition-colors">
              <Trophy className="w-8 h-8 text-pink-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Prize Pool upto</h3>
            <p className="text-3xl font-black text-transparent bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text">
              Up to ₹1300/-
            </p>
            <p className="text-sm text-gray-400 mt-2">Per Match</p>
          </div>

          <div className="group bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md border border-green-500/30 rounded-2xl p-8 hover:border-green-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:scale-105 md:col-span-2">
            <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6 group-hover:bg-green-500/30 transition-colors">
              <Phone className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Contact Us</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:8885628836" className="text-lg font-bold text-green-400 hover:text-green-300 transition-colors">
                8885628836
              </a>
              <span className="hidden sm:inline text-gray-600">/</span>
              <a href="tel:8374210765" className="text-lg font-bold text-green-400 hover:text-green-300 transition-colors">
                8374210765
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
