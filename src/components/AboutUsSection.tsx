import { useAtom } from 'jotai';
import { langAtom, sdgData } from '../data';
import { Leaf, Sparkles, ShieldCheck, Recycle, Users, Target, HeartHandshake } from 'lucide-react';
import { SirchoLogo } from './SirchoLogo';

export function AboutUsSection() {
  const [lang] = useAtom(langAtom);

  return (
    <section className="page-section active flex-1 relative min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12 reveal-scale">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3B]" />
            <span>{lang === 'id' ? 'Tentang Nuvora Co • Ekosistem Sircho Stamp' : 'About Nuvora Co • Sircho Stamp Ecosystem'}</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-3">
            {lang === 'id' ? 'Mendefinisikan Ulang Sanitasi Berkelanjutan' : 'Redefining Sustainable Sanitation'}
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {lang === 'id' 
              ? 'Nuvora Co memadukan kearifan fitokimia herbal Indonesia dengan sains ekonomi sirkular modern untuk menghadirkan toilet higienis bebas bahan kimia berbahaya.' 
              : 'Nuvora Co merges Indonesian herbal phytochemical wisdom with modern circular economy science to deliver hygienic toilets free from harmful toxins.'}
          </p>
        </div>

        {/* Narrative Panel */}
        <div className="glass-panel p-8 md:p-12 mb-12 reveal shadow-2xl relative overflow-hidden border-white/20">
          <div className="max-w-4xl mx-auto space-y-6 text-sm md:text-base text-white/90 leading-relaxed text-justify">
            <div className="flex justify-center mb-4">
              <SirchoLogo size="lg" />
            </div>

            <p>
              {lang === 'id' ? (
                <>
                  <strong>Latar Belakang:</strong> Selama berpuluh-puluh tahun, masyarakat dihadapkan pada dilema pembersih toilet konvensional. Di satu sisi, ancaman bakteri patogen seperti <em>Salmonella Typhi</em> (penyebab demam tifoid) dan <em>Escherichia coli</em> mengintai di setiap siraman toilet. Di sisi lain, pembersih konvensional berbahan asam klorida (HCl) pekat dan klorin beracun melepaskan gas yang berbahaya bagi pernapasan keluarga, membunuh mikrobioma pengurai alami tangki septik, serta menyumbang jutaan botol plastik sekali pakai yang mencemari lautan.
                </>
              ) : (
                <>
                  <strong>Our Background:</strong> For decades, households faced a severe sanitation paradox. Pathogens like <em>Salmonella Typhi</em> (typhoid agent) lurked in toilet bowl biofilms. Yet conventional toilet cleaners relied on harsh hydrochloric acid and chlorine bleach that emit toxic respiratory fumes, destroy septic tank microorganisms, and generate millions of thick single-use plastic bottles clogging our oceans.
                </>
              )}
            </p>

            <p>
              {lang === 'id' ? (
                <>
                  <strong>Lahirnya Sircho Stamp & SirchoEarth:</strong> Nuvora Co menghadirkan terobosan dengan memanfaatkan <strong>Ekstrak Daun Sirih (Piper betle L.)</strong> yang kaya senyawa fenol kavikol alami berkemampuan bakterisida tinggi, dikombinasikan dengan <strong>Biomassa Sabut Kelapa</strong> daur ulang dari kelompok tani lokal sebagai mikroselulosa pembersih alami. Dengan sistem aplikator stempel gel terisi ulang, kami menghapuskan kebutuhan botol plastik sekali pakai dan memantau dampak nyata pengguna secara transparan di platform SirchoEarth.
                </>
              ) : (
                <>
                  <strong>The Genesis of Sircho Stamp & SirchoEarth:</strong> Nuvora Co innovated by harnessing <strong>Betel Leaf Extract (Piper betle L.)</strong> rich in natural bactericidal chavicol phenolics, coupled with <strong>Upcycled Coconut Coir Biomass</strong> from local farmer cooperatives as gentle micro-cellulose cleaners. With our refillable stamp gel system, we eliminate single-use plastic bottles and transparently measure every household's impact on SirchoEarth.
                </>
              )}
            </p>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          <div className="glass-card p-6 rounded-3xl text-center reveal-scale">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center mx-auto mb-4 text-emerald-300">
              <Leaf className="w-7 h-7" />
            </div>
            <h4 className="font-serif text-lg font-bold text-white mb-2">
              {lang === 'id' ? 'Bio-Inovasi Lokal' : 'Local Bio-Innovation'}
            </h4>
            <p className="text-xs text-white/75 leading-relaxed">
              {lang === 'id' ? 'Meneliti potensi fitokimia daun sirih nusantara sebagai desinfektan alami berspektrum luas yang aman bagi bumi.' : 'Researching indigenous Indonesian betel leaf phytochemicals as broad-spectrum, eco-safe bio-disinfectants.'}
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl text-center reveal-scale" style={{ animationDelay: '100ms' }}>
            <div className="w-14 h-14 rounded-2xl bg-[#C89B3B]/20 border border-[#C89B3B]/40 flex items-center justify-center mx-auto mb-4 text-[#C89B3B]">
              <Recycle className="w-7 h-7" />
            </div>
            <h4 className="font-serif text-lg font-bold text-white mb-2">
              {lang === 'id' ? 'Ekonomi Sirkular Sabut' : 'Coir Circular Economy'}
            </h4>
            <p className="text-xs text-white/75 leading-relaxed">
              {lang === 'id' ? 'Menyerap limbah pertanian sabut kelapa yang kerap dibakar, memberikan nilai ekonomi tambahan bagi petani kelapa lokal.' : 'Upcycling discarded agricultural coconut coir that is often burned, generating new revenue streams for local farmers.'}
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl text-center reveal-scale" style={{ animationDelay: '200ms' }}>
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center mx-auto mb-4 text-cyan-300">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h4 className="font-serif text-lg font-bold text-white mb-2">
              {lang === 'id' ? 'Transparansi Dampak' : 'Transparent Impact'}
            </h4>
            <p className="text-xs text-white/75 leading-relaxed">
              {lang === 'id' ? 'Setiap gram plastik yang dicegah dan biomassa yang diolah tercatat real-time dan dapat diverifikasi oleh konsumen.' : 'Every gram of plastic prevented and biomass utilized is tracked in real-time for customer verification.'}
            </p>
          </div>

        </div>

        {/* Detailed SDGs Grid */}
        <div className="glass-panel p-8 rounded-3xl reveal border-white/20">
          <h3 className="font-serif text-2xl font-bold text-center text-white mb-2">
            {lang === 'id' ? 'Penyelarasan dengan Target SDGs 2030' : 'Alignment with UN SDGs 2030'}
          </h3>
          <p className="text-xs text-center text-white/70 max-w-xl mx-auto mb-8">
            {lang === 'id' ? 'Bagaimana setiap stempel Sircho Stamp berkontribusi langsung pada agenda pembangunan berkelanjutan dunia.' : 'How every Sircho Stamp directly accelerates global sustainable development targets.'}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sdgData.map((sdg) => (
              <div key={sdg.number} className="glass-card p-5 rounded-2xl border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span 
                      className="w-9 h-9 rounded-xl text-white font-black text-sm flex items-center justify-center font-mono shadow-md"
                      style={{ backgroundColor: sdg.color }}
                    >
                      {sdg.number}
                    </span>
                    <div>
                      <span className="text-[10px] text-white/60 block">SDG Target {sdg.number}</span>
                      <h5 className="font-bold text-xs text-white leading-tight">{sdg.title}</h5>
                    </div>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {lang === 'id' ? sdg.descId : sdg.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
