import React, { useEffect } from 'react';
import { ORDER_PLATFORMS, STORE_INFO } from '../data/menu';
import { X, ArrowUpRight, Phone, Store, ExternalLink } from 'lucide-react';
import { MenuItem } from '../types';

interface OrderRedirectModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem?: MenuItem | null;
}

export const OrderRedirectModal: React.FC<OrderRedirectModalProps> = ({
  isOpen,
  onClose,
  selectedItem,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs transition-opacity animate-in fade-in duration-200 font-sans"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-[#F7F5F0] dark:bg-[#1A1A18] text-[#141413] dark:text-[#F7F5F0] rounded-xl shadow-2xl overflow-hidden border border-[#DFD9CE] dark:border-[#2C2B29] p-6 sm:p-8 theme-transition"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#5C5852] dark:text-[#A39E95] hover:text-[#141413] dark:hover:text-white rounded-full border border-[#DFD9CE] dark:border-[#2C2B29] hover:bg-[#EFECE4] dark:hover:bg-[#262624] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E64A19] dark:text-[#FF5722]">
            <Store className="w-3.5 h-3.5" />
            <span>Hell's Kitchen · 602 9th Ave</span>
          </div>
          <h2
            id="order-modal-title"
            className="card-title text-2xl sm:text-3xl font-bold tracking-tight text-[#141413] dark:text-[#F7F5F0]"
          >
            {selectedItem ? `Order ${selectedItem.name}` : 'How would you like your GRIND?'}
          </h2>
          <p className="text-sm text-[#5C5852] dark:text-[#A39E95] leading-relaxed">
            Choose in-store counter pickup to skip the line at 602 9th Ave, or select a preferred delivery courier across NYC.
          </p>
        </div>

        {/* Options List */}
        <div className="space-y-3 mb-6 max-h-[60vh] overflow-y-auto pr-1">
          {ORDER_PLATFORMS.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-between p-4 rounded-lg border transition-all duration-150 cursor-pointer ${
                platform.isPrimary
                  ? 'border-[#E64A19] dark:border-[#FF5722] bg-[#E64A19]/5 dark:bg-[#FF5722]/10 hover:bg-[#E64A19]/15'
                  : 'border-[#DFD9CE] dark:border-[#2C2B29] bg-white dark:bg-[#20201E] hover:border-[#E64A19] dark:hover:border-[#FF5722]'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm sm:text-base text-[#141413] dark:text-[#F7F5F0] group-hover:text-[#E64A19] dark:group-hover:text-[#FF5722] transition-colors">
                    {platform.name}
                  </span>
                  <span className="text-[10px] font-sans font-semibold uppercase text-[#8A857D] dark:text-[#706B63]">
                    · {platform.badge}
                  </span>
                </div>
                <p className="text-xs text-[#5C5852] dark:text-[#A39E95]">
                  {platform.description}
                </p>
              </div>

              <div className="shrink-0 ml-3 p-2 rounded-md bg-[#EFECE4] dark:bg-[#2C2B29] text-[#141413] dark:text-[#F7F5F0] group-hover:bg-[#E64A19] dark:group-hover:bg-[#FF5722] group-hover:text-white transition-colors">
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>

        {/* Quick Phone Call fallback */}
        <div className="pt-4 border-t border-[#DFD9CE] dark:border-[#2C2B29] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5C5852] dark:text-[#A39E95]">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#E64A19] dark:text-[#FF5722]" />
            <span>Prefer to call in your order?</span>
          </div>
          <a
            href={`tel:${STORE_INFO.phone}`}
            className="font-bold text-[#141413] dark:text-[#F7F5F0] hover:text-[#E64A19] dark:hover:text-[#FF5722] transition-colors underline underline-offset-2"
          >
            Call {STORE_INFO.displayPhone}
          </a>
        </div>
      </div>
    </div>
  );
};
