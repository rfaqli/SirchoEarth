import { useAtom } from 'jotai';
import { langAtom, currentPageAtom } from '../data';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  ExternalLink, 
  ShieldCheck, 
  Building2, 
  ShoppingBag, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SirchoLogo } from './SirchoLogo';

export function Footer() {
  const [lang] = useAtom(langAtom);
  const [, setCurrentPage] = useAtom(currentPageAtom);

  return (
    <footer className="w-full bg-black/60 backdrop-blur-xl border-t border-white/15 mt-auto z-40 relative">
      
      {/* Penawaran Kemitraan B2B Khusus (Banner Atas) */}
      <div className="bg-black/35 backdrop-blur-md py-6 px-4 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#F9D342] text-black flex items-center justify-center font-black text-xl flex-shrink-0 shadow-lg">
              B2B
            </div>
            <div>
              <p className="text-white font-serif font-bold text-base sm:text-lg">
                Penawaran Kemitraan B2B: Pengelola Kos-kosan, Hotel, Restoran & Kafe
              </p>
              <p className="text-xs text-white/70">
                Hemat biaya sanitasi hingga 35%, toilet wangi herbal sirih segar, dan dapatkan sertifikasi green property.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setCurrentPage('about')}
              className="px-5 py-2.5 rounded-full text-xs font-bold bg-[#F9D342] text-black hover:bg-amber-300 transition-all flex items-center gap-1.5 shadow-md whitespace-nowrap"
            >
              <span>Pelajari Paket B2B</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a 
              href="https://wa.me/6281234567890?text=Halo%20Nuvora%20Co,%20saya%20tertarik%20dengan%20kemitraan%20B2B%20Sircho%20Stamp"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full text-xs font-bold bg-[#25D366] text-white hover:bg-emerald-600 transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp B2B</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Hubs */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo resmi Nuvora Co & Tagline */}
          <div className="md:col-span-1 flex flex-col items-start">
            <div className="mb-2 cursor-pointer" onClick={() => setCurrentPage('hero')}>
              <SirchoLogo size="lg" />
            </div>
            
            {/* Tagline Resmi */}
            <p className="text-xs font-bold text-[#F9D342] uppercase tracking-wider mb-2">
              "Natural Clean. Sustainable Care."
            </p>
            
            <p className="text-xs text-white/70 mb-4 leading-relaxed">
              Merek inovasi pembersih toilet gel eco-sanitation berbahan dasar limbah biomassa sabut kelapa dan ekstrak daun sirih oleh Nuvora Co.
            </p>

            <div className="inline-flex items-center gap-1.5 text-[11px] text-emerald-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F9D342]" />
              <span>Bio-Enzymatic Septic Safe</span>
            </div>
          </div>

          {/* Tiga Pilar & Navigasi */}
          <div className="md:col-span-1 flex flex-col gap-2 text-xs">
            <h5 className="text-[#F9D342] font-bold uppercase tracking-wider mb-2">
              Tiga Pilar Platform
            </h5>
            <button onClick={() => setCurrentPage('game')} className="text-left text-white/80 hover:text-white transition-colors">
              Pilar 1: GreenCircle Loyalty (Diskon 5%)
            </button>
            <button onClick={() => setCurrentPage('product')} className="text-left text-white/80 hover:text-white transition-colors">
              Pilar 2: Eco-Impact Tracker
            </button>
            <button onClick={() => setCurrentPage('pertanian')} className="text-left text-white/80 hover:text-white transition-colors">
              Pilar 3: Community & Refill Map
            </button>
            <button onClick={() => setCurrentPage('shop')} className="text-left text-white/80 hover:text-white transition-colors">
              Beli Refill Pack
            </button>
            <button onClick={() => setCurrentPage('about')} className="text-left text-white/80 hover:text-white transition-colors">
              Kemitraan Kos, Hotel & Cafe
            </button>
            <button onClick={() => setCurrentPage('profil')} className="text-left text-white/80 hover:text-white transition-colors">
              Paspor Member GreenCircle
            </button>
          </div>

          {/* Tombol Kontak Cepat: WhatsApp Business, Email Marketing, Marketplace */}
          <div className="md:col-span-1 flex flex-col gap-2.5 text-xs">
            <h5 className="text-[#F9D342] font-bold uppercase tracking-wider mb-2">
              Kontak Cepat & Marketplace
            </h5>

            {/* WhatsApp Business */}
            <a 
              href="https://wa.me/6281234567890?text=Halo%20Nuvora%20Co,%20saya%20ingin%20bertanya%20produk%20Sircho%20Stamp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
              <div>
                <span className="font-bold block">WhatsApp Business</span>
                <span className="text-[10px] text-white/60">+62 812-3456-7890 (Fast Response)</span>
              </div>
            </a>

            {/* Email Marketing & B2B */}
            <a 
              href="mailto:b2b@nuvora.co" 
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center gap-2 transition-colors"
            >
              <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <div>
                <span className="font-bold block">Email Marketing & B2B</span>
                <span className="text-[10px] text-white/60">b2b@nuvora.co / hello@nuvora.co</span>
              </div>
            </a>

            {/* Tautan Marketplace */}
            <div className="pt-1">
              <span className="text-[11px] text-white/60 block mb-1.5">Toko Resmi Marketplace:</span>
              <div className="flex gap-2">
                <a 
                  href="https://tokopedia.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#42b549]/20 text-[#42b549] border border-[#42b549]/40 font-bold text-[10px] hover:bg-[#42b549]/30"
                >
                  Tokopedia
                </a>
                <a 
                  href="https://shopee.co.id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#ee4d2d]/20 text-[#ee4d2d] border border-[#ee4d2d]/40 font-bold text-[10px] hover:bg-[#ee4d2d]/30"
                >
                  Shopee
                </a>
              </div>
            </div>
          </div>

          {/* Legalitas & Sertifikasi */}
          <div className="md:col-span-1 flex flex-col gap-2.5 text-xs">
            <h5 className="text-[#F9D342] font-bold uppercase tracking-wider mb-2">
              Legalitas & Sertifikasi
            </h5>

            <div className="space-y-1.5 text-white/70 text-[11px]">
              <p className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Kemenkes RI PKRT No. 2026/ECO/08
              </p>
              <p className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Uji Laboratorium Efikasi 99.8% Salmonella Typhi
              </p>
              <p className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F9D342]"></span>
                ISO 14001 Sistem Manajemen Lingkungan
              </p>
              <p className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Sertifikat Eco-Label & Zero Synthetic Bleach
              </p>
            </div>

            <div className="mt-2 pt-2 border-t border-white/10">
              <span className="text-[10px] text-white/50 block">Kantor Pusat Inovasi:</span>
              <p className="text-white/80 font-medium text-[11px]">
                Nuvora Eco Hub, Surabaya, Jawa Timur, Indonesia
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Copyright Bar */}
      <div className="bg-black/80 py-4 px-6 sm:px-12 border-t border-white/10 pb-20 md:pb-4 text-xs text-white/60">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-white font-medium">
              © 2026 Nuvora Co. Hak Cipta Dilindungi. — <span className="text-[#F9D342]">Natural Clean. Sustainable Care.</span>
            </p>
            <p className="text-[10px] text-white/50 mt-0.5">
              Sircho Stamp™ dan GreenCircle™ adalah merek dagang terdaftar milik Nuvora Co.
            </p>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Syarat Kemitraan B2B</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Laporan Sirkularitas Sabut</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
