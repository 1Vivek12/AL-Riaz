import { useEffect, useState } from 'react';
import { LetterParams } from './letterTypes';
import { saveLetter } from '../../lib/letterService';
import { LetterheadTop, SignatureBlock, PreviewControlBar } from './LetterHeader';
import OfferLetterBody from './OfferLetterBody';
import AppointmentLetterBody from './AppointmentLetterBody';
import { Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';

interface DocumentPreviewProps {
  params: LetterParams;
  onBack: () => void;
}

/** Orchestrates the full printable document: letterhead + body + signatures + stamp */
export default function DocumentPreview({ params, onBack }: DocumentPreviewProps) {
  const [saveStatus, setSaveStatus] = useState<'saving' | 'saved' | 'error'>('saving');

  useEffect(() => {
    let cancelled = false;
    setSaveStatus('saving');

    saveLetter(params).then((success) => {
      if (cancelled) return;
      setSaveStatus(success ? 'saved' : 'error');
    });

    return () => { cancelled = true; };
  }, [params]);

  return (
    <div className="space-y-6" id="admin-document-preview-container">
      {/* Control Bar (hidden during print) */}
      <PreviewControlBar onBack={onBack} />

      {/* Save Status Indicator (hidden during print) */}
      <div className="print:hidden flex justify-center">
        {saveStatus === 'saving' && (
          <span className="inline-flex items-center gap-2 text-xs text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded">
            <Loader2 className="w-3.5 h-3.5 animate-spin" /> Saving to database...
          </span>
        )}
        {saveStatus === 'saved' && (
          <span className="inline-flex items-center gap-2 text-xs text-emerald-600 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded">
            <CheckCircle2 className="w-3.5 h-3.5" /> Saved & registered successfully
          </span>
        )}
        {saveStatus === 'error' && (
          <span className="inline-flex items-center gap-2 text-xs text-rose-600 bg-rose-50 border border-rose-200 px-3 py-1.5 rounded">
            <AlertTriangle className="w-3.5 h-3.5" /> Failed to save — check connection
          </span>
        )}
      </div>

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
          <br />Trade License No: 7549895 | Registered in Dubai South Free Zone | Dubai, UAE
        </div>
      </div>
    </div>
  );
}
