import { ShieldCheck, Cpu, Users, Building, Target, Award, ArrowUpRight } from 'lucide-react';
import { CORE_VALUES } from '../data';

export default function AboutSection() {
  
  // Icon mapper for Values
  const renderValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-brand-gold" />;
      case 'Cpu':
        return <Cpu className="w-8 h-8 text-brand-gold" />;
      case 'Users':
        return <Users className="w-8 h-8 text-brand-gold" />;
      default:
        return <Award className="w-8 h-8 text-brand-gold" />;
    }
  };

  return (
    <div className="bg-slate-50 text-slate-800 py-16 md:py-24 flex-1" id="about-section-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4" id="about-intro">
          <span className="text-xs font-extrabold tracking-widest text-brand-gold uppercase bg-white px-3 py-1 rounded-sm border border-slate-200 shadow-sm">
            About Al Riaz Warehousing & Storage LLC
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy uppercase">
            Pioneering Dubai Logistics Standards
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Founded with a vision to redefine Middle East warehousing, our enterprise provides robust physical storage assets and agile digital systems to connect regional markets globally.
          </p>
        </div>

        {/* Company Vision & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" id="about-vision-grid">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brand-navy uppercase tracking-tight border-l-4 border-brand-gold pl-4">
              Our Vision & Operational Directive
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              We look beyond basic cargo placement. Our mission is to integrate regional e-commerce marketplaces and industrial distribution channels under a single secure, high-capacity warehousing standard. 
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              From our flagship facility strategically placed near the Al Maktoum International Airport and Jebel Ali Port, we support rapid transshipments, immediate customs processing, and optimal storage density. By empowering local merchants and global brands, we actively contribute to Dubai’s prestigious status as the premier global supply-chain gateway.
            </p>

            {/* Quick credentials bulletpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4" id="about-checklist">
              <div className="flex items-center gap-2.5 bg-white p-3 border border-slate-200 rounded-sm shadow-sm">
                <Target className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-xs font-bold text-slate-800">Optimized Placement</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 border border-slate-200 rounded-sm shadow-sm">
                <Building className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="text-xs font-bold text-slate-800">Multi-Zone Storage</span>
              </div>
            </div>
          </div>

          {/* Graphical/Creative Accent card */}
          <div className="bg-brand-navy border-b-4 border-brand-gold rounded-sm p-8 relative overflow-hidden text-white shadow-xl" id="about-metric-card">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl -mr-16 -mt-16" />
            <div className="space-y-6 relative z-10">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-widest block">
                Regional Impact
              </span>
              <p className="text-4xl font-black uppercase tracking-tight leading-none text-white">
                Fulfilling Dubai's Economic Agenda (D33)
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                By investing heavily in temperature-controlled spaces and modern sorting automation, we help local small businesses, scale-ups, and global conglomerates meet the challenging delivery times of modern Middle East trade.
              </p>
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="block text-2xl font-black text-brand-gold">JAFZA Hub</span>
                  <span className="text-xs text-slate-400">Strategic Proximity</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center text-brand-gold border border-slate-800">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="space-y-12" id="about-values">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-navy uppercase">Our 3 Core Values</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              The foundational pillars guiding every parcel dispatch and forklift operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="values-grid">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-sm p-6 space-y-4 hover:border-brand-gold hover:shadow-sm transition-all"
                id={`value-card-${idx}`}
              >
                {/* Value Icon */}
                <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-sm flex items-center justify-center">
                  {renderValueIcon(val.iconName)}
                </div>
                {/* Value Title */}
                <h4 className="text-lg font-bold text-brand-navy tracking-tight uppercase">
                  {val.title}
                </h4>
                {/* Value Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
