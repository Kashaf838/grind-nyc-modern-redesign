import React from 'react';
import { Page } from '../types';
import { STORE_INFO } from '../data/menu';
import { Utensils, ShoppingBag, MapPin, Phone } from 'lucide-react';

interface MobileBottomBarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onOpenOrderModal: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  currentPage,
  onNavigate,
  onOpenOrderModal,
}) => {
  return (
    <aside
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#F7F5F0]/95 dark:bg-[#111110]/95 backdrop-blur-md border-t border-[#DFD9CE] dark:border-[#2C2B29] px-3 py-1.5 shadow-lg max-h-[64px] theme-transition font-sans"
      aria-label="Quick mobile actions"
    >
      <div className="grid grid-cols-4 gap-1 items-center max-w-md mx-auto">
        {/* Menu */}
        <button
          onClick={() => onNavigate('menu')}
          className={`flex flex-col items-center justify-center py-1 rounded-md min-h-[44px] cursor-pointer transition-colors ${
            currentPage === 'menu'
              ? 'text-[#E64A19] dark:text-[#FF5722]'
              : 'text-[#5C5852] dark:text-[#A39E95] hover:text-[#141413] dark:hover:text-white'
          }`}
          aria-label="View Menu"
        >
          <Utensils className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Menu</span>
        </button>

        {/* Order Online */}
        <button
          onClick={onOpenOrderModal}
          className="flex flex-col items-center justify-center py-1 bg-[#E64A19] dark:bg-[#FF5722] text-white rounded-md min-h-[44px] cursor-pointer shadow-xs active:scale-98 transition-transform"
          aria-label="Order Online"
        >
          <ShoppingBag className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Order</span>
        </button>

        {/* Directions */}
        <a
          href="https://maps.google.com/?q=GRIND+NYC+602+9th+Ave+New+York+NY"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 rounded-md min-h-[44px] text-[#5C5852] dark:text-[#A39E95] hover:text-[#141413] dark:hover:text-white transition-colors"
          aria-label="Get Directions to 602 9th Ave"
        >
          <MapPin className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Visit</span>
        </a>

        {/* Call */}
        <a
          href={`tel:${STORE_INFO.phone}`}
          className="flex flex-col items-center justify-center py-1 rounded-md min-h-[44px] text-[#5C5852] dark:text-[#A39E95] hover:text-[#141413] dark:hover:text-white transition-colors"
          aria-label={`Call ${STORE_INFO.displayPhone}`}
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Call</span>
        </a>
      </div>
    </aside>
  );
};
