import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'corner' | 'center' | 'mascot';
}

export function SirchoLogo({ 
  className = '', 
  showText = true, 
  size = 'md',
  variant = 'corner'
}: LogoProps) {
  // If variant is "center", use the centered vertical logo
  if (variant === 'center') {
    const centerSizes = {
      sm: 'h-16 w-auto',
      md: 'h-24 w-auto',
      lg: 'h-32 w-auto',
      xl: 'h-40 sm:h-48 md:h-52 w-auto',
    };
    return (
      <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
        <img 
          src="/gambar/logotengah.png" 
          alt="Sircho Stamp by Nuvora" 
          className={`${centerSizes[size]} object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)] hover:scale-105 transition-transform duration-300`}
        />
      </div>
    );
  }

  // Variant "corner" uses the official horizontal corner logo with mascot + text
  if (variant === 'corner') {
    const cornerSizes = {
      sm: 'h-8 sm:h-9 w-auto',
      md: 'h-10 sm:h-11 w-auto',
      lg: 'h-14 sm:h-16 w-auto',
      xl: 'h-20 sm:h-24 w-auto',
    };
    return (
      <div className={`inline-flex items-center select-none ${className}`}>
        <img 
          src="/gambar/logopojok.png" 
          alt="Sircho Stamp by Nuvora" 
          className={`${cornerSizes[size]} object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)] hover:scale-[1.03] transition-transform duration-200`}
        />
      </div>
    );
  }

  // Fallback / mascot variant
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <img 
        src="/gambar/logopojok.png" 
        alt="Sircho Stamp" 
        className="h-10 w-auto object-contain"
      />
    </div>
  );
}
