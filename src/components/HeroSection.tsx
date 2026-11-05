import { useAtom } from 'jotai';
import { langAtom, currentPageAtom, refillCountAtom, userPointsAtom, IMPACT_METRICS } from '../data';
import { QrCode, BarChart3, Sparkles, ShieldCheck, Leaf, ArrowRight, CheckCircle2, Droplets } from 'lucide-react';
import { SirchoLogo } from './SirchoLogo';

export function HeroSection() {
  const [lang] = useAtom(langAtom);
  const [, setCurrentPage] = useAtom(currentPageAtom);
  const [refillCount] = useAtom(refillCountAtom);
  const [userPoints] = useAtom(userPointsAtom);

  const plasticSavedGrams = refillCount * IMPACT_METRICS.PLASTIC_PER_REFILL_GRAMS;
  const coirBiomassGrams = refillCount * IMPACT_METRICS.COIR_BIOMASS_PER_REFILL_GRAMS;
  const pathogensNeutralizedMillions = (refillCount * IMPACT_METRICS.CFU_PATHOGENS_MILLIONS_PER_REFILL).toFixed(1);

  return (
    <section className="page-section active flex-1 relative min-h-screen flex flex-col justify-center items-center pt-24 sm:pt-28 pb-16 px-4">
      
      {/* Background Ambience Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#C89B3B]/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Hero Container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl mx-auto text-center">
        
        {/* Glass Hero Panel */}
        <div className="glass-panel w-full px-6 py-10 md:py-14 md:px-12 flex flex-col items-center gap-6 relative overflow-hidden shadow-2xl border-white/20">
          
          {/* Subtle Eco Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/40 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-md reveal-scale">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            {lang === 'id' ? 'Ekosistem Pembersih Toilet Ramah Lingkungan' : 'Eco-Friendly Toilet Sanitation Ecosystem'}
          </div>

          {/* Logo Sircho Stamp */}
          <div className="relative z-10 reveal-scale my-1" style={{ animationDelay: '100ms' }}>
            <SirchoLogo size="xl" showText={false} />
            <p className="text-xs uppercase tracking-widest text-[#C89B3B] font-bold mt-2">
              Sircho Stamp • by Nuvora Co.
            </p>
          </div>

          {/* Interactive Title */}
          <h1 className="relative z-10 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.15] reveal-scale" style={{ animationDelay: '150ms' }}>
            Sircho<span className="text-[#C89B3B]">Earth</span>:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-white to-amber-200">
              Track Your Stamp, Measure Your Impact.
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="relative z-10 text-sm sm:text-base md:text-lg text-white/85 max-w-2xl reveal mx-auto leading-relaxed" style={{ animationDelay: '200ms' }}>
            {lang === 'id' ? 
              'Revolusi pembersih toilet gel stamp berbahan aktif ekstrak daun sirih (Piper betle L.) dan biomassa sabut kelapa terbarukan. Mencegah demam tifoid, menghentikan limbah botol plastik tebal, dan merawat sanitasi sehat untuk bumi.' : 
              'The revolution in toilet gel stamp sanitation powered by active betel leaf (Piper betle L.) extract and upcycled coconut coir biomass. Prevent typhoid fever, eliminate heavy plastic bottle waste, and nurture a cleaner earth.'}
          </p>

          {/* Call-to-Action Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 w-full max-w-md mx-auto reveal" style={{ animationDelay: '250ms' }}>
            <button 
              onClick={() => setCurrentPage('game')}
              className="w-full sm:w-auto glass-button px-8 py-3.5 text-sm font-bold shadow-xl hover:shadow-emerald-900/30 hover:-translate-y-1 flex items-center justify-center gap-2.5 rounded-full cursor-pointer group"
            >
              <QrCode className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              <span>Scan Your Stamp</span>
            </button>
            <button 
              onClick={() => setCurrentPage('product')}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold px-8 py-3.5 text-sm rounded-full backdrop-blur-md transition-all hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
            >
              <BarChart3 className="w-5 h-5 text-emerald-300" />
              <span>Explore Eco-Impact</span>
            </button>
          </div>

          {/* Real-time Impact Snapshot Ticker (Interactive Counter Cards) */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-6 pt-6 border-t border-white/10 reveal" style={{ animationDelay: '300ms' }}>
            
            {/* Metric 1: Plastic Saved */}
            <div 
              onClick={() => setCurrentPage('product')}
              className="glass-card p-4 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-all cursor-pointer border-emerald-500/20 group"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mb-2 text-emerald-300 group-hover:scale-110 transition-transform">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl md:text-3xl font-extrabold text-white">
                {plasticSavedGrams} <span className="text-xs font-sans text-emerald-300">g</span>
              </span>
              <span className="text-xs text-white/70 mt-0.5">
                {lang === 'id' ? 'Plastik Sekali Pakai Dicegah' : 'Single-Use Plastic Prevented'}
              </span>
            </div>

            {/* Metric 2: Coconut Coir Biomass */}
            <div 
              onClick={() => setCurrentPage('product')}
              className="glass-card p-4 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-all cursor-pointer border-[#C89B3B]/30 group"
            >
              <div className="w-10 h-10 rounded-full bg-[#C89B3B]/20 flex items-center justify-center mb-2 text-[#C89B3B] group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl md:text-3xl font-extrabold text-[#C89B3B]">
                {coirBiomassGrams} <span className="text-xs font-sans text-amber-200">g</span>
              </span>
              <span className="text-xs text-white/70 mt-0.5">
                {lang === 'id' ? 'Biomassa Sabut Dimanfaatkan' : 'Coir Biomass Upcycled'}
              </span>
            </div>

            {/* Metric 3: Pathogen Mitigation */}
            <div 
              onClick={() => setCurrentPage('pertanian')}
              className="glass-card p-4 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-all cursor-pointer border-cyan-500/20 group"
            >
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center mb-2 text-cyan-300 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl md:text-3xl font-extrabold text-cyan-200">
                {pathogensNeutralizedMillions}M+
              </span>
              <span className="text-xs text-white/70 mt-0.5">
                {lang === 'id' ? 'Koloni Patogen Tifoid Dinetralkan' : 'Typhoid Pathogens Neutralized'}
              </span>
            </div>

          </div>

          {/* Quick Pillars Footer inside Hero */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/60 pt-2">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              {lang === 'id' ? 'Ekstrak Sirih Alami 100%' : '100% Betel Leaf Extract'}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              {lang === 'id' ? 'Aman untuk Septic Tank' : 'Septic Tank Microbiome Safe'}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C89B3B]" />
              {lang === 'id' ? 'Bebas Klorin & Asam Keras' : 'Zero Chlorine & Harsh Acids'}
            </span>
          </div>

        </div>

        {/* SDGs Ribbon Preview below Hero */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">
            {lang === 'id' ? 'Mendukung Tujuan PBB:' : 'Advancing UN SDGs:'}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-[#4C9F38]/30 border border-[#4C9F38]/50 text-xs font-bold text-white flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4C9F38]"></span> SDG 3: Good Health
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-[#26BDE2]/30 border border-[#26BDE2]/50 text-xs font-bold text-white flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#26BDE2]"></span> SDG 6: Clean Water
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-[#A21942]/30 border border-[#A21942]/50 text-xs font-bold text-white flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A21942]"></span> SDG 8: Decent Work
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-[#BF8B2E]/30 border border-[#BF8B2E]/50 text-xs font-bold text-white flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BF8B2E]"></span> SDG 12: Circular Economy
          </span>
        </div>

      </div>
      
    </section>
  );
}
