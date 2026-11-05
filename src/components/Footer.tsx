import { useAtom } from 'jotai';
import { langAtom, currentPageAtom, sdgData } from '../data';
import { Phone, Mail, MessageCircle, MapPin, Globe, Leaf, Heart, ExternalLink } from 'lucide-react';
import { SirchoLogo } from './SirchoLogo';

export function Footer() {
  const [lang] = useAtom(langAtom);
  const [, setCurrentPage] = useAtom(currentPageAtom);

  return (
    <footer className="w-full bg-[#06140b] border-t border-white/10 mt-auto z-40 relative">
      
      {/* Top Banner: Eco-Impact Movement */}
      <div className="bg-[#0b2416] py-5 px-4 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C89B3B]/20 flex items-center justify-center text-[#C89B3B] flex-shrink-0">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold text-sm sm:text-base">
                {lang === 'id' ? 'Bergabung dalam Gerakan Toilet Sehat & Bebas Plastik' : 'Join the Healthy & Plastic-Free Toilet Movement'}
              </p>
              <p className="text-xs text-white/60">
                {lang === 'id' ? 'Dapatkan 50 Green Points pertama saat scan kemasan Sircho Stamp pertamamu.' : 'Get your first 50 Green Points when scanning your first Sircho Stamp.'}
              </p>
            </div>
          </div>

          <button 
            onClick={() => setCurrentPage('game')}
            className="glass-button text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-wider hover:shadow-lg transition-transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            {lang === 'id' ? 'Scan Stamp Sekarang' : 'Scan Stamp Now'}
          </button>
        </div>
      </div>

      {/* SDGs Achievement Section in Footer */}
      <div className="border-b border-white/10 py-8 px-6 sm:px-12 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C89B3B]">
                {lang === 'id' ? 'Akselerasi Sustainable Development Goals' : 'Advancing Sustainable Development Goals'}
              </span>
              <h4 className="font-serif text-xl font-bold text-white mt-0.5">
                {lang === 'id' ? 'Misi Pencapaian SDGs Nuvora Co' : 'Nuvora Co SDGs Commitment'}
              </h4>
            </div>
            <p className="text-xs text-white/60 max-w-md text-center sm:text-right">
              {lang === 'id' ? 'Setiap stempel Sircho Stamp didesain selaras dengan 4 pilar target PBB demi keberlanjutan bumi 2030.' : 'Every Sircho Stamp is crafted in alignment with 4 UN sustainability targets towards 2030.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sdgData.map((sdg) => (
              <div 
                key={sdg.number}
                className="glass-card p-4 rounded-2xl border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span 
                      className="w-7 h-7 rounded-lg text-white font-black text-xs flex items-center justify-center font-mono"
                      style={{ backgroundColor: sdg.color }}
                    >
                      {sdg.number}
                    </span>
                    <span className="font-bold text-xs text-white truncate">
                      {sdg.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-white/70 leading-relaxed">
                    {lang === 'id' ? sdg.descId : sdg.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-1 flex flex-col items-start">
            <div className="mb-3 cursor-pointer" onClick={() => setCurrentPage('hero')}>
              <SirchoLogo size="lg" />
            </div>
            <p className="text-xs text-white/70 mb-4 leading-relaxed">
              {lang === 'id' 
                ? 'Platform pelacak dampak ekologis dan ekosistem pembersih toilet gel stamp berbahan aktif ekstrak daun sirih & biomassa sabut kelapa oleh Nuvora Co.' 
                : 'Eco-impact tracking platform and toilet gel stamp ecosystem powered by active betel leaf extract & upcycled coconut coir biomass by Nuvora Co.'}
            </p>
            <div className="text-[11px] text-emerald-400 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              100% Biodegradable & Septic-Safe
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-1 flex flex-col gap-2.5">
            <h5 className="text-[#C89B3B] font-bold text-xs uppercase tracking-wider mb-2">
              {lang === 'id' ? 'Navigasi Platform' : 'Navigation'}
            </h5>
            <button onClick={() => setCurrentPage('hero')} className="text-left text-white/80 hover:text-white transition-colors text-xs font-medium">
              {lang === 'id' ? 'Beranda SirchoEarth' : 'Home'}
            </button>
            <button onClick={() => setCurrentPage('product')} className="text-left text-white/80 hover:text-white transition-colors text-xs font-medium">
              {lang === 'id' ? 'Eco-Impact Tracker (Kalkulator)' : 'Eco-Impact Tracker'}
            </button>
            <button onClick={() => setCurrentPage('game')} className="text-left text-white/80 hover:text-white transition-colors text-xs font-medium">
              {lang === 'id' ? 'Green Rewards & Scan Stamp' : 'Green Rewards & Scanner'}
            </button>
            <button onClick={() => setCurrentPage('pertanian')} className="text-left text-white/80 hover:text-white transition-colors text-xs font-medium">
              {lang === 'id' ? 'Edu-Hub & Pencegahan Tifoid' : 'Edu-Hub & Typhoid Science'}
            </button>
            <button onClick={() => setCurrentPage('shop')} className="text-left text-white/80 hover:text-white transition-colors text-xs font-medium">
              {lang === 'id' ? 'Katalog Sircho Refill' : 'Refill Catalog'}
            </button>
            <button onClick={() => setCurrentPage('about')} className="text-left text-white/80 hover:text-white transition-colors text-xs font-medium">
              {lang === 'id' ? 'Tentang Nuvora Co' : 'About Nuvora Co'}
            </button>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-1 flex flex-col gap-3">
            <h5 className="text-[#C89B3B] font-bold text-xs uppercase tracking-wider mb-2">
              {lang === 'id' ? 'Hubungi Nuvora Co' : 'Contact Nuvora Co'}
            </h5>
            
            <div className="flex items-start gap-2.5 text-xs text-white/80">
              <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white">Nuvora Innovation Hub</p>
                <p className="text-white/60">Surabaya & Jakarta, Indonesia</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-white/80">
              <Mail className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white">Email</p>
                <p className="text-white/60">hello@nuvora.co / sircho@nuvora.co</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-white/80">
              <MessageCircle className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white">WhatsApp Care</p>
                <p className="text-white/60">+62 812-3456-7890</p>
              </div>
            </div>
          </div>

          {/* Social Media & Certification */}
          <div className="md:col-span-1 flex flex-col gap-3">
            <h5 className="text-[#C89B3B] font-bold text-xs uppercase tracking-wider mb-2">
              Media Sosial Nuvora
            </h5>
            <div className="flex flex-col gap-2 text-xs text-white/80">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                <span>Instagram: @nuvoraco & @sirchostamp</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                <span>X / Twitter: @nuvoraco</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                <span>LinkedIn: Nuvora Co</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                <span>YouTube: Nuvora Eco Channel</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>

            <div className="mt-2 pt-3 border-t border-white/10">
              <span className="text-[10px] text-white/50 block mb-1">Standar Keamanan:</span>
              <span className="text-[11px] font-semibold text-white/80 bg-white/5 px-2.5 py-1 rounded-md border border-white/10 inline-block">
                ISO 14001 • Eco-Label Verified
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Copyright Bar */}
      <div className="bg-[#040e07] py-4 px-6 sm:px-12 border-t border-white/10 pb-20 md:pb-4 text-xs text-white/60">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-white font-medium">
              © 2026 Nuvora Co. Hak Cipta Dilindungi.
            </p>
            <p className="text-[11px] text-white/50 mt-0.5">
              {lang === 'id' 
                ? 'Sircho Stamp & SirchoEarth adalah merek dagang terdaftar milik Nuvora Co. Misi keberlanjutan sanitasi hijau.' 
                : 'Sircho Stamp & SirchoEarth are registered trademarks of Nuvora Co. Dedicated to sustainable green sanitation.'}
            </p>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Laporan Keberlanjutan</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
