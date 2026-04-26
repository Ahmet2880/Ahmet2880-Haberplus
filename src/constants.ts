import { NewsItem, Category } from './types';

export const CATEGORIES: Category[] = [
  'Gündem',
  'Siyaset',
  'Ekonomi',
  'Teknoloji',
  'Spor',
  'Dünya',
  'Kültür',
  'Yaşam',
  'Sağlık'
];

export const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Küresel Teknoloji Zirvesi İstanbul\'da Başladı',
    summary: 'Yapay zeka ve sürdürülebilirlik odaklı zirvede dünya devleri bir araya geliyor.',
    category: 'Teknoloji',
    author: 'Can Yılmaz',
    date: '2026-04-26',
    imageUrl: 'https://picsum.photos/seed/tech/1200/600',
    isHero: true
  },
  {
    id: '2',
    title: 'Merkez Bankası Faiz Kararını Açıkladı',
    summary: 'Ekonomi piyasalarının beklediği kritik karar bugün duyuruldu.',
    category: 'Ekonomi',
    author: 'Elif Aksoy',
    date: '2026-04-26',
    imageUrl: 'https://picsum.photos/seed/finance/600/400'
  },
  {
    id: '3',
    title: 'Milli Takım Final Yolunda',
    summary: 'Avrupa Şampiyonası elemelerinde heyecan dorukta.',
    category: 'Spor',
    author: 'Mert Demir',
    date: '2026-04-26',
    imageUrl: 'https://picsum.photos/seed/sports/600/400'
  },
  {
    id: '4',
    title: 'Akdeniz\'de Yeni Antik Kent Keşfedildi',
    summary: 'Arkeologlar su altında binlerce yıllık yerleşime dair izler buldu.',
    category: 'Kültür',
    author: 'Selin Şahin',
    date: '2026-04-25',
    imageUrl: 'https://picsum.photos/seed/culture/600/400'
  },
  {
    id: '5',
    title: 'Elektrikli Araç Satışlarında Rekor Artış',
    summary: 'Pazarın yeni liderleri geleneksel üreticileri zorluyor.',
    category: 'Ekonomi',
    author: 'Hakan Kaya',
    date: '2026-04-25',
    imageUrl: 'https://picsum.photos/seed/car/600/400'
  },
  {
    id: '6',
    title: 'Uzay Turizminde Yeni Dönem',
    summary: 'Sivil uçuşlar için ilk modüler istasyonun inşası tamamlandı.',
    category: 'Teknoloji',
    author: 'Burak Yıldız',
    date: '2026-04-25',
    imageUrl: 'https://picsum.photos/seed/space/600/400'
  },
  {
    id: '7',
    title: 'İklim Değişikliği ve Tarım: Yeni Rapor Yayınlandı',
    summary: 'Gıda güvenliği için acil önlemler alınması gerektiği vurgulandı.',
    category: 'Gündem',
    author: 'Deniz Aydın',
    date: '2026-04-24',
    imageUrl: 'https://picsum.photos/seed/nature/600/400'
  },
  {
    id: '8',
    title: 'Modern Sanat Müzesi Kapılarını Açıyor',
    summary: 'Şehrin kalbindeki yeni sanat merkezi büyük ilgi görüyor.',
    category: 'Kültür',
    author: 'Zeynep Çelik',
    date: '2026-04-24',
    imageUrl: 'https://picsum.photos/seed/art/600/400'
  },
  {
    id: '9',
    title: 'Yeni Sağlıklı Yaşam Trendi: Doğal Beslenme',
    summary: 'Uzmanlar işlenmiş gıdalardan kaçınmanın önemini anlatıyor.',
    category: 'Sağlık',
    author: 'Ayşe Özdemir',
    date: '2026-04-24',
    imageUrl: 'https://picsum.photos/seed/health/600/400'
  },
  {
    id: '10',
    title: 'Şehir Planlamasında Akıllı Çözümler',
    summary: 'Trafik ve ulaşım sorunları için yapay zeka devrede.',
    category: 'Yaşam',
    author: 'Emre Koç',
    date: '2026-04-23',
    imageUrl: 'https://picsum.photos/seed/city/600/400'
  },
  {
    id: '11',
    title: 'Boreal Ormanlarında Nadir Kuş Türü Görüldü',
    summary: 'Doğa koruma ekipleri nesli tükendiği sanılan türü yeniden kayda aldı.',
    category: 'Yaşam',
    author: 'Sibel Caner',
    date: '2026-04-23',
    imageUrl: 'https://picsum.photos/seed/bird/600/400'
  },
  {
    id: '12',
    title: 'Yapay Zeka Sanatında Yeni Sınırlar',
    summary: 'Dijital küratörler algorithmik eserlerin geleceğini tartışıyor.',
    category: 'Teknoloji',
    author: 'Ali Vural',
    date: '2026-04-22',
    imageUrl: 'https://picsum.photos/seed/aiart/600/400'
  },
  {
    id: '13',
    title: 'Dünya Kupası Hazırlıkları Tam Gaz',
    summary: 'Yeni stadyum tasarımları ve teknolojik altyapı göz dolduruyor.',
    category: 'Spor',
    author: 'Kemal Tekin',
    date: '2026-04-22',
    imageUrl: 'https://picsum.photos/seed/worldcup/600/400'
  }
];
