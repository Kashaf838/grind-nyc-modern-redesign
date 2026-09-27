import React from 'react';
import { Page } from '../types';
import { STORE_INFO } from '../data/menu';
import { ArrowRight, MapPin, Coffee, Utensils, Heart, ArrowUpRight } from 'lucide-react';

interface StoryPageProps {
  onNavigate: (page: Page) => void;
  onOpenOrderModal: () => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({ onNavigate, onOpenOrderModal }) => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-16 font-sans">
      {/* 1. Hero Section */}
      <section className="relative py-24 sm:py-32 bg-[#111110] text-white overflow-hidden border-b border-[#DFD9CE] dark:border-[#2C2B29] theme-transition">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="/src/assets/images/hells_kitchen_street_cafe_1790522282897.jpg"
            alt="Hell's Kitchen GRIND NYC coffee shop exterior on 9th Ave"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111110] via-[#111110]/75 to-[#111110]/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E64A19] dark:text-[#FF5722]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Hell's Kitchen · Manhattan · NYC</span>
          </div>

          <h1 className="hero-headline text-white leading-tight">
            THE STORY OF <span className="text-[#E64A19] dark:text-[#FF5722]">GRIND.</span>
          </h1>

          <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
            Born from the rhythm of 9th Avenue: early morning commuters, local Hell's Kitchen neighbors, and an uncompromising commitment to honest coffee and traditional New York bagels.
          </p>
        </div>
      </section>

      {/* 2. Our Roots on 9th Ave */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="label-eyebrow text-[#E64A19] dark:text-[#FF5722]">
              Neighborhood Identity
            </div>
            <h2 className="section-title text-[#141413] dark:text-[#F7F5F0]">
              A CORNER OF REAL NEW YORK
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-[#5C5852] dark:text-[#A39E95] leading-relaxed">
              <p>
                In a city that never stops moving, morning rituals matter. Located at 602 9th Avenue, right between West 43rd and 44th Streets, GRIND NYC was designed to be an everyday sanctuary for Hell's Kitchen.
              </p>
              <p>
                We wanted a place where coffee isn’t rushed or watered down, where bagels have that true artisanal chew and crust, and where the counter crew greets you with genuine hospitality before your first sip.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#DFD9CE] dark:border-[#2C2B29] text-xs font-sans uppercase theme-transition">
              <div className="space-y-1">
                <span className="text-[#E64A19] dark:text-[#FF5722] font-bold">LOCATION</span>
                <p className="font-bold text-[#141413] dark:text-[#F7F5F0]">602 9TH AVENUE</p>
                <p className="text-[11px] text-[#5C5852] dark:text-[#A39E95] normal-case">Hell's Kitchen, NY 10036</p>
              </div>
              <div className="space-y-1">
                <span className="text-[#E64A19] dark:text-[#FF5722] font-bold">SCHEDULE</span>
                <p className="font-bold text-[#141413] dark:text-[#F7F5F0]">7 DAYS A WEEK</p>
                <p className="text-[11px] text-[#5C5852] dark:text-[#A39E95] normal-case">7:00 AM – 7:00 PM</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-[#DFD9CE] dark:border-[#2C2B29] theme-transition">
            <img
              src="/src/assets/images/hells_kitchen_street_cafe_1790522282897.jpg"
              alt="GRIND NYC storefront and cafe on 9th Ave"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. Coffee & Food Philosophy */}
      <section className="bg-[#EFECE4] dark:bg-[#151514] py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-y border-[#DFD9CE] dark:border-[#2C2B29] theme-transition">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="label-eyebrow text-[#E64A19] dark:text-[#FF5722]">
              The Craft
            </div>
            <h2 className="section-title text-[#141413] dark:text-[#F7F5F0]">
              COFFEE WITHOUT SHORTCUTS
            </h2>
            <p className="text-sm sm:text-base text-[#5C5852] dark:text-[#A39E95]">
              How we source beans, pull espresso, and prepare fresh breakfast every single morning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4 p-6 rounded-xl bg-white dark:bg-[#1A1A18] border border-[#DFD9CE] dark:border-[#2C2B29] shadow-xs theme-transition">
              <div className="w-10 h-10 rounded-lg bg-[#E64A19]/10 dark:bg-[#FF5722]/15 flex items-center justify-center text-[#E64A19] dark:text-[#FF5722]">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="card-title text-xl text-[#141413] dark:text-[#F7F5F0]">The Espresso Bar</h3>
              <p className="text-sm text-[#5C5852] dark:text-[#A39E95] leading-relaxed">
                Dialed in every morning for grind size, extraction time, and temperature. Whether you order a velvety flat white or an authentic cold-frothed Freddo Espresso, the balance is pristine.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-xl bg-white dark:bg-[#1A1A18] border border-[#DFD9CE] dark:border-[#2C2B29] shadow-xs theme-transition">
              <div className="w-10 h-10 rounded-lg bg-[#E64A19]/10 dark:bg-[#FF5722]/15 flex items-center justify-center text-[#E64A19] dark:text-[#FF5722]">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="card-title text-xl text-[#141413] dark:text-[#F7F5F0]">The Bagel Tradition</h3>
              <p className="text-sm text-[#5C5852] dark:text-[#A39E95] leading-relaxed">
                Boiled first in New York mineral-rich water before hitting the oven. This creates the golden crackled crust and dense, tender bite that defines genuine New York bagel culture.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-xl bg-white dark:bg-[#1A1A18] border border-[#DFD9CE] dark:border-[#2C2B29] shadow-xs theme-transition">
              <div className="w-10 h-10 rounded-lg bg-[#E64A19]/10 dark:bg-[#FF5722]/15 flex items-center justify-center text-[#E64A19] dark:text-[#FF5722]">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="card-title text-xl text-[#141413] dark:text-[#F7F5F0]">Made to Order</h3>
              <p className="text-sm text-[#5C5852] dark:text-[#A39E95] leading-relaxed">
                Eggs are cracked fresh, avocados smashed with sea salt and lemon juice, and pastries baked daily. Fast enough for morning trains, good enough to sit and savor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Neighborhood */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-[#DFD9CE] dark:border-[#2C2B29] order-2 lg:order-1 theme-transition">
            <img
              src="/src/assets/images/coffee_espresso_craft_1790522252860.jpg"
              alt="Barista pulling fresh espresso at GRIND NYC"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="label-eyebrow text-[#E64A19] dark:text-[#FF5722]">
              Community
            </div>
            <h2 className="section-title text-[#141413] dark:text-[#F7F5F0]">
              PROUDLY ROOTED IN HELL'S KITCHEN
            </h2>
            <p className="text-base sm:text-lg text-[#5C5852] dark:text-[#A39E95] leading-relaxed">
              Hell's Kitchen has a character unlike anywhere else in Manhattan: rich culinary heritage, vibrant arts community, independent storefronts, and deep neighborhood pride.
            </p>
            <p className="text-sm sm:text-base text-[#5C5852] dark:text-[#A39E95] leading-relaxed">
              We are honored to be part of the daily rhythm of 9th Avenue, fueling Broadway crews, emergency workers, students, long-time residents, and travelers arriving through Midtown.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('visit')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#141413] hover:bg-[#E64A19] dark:bg-[#F7F5F0] dark:text-[#111110] dark:hover:bg-[#FF5722] dark:hover:text-white text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer shadow-xs hover:-translate-y-0.5"
              >
                <span>Find Us on 9th Ave</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Visit Us Call to Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="section-title text-[#141413] dark:text-[#F7F5F0]">
          READY FOR YOUR MORNING GRIND?
        </h2>
        <p className="text-base sm:text-lg text-[#5C5852] dark:text-[#A39E95]">
          Join us at 602 9th Ave or order ahead online for quick counter pickup.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenOrderModal}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#E64A19] hover:bg-[#D83A09] dark:bg-[#FF5722] dark:hover:bg-[#FF7043] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:-translate-y-0.5"
          >
            <span>Order Online</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('menu')}
            className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-[#1A1A18] border border-[#DFD9CE] dark:border-[#2C2B29] text-[#141413] dark:text-[#F7F5F0] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-md hover:border-[#141413] dark:hover:border-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:-translate-y-0.5"
          >
            <span>Browse Full Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
