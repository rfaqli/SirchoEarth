import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { 
  userNameAtom, 
  userUniversityAtom, 
  userFieldAtom, 
  userPointsAtom,
  refillCountAtom,
  scannedStampsAtom,
  redeemedRewardsAtom,
  currentPageAtom,
  langAtom,
  IMPACT_METRICS
} from '../data';
import { 
  Leaf, 
  Award, 
  Sparkles, 
  ShieldCheck, 
  User, 
  Trash2, 
  QrCode, 
  Gift, 
  Edit3,
  Check,
  Share2,
  Copy,
  Calendar,
  CheckCircle2,
  MapPin
} from 'lucide-react';
import { SirchoLogo } from './SirchoLogo';

export function ProfilSection() {
  const [lang] = useAtom(langAtom);
  const [, setCurrentPage] = useAtom(currentPageAtom);
  const [name, setName] = useAtom(userNameAtom);
  const [city, setCity] = useAtom(userUniversityAtom);
  const [householdType, setHouseholdType] = useAtom(userFieldAtom);
  const [points] = useAtom(userPointsAtom);
  const [refillCount] = useAtom(refillCountAtom);
  const [scannedStamps] = useAtom(scannedStampsAtom);
  const [redeemedRewards] = useAtom(redeemedRewardsAtom);

  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(name);
  const [tempCity, setTempCity] = useState(city);
  const [tempHousehold, setTempHousehold] = useState(householdType);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const plasticSavedGrams = refillCount * IMPACT_METRICS.PLASTIC_PER_REFILL_GRAMS;
  const coirBiomassGrams = refillCount * IMPACT_METRICS.COIR_BIOMASS_PER_REFILL_GRAMS;
  const pathogensNeutralizedMillions = (refillCount * IMPACT_METRICS.CFU_PATHOGENS_MILLIONS_PER_REFILL).toFixed(1);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setName(tempName);
    setCity(tempCity);
    setHouseholdType(tempHousehold);
    setIsEditing(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleShareBadge = () => {
    const text = `Paspor Eco SirchoEarth: ${name} telah mencegah ${plasticSavedGrams}g limbah plastik sekali pakai dan mengumpulkan ${points} Green Points bersama Sircho Stamp! #SirchoEarth`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className="page-section active pt-24 pb-16 min-h-screen px-4">
      <div className="container mx-auto max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-8 reveal-scale">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9D342]/20 border border-[#F9D342]/40 text-[#F9D342] text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5 text-[#F9D342]" />
            <span>GreenCircle Membership • SirchoEarth</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">
            Paspor Member GreenCircle
          </h2>
          <p className="text-xs sm:text-sm text-white/70 max-w-lg mx-auto">
            {lang === 'id' 
              ? 'Seluruh riwayat stempel, kontribusi pengurangan plastik, dan kupon diskon 5% tersimpan langsung tanpa perlu login.' 
              : 'All your stamp history, plastic reduction milestones, and 5% discount vouchers stored instantly without needing login.'}
          </p>
        </div>

        {/* Main Passport Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 relative shadow-2xl border-white/25 mb-8">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 mb-8 text-center sm:text-left border-b border-white/10 pb-6">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <div className="w-20 h-20 rounded-2xl border-2 border-[#F9D342] bg-black/35 shadow-xl flex items-center justify-center flex-shrink-0 p-2 overflow-hidden">
                <img src="/gambar/logotengah.png" alt="Mascot Sircho Stamp" className="w-full h-full object-contain" />
              </div>
              
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <h3 className="font-serif font-bold text-2xl text-white">
                    {name || 'Rifki Fadhila'}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-[#F9D342] text-black uppercase tracking-wider">
                    Tier: Sprout
                  </span>
                </div>
                
                <p className="text-xs text-white/70 flex items-center justify-center sm:justify-start gap-1 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{city || 'Surabaya, Indonesia'}</span>
                  <span>•</span>
                  <span className="capitalize">{householdType ? householdType.replace('-', ' ') : 'Rumah Tangga Lestari'}</span>
                </p>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="text-[11px] px-3 py-1 rounded-full bg-[#F9D342]/20 border border-[#F9D342]/40 text-[#F9D342] font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#F9D342]" />
                    {points.toLocaleString('id-ID')} Green Points
                  </span>
                  <span className="text-[11px] px-3 py-1 rounded-full bg-white/10 text-white/80">
                    ID Paspor: <span className="font-mono font-bold text-[#F9D342]">GC-SURABAYA-{points * 3}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center gap-1.5 transition-colors"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{isEditing ? (lang === 'id' ? 'Tutup Edit' : 'Close') : (lang === 'id' ? 'Edit Profil' : 'Edit Profile')}</span>
              </button>
              <button 
                onClick={handleShareBadge}
                className="p-2 rounded-xl text-xs font-bold glass-button flex items-center justify-center"
                title="Bagikan Paspor"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Edit Profile Form Panel */}
          {isEditing && (
            <form onSubmit={handleSaveProfile} className="p-5 rounded-2xl bg-black/40 border border-white/15 mb-6 space-y-4 animate-fade-in">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#C89B3B]">
                {lang === 'id' ? 'Perbarui Informasi Paspor' : 'Update Passport Info'}
              </h4>
              <div className="grid sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] text-white/70 mb-1">Nama Tampilan</label>
                  <input 
                    type="text" 
                    value={tempName} 
                    onChange={e => setTempName(e.target.value)}
                    className="w-full glass-input px-3 py-2 rounded-xl text-xs text-white outline-none focus:border-[#C89B3B]" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-white/70 mb-1">Kota / Domisili</label>
                  <input 
                    type="text" 
                    value={tempCity} 
                    onChange={e => setTempCity(e.target.value)}
                    className="w-full glass-input px-3 py-2 rounded-xl text-xs text-white outline-none focus:border-[#C89B3B]" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-white/70 mb-1">Tipe Hunian / Penggunaan</label>
                  <select 
                    value={tempHousehold} 
                    onChange={e => setTempHousehold(e.target.value)}
                    className="w-full glass-input px-3 py-2 rounded-xl text-xs text-white outline-none focus:border-[#C89B3B] appearance-none"
                  >
                    <option value="rumah-tangga" className="bg-neutral-900 text-white">Rumah Tinggal (1-4 Orang)</option>
                    <option value="apartemen" className="bg-neutral-900 text-white">Apartemen / Studio</option>
                    <option value="kantor-kost" className="bg-neutral-900 text-white">Kantor / Hunian Bersama</option>
                    <option value="villa-hotel" className="bg-neutral-900 text-white">Villa / Penginapan Ramah Lingkungan</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button 
                  type="button" 
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-white/60 hover:text-white"
                >
                  Batal
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2 rounded-xl text-xs font-bold glass-button"
                >
                  Simpan Perubahan
                </button>
              </div>
            </form>
          )}

          {savedSuccess && (
            <div className="p-3 rounded-xl bg-black/40 border border-emerald-400/50 text-emerald-300 text-xs flex items-center gap-2 mb-6">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Profil Paspor berhasil diperbarui langsung di perangkat Anda!</span>
            </div>
          )}

          {/* Lifetime Impact Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            <div className="p-4 rounded-2xl bg-black/30 border border-emerald-500/30 text-center">
              <span className="text-[10px] uppercase tracking-wider text-emerald-400 block font-semibold">
                Plastik Dicegah
              </span>
              <span className="font-serif text-2xl font-black text-emerald-300 mt-1 block">
                {plasticSavedGrams}g
              </span>
              <span className="text-[10px] text-white/50">~{refillCount} Botol Kimia</span>
            </div>

            <div className="p-4 rounded-2xl bg-black/30 border border-[#C89B3B]/40 text-center">
              <span className="text-[10px] uppercase tracking-wider text-[#C89B3B] block font-semibold">
                Biomassa Sabut
              </span>
              <span className="font-serif text-2xl font-black text-[#C89B3B] mt-1 block">
                {coirBiomassGrams}g
              </span>
              <span className="text-[10px] text-white/50">Limbah Terolah</span>
            </div>

            <div className="p-4 rounded-2xl bg-black/30 border border-cyan-500/30 text-center">
              <span className="text-[10px] uppercase tracking-wider text-cyan-400 block font-semibold">
                Patogen Tifoid
              </span>
              <span className="font-serif text-2xl font-black text-cyan-200 mt-1 block">
                {pathogensNeutralizedMillions}M
              </span>
              <span className="text-[10px] text-white/50">CFU Dinetralkan</span>
            </div>

            <div className="p-4 rounded-2xl bg-black/30 border border-white/20 text-center">
              <span className="text-[10px] uppercase tracking-wider text-white/70 block font-semibold">
                Stamp Terpakai
              </span>
              <span className="font-serif text-2xl font-black text-white mt-1 block">
                {refillCount} Pack
              </span>
              <span className="text-[10px] text-white/50">{scannedStamps.length} Stamp Terverifikasi</span>
            </div>
          </div>

        </div>

        {/* History Tables Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          
          {/* Scanned Stamps */}
          <div className="glass-panel p-6 rounded-3xl border-white/20">
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
              <h4 className="font-bold text-sm text-white flex items-center gap-2">
                <QrCode className="w-4 h-4 text-emerald-400" />
                {lang === 'id' ? 'Riwayat Stamp Terverifikasi' : 'Verified Stamp History'}
              </h4>
              <button 
                onClick={() => setCurrentPage('game')} 
                className="text-[11px] text-[#C89B3B] font-bold hover:underline"
              >
                + Scan Stamp
              </button>
            </div>
            
            <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
              {scannedStamps.map(s => (
                <div key={s.id} className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center text-xs">
                  <div>
                    <p className="font-bold text-white font-mono">{s.code}</p>
                    <p className="text-[10px] text-white/50">{s.variant} • {s.date}</p>
                  </div>
                  <span className="font-bold text-[#F9D342] bg-black/40 px-2 py-0.5 rounded border border-[#F9D342]/40">
                    +{s.points} PTS
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Redeemed Rewards */}
          <div className="glass-panel p-6 rounded-3xl border-white/20">
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
              <h4 className="font-bold text-sm text-white flex items-center gap-2">
                <Gift className="w-4 h-4 text-[#C89B3B]" />
                {lang === 'id' ? 'Hadiah & Donasi Diklaim' : 'Redeemed Vouchers & Causes'}
              </h4>
              <button 
                onClick={() => setCurrentPage('game')} 
                className="text-[11px] text-[#C89B3B] font-bold hover:underline"
              >
                Tukar Poin
              </button>
            </div>
            
            <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
              {redeemedRewards.length === 0 ? (
                <p className="text-xs text-white/50 text-center py-8">Belum ada voucher ditukarkan.</p>
              ) : (
                redeemedRewards.map(r => (
                  <div key={r.id} className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center text-xs border-l-4 border-[#C89B3B]">
                    <div>
                      <p className="font-bold text-white truncate max-w-[200px]">{r.title}</p>
                      <p className="text-[10px] text-[#C89B3B] font-mono">{r.code}</p>
                    </div>
                    <span className="text-[11px] text-white/60">{r.date}</span>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>

        {/* Quick Links to Ecosystem */}
        <div className="glass-card p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-white text-sm">
              {lang === 'id' ? 'Lanjutkan Kontribusi Sanitasi Hijau' : 'Continue Your Green Sanitation Journey'}
            </h4>
            <p className="text-xs text-white/70">
              {lang === 'id' ? 'Kalkulasi penghematan plastik lebih detail atau klaim voucher di katalog.' : 'Calculate detailed plastic metrics or redeem vouchers in the store.'}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setCurrentPage('product')}
              className="px-4 py-2 rounded-xl text-xs font-bold glass-button"
            >
              Kalkulator Dampak
            </button>
            <button 
              onClick={() => setCurrentPage('shop')}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20"
            >
              Beli Refill Pack
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
