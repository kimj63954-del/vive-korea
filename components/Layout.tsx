
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  onBack?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, title, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Website Header */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {onBack && (
              <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center text-[#88C8FF] font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            )}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => !onBack && window.location.reload()}>
              <div className="w-10 h-10 rounded-xl bg-[#88C8FF] flex items-center justify-center text-white font-bold text-lg shadow-[#88C8FF]/20 shadow-lg">
                VK
              </div>
              <div className="flex flex-col -space-y-1 hidden sm:flex">
                <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">VIBE KOREA</h1>
                <span className="text-[10px] text-[#88C8FF] font-bold tracking-tighter">vivekorea.co.kr</span>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-[#88C8FF] transition-colors">Vibe Check</a>
            <a href="#" className="hover:text-[#88C8FF] transition-colors">Essentials</a>
            <a href="#" className="hover:text-[#88C8FF] transition-colors">Explore</a>
          </nav>

          <div className="flex items-center gap-3">
             <button className="text-sm font-medium text-gray-600 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">EN</button>
             <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#88C8FF] to-[#6fb3f0] shadow-md"></div>
          </div>
        </div>
      </header>

      {/* Hero / Content Wrapper */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {children}
        </div>
      </main>

      {/* Website Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#88C8FF] flex items-center justify-center text-white font-bold">VK</div>
              <span className="font-bold text-xl">VIBE KOREA</span>
            </div>
            <p className="text-gray-500 text-sm mb-2">Your essential gateway to experiencing the authentic vibe of modern Korea.</p>
            <p className="text-[#88C8FF] font-bold text-sm underline decoration-2 underline-offset-4 cursor-pointer">vivekorea.co.kr</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-900">Essentials</h4>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>Transport & T-Money</li>
              <li>K-Beauty Insider</li>
              <li>K-Fashion Map</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-900">About</h4>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>Our Vision</li>
              <li>Travel Tips</li>
              <li>Safety Guide</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-900">Community</h4>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-50 text-center text-xs text-gray-400">
          © 2024 VIBE KOREA (vivekorea.co.kr). Built for the modern traveler.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
