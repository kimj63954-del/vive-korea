
import React from 'react';

interface CategoryCardProps {
  label: string;
  icon: string;
  color: string;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ label, icon, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden relative"
    >
      {/* Background Accent */}
      <div className={`absolute top-0 right-0 w-24 h-24 rounded-full opacity-5 -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform ${color}`}></div>
      
      <div className={`w-20 h-20 rounded-2xl ${color} flex items-center justify-center text-4xl mb-6 shadow-lg shadow-gray-100 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <span className="text-base font-bold text-slate-800 text-center leading-tight group-hover:text-[#88C8FF] transition-colors">{label}</span>
      <p className="text-[10px] uppercase font-bold text-slate-400 mt-3 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Explore</p>
    </button>
  );
};

export default CategoryCard;
