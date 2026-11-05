import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { 
  langAtom, 
  userPointsAtom, 
  memberTierAtom,
  greenCircleRewards, 
  howItWorksSteps, 
  scannedStampsAtom, 
  redeemedRewardsAtom, 
  RedeemedReward,
  currentPageAtom
} from '../data';
import { 
  Award, 
  Fingerprint, 
  Sparkles, 
  Droplets, 
  Leaf, 
  Recycle, 
  ShoppingBag, 
  Gift, 
  Percent, 
  CheckCircle2, 
  ArrowRight, 
  Copy, 
  Check, 
  QrCode,
  ShieldAlert,
  Zap
} from 'lucide-react';

export function GameSection() {
  const [lang] = useAtom(langAtom);
  const [, setCurrentPage] = useAtom(currentPageAtom);
  const [points, setPoints] = useAtom(userPointsAtom);
  const [tier] = useAtom(memberTierAtom);
  const [, setScannedStamps] = useAtom(scannedStampsAtom);
  const [, setRedeemedRewards] = useAtom(redeemedRewardsAtom);

  const [activeStep, setActiveStep] = useState(0);
  const [redeemedSuccess, setRedeemedSuccess] = useState<RedeemedReward | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanMessage, setScanMessage] = useState<string | null>(null);

  const handleRedeemReward = (reward: typeof greenCircleRewards[0]) => {
    if (points < reward.pointsCost) {
      alert(lang === 'id' 
        ? `Poin Anda (${points} PTS) belum mencukupi untuk ${reward.titleId} (${reward.pointsCost} PTS). Yuk scan kemasan stamp lagi!` 
        : `Your points (${points} PTS) are insufficient for ${reward.titleEn} (${reward.pointsCost} PTS).`);
      return;
    }

    setPoints(prev => prev - reward.pointsCost);
    const newRedeem: RedeemedReward = {
      id: `red-${Date.now()}`,
      title: lang === 'id' ? reward.titleId : reward.titleEn,
      code: `GC-${reward.discountLabel.replace(/\s+/g, '')}-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
      pointsCost: reward.pointsCost,
      type: reward.type
    };

    setRedeemedRewards(prev => [newRedeem, ...prev]);
    setRedeemedSuccess(newRedeem);
  };

  const handleSimulateScan = () => {
    setIsScanning(true);
    setScanMessage(null);
    setTimeout(() => {
      setIsScanning(false);
      const newCode = `SIRCHO-STAMP-${Math.floor(1000 + Math.random() * 9000)}`;
      setPoints(prev => prev + 50);
      setScannedStamps(prev => [
        {
          id: `st-${Date.now()}`,
          code: newCode,
          date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
          points: 50,
          variant: 'Sirih Fresh Classic',
          location: 'Surabaya Hub'
        },
        ...prev
      ]);
      setScanMessage(`Berhasil! Kode [${newCode}] terverifikasi. +50 GreenCircle Points ditambahkan!`);
    }, 1500);
  };

  const handleCopy = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <section className="page-section active flex-1 relative min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-10 reveal-scale">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9D342]/20 border border-[#F9D342]/40 text-[#F9D342] text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Pilar 1 • GreenCircle Membership & Keunggulan Produk</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-3">
            Keunggulan Produk & Loyalty GreenCircle
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Inovasi sanitasi toilet gel stamp ramah lingkungan dengan konsep <strong>"Press, Stick, Flush"</strong>. Tukar poin loyalitas dengan diskon 5%, refill gratis, dan dukungan ekologis.
          </p>
        </div>

        {/* Konsep Interaktif: Cara Pakai "Press, Stick, Flush" */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl mb-12 reveal shadow-2xl border-white/20">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-[#F9D342] font-extrabold block">
              Konsep Pemakaian Praktis
            </span>
            <h3 className="font-serif text-2xl font-bold text-white mt-1">
              "Press, Stick, Flush" — 3 Detik Toilet Bersih Alami
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {howItWorksSteps.map((s, idx) => {
              const isActive = activeStep === idx;
              return (
                <div 
                  key={s.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all border ${
                    isActive 
                      ? 'bg-gradient-to-b from-[#1b3d26] to-[#0c1f13] border-[#F9D342] shadow-xl scale-[1.02]' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-[#F9D342]">
                      {s.step}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-black tracking-wider uppercase ${isActive ? 'bg-[#F9D342] text-black' : 'bg-white/10 text-white/70'}`}>
                      {s.name}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-white mb-2">
                    {lang === 'id' ? s.titleId : s.titleEn}
                  </h4>
                  <p className="text-xs text-white/75 leading-relaxed">
                    {lang === 'id' ? s.descId : s.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* TATA LETAK: GRID LAYOUT 3 KOLOM KARTU INTERAKTIF */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-extrabold block">
              Tiga Dimensi Nilai
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-0.5">
              Grid Keunggulan & Program Loyalitas
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Kolom 1: Produk Utama & Refill Pack Hemat */}
            <div className="glass-panel p-6 rounded-3xl flex flex-col justify-between border-white/20 hover:border-emerald-400/50 transition-all shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 mb-4">
                  <ShoppingBag className="w-6 h-6" />
                </div>

                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 block mb-1">
                  Pilihan Pembelian Ulang Hemat
                </span>
                <h4 className="font-serif text-xl font-bold text-white mb-2">
                  Sircho Refill Pack
                </h4>
                <p className="text-xs text-white/75 leading-relaxed mb-4">
                  Aplikator ergonomis didesain untuk digunakan berulang kali selamanya. Anda cukup membeli <strong>Sircho Refill Pack</strong> yang jauh lebih hemat hingga 40% dan mengeliminasi botol plastik tebal.
                </p>

                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-2 mb-4 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Starter Kit (12 Stamp):</span>
                    <span className="font-bold text-white">Rp 49.000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Refill Duo (2 Cartridge):</span>
                    <span className="font-bold text-[#F9D342]">Rp 36.000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Family & B2B 4-Pack:</span>
                    <span className="font-bold text-emerald-300">Rp 68.000</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setCurrentPage('shop')}
                className="w-full py-3 rounded-2xl text-xs font-bold glass-button flex items-center justify-center gap-2 hover:shadow-lg"
              >
                <span>Beli Refill Pack Sekarang</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Kolom 2: Bahan Aktif Alami (Sirih & Sabut Kelapa) */}
            <div className="glass-panel p-6 rounded-3xl flex flex-col justify-between border-white/20 hover:border-[#F9D342]/50 transition-all shadow-xl bg-gradient-to-b from-[#172e1e]/60 to-[#0c1f13]/60">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F9D342]/20 border border-[#F9D342]/40 flex items-center justify-center text-[#F9D342] mb-4">
                  <Leaf className="w-6 h-6" />
                </div>

                <span className="text-[10px] uppercase font-bold tracking-wider text-[#F9D342] block mb-1">
                  100% Fitokimia Alam & Biomassa
                </span>
                <h4 className="font-serif text-xl font-bold text-white mb-2">
                  Daun Sirih & Sabut Kelapa
                </h4>
                <p className="text-xs text-white/75 leading-relaxed mb-4">
                  Perpaduan sains alami dua biomassa Indonesia tanpa setetes pun klorin keras atau asam klorida korosif:
                </p>

                <div className="space-y-3 mb-4">
                  <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-xs">
                    <strong className="text-emerald-300 flex items-center gap-1.5 mb-1">
                      <ShieldAlert className="w-3.5 h-3.5" /> Ekstrak Daun Sirih (Piper betle L.)
                    </strong>
                    <p className="text-white/70 text-[11px] leading-relaxed">
                      Kaya kavikol & hidroksikavikol dengan efikasi 99.8% membunuh bakteri penyebab demam tifoid (<em>Salmonella Typhi</em>) dan <em>E. coli</em>.
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-xs">
                    <strong className="text-[#F9D342] flex items-center gap-1.5 mb-1">
                      <Recycle className="w-3.5 h-3.5" /> Serbuk Sabut Kelapa Terbarukan
                    </strong>
                    <p className="text-white/70 text-[11px] leading-relaxed">
                      Serat mikro-selulosa alami sebagai matriks gel dan pembersih abrasif lembut anti-kerak tanpa menggores porselen kloset.
                    </p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setCurrentPage('product')}
                className="w-full py-3 rounded-2xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center gap-2"
              >
                <span>Lihat Sains & Eco-Tracker</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Kolom 3: GreenCircle Points & Diskon Ramah Lingkungan */}
            <div className="glass-panel p-6 rounded-3xl flex flex-col justify-between border-white/20 hover:border-amber-400/50 transition-all shadow-xl bg-gradient-to-b from-[#2b2512]/60 to-[#121c15]/60">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F9D342] flex items-center justify-center text-black mb-4 font-black shadow-lg">
                  GC
                </div>

                <span className="text-[10px] uppercase font-bold tracking-wider text-[#F9D342] block mb-1">
                  GreenCircle Loyalty
                </span>
                <h4 className="font-serif text-xl font-bold text-white mb-2">
                  Tukar Poin & Diskon
                </h4>
                <p className="text-xs text-white/75 leading-relaxed mb-4">
                  Setiap stempel menghasilkan 50 GreenCircle Points. Tukarkan poinmu dengan diskon pembelian atau hadiah ramah lingkungan:
                </p>

                <div className="space-y-2.5 mb-4">
                  {greenCircleRewards.slice(0, 2).map((rew) => (
                    <div key={rew.id} className="p-3 rounded-2xl bg-black/40 border border-[#F9D342]/30 flex items-center justify-between">
                      <div>
                        <span className="px-2 py-0.5 rounded text-[9px] font-black bg-[#F9D342] text-black uppercase">
                          {rew.discountLabel}
                        </span>
                        <p className="text-xs font-bold text-white mt-1">{rew.titleId}</p>
                      </div>
                      <button 
                        onClick={() => handleRedeemReward(rew)}
                        className="px-3 py-1.5 rounded-xl bg-[#F9D342]/20 hover:bg-[#F9D342] hover:text-black text-[#F9D342] text-xs font-bold transition-all border border-[#F9D342]/40"
                      >
                        {rew.pointsCost} PTS
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-center justify-between text-xs text-white/80 p-2.5 rounded-xl bg-white/5 border border-white/10 mb-2">
                  <span>Saldo Anda Saat Ini:</span>
                  <span className="font-black text-[#F9D342]">{points} PTS (Tier {tier})</span>
                </div>
                <button 
                  onClick={handleSimulateScan}
                  disabled={isScanning}
                  className="w-full py-2.5 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center gap-2"
                >
                  <QrCode className="w-3.5 h-3.5 text-[#F9D342]" />
                  <span>{isScanning ? 'Memverifikasi...' : 'Scan Stamp (+50 PTS)'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {scanMessage && (
          <div className="mb-8 p-4 rounded-2xl bg-black/45 border border-emerald-400/60 text-emerald-200 text-xs flex items-center gap-3 animate-fade-in max-w-xl mx-auto backdrop-blur-md">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <span>{scanMessage}</span>
          </div>
        )}

        {/* Modal: Redemption Success */}
        {redeemedSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="glass-panel p-8 max-w-md w-full rounded-3xl border-2 border-[#F9D342] text-center relative shadow-2xl reveal-scale bg-black/75">
              <div className="w-16 h-16 rounded-full bg-[#F9D342]/20 border-2 border-[#F9D342] flex items-center justify-center mx-auto mb-4 text-[#F9D342]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#F9D342]">
                Penukaran Poin Berhasil
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1 mb-2">
                {redeemedSuccess.title}
              </h3>
              <p className="text-xs text-white/80 mb-6">
                Gunakan kode voucher ini saat checkout di menu "Beli Refill" untuk menikmati diskon instan!
              </p>

              <div className="p-4 rounded-2xl bg-black/50 border border-white/20 flex items-center justify-between gap-2 mb-6">
                <span className="font-mono text-lg font-black text-[#F9D342] tracking-wider">
                  {redeemedSuccess.code}
                </span>
                <button 
                  onClick={() => handleCopy(redeemedSuccess.code)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white"
                >
                  {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => { setRedeemedSuccess(null); setCurrentPage('shop'); }}
                  className="flex-1 py-3 rounded-xl font-bold text-xs bg-[#F9D342] text-black"
                >
                  Belanja Sekarang
                </button>
                <button
                  onClick={() => setRedeemedSuccess(null)}
                  className="px-4 py-3 rounded-xl font-bold text-xs bg-white/10 text-white"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
