import React, { useState } from 'react';
import { Page, MenuItem } from '../types';
import { STORE_INFO, MENU_ITEMS } from '../data/menu';
import { STORE_RATING, REVIEWS_DATA } from '../data/reviews';
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Phone,
  Clock,
  Instagram,
  Star,
  CheckCircle2,
  Utensils
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onSelectItem: (item: MenuItem) => void;
  onOpenOrderModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectItem,
  onOpenOrderModal,
}) => {
  // Category filter for the signature menu section
  const [activeCategory, setActiveCategory] = useState<'all' | 'coffee' | 'bagels' | 'breakfast' | 'pastries'>('all');

  // Filter items for The Grind signature menu preview
  const signatureItems = MENU_ITEMS.filter((item) => {
    if (activeCategory === 'all') return item.popular;
    if (activeCategory === 'coffee') return item.category === 'coffee-hot' || item.category === 'coffee-cold';
    if (activeCategory === 'bagels') return item.category === 'bagels';
    if (activeCategory === 'breakfast') return item.category === 'breakfast';
    if (activeCategory === 'pastries') return item.category === 'bakery';
    return true;
  }).slice(0, 6);

  // Coffee highlight items
  const coffeeHighlights = MENU_ITEMS.filter(
    (item) => item.category === 'coffee-hot' || item.category === 'coffee-cold'
  );

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 4. HERO SECTION */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-[#DFD9CE] dark:border-[#2C2B29] theme-transition">
        {/* Background Image with Measured Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_grind_nyc_1790522235581.jpg"
            alt="Toasted New York everything bagel and iced latte at GRIND NYC"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-102 transition-transform duration-1000 ease-out"
          />
          {/* Measured Scrim for WCAG AA Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/95 via-[#111110]/75 to-[#111110]/50" />
        </div>

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white space-y-6">
          {/* Location indicator */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-sans font-semibold tracking-wider uppercase text-white/90 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
            <MapPin className="w-3.5 h-3.5 text-[#E64A19] dark:text-[#FF5722]" />
            <span>HELL'S KITCHEN · 602 9TH AVE · NYC</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline text-balance">
            COFFEE. BAGELS. <span className="text-[#E64A19] dark:text-[#FF5722]">NYC.</span>
          </h1>

          {/* Supporting Text */}
          <p className="max-w-xl mx-auto text-base sm:text-lg md:text-xl text-white/90 font-normal leading-relaxed text-balance font-sans">
            Good coffee, fresh bagels, and a little New York energy. Hand-boiled kettle bagels and craft espresso right in the heart of Hell’s Kitchen.
          </p>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onOpenOrderModal}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#E64A19] hover:bg-[#D83A09] dark:bg-[#FF5722] dark:hover:bg-[#FF7043] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-md transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer font-sans"
            >
              <span>Order Online</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('menu')}
              className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-md backdrop-blur-xs transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer font-sans"
            >
              <span>Explore The Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trust / Hours sub-line */}
          <div className="pt-6 flex items-center justify-center gap-3 text-xs font-sans font-medium tracking-wide text-white/75">
            <span>OPEN DAILY 7AM – 7PM</span>
            <span>·</span>
            <span>COUNTER PICKUP & DELIVERY</span>
          </div>
        </div>
      </section>

      {/* 5. QUICK ACTION BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-24 relative z-20">
        <div className="bg-white dark:bg-[#1A1A18] rounded-xl shadow-lg border border-[#DFD9CE] dark:border-[#2C2B29] p-3 sm:p-4 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 theme-transition">
          <button
            onClick={onOpenOrderModal}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#E64A19] hover:bg-[#D83A09] dark:bg-[#FF5722] dark:hover:bg-[#FF7043] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-xs hover:-translate-y-0.5"
          >
            <span>Order Online</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('menu')}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#EFECE4] dark:bg-[#262624] border border-[#DFD9CE] dark:border-[#2C2B29] text-[#141413] dark:text-[#F7F5F0] font-semibold text-xs sm:text-sm uppercase tracking-wider hover:border-[#141413] dark:hover:border-white transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
          >
            <Utensils className="w-4 h-4 text-[#E64A19] dark:text-[#FF5722]" />
            <span>View Menu</span>
          </button>

          <a
            href="https://maps.google.com/?q=GRIND+NYC+602+9th+Ave+New+York+NY"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#EFECE4] dark:bg-[#262624] border border-[#DFD9CE] dark:border-[#2C2B29] text-[#141413] dark:text-[#F7F5F0] font-semibold text-xs sm:text-sm uppercase tracking-wider hover:border-[#141413] dark:hover:border-white transition-all duration-200 hover:-translate-y-0.5"
          >
            <MapPin className="w-4 h-4 text-[#E64A19] dark:text-[#FF5722]" />
            <span>Get Directions</span>
          </a>

          <a
            href={`tel:${STORE_INFO.phone}`}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#EFECE4] dark:bg-[#262624] border border-[#DFD9CE] dark:border-[#2C2B29] text-[#141413] dark:text-[#F7F5F0] font-semibold text-xs sm:text-sm uppercase tracking-wider hover:border-[#141413] dark:hover:border-white transition-all duration-200 hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 text-[#E64A19] dark:text-[#FF5722]" />
            <span>Call GRIND</span>
          </a>
        </div>
      </section>

      {/* 6. SIGNATURE MENU SECTION ("THE GRIND") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#DFD9CE] dark:border-[#2C2B29] theme-transition">
          <div className="space-y-2">
            <div className="label-eyebrow text-[#E64A19] dark:text-[#FF5722]">
              Signature Offerings
            </div>
            <h2 className="section-title text-[#141413] dark:text-[#F7F5F0]">
              THE GRIND
            </h2>
            <p className="text-sm sm:text-base text-[#5C5852] dark:text-[#A39E95] max-w-lg leading-relaxed">
              Freshly boiled New York kettle bagels, artisan roasted coffee, and Hell's Kitchen morning staples.
            </p>
          </div>

          {/* Category Tabs - Functional Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-[#EFECE4] dark:bg-[#1A1A18] border border-[#DFD9CE] dark:border-[#2C2B29] rounded-lg overflow-x-auto no-scrollbar theme-transition">
            {(
              [
                { id: 'all', label: 'All Favorites' },
                { id: 'coffee', label: 'Coffee & Drinks' },
                { id: 'bagels', label: 'Bagels' },
                { id: 'breakfast', label: 'Breakfast' },
                { id: 'pastries', label: 'Pastries' },
              ] as const
            ).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white dark:bg-[#262624] text-[#141413] dark:text-[#F7F5F0] shadow-xs'
                    : 'text-[#5C5852] dark:text-[#A39E95] hover:text-[#141413] dark:hover:text-[#F7F5F0]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-10">
          {signatureItems.map((item) => (
            <article
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="group bg-white dark:bg-[#1A1A18] rounded-xl overflow-hidden border border-[#DFD9CE] dark:border-[#2C2B29] hover:border-[#141413] dark:hover:border-[#F7F5F0] transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 shadow-xs hover:shadow-md theme-transition"
            >
              <div>
                {/* Media Container */}
                <div className="aspect-4/3 relative overflow-hidden bg-[#EFECE4] dark:bg-[#262624]">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {item.popular && (
                    <div className="absolute top-3 left-3 bg-[#111110]/90 text-white backdrop-blur-xs px-2.5 py-0.5 text-[10px] font-sans font-semibold uppercase tracking-wider rounded-sm border border-white/10">
                      Popular
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-xs font-sans uppercase tracking-wider text-[#8A857D] dark:text-[#706B63] font-semibold">
                    <span>{item.categoryLabel}</span>
                    <span className="font-bold text-sm text-[#141413] dark:text-[#F7F5F0] tabular-nums">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  <h3 className="card-title text-[#141413] dark:text-[#F7F5F0] group-hover:text-[#E64A19] dark:group-hover:text-[#FF5722] transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C5852] dark:text-[#A39E95] line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs font-semibold border-t border-[#DFD9CE]/60 dark:border-[#2C2B29]">
                <span className="text-[#E64A19] dark:text-[#FF5722] group-hover:underline underline-offset-2">
                  View Details & Order
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#5C5852] dark:text-[#A39E95] group-hover:text-[#E64A19] dark:group-hover:text-[#FF5722] transition-colors" />
              </div>
            </article>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="pt-12 text-center">
          <button
            onClick={() => onNavigate('menu')}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#141413] hover:bg-[#E64A19] dark:bg-[#F7F5F0] dark:text-[#111110] dark:hover:bg-[#FF5722] dark:hover:text-white text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-md transition-all duration-200 cursor-pointer shadow-xs hover:-translate-y-0.5"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 8. "NEW YORK IN EVERY BITE" SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Large Editorial Image */}
          <div className="lg:col-span-6 relative aspect-4/3 lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border border-[#DFD9CE] dark:border-[#2C2B29] theme-transition">
            <img
              src="/src/assets/images/signature_bagel_spread_1790522264134.jpg"
              alt="Artisanal New York kettle bagels with Nova lox spread at GRIND NYC"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#111110]/90 backdrop-blur-md text-white p-4 rounded-xl border border-white/10 hidden sm:block">
              <p className="font-display font-bold text-sm">602 9TH AVENUE · HELL’S KITCHEN</p>
              <p className="text-xs text-white/75 font-sans mt-0.5">Boiled in New York water, baked fresh every morning at dawn.</p>
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="label-eyebrow text-[#E64A19] dark:text-[#FF5722]">
              Neighborhood Roots
            </div>
            <h2 className="section-title text-[#141413] dark:text-[#F7F5F0]">
              NEW YORK IN EVERY BITE.
            </h2>
            <div className="space-y-4 text-[#5C5852] dark:text-[#A39E95] text-base sm:text-lg leading-relaxed">
              <p>
                GRIND NYC was born out of a simple conviction: New York mornings move fast, but great coffee and authentic kettle bagels should never be compromised.
              </p>
              <p>
                Nestled on 9th Avenue between 43rd and 44th Streets, we welcome early risers, theater artists, neighborhood regulars, and Midtown workers with freshly roasted espresso, authentic Greek Freddo coffee, and warm seeded bagels with generous spreads.
              </p>
            </div>

            {/* Editorial Info Points */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#DFD9CE] dark:border-[#2C2B29] text-xs font-sans uppercase tracking-wider text-[#141413] dark:text-[#F7F5F0] theme-transition">
              <div className="space-y-1">
                <span className="text-[#E64A19] dark:text-[#FF5722] font-bold">01.</span>
                <p className="font-bold">KETTLE-BOILED</p>
                <p className="text-[11px] text-[#5C5852] dark:text-[#A39E95] normal-case">Authentic NYC chew and crisp seeded crust.</p>
              </div>
              <div className="space-y-1">
                <span className="text-[#E64A19] dark:text-[#FF5722] font-bold">02.</span>
                <p className="font-bold">SPECIALTY ESPRESSO</p>
                <p className="text-[11px] text-[#5C5852] dark:text-[#A39E95] normal-case">Dialed-in daily on commercial La Marzocco.</p>
              </div>
              <div className="space-y-1">
                <span className="text-[#E64A19] dark:text-[#FF5722] font-bold">03.</span>
                <p className="font-bold">HELL'S KITCHEN</p>
                <p className="text-[11px] text-[#5C5852] dark:text-[#A39E95] normal-case">Proud 9th Avenue community destination.</p>
              </div>
              <div className="space-y-1">
                <span className="text-[#E64A19] dark:text-[#FF5722] font-bold">04.</span>
                <p className="font-bold">FAST PICKUP</p>
                <p className="text-[11px] text-[#5C5852] dark:text-[#A39E95] normal-case">Skip the line online, hot in your hands.</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('story')}
                className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-[#141413] dark:text-[#F7F5F0] hover:text-[#E64A19] dark:hover:text-[#FF5722] transition-colors cursor-pointer group"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. COFFEE FEATURE ("YOUR MORNING, DONE RIGHT.") */}
      <section className="bg-[#EFECE4] dark:bg-[#151514] text-[#141413] dark:text-[#F7F5F0] py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-y border-[#DFD9CE] dark:border-[#2C2B29] theme-transition">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#DFD9CE] dark:border-[#2C2B29]">
            <div className="space-y-2">
              <div className="label-eyebrow text-[#E64A19] dark:text-[#FF5722]">
                Espresso & Cold Brew Craft
              </div>
              <h2 className="section-title">
                YOUR MORNING, DONE RIGHT.
              </h2>
              <p className="text-sm sm:text-base text-[#5C5852] dark:text-[#A39E95] max-w-lg leading-relaxed">
                From precision double shots to cold, frothed Freddo Espresso and 18-hour cold brew, we take craft seriously without the pretension.
              </p>
            </div>

            <button
              onClick={() => onNavigate('menu')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E64A19] dark:text-[#FF5722] hover:underline transition-colors cursor-pointer"
            >
              <span>Explore All Coffees</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Horizontal Product Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coffeeHighlights.slice(0, 6).map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectItem(item)}
                className="group relative bg-white dark:bg-[#1A1A18] rounded-xl p-5 border border-[#DFD9CE] dark:border-[#2C2B29] hover:border-[#E64A19] dark:hover:border-[#FF5722] transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 shadow-xs theme-transition"
              >
                <div className="space-y-4">
                  <div className="aspect-4/3 rounded-lg overflow-hidden relative bg-[#EFECE4] dark:bg-[#262624]">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 right-2.5 bg-black/80 backdrop-blur-xs px-2 py-0.5 rounded-sm text-[10px] font-sans font-semibold uppercase text-white">
                      {item.temperature}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h3 className="card-title text-[#141413] dark:text-[#F7F5F0] group-hover:text-[#E64A19] dark:group-hover:text-[#FF5722] transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-sans text-sm font-bold text-[#E64A19] dark:text-[#FF5722] tabular-nums">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-xs text-[#5C5852] dark:text-[#A39E95] line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-[#DFD9CE]/60 dark:border-[#2C2B29] flex items-center justify-between text-xs text-[#5C5852] dark:text-[#A39E95] group-hover:text-[#141413] dark:group-hover:text-white transition-colors">
                  <span>Customize & Order</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:text-[#E64A19] dark:group-hover:text-[#FF5722] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. BAGEL FEATURE ("THE NYC CLASSIC.") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="label-eyebrow text-[#E64A19] dark:text-[#FF5722]">
              Authentic Kettle Boiled
            </div>
            <h2 className="section-title text-[#141413] dark:text-[#F7F5F0]">
              THE NYC CLASSIC.
            </h2>
            <p className="text-[#5C5852] dark:text-[#A39E95] text-base sm:text-lg leading-relaxed">
              Nothing beats a true New York bagel. Boiled in local water to create that unmistakable chewy interior, then baked golden with a crisp seed shell.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-lg bg-white dark:bg-[#1A1A18] border border-[#DFD9CE] dark:border-[#2C2B29] flex items-start gap-3 theme-transition">
                <CheckCircle2 className="w-5 h-5 text-[#E64A19] dark:text-[#FF5722] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-sm text-[#141413] dark:text-[#F7F5F0]">The Grind All Time New Yorker</h4>
                  <p className="text-xs text-[#5C5852] dark:text-[#A39E95]">Warm pastrami, cage-free eggs, and melted sharp NY cheddar on toasted garlic bagel.</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white dark:bg-[#1A1A18] border border-[#DFD9CE] dark:border-[#2C2B29] flex items-start gap-3 theme-transition">
                <CheckCircle2 className="w-5 h-5 text-[#E64A19] dark:text-[#FF5722] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-sm text-[#141413] dark:text-[#F7F5F0]">Nova Lox Delight</h4>
                  <p className="text-xs text-[#5C5852] dark:text-[#A39E95]">Whipped scallion cream cheese, cured Nova Scotia salmon, capers, and sweet red onion.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('menu')}
                className="px-6 py-3 bg-[#E64A19] hover:bg-[#D83A09] dark:bg-[#FF5722] dark:hover:bg-[#FF7043] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-md transition-colors inline-flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Explore Bagels</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-[#DFD9CE] dark:border-[#2C2B29] order-1 lg:order-2 theme-transition">
            <img
              src="/src/assets/images/bagel_cream_cheese_1790523252266.jpg"
              alt="New York kettle bagel with scallion shmear"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 11. FOOD + PASTRIES EDITORIAL GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 pb-12">
          <div className="label-eyebrow text-[#E64A19] dark:text-[#FF5722]">
            Bakery & Kitchen
          </div>
          <h2 className="section-title text-[#141413] dark:text-[#F7F5F0]">
            CRAFTED FRESH AT DAWN
          </h2>
          <p className="text-sm sm:text-base text-[#5C5852] dark:text-[#A39E95]">
            Every butter croissant, crumb muffin, and breakfast egg plate is prepared fresh daily to start your morning right.
          </p>
        </div>

        {/* Asymmetric Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div
            onClick={() => onSelectItem(MENU_ITEMS.find((m) => m.id === 'butter-croissant') || MENU_ITEMS[0])}
            className="md:col-span-7 relative group rounded-2xl overflow-hidden aspect-16/9 md:aspect-auto md:h-96 cursor-pointer border border-[#DFD9CE] dark:border-[#2C2B29] theme-transition"
          >
            <img
              src="/src/assets/images/butter_croissant_1790523316906.jpg"
              alt="Artisanal French Butter Croissant"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs font-sans uppercase font-bold tracking-wider text-[#E64A19] dark:text-[#FF5722]">Pastry Kitchen</span>
              <h3 className="font-display text-2xl font-bold">Artisan Butter Croissant</h3>
              <p className="text-xs sm:text-sm text-white/80 line-clamp-1 font-sans">Flaky French butter layers baked fresh every dawn.</p>
            </div>
          </div>

          <div
            onClick={() => onSelectItem(MENU_ITEMS.find((m) => m.id === 'freddo-cappuccino') || MENU_ITEMS[1])}
            className="md:col-span-5 relative group rounded-2xl overflow-hidden aspect-16/9 md:aspect-auto md:h-96 cursor-pointer border border-[#DFD9CE] dark:border-[#2C2B29] theme-transition"
          >
            <img
              src="/src/assets/images/freddo_cappuccino_1790523157706.jpg"
              alt="Cold Frothed Freddo Cappuccino"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs font-sans uppercase font-bold tracking-wider text-[#E64A19] dark:text-[#FF5722]">Specialty Bar</span>
              <h3 className="font-display text-2xl font-bold">Freddo Cappuccino</h3>
              <p className="text-xs sm:text-sm text-white/80 line-clamp-1 font-sans">Whipped cold non-fat milk foam over chilled Greek espresso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. SOCIAL PROOF ("LOVED BY NYC.") */}
      <section className="bg-[#EFECE4] dark:bg-[#151514] py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 border-y border-[#DFD9CE] dark:border-[#2C2B29] theme-transition">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header & Rating Summary */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#DFD9CE] dark:border-[#2C2B29]">
            <div className="space-y-2">
              <div className="label-eyebrow text-[#E64A19] dark:text-[#FF5722]">
                Community Verified
              </div>
              <h2 className="section-title text-[#141413] dark:text-[#F7F5F0]">
                LOVED BY NYC.
              </h2>
              <p className="text-sm sm:text-base text-[#5C5852] dark:text-[#A39E95] max-w-lg">
                Honest feedback from Hell’s Kitchen locals, Broadway crews, and coffee aficionados.
              </p>
            </div>

            {/* Scorecard */}
            <div className="flex items-center gap-4 bg-white dark:bg-[#1A1A18] p-4 rounded-xl border border-[#DFD9CE] dark:border-[#2C2B29] shadow-xs theme-transition">
              <div className="text-3xl font-display font-extrabold text-[#141413] dark:text-[#F7F5F0] tabular-nums">
                {STORE_RATING.score}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="text-xs text-[#5C5852] dark:text-[#A39E95] font-sans">
                  {STORE_RATING.totalReviews} verified reviews
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS_DATA.slice(0, 3).map((review) => (
              <article
                key={review.id}
                className="bg-white dark:bg-[#1A1A18] p-6 rounded-xl border border-[#DFD9CE] dark:border-[#2C2B29] flex flex-col justify-between space-y-4 shadow-xs theme-transition"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#5C5852] dark:text-[#A39E95]">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span>{review.date}</span>
                  </div>
                  <p className="text-sm text-[#141413]/90 dark:text-[#F7F5F0]/90 italic leading-relaxed">
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DFD9CE]/60 dark:border-[#2C2B29] text-xs font-sans">
                  <p className="font-bold text-[#141413] dark:text-[#F7F5F0]">{review.author}</p>
                  <p className="text-[#5C5852] dark:text-[#A39E95]">{review.location}</p>
                  {review.favoriteItem && (
                    <p className="text-[#E64A19] dark:text-[#FF5722] font-semibold pt-1">
                      Favorite: {review.favoriteItem}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 13. INSTAGRAM / SOCIAL SECTION ("FOLLOW THE GRIND") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-[#DFD9CE] dark:border-[#2C2B29] theme-transition">
          <div>
            <div className="label-eyebrow text-[#E64A19] dark:text-[#FF5722]">
              Instagram Community
            </div>
            <h2 className="section-title text-[#141413] dark:text-[#F7F5F0]">
              FOLLOW THE GRIND
            </h2>
            <p className="text-sm text-[#5C5852] dark:text-[#A39E95]">
              Daily morning pulls, fresh bagel drops, and 9th Avenue life.
            </p>
          </div>
          <a
            href="https://www.instagram.com/grind_nyc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#141413] dark:bg-[#F7F5F0] text-white dark:text-[#111110] text-xs font-bold uppercase tracking-wider hover:bg-[#E64A19] dark:hover:bg-[#FF5722] dark:hover:text-white transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span>@grind_nyc · Follow Along</span>
          </a>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
          {[
            {
              title: 'Morning Rush on 9th',
              src: '/src/assets/images/hells_kitchen_street_cafe_1790522282897.jpg',
            },
            {
              title: 'Espresso Dial-In',
              src: '/src/assets/images/coffee_espresso_craft_1790522252860.jpg',
            },
            {
              title: 'Lox & Seeded Bagel',
              src: '/src/assets/images/signature_bagel_spread_1790522264134.jpg',
            },
            {
              title: 'Ceremonial Matcha & Cold Drinks',
              src: '/src/assets/images/matcha_latte_glass_1790523190084.jpg',
            },
          ].map((item, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/grind_nyc"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-[#EFECE4] dark:bg-[#262624] border border-[#DFD9CE] dark:border-[#2C2B29] theme-transition"
            >
              <img
                src={item.src}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-white text-center">
                <Instagram className="w-6 h-6 mb-1 text-[#E64A19] dark:text-[#FF5722]" />
                <p className="font-display font-bold text-xs">{item.title}</p>
                <span className="text-[10px] text-white/75 font-sans">@grind_nyc</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 14. LOCATION SECTION ("MEET US IN HELL'S KITCHEN.") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white dark:bg-[#1A1A18] rounded-2xl border border-[#DFD9CE] dark:border-[#2C2B29] p-6 sm:p-10 lg:p-12 shadow-xl theme-transition">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="label-eyebrow text-[#E64A19] dark:text-[#FF5722]">
                Hell's Kitchen Destination
              </div>
              <h2 className="section-title text-[#141413] dark:text-[#F7F5F0]">
                MEET US IN HELL'S KITCHEN.
              </h2>
              <p className="text-[#5C5852] dark:text-[#A39E95] text-base leading-relaxed">
                Just steps from the Theater District and 42nd St Port Authority subway lines. Stop by for your morning grind or grab a seat along 9th Avenue.
              </p>

              <div className="space-y-3.5 text-sm font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#E64A19] dark:text-[#FF5722] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#141413] dark:text-[#F7F5F0]">GRIND NYC</p>
                    <p className="text-[#5C5852] dark:text-[#A39E95]">{STORE_INFO.address}, New York, NY {STORE_INFO.zip}</p>
                    <p className="text-xs text-[#5C5852]/80 dark:text-[#A39E95]/80">{STORE_INFO.crossStreets}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#E64A19] dark:text-[#FF5722] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#141413] dark:text-[#F7F5F0]">Hours of Operation</p>
                    <p className="text-[#5C5852] dark:text-[#A39E95]">Monday – Sunday: 7:00 AM – 7:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#E64A19] dark:text-[#FF5722] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#141413] dark:text-[#F7F5F0]">Phone</p>
                    <a
                      href={`tel:${STORE_INFO.phone}`}
                      className="text-[#5C5852] dark:text-[#A39E95] hover:text-[#E64A19] dark:hover:text-[#FF5722] transition-colors underline underline-offset-2 font-semibold"
                    >
                      {STORE_INFO.displayPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/?q=GRIND+NYC+602+9th+Ave+New+York+NY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#E64A19] hover:bg-[#D83A09] dark:bg-[#FF5722] dark:hover:bg-[#FF7043] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all inline-flex items-center gap-2 cursor-pointer shadow-xs hover:-translate-y-0.5"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="px-5 py-2.5 bg-[#EFECE4] dark:bg-[#262624] border border-[#DFD9CE] dark:border-[#2C2B29] text-[#141413] dark:text-[#F7F5F0] text-xs font-bold uppercase tracking-wider rounded-md hover:border-[#141413] dark:hover:border-white transition-all inline-flex items-center gap-2 hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us</span>
                </a>

                <button
                  onClick={onOpenOrderModal}
                  className="px-5 py-2.5 bg-[#141413] dark:bg-[#F7F5F0] text-white dark:text-[#111110] text-xs font-bold uppercase tracking-wider rounded-md hover:bg-[#E64A19] dark:hover:bg-[#FF5722] dark:hover:text-white transition-all inline-flex items-center gap-2 cursor-pointer shadow-xs hover:-translate-y-0.5"
                >
                  <span>Order Online</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Interactive Map Frame */}
            <div className="lg:col-span-6 relative aspect-16/10 rounded-xl overflow-hidden border border-[#DFD9CE] dark:border-[#2C2B29] shadow-inner bg-[#EFECE4] dark:bg-[#262624] theme-transition">
              <iframe
                title="GRIND NYC Location Map"
                src="https://maps.google.com/maps?q=602+9th+Ave,+New+York,+NY+10036&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) saturate(0.95)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
