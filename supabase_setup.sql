-- ============================================
-- AL RIAZ WAREHOUSING & STORAGE LLC
-- Supabase Database Setup
-- Run this SQL in Supabase Dashboard → SQL Editor
-- ============================================

-- 1. Letters Table (Offer Letters & Appointment Letters)
CREATE TABLE IF NOT EXISTS letters (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ref_number TEXT UNIQUE NOT NULL,
  template TEXT NOT NULL CHECK (template IN ('offer', 'appointment')),
  date TEXT NOT NULL,
  full_name TEXT NOT NULL,
  nationality TEXT DEFAULT '',
  passport_number TEXT DEFAULT '',
  address TEXT DEFAULT '',
  position TEXT NOT NULL,
  department TEXT DEFAULT '',
  reporting_to TEXT DEFAULT '',
  work_location TEXT DEFAULT '',
  contract_type TEXT DEFAULT '',
  start_date TEXT DEFAULT '',
  probation_months TEXT DEFAULT '',
  working_hours TEXT DEFAULT '',
  weekly_off TEXT DEFAULT '',
  basic_salary TEXT DEFAULT '',
  housing_allowance TEXT DEFAULT '',
  transport_allowance TEXT DEFAULT '',
  other_allowance TEXT DEFAULT '',
  total_salary TEXT DEFAULT '',
  annual_leave_days TEXT DEFAULT '',
  sick_leave_days TEXT DEFAULT '',
  flight_allowance TEXT DEFAULT '',
  medical_insurance TEXT DEFAULT '',
  additional_benefits TEXT DEFAULT '',
  notice_period TEXT DEFAULT '',
  gratuity_note TEXT DEFAULT '',
  confidentiality_clause TEXT DEFAULT '',
  signatory_name TEXT DEFAULT '',
  signatory_title TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Quote Requests Table
CREATE TABLE IF NOT EXISTS quotes (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT NOT NULL,
  space_required TEXT NOT NULL,
  message TEXT DEFAULT '',
  status TEXT DEFAULT 'Received',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Job Applications Table
CREATE TABLE IF NOT EXISTS applications (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  position TEXT NOT NULL,
  cv_name TEXT DEFAULT '',
  cv_size TEXT DEFAULT '',
  message TEXT DEFAULT '',
  status TEXT DEFAULT 'Submitted',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Enable Row Level Security (but allow public access via anon key)
ALTER TABLE letters ENABLE ROW LEVEL SECURITY;
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- 5. Policies: Allow full access via anon key (app handles its own auth)
CREATE POLICY "Allow all operations on letters" ON letters FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on quotes" ON quotes FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on applications" ON applications FOR ALL USING (true) WITH CHECK (true);
