import { useState } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, MapPin, Mail, Phone } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Contact Us', id: 'contact' }
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm" id="app-header">
      {/* Premium Top Brand Bar */}
      <div className="w-full bg-[#0C2E56] text-white py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800" id="top-brand-bar">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Left Side: Registered Identity & Shield */}
          <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#C5A85C] animate-pulse"></span>
              Corporate Entity:
            </span>
            <span className="font-extrabold text-[#C5A85C] tracking-wide text-xs sm:text-sm">
              Al Riaz Warehousing & Storage LLC
            </span>
            <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] bg-slate-800 text-slate-200 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3 h-3 text-[#C5A85C] shrink-0" /> JAFZA Certified
            </span>
          </div>

          {/* Right Side: Direct Contact Details */}
          <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] text-slate-300 font-semibold flex-wrap justify-center">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#C5A85C] shrink-0" /> Dubai, UAE
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3 text-[#C5A85C] shrink-0" /> info@alriazlogistics.com
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="flex items-center gap-1 font-bold text-[#C5A85C]">
              <Phone className="w-3 h-3 shrink-0" /> 800-WAREHOUSE
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => handleNavClick('home')}
            id="logo-container"
          >
            <Logo className="w-14 h-14 transition-transform duration-300 group-hover:scale-105 shrink-0" showText={true} variant="dark" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  currentPage === item.id
                    ? 'text-[#0C2E56] bg-slate-50'
                    : 'text-slate-600 hover:text-[#0C2E56] hover:bg-slate-50/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Header Button */}
          <div className="hidden lg:flex items-center" id="header-cta">
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0C2E56] hover:bg-[#081e3a] text-white font-extrabold text-xs shadow-md transition-all duration-200 hover:translate-y-[-1px] active:translate-y-0 cursor-pointer uppercase tracking-widest"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center" id="mobile-menu-btn-container">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-500 hover:text-[#0C2E56] hover:bg-slate-100 focus:outline-none transition-colors"
              aria-expanded={isOpen}
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in fade-in slide-in-from-top-4 duration-200 shadow-inner" id="mobile-nav-menu">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-md text-base font-bold transition-all ${
                  currentPage === item.id
                    ? 'text-[#0C2E56] bg-slate-50 border-l-4 border-[#0C2E56]'
                    : 'text-slate-600 hover:text-[#0C2E56] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 pb-2 px-4">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0C2E56] text-white font-extrabold text-sm shadow-md hover:bg-[#081e3a]"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
