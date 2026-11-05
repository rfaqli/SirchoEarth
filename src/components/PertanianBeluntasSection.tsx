import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { 
  langAtom, 
  refillStationsSurabaya, 
  communityFeedPosts, 
  RefillStation, 
  CommunityPost,
  userPointsAtom
} from '../data';
import { 
  MapPin, 
  Navigation, 
  Search, 
  Heart, 
  MessageCircle, 
  Share2, 
  Recycle, 
  Store, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Clock, 
  Phone,
  Filter
} from 'lucide-react';

export function PertanianBeluntasSection() {
  const [lang] = useAtom(langAtom);
  const [, setPoints] = useAtom(userPointsAtom);

  const [selectedDistrict, setSelectedDistrict] = useState<string>('Semua');
  const [selectedType, setSelectedType] = useState<string>('Semua');
  const [activeStation, setActiveStation] = useState<RefillStation>(refillStationsSurabaya[0]);

  // Community Feed state
  const [posts, setPosts] = useState<CommunityPost[]>(communityFeedPosts);
  const [newPostText, setNewPostText] = useState('');
  const [postSuccess, setPostSuccess] = useState(false);

  const filteredStations = refillStationsSurabaya.filter(st => {
    const matchDistrict = selectedDistrict === 'Semua' || st.district.includes(selectedDistrict);
    const matchType = selectedType === 'Semua' || st.type === selectedType;
    return matchDistrict && matchType;
  });

  const handleLike = (id: string) => {
    setPosts(prev => prev.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostText.trim()) return;

    const newPost: CommunityPost = {
      id: `post-${Date.now()}`,
      author: 'Anda (Eco-Hero Surabaya)',
      role: 'Member GreenCircle',
      avatar: '🌱',
      time: 'Baru saja',
      text: newPostText,
      tags: ['#NuvoraEcoHero', '#SirchoStamp', '#SurabayaLestari'],
      likes: 1,
      refillCount: 6
    };

    setPosts([newPost, ...posts]);
    setNewPostText('');
    setPostSuccess(true);
    setPoints(prev => prev + 15); // Bonus 15 points for posting in community!
    setTimeout(() => setPostSuccess(false), 2500);
  };

  return (
    <section className="page-section active flex-1 relative min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-10 reveal-scale">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#F9D342]" />
            <span>Pilar 3 • Community & Refill Map</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-3">
            Peta Titik Isi Ulang & Komunitas Hijau
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Temukan stasiun isi ulang (Refill Station), Bank Sampah penyerap limbah sabut, dan toko zero-waste mitra di area Surabaya dan sekitarnya.
          </p>
        </div>

        {/* MAP & FILTER CONTROLLER */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl mb-12 shadow-2xl border-white/20">
          
          {/* Filters Bar */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              <span className="text-xs text-white/60 font-semibold mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-[#F9D342]" /> Wilayah:
              </span>
              {['Semua', 'Gubeng', 'Rungkut', 'Surabaya Barat', 'Wonokromo'].map((dist) => (
                <button
                  key={dist}
                  onClick={() => setSelectedDistrict(dist)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedDistrict === dist 
                      ? 'bg-[#F9D342] text-black shadow-md' 
                      : 'bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  {dist}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto justify-start lg:justify-end">
              <span className="text-xs text-white/60 font-semibold mr-1">Tipe Mitra:</span>
              <button
                onClick={() => setSelectedType('Semua')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedType === 'Semua' ? 'bg-[#2E7D32] text-white' : 'bg-white/5 text-white/70'
                }`}
              >
                Semua
              </button>
              <button
                onClick={() => setSelectedType('refill_station')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedType === 'refill_station' ? 'bg-[#2E7D32] text-white' : 'bg-white/5 text-white/70'
                }`}
              >
                Refill Station
              </button>
              <button
                onClick={() => setSelectedType('waste_bank')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedType === 'waste_bank' ? 'bg-[#2E7D32] text-white' : 'bg-white/5 text-white/70'
                }`}
              >
                Bank Sampah Sabut
              </button>
              <button
                onClick={() => setSelectedType('zero_waste_store')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedType === 'zero_waste_store' ? 'bg-[#2E7D32] text-white' : 'bg-white/5 text-white/70'
                }`}
              >
                Toko Zero Waste
              </button>
            </div>
          </div>

          {/* Interactive Map Canvas Simulator */}
          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left: Map Visualizer Viewport */}
            <div className="lg:col-span-7 rounded-2xl bg-black/45 border border-white/20 relative min-h-[340px] sm:min-h-[400px] overflow-hidden flex flex-col justify-between p-4 shadow-inner backdrop-blur-md">
              
              {/* Map Graphic Grid Lines / Simulated Vector Map */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#F9D342_1px,transparent_1px)] [background-size:24px_24px]"></div>
              
              {/* Simulated Roads & Waterbody of Surabaya */}
              <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0 100 Q 150 140 300 120 T 600 160" stroke="#26BDE2" strokeWidth="12" fill="none" opacity="0.6" />
                <path d="M 80 0 L 120 400" stroke="#ffffff" strokeWidth="4" strokeDasharray="6 4" opacity="0.4" />
                <path d="M 280 0 L 260 400" stroke="#ffffff" strokeWidth="5" opacity="0.4" />
                <path d="M 0 250 L 600 220" stroke="#ffffff" strokeWidth="4" opacity="0.4" />
              </svg>

              {/* Top Map HUD */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 text-xs font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Peta Aktif: Wilayah Surabaya & Sekitarnya</span>
                </div>
                <span className="text-[10px] text-white/60 bg-black/60 px-2.5 py-1 rounded-lg">
                  {filteredStations.length} Lokasi Terdaftar
                </span>
              </div>

              {/* Station Markers on Map Canvas */}
              <div className="relative z-10 my-auto py-8 flex flex-wrap gap-4 justify-around">
                {filteredStations.map((st, i) => {
                  const isSelected = activeStation.id === st.id;
                  return (
                    <button
                      key={st.id}
                      onClick={() => setActiveStation(st)}
                      className={`p-2 sm:p-2.5 rounded-2xl flex items-center gap-2 transition-all transform hover:scale-110 shadow-2xl cursor-pointer ${
                        isSelected 
                          ? 'bg-[#F9D342] text-black font-extrabold ring-4 ring-[#F9D342]/40 scale-105' 
                          : 'bg-black/80 text-white border border-white/20 hover:border-emerald-400'
                      }`}
                    >
                      <MapPin className={`w-4 h-4 ${isSelected ? 'text-black' : 'text-[#F9D342]'}`} />
                      <span className="text-[11px] whitespace-nowrap">{st.name.split('—')[0]}</span>
                    </button>
                  );
                })}
              </div>

              {/* Bottom Map Note */}
              <div className="relative z-10 text-[10px] text-white/60 flex items-center justify-between">
                <span>Klik salah satu titik pin untuk melihat informasi stok & petunjuk arah.</span>
                <span className="text-[#F9D342] font-semibold">Tersedia Refill Box Cepat</span>
              </div>
            </div>

            {/* Right: Selected Station Detail Card */}
            <div className="lg:col-span-5 glass-card p-6 rounded-2xl border-white/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    activeStation.type === 'refill_station' 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40' 
                      : activeStation.type === 'waste_bank'
                      ? 'bg-[#F9D342]/20 text-[#F9D342] border border-[#F9D342]/40'
                      : 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                  }`}>
                    {activeStation.type === 'refill_station' ? 'Refill Station' : activeStation.type === 'waste_bank' ? 'Bank Sampah Sabut' : 'Zero Waste Store'}
                  </span>
                  
                  <span className="text-xs font-bold text-emerald-300 flex items-center gap-1">
                    <Navigation className="w-3 h-3" /> {activeStation.distance} dari Anda
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-white mb-2 leading-snug">
                  {activeStation.name}
                </h3>

                <p className="text-xs text-white/70 flex items-start gap-1.5 mb-4">
                  <MapPin className="w-4 h-4 text-[#F9D342] flex-shrink-0 mt-0.5" />
                  <span>{activeStation.address} ({activeStation.district})</span>
                </p>

                <div className="space-y-2.5 p-3.5 rounded-xl bg-black/40 border border-white/10 text-xs mb-4">
                  <div className="flex items-center gap-2 text-white/80">
                    <Clock className="w-3.5 h-3.5 text-white/50" />
                    <span>{activeStation.hours}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Phone className="w-3.5 h-3.5 text-white/50" />
                    <span>{activeStation.phone}</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-white/10">
                    <span className="text-white/60">Status Stok Refill:</span>
                    <span className="font-bold text-emerald-300 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> {activeStation.stockStatus}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(activeStation.address)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl text-xs font-bold bg-[#F9D342] text-black hover:bg-amber-300 transition-colors flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Buka Petunjuk Arah di Google Maps</span>
                </a>
                <button 
                  onClick={() => alert(`Kontak Stasiun ${activeStation.name}: ${activeStation.phone}`)}
                  className="w-full py-2.5 rounded-xl text-xs font-medium text-white/80 hover:text-white bg-white/5 border border-white/10 text-center"
                >
                  Hubungi Penanggung Jawab Mitra
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* COMMUNITY FEED: BAGIAN BAWAH PETA MENAMPILKAN ULASAN / KIRIMAN KOMUNITAS HIJAU */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl reveal shadow-2xl border-white/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F9D342]">
                Ulasan & Interaksi Pelanggan
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-0.5">
                Community Feed: #NuvoraEcoHero #SirchoStamp
              </h3>
            </div>
            <span className="text-xs text-white/60">
              Bagikan pengalaman Anda dan dapatkan <strong>+15 Green Points</strong>!
            </span>
          </div>

          {/* Form to submit review / post */}
          <form onSubmit={handleAddPost} className="p-4 rounded-2xl bg-black/40 border border-white/10 mb-8 space-y-3">
            <div className="flex gap-3">
              <span className="text-2xl">🌱</span>
              <textarea 
                rows={2}
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
                placeholder="Bagikan pengalaman refill atau penggunaan Sircho Stamp di rumah/bisnis Anda... (Contoh: Baru refill 3 packs, stamp kelima!)"
                className="flex-1 glass-input p-3 rounded-xl text-xs sm:text-sm text-white outline-none focus:border-[#F9D342] resize-none"
              ></textarea>
            </div>
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2 text-[11px] text-[#F9D342]">
                <span>#NuvoraEcoHero</span>
                <span>#SirchoStamp</span>
              </div>
              <button 
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold bg-[#F9D342] text-black hover:bg-amber-300 transition-colors flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kirim Post (+15 PTS)</span>
              </button>
            </div>
          </form>

          {postSuccess && (
            <div className="p-3 rounded-xl bg-black/40 border border-emerald-400/50 text-emerald-300 text-xs flex items-center gap-2 mb-6 animate-fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Kiriman Anda berhasil dipublikasikan di Community Feed (+15 Green Points dikreditkan)!</span>
            </div>
          )}

          {/* Posts List */}
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:border-white/20 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center text-lg">
                      {post.avatar}
                    </span>
                    <div>
                      <p className="font-bold text-xs sm:text-sm text-white">{post.author}</p>
                      <p className="text-[10px] text-white/50">{post.role} • {post.time}</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    {post.refillCount} Refills
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                  "{post.text}"
                </p>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/5">
                  <div className="flex items-center gap-2 text-[11px] text-[#F9D342] font-semibold">
                    {post.tags.map((t, idx) => (
                      <span key={idx}>{t}</span>
                    ))}
                  </div>

                  <button 
                    onClick={() => handleLike(post.id)}
                    className="flex items-center gap-1.5 text-xs text-white/70 hover:text-red-400 transition-colors"
                  >
                    <Heart className="w-4 h-4 text-red-400 fill-red-400/20" />
                    <span>{post.likes} Suka</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
