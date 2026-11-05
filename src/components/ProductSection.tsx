import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { 
  langAtom, 
  refillCountAtom, 
  userPointsAtom, 
  monthlyImpactHistory, 
  scannedStampsAtom,
  IMPACT_METRICS,
  currentPageAtom
} from '../data';
import { 
  BarChart3, 
  Leaf, 
  Trash2, 
  QrCode, 
  Sparkles, 
  TrendingUp, 
  Wind, 
  Droplets, 
  ShieldCheck, 
  Camera, 
  CheckCircle2, 
  Plus, 
  Minus,
  Calendar,
  Share2,
  Check
} from 'lucide-react';

export function ProductSection() {
  const [lang] = useAtom(langAtom);
  const [, setCurrentPage] = useAtom(currentPageAtom);
  const [refillCount, setRefillCount] = useAtom(refillCountAtom);
  const [points, setPoints] = useAtom(userPointsAtom);
  const [scannedStamps, setScannedStamps] = useAtom(scannedStampsAtom);

  // Active month tab for monthly graph
  const [selectedMonthIdx, setSelectedMonthIdx] = useState(monthlyImpactHistory.length - 1);
  const currentMonthData = monthlyImpactHistory[selectedMonthIdx];

  // QR Code / Barcode Transparency Scanner Box states
  const [isScanningHistory, setIsScanningHistory] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [manualCode, setManualCode] = useState('');
  const [copiedShare, setCopiedShare] = useState(false);

  // Real-time calculated impacts
  const plasticSavedGrams = refillCount * IMPACT_METRICS.PLASTIC_PER_REFILL_GRAMS;
  const coirBiomassKg = ((refillCount * IMPACT_METRICS.COIR_BIOMASS_PER_REFILL_GRAMS) / 1000).toFixed(1);
  const betelLeafKg = ((refillCount * IMPACT_METRICS.BETEL_LEAF_PER_REFILL_GRAMS) / 1000).toFixed(1);
  const co2ReducedKg = (refillCount * IMPACT_METRICS.CO2_REDUCED_PER_REFILL_KG).toFixed(1);
  const pathogensNeutralizedMillions = (refillCount * IMPACT_METRICS.CFU_PATHOGENS_MILLIONS_PER_REFILL).toFixed(1);

  const handleSimulateQRScan = () => {
    setIsScanningHistory(true);
    setScanResult(null);

    setTimeout(() => {
      setIsScanningHistory(false);
      const code = manualCode.trim() || `SIRCHO-BATCH-${Math.floor(1000 + Math.random() * 9000)}`;
      setScanResult(`Batch [${code}] Terverifikasi: 125g Plastik dicegah, 250g Sabut Kelapa diolah, 333g Ekstrak Sirih aktif.`);
      setManualCode('');
    }, 1500);
  };

  const handleShare = () => {
    const text = `Eco-Impact Sircho Stamp: 1.5 kg Sabut Kelapa & 2.0 kg Daun Sirih dimanfaatkan, 750g Sampah Plastik dicegah, dan 1.5 kg CO2 dikurangi! #SirchoStamp #NuvoraEcoHero`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  return (
    <section className="page-section active flex-1 relative min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-10 reveal-scale">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold mb-3">
            <BarChart3 className="w-3.5 h-3.5 text-[#F9D342]" />
            <span>Pilar 2 • Eco-Impact Tracker & Transparansi Lingkungan</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-3">
            Transparansi Dampak Lingkungan
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Pantau secara terbuka pemanfaatan limbah biomassa sabut kelapa dan ekstrak daun sirih, eliminasi plastik sekali pakai, serta jejak karbon yang berhasil ditekan.
          </p>
        </div>

        {/* 4 HIGHLIGHT METRICS (Prominently featuring 1.5kg Sabut, 2.0kg Sirih, 750g Plastik, CO2 Dikurangi) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10 reveal">
          
          {/* Metrik 1: 1.5 kg Sabut Kelapa */}
          <div className="glass-panel p-5 rounded-3xl border-[#F9D342]/40 bg-gradient-to-br from-[#262012]/80 to-[#0e1811]/80 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#F9D342]">
                Biomassa Sabut
              </span>
              <div className="w-8 h-8 rounded-xl bg-[#F9D342]/20 text-[#F9D342] flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-3xl sm:text-4xl font-black text-white">
                {coirBiomassKg}
              </span>
              <span className="font-bold text-sm text-[#F9D342]">kg</span>
            </div>
            <span className="text-xs text-white/70 block mt-1">
              Sabut Kelapa Diolah
            </span>
          </div>

          {/* Metrik 2: 2.0 kg Daun Sirih */}
          <div className="glass-panel p-5 rounded-3xl border-emerald-500/40 bg-gradient-to-br from-[#122e1b]/80 to-[#09170e]/80 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">
                Ekstrak Alami
              </span>
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                <Leaf className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-3xl sm:text-4xl font-black text-white">
                {betelLeafKg}
              </span>
              <span className="font-bold text-sm text-emerald-300">kg</span>
            </div>
            <span className="text-xs text-white/70 block mt-1">
              Daun Sirih Dimanfaatkan
            </span>
          </div>

          {/* Metrik 3: 750g Plastik Dikurangi */}
          <div className="glass-panel p-5 rounded-3xl border-cyan-500/40 bg-gradient-to-br from-[#0e272a]/80 to-[#081710]/80 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-300">
                Limbah Berkurang
              </span>
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                <Trash2 className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-3xl sm:text-4xl font-black text-white">
                {plasticSavedGrams}
              </span>
              <span className="font-bold text-sm text-cyan-300">gram</span>
            </div>
            <span className="text-xs text-white/70 block mt-1">
              Plastik Sekali Pakai Dicegah
            </span>
          </div>

          {/* Metrik 4: CO2 Jejak Dikurangi */}
          <div className="glass-panel p-5 rounded-3xl border-amber-500/40 bg-gradient-to-br from-[#2a1e12]/80 to-[#0d170f]/80 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300">
                Karbon Terhindar
              </span>
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center">
                <Wind className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-3xl sm:text-4xl font-black text-white">
                {co2ReducedKg}
              </span>
              <span className="font-bold text-sm text-amber-300">kg</span>
            </div>
            <span className="text-xs text-white/70 block mt-1">
              CO2 Jejak Dikurangi
            </span>
          </div>

        </div>

        {/* GRAFIK INTERAKTIF: DATA BULANAN LIMBAH BIOMASSA YANG DIOLAH */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl mb-10 reveal shadow-2xl border-white/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F9D342]">
                Panel Grafik Penjejak Dampak
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-0.5">
                Grafik Bulanan Pemanfaatan Biomassa & Reduksi Plastik
              </h3>
            </div>

            {/* Month Selector Tabs */}
            <div className="flex items-center gap-1 bg-black/40 p-1.5 rounded-2xl border border-white/10 overflow-x-auto">
              {monthlyImpactHistory.map((m, idx) => (
                <button
                  key={m.month}
                  onClick={() => setSelectedMonthIdx(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedMonthIdx === idx 
                      ? 'bg-[#F9D342] text-black shadow-md' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {m.month}
                </button>
              ))}
            </div>
          </div>

          {/* Bar Chart Visualizer */}
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="text-white font-semibold flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#F9D342]"></span>
                  Biomassa Sabut Kelapa (kg)
                </span>
                <span className="font-bold text-[#F9D342] font-mono text-sm">
                  {currentMonthData.coirKg} kg
                </span>
              </div>
              <div className="w-full h-4 rounded-full bg-black/40 overflow-hidden border border-white/10 p-0.5">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-amber-600 via-[#F9D342] to-yellow-200 transition-all duration-700"
                  style={{ width: `${(currentMonthData.coirKg / 2.0) * 100}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="text-white font-semibold flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                  Ekstrak Daun Sirih (kg)
                </span>
                <span className="font-bold text-emerald-300 font-mono text-sm">
                  {currentMonthData.betelKg} kg
                </span>
              </div>
              <div className="w-full h-4 rounded-full bg-black/40 overflow-hidden border border-white/10 p-0.5">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-emerald-700 via-emerald-400 to-green-200 transition-all duration-700"
                  style={{ width: `${(currentMonthData.betelKg / 2.5) * 100}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="text-white font-semibold flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
                  Pengurangan Sampah Plastik Sekali Pakai (gram)
                </span>
                <span className="font-bold text-cyan-300 font-mono text-sm">
                  {currentMonthData.plasticGrams} g
                </span>
              </div>
              <div className="w-full h-4 rounded-full bg-black/40 overflow-hidden border border-white/10 p-0.5">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-cyan-600 via-cyan-400 to-sky-200 transition-all duration-700"
                  style={{ width: `${(currentMonthData.plasticGrams / 1000) * 100}%` }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs mb-2">
                <span className="text-white font-semibold flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                  Jejak Karbon Terhindar (CO2e kg)
                </span>
                <span className="font-bold text-amber-300 font-mono text-sm">
                  {currentMonthData.co2Kg} kg CO2
                </span>
              </div>
              <div className="w-full h-4 rounded-full bg-black/40 overflow-hidden border border-white/10 p-0.5">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-amber-700 via-amber-400 to-yellow-100 transition-all duration-700"
                  style={{ width: `${(currentMonthData.co2Kg / 2.0) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
            <span className="italic">
              *Data bulanan terverifikasi terintegrasi dengan jaringan Bank Sampah & Sentra Refill Surabaya.
            </span>
            <button 
              onClick={handleShare}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold flex items-center gap-1.5"
            >
              {copiedShare ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedShare ? 'Tersalin!' : 'Bagikan Metrik Dampak'}</span>
            </button>
          </div>
        </div>

        {/* FITUR PEMINDAIAN: KOTAK QR CODE / BARCODE TRANSPARAN */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-10">
          
          {/* Kotak Scanner Transparan */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl shadow-2xl border-white/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#F9D342]/20 border border-[#F9D342]/40 flex items-center justify-center text-[#F9D342]">
                <QrCode className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F9D342] block">
                  Fitur Pemindaian Kontribusi
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  Kotak QR Code / Barcode Transparan
                </h3>
              </div>
            </div>

            <p className="text-xs text-white/80 leading-relaxed mb-6">
              Pindai QR Code atau Barcode pada box Sircho Refill Pack untuk melacak riwayat kontribusi langsung pembelian Anda terhadap lingkungan.
            </p>

            {/* Transparent Viewfinder */}
            <div className="relative w-full h-52 rounded-2xl bg-black/40 backdrop-blur-md border-2 border-dashed border-[#F9D342]/60 flex flex-col items-center justify-center overflow-hidden mb-6 shadow-inner">
              <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#F9D342]"></div>
              <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#F9D342]"></div>
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#F9D342]"></div>
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#F9D342]"></div>

              {isScanningHistory ? (
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 border-4 border-[#F9D342] border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-xs font-bold text-[#F9D342] animate-pulse">
                    Mengekstrak Jejak Ekologis Batch...
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2 text-center px-4">
                  <Camera className="w-12 h-12 text-white/40" />
                  <span className="text-xs text-white/70">
                    Arahkan kamera ke QR/Barcode kemasan Sircho Stamp
                  </span>
                </div>
              )}

              {/* Scanning Light Line */}
              {isScanningHistory && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#F9D342] shadow-[0_0_15px_#F9D342] animate-bounce"></div>
              )}
            </div>

            {/* Input or Simulator */}
            <div className="space-y-3">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={manualCode}
                  onChange={(e) => setManualCode(e.target.value)}
                  placeholder="Masukkan Nomor Batch (cth: SIRCHO-ECO-8821)"
                  className="flex-1 glass-input px-4 py-2.5 rounded-xl text-xs uppercase text-white outline-none focus:border-[#F9D342]"
                />
                <button 
                  onClick={handleSimulateQRScan}
                  disabled={isScanningHistory}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#F9D342] text-black hover:bg-amber-300 transition-colors cursor-pointer"
                >
                  Pindai QR
                </button>
              </div>

              {scanResult && (
                <div className="p-4 rounded-2xl bg-black/45 border border-emerald-400/60 text-emerald-200 text-xs flex items-center gap-3 animate-fade-in backdrop-blur-md">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                  <span>{scanResult}</span>
                </div>
              )}
            </div>
          </div>

          {/* Stepper Calculator Controller */}
          <div className="lg:col-span-5 glass-card p-6 rounded-3xl border-white/20">
            <h4 className="font-serif text-lg font-bold text-white mb-2">
              Kalkulator Kustom Rumah Tangga
            </h4>
            <p className="text-xs text-white/70 mb-4">
              Sesuaikan jumlah Refill Pack untuk memproyeksikan kontribusi sanitasi Anda dalam 1 tahun ke depan.
            </p>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-white">Refill Pack Digunakan:</span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setRefillCount(Math.max(1, refillCount - 1))}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-serif text-2xl font-black text-[#F9D342] w-8 text-center">
                  {refillCount}
                </span>
                <button 
                  onClick={() => setRefillCount(refillCount + 1)}
                  className="w-8 h-8 rounded-lg bg-[#F9D342] text-black hover:bg-amber-300 flex items-center justify-center font-bold"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-white/80 border-t border-white/10 pt-4 mb-4">
              <div className="flex justify-between">
                <span>Plastik dicegah:</span>
                <strong className="text-cyan-300 font-mono">{plasticSavedGrams} Gram</strong>
              </div>
              <div className="flex justify-between">
                <span>Sabut kelapa diolah:</span>
                <strong className="text-[#F9D342] font-mono">{coirBiomassKg} Kg</strong>
              </div>
              <div className="flex justify-between">
                <span>Daun sirih diserap:</span>
                <strong className="text-emerald-300 font-mono">{betelLeafKg} Kg</strong>
              </div>
              <div className="flex justify-between">
                <span>Patogen tifoid dinetralkan:</span>
                <strong className="text-cyan-200 font-mono">{pathogensNeutralizedMillions}M CFU</strong>
              </div>
            </div>

            <button 
              onClick={() => setCurrentPage('shop')}
              className="w-full py-3 rounded-xl text-xs font-bold bg-[#F9D342] text-black hover:bg-amber-300 transition-colors flex items-center justify-center gap-2"
            >
              <span>Beli Refill Sesuai Kebutuhan</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
