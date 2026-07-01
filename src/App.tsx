import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import CareersSection from './components/CareersSection';
import ContactSection from './components/ContactSection';
import SubmissionTracker from './components/SubmissionTracker';
import { QuoteRequest, JobApplication } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Initialize quote submissions and job applications from localStorage
  const [quotes, setQuotes] = useState<QuoteRequest[]>(() => {
    try {
      const saved = localStorage.getItem('dubai_warehouse_quotes');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn('LocalStorage not accessible:', e);
      return [];
    }
  });

  const [applications, setApplications] = useState<JobApplication[]>(() => {
    try {
      const saved = localStorage.getItem('dubai_warehouse_applications');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.warn('LocalStorage not accessible:', e);
      return [];
    }
  });

  // Synchronize quotes state with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('dubai_warehouse_quotes', JSON.stringify(quotes));
    } catch (e) {
      console.error('Failed to sync quotes:', e);
    }
  }, [quotes]);

  // Synchronize applications state with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('dubai_warehouse_applications', JSON.stringify(applications));
    } catch (e) {
      console.error('Failed to sync applications:', e);
    }
  }, [applications]);

  // Handle adding new quote request
  const handleAddQuote = (newQuoteData: Omit<QuoteRequest, 'id' | 'status' | 'timestamp'>) => {
    const newQuote: QuoteRequest = {
      ...newQuoteData,
      id: `quote-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      status: 'Received',
      timestamp: new Date().toISOString()
    };
    setQuotes((prev) => [newQuote, ...prev]);
  };

  // Handle adding new job application
  const handleAddApplication = (newAppData: Omit<JobApplication, 'id' | 'status' | 'timestamp'>) => {
    const newApp: JobApplication = {
      ...newAppData,
      id: `app-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      status: 'Submitted',
      timestamp: new Date().toISOString()
    };
    setApplications((prev) => [newApp, ...prev]);
  };

  // Clear local storage for sandbox resetting
  const handleClearSubmissions = () => {
    if (window.confirm('Are you sure you want to clear your local submission history?')) {
      setQuotes([]);
      setApplications([]);
      try {
        localStorage.removeItem('dubai_warehouse_quotes');
        localStorage.removeItem('dubai_warehouse_applications');
      } catch (e) {
        console.error(e);
      }
    }
  };

  // Page selector helper
  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="flex-1 flex flex-col"
          >
            <HomeSection setCurrentPage={setCurrentPage} />
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="flex-1 flex flex-col"
          >
            <AboutSection />
          </motion.div>
        );
      case 'services':
        return (
          <motion.div
            key="services"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="flex-1 flex flex-col"
          >
            <ServicesSection />
          </motion.div>
        );
      case 'careers':
        return (
          <motion.div
            key="careers"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="flex-1 flex flex-col"
          >
            <CareersSection onAddApplication={handleAddApplication} />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="flex-1 flex flex-col"
          >
            <ContactSection onAddQuote={handleAddQuote} />
          </motion.div>
        );
      default:
        return (
          <div className="flex-1 flex items-center justify-center text-slate-400 py-20">
            Page Not Found
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950" id="dubai-warehouse-app">
      {/* Sticky Top Header */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Multi-Tab View Frame */}
      <main className="flex-1 flex flex-col" id="app-main-content">
        <AnimatePresence mode="wait">
          {renderPageContent()}
        </AnimatePresence>
      </main>

      {/* Submission Tracker Drawer */}
      <SubmissionTracker 
        quotes={quotes}
        applications={applications}
        onClearSubmissions={handleClearSubmissions}
      />

      {/* Bottom Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
