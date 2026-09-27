import { Review } from '../types';

export const STORE_RATING = {
  score: 4.7,
  totalReviews: '520+',
  platform: 'Google Reviews & Locals',
  percentRecommendation: '94%'
};

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    author: 'Dimitrios K.',
    location: "Hell's Kitchen, Manhattan",
    date: '2 weeks ago',
    rating: 5,
    text: 'As someone who grew up in Athens, finding a truly authentic Freddo Espresso in Midtown West seemed impossible until GRIND opened. The froth is dense, the espresso blend has no harsh bitterness, and the staff remembers your regular morning order.',
    favoriteItem: 'Freddo Espresso'
  },
  {
    id: 'rev-2',
    author: 'Sarah M.',
    location: 'Midtown West Resident',
    date: '1 month ago',
    rating: 5,
    text: 'The Grind All Time New Yorker on a toasted everything bagel is hands down the best breakfast sandwich in Hell’s Kitchen. Crisp pastrami, perfectly soft folded eggs, and hot melted sharp cheddar. Quick service even during the 8:30 AM rush.',
    favoriteItem: 'The Grind All Time New Yorker'
  },
  {
    id: 'rev-3',
    author: 'Marcus T.',
    location: 'Theater District / Broadway',
    date: '3 weeks ago',
    rating: 5,
    text: 'My go-to stop every morning before rehearsals. The 18-hour cold brew is punchy, velvety, and balanced. Also, their everything bagels have that real NYC chew and crunch from proper boiling.',
    favoriteItem: '18-Hour Nitro Cold Brew'
  },
  {
    id: 'rev-4',
    author: 'Elena R.',
    location: 'Local Neighbor',
    date: '2 months ago',
    rating: 5,
    text: 'Warm neighborhood energy right on 9th Ave. The Lox Delight is loaded with fresh smoked salmon and scallion cream cheese. Never skimps on capers. Always clean, welcoming, and high quality.',
    favoriteItem: 'Lox Delight Bagel'
  },
  {
    id: 'rev-5',
    author: 'Julian B.',
    location: 'Chelsea / Commuter',
    date: 'Recent visit',
    rating: 5,
    text: 'Stumbled upon GRIND after getting off at Port Authority. What a breath of fresh air compared to typical chain coffee. The oat milk latte was silky and balanced, and the warm butter croissant was ultra flaky.',
    favoriteItem: 'Oat Milk Signature Latte'
  }
];
