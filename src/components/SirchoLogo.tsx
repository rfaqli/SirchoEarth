import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function SirchoLogo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizeMap = {
    sm: { icon: 'w-7 h-7', text: 'text-base', sub: 'text-[9px]' },
    md: { icon: 'w-9 h-9', text: 'text-lg', sub: 'text-[10px]' },
    lg: { icon: 'w-14 h-14', text: 'text-2xl', sub: 'text-xs' },
    xl: { icon: 'w-20 h-20 md:w-24 md:h-24', text: 'text-3xl md:text-4xl', sub: 'text-xs md:text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Stamp & Leaf Emblem */}
      <div className={`relative ${currentSize.icon} flex-shrink-0 drop-shadow-md`}>
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Outer Stamp Perforated Circle */}
          <circle cx="50" cy="50" r="46" stroke="#C89B3B" strokeWidth="2.5" strokeDasharray="5 3" opacity="0.85" />
          
          {/* Inner Glowing Badge Base */}
          <circle cx="50" cy="50" r="41" fill="url(#sirchoGrad)" />
          
          {/* Coconut Coir Texture Arc (Golden Brown accent) */}
          <path 
            d="M50 14 A36 36 0 0 1 86 50" 
            stroke="#C89B3B" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            opacity="0.9"
          />
          <path 
            d="M50 86 A36 36 0 0 1 14 50" 
            stroke="#8C5A32" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            opacity="0.85"
          />

          {/* Organic Betel Leaf (Daun Sirih) Silhouette */}
          <path
            d="M50 20 C64 32 75 48 69 68 C65 78 54 84 50 84 C46 84 35 78 31 68 C25 48 36 32 50 20 Z"
            fill="url(#leafGrad)"
          />
          {/* Leaf Central Vein */}
          <path
            d="M50 24 C50 45 49 66 50 81"
            stroke="#A7F3D0"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.75"
          />
          {/* Lateral veins */}
          <path
            d="M50 40 Q58 46 64 50 M50 52 Q60 58 65 64 M50 40 Q42 46 36 50 M50 52 Q40 58 35 64"
            stroke="#A7F3D0"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Eco Sanitation Water Droplet / Gel Stamp Shine */}
          <circle cx="43" cy="38" r="4" fill="#FFFFFF" opacity="0.8" />
          <circle cx="41" cy="36" r="1.5" fill="#FFFFFF" />

          {/* Micro Sparkle Accent */}
          <polygon points="50,11 52,16 57,17 53,20 54,25 50,22 46,25 47,20 43,17 48,16" fill="#FDE047" opacity="0.9" />

          {/* Gradients */}
          <defs>
            <linearGradient id="sirchoGrad" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0E3D23" />
              <stop offset="1" stopColor="#082314" />
            </linearGradient>
            <linearGradient id="leafGrad" x1="50" y1="20" x2="50" y2="84" gradientUnits="userSpaceOnUse">
              <stop stopColor="#34D399" />
              <stop offset="0.6" stopColor="#10B981" />
              <stop offset="1" stopColor="#059669" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className={`font-serif font-black tracking-tight text-white leading-none ${currentSize.text}`}>
              Sircho<span className="text-[#C89B3B]">Earth</span>
            </span>
            <span className="px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              STAMP
            </span>
          </div>
          <span className={`text-white/60 font-medium tracking-wider uppercase ${currentSize.sub}`}>
            by Nuvora Co.
          </span>
        </div>
      )}
    </div>
  );
}
