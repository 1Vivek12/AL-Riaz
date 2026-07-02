import { useEffect } from 'react';
import { LetterParams, saveLetterToRegistry } from './letterTypes';
import { LetterheadTop, SignatureBlock, PreviewControlBar } from './LetterHeader';
import OfferLetterBody from './OfferLetterBody';
import AppointmentLetterBody from './AppointmentLetterBody';

interface DocumentPreviewProps {
  params: LetterParams;
  onBack: () => void;
}

/** Orchestrates the full printable document: letterhead + body + signatures + stamp */
export default function DocumentPreview({ params, onBack }: DocumentPreviewProps) {
  useEffect(() => {
    saveLetterToRegistry(params);
  }, [params]);

  return (
    <div className="space-y-6" id="admin-document-preview-container">
      {/* Control Bar (hidden during print) */}
      <PreviewControlBar onBack={onBack} />

      {/* Printable A4 Paper Container */}
      <div
        className="bg-white border border-slate-300 shadow-lg mx-auto px-10 py-10 sm:px-14 sm:py-12 max-w-[820px] relative text-slate-800 select-text print:border-none print:shadow-none print:px-6 print:py-2 print:m-0 print:max-w-none"
        id="printable-hr-letter"
      >
        {/* Reusable Letterhead Top */}
        <LetterheadTop params={params} />

        {/* Dynamic Letter Body */}
        {params.template === 'offer' ? (
          <OfferLetterBody params={params} />
        ) : (
          <AppointmentLetterBody params={params} />
        )}

        {/* Reusable Signature Block + Official Stamp */}
        <SignatureBlock params={params} />

        {/* Footer Legal Line */}
        <div className="mt-8 pt-3 border-t border-slate-200 text-center text-[8px] text-slate-400 font-sans">
          This document is the confidential property of Al Riaz Warehousing & Storage LLC. Unauthorized reproduction or distribution is strictly prohibited.
          <br />Trade License: CN-4028167 | JAFZA Registered | Dubai, UAE
        </div>
      </div>
    </div>
  );
}
