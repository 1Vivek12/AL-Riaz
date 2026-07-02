import { createClient } from '@supabase/supabase-js';

// Fallback to hardcoded keys if environment variables are not loaded in production
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://hcsixnevskpotdyofnpp.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhjc2l4bmV2c2twb3RkeW9mbnBwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI5ODkyNjcsImV4cCI6MjA5ODU2NTI2N30.sY3tvK3fGXzeA1chnNrO5SVMEfcOR9QmkEr48Exailc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
