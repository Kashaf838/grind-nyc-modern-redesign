import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenOrderModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Menu', page: 'menu' },
    { label: 'Our Story', page: 'story' },
    { label: 'Visit', page: 'visit' },
    { label: 'Order', page: 'order' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full theme-transition ${
          scrolled
            ? 'bg-[#F7F5F0]/95 dark:bg-[#111110]/95 backdrop-blur-md border-b border-[#DFD9CE] dark:border-[#2C2B29] py-3 shadow-xs'
            : 'bg-[#F7F5F0] dark:bg-[#111110] border-b border-[#DFD9CE]/60 dark:border-[#2C2B29]/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Distinctive GRIND Brand Logo Zone */}
          <button
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#E64A19] rounded-sm"
            aria-label="GRIND NYC Home"
          >
            <div className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#141413] dark:text-[#F7F5F0] group-hover:text-[#E64A19] dark:group-hover:text-[#FF5722] transition-colors leading-none">
                GRIND<span className="text-[#E64A19] dark:text-[#FF5722]">.</span>NYC
              </span>
              <span className="font-sans text-[9px] font-semibold tracking-widest uppercase text-[#5C5852] dark:text-[#A39E95] mt-1 hidden sm:block">
                HELL'S KITCHEN · 602 9TH AVE
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Clean medium weight, refined tracking) */}
          <nav
            className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium font-sans"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`relative py-1 cursor-pointer transition-colors whitespace-nowrap ${
                  currentPage === item.page
                    ? 'text-[#141413] dark:text-[#F7F5F0] font-semibold'
                    : 'text-[#5C5852] dark:text-[#A39E95] hover:text-[#141413] dark:hover:text-[#F7F5F0]'
                }`}
              >
                {item.label}
                {currentPage === item.page && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#E64A19] dark:bg-[#FF5722] rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: Actions including Desktop Theme Toggle & Dominant Order CTA */}
          <div className="flex items-center gap-3">
            {/* Desktop Theme Toggle: [ ☀ ] [ 🌙 ] */}
            <div className="hidden sm:flex items-center">
              <ThemeToggle variant="desktop" />
            </div>

            {/* Dominant Primary CTA */}
            <button
              onClick={onOpenOrderModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold font-sans uppercase tracking-wider text-white bg-[#E64A19] hover:bg-[#D83A09] dark:bg-[#FF5722] dark:hover:bg-[#FF7043] rounded-md transition-all duration-200 cursor-pointer whitespace-nowrap shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Order Online</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#141413] dark:text-[#F7F5F0] rounded-md border border-[#DFD9CE] dark:border-[#2C2B29] hover:bg-[#EFECE4] dark:hover:bg-[#1A1A18] cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Overlay Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[65px] z-50 bg-[#F7F5F0] dark:bg-[#111110] text-[#141413] dark:text-[#F7F5F0] md:hidden px-6 py-6 flex flex-col justify-between border-b border-[#DFD9CE] dark:border-[#2C2B29] overflow-y-auto theme-transition"
          role="dialog"
          aria-modal="true"
        >
          <div className="space-y-6">
            <div className="text-xs uppercase font-sans font-semibold tracking-wider text-[#5C5852] dark:text-[#A39E95] pb-2 border-b border-[#DFD9CE] dark:border-[#2C2B29]">
              Hell's Kitchen · 602 9th Ave · NYC
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-2xl font-display font-bold py-2 ${
                  currentPage === 'home'
                    ? 'text-[#E64A19] dark:text-[#FF5722]'
                    : 'text-[#141413] dark:text-[#F7F5F0]'
                }`}
              >
                Home
              </button>
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left text-2xl font-display font-bold py-2 ${
                    currentPage === item.page
                      ? 'text-[#E64A19] dark:text-[#FF5722]'
                      : 'text-[#141413] dark:text-[#F7F5F0]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Theme Toggle Section */}
            <div className="pt-4 pb-2 border-t border-[#DFD9CE] dark:border-[#2C2B29]">
              <ThemeToggle variant="mobile" />
            </div>
          </div>

          <div className="pt-6 border-t border-[#DFD9CE] dark:border-[#2C2B29] space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-bold font-sans uppercase tracking-wider text-white bg-[#E64A19] hover:bg-[#D83A09] dark:bg-[#FF5722] dark:hover:bg-[#FF7043] rounded-md transition-colors shadow-sm"
            >
              <span>Order Online Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-between text-xs text-[#5C5852] dark:text-[#A39E95] pt-1 font-sans">
              <span>Open Daily: 7:00 AM – 7:00 PM</span>
              <a
                href="tel:+16467558073"
                className="font-semibold text-[#141413] dark:text-white underline underline-offset-2"
              >
                (646) 755-8073
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
