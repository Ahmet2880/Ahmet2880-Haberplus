import React, { useState } from 'react';
import { 
  Menu, 
  Search, 
  Bell, 
  TrendingUp, 
  ChevronRight, 
  Clock, 
  Share2, 
  Bookmark,
  User,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MOCK_NEWS, CATEGORIES } from './constants';
import { NewsItem } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Gündem');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroNews = MOCK_NEWS.find(n => n.isHero) || MOCK_NEWS[0];
  const otherNews = MOCK_NEWS.filter(n => n.id !== heroNews.id);

  return (
    <div className="min-h-screen bg-[#0F1115] text-slate-100 font-sans selection:bg-red-500/30 selection:text-red-400">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-[#0F1115]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left: Branding & Menu */}
            <div className="flex items-center gap-10">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-white/5 rounded-lg transition-colors lg:hidden"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="bg-red-600 text-white w-10 h-10 flex items-center justify-center rounded-sm font-black text-2xl tracking-tighter leading-none shadow-lg shadow-red-600/20">HP</div>
                <h1 className="text-2xl font-black tracking-tighter hidden sm:block">HABER<span className="text-red-500 group-hover:text-red-400 transition-colors">PULS</span></h1>
              </div>
              
              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-8">
                {CATEGORIES.slice(0, 5).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all relative py-2 ${
                      selectedCategory === cat 
                      ? 'text-white' 
                      : 'text-slate-500 hover:text-white'
                    }`}
                  >
                    {cat}
                    {selectedCategory === cat && (
                      <motion.div 
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500" 
                      />
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-2 focus-within:ring-1 focus-within:ring-red-500/50 transition-all">
                <Search className="w-4 h-4 text-slate-500 mr-2" />
                <input 
                  type="text" 
                  placeholder="Ara..." 
                  className="bg-transparent border-none outline-none text-xs w-28 focus:w-40 transition-all placeholder:text-slate-600"
                />
              </div>
              <div className="hidden xl:block text-[10px] text-slate-500 font-mono">
                {new Date().toLocaleDateString('tr-TR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
              </div>
              <button className="hidden sm:flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors">
                Giriş Yap
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Breaking News Ticker */}
      <div className="bg-black/60 border-b border-white/5 py-3 overflow-hidden whitespace-nowrap">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-6">
          <div className="flex items-center gap-2 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em]">SON DAKİKA</span>
          </div>
          <div className="flex gap-16 animate-infinite-scroll">
            {MOCK_NEWS.slice(0, 3).map((n, i) => (
              <p key={i} className="text-[11px] font-medium text-slate-400 flex items-center gap-3">
                <span className="text-slate-600">•</span> {n.title}
              </p>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-12 gap-10">
          
          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-8 space-y-16">
            
            {/* Hero Section */}
            <motion.section 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-slate-900 border border-white/5"
            >
              <div className="aspect-[16/9] md:aspect-[21/9]">
                <img 
                  src={heroNews.imageUrl} 
                  alt={heroNews.title} 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-[#0F1115]/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white max-w-4xl">
                <span className="bg-red-600 text-[10px] font-bold px-3 py-1 rounded-sm mb-6 inline-block uppercase tracking-[0.2em]">
                  {heroNews.category}
                </span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] mb-6 group-hover:text-red-400 transition-colors">
                  {heroNews.title}
                </h2>
                <p className="text-slate-300 text-base md:text-lg line-clamp-2 mb-8 font-medium max-w-2xl leading-relaxed">
                  {heroNews.summary}
                </p>
                <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  <span className="flex items-center gap-2 text-slate-300"><User className="w-3 h-3 text-red-500" /> {heroNews.author}</span>
                  <span className="flex items-center gap-2 text-slate-500"><Clock className="w-3 h-3" /> 5 Dakika Okuma</span>
                </div>
              </div>
            </motion.section>

            {/* Grid for other news */}
            <div className="space-y-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-sm font-black uppercase tracking-[0.3em] text-white">GÜNCEL AKIŞ</h3>
                <button className="text-[10px] font-bold text-red-500 hover:text-red-400 transition-colors flex items-center gap-2">TÜMÜNÜ GÖR <ArrowRight size={12} /></button>
              </div>
              
              <section className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
                {otherNews.slice(0, 6).map((item, index) => (
                  <motion.article 
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group flex flex-col gap-5 cursor-pointer"
                  >
                    <div className="aspect-[16/10] overflow-hidden rounded-lg bg-slate-900 border border-white/5 relative">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-black/50 backdrop-blur-md text-white text-[9px] font-bold px-2 py-1 rounded-sm uppercase tracking-widest">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold leading-tight group-hover:text-red-500 transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                        {item.summary}
                      </p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{new Date(item.date).toLocaleDateString('tr-TR')}</span>
                        <div className="flex gap-4">
                           <Share2 className="w-3.5 h-3.5 text-slate-600 hover:text-white transition-colors" />
                           <Bookmark className="w-3.5 h-3.5 text-slate-600 hover:text-white transition-colors" />
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="col-span-12 lg:col-span-4 space-y-12">
            {/* Currency Bar (Mini) */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-black text-red-500 tracking-[0.2em] uppercase">PİYASALAR</span>
                <span className="text-[10px] text-slate-500 font-mono">CANLI</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/20 p-3 rounded border border-white/5">
                  <p className="text-[10px] text-slate-500 font-bold mb-1">USD/TRY</p>
                  <p className="text-lg font-black tracking-tighter">32.41 <span className="text-[10px] text-green-500 ml-1">▲</span></p>
                </div>
                <div className="bg-black/20 p-3 rounded border border-white/5">
                  <p className="text-[10px] text-slate-500 font-bold mb-1">EUR/TRY</p>
                  <p className="text-lg font-black tracking-tighter">35.12 <span className="text-[10px] text-red-500 m-1">▼</span></p>
                </div>
                <div className="bg-black/20 p-3 rounded border border-white/5">
                  <p className="text-[10px] text-slate-500 font-bold mb-1">BIST100</p>
                  <p className="text-lg font-black tracking-tighter">9.245 <span className="text-[10px] text-green-500 ml-1">▲</span></p>
                </div>
                <div className="bg-black/20 p-3 rounded border border-white/5">
                  <p className="text-[10px] text-slate-500 font-bold mb-1">ALTIN/GR</p>
                  <p className="text-lg font-black tracking-tighter">2.450 <span className="text-[10px] text-green-500 ml-1">▲</span></p>
                </div>
              </div>
            </div>

            {/* Most Read (The Elegant List) */}
            <div className="space-y-6">
               <h3 className="text-sm font-black tracking-[0.3em] border-b border-white/10 pb-4">POPÜLER</h3>
               <div className="space-y-8">
                 {MOCK_NEWS.slice(1, 6).map((news, idx) => (
                   <div key={news.id} className="flex gap-5 group cursor-pointer">
                     <span className="text-3xl font-black text-slate-800 group-hover:text-red-600/50 transition-colors italic leading-none">0{idx + 1}</span>
                     <div>
                       <span className="text-red-500 text-[9px] font-bold uppercase tracking-widest mb-1 block">{news.category}</span>
                       <h4 className="text-sm font-bold leading-tight group-hover:text-white transition-colors">
                         {news.title}
                       </h4>
                       <p className="text-[10px] text-slate-600 mt-2 font-bold">45 DAKİKA ÖNCE</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            {/* Premium Subscription */}
            <div className="relative group overflow-hidden bg-gradient-to-br from-red-600 to-red-900 rounded-2xl p-8 text-white">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-700">
                <TrendingUp size={120} />
              </div>
              <h3 className="text-2xl font-black mb-4 relative z-10 leading-tight">Özel Analizlere<br/>Erişim Sağlayın</h3>
              <p className="text-white/70 text-sm mb-8 relative z-10">Ekonomi ve teknoloji dünyasından derinlemesine raporlar sadece Plus üyelerine özel.</p>
              <button className="w-full bg-white text-red-600 py-3 rounded-full font-black text-xs uppercase tracking-widest relative z-10 hover:bg-slate-100 transition-colors">
                PLUS'A GEÇ
              </button>
            </div>

            {/* Newsletter */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-lg font-black mb-2 uppercase tracking-wide">E-Bülten</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">Günün özetini her sabah saat 08:30'da e-posta kutunuzda bulun.</p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="E-posta Adresiniz" 
                  className="w-full bg-black/40 border-white/10 border rounded-lg px-4 py-3 text-xs outline-none focus:border-red-500 transition-all placeholder:text-slate-700"
                />
                <button className="w-full bg-slate-100 text-black py-3 rounded-lg font-black text-xs uppercase tracking-widest hover:bg-white transition-colors">
                  Kayıt Ol
                </button>
              </div>
            </div>
          </aside>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/5 mt-20 pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 mb-20 text-center md:text-left">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <div className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-sm font-black text-lg tracking-tighter">HP</div>
                <span className="text-xl font-black tracking-tighter">HABER<span className="text-red-500">PULS</span></span>
              </div>
              <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
                Haber Puls, Türkiye ve dünyadan en güncel gelişmeleri, tarafsız ve derinlemesine perspektiflerle sizlere ulaştıran yeni nesil dijital gazetedir.
              </p>
            </div>
            <div>
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">KEŞFET</h4>
              <ul className="space-y-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                {CATEGORIES.slice(0, 4).map(c => <li key={c} className="hover:text-red-500 cursor-pointer transition-colors">{c}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">KURUMSAL</h4>
              <ul className="space-y-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                <li className="hover:text-red-500 cursor-pointer transition-colors">HAKKIMIZDA</li>
                <li className="hover:text-red-500 cursor-pointer transition-colors">İLETİŞİM</li>
                <li className="hover:text-red-500 cursor-pointer transition-colors">REKLAM</li>
                <li className="hover:text-red-500 cursor-pointer transition-colors">KÜNYE</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">SOSYAL</h4>
              <ul className="space-y-4 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                <li className="hover:text-red-500 cursor-pointer transition-colors">TWITTER</li>
                <li className="hover:text-red-500 cursor-pointer transition-colors">INSTAGRAM</li>
                <li className="hover:text-red-500 cursor-pointer transition-colors">YOUTUBE</li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold text-slate-700 uppercase tracking-[0.2em]">© 2026 Haber Puls Medya Grubu. Tüm hakları saklıdır.</p>
            <div className="flex gap-8 text-slate-600">
               <span className="text-[9px] font-bold cursor-pointer hover:text-white transition-colors uppercase">Gizlilik</span>
               <span className="text-[9px] font-bold cursor-pointer hover:text-white transition-colors uppercase">Çerezler</span>
               <span className="text-[9px] font-bold cursor-pointer hover:text-white transition-colors uppercase">KVKK</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Nav */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#0F1115]/95 backdrop-blur-xl border-t border-white/10 px-8 py-4 flex justify-between items-center z-50">
        <button className="text-red-500"><TrendingUp size={22} /></button>
        <button className="text-slate-500 hover:text-white"><Search size={22} /></button>
        <button className="text-slate-500 hover:text-white"><Bell size={22} /></button>
        <button className="text-slate-500 hover:text-white"><User size={22} /></button>
      </div>

      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 50s linear infinite;
        }
      `}</style>
    </div>
  );
}

