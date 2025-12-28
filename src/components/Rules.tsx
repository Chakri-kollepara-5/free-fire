import { Shield, AlertCircle, CheckCircle } from 'lucide-react';

const Rules = () => {
  const clashSquadRules = [
    'No Gloo Wall breaking',
    'No character skills',
    'No loadouts',
    'No drops',
    'No wall-jump',
    'Player level must be greater than Level 20',
    'No gun skins',
    'Prize pool is per match',
    'PC players are NOT allowed',
    'Players must follow all rules',
    'Violations = immediate kick from room',
    'Late entry NOT accepted',
    'Rules & guidelines are STRICT',
    'Payment is done after every match',
    'A player can play multiple matches (cost separate per match)',
    'Player must fill the Google Form correctly',
    'If details are wrong, organizers are NOT responsible for money issues',
    'Refunds ONLY for valid reasons'
  ];

  const fullMapRules = [
    'No character skills',
    'No gun skins',
    'Player level must be greater than Level 20',
    'No loadouts',
    'Prize pool is per match',
    'PC players NOT allowed',
    'No late entry',
    'Strict rules & guidelines apply',
    'Payment is done after every match',
    'A player can play multiple matches (cost separate)',
    'Player must fill the Google Form correctly',
    'If details are wrong, organizers are NOT responsible for money issues',
    'Refunds ONLY for valid reasons'
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-pink-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Tournament <span className="text-pink-400">Rules</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-green-500 mx-auto rounded-full mb-6"></div>
          <p className="text-red-400 text-lg font-semibold flex items-center justify-center gap-2">
            <AlertCircle className="w-5 h-5" />
            Rules are STRICT and violations will result in immediate disqualification
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-pink-900/20 to-red-900/20 backdrop-blur-md border border-pink-500/30 rounded-2xl p-8 hover:border-pink-500/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(236,72,153,0.2)]">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-pink-500/20 rounded-lg">
                <Shield className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Clash Squad <span className="text-pink-400">Rules</span>
              </h3>
            </div>

            <div className="space-y-3">
              {clashSquadRules.map((rule, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors">
                    {rule}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-red-400 text-sm font-semibold text-center">
                Breaking any rule = Immediate disqualification
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-md border border-green-500/30 rounded-2xl p-8 hover:border-green-500/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Full Map <span className="text-green-400">Rules</span>
              </h3>
            </div>

            <div className="space-y-3">
              {fullMapRules.map((rule, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors">
                    {rule}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="text-red-400 text-sm font-semibold text-center">
                Breaking any rule = Immediate disqualification
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-gray-800/60 to-gray-900/60 backdrop-blur-md border border-yellow-500/30 rounded-2xl p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-xl font-bold text-white mb-3">Important Notes</h4>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Read all rules carefully before registering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Ensure your Google Form details are 100% accurate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Screenshots/recordings may be required for disputes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Organizers' decision is final in all matters</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
