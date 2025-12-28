import { Users, Target, Zap } from 'lucide-react';

interface Category {
  title: string;
  mode: string;
  prize: string; // ⭐ NEW
  icon: 'squad' | 'duo' | 'clash';
  link: string;
  gradient: string;
  borderColor: string;
  glowColor: string;
}

const categories: Category[] = [
  {
    title: 'Full Map',
    mode: 'Squad',
    prize: '₹800',
    icon: 'squad',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScAztKSaJ6HrayVE22DU1fFva12deg9R6ozYwmqkx1SrvHJQA/viewform?usp=header',
    gradient: 'from-green-500/20 to-emerald-600/20',
    borderColor: 'border-green-500/30 hover:border-green-500',
    glowColor: 'hover:shadow-[0_0_40px_rgba(34,197,94,0.4)]'
  },
  {
    title: 'Full Map',
    mode: 'Duo',
    prize: '₹500',
    icon: 'duo',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdY1_UNpvA6Tj_4XXxR4gjGabGWATqajXPXEqrN3Cj_U6wXLw/viewform?usp=header',
    gradient: 'from-pink-500/20 to-rose-600/20',
    borderColor: 'border-pink-500/30 hover:border-pink-500',
    glowColor: 'hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]'
  },
  {
    title: 'Clash Squad',
    mode: '4v4',
    prize: '₹400',
    icon: 'clash',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScwT1jtNkW5IyJ592AmDqm_4sNl4RhfrNjzeW4irrzofRj5aA/viewform?usp=header',
    gradient: 'from-cyan-500/20 to-teal-600/20',
    borderColor: 'border-cyan-500/30 hover:border-cyan-500',
    glowColor: 'hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]'
  },
  {
    title: 'Clash Squad',
    mode: '3v3',
    prize: '₹300',
    icon: 'clash',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeniZyYfJuaSBFZOIDfXRIELC4TYD9Q0XwLNBQzTv7fjv5XkQ/viewform?usp=header',
    gradient: 'from-fuchsia-500/20 to-purple-600/20',
    borderColor: 'border-fuchsia-500/30 hover:border-fuchsia-500',
    glowColor: 'hover:shadow-[0_0_40px_rgba(217,70,239,0.4)]'
  },
  {
    title: 'Clash Squad',
    mode: '2v2',
    prize: '₹250',
    icon: 'clash',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLScVslHT2DCLXKzjohlvMN0ALeDeXGRF_byrScjVhOXBYJZpvA/viewform?usp=header',
    gradient: 'from-lime-500/20 to-green-600/20',
    borderColor: 'border-lime-500/30 hover:border-lime-500',
    glowColor: 'hover:shadow-[0_0_40px_rgba(132,204,22,0.4)]'
  },
  {
    title: 'Clash Squad',
    mode: '1v1',
    prize: '₹150',
    icon: 'clash',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeHOl9siJA-wmNJoaucDfuvOsv0T0ikbxAK5PsDld5WV1QZzg/viewform?usp=header',
    gradient: 'from-red-500/20 to-rose-600/20',
    borderColor: 'border-red-500/30 hover:border-red-500',
    glowColor: 'hover:shadow-[0_0_40px_rgba(239,68,68,0.4)]'
  }
];

const getIcon = (icon: string) => {
  switch (icon) {
    case 'squad':
    case 'duo':
      return <Users className="w-12 h-12" />;
    case 'clash':
      return <Target className="w-12 h-12" />;
    default:
      return <Zap className="w-12 h-12" />;
  }
};

const Categories = () => {
  return (
    <section
      id="categories"
      className="relative py-24 bg-gradient-to-b from-gray-950 via-black to-gray-950"
    >

      {/* Cyber neon mesh background */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.2),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.18),transparent_45%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.15),transparent_40%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Choose Your <span className="text-transparent bg-gradient-to-r from-pink-400 to-green-400 bg-clip-text">Battle Mode</span>
          </h2>

          <div className="h-1 w-28 bg-gradient-to-r from-pink-400 to-green-500 mx-auto rounded-full mb-6"></div>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Select your preferred tournament category and register instantly
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((category, i) => (
            <a
              key={i}
              href={category.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div
                className={`
                  relative bg-gradient-to-br ${category.gradient}
                  backdrop-blur-md border ${category.borderColor}
                  rounded-3xl p-10
                  transition-all duration-300
                  hover:-translate-y-1
                  ${category.glowColor}
                  cursor-pointer
                  h-full
                `}
              >

                {/* Online Dot */}
                <div className="absolute top-5 right-5">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full relative"></div>
                </div>

                {/* Icon */}
                <div className="flex items-center justify-center mb-6">
                  <div className={`
                    p-5 rounded-full 
                    ${category.title === 'Full Map'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-pink-500/20 text-pink-400'}
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    {getIcon(category.icon)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-white text-center mb-2 tracking-wide">
                  {category.title}
                </h3>

                {/* Mode */}
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="h-px w-10 bg-gradient-to-r from-transparent to-gray-600"></div>
                  <p className={`
                    text-3xl font-black 
                    ${category.title === 'Full Map'
                      ? 'text-green-400'
                      : 'text-pink-400'}
                  `}>
                    {category.mode}
                  </p>
                  <div className="h-px w-10 bg-gradient-to-l from-transparent to-gray-600"></div>
                </div>

                {/* ⭐ PRIZE */}
                <p className="text-center text-lg font-bold text-yellow-300 mb-6">
                  🏆 Prize: {category.prize}
                </p>

                {/* CTA */}
                <p className="text-center text-sm font-semibold text-gray-400 group-hover:text-white transition-colors tracking-wide">
                  Click to Register →
                </p>

                {/* Hover overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </a>
          ))}

        </div>

        {/* Disclaimer */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
            Each category opens a dedicated registration form. Fill it carefully with accurate details. Multiple match participation is allowed with separate entry fees.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Categories;