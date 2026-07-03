import React, { useState, useEffect } from 'react';
import { getLetterByRef } from '../lib/letterService';
import { LetterParams } from './Admin/letterTypes';
import { Search, ShieldCheck, ShieldAlert, Loader2 } from 'lucide-react';

interface VerifyPortalProps {
  initialRef?: string;
}

export default function VerifyPortal({ initialRef = '' }: VerifyPortalProps) {
  const [refInput, setRefInput] = useState(initialRef || 'AR-HR-2026-');
  const [searchResult, setSearchResult] = useState<LetterParams | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialRef) {
      let searchRef = initialRef.trim();
      if (/^\d+$/.test(searchRef)) {
        searchRef = `AR-HR-2026-${searchRef}`;
      }
      setRefInput(initialRef);
      setLoading(true);
      getLetterByRef(searchRef).then((matched) => {
        setSearchResult(matched);
        setHasSearched(true);
        setLoading(false);
      });
    }
  }, [initialRef]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!refInput.trim()) return;
    
    let searchRef = refInput.trim();
    if (/^\d+$/.test(searchRef)) {
      searchRef = `AR-HR-2026-${searchRef}`;
    }

    setLoading(true);
    const matched = await getLetterByRef(searchRef);
    setSearchResult(matched);
    setHasSearched(true);
    setLoading(false);
  };

  return (
    <div className="bg-slate-50 text-slate-800 py-16 md:py-24 flex-1 flex flex-col" id="verify-portal-container">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 flex-1 w-full">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold tracking-widest text-brand-gold uppercase bg-white px-3 py-1 rounded-sm border border-slate-200 shadow-sm">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-navy uppercase tracking-tight">
            Document Verification Portal
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            Verify the authenticity of job offers, appointment letters, and logistics documents issued by Al Riaz Warehousing & Storage LLC.
          </p>
        </div>

        {/* Verification Search Box */}
        <div className="bg-white border border-slate-200 rounded-sm p-6 shadow-sm">
          <form onSubmit={handleSearch} className="space-y-4">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
              Enter Document Reference Number (e.g. 130 or AR-HR-2026-130)
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input 
                  type="text" 
                  value={refInput}
                  onChange={(e) => setRefInput(e.target.value)}
                  placeholder="e.g. 130"
                  required
                  className="w-full pl-10 pr-3 py-3 border border-slate-200 rounded focus:border-brand-gold focus:outline-none text-sm font-mono uppercase tracking-wider"
                />
                <Search className="w-5 h-5 text-slate-400 absolute left-3 top-3" />
              </div>
              <button 
                type="submit"
                disabled={loading}
                className="px-6 py-3 rounded bg-brand-navy hover:bg-brand-dark text-white font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shrink-0 flex items-center justify-center min-w-[120px]"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Verify Status'}
              </button>
            </div>
          </form>
        </div>

        {/* Results Screen */}
        {loading && (
          <div className="flex justify-center py-8">
            <Loader2 className="w-8 h-8 animate-spin text-brand-navy" />
          </div>
        )}

        {!loading && hasSearched && (
          <div className="animate-in fade-in duration-200">
            {searchResult ? (
              /* Verified Success Layout */
              <div className="bg-white border-2 border-emerald-500 rounded-sm p-6 sm:p-8 shadow-md space-y-6" id="verification-success">
                <div className="flex items-center gap-4 border-b border-emerald-100 pb-5">
                  <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded">
                      Certified Authentic
                    </span>
                    <h2 className="text-xl font-bold text-slate-900 mt-1 uppercase">Official Registry Match Found</h2>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  The document referenced below has been verified in our secure database registries. All signatory hashes and company seals match our official archives.
                </p>

                {/* Details Table */}
                <div className="border border-slate-100 rounded overflow-hidden">
                  <table className="w-full text-xs text-left">
                    <tbody>
                      <tr className="border-b border-slate-100 bg-slate-50/50">
                        <td className="px-4 py-2.5 font-bold text-slate-500 w-[35%] uppercase">Ref Number</td>
                        <td className="px-4 py-2.5 font-mono font-bold text-slate-900">{searchResult.refNumber}</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="px-4 py-2.5 font-bold text-slate-500 uppercase">Document Type</td>
                        <td className="px-4 py-2.5 font-semibold text-brand-navy uppercase">
                          {searchResult.template === 'offer' ? 'Employment Offer & Agreement' : 'Official Letter of Appointment'}
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-slate-50/50">
                        <td className="px-4 py-2.5 font-bold text-slate-500 uppercase">Employee Name</td>
                        <td className="px-4 py-2.5 font-bold text-slate-900">{searchResult.fullName}</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="px-4 py-2.5 font-bold text-slate-500 uppercase">Designation</td>
                        <td className="px-4 py-2.5 text-slate-800">{searchResult.position} ({searchResult.department})</td>
                      </tr>
                      <tr className="border-b border-slate-100 bg-slate-50/50">
                        <td className="px-4 py-2.5 font-bold text-slate-500 uppercase">Issue Date</td>
                        <td className="px-4 py-2.5 text-slate-800">{searchResult.date}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2.5 font-bold text-slate-500 uppercase">Registry Status</td>
                        <td className="px-4 py-2.5 text-emerald-600 font-bold flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          ACTIVE
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              /* Verification Failed Layout */
              <div className="bg-white border-2 border-rose-500 rounded-sm p-6 sm:p-8 shadow-md space-y-5" id="verification-failed">
                <div className="flex items-center gap-4 border-b border-rose-100 pb-5">
                  <div className="w-12 h-12 bg-rose-50 border border-rose-200 rounded-full flex items-center justify-center text-rose-600 shrink-0">
                    <ShieldAlert className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-rose-600 uppercase tracking-widest bg-rose-50 border border-rose-100 px-2 py-0.5 rounded">
                      Authenticity Alert
                    </span>
                    <h2 className="text-xl font-bold text-slate-900 mt-1 uppercase">No Registry Match Found</h2>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  We could not find any active or historical record matching the reference number <strong className="text-rose-600 font-mono">"{refInput.toUpperCase()}"</strong> in our archives. 
                </p>
                <div className="bg-rose-50 border border-rose-100 p-4 rounded text-xs text-rose-800 space-y-2 leading-relaxed">
                  <p className="font-bold">Important Security Notice:</p>
                  <p>
                    Please be cautious. Employment letters or logistics documents containing unregistered reference numbers are invalid, fake, or may have been falsified. Al Riaz Warehousing & Storage LLC is not liable for agreements made under invalid documents.
                  </p>
                  <p>
                    If you believe you have received a fraudulent letter, contact our HR department immediately at <a href="mailto:abuse@alriazlogistics.com" className="font-bold underline hover:text-rose-950">abuse@alriazlogistics.com</a>.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
