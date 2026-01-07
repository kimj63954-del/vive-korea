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
      className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white border border-slate-100 shadow-sm active:scale-95 transition-all duration-200 group relative overflow-hidden h-32"
    >
      <div className={`absolute top-0 left-0 w-1 h-full opacity-30 ${color}`}></div>
      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{icon}</div>
      <span className="text-xs font-black text-slate-800 text-center leading-tight uppercase tracking-tight">{label}</span>
    </button>
  );
};

export default CategoryCard;