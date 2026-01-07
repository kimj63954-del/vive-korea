
import React, { useState } from 'react';
import { GuideSection, Category } from '../types';

interface GuideContentProps {
  data: GuideSection;
  isItemFavorite: (id: string) => boolean;
  onToggleFavorite: (id: string) => void;
  categoryId: Category;
}

const GuideContent: React.FC<GuideContentProps> = ({ data, isItemFavorite, onToggleFavorite, categoryId }) => {
  const [showMuseumPrices, setShowMuseumPrices] = useState(false);

  const handleAppLink = (appName: string, deepLink: string) => {
    if (deepLink === "#") return;
    if (deepLink.startsWith('http')) {
        window.open(deepLink, "_blank");
        return;
    }
    window.location.href = deepLink;
  };

  const isAttractions = categoryId === Category.ATTRACTIONS;
  const museumId = 'spot_national_museum';
  const isMuseumFav = isItemFavorite(museumId);
  const isCategoryFav = isItemFavorite(categoryId);

  return (
    <div className="animate-fadeIn pb-10">
      <div className="flex justify-between items-start mb-6">
        <p className="text-gray-600 text-lg leading-relaxed pr-8">{data.description}</p>
        {!isAttractions && (
          <button 
            onClick={() => onToggleFavorite(categoryId)}
            className={`p-3 rounded-2xl transition-all shadow-sm ${
              isCategoryFav ? 'bg-red-50 text-red-500' : 'bg-slate-100 text-slate-400'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isCategoryFav ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        )}
      </div>

      {isAttractions && (
        <div className="mb-8 space-y-4">
          <div className="relative">
            <button 
              onClick={() => setShowMuseumPrices(!showMuseumPrices)}
              className={`w-full flex items-center justify-between p-6 bg-white border ${showMuseumPrices ? 'border-[#88C8FF]' : 'border-slate-100'} rounded-3xl shadow-md hover:shadow-lg transition-all group`}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl group-hover:scale-110 transition-transform">🏛️</span>
                <div className="text-left">
                  <h3 className="text-lg font-extrabold text-slate-900 leading-tight">National Museum of Korea</h3>
                  <p className="text-[#88C8FF] text-xs font-bold uppercase tracking-widest mt-1">Check Ticket Prices • 국립중앙박물관</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(museumId);
                  }}
                  className={`p-2.5 rounded-xl transition-all ${isMuseumFav ? 'bg-red-50 text-red-500' : 'bg-slate-100 text-slate-300'}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill={isMuseumFav ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-[#88C8FF] transition-transform duration-300 ${showMuseumPrices ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
          </div>

          {showMuseumPrices && (
            <div className="animate-fadeIn p-6 bg-slate-50 border border-slate-100 rounded-3xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-slate-800">General Entrance</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-black rounded uppercase">Free</span>
                  </div>
                  <p className="text-xs text-slate-500">Includes Permanent Exhibitions, Children's Museum, etc.</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-slate-800">Special Exhibitions</span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-black rounded uppercase">Paid</span>
                  </div>
                  <p className="text-xs text-slate-500">Only for specific temporary gallery exhibitions.</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#88C8FF]/10 rounded-lg text-[#88C8FF] font-bold text-xs">📍</div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Ticket Booth</p>
                    <p className="text-xs text-slate-500">In front of Special Gallery 1. (특별전시실 1 앞 매표소)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#88C8FF]/10 rounded-lg text-[#88C8FF] font-bold text-xs">⏰</div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Sales Hours</p>
                    <p className="text-xs text-slate-500">Until 30 mins before closing. (종료 30분 전까지)</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="bg-blue-50 rounded-2xl p-5 mb-8">
        <h3 className="text-blue-800 font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          Pro Tips
        </h3>
        <ul className="space-y-3">
          {data.tips.map((tip, i) => (
            <li key={i} className="flex gap-3 text-blue-900 text-sm leading-relaxed">
              <span className="text-[#88C8FF] font-bold">•</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      <h3 className="font-bold text-gray-800 mb-4 px-1">Essential Apps</h3>
      <div className="grid grid-cols-2 gap-4">
        {data.apps.map((app, i) => (
          <button
            key={i}
            onClick={() => handleAppLink(app.name, app.link)}
            className="flex items-center gap-3 p-4 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:bg-gray-50 transition-all text-left group"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform">{app.icon}</span>
            <div className="flex flex-col">
              <span className="font-bold text-gray-800 text-sm leading-tight">{app.name}</span>
              <span className="text-[10px] text-[#88C8FF] font-bold uppercase tracking-wider mt-1">Open</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GuideContent;
