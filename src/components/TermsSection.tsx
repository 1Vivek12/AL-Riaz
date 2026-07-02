import { Scale, ShieldAlert, FileText, Truck, HelpCircle } from 'lucide-react';

export default function TermsSection() {
  return (
    <div className="bg-slate-50 text-slate-800 py-16 md:py-24 flex-1 animate-in fade-in duration-200" id="terms-section-container">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center space-y-4">
          <span className="text-xs font-extrabold tracking-widest text-brand-gold uppercase bg-white px-3 py-1 rounded-sm border border-slate-200 shadow-sm">
            Legal Framework
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-navy uppercase tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm">
            Last Updated: July 2, 2026 | Governing Law: Dubai, United Arab Emirates
          </p>
        </div>

        {/* Introduction Card */}
        <div className="bg-white border border-slate-200 rounded-sm p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <Scale className="w-6 h-6 text-brand-gold shrink-0" />
            <h2 className="text-lg sm:text-xl font-bold text-brand-navy uppercase">
              1. Contractual Agreement
            </h2>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            These Terms & Conditions govern all warehousing, logistics, and storage services provided by <strong>Al Riaz Warehousing & Storage LLC</strong> at our designated facilities in Dubai South, Jebel Ali Free Zone (JAFZA), and other UAE locations. By submitting cargo or using our storage portals, depositors agree to comply with these terms.
          </p>
        </div>

        {/* Core Terms Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 2: Liability & Limits */}
          <div className="bg-white border border-slate-200 rounded-sm p-6 shadow-sm space-y-3 hover:border-brand-gold transition-colors">
            <div className="flex items-center gap-2.5">
              <ShieldAlert className="w-5 h-5 text-brand-gold" />
              <h3 className="text-md font-bold text-brand-navy uppercase">
                2. Liability & Valuation Limit
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our liability for lost, damaged, or misplaced goods is strictly limited to <strong>AED 50 per package</strong> or the actual physical value, whichever is lower, unless the depositor declares a higher cargo value in writing and pays premium valuation fees. Depositors are advised to maintain comprehensive marine/inland warehouse insurance.
            </p>
          </div>

          {/* Card 3: Storage & Access Rules */}
          <div className="bg-white border border-slate-200 rounded-sm p-6 shadow-sm space-y-3 hover:border-brand-gold transition-colors">
            <div className="flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-[#0C2E56]" />
              <h3 className="text-md font-bold text-brand-navy uppercase">
                3. Operations & Access
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Standard access is provided from 8:00 AM to 6:00 PM (Monday to Saturday). Storage fees are billed monthly in advance. Any unpaid balance exceeding 45 days grants Al Riaz LLC a <strong>Warehouseman's Lien</strong> over the stored goods, permitting public auction of cargo to satisfy outstanding debts under UAE commercial laws.
            </p>
          </div>

          {/* Card 4: Prohibited Cargo */}
          <div className="bg-white border border-slate-200 rounded-sm p-6 shadow-sm space-y-3 hover:border-brand-gold transition-colors">
            <div className="flex items-center gap-2.5">
              <Truck className="w-5 h-5 text-brand-gold" />
              <h3 className="text-md font-bold text-brand-navy uppercase">
                4. Prohibited Materials
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We strictly forbid the storage of explosives, highly flammable materials, hazardous chemicals without special licensing, illegal narcotics, contraband, and goods violating UAE custom declarations. Any violation results in immediate notification to Dubai Police and cargo disposal.
            </p>
          </div>

          {/* Card 5: Force Majeure */}
          <div className="bg-white border border-slate-200 rounded-sm p-6 shadow-sm space-y-3 hover:border-brand-gold transition-colors">
            <div className="flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-[#0C2E56]" />
              <h3 className="text-md font-bold text-brand-navy uppercase">
                5. Force Majeure
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Al Riaz LLC shall not be held liable for failure or delay in logistics execution due to acts of God, extreme weather events (e.g. flash floods), sandstorms, government restrictions, labor disputes, port congestion, or power failures affecting cooling redundancy systems.
            </p>
          </div>
        </div>

        {/* Closing Note */}
        <div className="text-center text-xs text-slate-500 pt-6 border-t border-slate-200">
          For detailed pricing agreements, logistics SLA contracts, or specific bonded customs query forms, please contact our Legal & Compliance Department directly at <a href="mailto:legal@alriazlogistics.com" className="text-brand-gold hover:underline">legal@alriazlogistics.com</a>.
        </div>

      </div>
    </div>
  );
}
