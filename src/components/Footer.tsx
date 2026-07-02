import { Building, Phone, Mail, MapPin, Linkedin, MessageSquare, Clock } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy text-slate-300 border-t-4 border-brand-gold" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Col */}
          <div className="space-y-4" id="footer-col-brand">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNavClick('home')}>
              <Logo className="w-11 h-11 transition-transform duration-300 group-hover:scale-105 shrink-0" showText={true} variant="light" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Phase 1 static portal showcasing premium bulk storage, speed-optimized retail pick & pack, and cold-chain temperature controlled setups conforming to strict Dubai Logistics District standards.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded bg-brand-dark hover:bg-brand-gold hover:text-white transition-colors text-slate-400"
                id="footer-social-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/971500000000" 
                target="_blank" 
                rel="noreferrer"
                className="p-2 rounded bg-brand-dark hover:bg-brand-gold hover:text-white transition-colors text-slate-400"
                id="footer-social-whatsapp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4" id="footer-col-nav">
            <h3 className="text-sm font-extrabold uppercase text-white tracking-widest border-b border-brand-dark pb-2">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-brand-gold transition-all cursor-pointer">
                  Home Portal
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-brand-gold transition-all cursor-pointer">
                  Company Vision
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-brand-gold transition-all cursor-pointer">
                  Services List
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('careers')} className="hover:text-brand-gold transition-all cursor-pointer">
                  Careers & Openings
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-brand-gold transition-all cursor-pointer">
                  Contact & Quotes
                </button>
              </li>
            </ul>
          </div>

          {/* Services Quick links */}
          <div className="space-y-4" id="footer-col-services">
            <h3 className="text-sm font-extrabold uppercase text-white tracking-widest border-b border-brand-dark pb-2">
              Our Core Services
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                B2B Bulk Storage Racking
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                E-commerce Pick & Pack (Amazon/Noon)
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                Temperature-Controlled Cold Storage
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                Cross-docking & Bonded Logistics
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4" id="footer-col-contact">
            <h3 className="text-sm font-extrabold uppercase text-white tracking-widest border-b border-brand-dark pb-2">
              Dubai Headquarters
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Plot 1404, Logistics District, Dubai South (Near Al Maktoum Airport), Dubai, United Arab Emirates
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="text-slate-400">+971 4 800 WAREHOUSE</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="text-slate-400">info@dubaiwarehouse.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="text-slate-400">Office: Mon - Sat | 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-dark mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Al Riaz Warehousing & Storage LLC. All Rights Reserved. Conforms to UAE Logistics standards.
          </div>
          <div className="flex gap-4">
            <span onClick={() => handleNavClick('terms')} className="hover:text-slate-300 cursor-pointer">Terms & Conditions</span>
            <span>&middot;</span>
            <span onClick={() => handleNavClick('privacy')} className="hover:text-slate-300 cursor-pointer">Privacy Statement</span>
            <span>&middot;</span>
            <span className="hover:text-slate-300 cursor-pointer">UAE Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
