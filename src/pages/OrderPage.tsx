import React from 'react';
import { STORE_INFO, ORDER_PLATFORMS } from '../data/menu';
import { ArrowUpRight, Store, Truck, Check } from 'lucide-react';

interface OrderPageProps {
  onOpenOrderModal: () => void;
}

export const OrderPage: React.FC<OrderPageProps> = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 font-sans">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E64A19] dark:text-[#FF5722] bg-[#E64A19]/10 dark:bg-[#FF5722]/15 px-3 py-1 rounded-full">
          <span>Counter Pickup · NYC Delivery · Catering</span>
        </div>
        <h1 className="section-title text-[#141413] dark:text-[#F7F5F0]">
          YOUR GRIND IS A FEW CLICKS AWAY.
        </h1>
        <p className="text-base sm:text-lg text-[#5C5852] dark:text-[#A39E95] leading-relaxed">
          Order directly for fast in-store pickup to bypass the morning line at 602 9th Ave, or select your preferred courier for Manhattan delivery.
        </p>
      </div>

      {/* Main Order Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Card 1: Fast Pickup */}
        <div className="bg-white dark:bg-[#1A1A18] rounded-2xl p-8 border-2 border-[#E64A19] dark:border-[#FF5722] shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden theme-transition">
          <div className="absolute top-4 right-4 bg-[#E64A19] dark:bg-[#FF5722] text-white text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
            Recommended
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#E64A19]/10 dark:bg-[#FF5722]/15 flex items-center justify-center text-[#E64A19] dark:text-[#FF5722]">
              <Store className="w-6 h-6" />
            </div>
            <div>
              <h2 className="card-title text-2xl font-bold text-[#141413] dark:text-[#F7F5F0]">
                In-Store Pickup
              </h2>
              <p className="text-sm text-[#5C5852] dark:text-[#A39E95] mt-1">
                Skip the morning queue. Ready in 10–15 minutes at our counter.
              </p>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-[#141413]/85 dark:text-[#F7F5F0]/85">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#E64A19] dark:text-[#FF5722] shrink-0" />
                <span>Zero service fees & 100% of your order supports GRIND</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#E64A19] dark:text-[#FF5722] shrink-0" />
                <span>Order ahead for hot drip, pulled espresso, and warm toasted bagels</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#E64A19] dark:text-[#FF5722] shrink-0" />
                <span>Pickup counter: 602 9th Ave (W 43rd & 44th St)</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#DFD9CE]/60 dark:border-[#2C2B29]">
            <a
              href="https://www.toasttab.com/grind-nyc/order"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-[#E64A19] hover:bg-[#D83A09] dark:bg-[#FF5722] dark:hover:bg-[#FF7043] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:-translate-y-0.5"
            >
              <span>Order Direct Pickup</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="text-center text-xs text-[#5C5852] dark:text-[#A39E95]">
              Or call ahead:{' '}
              <a
                href={`tel:${STORE_INFO.phone}`}
                className="font-bold text-[#141413] dark:text-[#F7F5F0] underline hover:text-[#E64A19] dark:hover:text-[#FF5722]"
              >
                {STORE_INFO.displayPhone}
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: NYC Courier Delivery */}
        <div className="bg-white dark:bg-[#1A1A18] rounded-2xl p-8 border border-[#DFD9CE] dark:border-[#2C2B29] shadow-sm flex flex-col justify-between space-y-6 theme-transition">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#EFECE4] dark:bg-[#262624] flex items-center justify-center text-[#141413] dark:text-[#F7F5F0]">
              <Truck className="w-6 h-6 text-[#E64A19] dark:text-[#FF5722]" />
            </div>
            <div>
              <h2 className="card-title text-2xl font-bold text-[#141413] dark:text-[#F7F5F0]">
                Delivery Couriers
              </h2>
              <p className="text-sm text-[#5C5852] dark:text-[#A39E95] mt-1">
                Delivered hot and fresh across Hell’s Kitchen, Midtown West, and Manhattan.
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              {ORDER_PLATFORMS.filter((p) => p.name !== 'GRIND Direct Pickup').map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg border border-[#DFD9CE] dark:border-[#2C2B29] bg-[#EFECE4] dark:bg-[#262624] hover:border-[#E64A19] dark:hover:border-[#FF5722] transition-colors group cursor-pointer"
                >
                  <div>
                    <span className="font-bold text-xs sm:text-sm text-[#141413] dark:text-[#F7F5F0] group-hover:text-[#E64A19] dark:group-hover:text-[#FF5722] transition-colors">
                      {platform.name}
                    </span>
                    <span className="text-[10px] text-[#5C5852] dark:text-[#A39E95] ml-2">
                      · {platform.badge}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#5C5852] dark:text-[#A39E95] group-hover:text-[#E64A19] dark:group-hover:text-[#FF5722] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#DFD9CE]/60 dark:border-[#2C2B29] text-xs text-[#5C5852] dark:text-[#A39E95] text-center">
            Standard delivery radius covers 34th St to 60th St, Hudson River to 5th Ave.
          </div>
        </div>
      </div>

      {/* Catering & Office Bagel Boxes */}
      <div className="max-w-5xl mx-auto rounded-2xl bg-[#EFECE4] dark:bg-[#151514] p-8 sm:p-10 border border-[#DFD9CE] dark:border-[#2C2B29] grid grid-cols-1 md:grid-cols-12 gap-8 items-center theme-transition">
        <div className="md:col-span-8 space-y-3">
          <div className="label-eyebrow text-[#E64A19] dark:text-[#FF5722]">
            Office & Group Orders
          </div>
          <h3 className="section-title text-2xl sm:text-3xl font-bold text-[#141413] dark:text-[#F7F5F0]">
            NYC OFFICE CATERING & BAGEL BOXES
          </h3>
          <p className="text-sm text-[#5C5852] dark:text-[#A39E95] leading-relaxed">
            Planning a team breakfast, rehearsal morning, or studio shoot? We supply assorted dozens of fresh boiled bagels, cream cheese tubs, Nova lox platters, and 96oz travel coffee boxes.
          </p>
        </div>

        <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3">
          <a
            href={`tel:${STORE_INFO.phone}`}
            className="py-3 px-4 bg-[#141413] dark:bg-[#F7F5F0] text-white dark:text-[#111110] text-xs font-bold uppercase tracking-wider rounded-md text-center hover:bg-[#E64A19] dark:hover:bg-[#FF5722] dark:hover:text-white transition-all shadow-xs hover:-translate-y-0.5"
          >
            Call Catering: {STORE_INFO.displayPhone}
          </a>
          <a
            href={`mailto:${STORE_INFO.email}?subject=GRIND%20NYC%20Catering%20Inquiry`}
            className="py-3 px-4 bg-white dark:bg-[#1A1A18] border border-[#DFD9CE] dark:border-[#2C2B29] text-[#141413] dark:text-[#F7F5F0] text-xs font-bold uppercase tracking-wider rounded-md text-center hover:border-[#E64A19] dark:hover:border-[#FF5722] transition-all hover:-translate-y-0.5"
          >
            Email Catering Request
          </a>
        </div>
      </div>
    </div>
  );
};
