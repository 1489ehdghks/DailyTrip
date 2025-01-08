export interface TravelPost {
    id: string;
    title: string;
    date: string;
    description: string;
    imageUrl: string;
    content: string;
    category: 'work' | 'rest';
    subCategory: 'projects' | 'meetings' | 'tasks' | 'travel' | 'anime' | 'games' | 'concerts';
    price?: number;
    rating?: number;
    location?: 'domestic' | 'international';
  }