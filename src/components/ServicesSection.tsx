import { CheckCircle2, ShieldCheck, ThermometerSnowflake, ShoppingBag, Boxes } from 'lucide-react';
import { SERVICES } from '../data';

export default function ServicesSection() {
  
  // Icon finder
  const renderServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-brand-gold" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-brand-gold" />;
      case 'ThermometerSnowflake':
        return <ThermometerSnowflake className="w-5 h-5 text-brand-gold" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-brand-gold" />;
    }
  };

  return (
    <div className="bg-slate-50 text-slate-800 py-16 md:py-24 flex-1" id="services-section-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4" id="services-intro">
          <span className="text-xs font-extrabold tracking-widest text-brand-gold uppercase bg-white px-3 py-1 rounded-sm border border-slate-200 shadow-sm">
            Enterprise Logistics Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy uppercase">
            World-Class Warehousing Solutions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our facilities are engineered to accommodate high-frequency operations, extreme temperatures, and seamless omnichannel fulfillment.
          </p>
        </div>

        {/* Alternating Service Blocks */}
        <div className="space-y-20 lg:space-y-32" id="alternating-services-list">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
                id={`detailed-service-${service.id}`}
              >
                {/* Image Side */}
                <div 
                   className={`lg:col-span-5 relative ${
                     isEven ? 'lg:order-1' : 'lg:order-2'
                   }`}
                  id={`srv-img-col-${service.id}`}
                >
                  <div className="absolute -inset-1.5 bg-brand-gold/10 rounded-lg blur-lg" />
                  <div className="relative bg-brand-dark border-4 border-brand-gold rounded-sm overflow-hidden shadow-2xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-80 lg:h-[400px] object-cover transition-transform duration-500 hover:scale-102"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-brand-navy/90 backdrop-blur-md px-3.5 py-1.5 rounded-sm border border-slate-700 flex items-center gap-2 text-xs font-extrabold text-white uppercase tracking-wider">
                      {renderServiceIcon(service.iconName)}
                      {service.title}
                    </div>
                  </div>
                </div>

                {/* Text Side */}
                <div 
                   className={`lg:col-span-7 space-y-6 ${
                     isEven ? 'lg:order-2 animate-slide-in-right' : 'lg:order-1 animate-slide-in-left'
                   }`}
                  id={`srv-text-col-${service.id}`}
                >
                  <div className="space-y-2">
                    <span className="text-xs font-extrabold text-brand-gold tracking-wider uppercase">
                      Operational Tier {index + 1}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-brand-navy tracking-tight uppercase">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold text-brand-navy uppercase tracking-widest">
                      Key Capabilities & Infrastructure:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" id={`features-list-${service.id}`}>
                      {service.features.map((feature, fIdx) => (
                        <li 
                          key={fIdx} 
                          className="flex items-start gap-2.5 bg-white p-3 rounded-sm border border-slate-200 shadow-sm hover:border-brand-gold/50 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-700 font-medium">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Specifications Block */}
        <div className="bg-brand-navy text-white rounded-sm p-8 lg:p-12 text-center space-y-6 shadow-xl relative overflow-hidden border-b-4 border-brand-gold" id="services-summary-specs">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand-navy pointer-events-none z-0" />
          <h3 className="text-2xl font-black uppercase tracking-tight relative z-10">Our Facility Technical Standards</h3>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto relative z-10">
            Our infrastructure maintains state-of-the-art parameters ensuring secure storage and transit environments for any cargo type.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left pt-6 max-w-4xl mx-auto relative z-10">
            <div className="p-4 bg-brand-dark/50 border border-slate-800 rounded-sm space-y-1">
              <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">Clear Height</span>
              <span className="block text-lg font-black text-brand-gold">12.5 Meters</span>
            </div>
            <div className="p-4 bg-brand-dark/50 border border-slate-800 rounded-sm space-y-1">
              <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">Floor Load Capacity</span>
              <span className="block text-lg font-black text-brand-gold">7.5 Tons/Sqm</span>
            </div>
            <div className="p-4 bg-brand-dark/50 border border-slate-800 rounded-sm space-y-1">
              <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">Dock Levelers</span>
              <span className="block text-lg font-black text-brand-gold">Hydraulic (12x)</span>
            </div>
            <div className="p-4 bg-brand-dark/50 border border-slate-800 rounded-sm space-y-1">
              <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-bold">Fire Safety</span>
              <span className="block text-lg font-black text-brand-gold">FM Global Approved</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
