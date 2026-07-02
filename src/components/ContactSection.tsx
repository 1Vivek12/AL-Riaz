import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  MessageSquare, 
  CheckCircle, 
  Send, 
  Layers, 
  FileSpreadsheet, 
  ExternalLink 
} from 'lucide-react';
import { QuoteRequest } from '../types';

interface ContactSectionProps {
  onAddQuote: (quote: Omit<QuoteRequest, 'id' | 'status' | 'timestamp'>) => void;
}

export default function ContactSection({ onAddQuote }: ContactSectionProps) {
  // Quote form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [spaceRequired, setSpaceRequired] = useState('2,000 - 5,000 Sq. Ft.');
  const [message, setMessage] = useState('');

  // Success state
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    onAddQuote({
      name,
      email,
      phone,
      company: company || 'Self Employed / Individual',
      spaceRequired,
      message
    });

    setIsSuccess(true);

    // Reset Form fields
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setMessage('');

    // Clear success after 6 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 6000);
  };

  return (
    <div className="bg-slate-50 text-slate-800 py-16 md:py-24 flex-1" id="contact-section-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Contact Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4" id="contact-intro">
          <span className="text-xs font-extrabold tracking-widest text-brand-gold uppercase bg-white px-3 py-1 rounded-sm border border-slate-200 shadow-sm">
            Corporate Inquiries & Allocation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy uppercase">
            Let's Allocate Your Space
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Get in touch with our commercial leasing team or submit a quote request. We help analyze peak fulfillment workloads to suggest optimal floor space.
          </p>
        </div>

        {/* Dual Column: Details and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-grid">
          
          {/* Left Column: Info & Details */}
          <div className="lg:col-span-5 space-y-8" id="contact-info-column">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-brand-navy uppercase tracking-tight">
                Corporate Headquarters
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Located in the high-growth Logistics District adjacent to the Al Maktoum International Airport (DWC), our flagship center serves as a bonded transshipment corridor for the Middle East.
              </p>
            </div>

            {/* Contacts list */}
            <div className="space-y-4" id="contacts-list">
              {/* Address card */}
              <div className="flex gap-4 p-4 rounded-sm bg-white border border-slate-200 shadow-sm">
                <div className="p-2 bg-brand-gold/10 text-brand-gold border border-brand-gold/20 rounded-sm shrink-0 h-10 w-10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="block text-xs font-bold text-brand-gold uppercase tracking-widest">
                    HQ Location
                  </span>
                  <p className="text-sm text-brand-navy font-bold leading-relaxed uppercase">
                    Plot 1404, Logistics District, Dubai South (Near DWC Airport), Dubai, UAE
                  </p>
                </div>
              </div>

              {/* Phone card */}
              <div className="flex gap-4 p-4 rounded-sm bg-white border border-slate-200 shadow-sm">
                <div className="p-2 bg-brand-gold/10 text-brand-gold border border-brand-gold/20 rounded-sm shrink-0 h-10 w-10 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="block text-xs font-bold text-brand-gold uppercase tracking-widest">
                    Leasing Telephone
                  </span>
                  <p className="text-sm text-brand-navy font-black uppercase">
                    +971 4 800 WAREHOUSE
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Alternative: +971 50 123 4567 (Commercial Director)
                  </p>
                </div>
              </div>

              {/* Email card */}
              <div className="flex gap-4 p-4 rounded-sm bg-white border border-slate-200 shadow-sm">
                <div className="p-2 bg-brand-gold/10 text-brand-gold border border-brand-gold/20 rounded-sm shrink-0 h-10 w-10 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="block text-xs font-bold text-brand-gold uppercase tracking-widest">
                    Digital Inbox
                  </span>
                  <p className="text-sm text-brand-navy font-black uppercase">
                    info@alriazlogistics.com
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Enterprise RFPs: leasing@dubaiwarehouse.com
                  </p>
                </div>
              </div>
            </div>

            {/* Socials card */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                Immediate Communication Channels
              </h4>
              <div className="flex gap-3">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-sm bg-white border border-slate-200 hover:border-brand-gold text-sm text-slate-700 hover:text-brand-navy transition-all cursor-pointer shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  <span className="font-bold">LinkedIn Portal</span>
                </a>
                <a 
                  href="https://wa.me/971500000000" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-sm bg-white border border-slate-200 hover:border-brand-gold text-sm text-slate-700 hover:text-brand-navy transition-all cursor-pointer shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-500" />
                  <span className="font-bold">WhatsApp Direct</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: "Get a Quote" Form */}
          <div className="lg:col-span-7" id="quote-form-column">
            <div 
              className="bg-white border border-slate-200 rounded-sm p-6 lg:p-8 space-y-6 shadow-xl relative border-t-4 border-brand-gold"
              id="quote-form-card"
            >
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-brand-gold tracking-widest">
                  Quick Commercial Inquiry
                </span>
                <h3 className="text-xl font-black text-brand-navy uppercase tracking-tight">
                  Get a Free Layout Quote
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Provide estimated square footage requirements and inventory types. Our engineers will draft a mock layout pricing model within 24 hours.
                </p>
              </div>

              {isSuccess ? (
                <div className="bg-slate-50 border border-emerald-500/30 p-8 rounded-sm text-center space-y-4 animate-in zoom-in-95 duration-200" id="quote-success-box">
                  <div className="w-14 h-14 bg-emerald-500/10 text-emerald-600 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-slate-800">Quote Request Saved!</h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      Thank you for submitting your specifications. You can monitor the progress of this quotation in the <b>My Submissions</b> hub at the bottom of the portal.
                    </p>
                  </div>
                  <div className="p-4 bg-white border border-slate-200 rounded-sm text-left text-xs text-slate-500 leading-relaxed flex items-start gap-2.5">
                    <FileSpreadsheet className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span><b>Formspree / Web3Forms Integration:</b> This static form can easily send submissions straight to your email using static triggers without needing a node backend!</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="leasing-quote-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="quote-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        id="quote-name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder=""
                        className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                      />
                    </div>
                    {/* Company */}
                    <div className="space-y-1.5">
                      <label htmlFor="quote-company" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Company Name (Optional)
                      </label>
                      <input
                        type="text"
                        id="quote-company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder=""
                        className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="quote-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="quote-email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder=""
                        className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                      />
                    </div>
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label htmlFor="quote-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Contact Telephone *
                      </label>
                      <input
                        type="tel"
                        id="quote-phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder=""
                        className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                      />
                    </div>
                  </div>

                  {/* Space Required Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="quote-space" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Space Needed (Sq. Ft.) *
                    </label>
                    <select
                      id="quote-space"
                      value={spaceRequired}
                      onChange={(e) => setSpaceRequired(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                    >
                      <option value="Less than 2,000 Sq. Ft.">Less than 2,000 Sq. Ft.</option>
                      <option value="2,000 - 5,000 Sq. Ft.">2,000 - 5,000 Sq. Ft.</option>
                      <option value="5,000 - 10,000 Sq. Ft.">5,000 - 10,000 Sq. Ft.</option>
                      <option value="10,000 - 25,000 Sq. Ft.">10,000 - 25,000 Sq. Ft.</option>
                      <option value="Over 25,000 Sq. Ft.">Over 25,000 Sq. Ft. (Enterprise Grade)</option>
                      <option value="Cold Storage Zone Required">Temperature Controlled Zone (Any Size)</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="quote-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Describe Storage or Fulfillment Needs *
                    </label>
                    <textarea
                      id="quote-message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder=""
                      className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors resize-none"
                    />
                  </div>

                  {/* Send Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-brand-gold hover:bg-brand-gold-hover text-white font-extrabold text-sm shadow-md transition-all cursor-pointer mt-2 uppercase tracking-wider"
                  >
                    Submit Quotation Specs
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom: Google Maps Placeholder frame */}
        <div className="space-y-4" id="maps-placeholder-frame">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-lg font-black text-brand-navy uppercase tracking-tight flex items-center gap-2">
                <Layers className="w-4 h-4 text-brand-gold" />
                Dubai South Logistics Hub Location Map
              </h3>
              <p className="text-xs text-slate-500 font-bold uppercase">
                Lat: 24.8962° N, Lon: 55.1611° E | Prime access to Jebel Ali seaport (JAFZA) & Al Maktoum Airport (DWC)
              </p>
            </div>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs text-brand-gold hover:underline hover:text-brand-navy font-extrabold uppercase tracking-wider"
            >
              Open in Google Maps
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* High-quality styled map layout frame */}
          <div className="h-80 w-full rounded-sm bg-slate-900 border border-slate-200 overflow-hidden relative flex items-center justify-center shadow-lg" id="map-frame">
            {/* Dark theme map grid background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
            
            {/* Grid Pattern overlaying map to look like streets */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_2px,transparent_2px),linear-gradient(to_bottom,#808080_2px,transparent_2px)] bg-[size:120px_120px]" />
            
            {/* Mock roads & landmarks */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-brand-gold/10 -translate-y-1/2 rotate-[15deg] border-t border-b border-brand-gold/5" />
            <div className="absolute top-0 left-1/3 w-1 h-full bg-slate-800/20 rotate-[-25deg]" />
            <div className="absolute top-0 left-2/3 w-1 h-full bg-slate-800/25 rotate-[45deg]" />

            {/* Airport Runway indicator */}
            <div className="absolute top-1/4 right-1/4 bg-slate-800/40 border border-slate-750 p-3 rounded text-[10px] uppercase font-bold tracking-widest text-slate-500 flex items-center gap-1.5 rotate-[-5deg]">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping"></span>
              Al Maktoum Int Airport (DWC) Runway
            </div>

            {/* Jebel Ali Highway indicator */}
            <div className="absolute bottom-10 left-10 text-[9px] uppercase tracking-widest font-black text-slate-600">
              Sheikh Mohammed Bin Zayed Road (E311) &rarr;
            </div>

            {/* Pulsing Pin Marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-2.5 z-10" id="map-marker-pin">
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-gold/20 border border-brand-gold/40 animate-ping" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-brand-gold/40 border border-brand-gold/60 animate-pulse" />
                <div className="relative bg-brand-dark border-2 border-brand-gold p-2.5 rounded-full text-brand-gold shadow-2xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 animate-bounce" />
                </div>
              </div>
              <div className="bg-brand-navy/95 backdrop-blur-md px-3.5 py-2 rounded-sm border border-slate-700 shadow-xl max-w-xs mx-auto text-white">
                <span className="block text-xs font-black uppercase tracking-wider">AL RIAZ WAREHOUSING HQ</span>
                <span className="block text-[10px] text-slate-300 font-bold uppercase">Logistics District Plot 1404</span>
                <span className="block text-[9px] text-brand-gold font-bold uppercase mt-0.5">2 Mins from Airport Cargo Gate</span>
              </div>
            </div>
            
            {/* Scale and compass indicator */}
            <div className="absolute bottom-4 right-4 bg-brand-dark/85 px-2 py-1 rounded border border-slate-800 text-[9px] text-slate-500 font-mono">
              Scale: 1 : 15,000 | WGS84
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
