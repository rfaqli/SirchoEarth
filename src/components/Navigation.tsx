import { useAtom } from 'jotai';
import { 
  Home, 
  Award, 
  BarChart3, 
  MapPin, 
  ShoppingBag, 
  Building2, 
  Phone, 
  User as UserIcon
} from 'lucide-react';
import { 
  currentPageAtom, 
  Page, 
  langAtom 
} from '../data';
import { cn } from '../lib/utils';
import { SirchoLogo } from './SirchoLogo';

const links = [
  { id: 'hero', labelId: 'Beranda', labelEn: 'Home', icon: Home },
  { id: 'game', labelId: 'GreenCircle Loyalty', labelEn: 'Loyalty', icon: Award },
  { id: 'product', labelId: 'Eco-Tracker', labelEn: 'Eco-Tracker', icon: BarChart3 },
  { id: 'pertanian', labelId: 'Peta Refill & Komunitas', labelEn: 'Refill Map', icon: MapPin },
  { id: 'shop', labelId: 'Beli Refill', labelEn: 'Shop Refill', icon: ShoppingBag },
  { id: 'about', labelId: 'Kemitraan B2B', labelEn: 'B2B Partner', icon: Building2 },
  { id: 'contact', labelId: 'Kontak', labelEn: 'Contact', icon: Phone },
];

export function Navigation() {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [lang] = useAtom(langAtom);

  return (
    <nav className="fixed bottom-0 w-full z-50 bg-black/40 backdrop-blur-xl border-t border-white/20 md:hidden" style={{ height: 'max(60px, 7.4dvh)' }}>
      <div className="max-w-[1920px] mx-auto px-2 sm:px-4 h-full flex items-center justify-between sm:justify-start gap-1 sm:gap-2 overflow-x-auto hide-scrollbar">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = currentPage === link.id;
          return (
            <button
              key={link.id}
              onClick={() => setCurrentPage(link.id as Page)}
              className={cn(
                "nav-link flex flex-col items-center justify-center gap-1 py-1 transition flex-shrink-0 min-w-[50px] sm:min-w-[62px]",
                isActive ? "text-[#F9D342] font-bold" : "text-white/70 hover:text-white"
              )}
            >
              <div className={cn("p-1 rounded-full transition-colors", isActive ? "bg-[#F9D342]/20" : "")}>
                <Icon className={cn("w-4 h-4 sm:w-5 sm:h-5", isActive ? "text-[#F9D342]" : "")} />
              </div>
              <span className="text-[9px] sm:text-[11px] leading-tight whitespace-nowrap">
                {lang === 'id' ? link.labelId : link.labelEn}
              </span>
            </button>
          );
        })}

        <button
          onClick={() => setCurrentPage('profil')}
          className={cn(
            "nav-link flex flex-col items-center justify-center gap-1 py-1 transition flex-shrink-0 min-w-[50px] sm:min-w-[62px]",
            currentPage === 'profil' ? "text-[#F9D342] font-bold" : "text-white/70 hover:text-white"
          )}
        >
          <div className={cn("w-6 h-6 rounded-full overflow-hidden border-2 flex items-center justify-center bg-black/40", currentPage === 'profil' ? "border-[#F9D342]" : "border-white/20")}>
            <UserIcon className="w-3.5 h-3.5 text-amber-300" />
          </div>
          <span className="text-[9px] sm:text-[11px] leading-tight whitespace-nowrap">
            {lang === 'id' ? 'Member' : 'Member'}
          </span>
        </button>
      </div>
    </nav>
  );
}

export function Header() {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [lang, setLang] = useAtom(langAtom);

  const toggleLang = () => {
    const newLang = lang === 'id' ? 'en' : 'id';
    setLang(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language_pref', newLang);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 h-16 sm:h-[max(64px,7.5dvh)] border-b border-white/20 bg-black/30 backdrop-blur-xl">
      <div className="w-full max-w-[1920px] h-full mx-auto relative flex items-center justify-between px-4 sm:px-8">
        
        {/* Left: Brand Corner Logo (logopojok.png) */}
        <div 
          className="cursor-pointer transition-transform hover:scale-105 flex items-center py-1 flex-shrink-0"
          onClick={() => setCurrentPage('hero')}
        >
          <SirchoLogo size="md" variant="corner" />
        </div>

        {/* Center: Desktop Navigation Bar */}
        <div className="hidden lg:flex flex-1 justify-center mx-4">
          <div className="flex items-center gap-1 xl:gap-2 bg-black/35 backdrop-blur-xl border border-white/20 rounded-full px-3 py-1.5 shadow-lg">
            {links.map(link => (
              <button
                key={link.id}
                onClick={() => setCurrentPage(link.id as Page)}
                className={cn(
                  "px-3.5 py-1.5 text-xs xl:text-sm rounded-full transition-all font-medium whitespace-nowrap flex items-center gap-1.5",
                  currentPage === link.id 
                    ? "bg-[#F9D342] text-black shadow-md font-bold" 
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                <link.icon className="w-3.5 h-3.5 opacity-80" />
                {lang === 'id' ? link.labelId : link.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Language Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <button 
            onClick={toggleLang} 
            className="text-[10px] sm:text-xs font-bold text-white bg-white/10 border border-white/20 px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors flex items-center gap-1.5 shadow-sm"
            aria-label="Toggle language"
          >
            <span>{lang.toUpperCase()}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F9D342]"></span>
            <span className="text-[9px] text-white/60">{lang === 'id' ? 'EN' : 'ID'}</span>
          </button>
        </div>

      </div>
    </header>
  );
}
