import { Printer, ArrowLeft, ShieldCheck } from 'lucide-react';
import QRCode from 'react-qr-code';
import Logo from '../Logo';
import { LetterParams } from './letterTypes';
import signatureImg from '../../assets/signature.png';
import stampImg from '../../assets/stamp.png';

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
          <p>Logistics District, Dubai South</p>
          <p>P.O. Box 282228, Dubai, United Arab Emirates (Adjacent to Al Maktoum International Airport)</p>
          <p>Tel: +971 4 800 WAREHOUSE | hr@alriazlogistics.com</p>
          <p className="font-bold text-slate-600">Trade License No: 7549895 | MOHRE Reg: #889240/2026</p>
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
        <div className="text-right flex items-center gap-2 border border-slate-200 bg-slate-50 p-1.5 rounded-sm shadow-xs select-none max-w-[230px] shrink-0 font-sans">
          <div className="space-y-0.5 text-[7.5px] text-slate-500 text-left leading-tight">
            <p className="font-bold text-brand-navy text-[8.5px] flex items-center gap-0.5 uppercase tracking-wide">
              <ShieldCheck className="w-3 h-3 text-brand-gold shrink-0" /> Verified Legal
            </p>
            <p>Scan to verify status or visit:</p>
            <p className="font-bold text-brand-navy text-[8px]">alriazlogistics.com/verify</p>
            <p className="text-slate-400">Ref: <span className="font-mono text-slate-700 font-semibold">{params.refNumber}</span></p>
          </div>
          
          <div className="w-11 h-11 bg-white p-0.5 border border-slate-200 rounded-sm shrink-0 flex items-center justify-center">
            <QRCode 
              value={`https://alriazlogistics.com/verify?ref=${params.refNumber}`} 
              size={40}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              viewBox={`0 0 256 256`}
            />
          </div>
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
        <div className="h-12 flex items-end">
          <img src={signatureImg} alt="Authorized Signature" className="h-10 w-auto object-contain" />
        </div>
        <div className="border-t border-slate-300 pt-1">
          <p className="font-extrabold text-slate-800">{params.signatoryName}</p>
          <p className="text-slate-500">{params.signatoryTitle}</p>
        </div>
      </div>

      {/* Center: Official Corporate Stamp */}
      <div className="absolute left-[38%] bottom-[5px] select-none pointer-events-none transform -rotate-[8deg]" id="digital-seal-stamp">
        <img src={stampImg} alt="Corporate Stamp" className="w-[100px] h-[100px] object-contain opacity-80" />
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
