import { supabase } from './supabase';
import { LetterParams } from '../components/Admin/letterTypes';

/** Maps camelCase LetterParams to snake_case DB columns */
function toDbRow(params: LetterParams) {
  return {
    ref_number: params.refNumber,
    template: params.template,
    date: params.date,
    full_name: params.fullName,
    nationality: params.nationality,
    passport_number: params.passportNumber,
    address: params.address,
    position: params.position,
    department: params.department,
    reporting_to: params.reportingTo,
    work_location: params.workLocation,
    contract_type: params.contractType,
    start_date: params.startDate,
    probation_months: params.probationMonths,
    working_hours: params.workingHours,
    weekly_off: params.weeklyOff,
    basic_salary: params.basicSalary,
    housing_allowance: params.housingAllowance,
    transport_allowance: params.transportAllowance,
    other_allowance: params.otherAllowance,
    total_salary: params.totalSalary,
    annual_leave_days: params.annualLeaveDays,
    sick_leave_days: params.sickLeaveDays,
    flight_allowance: params.flightAllowance,
    medical_insurance: params.medicalInsurance,
    additional_benefits: params.additionalBenefits,
    notice_period: params.noticePeriod,
    gratuity_note: params.gratuityNote,
    confidentiality_clause: params.confidentialityClause,
    signatory_name: params.signatoryName,
    signatory_title: params.signatoryTitle,
  };
}

/** Maps snake_case DB row back to camelCase LetterParams */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function fromDbRow(row: any): LetterParams {
  return {
    template: row.template,
    refNumber: row.ref_number,
    date: row.date,
    fullName: row.full_name,
    nationality: row.nationality || '',
    passportNumber: row.passport_number || '',
    address: row.address || '',
    position: row.position,
    department: row.department || '',
    reportingTo: row.reporting_to || '',
    workLocation: row.work_location || '',
    contractType: row.contract_type || '',
    startDate: row.start_date || '',
    probationMonths: row.probation_months || '',
    workingHours: row.working_hours || '',
    weeklyOff: row.weekly_off || '',
    basicSalary: row.basic_salary || '',
    housingAllowance: row.housing_allowance || '',
    transportAllowance: row.transport_allowance || '',
    otherAllowance: row.other_allowance || '',
    totalSalary: row.total_salary || '',
    annualLeaveDays: row.annual_leave_days || '',
    sickLeaveDays: row.sick_leave_days || '',
    flightAllowance: row.flight_allowance || '',
    medicalInsurance: row.medical_insurance || '',
    additionalBenefits: row.additional_benefits || '',
    noticePeriod: row.notice_period || '',
    gratuityNote: row.gratuity_note || '',
    confidentialityClause: row.confidentiality_clause || '',
    signatoryName: row.signatory_name || '',
    signatoryTitle: row.signatory_title || '',
  };
}

/** Save a new letter to Supabase (upsert to avoid duplicates) */
export async function saveLetter(params: LetterParams): Promise<boolean> {
  const { error } = await supabase
    .from('letters')
    .upsert(toDbRow(params), { onConflict: 'ref_number' });

  if (error) {
    console.error('Failed to save letter:', error);
    return false;
  }
  return true;
}

/** Fetch a letter by reference number (for verification portal) */
export async function getLetterByRef(refNumber: string): Promise<LetterParams | null> {
  const { data, error } = await supabase
    .from('letters')
    .select('*')
    .ilike('ref_number', refNumber.trim())
    .single();

  if (error || !data) return null;
  return fromDbRow(data);
}

/** Fetch all letters for admin history panel */
export async function getAllLetters(): Promise<LetterParams[]> {
  const { data, error } = await supabase
    .from('letters')
    .select('*')
    .order('created_at', { ascending: false });

  if (error || !data) return [];
  return data.map(fromDbRow);
}

/** Delete a letter by reference number */
export async function deleteLetter(refNumber: string): Promise<boolean> {
  const { error } = await supabase
    .from('letters')
    .delete()
    .eq('ref_number', refNumber);

  if (error) {
    console.error('Failed to delete letter:', error);
    return false;
  }
  return true;
}

/** Update an existing letter */
export async function updateLetter(refNumber: string, params: LetterParams): Promise<boolean> {
  const { error } = await supabase
    .from('letters')
    .update(toDbRow(params))
    .eq('ref_number', refNumber);

  if (error) {
    console.error('Failed to update letter:', error);
    return false;
  }
  return true;
}
