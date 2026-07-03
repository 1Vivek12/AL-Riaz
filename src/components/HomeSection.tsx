import { ArrowRight, Boxes, ShoppingBag, Snowflake, ShieldCheck, Cpu, Users, Layers } from 'lucide-react';
import { SERVICES, STATS } from '../data';
import heroWarehouseImg from '../assets/images/hero_warehouse_1782454274031.jpg';

interface HomeSectionProps {
  setCurrentPage: (page: string) => void;
}

export default function HomeSection({ setCurrentPage }: HomeSectionProps) {
  
  // Icon mapping helper
  const renderServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Boxes':
        return <Boxes className="w-8 h-8 text-brand-gold group-hover:text-white transition-colors" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-8 h-8 text-brand-gold group-hover:text-white transition-colors" />;
      case 'ThermometerSnowflake':
        return <Snowflake className="w-8 h-8 text-brand-gold group-hover:text-white transition-colors" />;
      default:
        return <Layers className="w-8 h-8 text-brand-gold group-hover:text-white transition-colors" />;
    }
  };

  const handleCtaClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex-1 bg-slate-50" id="home-section-container">
      {/* 1. HERO SECTION */}
      <section 
        className="relative bg-cover bg-center min-h-[500px] sm:min-h-[600px] lg:min-h-[750px] flex items-center py-16 sm:py-20 lg:py-32" 
        style={{ backgroundImage: `url(${heroWarehouseImg})` }}
        id="hero-section"
      >
        {/* Dark overlay for rich contrast and text legibility */}
        <div className="absolute inset-0 bg-slate-950/60 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent pointer-events-none z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-3xl space-y-6 sm:space-y-8" id="hero-copy">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] sm:leading-[1.1] uppercase">
              TRUSTED WAREHOUSING & <br />
              STORAGE SOLUTIONS IN <br />
              DUBAI
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white max-w-2xl leading-relaxed font-normal">
              Tailored logistics, secure storage, and efficient distribution for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => handleCtaClick('contact')}
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#0C2E56] hover:bg-[#081e3a] text-white font-extrabold text-xs tracking-widest shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 cursor-pointer uppercase border border-[#0C2E56]"
                id="hero-cta-quote"
              >
                Request a Quote 
                <span className="text-brand-gold font-black">&gt;</span>
              </button>
              <button
                onClick={() => handleCtaClick('about')}
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white hover:bg-slate-50 text-[#0C2E56] font-extrabold text-xs tracking-widest shadow-2xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer uppercase border border-white"
                id="hero-cta-jobs"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-white border-y border-slate-200 py-12" id="stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <div 
                key={idx} 
                className="text-center p-6 bg-slate-50 border border-slate-200 rounded-sm shadow-sm hover:border-brand-gold/50 transition-colors"
                id={`stat-block-${idx}`}
              >
                <div className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight" id={`stat-val-${idx}`}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-brand-gold uppercase mt-1 tracking-wider">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-600 mt-2 max-w-xs mx-auto leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES OVERVIEW */}
      <section className="py-20 bg-slate-50 text-slate-800" id="services-grid-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs font-extrabold tracking-widest text-brand-gold uppercase">
              Operational Competence
            </h2>
            <p className="text-3xl sm:text-4xl font-black tracking-tight text-brand-navy uppercase">
              End-to-End Al Riaz Warehousing Services
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Equipped with high-performance physical logistics layout and integrated sorting digital management systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="home-services-grid">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="group relative flex flex-col justify-between bg-white border border-slate-200 rounded-sm p-6 hover:border-brand-gold hover:shadow-md transition-all duration-300"
                id={`service-card-${srv.id}`}
              >
                <div className="space-y-4">
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-sm bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold transition-colors">
                    {renderServiceIcon(srv.iconName)}
                  </div>
                  
                  {/* Service Details */}
                  <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-gold transition-colors uppercase tracking-tight">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {srv.shortDescription}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-bold tracking-wider uppercase">
                    5,000+ SFT Available
                  </span>
                  <button
                    onClick={() => handleCtaClick('services')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold hover:text-brand-gold-hover transition-colors cursor-pointer uppercase tracking-wider"
                  >
                    Details
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout banner */}
          <div className="bg-brand-navy text-white rounded-sm p-8 mt-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden" id="home-quote-banner">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand-navy pointer-events-none z-0" />
            <div className="space-y-2 text-center md:text-left relative z-10">
              <h3 className="text-xl font-black text-white uppercase tracking-tight">
                Require Custom Temperature Control or Bonded Area?
              </h3>
              <p className="text-sm text-slate-300 max-w-xl">
                We design personalized logistical layouts tailored for unique manufacturing, customs, and fulfillment volumes inside Dubai South Free Zone.
              </p>
            </div>
            <button
              onClick={() => handleCtaClick('contact')}
              className="px-6 py-3 rounded-sm bg-brand-gold hover:bg-brand-gold-hover text-white font-extrabold text-sm shadow-md transition-all shrink-0 cursor-pointer uppercase tracking-wider relative z-10"
            >
              Consult with an Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
