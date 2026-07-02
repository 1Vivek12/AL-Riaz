import { Lock, Eye, Database, UserCheck, ShieldCheck } from 'lucide-react';

export default function PrivacySection() {
  return (
    <div className="bg-slate-50 text-slate-800 py-16 md:py-24 flex-1 animate-in fade-in duration-200" id="privacy-section-container">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center space-y-4">
          <span className="text-xs font-extrabold tracking-widest text-brand-gold uppercase bg-white px-3 py-1 rounded-sm border border-slate-200 shadow-sm">
            Compliance & Privacy
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-navy uppercase tracking-tight">
            Privacy Statement
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm">
            Last Updated: July 2, 2026 | Conforms to UAE Federal Decree-Law No. 45 of 2021 (PDPL)
          </p>
        </div>

        {/* Introduction Card */}
        <div className="bg-white border border-slate-200 rounded-sm p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <Lock className="w-6 h-6 text-brand-gold shrink-0" />
            <h2 className="text-lg sm:text-xl font-bold text-brand-navy uppercase">
              1. Data Protection Policy
            </h2>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            At <strong>Al Riaz Warehousing & Storage LLC</strong>, we are committed to safeguarding the personal and corporate data of our clients, job applicants, and website visitors. This privacy statement outlines the types of information we collect, process, and secure in our operations.
          </p>
        </div>

        {/* Privacy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 2: What We Collect */}
          <div className="bg-white border border-slate-200 rounded-sm p-6 shadow-sm space-y-3 hover:border-brand-gold transition-colors">
            <div className="flex items-center gap-2.5">
              <Database className="w-5 h-5 text-brand-gold" />
              <h3 className="text-md font-bold text-brand-navy uppercase">
                2. Information We Collect
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We collect information provided voluntarily by you when you use our forms:
              <span className="block mt-2 font-semibold">• Quote Requests:</span> Name, email, phone, company name, storage space requirements, and logistics specifications.
              <span className="block mt-1 font-semibold">• Careers Applications:</span> Contact details, position applied for, resumes/CV files, and operational experience.
            </p>
          </div>

          {/* Card 3: How We Use Data */}
          <div className="bg-white border border-slate-200 rounded-sm p-6 shadow-sm space-y-3 hover:border-brand-gold transition-colors">
            <div className="flex items-center gap-2.5">
              <Eye className="w-5 h-5 text-[#0C2E56]" />
              <h3 className="text-md font-bold text-brand-navy uppercase">
                3. Purpose of Processing
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We process data solely to:
              <span className="block mt-2">• Respond to inquiries and formulate personalized warehousing rate quotations.</span>
              <span className="block mt-1">• Evaluate employment applications and coordinate recruitment schedules.</span>
              <span className="block mt-1">• Maintain internal operational safety logs in compliance with Dubai South and JAFZA customs criteria.</span>
            </p>
          </div>

          {/* Card 4: Security & Safeguards */}
          <div className="bg-white border border-slate-200 rounded-sm p-6 shadow-sm space-y-3 hover:border-brand-gold transition-colors">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-brand-gold" />
              <h3 className="text-md font-bold text-brand-navy uppercase">
                4. Data Security & Storage
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              All digital submissions are saved securely. We enforce advanced server encryption, strictly restrict employee access privileges, and use firewalls to protect against unauthorized data leakage. Physical logistics records are held under biometric security within our Dubai South headquarters.
            </p>
          </div>

          {/* Card 5: Your Rights */}
          <div className="bg-white border border-slate-200 rounded-sm p-6 shadow-sm space-y-3 hover:border-brand-gold transition-colors">
            <div className="flex items-center gap-2.5">
              <UserCheck className="w-5 h-5 text-[#0C2E56]" />
              <h3 className="text-md font-bold text-brand-navy uppercase">
                5. Rights Under UAE PDPL
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Under UAE Federal Decree-Law No. 45 of 2021, you have the right to request access to your personal data, request correction of inaccurate records, request deletion when the data is no longer necessary for recruitment or quotation purposes, and object to profiling.
            </p>
          </div>
        </div>

        {/* Closing Note */}
        <div className="text-center text-xs text-slate-500 pt-6 border-t border-slate-200">
          To exercise your data privacy rights, file a correction request, or ask questions about our data collection procedures, please email us at <a href="mailto:privacy@alriazlogistics.com" className="text-brand-gold hover:underline">privacy@alriazlogistics.com</a>.
        </div>

      </div>
    </div>
  );
}
