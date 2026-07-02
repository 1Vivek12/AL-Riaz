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
import TermsSection from './components/TermsSection';
import PrivacySection from './components/PrivacySection';
import AdminPanel from './components/Admin/AdminPanel';
import VerifyPortal from './components/VerifyPortal';
import { useSubmissions } from './hooks/useSubmissions';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [verifyRef, setVerifyRef] = useState<string>('');
  const {
    quotes,
    applications,
    handleAddQuote,
    handleAddApplication,
    refreshData
  } = useSubmissions();

  // Unified SPA router navigation
  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.history.pushState({}, '', page === 'home' ? '/' : `/${page}`);
  };

  // Sync route on popstate and initial page load
  useEffect(() => {
    const handleUrlChange = () => {
      const path = window.location.pathname.substring(1) || 'home';
      if (path.startsWith('verify')) {
        const params = new URLSearchParams(window.location.search);
        setVerifyRef(params.get('verify') || '');
        setCurrentPage('verify');
      } else if (['admin', 'home', 'about', 'services', 'careers', 'contact', 'terms', 'privacy'].includes(path)) {
        setCurrentPage(path);
      } else {
        setCurrentPage('home');
      }
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  // Page content router mapping
  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomeSection setCurrentPage={navigateTo} />;
      case 'about':
        return <AboutSection />;
      case 'services':
        return <ServicesSection />;
      case 'careers':
        return <CareersSection onAddApplication={handleAddApplication} />;
      case 'contact':
        return <ContactSection onAddQuote={handleAddQuote} />;
      case 'terms':
        return <TermsSection />;
      case 'privacy':
        return <PrivacySection />;
      case 'admin':
        return <AdminPanel quotes={quotes} applications={applications} />;
      case 'verify':
        return <VerifyPortal initialRef={verifyRef} />;
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
      <Header currentPage={currentPage} setCurrentPage={navigateTo} />

      <main className="flex-1 flex flex-col" id="app-main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="flex-1 flex flex-col"
          >
            {renderPageContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <SubmissionTracker 
        quotes={quotes}
        applications={applications}
      />

      <Footer setCurrentPage={navigateTo} />
    </div>
  );
}
