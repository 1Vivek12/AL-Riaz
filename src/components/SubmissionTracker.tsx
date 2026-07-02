import { useState } from 'react';
import { QuoteRequest, JobApplication } from '../types';
import { ClipboardList, CheckCircle2, User, Building, Tag, Calendar } from 'lucide-react';

interface SubmissionTrackerProps {
  quotes: QuoteRequest[];
  applications: JobApplication[];
}

export default function SubmissionTracker({ quotes, applications }: SubmissionTrackerProps) {
  const [activeTab, setActiveTab] = useState<'quotes' | 'apps'>('quotes');
  const [isOpen, setIsOpen] = useState(false);

  const totalCount = quotes.length + applications.length;

  if (totalCount === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40" id="submission-tracker-root">
      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-5 py-3 rounded-sm bg-brand-gold hover:bg-brand-gold-hover text-white font-extrabold text-xs shadow-xl transition-all hover:scale-102 cursor-pointer border border-brand-gold uppercase tracking-wider"
        id="tracker-trigger-btn"
      >
        <ClipboardList className="w-5 h-5 shrink-0" />
        <span>My Submissions</span>
        <span className="flex items-center justify-center bg-brand-navy text-brand-gold text-[11px] font-black w-5.5 h-5.5 rounded-sm">
          {totalCount}
        </span>
      </button>

      {/* Expanded Submissions panel */}
      {isOpen && (
        <div 
          className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white border border-slate-200 rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[480px] animate-in slide-in-from-bottom-4 duration-250 text-slate-800 z-50"
          id="tracker-panel"
        >
          {/* Header */}
          <div className="p-4 bg-brand-navy border-b border-slate-800 flex items-center justify-between text-white">
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                Active Submission Tracker
              </h4>
              <p className="text-[10px] text-slate-300 uppercase font-bold tracking-tight">
                Secure Supabase Database Storage
              </p>
            </div>
          </div>

          {/* Tab selectors */}
          <div className="grid grid-cols-2 bg-slate-50 border-b border-slate-200 p-1 text-xs">
            <button
              onClick={() => setActiveTab('quotes')}
              className={`py-2 px-3 text-center rounded-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === 'quotes' 
                  ? 'bg-brand-gold text-white shadow-sm' 
                  : 'text-slate-500 hover:text-brand-navy'
              }`}
            >
              Quotes ({quotes.length})
            </button>
            <button
              onClick={() => setActiveTab('apps')}
              className={`py-2 px-3 text-center rounded-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === 'apps' 
                  ? 'bg-brand-gold text-white shadow-sm' 
                  : 'text-slate-500 hover:text-brand-navy'
              }`}
            >
              Applications ({applications.length})
            </button>
          </div>

          {/* List contents */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[300px] bg-slate-50">
            {activeTab === 'quotes' ? (
              quotes.length === 0 ? (
                <div className="text-center py-12 text-slate-400 text-xs font-bold uppercase tracking-wider">
                  No quote requests submitted yet.
                </div>
              ) : (
                quotes.map((q) => (
                  <div 
                    key={q.id}
                    className="p-3.5 bg-white border border-slate-200 rounded-sm space-y-2.5 text-xs text-slate-600 shadow-sm"
                    id={`track-quote-${q.id}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-brand-navy text-xs truncate max-w-[150px] uppercase">
                        {q.name}
                      </span>
                      <span className="px-2 py-0.5 rounded-sm bg-brand-gold/10 text-brand-gold font-bold text-[9px] uppercase border border-brand-gold/20">
                        {q.status}
                      </span>
                    </div>

                    <div className="space-y-1 text-[11px] text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                        <span>Company: <b className="text-slate-700">{q.company}</b></span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Tag className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                        <span>Allocation: <b className="text-slate-700">{q.spaceRequired}</b></span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                        <span>Submitted: {new Date(q.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                      </div>
                    </div>

                    <div className="p-2 bg-slate-50 border border-slate-100 rounded-sm text-[10px] italic text-slate-500 leading-relaxed truncate">
                      "{q.message}"
                    </div>
                  </div>
                ))
              )
            ) : (
              applications.length === 0 ? (
                <div className="text-center py-12 text-slate-400 text-xs font-bold uppercase tracking-wider">
                  No job applications submitted yet.
                </div>
              ) : (
                applications.map((app) => (
                  <div 
                    key={app.id}
                    className="p-3.5 bg-white border border-slate-200 rounded-sm space-y-2.5 text-xs text-slate-600 shadow-sm"
                    id={`track-app-${app.id}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-brand-navy text-xs truncate max-w-[150px] uppercase">
                        {app.name}
                      </span>
                      <span className="px-2 py-0.5 rounded-sm bg-emerald-100 text-emerald-800 font-bold text-[9px] uppercase border border-emerald-200">
                        {app.status}
                      </span>
                    </div>

                    <div className="space-y-1 text-[11px] text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                        <span>Role: <b className="text-slate-700">{app.position}</b></span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <ClipboardList className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                        <span className="truncate">CV File: <b className="text-slate-700">{app.cvName}</b> ({app.cvSize})</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                        <span>Submitted: {new Date(app.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                      </div>
                    </div>
                  </div>
                ))
              )
            )}
          </div>

          {/* Footer explanation */}
          <div className="p-3 bg-slate-100 border-t border-slate-200 text-[10px] text-slate-500 text-center font-bold uppercase tracking-tight">
            State saved in secure database registry.
          </div>
        </div>
      )}
    </div>
  );
}
