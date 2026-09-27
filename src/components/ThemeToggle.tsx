import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  variant?: 'desktop' | 'mobile';
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  variant = 'desktop',
  className = '',
}) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  if (variant === 'mobile') {
    return (
      <div className={`space-y-2 ${className}`}>
        <div className="flex items-center justify-between font-sans">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#5C5852] dark:text-[#A39E95]">
            Appearance
          </span>
          <span className="text-xs font-semibold text-[#141413] dark:text-[#F7F5F0]">
            {isDark ? 'Dark Theme' : 'Light Theme'}
          </span>
        </div>

        <div
          role="radiogroup"
          aria-label="Theme mode switcher"
          className="grid grid-cols-2 p-1 rounded-lg bg-[#EFECE4] dark:bg-[#1A1A18] border border-[#DFD9CE] dark:border-[#2C2B29] theme-transition font-sans"
        >
          {/* Light button */}
          <button
            type="button"
            role="radio"
            aria-checked={!isDark}
            aria-label="Switch to Light Theme"
            onClick={() => setTheme('light')}
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer min-h-[44px] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#E64A19] ${
              !isDark
                ? 'bg-white text-[#141413] shadow-xs font-bold'
                : 'text-[#5C5852] hover:text-[#141413] dark:text-[#A39E95] dark:hover:text-white'
            }`}
          >
            <Sun className={`w-4 h-4 ${!isDark ? 'text-amber-500 fill-amber-500/20' : 'text-current'}`} />
            <span>Light</span>
          </button>

          {/* Dark button */}
          <button
            type="button"
            role="radio"
            aria-checked={isDark}
            aria-label="Switch to Dark Theme"
            onClick={() => setTheme('dark')}
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer min-h-[44px] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FF5722] ${
              isDark
                ? 'bg-[#262624] text-[#F7F5F0] shadow-xs font-bold border border-[#42403C]'
                : 'text-[#5C5852] hover:text-[#141413] dark:text-[#A39E95] dark:hover:text-white'
            }`}
          >
            <Moon className={`w-4 h-4 ${isDark ? 'text-amber-300 fill-amber-300/20' : 'text-current'}`} />
            <span>Dark</span>
          </button>
        </div>
      </div>
    );
  }

  // Desktop Switch: [ ☀ ] [ 🌙 ]
  return (
    <div
      role="radiogroup"
      aria-label="Color theme switcher"
      className={`inline-flex items-center p-0.5 rounded-full bg-[#EFECE4] dark:bg-[#1A1A18] border border-[#DFD9CE] dark:border-[#2C2B29] shadow-xs theme-transition ${className}`}
    >
      {/* Light Option Button */}
      <button
        type="button"
        role="radio"
        aria-checked={!isDark}
        aria-label="Switch to Light Mode"
        title="Light Mode"
        onClick={() => setTheme('light')}
        className={`relative flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#E64A19] ${
          !isDark
            ? 'bg-white text-amber-500 shadow-xs'
            : 'text-[#5C5852] hover:text-[#141413] dark:text-[#A39E95] dark:hover:text-white'
        }`}
      >
        <Sun className={`w-3.5 h-3.5 ${!isDark ? 'fill-amber-500/20' : ''}`} />
      </button>

      {/* Dark Option Button */}
      <button
        type="button"
        role="radio"
        aria-checked={isDark}
        aria-label="Switch to Dark Mode"
        title="Dark Mode"
        onClick={() => setTheme('dark')}
        className={`relative flex items-center justify-center w-7 h-7 rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FF5722] ${
          isDark
            ? 'bg-[#262624] text-amber-300 border border-[#42403C] shadow-xs'
            : 'text-[#5C5852] hover:text-[#141413] dark:text-[#A39E95] dark:hover:text-white'
        }`}
      >
        <Moon className={`w-3.5 h-3.5 ${isDark ? 'fill-amber-300/20' : ''}`} />
      </button>
    </div>
  );
};
