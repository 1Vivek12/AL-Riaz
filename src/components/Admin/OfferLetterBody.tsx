import { LetterParams } from './letterTypes';

interface OfferLetterBodyProps {
  params: LetterParams;
}

/** Highly detailed Offer & Agreement Letter body — UAE Labor Law compliant */
export default function OfferLetterBody({ params }: OfferLetterBodyProps) {
  return (
    <div className="space-y-3 text-justify leading-relaxed text-[11px] font-sans text-slate-800">
      <p>
        We are pleased to extend this formal offer of employment to you at <strong>Al Riaz Warehousing & Storage LLC</strong> (hereinafter referred to as "the Company"), a registered establishment under the Jebel Ali Free Zone Authority (JAFZA) and Dubai South Logistics District, United Arab Emirates. This offer is subject to the terms and conditions outlined below and the applicable provisions of <strong>UAE Federal Decree-Law No. 33 of 2021</strong> concerning the Regulation of Labour Relations and its Executive Regulations.
      </p>

      {/* 1. Position */}
      <h3 className="font-black text-brand-navy text-[11px] uppercase pt-1">1. Position & Scope of Work</h3>
      <p>
        You are hereby offered the position of <strong>{params.position}</strong> under the <strong>{params.department}</strong> department, reporting directly to <strong>{params.reportingTo}</strong>. Your primary work location shall be <strong>{params.workLocation}</strong>. The Company reserves the right to reassign your duties or work location within the UAE as operationally required, in accordance with Article 12 of the UAE Labour Law.
      </p>

      {/* 2. Contract Type */}
      <h3 className="font-black text-brand-navy text-[11px] uppercase pt-1">2. Contract Type & Commencement</h3>
      <p>
        This is a <strong>{params.contractType}</strong> employment contract. Your employment shall commence on <strong>{params.startDate}</strong>, subject to the successful completion of medical fitness tests, security clearance, and submission of all required original documents for MOHRE/JAFZA visa processing.
      </p>

      {/* 3. Probation */}
      <h3 className="font-black text-brand-navy text-[11px] uppercase pt-1">3. Probation Period</h3>
      <p>
        You shall serve a probationary period of <strong>{params.probationMonths} months</strong> from the date of joining. During this period, either party may terminate the contract by providing a minimum of 14 calendar days' written notice. Upon successful completion of probation, your employment will be confirmed.
      </p>

      {/* 4. Compensation */}
      <h3 className="font-black text-brand-navy text-[11px] uppercase pt-1">4. Compensation & Salary Structure (Monthly)</h3>
      <table className="w-full text-[10px] border border-slate-200 my-2">
        <thead>
          <tr className="bg-slate-50">
            <th className="text-left px-3 py-1.5 font-bold text-slate-700 border-b border-slate-200">Component</th>
            <th className="text-right px-3 py-1.5 font-bold text-slate-700 border-b border-slate-200">Amount (AED)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-slate-100"><td className="px-3 py-1">Basic Salary</td><td className="text-right px-3 py-1">{params.basicSalary}</td></tr>
          <tr className="border-b border-slate-100"><td className="px-3 py-1">Housing Allowance</td><td className="text-right px-3 py-1">{params.housingAllowance}</td></tr>
          <tr className="border-b border-slate-100"><td className="px-3 py-1">Transport Allowance</td><td className="text-right px-3 py-1">{params.transportAllowance}</td></tr>
          <tr className="border-b border-slate-100"><td className="px-3 py-1">Other Allowance</td><td className="text-right px-3 py-1">{params.otherAllowance}</td></tr>
          <tr className="bg-brand-navy/5 font-bold"><td className="px-3 py-1.5">Total Monthly Package</td><td className="text-right px-3 py-1.5">AED {params.totalSalary}</td></tr>
        </tbody>
      </table>
      <p className="text-[9.5px] text-slate-500 italic">Salary shall be credited to your UAE bank account via the Wages Protection System (WPS) on or before the last working day of each calendar month.</p>

      {/* 5. Working Hours */}
      <h3 className="font-black text-brand-navy text-[11px] uppercase pt-1">5. Working Hours & Weekly Rest</h3>
      <p>
        Standard working hours shall be <strong>{params.workingHours}</strong>, exclusive of a one-hour lunch/rest break. The designated weekly rest day is <strong>{params.weeklyOff}</strong>. During the Holy Month of Ramadan, working hours shall be reduced by 2 hours/day as mandated by UAE law.
      </p>

      {/* 6. Leave */}
      <h3 className="font-black text-brand-navy text-[11px] uppercase pt-1">6. Leave Entitlements</h3>
      <p>
        Annual Leave: <strong>{params.annualLeaveDays} calendar days</strong> per annum (after one year of continuous service). Sick Leave: <strong>{params.sickLeaveDays} days</strong> per year (first 5 days full pay, next 10 half pay, as per Article 31 of the Labour Law). Public Holidays: As per UAE government gazette notifications.
      </p>

      {/* 7. Benefits */}
      <h3 className="font-black text-brand-navy text-[11px] uppercase pt-1">7. Additional Benefits & Allowances</h3>
      <p>
        <strong>Air Ticket:</strong> {params.flightAllowance}. <strong>Medical:</strong> {params.medicalInsurance}. <strong>Other:</strong> {params.additionalBenefits}.
      </p>

      {/* 8. Termination */}
      <h3 className="font-black text-brand-navy text-[11px] uppercase pt-1">8. Termination & Notice Period</h3>
      <p>
        Either party may terminate this agreement by providing <strong>{params.noticePeriod}</strong> written notice. The Company reserves the right to terminate without notice for gross misconduct, as defined under Article 44 of the UAE Labour Law, including but not limited to theft, assault, substance abuse, or willful damage to company property.
      </p>

      {/* 9. Gratuity */}
      <h3 className="font-black text-brand-navy text-[11px] uppercase pt-1">9. End-of-Service Gratuity</h3>
      <p>{params.gratuityNote}</p>

      {/* 10. Confidentiality */}
      <h3 className="font-black text-brand-navy text-[11px] uppercase pt-1">10. Confidentiality & Non-Disclosure</h3>
      <p>{params.confidentialityClause}</p>

      {/* 11. Governing Law */}
      <h3 className="font-black text-brand-navy text-[11px] uppercase pt-1">11. Governing Law & Jurisdiction</h3>
      <p>
        This agreement shall be governed by and construed in accordance with the laws of the United Arab Emirates, including UAE Federal Decree-Law No. 33 of 2021 and JAFZA Employment Regulations. Any disputes shall be referred to the competent MOHRE/JAFZA labour authorities and subsequently to the courts of Dubai.
      </p>

      {/* Acceptance */}
      <div className="border-t border-slate-200 pt-3 mt-4">
        <p>
          By signing below, you confirm your acceptance of the above terms. This offer is valid for <strong>7 calendar days</strong> from the date of issue and will automatically lapse if not accepted in writing within this period.
        </p>
      </div>
    </div>
  );
}
