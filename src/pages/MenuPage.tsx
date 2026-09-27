import React, { useState, useMemo } from 'react';
import { MenuItem, MenuCategory } from '../types';
import { MENU_ITEMS } from '../data/menu';
import { Search, Sparkles, ArrowUpRight, X } from 'lucide-react';

interface MenuPageProps {
  onSelectItem: (item: MenuItem) => void;
  onOpenOrderModal: () => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onSelectItem, onOpenOrderModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDietary, setSelectedDietary] = useState<string>('all');

  const categories: { id: MenuCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All Items' },
    { id: 'coffee-hot', label: 'Hot Coffee' },
    { id: 'coffee-cold', label: 'Cold Drinks' },
    { id: 'bagels', label: 'Kettle Bagels' },
    { id: 'breakfast', label: 'Breakfast' },
    { id: 'bakery', label: 'Bakery & Pastries' },
  ];

  const dietaryOptions = ['all', 'Vegetarian', 'Vegan', 'Gluten-Free Option', 'Dairy-Free Option'];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'all' ? true : item.category === selectedCategory;

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.categoryLabel.toLowerCase().includes(query);

      // Dietary match
      const matchesDietary =
        selectedDietary === 'all'
          ? true
          : item.dietary?.includes(selectedDietary as any);

      return matchesCategory && matchesSearch && matchesDietary;
    });
  }, [selectedCategory, searchQuery, selectedDietary]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 font-sans">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E64A19] dark:text-[#FF5722] bg-[#E64A19]/10 dark:bg-[#FF5722]/15 px-3 py-1 rounded-full">
          <span>Hell's Kitchen · 602 9th Ave · NYC</span>
        </div>
        <h1 className="section-title text-[#141413] dark:text-[#F7F5F0]">
          THE MENU
        </h1>
        <p className="text-base sm:text-lg text-[#5C5852] dark:text-[#A39E95] leading-relaxed">
          Crafted with obsessively dialed espresso, real New York kettle bagels boiled in city water, and breakfast prepared fresh to order.
        </p>

        {/* Quick order banner */}
        <div className="pt-2">
          <button
            onClick={onOpenOrderModal}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#E64A19] hover:bg-[#D83A09] dark:bg-[#FF5722] dark:hover:bg-[#FF7043] text-white text-xs font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer shadow-xs hover:-translate-y-0.5"
          >
            <span>Order for Counter Pickup or Delivery</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Control Bar: Categories, Search, Dietary Filters */}
      <div className="space-y-4 pt-4 border-t border-[#DFD9CE] dark:border-[#2C2B29] theme-transition">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#141413] dark:bg-[#F7F5F0] text-white dark:text-[#111110] shadow-xs'
                  : 'bg-[#EFECE4] dark:bg-[#1A1A18] text-[#5C5852] dark:text-[#A39E95] hover:text-[#141413] dark:hover:text-white border border-[#DFD9CE] dark:border-[#2C2B29]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search & Dietary Filters row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5C5852] dark:text-[#A39E95]" />
            <input
              type="text"
              placeholder="Search espresso, lox, croissants, matcha..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 rounded-lg border border-[#DFD9CE] dark:border-[#2C2B29] bg-white dark:bg-[#1A1A18] text-sm text-[#141413] dark:text-[#F7F5F0] placeholder-[#5C5852]/60 dark:placeholder-[#A39E95]/60 focus:outline-hidden focus:border-[#E64A19] dark:focus:border-[#FF5722] theme-transition font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#5C5852] dark:text-[#A39E95] hover:text-[#141413] dark:hover:text-white cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Dietary Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
            <span className="text-[#5C5852] dark:text-[#A39E95] font-semibold hidden md:inline">Dietary:</span>
            {dietaryOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setSelectedDietary(opt)}
                className={`px-3 py-1.5 rounded-md font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                  selectedDietary === opt
                    ? 'bg-[#E64A19] dark:bg-[#FF5722] text-white'
                    : 'bg-[#EFECE4] dark:bg-[#1A1A18] text-[#5C5852] dark:text-[#A39E95] hover:bg-[#DFD9CE] dark:hover:bg-[#2C2B29]'
                }`}
              >
                {opt === 'all' ? 'All Diets' : opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count & Active Filters Indicator */}
      <div className="flex items-center justify-between text-xs text-[#5C5852] dark:text-[#A39E95] font-sans">
        <span>Showing {filteredItems.length} items</span>
        {(searchQuery || selectedCategory !== 'all' || selectedDietary !== 'all') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedDietary('all');
            }}
            className="text-[#E64A19] dark:text-[#FF5722] hover:underline cursor-pointer font-semibold"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-20 space-y-4">
          <p className="font-display font-bold text-xl text-[#141413] dark:text-[#F7F5F0]">
            No matching items found
          </p>
          <p className="text-sm text-[#5C5852] dark:text-[#A39E95]">
            Try clearing your search query or selecting a different category.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedDietary('all');
            }}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md bg-[#141413] text-white dark:bg-[#F7F5F0] dark:text-[#111110] cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Menu Grid - Multi Column Editorial Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            onClick={() => onSelectItem(item)}
            className="group bg-white dark:bg-[#1A1A18] rounded-xl overflow-hidden border border-[#DFD9CE] dark:border-[#2C2B29] hover:border-[#141413] dark:hover:border-white transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 shadow-xs hover:shadow-md theme-transition"
          >
            <div>
              {/* Media */}
              <div className="aspect-4/3 relative overflow-hidden bg-[#EFECE4] dark:bg-[#262624]">
                <img
                  src={item.image}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                {item.popular && (
                  <div className="absolute top-3 left-3 bg-[#111110]/90 text-white backdrop-blur-xs px-2.5 py-0.5 text-[10px] font-sans font-semibold uppercase tracking-wider rounded-sm flex items-center gap-1 border border-white/10">
                    <Sparkles className="w-3 h-3 text-[#E64A19] dark:text-[#FF5722]" />
                    <span>Popular</span>
                  </div>
                )}
                {item.temperature && (
                  <div className="absolute top-3 right-3 bg-black/80 text-white backdrop-blur-xs px-2 py-0.5 text-[10px] font-sans font-semibold uppercase rounded-sm">
                    {item.temperature}
                  </div>
                )}
              </div>

              {/* Body: Clear Scanning Hierarchy: CATEGORY -> PRODUCT NAME -> DESCRIPTION -> PRICE */}
              <div className="p-5 space-y-2">
                {/* 1. Category */}
                <div className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#8A857D] dark:text-[#706B63]">
                  {item.categoryLabel}
                </div>

                {/* 2. Product Name */}
                <h2 className="card-title text-[#141413] dark:text-[#F7F5F0] group-hover:text-[#E64A19] dark:group-hover:text-[#FF5722] transition-colors">
                  {item.name}
                </h2>

                {/* 3. Description */}
                <p className="text-xs sm:text-sm text-[#5C5852] dark:text-[#A39E95] leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                {/* 4. Price & Dietary */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="font-sans font-bold text-base text-[#141413] dark:text-[#F7F5F0] tabular-nums">
                    ${item.price.toFixed(2)}
                  </span>

                  {item.dietary && item.dietary.length > 0 && (() => {
                    const diets = item.dietary.slice(0, 2);
                    return (
                      <div className="flex items-center gap-1.5 text-[11px] text-[#5C5852] dark:text-[#A39E95] flex-wrap">
                        {diets.map((d, i) => (
                          <React.Fragment key={d}>
                            <span>{d}</span>
                            {i < diets.length - 1 && <span aria-hidden="true">·</span>}
                          </React.Fragment>
                        ))}
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>

            {/* Bottom Card Bar */}
            <div className="px-5 pb-5 pt-3 border-t border-[#DFD9CE]/60 dark:border-[#2C2B29] flex items-center justify-between text-xs font-semibold">
              <span className="text-[#E64A19] dark:text-[#FF5722] group-hover:underline underline-offset-2">
                Order & Details
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#5C5852] dark:text-[#A39E95] group-hover:text-[#E64A19] dark:group-hover:text-[#FF5722] transition-colors" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
