import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark';
}

export default function Logo({ className = 'w-12 h-12', showText = false, variant = 'dark' }: LogoProps) {
  const primaryColor = '#137096'; // Teal-blue from the uploaded logo
  const accentColor = '#E58A1F';  // Orange-gold accent
  const shadowColor = '#0E5471';  // Darker teal-blue for 3D shadows
  const textColor = variant === 'dark' ? '#0C2E56' : '#FFFFFF';
  const subtitleColor = variant === 'dark' ? '#64748B' : '#94A3B8';

  return (
    <div className={`flex items-center gap-3 ${showText ? 'flex-row' : ''}`} id="al-riaz-logo-container">
      {/* Precision Vector SVG Logo */}
      <svg 
        className={`${className} shrink-0`} 
        viewBox="0 0 120 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        id="al-riaz-logo-svg"
      >
        {/* Top Swoosh - Teal Outer */}
        <path 
          d="M 10 50 C 25 10, 95 10, 110 50 C 95 24, 25 24, 10 50 Z" 
          fill={primaryColor} 
        />
        {/* Top Swoosh - Orange Inner */}
        <path 
          d="M 20 48 C 32 20, 88 20, 100 48 C 88 28, 32 28, 20 48 Z" 
          fill={accentColor} 
        />

        {/* Bottom Swoosh - Teal Outer */}
        <path 
          d="M 10 70 C 25 110, 95 110, 110 70 C 95 96, 25 96, 10 70 Z" 
          fill={primaryColor} 
        />
        {/* Bottom Swoosh - Orange Inner */}
        <path 
          d="M 20 72 C 32 100, 88 100, 100 72 C 88 92, 32 92, 20 72 Z" 
          fill={accentColor} 
        />

        {/* 3D Warehouse - Left Face (Front) */}
        <path 
          d="M 25 72 L 25 54 L 31 52 L 31 45 L 50 40 L 50 45 L 68 40 L 68 82 Z" 
          fill={primaryColor} 
        />

        {/* 3D Warehouse - Right Face (Side Shadow) */}
        <path 
          d="M 68 40 L 100 52 L 100 68 L 68 82 Z" 
          fill={shadowColor} 
        />

        {/* Garage Bay Doors (Left Face) */}
        <path d="M 28 72.7 L 28 58.5 L 33 57.3 L 33 73.9 Z" fill="#F8FAFC" stroke="#FFFFFF" strokeWidth="0.7" />
        <path d="M 37 74.8 L 37 60.5 L 42 59.3 L 42 76.0 Z" fill="#F8FAFC" stroke="#FFFFFF" strokeWidth="0.7" />
        <path d="M 46 76.9 L 46 62.5 L 51 61.3 L 51 78.1 Z" fill="#F8FAFC" stroke="#FFFFFF" strokeWidth="0.7" />
        <path d="M 55 79.0 L 55 64.5 L 60 63.3 L 60 80.2 Z" fill="#F8FAFC" stroke="#FFFFFF" strokeWidth="0.7" />

        {/* Windows (Right Face Shadow) */}
        <path d="M 72 46.5 L 77 48.4 L 77 51.5 L 72 49.6 Z" fill="#FFFFFF" />
        <path d="M 79 49.1 L 84 51.0 L 84 54.1 L 79 52.2 Z" fill="#FFFFFF" />
        <path d="M 86 51.7 L 91 53.6 L 91 56.7 L 86 54.8 Z" fill="#FFFFFF" />
        <path d="M 93 54.3 L 98 56.2 L 98 59.3 L 93 57.4 Z" fill="#FFFFFF" />
      </svg>

      {/* Optional Integrated Typography */}
      {showText && (
        <div className="flex flex-col select-none" id="al-riaz-logo-text">
          <div className="flex items-center gap-1.5">
            <span 
              className="text-xl sm:text-2xl font-black tracking-tight leading-none uppercase"
              style={{ color: textColor }}
            >
              AL RIAZ
            </span>
            <span 
              className="text-[9px] sm:text-[10px] font-black text-white px-1.5 py-0.5 rounded-sm leading-none shrink-0 shadow-sm"
              style={{ backgroundColor: accentColor }}
            >
              LLC
            </span>
          </div>
          <span 
            className="text-[8px] sm:text-[9px] font-extrabold tracking-widest uppercase mt-1"
            style={{ color: subtitleColor }}
          >
            WAREHOUSING & STORAGE
          </span>
        </div>
      )}
    </div>
  );
}
