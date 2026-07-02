import { Printer, ArrowLeft, ShieldCheck } from 'lucide-react';
import Logo from '../Logo';
import { LetterParams } from './letterTypes';

interface LetterHeaderProps {
  params: LetterParams;
}

/** Reusable letterhead top section + signature/stamp block at bottom */
export function LetterheadTop({ params }: LetterHeaderProps) {
  const isOffer = params.template === 'offer';

  return (
    <>
      {/* Company Letterhead Banner */}
      <div className="flex justify-between items-start border-b-2 border-brand-navy pb-4 mb-6">
        <Logo className="w-14 h-14" showText={true} variant="dark" />
        <div className="text-right text-[9px] text-slate-500 font-sans leading-normal space-y-0.5">
          <h4 className="font-extrabold text-brand-navy text-[10px] uppercase">Al Riaz Warehousing & Storage LLC</h4>
          <p>Plot 1404, Logistics District, Dubai South</p>
          <p>P.O. Box 234120, Dubai, United Arab Emirates</p>
          <p>Tel: +971 4 800 WAREHOUSE | info@alriazlogistics.com</p>
          <p className="font-bold text-slate-600">Trade License: CN-4028167 | MOHRE Reg: #889240/2026</p>
        </div>
      </div>

      {/* Reference & Date Line */}
      <div className="flex justify-between items-center text-[10px] font-sans text-slate-600 mb-5">
        <span>Ref: <strong className="text-slate-800">{params.refNumber}</strong></span>
        <span>Date: <strong className="text-slate-800">{params.date}</strong></span>
      </div>

      {/* Recipient & Verification Block */}
      <div className="mb-5 font-sans text-[11px] flex justify-between items-start gap-4">
        <div className="space-y-0.5">
          <p className="text-[9px] text-slate-400 uppercase tracking-widest mb-1">Confidential — Addressed To:</p>
          <p className="font-extrabold text-slate-900 text-sm">{params.fullName}</p>
          {params.nationality && <p className="text-slate-600">Nationality: {params.nationality}</p>}
          {params.passportNumber && <p className="text-slate-600">Passport No: {params.passportNumber}</p>}
          <p className="text-slate-600">{params.address}</p>
        </div>

        {/* Verification Badge & QR Code */}
        <div className="text-right flex items-center gap-2 border border-slate-200 bg-slate-50 p-1.5 rounded-sm shadow-xs select-none max-w-[210px] shrink-0 font-sans">
          <div className="space-y-0.5 text-[7.5px] text-slate-500 text-left leading-tight">
            <p className="font-bold text-brand-navy text-[8.5px] flex items-center gap-0.5 uppercase tracking-wide">
              <ShieldCheck className="w-3 h-3 text-brand-gold shrink-0" /> Verified Legal
            </p>
            <p>Scan to verify status or visit:</p>
            <p className="font-bold text-brand-navy text-[8px]">alriazlogistics.com/verify</p>
            <p className="text-slate-400">Ref: <span className="font-mono text-slate-700 font-semibold">{params.refNumber}</span></p>
          </div>
          
          {/* Detailed SVG QR Code Mock */}
          <svg className="w-9 h-9 text-slate-800 shrink-0" viewBox="0 0 100 100" fill="currentColor">
            <rect width="100" height="100" fill="white" />
            <rect x="5" y="5" width="25" height="25" />
            <rect x="10" y="10" width="15" height="15" fill="white" />
            <rect x="70" y="5" width="25" height="25" />
            <rect x="75" y="10" width="15" height="15" fill="white" />
            <rect x="5" y="70" width="25" height="25" />
            <rect x="10" y="75" width="15" height="15" fill="white" />
            <rect x="35" y="5" width="10" height="10" />
            <rect x="50" y="15" width="15" height="10" />
            <rect x="35" y="25" width="20" height="10" />
            <rect x="5" y="35" width="15" height="15" />
            <rect x="25" y="45" width="10" height="20" />
            <rect x="45" y="45" width="15" height="15" />
            <rect x="70" y="35" width="15" height="15" />
            <rect x="85" y="55" width="10" height="10" />
            <rect x="35" y="70" width="15" height="10" />
            <rect x="55" y="75" width="15" height="20" />
            <rect x="75" y="70" width="20" height="10" />
            <rect x="75" y="85" width="10" height="10" />
          </svg>
        </div>
      </div>

      {/* Document Title */}
      <div className="text-center mb-6 border-y border-slate-200 py-2">
        <h2 className="text-[13px] font-black text-brand-navy uppercase tracking-wider">
          {isOffer ? 'EMPLOYMENT OFFER & AGREEMENT LETTER' : 'OFFICIAL LETTER OF APPOINTMENT'}
        </h2>
      </div>

      {/* Salutation */}
      <p className="font-sans text-[11px] mb-4">
        Dear <strong>{params.fullName}</strong>,
      </p>
    </>
  );
}

/** Signature block + circular corporate stamp */
export function SignatureBlock({ params }: LetterHeaderProps) {
  return (
    <div className="mt-12 flex justify-between items-end relative min-h-[130px]" id="letter-signatures-section">
      {/* Left: Authorized Signatory */}
      <div className="w-[190px] space-y-1 font-sans text-[10px]">
        <p className="text-slate-400">For & On Behalf of</p>
        <p className="text-slate-400 font-semibold">Al Riaz Warehousing & Storage LLC</p>
        <div className="h-8 flex items-end">
          <span className="font-serif italic text-base text-brand-navy tracking-widest font-bold">{params.signatoryName}</span>
        </div>
        <div className="border-t border-slate-300 pt-1">
          <p className="font-extrabold text-slate-800">{params.signatoryName}</p>
          <p className="text-slate-500">{params.signatoryTitle}</p>
        </div>
      </div>

      {/* Center: Official Corporate Stamp */}
      <div className="absolute left-[38%] bottom-[5px] select-none pointer-events-none transform -rotate-[8deg]" id="digital-seal-stamp">
        <svg className="w-[100px] h-[100px] text-brand-navy/55" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="36" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          <path id="outerRing" d="M 8 50 A 42 42 0 1 1 92 50 A 42 42 0 1 1 8 50" fill="none" />
          <text fontSize="4.8" fontWeight="bold" fill="currentColor" letterSpacing="0.5">
            <textPath href="#outerRing" startOffset="2%">AL RIAZ WAREHOUSING & STORAGE LLC ★ DUBAI, UAE ★</textPath>
          </text>
          <g transform="translate(50, 48)" textAnchor="middle" fill="currentColor">
            <text y="-6" fontSize="6" fontWeight="900">OFFICIAL</text>
            <text y="2" fontSize="5.5" fontWeight="800">COMPANY</text>
            <text y="9" fontSize="5.5" fontWeight="800">SEAL</text>
            <text y="16" fontSize="3" fontWeight="600" fill="currentColor" opacity="0.7">CN-4028167</text>
          </g>
        </svg>
      </div>

      {/* Right: Employee Acceptance */}
      <div className="w-[190px] space-y-1 font-sans text-[10px]">
        <p className="text-slate-400">Accepted & Agreed By Employee,</p>
        <div className="h-8" />
        <div className="border-t border-slate-300 pt-1">
          <p className="font-extrabold text-slate-800">{params.fullName}</p>
          <p className="text-slate-500">Signature & Date: _______________</p>
        </div>
      </div>
    </div>
  );
}

/** Control bar with back and print buttons (hidden on print) */
export function PreviewControlBar({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex items-center justify-between bg-white border border-slate-200 p-4 rounded-sm shadow-sm print:hidden">
      <button onClick={onBack} className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-brand-navy cursor-pointer uppercase tracking-wider">
        <ArrowLeft className="w-4 h-4" /> Edit Details
      </button>
      <button onClick={() => window.print()} className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded bg-brand-gold hover:bg-brand-gold-hover text-white text-xs font-bold shadow-sm transition-all cursor-pointer uppercase tracking-wider">
        <Printer className="w-4 h-4" /> Print / Save PDF
      </button>
    </div>
  );
}
