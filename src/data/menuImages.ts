import { MenuCategory } from '../types';

// Category-level fallback images if an individual item image is missing or fails
export const CATEGORY_FALLBACK_IMAGES: Record<MenuCategory | 'default', string> = {
  'coffee-hot': '/src/assets/images/latte_art_cup_1790523057780.jpg',
  'coffee-cold': '/src/assets/images/cold_brew_glass_1790523127817.jpg',
  'bagels': '/src/assets/images/bagel_cream_cheese_1790523252266.jpg',
  'breakfast': '/src/assets/images/country_omelet_plate_1790523269312.jpg',
  'bakery': '/src/assets/images/butter_croissant_1790523316906.jpg',
  'sandwiches': '/src/assets/images/pastrami_egg_bagel_1790523205253.jpg',
  'teas': '/src/assets/images/matcha_latte_glass_1790523190084.jpg',
  'all': '/src/assets/images/hero_grind_nyc_1790522235581.jpg',
  'default': '/src/assets/images/hero_grind_nyc_1790522235581.jpg',
};

// Centralized individual product image mapping
// Every visible menu item is mapped to its own distinct, authentic photograph
export const PRODUCT_IMAGE_MAP: Record<string, string> = {
  // Hot Coffee
  'espresso-double': '/src/assets/images/espresso_cup_1790523366161.jpg',
  'latte': '/src/assets/images/latte_art_cup_1790523057780.jpg',
  'cappuccino': '/src/assets/images/cappuccino_foam_1790523072577.jpg',
  'flat-white': '/src/assets/images/flat_white_cup_1790523112762.jpg',
  'cortado': '/src/assets/images/cortado_gibraltar_1790523086651.jpg',
  'drip-house': '/src/assets/images/drip_coffee_mug_1790523100208.jpg',

  // Cold Drinks & Specialty
  'freddo-espresso': '/src/assets/images/freddo_espresso_1790523144260.jpg',
  'freddo-cappuccino': '/src/assets/images/freddo_cappuccino_1790523157706.jpg',
  'greek-frappe': '/src/assets/images/greek_frappe_1790523171708.jpg',
  'cold-brew': '/src/assets/images/cold_brew_glass_1790523127817.jpg',
  'iced-matcha-latte': '/src/assets/images/matcha_latte_glass_1790523190084.jpg',

  // Bagels & Bagel Sandwiches
  'lox-delight': '/src/assets/images/signature_bagel_spread_1790522264134.jpg',
  'all-time-new-yorker': '/src/assets/images/pastrami_egg_bagel_1790523205253.jpg',
  'classic-bec': '/src/assets/images/bacon_egg_cheese_bagel_1790523221264.jpg',
  'avocado-delight': '/src/assets/images/avocado_delight_bagel_1790523236530.jpg',
  'kettle-bagel-shmear': '/src/assets/images/bagel_cream_cheese_1790523252266.jpg',

  // Breakfast Items
  'country-omelet-plate': '/src/assets/images/country_omelet_plate_1790523269312.jpg',
  'greek-breakfast-quesadilla': '/src/assets/images/greek_quesadilla_1790523284402.jpg',
  'greek-yogurt-parfait': '/src/assets/images/greek_yogurt_parfait_1790523302081.jpg',

  // Pastries & Bakery
  'butter-croissant': '/src/assets/images/butter_croissant_1790523316906.jpg',
  'pain-au-chocolat': '/src/assets/images/pain_au_chocolat_1790523333330.jpg',
  'blueberry-crumb-muffin': '/src/assets/images/blueberry_muffin_1790523351830.jpg',
};

/**
 * Returns the exact product image or an appropriate category fallback
 */
export function getProductImage(itemId: string, category?: MenuCategory): string {
  if (PRODUCT_IMAGE_MAP[itemId]) {
    return PRODUCT_IMAGE_MAP[itemId];
  }
  if (category && CATEGORY_FALLBACK_IMAGES[category]) {
    return CATEGORY_FALLBACK_IMAGES[category];
  }
  return CATEGORY_FALLBACK_IMAGES.default;
}
