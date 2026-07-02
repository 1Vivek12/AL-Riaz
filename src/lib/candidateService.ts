import { supabase } from './supabase';
import { QuoteRequest, JobApplication } from '../types';

/** Save a new quote request to Supabase */
export async function saveQuote(quote: QuoteRequest): Promise<boolean> {
  const { error } = await supabase
    .from('quotes')
    .upsert({
      id: quote.id,
      name: quote.name,
      email: quote.email,
      phone: quote.phone,
      company: quote.company,
      space_required: quote.spaceRequired,
      message: quote.message,
      status: quote.status,
      created_at: quote.timestamp,
    }, { onConflict: 'id' });

  if (error) {
    console.error('Failed to save quote:', error);
    return false;
  }
  return true;
}

/** Save a new job application to Supabase */
export async function saveApplication(app: JobApplication): Promise<boolean> {
  const { error } = await supabase
    .from('applications')
    .upsert({
      id: app.id,
      name: app.name,
      email: app.email,
      phone: app.phone,
      position: app.position,
      cv_name: app.cvName,
      cv_size: app.cvSize,
      message: app.message,
      status: app.status,
      created_at: app.timestamp,
    }, { onConflict: 'id' });

  if (error) {
    console.error('Failed to save application:', error);
    return false;
  }
  return true;
}

/** Fetch all quotes from Supabase (for admin panel) */
export async function getAllQuotes(): Promise<QuoteRequest[]> {
  const { data, error } = await supabase
    .from('quotes')
    .select('*')
    .order('created_at', { ascending: false });

  if (error || !data) return [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.map((row: any) => ({
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone,
    company: row.company,
    spaceRequired: row.space_required,
    message: row.message || '',
    status: row.status || 'Received',
    timestamp: row.created_at,
  }));
}

/** Fetch all job applications from Supabase (for admin panel) */
export async function getAllApplications(): Promise<JobApplication[]> {
  const { data, error } = await supabase
    .from('applications')
    .select('*')
    .order('created_at', { ascending: false });

  if (error || !data) return [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.map((row: any) => ({
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone,
    position: row.position,
    cvName: row.cv_name || '',
    cvSize: row.cv_size || '',
    message: row.message || '',
    status: row.status || 'Submitted',
    timestamp: row.created_at,
  }));
}

/** Delete a quote by ID */
export async function deleteQuote(id: string): Promise<boolean> {
  const { error } = await supabase.from('quotes').delete().eq('id', id);
  if (error) { console.error('Failed to delete quote:', error); return false; }
  return true;
}

/** Delete an application by ID */
export async function deleteApplication(id: string): Promise<boolean> {
  const { error } = await supabase.from('applications').delete().eq('id', id);
  if (error) { console.error('Failed to delete application:', error); return false; }
  return true;
}
