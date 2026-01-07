import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  onBack?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, title, onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-slate-100 h-14 md:h-16 flex items-center shadow-sm">
        <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            {onBack ? (
              <button 
                onClick={onBack} 
                className="p-1 -ml-1 text-slate-800 flex items-center gap-1 font-bold text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
                BACK
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#88C8FF] flex items-center justify-center text-white font-black text-sm">VK</div>
                <h1 className="font-black text-slate-900 tracking-tighter text-base">VIBE KOREA</h1>
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black text-[#88C8FF] bg-blue-50 px-2 py-0.5 rounded-full uppercase">EN</span>
            <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200"></div>
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 py-6">
        <div className="max-w-7xl mx-auto h-full">
          {children}
        </div>
      </main>

      <footer className="hidden md:block bg-white border-t border-slate-100 py-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">
          <span>© 2024 VIBE KOREA</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Safety</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;