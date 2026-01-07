
export enum Category {
  TAXI = 'Taxi',
  PUBLIC_TRANSPORT = 'Public Transport',
  MAPS = 'Maps',
  TMONEY = 'T-Money',
  ATTRACTIONS = 'Attractions',
  K_BEAUTY = 'K-Beauty',
  K_FASHION = 'K-Fashion',
  K_DRAMA = 'K-Drama Loc',
  AI_CONCIERGE = 'AI Concierge',
  FAVORITES = 'Favorites'
}

export interface GuideSection {
  title: string;
  description: string;
  tips: string[];
  apps: { name: string; link: string; icon: string }[];
  liveStatus?: { label: string; link: string };
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
