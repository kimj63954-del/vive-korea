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
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl p-10 flex flex-col items-center border border-slate-100 animate-fadeIn">
          <div className="w-20 h-20 bg-[#88C8FF] rounded-3xl flex items-center justify-center text-white text-4xl font-black mb-8 shadow-2xl shadow-[#88C8FF]/30 rotate-3">
            VK
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-1">VIBE KOREA</h1>
          <p className="text-[#88C8FF] font-bold text-sm mb-6 tracking-widest uppercase">Travel Smarter</p>
          <p className="text-slate-500 mb-10 text-center text-base leading-relaxed">
            Your essential concierge for the Korean journey. Local transit, trends, and AI-powered help.
          </p>

          <div className="w-full space-y-4">
            <button 
              onClick={handleEntry}
              className="w-full flex items-center justify-center gap-3 py-4 bg-slate-900 text-white rounded-2xl hover:bg-slate-800 transition-all font-bold shadow-xl active:scale-95"
            >
              Continue as Guest
            </button>
            <button 
              onClick={handleEntry}
              className="w-full py-4 border-2 border-slate-100 rounded-2xl hover:bg-slate-50 transition-all font-bold text-slate-600 active:scale-95"
            >
              Sign in with Google
            </button>
          </div>
          <p className="mt-8 text-xs text-slate-400 font-medium">By entering, you agree to our Terms of Service.</p>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if (!selectedCategory) {
      return (
        <div className="animate-fadeIn space-y-10 pb-20">
          <div className="relative rounded-[2rem] bg-gradient-to-br from-[#88C8FF] to-[#6fb3f0] p-8 md:p-12 overflow-hidden shadow-xl">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                Authentic <br/>Korea Awaits.
              </h2>
              <p className="text-blue-50 text-sm md:text-lg mb-8 opacity-90 max-w-sm">
                No tourist traps. Only the essentials you need to navigate like a local.
              </p>
              <button className="bg-white text-[#88C8FF] px-6 py-3 rounded-xl font-bold text-sm shadow-lg">Start Exploring</button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-xl font-black text-slate-900">Essentials</h3>
              <span className="text-xs font-bold text-[#88C8FF] bg-blue-50 px-3 py-1 rounded-full uppercase tracking-tighter">
                {CATEGORIES.length} Topics
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {CATEGORIES.map((cat) => (
                <CategoryCard
                  key={cat.id}
                  label={cat.label}
                  icon={cat.icon}
                  color={cat.color}
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
        <div className="max-w-4xl mx-auto py-4 space-y-6 pb-20">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">⭐</span>
            <h2 className="text-2xl font-black text-slate-900">My Favorites</h2>
          </div>
          {favorites.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-[2rem] border border-dashed border-slate-200">
               <span className="text-5xl block mb-4">📍</span>
               <p className="text-slate-500 font-medium">Nothing saved yet. Let's find something!</p>
               <button 
                  onClick={() => setSelectedCategory(null)}
                  className="mt-6 text-[#88C8FF] font-bold hover:underline"
               >
                 Go to Home
               </button>
            </div>
          ) : (
            <div className="grid gap-4">
              {favorites.map((favId) => {
                const isMuseum = favId === 'spot_national_museum';
                const catInfo = CATEGORIES.find(c => c.id === favId);
                return (
                  <div key={favId} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex justify-between items-center animate-fadeIn">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${catInfo?.color || 'bg-slate-100'}`}>
                        {catInfo?.icon || '🏛️'}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 text-base">
                          {isMuseum ? "National Museum of Korea" : (catInfo?.label || "Guide")}
                        </h3>
                        <p className="text-slate-400 text-xs font-medium uppercase tracking-tighter">Quick Access</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setSelectedCategory(isMuseum ? Category.ATTRACTIONS : (favId as Category))}
                        className="bg-blue-50 text-[#88C8FF] p-2 rounded-lg font-bold text-xs"
                      >
                        VIEW
                      </button>
                      <button onClick={() => toggleFavorite(favId)} className="text-red-400 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
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
        <div className="max-w-4xl mx-auto py-2 pb-24 h-[calc(100vh-140px)]">
          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100 h-full flex flex-col">
            <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#88C8FF] rounded-lg flex items-center justify-center text-xs">AI</div>
                <h3 className="font-bold text-sm tracking-tight">VIBE CONCIERGE</h3>
              </div>
            </div>
            <div className="flex-1 p-6 overflow-hidden">
              <AiConcierge />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="max-w-4xl mx-auto py-2 pb-20">
        <div className="bg-white rounded-[2rem] shadow-lg border border-slate-50 p-8">
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
      
      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-slate-100 px-8 py-4 flex justify-between items-center z-50 md:hidden">
        <button 
          onClick={() => setSelectedCategory(null)}
          className={`flex flex-col items-center gap-1 ${!selectedCategory ? 'text-[#88C8FF]' : 'text-slate-400'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-[10px] font-bold">Home</span>
        </button>
        <button 
          onClick={() => setSelectedCategory(Category.AI_CONCIERGE)}
          className={`flex flex-col items-center gap-1 ${selectedCategory === Category.AI_CONCIERGE ? 'text-[#88C8FF]' : 'text-slate-400'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span className="text-[10px] font-bold">AI Chat</span>
        </button>
        <button 
          onClick={() => setSelectedCategory(Category.FAVORITES)}
          className={`flex flex-col items-center gap-1 ${selectedCategory === Category.FAVORITES ? 'text-[#88C8FF]' : 'text-slate-400'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          <span className="text-[10px] font-bold">Favorites</span>
        </button>
      </div>
    </Layout>
  );
};

export default App;