import { MenuItem, StoreInfo } from '../types';

export const STORE_INFO: StoreInfo = {
  name: 'GRIND NYC',
  tagline: 'COFFEE. BAGELS. NYC.',
  address: '602 9th Ave',
  neighborhood: "Hell's Kitchen",
  crossStreets: 'Between W 43rd & W 44th St',
  city: 'New York',
  state: 'NY',
  zip: '10036',
  phone: '+16467558073',
  displayPhone: '(646) 755-8073',
  email: 'hello@grindnyc.com',
  hours: [
    { days: 'Monday – Sunday', time: '7:00 AM – 7:00 PM' },
  ],
  subwayDirections: [
    {
      lines: ['A', 'C', 'E'],
      station: '42 St - Port Authority Bus Terminal',
      walkTime: '4 min walk north on 8th/9th Ave'
    },
    {
      lines: ['C', 'E'],
      station: '50 St Station',
      walkTime: '5 min walk south on 8th/9th Ave'
    },
    {
      lines: ['1', '2', '3', '7', 'N', 'Q', 'R', 'W', 'S'],
      station: 'Times Sq - 42 St',
      walkTime: '7 min walk west to 9th Ave'
    }
  ]
};

/**
 * Centralized Product Photography Mapping
 * Every menu product maps to its own authentic, professional food photograph
 * captured in a unified editorial NYC café style.
 */
export const PRODUCT_IMAGES = {
  // Coffee - Hot
  espresso: '/src/assets/images/espresso_cup_1790523366161.jpg',
  latte: '/src/assets/images/latte_art_cup_1790523057780.jpg',
  cappuccino: '/src/assets/images/cappuccino_foam_1790523072577.jpg',
  flatWhite: '/src/assets/images/flat_white_cup_1790523112762.jpg',
  cortado: '/src/assets/images/cortado_gibraltar_1790523086651.jpg',
  dripCoffee: '/src/assets/images/drip_coffee_mug_1790523100208.jpg',

  // Coffee & Specialty - Cold
  freddoEspresso: '/src/assets/images/freddo_espresso_1790523144260.jpg',
  freddoCappuccino: '/src/assets/images/freddo_cappuccino_1790523157706.jpg',
  greekFrappe: '/src/assets/images/greek_frappe_1790523171708.jpg',
  coldBrew: '/src/assets/images/cold_brew_glass_1790523127817.jpg',
  matchaLatte: '/src/assets/images/matcha_latte_glass_1790523190084.jpg',

  // Bagels & Sandwiches
  loxBagel: '/src/assets/images/signature_bagel_spread_1790522264134.jpg',
  allTimeNewYorker: '/src/assets/images/pastrami_egg_bagel_1790523205253.jpg',
  baconEggCheese: '/src/assets/images/bacon_egg_cheese_bagel_1790523221264.jpg',
  avocadoBagel: '/src/assets/images/avocado_delight_bagel_1790523236530.jpg',
  bagelShmear: '/src/assets/images/bagel_cream_cheese_1790523252266.jpg',

  // Breakfast & Kitchen
  countryOmelet: '/src/assets/images/country_omelet_plate_1790523269312.jpg',
  greekQuesadilla: '/src/assets/images/greek_quesadilla_1790523284402.jpg',
  greekParfait: '/src/assets/images/greek_yogurt_parfait_1790523302081.jpg',

  // Bakery & Pastries
  butterCroissant: '/src/assets/images/butter_croissant_1790523316906.jpg',
  chocolateCroissant: '/src/assets/images/pain_au_chocolat_1790523333330.jpg',
  blueberryMuffin: '/src/assets/images/blueberry_muffin_1790523351830.jpg',
} as const;

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE - HOT
  {
    id: 'espresso-double',
    name: 'Artisan Double Espresso',
    category: 'coffee-hot',
    categoryLabel: 'Coffee',
    description: 'Double shot pulled on custom Italian matte-black La Marzocco. Notes of baker’s chocolate, roasted hazelnut, and citrus bloom.',
    price: 3.75,
    image: PRODUCT_IMAGES.espresso,
    popular: true,
    temperature: 'Hot',
    dietary: ['Vegetarian', 'Vegan']
  },
  {
    id: 'latte',
    name: 'GRIND Signature Latte',
    category: 'coffee-hot',
    categoryLabel: 'Coffee',
    description: 'Rich espresso folded with silky textured whole milk or organic oat milk, finished with micro-foam latte art.',
    price: 5.25,
    image: PRODUCT_IMAGES.latte,
    popular: true,
    temperature: 'Both',
    dietary: ['Vegetarian', 'Dairy-Free Option']
  },
  {
    id: 'cappuccino',
    name: 'Classic Cappuccino',
    category: 'coffee-hot',
    categoryLabel: 'Coffee',
    description: 'Equal thirds of bold espresso, velvety steamed milk, and dense airy microfoam dusted lightly with cocoa.',
    price: 4.95,
    image: PRODUCT_IMAGES.cappuccino,
    temperature: 'Hot',
    dietary: ['Vegetarian', 'Dairy-Free Option']
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    category: 'coffee-hot',
    categoryLabel: 'Coffee',
    description: 'Double ristretto espresso shots married with silky microfoam milk for a strong, velvety coffee profile.',
    price: 5.15,
    image: PRODUCT_IMAGES.flatWhite,
    temperature: 'Hot',
    dietary: ['Vegetarian', 'Dairy-Free Option']
  },
  {
    id: 'cortado',
    name: 'Cortado',
    category: 'coffee-hot',
    categoryLabel: 'Coffee',
    description: 'A 1:1 balance of double espresso cut with equal warm steamed milk served in a Gibraltar glass.',
    price: 4.50,
    image: PRODUCT_IMAGES.cortado,
    temperature: 'Hot',
    dietary: ['Vegetarian', 'Dairy-Free Option']
  },
  {
    id: 'drip-house',
    name: '9th Ave Drip Coffee',
    category: 'coffee-hot',
    categoryLabel: 'Coffee',
    description: 'Batch-brewed single-origin Ethiopian and Colombian house blend. Smooth, balanced, and hot all morning long.',
    price: 3.50,
    image: PRODUCT_IMAGES.dripCoffee,
    temperature: 'Hot',
    dietary: ['Vegetarian', 'Vegan']
  },

  // COLD DRINKS & SPECIALTY
  {
    id: 'freddo-espresso',
    name: 'Freddo Espresso',
    category: 'coffee-cold',
    categoryLabel: 'Cold Drinks',
    description: 'GRIND specialty: double espresso frothed aggressively over ice until cold, airy, and topped with dense crema foam.',
    price: 5.50,
    image: PRODUCT_IMAGES.freddoEspresso,
    popular: true,
    temperature: 'Iced',
    dietary: ['Vegetarian', 'Vegan']
  },
  {
    id: 'freddo-cappuccino',
    name: 'Freddo Cappuccino',
    category: 'coffee-cold',
    categoryLabel: 'Cold Drinks',
    description: 'Chilled frothed espresso crowned with a cloud of cold-whipped non-fat milk foam. Light, creamy, and cooling.',
    price: 5.95,
    image: PRODUCT_IMAGES.freddoCappuccino,
    popular: true,
    temperature: 'Iced',
    dietary: ['Vegetarian', 'Dairy-Free Option']
  },
  {
    id: 'greek-frappe',
    name: 'Classic Greek Frappé',
    category: 'coffee-cold',
    categoryLabel: 'Cold Drinks',
    description: 'The authentic Mediterranean iced classic, whipped with rich foam, served ice-cold with sweet condensed milk.',
    price: 5.25,
    image: PRODUCT_IMAGES.greekFrappe,
    temperature: 'Iced',
    dietary: ['Vegetarian']
  },
  {
    id: 'cold-brew',
    name: '18-Hour Nitro Cold Brew',
    category: 'coffee-cold',
    categoryLabel: 'Cold Drinks',
    description: 'Steeped for 18 hours in cold filtered NYC water. Ultra-low acidity, sweet chocolate undertones, served over rock ice.',
    price: 5.25,
    image: PRODUCT_IMAGES.coldBrew,
    popular: true,
    temperature: 'Iced',
    dietary: ['Vegetarian', 'Vegan']
  },
  {
    id: 'iced-matcha-latte',
    name: 'Ceremonial Matcha Latte',
    category: 'coffee-cold',
    categoryLabel: 'Cold Drinks',
    description: 'Stone-ground Uji organic Japanese matcha whisked with oat milk and a whisper of wildflower honey over ice.',
    price: 6.25,
    image: PRODUCT_IMAGES.matchaLatte,
    popular: true,
    temperature: 'Both',
    dietary: ['Vegetarian', 'Dairy-Free Option']
  },

  // BAGELS
  {
    id: 'lox-delight',
    name: 'Lox Delight Bagel',
    category: 'bagels',
    categoryLabel: 'Bagels',
    description: 'Traditional kettle-boiled everything bagel, whipped scallion cream cheese, Nova Scotia smoked salmon, capers, thinly sliced red onion, and vine tomato.',
    price: 13.95,
    image: PRODUCT_IMAGES.loxBagel,
    popular: true,
    dietary: []
  },
  {
    id: 'all-time-new-yorker',
    name: 'The Grind All Time New Yorker',
    category: 'bagels',
    categoryLabel: 'Bagels',
    description: 'Warm toasted garlic or everything bagel, hot grilled pastrami, double fried cage-free eggs, and melted sharp New York cheddar with cracked pepper.',
    price: 11.50,
    image: PRODUCT_IMAGES.allTimeNewYorker,
    popular: true,
    dietary: []
  },
  {
    id: 'classic-bec',
    name: 'NYC Bacon, Egg & Cheese Bagel',
    category: 'bagels',
    categoryLabel: 'Bagels',
    description: 'Crispy applewood smoked bacon, fluffy folded eggs, and gooey American cheese on a toasted seeded bagel.',
    price: 8.75,
    image: PRODUCT_IMAGES.baconEggCheese,
    popular: true,
    dietary: []
  },
  {
    id: 'avocado-delight',
    name: 'Avocado Delight Bagel',
    category: 'bagels',
    categoryLabel: 'Bagels',
    description: 'Smashed Hass avocado, heirloom tomato slices, cucumber ribbons, chili flakes, and lemon herb sea salt on whole wheat bagel.',
    price: 9.50,
    image: PRODUCT_IMAGES.avocadoBagel,
    dietary: ['Vegetarian', 'Vegan']
  },
  {
    id: 'kettle-bagel-shmear',
    name: 'Kettle Bagel with House Shmear',
    category: 'bagels',
    categoryLabel: 'Bagels',
    description: 'Choice of fresh boiled bagel (Plain, Everything, Sesame, Asiago, Cinnamon Raisin, Jalapeño) with plain, scallion, or veggie cream cheese.',
    price: 4.50,
    image: PRODUCT_IMAGES.bagelShmear,
    dietary: ['Vegetarian']
  },

  // BREAKFAST
  {
    id: 'country-omelet-plate',
    name: 'Hell’s Kitchen Country Omelet',
    category: 'breakfast',
    categoryLabel: 'Breakfast',
    description: 'Three cage-free eggs folded with cremini mushrooms, baby spinach, caramelized onions, and goat cheese. Served with toasted bagel and herb potatoes.',
    price: 14.50,
    image: PRODUCT_IMAGES.countryOmelet,
    dietary: ['Vegetarian', 'Gluten-Free Option']
  },
  {
    id: 'greek-breakfast-quesadilla',
    name: 'Greek Breakfast Quesadilla',
    category: 'breakfast',
    categoryLabel: 'Breakfast',
    description: 'Griddled flour tortilla stuffed with scrambled eggs, Greek feta, kalamata olives, sundried tomatoes, and fresh oregano with tzatziki dip.',
    price: 12.95,
    image: PRODUCT_IMAGES.greekQuesadilla,
    dietary: ['Vegetarian']
  },
  {
    id: 'greek-yogurt-parfait',
    name: 'Greek Honey & Wild Berry Parfait',
    category: 'breakfast',
    categoryLabel: 'Breakfast',
    description: 'Thick strained authentic Greek yogurt layered with organic chia granola, Hudson Valley wildflower honey, and fresh blackberries & raspberries.',
    price: 7.50,
    image: PRODUCT_IMAGES.greekParfait,
    dietary: ['Vegetarian', 'Gluten-Free Option']
  },

  // BAKERY & PASTRIES
  {
    id: 'butter-croissant',
    name: 'Artisan Butter Croissant',
    category: 'bakery',
    categoryLabel: 'Pastries',
    description: 'Baked fresh daily at dawn. Hundreds of buttery, golden flaky layers with a light, honeycomb interior.',
    price: 4.25,
    image: PRODUCT_IMAGES.butterCroissant,
    popular: true,
    dietary: ['Vegetarian']
  },
  {
    id: 'pain-au-chocolat',
    name: 'Chocolate Croissant',
    category: 'bakery',
    categoryLabel: 'Pastries',
    description: 'Double batons of Valrhona dark bittersweet chocolate wrapped in golden flaky French butter pastry.',
    price: 4.75,
    image: PRODUCT_IMAGES.chocolateCroissant,
    dietary: ['Vegetarian']
  },
  {
    id: 'blueberry-crumb-muffin',
    name: 'Hudson Valley Blueberry Crumb Muffin',
    category: 'bakery',
    categoryLabel: 'Pastries',
    description: 'Packed with wild blueberries, brown sugar cinnamon streusel top, and a hint of Madagascar vanilla.',
    price: 4.00,
    image: PRODUCT_IMAGES.blueberryMuffin,
    dietary: ['Vegetarian']
  }
];

export const ORDER_PLATFORMS = [
  {
    name: 'GRIND Direct Pickup',
    type: 'In-Store Pickup',
    description: 'Order ahead for skip-the-line counter pickup at 602 9th Ave.',
    badge: 'Fastest · No Wait',
    url: 'https://www.toasttab.com/grind-nyc/order',
    isPrimary: true
  },
  {
    name: 'ToastTab Online',
    type: 'Direct Local Delivery',
    description: 'Support our shop directly with local Hell’s Kitchen delivery.',
    badge: 'Direct to Kitchen',
    url: 'https://www.toasttab.com/grind-nyc/order'
  },
  {
    name: 'Uber Eats',
    type: 'Delivery',
    description: 'Tracked on-demand delivery anywhere in Manhattan.',
    badge: 'Courier Delivery',
    url: 'https://www.ubereats.com/store/grind-nyc/ubereats'
  },
  {
    name: 'Grubhub',
    type: 'Delivery & Perks',
    description: 'Available for Hell’s Kitchen, Midtown West & Chelsea deliveries.',
    badge: 'Courier Delivery',
    url: 'https://www.grubhub.com/restaurant/grind-nyc-602-9th-ave-new-york/3034958'
  },
  {
    name: 'DoorDash',
    type: 'Delivery & DashPass',
    description: 'Order food, coffee and fresh bagels with live DashPass tracking.',
    badge: 'Courier Delivery',
    url: 'https://www.doordash.com/store/grind-nyc-new-york'
  }
];
