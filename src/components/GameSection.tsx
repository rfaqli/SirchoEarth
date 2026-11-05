import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { 
  langAtom, 
  userPointsAtom, 
  scannedStampsAtom, 
  redeemedRewardsAtom, 
  rewardsCatalog, 
  IMPACT_METRICS,
  RedeemedReward,
  refillCountAtom
} from '../data';
import { 
  Award, 
  QrCode, 
  Gift, 
  TreePine, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Copy, 
  Check, 
  Camera, 
  Zap, 
  HeartHandshake,
  Percent,
  Truck
} from 'lucide-react';

export function GameSection() {
  const [lang] = useAtom(langAtom);
  const [points, setPoints] = useAtom(userPointsAtom);
  const [, setRefillCount] = useAtom(refillCountAtom);
  const [scannedStamps, setScannedStamps] = useAtom(scannedStampsAtom);
  const [redeemedRewards, setRedeemedRewards] = useAtom(redeemedRewardsAtom);

  // Scanner states
  const [stampCodeInput, setStampCodeInput] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanSuccessMessage, setScanSuccessMessage] = useState<string | null>(null);

  // Redemption states
  const [activeTab, setActiveTab] = useState<'rewards' | 'scanner' | 'history'>('rewards');
  const [redeemSuccess, setRedeemSuccess] = useState<RedeemedReward | null>(null);
  const [insufficientPointsModal, setInsufficientPointsModal] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  // Eco-Tier calculation
  const getTier = (pts: number) => {
    if (pts >= 500) return { name: 'Earth Champion', level: 4, next: 1000, color: 'text-amber-300', bg: 'bg-amber-500/20 border-amber-400/40' };
    if (pts >= 250) return { name: 'Eco Guardian', level: 3, next: 500, color: 'text-emerald-300', bg: 'bg-emerald-500/20 border-emerald-400/40' };
    if (pts >= 100) return { name: 'Green Sprout', level: 2, next: 250, color: 'text-cyan-300', bg: 'bg-cyan-500/20 border-cyan-400/40' };
    return { name: 'Eco Seedling', level: 1, next: 100, color: 'text-white/80', bg: 'bg-white/10 border-white/20' };
  };

  const currentTier = getTier(points);

  // Scan simulation
  const handleSimulateScan = () => {
    setIsScanning(true);
    setScanSuccessMessage(null);

    setTimeout(() => {
      setIsScanning(false);
      const generatedCode = stampCodeInput.trim() || `SIRCHO-BATCH-${Math.floor(1000 + Math.random() * 9000)}`;
      const earnedPoints = IMPACT_METRICS.POINTS_PER_STAMP;

      const newStamp = {
        id: `stamp-${Date.now()}`,
        code: generatedCode.toUpperCase(),
        date: new Date().toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', { day: '2-digit', month: 'short', year: 'numeric' }),
        points: earnedPoints,
        variant: 'Sirih Fresh Classic'
      };

      setScannedStamps(prev => [newStamp, ...prev]);
      setPoints(prev => prev + earnedPoints);
      setRefillCount(prev => prev + 1);
      setStampCodeInput('');
      setScanSuccessMessage(lang === 'id' 
        ? `Sukses! Stamp [${newStamp.code}] terverifikasi. +${earnedPoints} Green Points & +1 Refill dicatat!` 
        : `Success! Stamp [${newStamp.code}] verified. +${earnedPoints} Green Points & +1 Refill recorded!`);
    }, 1800);
  };

  // Redeem logic
  const handleRedeem = (item: typeof rewardsCatalog[0]) => {
    if (points < item.pointsCost) {
      setInsufficientPointsModal(
        lang === 'id' 
          ? `Poin Anda (${points} PTS) belum mencukupi untuk ${item.titleId} (${item.pointsCost} PTS). Yuk scan kemasan Sircho Stamp lagi!` 
          : `Your balance (${points} PTS) is insufficient for ${item.titleEn} (${item.pointsCost} PTS). Scan more Sircho Stamps to earn points!`
      );
      return;
    }

    // Deduct points
    setPoints(prev => prev - item.pointsCost);
    const newRedemption: RedeemedReward = {
      id: `red-${Date.now()}`,
      title: lang === 'id' ? item.titleId : item.titleEn,
      code: `ECO-${item.type.toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', { day: '2-digit', month: 'short', year: 'numeric' }),
      pointsCost: item.pointsCost,
      type: item.type
    };

    setRedeemedRewards(prev => [newRedemption, ...prev]);
    setRedeemSuccess(newRedemption);
  };

  const handleCopyCode = (code: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <section className="page-section active flex-1 relative min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-10 reveal-scale">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C89B3B]/20 border border-[#C89B3B]/30 text-[#C89B3B] text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === 'id' ? 'Fitur Utama 2 • Green Rewards & Gamifikasi' : 'Core Feature 2 • Green Rewards & Gamification'}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-3">
            {lang === 'id' ? 'Koleksi Stamp, Raih Hadiah Hijau' : 'Collect Stamps, Earn Green Rewards'}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {lang === 'id' 
              ? 'Setiap pemindaian kemasan Sircho Stamp bernilai 50 Green Points. Tukarkan poinmu dengan voucher diskon eksklusif atau donasi penanaman pohon mangrove pesisir.' 
              : 'Every Sircho Stamp packaging scan earns 50 Green Points. Redeem your points for exclusive vouchers or donate to coastal mangrove tree planting.'}
          </p>
        </div>

        {/* User Green Wallet & Level Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl mb-8 reveal shadow-2xl relative overflow-hidden bg-gradient-to-r from-[#0d2a19]/90 via-[#0a1f13]/90 to-[#142617]/90 border-white/20">
          <div className="grid md:grid-cols-12 gap-6 items-center">
            
            {/* Left: Points Balance */}
            <div className="md:col-span-5 flex items-center gap-4 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#C89B3B] to-[#8C5A32] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                <Gift className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold block">
                  {lang === 'id' ? 'Saldo Green Points' : 'Green Points Wallet'}
                </span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="font-serif text-4xl sm:text-5xl font-black text-white">
                    {points}
                  </span>
                  <span className="text-sm font-bold text-[#C89B3B]">
                    POINTS
                  </span>
                </div>
                <span className="text-xs text-white/60">
                  {lang === 'id' ? '1 Stamp = +50 Green Points' : '1 Stamp = +50 Green Points'}
                </span>
              </div>
            </div>

            {/* Middle: Rank Tier Badge */}
            <div className="md:col-span-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/60">
                  {lang === 'id' ? 'Peringkat Ekologis:' : 'Eco Rank Tier:'}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${currentTier.bg} ${currentTier.color}`}>
                  Level {currentTier.level} • {currentTier.name}
                </span>
              </div>
              
              {/* Tier Progress Bar */}
              <div className="w-full h-2.5 rounded-full bg-black/40 overflow-hidden border border-white/10">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 via-[#C89B3B] to-amber-300 transition-all duration-700 rounded-full"
                  style={{ width: `${Math.min(100, (points / currentTier.next) * 100)}%` }}
                ></div>
              </div>
              <p className="text-[11px] text-white/50 text-right">
                {points} / {currentTier.next} PTS {lang === 'id' ? 'menuju tier berikutnya' : 'to next tier'}
              </p>
            </div>

            {/* Right: Quick Action to Scan */}
            <div className="md:col-span-3 flex justify-center md:justify-end">
              <button 
                onClick={() => setActiveTab('scanner')}
                className="w-full md:w-auto glass-button px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:shadow-xl transition-transform hover:-translate-y-0.5"
              >
                <QrCode className="w-4 h-4" />
                <span>{lang === 'id' ? 'Scan Stamp Baru' : 'Scan New Stamp'}</span>
              </button>
            </div>

          </div>
        </div>

        {/* Tab Navigation: Rewards Store vs Stamp Scanner vs History */}
        <div className="flex items-center justify-center gap-2 mb-8 reveal">
          <button
            onClick={() => setActiveTab('rewards')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'rewards' ? 'bg-[#226b3e] text-white shadow-lg' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
          >
            <Gift className="w-4 h-4" />
            <span>{lang === 'id' ? 'Tukar Poin (Rewards Store)' : 'Redeem Store'}</span>
          </button>
          
          <button
            onClick={() => setActiveTab('scanner')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'scanner' ? 'bg-[#226b3e] text-white shadow-lg' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
          >
            <QrCode className="w-4 h-4" />
            <span>{lang === 'id' ? 'Simulasi Scanner Stamp' : 'Stamp Scanner'}</span>
          </button>

          <button
            onClick={() => setActiveTab('history')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'history' ? 'bg-[#226b3e] text-white shadow-lg' : 'bg-white/5 text-white/70 hover:bg-white/10'}`}
          >
            <Sparkles className="w-4 h-4" />
            <span>{lang === 'id' ? 'Riwayat' : 'History'} ({scannedStamps.length + redeemedRewards.length})</span>
          </button>
        </div>

        {/* TAB 1: REWARDS STORE */}
        {activeTab === 'rewards' && (
          <div className="space-y-6 reveal">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rewardsCatalog.map((item) => {
                const canAfford = points >= item.pointsCost;
                return (
                  <div 
                    key={item.id}
                    className="glass-panel p-6 rounded-3xl flex flex-col justify-between card-hover border-white/15 hover:border-emerald-400/50 relative overflow-hidden group"
                  >
                    {/* Top tag */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${item.type === 'tree' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30' : item.type === 'voucher' ? 'bg-[#C89B3B]/20 text-[#C89B3B] border border-[#C89B3B]/40' : 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30'}`}>
                          {item.type === 'tree' ? '🌱 Eco Impact' : item.type === 'voucher' ? '🎟️ Voucher Diskon' : '🎁 Merchandise'}
                        </span>
                        
                        <div className="flex items-center gap-1 bg-black/30 px-2.5 py-1 rounded-full border border-white/10">
                          <Zap className="w-3 h-3 text-[#C89B3B]" />
                          <span className="font-bold text-xs text-white">{item.pointsCost} PTS</span>
                        </div>
                      </div>

                      <h3 className="font-serif text-lg font-bold text-white mb-2 leading-snug">
                        {lang === 'id' ? item.titleId : item.titleEn}
                      </h3>
                      <p className="text-xs text-white/75 leading-relaxed mb-6">
                        {lang === 'id' ? item.descriptionId : item.descriptionEn}
                      </p>
                    </div>

                    {/* Bottom Action Button */}
                    <button
                      onClick={() => handleRedeem(item)}
                      className={`w-full py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                        canAfford 
                          ? 'glass-button hover:shadow-xl' 
                          : 'bg-white/10 text-white/40 border border-white/10 cursor-pointer hover:bg-white/15'
                      }`}
                    >
                      {item.type === 'tree' ? (
                        <>
                          <TreePine className="w-4 h-4" />
                          <span>{lang === 'id' ? 'Donasikan Poin' : 'Donate Points'}</span>
                        </>
                      ) : (
                        <>
                          <Gift className="w-4 h-4" />
                          <span>{lang === 'id' ? 'Tukarkan Voucher' : 'Redeem Voucher'}</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: STAMP SCANNER SIMULATOR */}
        {activeTab === 'scanner' && (
          <div className="max-w-xl mx-auto glass-panel p-6 sm:p-8 rounded-3xl reveal-scale shadow-2xl">
            <div className="text-center mb-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mx-auto mb-3 text-emerald-300">
                <Camera className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-1">
                {lang === 'id' ? 'Pindai Kemasan Sircho Stamp' : 'Scan Sircho Stamp Package'}
              </h3>
              <p className="text-xs text-white/70">
                {lang === 'id' 
                  ? 'Arahkan kamera ke QR Code pada box Refill Pack atau masukkan kode batch stamp secara manual.' 
                  : 'Point camera at the QR Code on Refill Pack box or enter stamp batch code manually.'}
              </p>
            </div>

            {/* Simulated Camera Viewfinder */}
            <div className="relative w-full h-56 rounded-2xl bg-black/60 border-2 border-dashed border-emerald-400/50 overflow-hidden flex flex-col items-center justify-center mb-6 shadow-inner">
              {/* Corner markers */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-emerald-400"></div>
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-emerald-400"></div>
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-emerald-400"></div>
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-emerald-400"></div>

              {isScanning ? (
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-xs font-bold text-emerald-300 tracking-wider uppercase animate-pulse">
                    {lang === 'id' ? 'Memverifikasi Keaslian Stamp...' : 'Verifying Stamp Authenticity...'}
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2 text-center px-4">
                  <QrCode className="w-16 h-16 text-white/30" />
                  <span className="text-xs text-white/60">
                    {lang === 'id' ? 'Tekan tombol di bawah untuk simulasi scan instan' : 'Click below to simulate instant scan'}
                  </span>
                </div>
              )}

              {/* Scanning Red/Green Laser Line */}
              {isScanning && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-400 shadow-[0_0_15px_#10B981] animate-bounce"></div>
              )}
            </div>

            {/* Manual Code Input Form */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-white/80 mb-1.5">
                  {lang === 'id' ? 'Atau Masukkan Kode Batch Stamp:' : 'Or Enter Stamp Batch Code:'}
                </label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={stampCodeInput}
                    onChange={(e) => setStampCodeInput(e.target.value)}
                    placeholder="Contoh: SIRCHO-ECO-2026"
                    className="flex-1 glass-input px-4 py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider text-white outline-none focus:border-[#C89B3B]"
                  />
                  <button 
                    onClick={() => setStampCodeInput('SIRCHO-ECO-2026')}
                    className="px-3 py-2 text-[10px] font-bold text-[#C89B3B] bg-[#C89B3B]/10 hover:bg-[#C89B3B]/20 rounded-xl border border-[#C89B3B]/30 whitespace-nowrap"
                  >
                    Sample Code
                  </button>
                </div>
              </div>

              <button 
                onClick={handleSimulateScan}
                disabled={isScanning}
                className="w-full glass-button py-3.5 rounded-2xl font-bold text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Zap className="w-4 h-4 text-amber-300" />
                <span>{lang === 'id' ? 'Simulasikan Scan & Klaim +50 PTS' : 'Simulate Scan & Claim +50 PTS'}</span>
              </button>

              {scanSuccessMessage && (
                <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-3 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                  <span>{scanSuccessMessage}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: HISTORY LOG */}
        {activeTab === 'history' && (
          <div className="grid md:grid-cols-2 gap-8 reveal">
            
            {/* Scanned Stamps History */}
            <div className="glass-panel p-6 rounded-3xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                  <QrCode className="w-4 h-4 text-emerald-400" />
                  {lang === 'id' ? 'Riwayat Pemindaian Stamp' : 'Scanned Stamp History'}
                </h3>
                <span className="text-xs text-white/50">{scannedStamps.length} Stamps</span>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                {scannedStamps.map((item) => (
                  <div key={item.id} className="glass-card p-3.5 rounded-xl flex items-center justify-between">
                    <div>
                      <p className="font-bold text-xs sm:text-sm text-white tracking-wide">{item.code}</p>
                      <p className="text-[10px] text-white/60">{item.variant} • {item.date}</p>
                    </div>
                    <div className="text-right">
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                        +{item.points} PTS
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Redeemed Rewards History */}
            <div className="glass-panel p-6 rounded-3xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                  <Gift className="w-4 h-4 text-[#C89B3B]" />
                  {lang === 'id' ? 'Riwayat Penukaran Hadiah' : 'Redemption History'}
                </h3>
                <span className="text-xs text-white/50">{redeemedRewards.length} Rewards</span>
              </div>

              <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                {redeemedRewards.length === 0 ? (
                  <p className="text-xs text-white/50 text-center py-8">
                    {lang === 'id' ? 'Belum ada hadiah ditukarkan. Kumpulkan poin sekarang!' : 'No rewards redeemed yet. Collect points now!'}
                  </p>
                ) : (
                  redeemedRewards.map((item) => (
                    <div key={item.id} className="glass-card p-3.5 rounded-xl flex items-center justify-between border-l-4 border-[#C89B3B]">
                      <div>
                        <p className="font-bold text-xs sm:text-sm text-white">{item.title}</p>
                        <p className="text-[10px] text-white/60">Kode: <span className="text-[#C89B3B] font-mono font-bold">{item.code}</span> • {item.date}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-red-300">
                          -{item.pointsCost} PTS
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>
        )}

        {/* Modal: Redemption Confirmation Success */}
        {redeemSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="glass-panel p-8 max-w-md w-full rounded-3xl border-2 border-emerald-400/50 text-center relative shadow-2xl reveal-scale bg-[#0a2315]">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto mb-4 text-emerald-300">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                {lang === 'id' ? 'Penukaran Poin Berhasil!' : 'Redemption Successful!'}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1 mb-2">
                {redeemSuccess.title}
              </h3>
              <p className="text-xs text-white/80 mb-6">
                {lang === 'id' 
                  ? 'Gunakan kode di bawah ini pada saat checkout atau simpan sebagai bukti kontribusi penanaman pohon.' 
                  : 'Use this code at checkout or keep it as proof of tree planting contribution.'}
              </p>

              {/* Code Box */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/20 flex items-center justify-between gap-2 mb-6">
                <span className="font-mono text-base sm:text-lg font-bold text-[#C89B3B] tracking-wider truncate">
                  {redeemSuccess.code}
                </span>
                <button 
                  onClick={() => handleCopyCode(redeemSuccess.code)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors flex-shrink-0"
                  title="Copy Code"
                >
                  {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <button
                onClick={() => setRedeemSuccess(null)}
                className="w-full glass-button py-3 rounded-xl font-bold text-xs"
              >
                {lang === 'id' ? 'Tutup & Kembali' : 'Close & Return'}
              </button>
            </div>
          </div>
        )}

        {/* Modal: Insufficient Points Notice */}
        {insufficientPointsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="glass-panel p-6 max-w-sm w-full rounded-3xl border border-red-500/40 text-center relative shadow-2xl reveal-scale bg-[#1a0f0a]">
              <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-400 flex items-center justify-center mx-auto mb-3 text-red-400">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-2">
                {lang === 'id' ? 'Poin Belum Mencukupi' : 'Points Insufficient'}
              </h3>
              <p className="text-xs text-white/80 leading-relaxed mb-6">
                {insufficientPointsModal}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => { setInsufficientPointsModal(null); setActiveTab('scanner'); }}
                  className="flex-1 glass-button py-2.5 rounded-xl font-bold text-xs"
                >
                  {lang === 'id' ? 'Scan Stamp' : 'Scan Stamp'}
                </button>
                <button
                  onClick={() => setInsufficientPointsModal(null)}
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2.5 rounded-xl font-bold text-xs border border-white/20"
                >
                  {lang === 'id' ? 'Batal' : 'Dismiss'}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
