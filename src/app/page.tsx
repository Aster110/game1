import Image from "next/image";
import Script from "next/script";
import GameControls from "@/components/GameControls";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-purple-600 text-white font-bold rounded-lg w-10 h-10 flex items-center justify-center mr-3">
              MS
            </div>
            <span className="text-xl font-bold text-gray-800">Monster<span className="text-purple-600">Survivors</span></span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#game" className="nav-link text-gray-700 font-medium">Play Game</a>
            <a href="#features" className="nav-link text-gray-700 font-medium">Features</a>
            <a href="#about" className="nav-link text-gray-700 font-medium">About</a>
            <a href="#stats" className="nav-link text-gray-700 font-medium">Stats</a>
          </nav>
          
          <button className="apple-btn px-6 py-2">
            Play Now
          </button>
          
          <button className="md:hidden text-gray-700">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Monster <span className="text-yellow-300">Survivors</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
              The ultimate survival action game where you battle waves of monsters, collect power-ups, and become the last survivor!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#game" className="apple-btn bg-white text-purple-700 hover:bg-gray-100">
                <i className="fas fa-play mr-2"></i> Play Now
              </a>
              <a href="#features" className="apple-btn bg-transparent border-2 border-white hover:bg-white/10">
                <i className="fas fa-info-circle mr-2"></i> Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Game Section */}
        <section id="game" className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Play Monster Survivors</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jump right into the action! Play our thrilling survival game directly in your browser. No downloads required.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="game-frame-container">
              <iframe id="gameFrame" src="https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html" className="game-frame" allowFullScreen></iframe>
            </div>
            
            <GameControls />
          </div>
        </section>
        
        {/* Game Stats */}
        <section id="stats" className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stats-grid">
            <div className="stats-card text-center">
              <div className="text-5xl font-bold text-purple-600 mb-3">10M+</div>
              <h3 className="text-xl font-semibold mb-2">Players Worldwide</h3>
              <p className="text-gray-600">Join our global community of monster hunters and survivors</p>
            </div>
            
            <div className="stats-card text-center">
              <div className="text-5xl font-bold text-purple-600 mb-3">50+</div>
              <h3 className="text-xl font-semibold mb-2">Unique Monsters</h3>
              <p className="text-gray-600">Battle terrifying creatures with unique abilities and attack patterns</p>
            </div>
            
            <div className="stats-card text-center">
              <div className="text-5xl font-bold text-purple-600 mb-3">120+</div>
              <h3 className="text-xl font-semibold mb-2">Power-ups</h3>
              <p className="text-gray-600">Discover powerful upgrades to enhance your survival chances</p>
            </div>
          </div>
        </section>
      </main>

      {/* Add Font Awesome */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" />
    </div>
  );
}
