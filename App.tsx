
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import CategoryCard from './components/CategoryCard';
import GuideContent from './components/GuideContent';
import AiConcierge from './components/AiConcierge';
import { CATEGORIES, GUIDE_DATA } from './constants';
import { Category } from './types';

const App: React.FC = () => {
  const [isJoined, setIsJoined] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('vk_favorites_v2');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('vk_favorites_v2', JSON.stringify(favorites));
  }, [favorites]);

  const handleEntry = () => {
    setIsJoined(true);
  };

  const toggleFavorite = (itemId: string) => {
    setFavorites(prev => 
      prev.includes(itemId) ? prev.filter(f => f !== itemId) : [...prev, itemId]
    );
  };

  if (!isJoined) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center border border-slate-100">
          <div className="w-16 h-16 bg-[#88C8FF] rounded-2xl flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-xl shadow-[#88C8FF]/20 rotate-3">
            VK
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-1">VIBE KOREA</h1>
          <p className="text-[#88C8FF] font-bold text-sm mb-4 tracking-tight">vivekorea.co.kr</p>
          <p className="text-slate-500 mb-8 text-center text-sm leading-relaxed">
            The most essential companion for your journey. Explore the local vibe or join our community.
          </p>

          <div className="w-full space-y-3">
            <button 
              onClick={handleEntry}
              className="w-full flex items-center justify-center gap-3 py-3.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all font-semibold text-slate-700 shadow-sm active:scale-[0.98]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Sign in with Google
            </button>
            <button 
              onClick={handleEntry}
              className="w-full py-3.5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all font-bold shadow-lg shadow-slate-200 active:scale-[0.98]"
            >
              Continue as Guest
            </button>
          </div>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if (!selectedCategory) {
      return (
        <div className="animate-fadeIn space-y-12">
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#88C8FF] via-[#7ab8f0] to-[#a3d4ff] p-12 overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold mb-6 tracking-widest uppercase">
                VIBE KOREA 2024
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
                Catch the Vibe. <br/> Master the Essential.
              </h2>
              <p className="text-white/90 text-sm font-bold mb-6 tracking-wide">Official Home: vivekorea.co.kr</p>
              <p className="text-blue-50 text-lg md:text-xl mb-10 opacity-90 font-light leading-relaxed">
                Everything you actually need to navigate Korea—from secret fashion spots to real-time beauty sales.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-[#88C8FF] px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-blue-50 transition-colors">Start Planning</button>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-2xl font-bold text-slate-900">Your Travel Hub</h3>
              <div className="flex gap-2 text-[#88C8FF] font-semibold text-sm">
                <span>{favorites.length} Favorites</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {CATEGORIES.map((cat) => (
                <CategoryCard
                  key={cat.id}
                  label={cat.label}
                  icon={cat.icon}
                  color={cat.id === Category.FAVORITES && favorites.length === 0 ? 'bg-slate-200' : cat.color}
                  onClick={() => setSelectedCategory(cat.id)}
                />
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (selectedCategory === Category.FAVORITES) {
      return (
        <div className="max-w-4xl mx-auto py-6 space-y-8">
          <div className="flex items-center gap-3">
            <span className="text-3xl">⭐</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Your Favorites</h2>
          </div>
          {favorites.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-[2rem] border border-dashed border-slate-200">
               <span className="text-5xl block mb-4">🏜️</span>
               <p className="text-slate-500">You haven't saved any spots or guides yet.</p>
               <button 
                  onClick={() => setSelectedCategory(null)}
                  className="mt-6 text-[#88C8FF] font-bold hover:underline"
               >
                 Explore Categories
               </button>
            </div>
          ) : (
            <div className="space-y-6">
              {favorites.map((favId) => {
                // Find what this favId refers to (either a category or a sub-item like Museum)
                const isMuseum = favId === 'spot_national_museum';
                const catInfo = CATEGORIES.find(c => c.id === favId);
                
                return (
                  <div key={favId} className="bg-white rounded-[2rem] shadow-md border border-slate-50 p-8 flex justify-between items-center group">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">
                        {isMuseum ? "National Museum of Korea" : (catInfo?.label || "General Guide")}
                      </h3>
                      <p className="text-slate-500 text-sm mt-1">
                        {isMuseum ? "Tickets & Pricing Info" : "Essential Travel Information"}
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <button 
                        onClick={() => setSelectedCategory(isMuseum ? Category.ATTRACTIONS : (favId as Category))}
                        className="bg-slate-50 hover:bg-[#88C8FF] hover:text-white text-[#88C8FF] px-6 py-3 rounded-xl font-bold text-sm transition-all"
                      >
                        Open
                      </button>
                      <button onClick={() => toggleFavorite(favId)} className="text-red-400 p-3 hover:bg-red-50 rounded-xl transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      );
    }

    if (selectedCategory === Category.AI_CONCIERGE) {
      return (
        <div className="max-w-4xl mx-auto py-4">
          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100 h-[700px] flex flex-col">
            <div className="p-6 bg-[#88C8FF] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">🤖</div>
                <h3 className="font-bold">VK Concierge</h3>
              </div>
            </div>
            <div className="flex-1 p-8 overflow-hidden">
              <AiConcierge />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="max-w-4xl mx-auto py-6">
        <div className="bg-white rounded-[2.5rem] shadow-lg border border-slate-50 p-10">
          <GuideContent 
            data={GUIDE_DATA[selectedCategory]} 
            isItemFavorite={(id) => favorites.includes(id)}
            onToggleFavorite={toggleFavorite}
            categoryId={selectedCategory}
          />
        </div>
      </div>
    );
  };

  return (
    <Layout 
      title={selectedCategory ? selectedCategory : "Home"} 
      onBack={selectedCategory ? () => setSelectedCategory(null) : undefined}
    >
      {renderContent()}
    </Layout>
  );
};

export default App;
