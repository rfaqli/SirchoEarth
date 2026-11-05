import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { 
  langAtom, 
  currentPageAtom, 
  refillCountAtom, 
  userPointsAtom, 
  userNameAtom, 
  IMPACT_METRICS 
} from '../data';
import { 
  Leaf, 
  Sparkles, 
  ShieldCheck, 
  Trash2, 
  Droplet, 
  TrendingUp, 
  Share2, 
  Check, 
  Info, 
  Plus, 
  Minus, 
  Award, 
  ArrowRight,
  AlertCircle
} from 'lucide-react';

export function ProductSection() {
  const [lang] = useAtom(langAtom);
  const [, setCurrentPage] = useAtom(currentPageAtom);
  const [refillCount, setRefillCount] = useAtom(refillCountAtom);
  const [userPoints] = useAtom(userPointsAtom);
  const [userName] = useAtom(userNameAtom);
  const [copied, setCopied] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);

  // Real-time calculated impacts
  const plasticSavedGrams = refillCount * IMPACT_METRICS.PLASTIC_PER_REFILL_GRAMS;
  const plasticSavedKg = (plasticSavedGrams / 1000).toFixed(2);
  const conventionalBottlesReplaced = refillCount;

  const coirBiomassGrams = refillCount * IMPACT_METRICS.COIR_BIOMASS_PER_REFILL_GRAMS;
  const coirBiomassKg = (coirBiomassGrams / 1000).toFixed(2);

  const pathogensNeutralizedMillions = (refillCount * IMPACT_METRICS.CFU_PATHOGENS_MILLIONS_PER_REFILL).toFixed(1);
  const protectionDays = refillCount * IMPACT_METRICS.PROTECTION_DAYS_PER_REFILL;
  const chlorineAvoidedGrams = refillCount * IMPACT_METRICS.CHLORINE_AVOIDED_GRAMS;

  const handleIncrement = (amount: number) => {
    setRefillCount(prev => Math.max(1, prev + amount));
  };

  const handleShare = () => {
    const text = `Saya telah mencegah ${plasticSavedGrams}g limbah plastik sekali pakai dan memanfaatkan ${coirBiomassGrams}g biomassa sabut kelapa bersama Sircho Stamp oleh Nuvora Co! #SirchoEarth #EcoSanitation`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="page-section active flex-1 relative min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Title */}
        <div className="text-center mb-10 reveal-scale">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Fitur Utama 1 • Pelacak Dampak Real-Time' : 'Core Feature 1 • Real-Time Impact Tracker'}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-3">
            Eco-Impact Tracker & Calculator
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {lang === 'id' 
              ? 'Masukkan jumlah Refill Pack Sircho Stamp yang telah kamu gunakan. Lihat secara transparan bagaimana setiap stempel menjaga kesehatan keluarga dan kelestarian bumi.'
              : 'Enter the number of Sircho Stamp Refill Packs you have used. Transparently track how each stamp shields family health and preserves the planet.'}
          </p>
        </div>

        {/* Main Grid: Interactive Counter Card & Real-Time Metrics */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Interactive Counter Controller Card */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 reveal-left relative overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-white">
                  {lang === 'id' ? 'Hitung Refill Anda' : 'Calculate Your Refills'}
                </h3>
                <p className="text-xs text-white/60">
                  {lang === 'id' ? 'Berdasarkan konsumsi rumah tangga' : 'Based on household consumption'}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Leaf className="w-5 h-5" />
              </div>
            </div>

            {/* Counter Interactive Input */}
            <div className="flex flex-col items-center justify-center py-4 bg-white/5 rounded-2xl border border-white/10 mb-6">
              <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold mb-2">
                {lang === 'id' ? 'Jumlah Refill Pack Digunakan' : 'Refill Packs Used'}
              </span>
              
              <div className="flex items-center gap-4 my-2">
                <button 
                  onClick={() => handleIncrement(-1)}
                  disabled={refillCount <= 1}
                  className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-white transition-all text-xl font-bold"
                  aria-label="Decrease refill count"
                >
                  <Minus className="w-5 h-5" />
                </button>

                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="500"
                    value={refillCount}
                    onChange={(e) => setRefillCount(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-28 text-center font-serif text-4xl sm:text-5xl font-black text-white bg-transparent outline-none focus:ring-2 focus:ring-[#C89B3B] rounded-lg"
                  />
                  <span className="block text-[11px] text-center text-white/50 font-sans mt-1">
                    Cartridges
                  </span>
                </div>

                <button 
                  onClick={() => handleIncrement(1)}
                  className="w-12 h-12 rounded-xl glass-button flex items-center justify-center text-white transition-all text-xl font-bold shadow-lg"
                  aria-label="Increase refill count"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>

              {/* Range Slider */}
              <div className="w-full px-6 mt-4">
                <input 
                  type="range"
                  min="1"
                  max="50"
                  value={refillCount}
                  onChange={(e) => setRefillCount(parseInt(e.target.value))}
                  className="w-full accent-[#C89B3B] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-white/50 mt-1">
                  <span>1 Pack</span>
                  <span>25 Packs</span>
                  <span>50+ Packs</span>
                </div>
              </div>
            </div>

            {/* Quick Increment Preset Buttons */}
            <div className="space-y-3 mb-6">
              <span className="text-xs text-white/70 font-medium block">
                {lang === 'id' ? 'Preset Cepat Rumah Tangga:' : 'Quick Household Presets:'}
              </span>
              <div className="grid grid-cols-3 gap-2">
                <button 
                  onClick={() => setRefillCount(2)}
                  className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all ${refillCount === 2 ? 'bg-[#226b3e] border-emerald-400 text-white' : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'}`}
                >
                  {lang === 'id' ? '1-2 Orang (2x)' : '1-2 Pax (2x)'}
                </button>
                <button 
                  onClick={() => setRefillCount(6)}
                  className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all ${refillCount === 6 ? 'bg-[#226b3e] border-emerald-400 text-white' : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'}`}
                >
                  {lang === 'id' ? 'Keluarga (6x)' : 'Family (6x)'}
                </button>
                <button 
                  onClick={() => setRefillCount(12)}
                  className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all ${refillCount === 12 ? 'bg-[#226b3e] border-emerald-400 text-white' : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'}`}
                >
                  {lang === 'id' ? '1 Tahun (12x)' : '1 Year (12x)'}
                </button>
              </div>
            </div>

            {/* Quick CTA to buy refills or scan */}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <button 
                onClick={() => setCurrentPage('game')}
                className="w-full glass-button py-3 text-xs font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <Award className="w-4 h-4" />
                {lang === 'id' ? 'Scan Stamp & Klaim Poin' : 'Scan Stamp & Claim Points'}
              </button>
              <button 
                onClick={() => setCurrentPage('shop')}
                className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white py-2.5 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                {lang === 'id' ? 'Beli Refill Pack Tambahan' : 'Purchase Additional Refills'}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Right Column: 3 Real-Time Key Eco-Impact Cards */}
          <div className="lg:col-span-7 space-y-5 reveal-right">
            
            {/* Impact 1: Total Single-Use Plastic Prevented */}
            <div className="glass-panel p-6 rounded-2xl border-emerald-500/30 hover:border-emerald-500/60 transition-all shadow-xl bg-gradient-to-br from-[#0c2417]/80 to-[#081a10]/80">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
                    <Trash2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-400 block">
                      {lang === 'id' ? 'Pilar 1 • Eliminasi Polusi Plastik' : 'Pillar 1 • Plastic Pollution Elimination'}
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                      {lang === 'id' ? 'Plastik Sekali Pakai Dicegah' : 'Single-Use Plastic Prevented'}
                    </h4>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-serif text-3xl sm:text-4xl font-black text-emerald-300">
                    {plasticSavedGrams}
                  </span>
                  <span className="text-sm font-bold text-emerald-400 ml-1">gram</span>
                  <span className="block text-[11px] text-white/60">
                    (~{plasticSavedKg} kg)
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/25 border border-white/10 text-xs text-white/85 leading-relaxed">
                <p>
                  {lang === 'id' ? (
                    <>
                      💡 <strong>Setara dengan menggantikan {conventionalBottlesReplaced} botol</strong> pembersih toilet konvensional (HDPE tebal ~48g per botol). Kamu telah menghentikan penumpukan plastik di TPA dan laut!
                    </>
                  ) : (
                    <>
                      💡 <strong>Equivalent to preventing {conventionalBottlesReplaced} thick HDPE bottles</strong> of conventional chemical cleaner (~48g plastic each) from polluting oceans and landfills.
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Impact 2: Coconut Coir Biomass Utilized */}
            <div className="glass-panel p-6 rounded-2xl border-[#C89B3B]/40 hover:border-[#C89B3B]/70 transition-all shadow-xl bg-gradient-to-br from-[#1f1911]/80 to-[#0d1610]/80">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#C89B3B]/20 border border-[#C89B3B]/40 flex items-center justify-center text-[#C89B3B]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-[#C89B3B] block">
                      {lang === 'id' ? 'Pilar 2 • Sirkular Pertanian Lokal' : 'Pillar 2 • Local Agro-Circularity'}
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                      {lang === 'id' ? 'Biomassa Sabut Kelapa Dimanfaatkan' : 'Coconut Coir Biomass Upcycled'}
                    </h4>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-serif text-3xl sm:text-4xl font-black text-[#C89B3B]">
                    {coirBiomassGrams}
                  </span>
                  <span className="text-sm font-bold text-amber-200 ml-1">gram</span>
                  <span className="block text-[11px] text-white/60">
                    (~{coirBiomassKg} kg)
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/25 border border-white/10 text-xs text-white/85 leading-relaxed">
                <p>
                  {lang === 'id' ? (
                    <>
                      🥥 <strong>Limbah serat sabut kelapa</strong> dari perkebunan rakyat diubah menjadi mikro-matriks abrasif alami biodegradable pengangkat kerak kloset tanpa mikroplastik dan tanpa pembakaran limbah kebun.
                    </>
                  ) : (
                    <>
                      🥥 <strong>Upcycled fibrous coconut coir waste</strong> sourced from local farming cooperatives serves as natural biodegradable micro-abrasive without releasing synthetic microplastics or agricultural open burning.
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Impact 3: Pathogen & Typhoid Sanitation Risk Prevention */}
            <div className="glass-panel p-6 rounded-2xl border-cyan-500/30 hover:border-cyan-500/60 transition-all shadow-xl bg-gradient-to-br from-[#0b2126]/80 to-[#091a10]/80">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-cyan-300 block">
                      {lang === 'id' ? 'Pilar 3 • Higienitas & Kesehatan (SDG 3)' : 'Pillar 3 • Hygiene & Health (SDG 3)'}
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                      {lang === 'id' ? 'Pencegahan Bakteri Patogen Sanitasi' : 'Sanitation Pathogen Risk Prevention'}
                    </h4>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-serif text-3xl sm:text-4xl font-black text-cyan-200">
                    {pathogensNeutralizedMillions}M
                  </span>
                  <span className="text-sm font-bold text-cyan-300 ml-1">CFU</span>
                  <span className="block text-[11px] text-cyan-400 font-semibold">
                    99.8% Biofilm Inhibitor
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/25 border border-white/10 text-xs text-white/85 leading-relaxed">
                <p>
                  {lang === 'id' ? (
                    <>
                      🛡️ <strong>{protectionDays} Hari Perlindungan Aktif:</strong> Kandungan fenolik alami (kavikol & hidroksikavikol) daun sirih menonaktifkan bakteri penyebab demam tifoid (<em>Salmonella Typhi</em>) dan <em>E. coli</em> setiap kali tombol siram ditekan.
                    </>
                  ) : (
                    <>
                      🛡️ <strong>{protectionDays} Days of Active Protection:</strong> Natural phenolics (chavicol & hydroxychavicol) from betel leaf deactivate typhoid agents (<em>Salmonella Typhi</em>) and <em>E. coli</em> at every flush.
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Additional Secondary Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-1">
              <div className="glass-card p-3.5 rounded-xl flex items-center gap-3">
                <Droplet className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <span className="text-[11px] text-white/60 block">
                    {lang === 'id' ? 'Limbah Klorin Dihindari' : 'Chlorine Effluent Avoided'}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {chlorineAvoidedGrams}g Kimia Beracun
                  </span>
                </div>
              </div>

              <div className="glass-card p-3.5 rounded-xl flex items-center gap-3">
                <Award className="w-5 h-5 text-[#C89B3B] flex-shrink-0" />
                <div>
                  <span className="text-[11px] text-white/60 block">
                    {lang === 'id' ? 'Potensi Green Points' : 'Earned Green Points'}
                  </span>
                  <span className="text-sm font-bold text-[#C89B3B]">
                    +{refillCount * 50} Poin Ekologis
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Comparison Section: Sircho Stamp vs Traditional Toilet Cleaners */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl mb-12 reveal">
          <h3 className="font-serif text-2xl font-bold text-center text-white mb-2">
            {lang === 'id' ? 'Sircho Stamp vs Pembersih Konvensional' : 'Sircho Stamp vs Conventional Cleaners'}
          </h3>
          <p className="text-xs sm:text-sm text-center text-white/70 max-w-xl mx-auto mb-6">
            {lang === 'id' ? 'Mengapa beralih ke formula daun sirih dan sabut kelapa memberikan dampak nyata bagi toilet dan lingkungan.' : 'Why switching to betel leaf and coconut coir formula creates tangible impact for your home and planet.'}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Sircho Stamp Advantages */}
            <div className="glass-card p-5 rounded-2xl border-emerald-500/40 bg-emerald-950/20">
              <div className="flex items-center gap-2 mb-4 text-emerald-300 font-bold text-sm">
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/40">
                  ✨ Sircho Stamp (Nuvora Co)
                </span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-white/90">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Zero botol plastik tebal:</strong> Cartridge refill mungil yang menggantikan botol HDPE berat.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Ekstrak Daun Sirih Alami:</strong> Menghambat <em>Salmonella Typhi</em> tanpa menghasilkan gas beracun di kamar mandi.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Biomassa Sabut Kelapa:</strong> Scrub pembersih mikroskopis 100% alami dan terurai secara hayati.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Ramah Tangki Septik:</strong> Menjaga mikroba pengurai tetap hidup sehingga septik tank tidak cepat mampet.</span>
                </li>
              </ul>
            </div>

            {/* Conventional Cleaners Drawbacks */}
            <div className="glass-card p-5 rounded-2xl border-red-500/30 bg-red-950/10">
              <div className="flex items-center gap-2 mb-4 text-red-300 font-bold text-sm">
                <span className="px-2.5 py-1 rounded-md bg-red-500/20 border border-red-500/40">
                  ⚠️ Pembersih Kimia Konvensional
                </span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Plastik masif:</strong> Menghasilkan 500-600 gram sampah plastik sekali pakai per rumah tangga setiap tahun.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Asam Klorida (HCl) / Klorin:</strong> Uap menyengat yang mengiritasi mata dan paru-paru anak & keluarga.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Merusak Ekosistem Air:</strong> Membunuh bakteri pengurai limbah, mencemari resapan air sumur di sekitar.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Mengikis Enamel Kloset:</strong> Mengikis lapisan keramik membuat kotoran semakin mudah menempel kembali.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Share Impact Card / Certificate Button */}
        <div className="glass-card p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left reveal">
          <div>
            <h4 className="font-bold text-white text-base">
              {lang === 'id' ? 'Bagikan Pencapaian Eco-Impact Anda' : 'Share Your Eco-Impact Milestone'}
            </h4>
            <p className="text-xs text-white/70">
              {lang === 'id' ? 'Sebarkan inspirasi sanitasi ramah lingkungan kepada teman dan keluarga.' : 'Spread eco-sanitation inspiration to friends and family.'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={handleShare}
              className="glass-button px-5 py-2.5 text-xs font-bold rounded-xl flex items-center gap-2 hover:shadow-lg"
            >
              <Share2 className="w-4 h-4" />
              {copied ? (lang === 'id' ? 'Tersalin ke Clipboard!' : 'Copied to Clipboard!') : (lang === 'id' ? 'Salin Teks Dampak' : 'Copy Impact Stats')}
            </button>
            <button 
              onClick={() => setShowCertificate(!showCertificate)}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2.5 text-xs font-bold rounded-xl flex items-center gap-2 transition-colors"
            >
              <Award className="w-4 h-4 text-[#C89B3B]" />
              {showCertificate ? (lang === 'id' ? 'Tutup Paspor' : 'Close Badge') : (lang === 'id' ? 'Lihat Kartu Eco' : 'View Eco Badge')}
            </button>
          </div>
        </div>

        {/* Eco Badge Certificate Modal / Preview */}
        {showCertificate && (
          <div className="mt-6 glass-panel p-8 rounded-3xl border-2 border-[#C89B3B]/50 max-w-xl mx-auto text-center relative shadow-2xl reveal-scale bg-gradient-to-b from-[#0e2c1c] to-[#07160e]">
            <div className="w-16 h-16 rounded-full bg-[#C89B3B]/20 border-2 border-[#C89B3B] flex items-center justify-center mx-auto mb-4 text-[#C89B3B]">
              <Award className="w-8 h-8" />
            </div>
            <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">
              Official Eco-Impact Verified by Nuvora Co.
            </span>
            <h3 className="font-serif text-2xl font-bold text-white mt-1 mb-2">
              Sertifikat Penjaga Sanitasi Bumi
            </h3>
            <p className="text-xs text-white/80 mb-6">
              Diberikan kepada <strong>{userName || 'Sahabat SirchoEarth'}</strong> atas kontribusi nyata:
            </p>
            <div className="grid grid-cols-2 gap-3 text-left p-4 rounded-xl bg-black/40 border border-white/10 mb-6">
              <div>
                <span className="text-[10px] text-white/60">Plastik Dicegah:</span>
                <p className="text-base font-bold text-emerald-300">{plasticSavedGrams} Gram</p>
              </div>
              <div>
                <span className="text-[10px] text-white/60">Biomassa Sabut:</span>
                <p className="text-base font-bold text-[#C89B3B]">{coirBiomassGrams} Gram</p>
              </div>
              <div>
                <span className="text-[10px] text-white/60">Patogen Tifoid Dicegah:</span>
                <p className="text-base font-bold text-cyan-300">{pathogensNeutralizedMillions}M CFU</p>
              </div>
              <div>
                <span className="text-[10px] text-white/60">Green Points:</span>
                <p className="text-base font-bold text-amber-200">{userPoints} PTS</p>
              </div>
            </div>
            <p className="text-[10px] text-white/50 italic">
              "Kloset Bersih Alami, Bumi Tetap Lestari." • SirchoEarth Ecosystem 2026
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
