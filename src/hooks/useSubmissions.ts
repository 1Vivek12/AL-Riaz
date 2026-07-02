import { useState, useEffect } from 'react';
import { QuoteRequest, JobApplication } from '../types';

export function useSubmissions() {
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

  return {
    quotes,
    applications,
    handleAddQuote,
    handleAddApplication,
    handleClearSubmissions
  };
}
