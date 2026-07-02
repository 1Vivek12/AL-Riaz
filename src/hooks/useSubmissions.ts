import { useState, useEffect } from 'react';
import { QuoteRequest, JobApplication } from '../types';
import { saveQuote, saveApplication, getAllQuotes, getAllApplications } from '../lib/candidateService';

export function useSubmissions() {
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [applications, setApplications] = useState<JobApplication[]>([]);

  // Load from Supabase on mount
  useEffect(() => {
    async function loadData() {
      const q = await getAllQuotes();
      const a = await getAllApplications();
      setQuotes(q);
      setApplications(a);
    }
    loadData();
  }, []);

  // Handle adding new quote request
  const handleAddQuote = async (newQuoteData: Omit<QuoteRequest, 'id' | 'status' | 'timestamp'>) => {
    const newQuote: QuoteRequest = {
      ...newQuoteData,
      id: `quote-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      status: 'Received',
      timestamp: new Date().toISOString()
    };
    // Prepend locally
    setQuotes((prev) => [newQuote, ...prev]);
    // Save to Supabase
    await saveQuote(newQuote);
  };

  // Handle adding new job application
  const handleAddApplication = async (newAppData: Omit<JobApplication, 'id' | 'status' | 'timestamp'>) => {
    const newApp: JobApplication = {
      ...newAppData,
      id: `app-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      status: 'Submitted',
      timestamp: new Date().toISOString()
    };
    // Prepend locally
    setApplications((prev) => [newApp, ...prev]);
    // Save to Supabase
    await saveApplication(newApp);
  };

  // Refresh submission records from database
  const refreshData = async () => {
    const q = await getAllQuotes();
    const a = await getAllApplications();
    setQuotes(q);
    setApplications(a);
  };

  return {
    quotes,
    applications,
    handleAddQuote,
    handleAddApplication,
    refreshData
  };
}
