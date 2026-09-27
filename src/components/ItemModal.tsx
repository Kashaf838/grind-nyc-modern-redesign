import React, { useEffect } from 'react';
import { MenuItem } from '../types';
import { X, ArrowUpRight, Sparkles } from 'lucide-react';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onOrderNow: (item: MenuItem) => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, onClose, onOrderNow }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs transition-opacity animate-in fade-in duration-200 font-sans"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-item-title"
    >
      <div
        className="relative w-full max-w-lg bg-[#F7F5F0] dark:bg-[#1A1A18] text-[#141413] dark:text-[#F7F5F0] rounded-xl shadow-2xl overflow-hidden border border-[#DFD9CE] dark:border-[#2C2B29] theme-transition"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[#F7F5F0]/90 dark:bg-[#1A1A18]/90 hover:bg-[#EFECE4] dark:hover:bg-[#262624] text-[#141413] dark:text-[#F7F5F0] rounded-full border border-[#DFD9CE] dark:border-[#2C2B29] transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Product Media */}
        <div className="relative aspect-4/3 w-full bg-[#EFECE4] dark:bg-[#262624] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.classList.add('flex', 'items-center', 'justify-center', 'p-8');
                const text = document.createElement('div');
                text.className = 'font-display font-bold text-xl text-[#141413]/40 dark:text-white/40 tracking-wider';
                text.innerText = item.name;
                parent.appendChild(text);
              }
            }}
          />
          {item.popular && (
            <div className="absolute bottom-3 left-3 bg-[#111110]/90 text-white backdrop-blur-xs px-2.5 py-1 text-xs font-sans font-semibold uppercase tracking-wider rounded-sm flex items-center gap-1.5 border border-white/10">
              <Sparkles className="w-3 h-3 text-[#E64A19] dark:text-[#FF5722]" />
              <span>Hell's Kitchen Favorite</span>
            </div>
          )}
        </div>

        {/* Details Content */}
        <div className="p-6 space-y-4">
          {/* Metadata Header */}
          <div className="flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-[#8A857D] dark:text-[#706B63]">
            <span>{item.categoryLabel}</span>
            {item.temperature && (
              <>
                <span aria-hidden="true">·</span>
                <span>Served {item.temperature}</span>
              </>
            )}
            <span aria-hidden="true">·</span>
            <span>Hell's Kitchen</span>
          </div>

          <div className="flex items-start justify-between gap-4">
            <h2
              id="modal-item-title"
              className="card-title text-2xl font-bold tracking-tight text-[#141413] dark:text-[#F7F5F0]"
            >
              {item.name}
            </h2>
            <div className="text-xl font-bold font-sans tabular-nums text-[#141413] dark:text-[#F7F5F0] shrink-0">
              ${item.price.toFixed(2)}
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#5C5852] dark:text-[#A39E95] leading-relaxed">
            {item.description}
          </p>

          {/* Dietary details */}
          {item.dietary && item.dietary.length > 0 && (
            <div className="pt-2 border-t border-[#DFD9CE] dark:border-[#2C2B29] flex items-center gap-2 text-xs text-[#5C5852] dark:text-[#A39E95]">
              <span className="font-semibold text-[#141413] dark:text-[#F7F5F0]">Dietary:</span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {item.dietary.map((d, i) => (
                  <React.Fragment key={d}>
                    <span>{d}</span>
                    {i < (item.dietary?.length || 0) - 1 && <span aria-hidden="true">·</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-4 flex items-center gap-3">
            <button
              onClick={() => {
                onOrderNow(item);
                onClose();
              }}
              className="flex-1 py-3 px-4 bg-[#E64A19] hover:bg-[#D83A09] dark:bg-[#FF5722] dark:hover:bg-[#FF7043] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:-translate-y-0.5"
            >
              <span>Order for Pickup or Delivery</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#141413] dark:text-[#F7F5F0] hover:bg-[#EFECE4] dark:hover:bg-[#262624] border border-[#DFD9CE] dark:border-[#2C2B29] rounded-md transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
