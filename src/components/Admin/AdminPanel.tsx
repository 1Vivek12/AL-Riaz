import { useState, useEffect } from 'react';
import { QuoteRequest, JobApplication } from '../../types';
import CandidateList from './CandidateList';
import DocumentGenerator from './DocumentGenerator';
import DocumentPreview from './DocumentPreview';
import AdminLogin from './AdminLogin';
import AdminSettings from './AdminSettings';
import { LetterParams } from './letterTypes';
import { Briefcase, FileSignature, Shield, History, Eye, Trash2, Settings, LogOut } from 'lucide-react';

interface AdminPanelProps {
  quotes: QuoteRequest[];
  applications: JobApplication[];
}

export default function AdminPanel({ quotes, applications }: AdminPanelProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('al_riaz_admin_logged') === 'true';
    } catch {
      return false;
    }
  });

  const [activeTab, setActiveTab] = useState<'submissions' | 'generator' | 'preview' | 'history' | 'settings'>('submissions');
  const [candidateName, setCandidateName] = useState('');
  const [candidatePosition, setCandidatePosition] = useState('');
  const [previewParams, setPreviewParams] = useState<LetterParams | null>(null);
  const [historyLetters, setHistoryLetters] = useState<LetterParams[]>([]);

  const loadHistory = () => {
    try {
      const saved = localStorage.getItem('al_riaz_verified_letters');
      setHistoryLetters(saved ? JSON.parse(saved) : []);
    } catch (e) {
      console.error('Failed to load letter history:', e);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadHistory();
    }
  }, [activeTab, isAuthenticated]);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    try {
      sessionStorage.setItem('al_riaz_admin_logged', 'true');
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out of the Admin Portal?')) {
      setIsAuthenticated(false);
      try {
        sessionStorage.removeItem('al_riaz_admin_logged');
      } catch (e) {
        console.error(e);
      }
      setActiveTab('submissions');
    }
  };

  const handleSelectCandidate = (name: string, position: string) => {
    setCandidateName(name);
    setCandidatePosition(position);
    setActiveTab('generator');
  };

  const handleGenerate = (params: LetterParams) => {
    setPreviewParams(params);
    setActiveTab('preview');
  };

  const handleViewHistorical = (params: LetterParams) => {
    setPreviewParams(params);
    setActiveTab('preview');
  };

  const handleDeleteLetter = (ref: string) => {
    if (window.confirm(`Are you sure you want to revoke/delete registered letter ${ref}?`)) {
      try {
        const saved = localStorage.getItem('al_riaz_verified_letters');
        const list: LetterParams[] = saved ? JSON.parse(saved) : [];
        const updated = list.filter(l => l.refNumber !== ref);
        localStorage.setItem('al_riaz_verified_letters', JSON.stringify(updated));
        setHistoryLetters(updated);
      } catch (e) {
        console.error(e);
      }
    }
  };

  // If not authenticated, render the secure Login gate
  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="bg-slate-50 text-slate-800 py-12 md:py-16 flex-1 flex flex-col" id="admin-panel-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 flex-1 flex flex-col w-full">

        {/* Admin Header (Hidden during printing) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-5 print:hidden">
          <div className="space-y-1">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-widest flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-brand-gold" /> Authorized Personnel Only
            </span>
            <h1 className="text-3xl font-black text-brand-navy uppercase tracking-tight">Admin & HR Portal</h1>
          </div>

          {activeTab !== 'preview' && (
            <div className="flex flex-wrap items-center gap-3 self-start">
              <div className="flex bg-white p-1 rounded-sm border border-slate-200 shadow-sm">
                <button
                  onClick={() => setActiveTab('submissions')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${activeTab === 'submissions' ? 'bg-brand-navy text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  <Briefcase className="w-3.5 h-3.5" /> Submissions
                </button>
                <button
                  onClick={() => setActiveTab('generator')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${activeTab === 'generator' ? 'bg-brand-navy text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  <FileSignature className="w-3.5 h-3.5" /> Generator
                </button>
                <button
                  onClick={() => setActiveTab('history')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${activeTab === 'history' ? 'bg-brand-navy text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  <History className="w-3.5 h-3.5" /> History
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${activeTab === 'settings' ? 'bg-brand-navy text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  <Settings className="w-3.5 h-3.5" /> Settings
                </button>
              </div>
              
              <button 
                onClick={handleLogout}
                className="px-3.5 py-1.5 rounded border border-rose-200 text-rose-600 hover:bg-rose-50 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm bg-white flex items-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5" /> Logout
              </button>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeTab === 'submissions' && (
            <CandidateList quotes={quotes} applications={applications} onSelectCandidateForLetter={handleSelectCandidate} />
          )}
          
          {activeTab === 'generator' && (
            <div className="max-w-4xl mx-auto">
              <DocumentGenerator initialName={candidateName} initialPosition={candidatePosition} onGenerate={handleGenerate} />
            </div>
          )}

          {activeTab === 'preview' && previewParams && (
            <DocumentPreview params={previewParams} onBack={() => setActiveTab('generator')} />
          )}

          {activeTab === 'settings' && (
            <AdminSettings />
          )}

          {activeTab === 'history' && (
            <div className="space-y-4">
              <h2 className="text-xl font-extrabold text-brand-navy uppercase tracking-tight border-b-2 border-brand-gold pb-2 flex items-center gap-2">
                <History className="w-5 h-5 text-brand-gold" /> Issued Letters History ({historyLetters.length})
              </h2>
              {historyLetters.length === 0 ? (
                <div className="bg-white border border-slate-200 rounded-sm p-8 text-center text-slate-500 text-sm shadow-sm">
                  No letters issued/registered yet. Go to the Letter Generator tab to create one.
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {historyLetters.map((letter) => (
                    <div key={letter.refNumber} className="bg-white border border-slate-200 rounded-sm p-5 shadow-sm hover:border-brand-gold transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm font-bold text-slate-800">{letter.refNumber}</span>
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase ${letter.template === 'offer' ? 'bg-amber-50 text-brand-gold border border-amber-200' : 'bg-[#0c2e56]/5 text-brand-navy border border-[#0c2e56]/10'}`}>
                            {letter.template === 'offer' ? 'Offer Letter' : 'Appointment'}
                          </span>
                        </div>
                        <p className="text-base font-extrabold text-slate-900 mt-1">{letter.fullName}</p>
                        <p className="text-xs text-slate-500">{letter.position} • Issued: {letter.date}</p>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => handleViewHistorical(letter)} className="px-3 py-1.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold inline-flex items-center gap-1 cursor-pointer">
                          <Eye className="w-3.5 h-3.5" /> View
                        </button>
                        <button onClick={() => handleDeleteLetter(letter.refNumber)} className="px-3 py-1.5 rounded bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs font-bold inline-flex items-center gap-1 cursor-pointer">
                          <Trash2 className="w-3.5 h-3.5" /> Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
