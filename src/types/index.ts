export type Page = 'home' | 'menu' | 'story' | 'order' | 'visit';

export type MenuCategory = 
  | 'all'
  | 'coffee-hot'
  | 'coffee-cold'
  | 'bagels'
  | 'sandwiches'
  | 'breakfast'
  | 'bakery'
  | 'teas';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  categoryLabel: string;
  description: string;
  price: number;
  image: string;
  popular?: boolean;
  dietary?: ('Vegetarian' | 'Vegan' | 'Gluten-Free Option' | 'Dairy-Free Option')[];
  pairing?: string;
  temperature?: 'Hot' | 'Iced' | 'Both';
}

export interface Review {
  id: string;
  author: string;
  location: string;
  date: string;
  rating: number;
  text: string;
  favoriteItem?: string;
}

export interface StoreInfo {
  name: string;
  tagline: string;
  address: string;
  neighborhood: string;
  crossStreets: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  displayPhone: string;
  email: string;
  hours: {
    days: string;
    time: string;
  }[];
  subwayDirections: {
    lines: string[];
    station: string;
    walkTime: string;
  }[];
}
