/** Shared type definition for HR letter parameters — every field is fully editable */
export interface LetterParams {
  template: 'offer' | 'appointment';
  refNumber: string;
  date: string;

  // Employee Details
  fullName: string;
  nationality: string;
  passportNumber: string;
  address: string;

  // Position Details
  position: string;
  department: string;
  reportingTo: string;
  workLocation: string;

  // Contract Terms
  contractType: string;
  startDate: string;
  probationMonths: string;
  workingHours: string;
  weeklyOff: string;

  // Compensation Breakdown
  basicSalary: string;
  housingAllowance: string;
  transportAllowance: string;
  otherAllowance: string;
  totalSalary: string;

  // Leave & Benefits
  annualLeaveDays: string;
  sickLeaveDays: string;
  flightAllowance: string;
  medicalInsurance: string;
  additionalBenefits: string;

  // Termination & NDA
  noticePeriod: string;
  gratuityNote: string;
  confidentialityClause: string;

  // Signatory Details
  signatoryName: string;
  signatoryTitle: string;
}

/** Sensible defaults pre-filled for Al Riaz Warehousing & Storage LLC */
export const DEFAULT_LETTER_PARAMS: Omit<LetterParams, 'template' | 'refNumber' | 'date'> = {
  fullName: '',
  nationality: '',
  passportNumber: '',
  address: 'Dubai, United Arab Emirates',

  position: '',
  department: 'Logistics & Operations',
  reportingTo: 'Operations Manager',
  workLocation: 'Plot 1404, Logistics District, Dubai South, UAE',

  contractType: 'Unlimited (Full-time)',
  startDate: '',
  probationMonths: '6',
  workingHours: '8 hours per day (48 hours per week)',
  weeklyOff: 'Friday',

  basicSalary: '3,000',
  housingAllowance: '1,500',
  transportAllowance: '500',
  otherAllowance: '500',
  totalSalary: '5,500',

  annualLeaveDays: '30',
  sickLeaveDays: '15',
  flightAllowance: 'One annual economy return ticket to home country',
  medicalInsurance: 'Comprehensive medical insurance as per DHA requirements for employee',
  additionalBenefits: 'Shared furnished accommodation, company transport to/from work site, uniform & PPE provided',

  noticePeriod: '30 days (during probation: 14 days)',
  gratuityNote: 'End-of-service gratuity as per UAE Federal Decree-Law No. 33 of 2021 (Article 51)',
  confidentialityClause: 'Employee shall not disclose any proprietary warehousing data, client cargo manifests, inventory systems, pricing structures, or operational trade secrets during and after the term of employment.',

  signatoryName: 'Abdul Kareem',
  signatoryTitle: 'HR Manager'
};

/** Save generated letter parameters to system database registry */
export function saveLetterToRegistry(params: LetterParams) {
  try {
    const saved = localStorage.getItem('al_riaz_verified_letters');
    const letters: LetterParams[] = saved ? JSON.parse(saved) : [];
    
    // Check if letter with this reference number already exists to avoid duplicates
    if (!letters.some(l => l.refNumber === params.refNumber)) {
      letters.push(params);
      localStorage.setItem('al_riaz_verified_letters', JSON.stringify(letters));
    }
  } catch (e) {
    console.error('Failed to save to letter registry:', e);
  }
}

/** Retrieve letter parameters from system database registry by reference number */
export function getLetterFromRegistry(refNumber: string): LetterParams | null {
  try {
    const saved = localStorage.getItem('al_riaz_verified_letters');
    if (!saved) return null;
    const letters: LetterParams[] = JSON.parse(saved);
    return letters.find(l => l.refNumber.toUpperCase().trim() === refNumber.toUpperCase().trim()) || null;
  } catch (e) {
    console.error('Failed to read from letter registry:', e);
    return null;
  }
}

