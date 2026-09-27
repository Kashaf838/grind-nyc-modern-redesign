import React from 'react';
import { Page } from '../types';
import { STORE_INFO } from '../data/menu';
import { ArrowUpRight, MapPin, Phone, Clock, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onOpenOrderModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenOrderModal }) => {
  return (
    <footer className="bg-[#EFECE4] dark:bg-[#151514] text-[#141413] dark:text-[#F7F5F0] pt-16 pb-24 md:pb-16 border-t border-[#DFD9CE] dark:border-[#2C2B29] theme-transition font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#DFD9CE] dark:border-[#2C2B29]">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
              GRIND<span className="text-[#E64A19] dark:text-[#FF5722]">.</span>NYC
            </div>
            <p className="text-[#5C5852] dark:text-[#A39E95] max-w-sm text-sm leading-relaxed">
              Specialty espresso bar and authentic kettle-boiled bagel house located in Hell’s Kitchen, Manhattan. Good coffee, fresh food, and honest New York energy.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <a
                href="https://www.instagram.com/grind_nyc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#141413]/85 dark:text-[#F7F5F0]/85 hover:text-[#E64A19] dark:hover:text-[#FF5722] transition-colors"
                aria-label="GRIND NYC on Instagram"
              >
                <Instagram className="w-4 h-4" />
                <span>@grind_nyc</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#E64A19] dark:text-[#FF5722]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-[#5C5852] dark:text-[#A39E95] hover:text-[#141413] dark:hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="text-[#5C5852] dark:text-[#A39E95] hover:text-[#141413] dark:hover:text-white transition-colors cursor-pointer"
                >
                  Full Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('story')}
                  className="text-[#5C5852] dark:text-[#A39E95] hover:text-[#141413] dark:hover:text-white transition-colors cursor-pointer"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('visit')}
                  className="text-[#5C5852] dark:text-[#A39E95] hover:text-[#141413] dark:hover:text-white transition-colors cursor-pointer"
                >
                  Visit & Location
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('order')}
                  className="text-[#5C5852] dark:text-[#A39E95] hover:text-[#141413] dark:hover:text-white transition-colors cursor-pointer"
                >
                  Order Online
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Location & Hours */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#E64A19] dark:text-[#FF5722]">
              Visit Us
            </h4>
            <div className="space-y-2.5 text-sm text-[#5C5852] dark:text-[#A39E95]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E64A19] dark:text-[#FF5722] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#141413] dark:text-[#F7F5F0]">{STORE_INFO.address}</p>
                  <p>{STORE_INFO.neighborhood}, NY {STORE_INFO.zip}</p>
                  <p className="text-xs text-[#5C5852]/80 dark:text-[#A39E95]/80">{STORE_INFO.crossStreets}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#E64A19] dark:text-[#FF5722] shrink-0" />
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="hover:text-[#141413] dark:hover:text-white transition-colors font-medium"
                >
                  {STORE_INFO.displayPhone}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#E64A19] dark:text-[#FF5722] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#141413] dark:text-[#F7F5F0] font-medium">Open Daily</p>
                  <p className="text-xs text-[#5C5852] dark:text-[#A39E95]">7:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Action */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#E64A19] dark:text-[#FF5722]">
              Start Order
            </h4>
            <p className="text-xs text-[#5C5852] dark:text-[#A39E95] leading-relaxed">
              Skip the line with pickup or get fresh bagels delivered anywhere in Manhattan.
            </p>
            <button
              onClick={onOpenOrderModal}
              className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider bg-[#E64A19] hover:bg-[#D83A09] dark:bg-[#FF5722] dark:hover:bg-[#FF7043] text-white rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Order Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <a
              href="https://maps.google.com/?q=GRIND+NYC+602+9th+Ave+New+York+NY"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 text-xs font-semibold text-center text-[#141413] dark:text-[#F7F5F0] hover:text-[#E64A19] dark:hover:text-[#FF5722] border border-[#DFD9CE] dark:border-[#2C2B29] hover:border-[#E64A19] dark:hover:border-[#FF5722] rounded-md transition-colors block"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* Bottom Banner & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5C5852] dark:text-[#A39E95]">
          <div className="font-display font-bold tracking-wider text-[#141413] dark:text-[#F7F5F0] text-sm">
            COFFEE. BAGELS. NYC.
          </div>
          <div>
            © {new Date().getFullYear()} GRIND NYC. 602 9th Ave, New York, NY 10036.
          </div>
          <div className="flex items-center gap-3 text-[#5C5852]/80 dark:text-[#A39E95]/80">
            <span>Hell's Kitchen</span>
            <span>·</span>
            <span>Midtown West</span>
            <span>·</span>
            <span>Manhattan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
