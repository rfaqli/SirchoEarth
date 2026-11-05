import { useAtom } from 'jotai';
import { 
  Home, 
  BarChart3, 
  Award, 
  BookOpen, 
  Info, 
  Phone, 
  ShoppingBag, 
  ChevronDown, 
  Sparkles, 
  QrCode, 
  Leaf, 
  User as UserIcon,
  ShieldCheck
} from 'lucide-react';
import { 
  currentPageAtom, 
  Page, 
  profileCompletedAtom, 
  langAtom, 
  userPointsAtom, 
  userNameAtom 
} from '../data';
import { cn } from '../lib/utils';
import { useState, useRef, useEffect } from 'react';
import { SirchoLogo } from './SirchoLogo';

const links = [
  { id: 'hero', labelId: 'Beranda', labelEn: 'Home', icon: Home },
  { id: 'product', labelId: 'Eco-Tracker', labelEn: 'Eco-Tracker', icon: BarChart3 },
  { id: 'game', labelId: 'Green Rewards', labelEn: 'Rewards', icon: Award },
  { id: 'pertanian', labelId: 'Edu-Hub', labelEn: 'Edu-Hub', icon: BookOpen },
  { id: 'about', labelId: 'Tentang Nuvora', labelEn: 'About Us', icon: Info },
  { id: 'contact', labelId: 'Kontak', labelEn: 'Contact', icon: Phone },
  { id: 'shop', labelId: 'Katalog Refill', labelEn: 'Shop Refill', icon: ShoppingBag },
];

export function Navigation() {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [hasProfile] = useAtom(profileCompletedAtom);
  const [lang] = useAtom(langAtom);
  const [points] = useAtom(userPointsAtom);

  return (
    <nav className="fixed bottom-0 w-full z-50 bg-[#091a10]/85 backdrop-blur-xl border-t border-white/10 md:hidden" style={{ height: 'max(60px, 7.4dvh)' }}>
      <div className="max-w-[1920px] mx-auto px-2 sm:px-4 h-full flex items-center justify-between sm:justify-start gap-1 sm:gap-3 overflow-x-auto hide-scrollbar">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = currentPage === link.id;
          return (
            <button
              key={link.id}
              onClick={() => setCurrentPage(link.id as Page)}
              className={cn(
                "nav-link flex flex-col items-center justify-center gap-1 py-1 sm:py-2 transition flex-shrink-0 min-w-[50px] sm:min-w-[64px]",
                isActive ? "text-[#C89B3B] font-bold" : "text-white/60 hover:text-white"
              )}
            >
              <div className={cn("p-1 rounded-full transition-colors", isActive ? "bg-[#C89B3B]/15" : "")}>
                <Icon className={cn("w-4 h-4 sm:w-5 sm:h-5", isActive ? "text-[#C89B3B]" : "")} />
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
            "nav-link flex flex-col items-center justify-center gap-1 py-1 sm:py-2 transition flex-shrink-0 min-w-[50px] sm:min-w-[64px]",
            currentPage === 'profil' ? "text-[#C89B3B] font-bold" : "text-white/60 hover:text-white"
          )}
        >
          <div className={cn("w-6 h-6 rounded-full overflow-hidden border-2 flex items-center justify-center bg-emerald-950/80", currentPage === 'profil' ? "border-[#C89B3B]" : "border-white/20")}>
            <UserIcon className="w-3.5 h-3.5 text-emerald-300" />
          </div>
          <span className="text-[9px] sm:text-[11px] leading-tight whitespace-nowrap">
            {lang === 'id' ? 'Paspor Eco' : 'Eco-Pass'}
          </span>
        </button>
      </div>
    </nav>
  );
}

export function Header() {
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);
  const [hasProfile] = useAtom(profileCompletedAtom);
  const [userName] = useAtom(userNameAtom);
  const [points] = useAtom(userPointsAtom);
  const [lang, setLang] = useAtom(langAtom);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'id' ? 'en' : 'id';
    setLang(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language_pref', newLang);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 h-16 sm:h-[max(64px,7.5dvh)] border-b border-white/10 bg-[#091a10]/80 backdrop-blur-xl">
      <div className="w-full max-w-[1920px] h-full mx-auto relative flex items-center justify-between px-4 sm:px-8">
        
        {/* Left: Brand Logo */}
        <div 
          className="cursor-pointer transition-transform hover:scale-105 flex items-center py-1 flex-shrink-0"
          onClick={() => setCurrentPage('hero')}
        >
          <SirchoLogo size="md" />
        </div>

        {/* Center: Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-center mx-4">
          <div className="flex items-center gap-1 xl:gap-2 bg-[#06140c]/70 backdrop-blur-xl border border-white/10 rounded-full px-3 py-1.5 shadow-lg">
            
            {links.map(link => (
              <button
                key={link.id}
                onClick={() => setCurrentPage(link.id as Page)}
                className={cn(
                  "px-3 py-1.5 text-xs xl:text-sm rounded-full transition-all font-medium whitespace-nowrap flex items-center gap-1.5",
                  currentPage === link.id 
                    ? "bg-[#226b3e] text-white shadow-md font-semibold" 
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                <link.icon className="w-3.5 h-3.5 opacity-80" />
                {lang === 'id' ? link.labelId : link.labelEn}
              </button>
            ))}
          
            {/* Quick Action Dropdown */}
            <div className="relative flex-shrink-0" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-3 py-1.5 text-xs xl:text-sm rounded-full transition-colors font-medium whitespace-nowrap text-white/90 hover:bg-white/10 flex items-center gap-1.5 bg-white/5 border border-white/15"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C89B3B]" />
                {lang === 'id' ? 'Aksi Eco' : 'Eco Actions'}
                <ChevronDown className="w-3.5 h-3.5 ml-0.5 opacity-70" />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-[#091a10]/95 backdrop-blur-2xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl p-1.5 z-50">
                  <div className="px-3 py-2 border-b border-white/10">
                    <p className="text-[10px] font-bold tracking-wider uppercase text-emerald-400">
                      {lang === 'id' ? 'Ekosistem Sircho Stamp' : 'Sircho Stamp Ecosystem'}
                    </p>
                  </div>
                  <button 
                    onClick={() => { setIsDropdownOpen(false); setCurrentPage('product'); }}
                    className="w-full text-left px-3 py-2.5 hover:bg-white/10 rounded-xl transition-colors flex items-start gap-2.5"
                  >
                    <BarChart3 className="w-4 h-4 text-emerald-400 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-white block">
                        {lang === 'id' ? 'Kalkulator Eco-Impact' : 'Eco-Impact Calculator'}
                      </span>
                      <span className="text-[10px] text-white/60">
                        {lang === 'id' ? 'Hitung plastik & biomassa sabut' : 'Calculate plastic & coir biomass'}
                      </span>
                    </div>
                  </button>
                  <button 
                    onClick={() => { setIsDropdownOpen(false); setCurrentPage('game'); }}
                    className="w-full text-left px-3 py-2.5 hover:bg-white/10 rounded-xl transition-colors flex items-start gap-2.5"
                  >
                    <QrCode className="w-4 h-4 text-[#C89B3B] mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-white block">
                        {lang === 'id' ? 'Scan Kemasan Stamp' : 'Scan Stamp Package'}
                      </span>
                      <span className="text-[10px] text-white/60">
                        {lang === 'id' ? 'Dapatkan +50 Green Points' : 'Earn +50 Green Points'}
                      </span>
                    </div>
                  </button>
                  <button 
                    onClick={() => { setIsDropdownOpen(false); setCurrentPage('pertanian'); }}
                    className="w-full text-left px-3 py-2.5 hover:bg-white/10 rounded-xl transition-colors flex items-start gap-2.5"
                  >
                    <ShieldCheck className="w-4 h-4 text-cyan-400 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-white block">
                        {lang === 'id' ? 'Edukasi Demam Tifoid' : 'Typhoid Prevention Guide'}
                      </span>
                      <span className="text-[10px] text-white/60">
                        {lang === 'id' ? 'Sanitasi sirih bebas klorin' : 'Chlorine-free betel sanitation'}
                      </span>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Green Points Badge, Lang Toggle & Profile */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          
          {/* Live Points Badge */}
          <button 
            onClick={() => setCurrentPage('game')}
            className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#C89B3B]/15 border border-[#C89B3B]/40 hover:bg-[#C89B3B]/25 transition-all cursor-pointer"
            title={lang === 'id' ? 'Tukarkan Green Points' : 'Redeem Green Points'}
          >
            <Leaf className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-xs font-bold text-white">
              {points} <span className="text-[#C89B3B] text-[10px] hidden sm:inline">PTS</span>
            </span>
          </button>

          {/* Lang Toggle */}
          <button 
            onClick={toggleLang} 
            className="text-[10px] sm:text-xs font-bold text-white bg-white/10 border border-white/20 px-2 py-1 rounded-md hover:bg-white/20 transition-colors flex flex-col items-center leading-none"
            aria-label="Toggle language"
          >
            <span>{lang.toUpperCase()}</span>
            <span className="w-2.5 h-[1px] bg-white/40 my-0.5"></span>
            <span className="text-[8px] text-white/60">{lang === 'id' ? 'EN' : 'ID'}</span>
          </button>
          
          {/* Profile Button */}
          <button
            onClick={() => setCurrentPage('profil')}
            className="flex items-center gap-2 glass-button px-3 py-1.5 text-xs font-semibold rounded-full hover:shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <UserIcon className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{lang === 'id' ? 'Paspor Eco' : 'Eco-Pass'}</span>
          </button>
        </div>

      </div>
    </header>
  );
}
