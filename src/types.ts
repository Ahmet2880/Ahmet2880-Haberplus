export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  content?: string;
  isHero?: boolean;
}

export type Category = 
  | 'Gündem' 
  | 'Ekonomi' 
  | 'Siyaset' 
  | 'Teknoloji' 
  | 'Spor' 
  | 'Dünya' 
  | 'Kültür' 
  | 'Yaşam' 
  | 'Sağlık';
