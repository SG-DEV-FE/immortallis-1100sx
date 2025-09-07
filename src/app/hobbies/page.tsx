import gameData from '../../data/game.json';
import miniatureData from '../../data/miniatures.json';
import rigData from '../../data/rig.json';

export default function Hobbies() {
  const { downtimeGaming } = gameData;
  const { MINIS } = miniatureData;
  const { PC } = rigData;

  return (
    <main className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-amber-100 mb-4">
            Hobbies & Interests
          </h1>
          <p className="text-xl text-warm-300 max-w-3xl mx-auto">
            When I am not coding, you will find me immersed in gaming worlds, 
            painting miniatures, or building the latest Gundam model.
          </p>
        </div>

        {/* Gaming Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-200 mb-8 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-amber-400 to-orange-500 mr-4 rounded"></div>
            Gaming Platforms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downtimeGaming.map((platform) => (
              <div key={platform.id} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={platform.gamingAvatar} 
                    alt={platform.gamingSource}
                    className="w-12 h-12 rounded-lg mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-amber-100">{platform.gamingSource}</h3>
                    <p className="text-warm-300">Gamertag: {platform.gamingTAG}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-amber-200 font-semibold mb-2">Current Games:</h4>
                  {platform.usualGames.map((game, index) => (
                    <span 
                      key={index}
                      className="inline-block px-3 py-1 bg-warm-700/50 text-amber-300 text-sm rounded-full mr-2 mb-2"
                    >
                      {game.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PC Build Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-200 mb-8 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-amber-400 to-orange-500 mr-4 rounded"></div>
            Gaming Rig
          </h2>
          <div className="glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(PC[0]).map(([component, specification]) => (
                <div key={component} className="flex justify-between items-center border-b border-warm-700/30 pb-2">
                  <span className="text-amber-200 font-medium capitalize">
                    {component.replace(/([A-Z])/g, ' $1').trim()}:
                  </span>
                  <span className="text-warm-300 text-sm text-right">{specification}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Miniatures Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-200 mb-8 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-amber-400 to-orange-500 mr-4 rounded"></div>
            Miniature Painting & Collecting
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {MINIS.map((miniature) => (
              <div key={miniature.id} className="glass-card p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={miniature.miniLogo} 
                    alt={miniature.miniUniverse}
                    className="w-16 h-16 object-contain mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-amber-100">{miniature.miniUniverse}</h3>
                    <p className="text-warm-400 text-sm">{miniature.miniPublisher}</p>
                    {miniature.logoCopyright && (
                      <p className="text-warm-500 text-xs">{miniature.logoCopyright}</p>
                    )}
                  </div>
                </div>
                <p className="text-warm-300 text-sm mb-4 leading-relaxed">
                  {miniature.miniDescription}
                </p>
                <div>
                  <h4 className="text-amber-200 font-semibold mb-2">Notable Models:</h4>
                  <div className="space-y-1">
                    {miniature.miniNotables.map((notable, index) => (
                      <span 
                        key={index}
                        className="inline-block px-3 py-1 bg-warm-700/50 text-amber-300 text-sm rounded-full mr-2 mb-2"
                      >
                        {notable.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-200 mb-8 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-amber-400 to-orange-500 mr-4 rounded"></div>
            Why These Hobbies Matter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-100 mb-3">Problem Solving</h3>
              <p className="text-warm-300 text-sm">
                Gaming and building complex miniature armies develops strategic thinking and problem-solving skills that translate directly to software development.
              </p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-100 mb-3">Attention to Detail</h3>
              <p className="text-warm-300 text-sm">
                Miniature painting requires incredible precision and attention to detail - skills essential for writing clean, maintainable code.
              </p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-100 mb-3">Community</h3>
              <p className="text-warm-300 text-sm">
                Gaming and hobby communities foster collaboration and knowledge sharing, much like the developer community I thrive in.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
