import { QuoteRequest, JobApplication } from '../../types';
import { Mail, Phone, Building, Briefcase, FileText, UserCheck, Calendar } from 'lucide-react';

interface CandidateListProps {
  quotes: QuoteRequest[];
  applications: JobApplication[];
  onSelectCandidateForLetter: (name: string, position: string) => void;
}

export default function CandidateList({
  quotes,
  applications,
  onSelectCandidateForLetter
}: CandidateListProps) {
  
  const formatDate = (isoStr: string) => {
    try {
      return new Date(isoStr).toLocaleDateString('en-AE', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return isoStr;
    }
  };

  return (
    <div className="space-y-12" id="admin-candidate-list">
      
      {/* Applications Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-extrabold text-brand-navy uppercase tracking-tight border-b-2 border-brand-gold pb-2 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-brand-gold" />
          Job Applications ({applications.length})
        </h2>
        {applications.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-sm p-8 text-center text-slate-500 text-sm shadow-sm">
            No job applications received yet. Try applying from the Careers page.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {applications.map((app) => (
              <div 
                key={app.id} 
                className="bg-white border border-slate-200 rounded-sm p-5 shadow-sm hover:border-brand-gold transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                id={`app-card-${app.id}`}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="font-extrabold text-brand-navy text-base">{app.name}</span>
                    <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full uppercase">
                      {app.position}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-1 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 shrink-0 text-slate-400" /> {app.email}</span>
                    <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 shrink-0 text-slate-400" /> {app.phone}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 shrink-0 text-slate-400" /> {formatDate(app.timestamp)}</span>
                  </div>
                  <div className="text-xs text-slate-600 bg-slate-50 p-2 rounded border border-slate-100 italic">
                    " {app.message || 'No cover letter message provided.'} "
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button 
                    onClick={() => onSelectCandidateForLetter(app.name, app.position)}
                    className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded bg-brand-navy hover:bg-brand-dark text-white text-xs font-bold transition-all shadow-sm cursor-pointer uppercase tracking-wider"
                  >
                    <UserCheck className="w-4 h-4" />
                    Offer & Hire
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quote Requests Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-extrabold text-brand-navy uppercase tracking-tight border-b-2 border-brand-gold pb-2 flex items-center gap-2">
          <Building className="w-5 h-5 text-brand-gold" />
          Warehouse Quote Requests ({quotes.length})
        </h2>
        {quotes.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-sm p-8 text-center text-slate-500 text-sm shadow-sm">
            No quote requests submitted yet. Try sending one from the Contact page.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {quotes.map((q) => (
              <div 
                key={q.id}
                className="bg-white border border-slate-200 rounded-sm p-5 shadow-sm hover:border-brand-gold transition-colors space-y-3"
                id={`quote-card-${q.id}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="font-extrabold text-brand-navy text-base">{q.name}</span>
                    <span className="text-[10px] font-bold bg-amber-50 text-brand-gold border border-amber-200 px-2 py-0.5 rounded uppercase">
                      {q.spaceRequired}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-300" /> {formatDate(q.timestamp)}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-1 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5"><Building className="w-3.5 h-3.5 text-slate-400" /> {q.company}</span>
                  <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-slate-400" /> {q.email}</span>
                  <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-slate-400" /> {q.phone}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 bg-slate-50 p-2 rounded border border-slate-100">
                  <strong>Notes:</strong> {q.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
