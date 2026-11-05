import { useAtom } from 'jotai';
import { langAtom, b2bPackages, sdgData, currentPageAtom } from '../data';
import { Building2, Sparkles, Check, ArrowRight, ShieldCheck, HeartHandshake, PhoneCall, Mail } from 'lucide-react';
import { SirchoLogo } from './SirchoLogo';

export function AboutUsSection() {
  const [lang] = useAtom(langAtom);
  const [, setCurrentPage] = useAtom(currentPageAtom);

  return (
    <section className="page-section active flex-1 relative min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-10 reveal-scale">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9D342]/20 border border-[#F9D342]/40 text-[#F9D342] text-xs font-semibold mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Kemitraan B2B & Profil Nuvora Co</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-3">
            Solusi Sanitasi Komersial & B2B
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Penawaran kemitraan khusus untuk pengelola kos-kosan, hotel, restoran, dan kafe: wujudkan toilet higienis bebas gas kimia beracun dan hemat biaya operasional.
          </p>
        </div>

        {/* B2B PACKAGES GRID (KOS-KOSAN, RESTORAN & KAFE, HOTEL & RESORT) */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 reveal">
          {b2bPackages.map((pkg) => (
            <div 
              key={pkg.id}
              className="glass-panel p-6 rounded-3xl flex flex-col justify-between border-white/20 hover:border-[#F9D342]/60 transition-all shadow-xl relative overflow-hidden"
            >
              <div>
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#F9D342] text-black inline-block mb-3">
                  {pkg.highlight}
                </span>

                <h3 className="font-serif text-xl font-bold text-white mb-1">
                  {pkg.title}
                </h3>
                <p className="text-xs text-[#F9D342] font-semibold mb-2">
                  Kapasitas: {pkg.rooms}
                </p>
                <p className="text-sm font-bold text-white mb-4">
                  {pkg.priceEstimate}
                </p>

                <ul className="space-y-2 text-xs text-white/80 mb-6">
                  {pkg.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => setCurrentPage('contact')}
                className="w-full py-3 rounded-xl text-xs font-bold glass-button flex items-center justify-center gap-2 hover:shadow-lg"
              >
                <span>Ajukan Kemitraan B2B</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* NUVORA CO PROFILE & CERTIFICATION */}
        <div className="glass-panel p-8 md:p-10 rounded-3xl mb-12 shadow-2xl reveal border-white/20">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
            <SirchoLogo size="lg" />
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl font-bold text-white">
                Nuvora Co — "Natural Clean. Sustainable Care."
              </h3>
              <p className="text-xs text-white/70 mt-1">
                Pionir bio-sanitasi sirkular Indonesia: mengolah limbah sabut kelapa dan ekstrak sirih menjadi produk pembersih bermutu tinggi.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-center">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="font-serif text-2xl font-black text-[#F9D342]">100%</span>
              <p className="text-xs text-white/70 mt-1">Bahan Alami Biodegradable</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="font-serif text-2xl font-black text-emerald-300">99.8%</span>
              <p className="text-xs text-white/70 mt-1">Daya Hambat Tifoid & E. Coli</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="font-serif text-2xl font-black text-cyan-300">85+</span>
              <p className="text-xs text-white/70 mt-1">Kos & Kafe Mitra Surabaya</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <span className="font-serif text-2xl font-black text-amber-300">Zero</span>
              <p className="text-xs text-white/70 mt-1">Klorin & Botol Plastik Sekali Pakai</p>
            </div>
          </div>
        </div>

        {/* SDGs Target Grid */}
        <div className="glass-card p-6 rounded-3xl border-white/20">
          <h4 className="font-serif text-xl font-bold text-white text-center mb-6">
            Komitmen SDGs 2030 Nuvora Co
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sdgData.map(s => (
              <div key={s.number} className="p-4 rounded-2xl bg-black/40 border border-white/10">
                <span className="text-xs font-bold text-[#F9D342] block mb-1">SDG {s.number}</span>
                <p className="font-bold text-xs text-white mb-1">{s.title}</p>
                <p className="text-[11px] text-white/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
