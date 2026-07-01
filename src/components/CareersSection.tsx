import React, { useState, useRef } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ChevronDown, 
  ChevronUp, 
  Upload, 
  CheckCircle, 
  ArrowRight, 
  FileText,
  Trash2,
  FileSpreadsheet
} from 'lucide-react';
import { JOB_OPENINGS } from '../data';
import { Job, JobApplication } from '../types';

interface CareersSectionProps {
  onAddApplication: (app: Omit<JobApplication, 'id' | 'status' | 'timestamp'>) => void;
}

export default function CareersSection({ onAddApplication }: CareersSectionProps) {
  const [expandedJobId, setExpandedJobId] = useState<string | null>('job-1');
  const [selectedPosition, setSelectedPosition] = useState<string>('Warehouse Operations Manager');
  
  // Application Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  
  // File Upload State
  const [cvFile, setCvFile] = useState<{ name: string; size: string } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Success state
  const [isSuccess, setIsSuccess] = useState(false);

  const toggleJobAccordion = (jobId: string) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };

  const handleApplyClick = (job: Job) => {
    setSelectedPosition(job.title);
    setExpandedJobId(job.id);
    const formElement = document.getElementById('apply-form-card');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
      // Focus name field
      setTimeout(() => {
        const nameInput = document.getElementById('app-name');
        if (nameInput) nameInput.focus();
      }, 500);
    }
  };

  // Simulated File handlers
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const sizeStr = (file.size / (1024 * 1024)).toFixed(2) + ' MB';
      setCvFile({ name: file.name, size: sizeStr });
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const sizeStr = (file.size / (1024 * 1024)).toFixed(2) + ' MB';
      setCvFile({ name: file.name, size: sizeStr });
    }
  };

  const triggerFileSelector = () => {
    fileInputRef.current?.click();
  };

  const removeCVFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCvFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Submit Application
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    onAddApplication({
      name,
      email,
      phone,
      position: selectedPosition,
      cvName: cvFile ? cvFile.name : 'Simulated_CV.pdf',
      cvSize: cvFile ? cvFile.size : '0.85 MB',
      message
    });

    setIsSuccess(true);

    // Reset Form
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setCvFile(null);

    // Auto clear success screen after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 6000);
  };

  return (
    <div className="bg-slate-50 text-slate-800 py-16 md:py-24 flex-1" id="careers-section-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Careers Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4" id="careers-intro">
          <span className="text-xs font-extrabold tracking-widest text-brand-gold uppercase bg-white px-3 py-1 rounded-sm border border-slate-200 shadow-sm">
            Join Our Dubai Logistics Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy uppercase">
            Build Your Logistics Career
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We value safety, reliability, and precision. Join a premier logistics team operating in Dubai South and Jebel Ali Free Zone. Check our current vacancies and apply today.
          </p>
        </div>

        {/* Accordions and Apply Form Side-by-side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="careers-grid">
          
          {/* Left Column: Job Accordion */}
          <div className="lg:col-span-7 space-y-4" id="jobs-accordion-column">
            <h3 className="text-xl font-bold text-brand-navy uppercase tracking-tight mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-brand-gold" />
              Active Job Openings ({JOB_OPENINGS.length})
            </h3>

            <div className="space-y-4" id="job-accordion-list">
              {JOB_OPENINGS.map((job) => {
                const isExpanded = expandedJobId === job.id;
                return (
                  <div
                    key={job.id}
                    className={`bg-white border transition-all rounded-sm overflow-hidden ${
                      isExpanded 
                        ? 'border-brand-gold shadow-md' 
                        : 'border-slate-200 hover:border-brand-gold/50'
                    }`}
                    id={`accordion-job-${job.id}`}
                  >
                    {/* Collapsed Header */}
                    <button
                      onClick={() => toggleJobAccordion(job.id)}
                      className="w-full flex items-center justify-between p-5 text-left cursor-pointer focus:outline-none"
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-wider font-extrabold text-brand-navy bg-slate-100 px-2.5 py-0.5 rounded-sm border border-slate-200">
                          {job.department}
                        </span>
                        <h4 className="text-lg font-black text-brand-navy uppercase tracking-tight pt-1">
                          {job.title}
                        </h4>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-bold pt-1">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-brand-gold" />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <div>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-brand-gold" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400" />
                        )}
                      </div>
                    </button>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="px-5 pb-5 pt-1 border-t border-slate-100 space-y-5 animate-in fade-in slide-in-from-top-1">
                        {/* Description */}
                        <div>
                          <h5 className="text-xs font-bold text-brand-navy uppercase tracking-widest mb-1.5">
                            Job Overview
                          </h5>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {job.description}
                          </p>
                        </div>

                        {/* Salary highlight */}
                        <div className="bg-slate-50 p-3.5 border border-slate-200 rounded-sm text-sm flex items-center justify-between">
                          <span className="text-slate-500 font-bold text-xs uppercase tracking-wider">Target Package</span>
                          <span className="font-extrabold text-brand-navy">{job.salary}</span>
                        </div>

                        {/* Requirements */}
                        <div>
                          <h5 className="text-xs font-bold text-brand-navy uppercase tracking-widest mb-2">
                            Requirements & Qualifications
                          </h5>
                          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                            {job.requirements.map((req, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0 mt-2"></span>
                                <span className="leading-relaxed">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Benefits */}
                        <div>
                          <h5 className="text-xs font-bold text-brand-navy uppercase tracking-widest mb-2">
                            What We Offer / Benefits
                          </h5>
                          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                            {job.benefits.map((ben, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2"></span>
                                <span className="leading-relaxed">{ben}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Apply CTA inside accordion */}
                        <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
                          <button
                            onClick={() => handleApplyClick(job)}
                            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-sm bg-brand-gold hover:bg-brand-gold-hover text-white text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer"
                          >
                            Apply For Role
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-5" id="apply-form-column">
            <div 
              className="bg-white border border-slate-200 rounded-sm p-6 lg:p-8 space-y-6 shadow-xl relative border-t-4 border-brand-gold"
              id="apply-form-card"
            >
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-brand-gold tracking-widest">
                  Quick Application
                </span>
                <h3 className="text-xl font-black text-brand-navy uppercase tracking-tight">
                  Submit Your CV
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fill out the details below. We review warehouse portfolios and contact candidates within 3-5 business days.
                </p>
              </div>

              {isSuccess ? (
                <div className="bg-slate-50 border border-emerald-500/30 p-6 rounded-sm text-center space-y-4 animate-in zoom-in-95 duration-300" id="apply-success-box">
                  <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-slate-800">Application Received!</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Your CV has been saved locally. You can track this application in the <b>My Submissions</b> panel at the bottom of the portal.
                    </p>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-sm text-left text-[11px] text-slate-500 leading-normal flex items-start gap-2">
                    <FileSpreadsheet className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><b>Integration Ready:</b> This static form can be instantly wired to Formspree, Web3Forms, or Google Sheets with a single line of code!</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="careers-apply-form">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="app-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="app-name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Rajesh Kumar"
                      className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                    />
                  </div>

                  {/* Email & Phone grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="app-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="app-email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g., rajesh@domain.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="app-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Phone (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        id="app-phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g., +971 50 123 4567"
                        className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                      />
                    </div>
                  </div>

                  {/* Position Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="app-position" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Position Applying For *
                    </label>
                    <select
                      id="app-position"
                      value={selectedPosition}
                      onChange={(e) => setSelectedPosition(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                    >
                      {JOB_OPENINGS.map((job) => (
                        <option key={job.id} value={job.title} className="bg-white text-slate-800">
                          {job.title} ({job.location})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message/Notes */}
                  <div className="space-y-1.5">
                    <label htmlFor="app-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Notes / Past Experience (Optional)
                    </label>
                    <textarea
                      id="app-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe your years of warehouse service or certificate holdings..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors resize-none"
                    />
                  </div>

                  {/* Styled File Upload component */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Upload CV (PDF or DOCX) *
                    </label>
                    
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={triggerFileSelector}
                      className={`border-2 border-dashed rounded-sm p-4 text-center cursor-pointer transition-all ${
                        isDragging 
                          ? 'border-brand-gold bg-brand-gold/5' 
                          : cvFile 
                            ? 'border-emerald-500 bg-emerald-50/50' 
                            : 'border-slate-200 hover:border-brand-gold/50 bg-slate-50'
                      }`}
                      id="cv-drag-drop-zone"
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                      
                      {cvFile ? (
                        <div className="flex items-center justify-between text-left p-1" id="uploaded-file-row">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded bg-emerald-100 text-emerald-800">
                              <FileText className="w-5 h-5" />
                            </div>
                            <div>
                              <span className="block text-xs font-bold text-slate-800 max-w-[160px] truncate">
                                {cvFile.name}
                              </span>
                              <span className="block text-[10px] text-slate-500 font-bold">
                                {cvFile.size}
                              </span>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={removeCVFile}
                            className="p-1.5 rounded hover:bg-slate-200 text-slate-400 hover:text-rose-500 transition-colors"
                            id="delete-cv-btn"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-1.5">
                          <Upload className="w-6 h-6 text-slate-400 mx-auto" />
                          <div>
                            <span className="text-xs font-bold text-brand-gold hover:underline">
                              Click to upload
                            </span>{' '}
                            <span className="text-xs text-slate-500 font-bold">
                              or drag and drop
                            </span>
                          </div>
                          <span className="block text-[10px] text-slate-500 font-bold">
                            PDF, DOCX up to 10MB (Will simulate on submission)
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submission buttons */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-brand-gold hover:bg-brand-gold-hover text-white font-extrabold text-sm shadow-md transition-all cursor-pointer mt-2 uppercase tracking-wider"
                  >
                    Submit Application
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
