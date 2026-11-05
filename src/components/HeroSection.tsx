import { useAtom } from 'jotai';
import { langAtom, currentPageAtom, userPointsAtom, memberTierAtom, refillCountAtom } from '../data';
import { 
  BarChart3, 
  ShoppingBag, 
  Sparkles, 
  Award, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Droplets,
  Fingerprint,
  QrCode,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { SirchoLogo } from './SirchoLogo';

export function HeroSection() {
  const [lang] = useAtom(langAtom);
  const [, setCurrentPage] = useAtom(currentPageAtom);
  const [points] = useAtom(userPointsAtom);
  const [tier] = useAtom(memberTierAtom);
  const [refillCount] = useAtom(refillCountAtom);

  return (
    <section className="page-section active flex-1 relative min-h-screen flex flex-col justify-center items-center pt-24 sm:pt-28 pb-16 px-4">
      
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#F9D342]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#2E7D32]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl mx-auto text-center">
        
        {/* Main Glass Hero Panel */}
        <div className="glass-panel w-full px-6 py-10 md:py-14 md:px-12 flex flex-col items-center gap-6 relative overflow-hidden shadow-2xl border-white/20">
          

          {/* Logo Tengah Sircho Stamp (logotengah.png) */}
          <div className="relative z-10 reveal-scale my-2 flex flex-col items-center">
            <SirchoLogo size="xl" variant="center" />
          </div>

          {/* Judul Utama dari Prompt */}
          <h1 className="relative z-10 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.15] reveal-scale">
            Sircho Stamp:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9D342] via-white to-[#A5D6A7]">
              Practical Clean, Natural Value
            </span>
          </h1>
          
          {/* Sub-teks dari Prompt */}
          <p className="relative z-10 text-sm sm:text-base md:text-lg text-white/85 max-w-2xl reveal mx-auto leading-relaxed">
            {lang === 'id' ? 
              'Inovasi pembersih toilet gel stamp ramah lingkungan dengan konsep "Press, Stick, Flush" yang memadukan ekstrak daun sirih (anti-bakteri tifus) dan biomassa sabut kelapa terbarukan.' : 
              'Eco-friendly toilet gel stamp innovation with the "Press, Stick, Flush" concept, combining betel leaf extract (typhoid anti-bacterial) and upcycled coconut coir biomass.'}
          </p>

          {/* Call to Action (CTA) Buttons dari Prompt */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 w-full max-w-md mx-auto reveal">
            <button 
              onClick={() => setCurrentPage('product')}
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold shadow-xl hover:shadow-[#F9D342]/20 hover:-translate-y-1 flex items-center justify-center gap-2.5 rounded-full cursor-pointer bg-[#F9D342] text-black transition-all"
            >
              <BarChart3 className="w-5 h-5 text-black" />
              <span>{lang === 'id' ? 'Coba Kalkulator Eco-Impact' : 'Try Eco-Impact Calculator'}</span>
            </button>
            <button 
              onClick={() => setCurrentPage('shop')}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold px-8 py-3.5 text-sm rounded-full backdrop-blur-md transition-all hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5 text-[#F9D342]" />
              <span>{lang === 'id' ? 'Beli Refill Pack' : 'Buy Refill Pack'}</span>
            </button>
          </div>

          {/* Official Packaging Showcase (kemasanproduk.png) */}
          <div className="w-full max-w-xl mx-auto mt-4 reveal flex flex-col items-center">
            <div className="relative group cursor-pointer w-full" onClick={() => setCurrentPage('shop')}>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#F9D342]/30 via-emerald-500/20 to-[#F9D342]/30 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-black/35 backdrop-blur-xl border border-white/25 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-4 shadow-xl">
                <img 
                  src="/gambar/kemasanproduk.png" 
                  alt="Kemasan Produk Sircho Stamp" 
                  className="w-48 sm:w-56 h-auto object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300 flex-shrink-0"
                />
                <div className="text-center sm:text-left">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F9D342] text-black inline-block mb-1">
                    Starter Kit & Refill Pouch
                  </span>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-white">
                    Sircho Stamp Gel Cleaner
                  </h4>
                  <p className="text-xs text-white/70 mt-1 leading-relaxed">
                    12 Gel Stamps • Ekstrak Sirih & Sabut Kelapa • Aplikator ergonomis "Press, Stick, Flush" isi ulang selamanya.
                  </p>
                  <span className="text-xs text-[#F9D342] font-bold mt-2 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Lihat Pilihan Refill & Belanja →
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Fitur Mini: Terinspirasi Kartu GreenCircle Membership (Latar Kuning Hangat) */}
          <div className="w-full max-w-xl mx-auto mt-4 pt-6 border-t border-white/10 reveal">
            <div 
              onClick={() => setCurrentPage('profil')}
              className="p-5 rounded-2xl bg-gradient-to-r from-[#F9D342] via-[#F3C425] to-[#E5B51B] text-black shadow-2xl relative overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-transform text-left border-2 border-amber-300"
            >
              {/* Pattern watermark */}
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-black/5 rounded-l-full pointer-events-none flex items-center justify-center">
                <Award className="w-20 h-20 text-black/10" />
              </div>

              <div className="flex items-center justify-between mb-3 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-black text-[#F9D342] font-black text-xs flex items-center justify-center shadow-md">
                    GC
                  </span>
                  <span className="font-bold text-xs uppercase tracking-wider text-black/80 font-sans">
                    GreenCircle Membership Card
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-black text-[#F9D342] uppercase tracking-wider">
                  Active Member
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 relative z-10 pt-1">
                <div>
                  <span className="text-[10px] font-bold text-black/70 uppercase tracking-wider block">
                    Member Tier
                  </span>
                  <span className="font-serif text-xl sm:text-2xl font-black text-black">
                    {tier} Tier
                  </span>
                  <span className="text-[10px] text-black/70 block mt-0.5">
                    Kupon Diskon 5% Siap Pakai
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-bold text-black/70 uppercase tracking-wider block">
                    Points Balance
                  </span>
                  <span className="font-serif text-xl sm:text-2xl font-black text-black">
                    {points.toLocaleString('id-ID')} <span className="text-xs font-sans">PTS</span>
                  </span>
                  <span className="text-[10px] text-black/70 block mt-0.5">
                    {refillCount} Refills Terverifikasi
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Pillars Overview Preview */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-2 reveal">
            
            <div 
              onClick={() => setCurrentPage('game')}
              className="glass-card p-4 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-all cursor-pointer border-[#F9D342]/30 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#F9D342]/20 flex items-center justify-center mb-2 text-[#F9D342] group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm text-white">
                1. GreenCircle Loyalty
              </span>
              <span className="text-xs text-white/70 mt-1">
                Diskon 5%, Free Refill & cara pakai "Press, Stick, Flush"
              </span>
            </div>

            <div 
              onClick={() => setCurrentPage('product')}
              className="glass-card p-4 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-all cursor-pointer border-emerald-500/30 group"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mb-2 text-emerald-300 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm text-white">
                2. Eco-Impact Tracker
              </span>
              <span className="text-xs text-white/70 mt-1">
                1.5kg Sabut, 2.0kg Sirih & 750g Pengurangan Plastik
              </span>
            </div>

            <div 
              onClick={() => setCurrentPage('pertanian')}
              className="glass-card p-4 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-all cursor-pointer border-cyan-500/30 group"
            >
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center mb-2 text-cyan-300 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="font-bold text-sm text-white">
                3. Refill Map & Community
              </span>
              <span className="text-xs text-white/70 mt-1">
                Peta titik isi ulang Surabaya & community feed
              </span>
            </div>

          </div>

        </div>

      </div>
      
    </section>
  );
}
