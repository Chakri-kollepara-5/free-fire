import { Flame, Trophy } from "lucide-react";
import ffVideo from "../video/ff.mp4"; // <-- IMPORTANT: correct import

const Hero = () => {
  const scrollToCategories = () => {
    const el = document.getElementById("categories");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* === Background Video === */}
      <video
        src={ffVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* === Dark / neon overlays for readability === */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
      <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.35),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.32),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.28),transparent_40%)]" />
      </div>

      {/* === CONTENT === */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">

        <div className="flex justify-center mb-6">
          <div className="relative">
            <Flame className="w-20 h-20 sm:w-24 sm:h-24 text-pink-500 animate-pulse" strokeWidth={1.5} />
            <div className="absolute inset-0 blur-xl bg-pink-500 opacity-40" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
          <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(34,197,94,0.6)]">
            FREE FIRE FRENZY
          </span>
        </h1>

        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-pink-500" />
          <Trophy className="w-6 h-6 text-pink-500" />
          <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-pink-500" />
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-300 mb-8">
          COLLEGE FEST TOURNAMENT
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl text-green-400 font-semibold mb-12 max-w-2xl mx-auto">
          "Compete. Win. Show your squad's power."
        </p>

        {/* Scroll to categories */}
        <button
          onClick={scrollToCategories}
          className="relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg sm:text-xl font-bold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] active:scale-95"
        >
          <span className="relative z-10">Register Now</span>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </button>

        {/* Info cards */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-800/40 backdrop-blur-sm border border-green-500/20 rounded-lg p-4">
            <p className="text-green-400 text-sm font-semibold mb-1">Date</p>
            <p className="text-white text-lg font-bold">29-12-2025</p>
          </div>
          <div className="bg-gray-800/40 backdrop-blur-sm border border-pink-500/20 rounded-lg p-4">
            <p className="text-pink-400 text-sm font-semibold mb-1">Prize Pool</p>
            <p className="text-white text-lg font-bold">₹1300/-</p>
          </div>
          <div className="bg-gray-800/40 backdrop-blur-sm border border-green-500/20 rounded-lg p-4">
            <p className="text-green-400 text-sm font-semibold mb-1">Entry Fee</p>
            <p className="text-white text-lg font-bold">Per Match</p>
          </div>
          <div className="bg-gray-800/40 backdrop-blur-sm border border-pink-500/20 rounded-lg p-4">
            <p className="text-pink-400 text-sm font-semibold mb-1">Venue</p>
            <p className="text-white text-lg font-bold">Remotely (Anywhere)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
