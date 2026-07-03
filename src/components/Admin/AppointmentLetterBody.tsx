import { LetterParams } from './letterTypes';

interface AppointmentLetterBodyProps {
  params: LetterParams;
}

/** Highly detailed Appointment & Engagement Letter body — UAE Labor Law compliant */
export default function AppointmentLetterBody({ params }: AppointmentLetterBodyProps) {
  return (
    <div className="space-y-3 text-justify leading-relaxed text-[11px] font-sans text-slate-800">
      <p>
        With reference to your application and subsequent interview, we are pleased to confirm your appointment at <strong>Al Riaz Warehousing & Storage LLC</strong> (hereinafter referred to as "the Company"), a registered establishment in Dubai South Free Zone (Logistics District), United Arab Emirates. This appointment is governed by <strong>UAE Federal Decree-Law No. 33 of 2021</strong> and the applicable Dubai South Employment Regulations.
      </p>

      {/* 1. Appointment Details */}
      <h3 className="font-black text-brand-navy text-[11px] uppercase pt-1">1. Appointment Details</h3>
      <table className="w-full text-[10px] border border-slate-200 my-2">
        <tbody>
          <tr className="border-b border-slate-100"><td className="px-3 py-1.5 font-semibold text-slate-600 w-[40%] bg-slate-50">Full Name</td><td className="px-3 py-1.5 font-bold">{params.fullName}</td></tr>
          <tr className="border-b border-slate-100"><td className="px-3 py-1.5 font-semibold text-slate-600 bg-slate-50">Nationality</td><td className="px-3 py-1.5">{params.nationality || '—'}</td></tr>
          <tr className="border-b border-slate-100"><td className="px-3 py-1.5 font-semibold text-slate-600 bg-slate-50">Passport Number</td><td className="px-3 py-1.5">{params.passportNumber || '—'}</td></tr>
          <tr className="border-b border-slate-100"><td className="px-3 py-1.5 font-semibold text-slate-600 bg-slate-50">Position / Designation</td><td className="px-3 py-1.5 font-bold">{params.position}</td></tr>
          <tr className="border-b border-slate-100"><td className="px-3 py-1.5 font-semibold text-slate-600 bg-slate-50">Department</td><td className="px-3 py-1.5">{params.department}</td></tr>
          <tr className="border-b border-slate-100"><td className="px-3 py-1.5 font-semibold text-slate-600 bg-slate-50">Reporting To</td><td className="px-3 py-1.5">{params.reportingTo}</td></tr>
          <tr className="border-b border-slate-100"><td className="px-3 py-1.5 font-semibold text-slate-600 bg-slate-50">Work Location</td><td className="px-3 py-1.5">{params.workLocation}</td></tr>
          <tr className="border-b border-slate-100"><td className="px-3 py-1.5 font-semibold text-slate-600 bg-slate-50">Date of Joining</td><td className="px-3 py-1.5 font-bold">{params.startDate}</td></tr>
          <tr><td className="px-3 py-1.5 font-semibold text-slate-600 bg-slate-50">Contract Type</td><td className="px-3 py-1.5">{params.contractType}</td></tr>
        </tbody>
      </table>

      {/* 2. Compensation */}
      <h3 className="font-black text-brand-navy text-[11px] uppercase pt-1">2. Compensation Structure (Monthly in AED)</h3>
      <table className="w-full text-[10px] border border-slate-200 my-2">
        <thead>
          <tr className="bg-slate-50">
            <th className="text-left px-3 py-1.5 font-bold text-slate-700 border-b border-slate-200">Salary Component</th>
            <th className="text-right px-3 py-1.5 font-bold text-slate-700 border-b border-slate-200">Amount (AED)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-slate-100"><td className="px-3 py-1">Basic Salary</td><td className="text-right px-3 py-1">{params.basicSalary}</td></tr>
          <tr className="border-b border-slate-100"><td className="px-3 py-1">Housing Allowance</td><td className="text-right px-3 py-1">{params.housingAllowance}</td></tr>
          <tr className="border-b border-slate-100"><td className="px-3 py-1">Transportation Allowance</td><td className="text-right px-3 py-1">{params.transportAllowance}</td></tr>
          <tr className="border-b border-slate-100"><td className="px-3 py-1">Other Allowance</td><td className="text-right px-3 py-1">{params.otherAllowance}</td></tr>
          <tr className="bg-brand-navy/5 font-bold"><td className="px-3 py-1.5">Total Monthly Package</td><td className="text-right px-3 py-1.5">AED {params.totalSalary}</td></tr>
        </tbody>
      </table>
      <p className="text-[9.5px] text-slate-500 italic">All salary payments shall be processed through the UAE Wages Protection System (WPS) to your registered bank account.</p>

      {/* 3. Working Hours */}
      <h3 className="font-black text-brand-navy text-[11px] uppercase pt-1">3. Working Hours & Rest Day</h3>
      <p>
        Your working hours are <strong>{params.workingHours}</strong>. Weekly rest day is <strong>{params.weeklyOff}</strong>. Working hours during the Holy Month of Ramadan will be reduced by 2 hours daily as per UAE Labour Law.
      </p>

      {/* 4. Probation */}
      <h3 className="font-black text-brand-navy text-[11px] uppercase pt-1">4. Probation Period</h3>
      <p>
        Your appointment is subject to a probation period of <strong>{params.probationMonths} months</strong>. During this period, the Company or the Employee may terminate this contract by giving 14 days' written notice.
      </p>

      {/* 5. Leave */}
      <h3 className="font-black text-brand-navy text-[11px] uppercase pt-1">5. Leave Entitlements</h3>
      <p>
        Annual Leave: <strong>{params.annualLeaveDays} days</strong>. Sick Leave: <strong>{params.sickLeaveDays} days</strong> per year. Public Holidays: As per UAE federal government notifications. Maternity/Paternity leave as per applicable UAE law provisions.
      </p>

      {/* 6. Benefits */}
      <h3 className="font-black text-brand-navy text-[11px] uppercase pt-1">6. Benefits & Allowances</h3>
      <p>
        <strong>Flight:</strong> {params.flightAllowance}. <strong>Medical:</strong> {params.medicalInsurance}. <strong>Additional:</strong> {params.additionalBenefits}.
      </p>

      {/* 7. Termination */}
      <h3 className="font-black text-brand-navy text-[11px] uppercase pt-1">7. Termination & Notice</h3>
      <p>
        After confirmation, either party may terminate employment by providing <strong>{params.noticePeriod}</strong> written notice. Immediate termination without notice is reserved for cases of gross misconduct under Article 44 of UAE Labour Law including theft, substance abuse, assault, or willful damage to property.
      </p>

      {/* 8. Gratuity */}
      <h3 className="font-black text-brand-navy text-[11px] uppercase pt-1">8. End-of-Service Gratuity</h3>
      <p>{params.gratuityNote}</p>

      {/* 9. Confidentiality */}
      <h3 className="font-black text-brand-navy text-[11px] uppercase pt-1">9. Confidentiality & Non-Disclosure</h3>
      <p>{params.confidentialityClause}</p>

      {/* 10. Documents Required */}
      <h3 className="font-black text-brand-navy text-[11px] uppercase pt-1">10. Documents Required for Visa Processing</h3>
      <p>
        Please submit the following original documents within 3 working days of accepting this appointment: (a) Valid Passport with minimum 6 months validity, (b) Educational/Professional Certificates (attested), (c) Passport-size photographs (white background), (d) Medical fitness test results (from DHA-approved facility), (e) Previous employer's experience/relieving letters.
      </p>

      {/* 11. Governing Law */}
      <h3 className="font-black text-brand-navy text-[11px] uppercase pt-1">11. Governing Law</h3>
      <p>
        This appointment is governed by UAE Federal Decree-Law No. 33 of 2021 and Dubai South Employment Regulations. Disputes shall be resolved through Dubai South Authority labour authorities and the courts of Dubai.
      </p>

      {/* Acceptance */}
      <div className="border-t border-slate-200 pt-3 mt-4">
        <p>
          We welcome you to the Al Riaz family and look forward to your valuable contribution. Please sign and return a copy of this letter as confirmation of your acceptance. This appointment is valid for <strong>7 calendar days</strong> from the date of issue.
        </p>
      </div>
    </div>
  );
}
