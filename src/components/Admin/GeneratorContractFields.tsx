import React from 'react';
import { DollarSign, Calendar, ShieldCheck, Clock } from 'lucide-react';

interface ContractFieldsProps {
  template: 'offer' | 'appointment';
  contractType: string; setContractType: (v: string) => void;
  startDate: string; setStartDate: (v: string) => void;
  probationMonths: string; setProbationMonths: (v: string) => void;
  workingHours: string; setWorkingHours: (v: string) => void;
  weeklyOff: string; setWeeklyOff: (v: string) => void;
  basicSalary: string; setBasicSalary: (v: string) => void;
  housingAllowance: string; setHousingAllowance: (v: string) => void;
  transportAllowance: string; setTransportAllowance: (v: string) => void;
  otherAllowance: string; setOtherAllowance: (v: string) => void;
  totalSalary: string; setTotalSalary: (v: string) => void;
  annualLeaveDays: string; setAnnualLeaveDays: (v: string) => void;
  sickLeaveDays: string; setSickLeaveDays: (v: string) => void;
  flightAllowance: string; setFlightAllowance: (v: string) => void;
  medicalInsurance: string; setMedicalInsurance: (v: string) => void;
  additionalBenefits: string; setAdditionalBenefits: (v: string) => void;
  noticePeriod: string; setNoticePeriod: (v: string) => void;
  gratuityNote: string; setGratuityNote: (v: string) => void;
  confidentialityClause: string; setConfidentialityClause: (v: string) => void;
  signatoryName: string; setSignatoryName: (v: string) => void;
  signatoryTitle: string; setSignatoryTitle: (v: string) => void;
}

const inputCls = "w-full px-3 py-2 border border-slate-200 rounded focus:border-brand-gold focus:outline-none text-sm bg-white";
const labelCls = "text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1";
const textAreaCls = "w-full px-3 py-2 border border-slate-200 rounded focus:border-brand-gold focus:outline-none text-sm bg-white resize-y";

export default function GeneratorContractFields(props: ContractFieldsProps) {
  const isOffer = props.template === 'offer';
  const isAppt = props.template === 'appointment';

  return (
    <>
      {/* Contract Section */}
      <fieldset className="space-y-4">
        <legend className="text-xs font-black text-brand-navy uppercase tracking-wider border-b border-slate-100 pb-2 mb-3 flex items-center gap-1.5">
          <Calendar className="w-4 h-4 text-brand-gold" /> Contract & Schedule
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div><label className={labelCls}>Contract Type</label><input type="text" value={props.contractType} onChange={e => props.setContractType(e.target.value)} className={inputCls} /></div>
          <div><label className={labelCls}>{isOffer ? 'Proposed Start Date *' : 'Official Joining Date *'}</label><input type="text" value={props.startDate} onChange={e => props.setStartDate(e.target.value)} placeholder="e.g. 15 July 2026" className={inputCls} /></div>
          <div><label className={labelCls}>Probation (Months)</label><input type="text" value={props.probationMonths} onChange={e => props.setProbationMonths(e.target.value)} className={inputCls} /></div>
          <div><label className={labelCls}>Working Hours</label><input type="text" value={props.workingHours} onChange={e => props.setWorkingHours(e.target.value)} className={inputCls} /></div>
          <div><label className={labelCls}>Weekly Off</label><input type="text" value={props.weeklyOff} onChange={e => props.setWeeklyOff(e.target.value)} className={inputCls} /></div>
        </div>
      </fieldset>

      {/* Salary Section (Only for Offer Letter) */}
      {isOffer && (
        <fieldset className="space-y-4">
          <legend className="text-xs font-black text-brand-navy uppercase tracking-wider border-b border-slate-100 pb-2 mb-3 flex items-center gap-1.5">
            <DollarSign className="w-4 h-4 text-brand-gold" /> Compensation Breakdown (AED)
          </legend>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div><label className={labelCls}>Basic Salary</label><input type="text" value={props.basicSalary} onChange={e => props.setBasicSalary(e.target.value)} className={inputCls} /></div>
            <div><label className={labelCls}>Housing</label><input type="text" value={props.housingAllowance} onChange={e => props.setHousingAllowance(e.target.value)} className={inputCls} /></div>
            <div><label className={labelCls}>Transport</label><input type="text" value={props.transportAllowance} onChange={e => props.setTransportAllowance(e.target.value)} className={inputCls} /></div>
            <div><label className={labelCls}>Other</label><input type="text" value={props.otherAllowance} onChange={e => props.setOtherAllowance(e.target.value)} className={inputCls} /></div>
            <div><label className={labelCls}>Total Package</label><input type="text" value={props.totalSalary} onChange={e => props.setTotalSalary(e.target.value)} className={`${inputCls} font-bold`} /></div>
          </div>
        </fieldset>
      )}

      {/* Leave & Benefits (Different details for Offer vs Appointment) */}
      <fieldset className="space-y-4">
        <legend className="text-xs font-black text-brand-navy uppercase tracking-wider border-b border-slate-100 pb-2 mb-3 flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-brand-gold" /> Leave & Benefits
        </legend>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div><label className={labelCls}>Annual Leave (Days)</label><input type="text" value={props.annualLeaveDays} onChange={e => props.setAnnualLeaveDays(e.target.value)} className={inputCls} /></div>
          <div><label className={labelCls}>Sick Leave (Days)</label><input type="text" value={props.sickLeaveDays} onChange={e => props.setSickLeaveDays(e.target.value)} className={inputCls} /></div>
          <div className="md:col-span-2"><label className={labelCls}>Flight Allowance</label><input type="text" value={props.flightAllowance} onChange={e => props.setFlightAllowance(e.target.value)} className={inputCls} /></div>
        </div>
        <div><label className={labelCls}>Medical Insurance</label><input type="text" value={props.medicalInsurance} onChange={e => props.setMedicalInsurance(e.target.value)} className={inputCls} /></div>
        {isOffer && (
          <div><label className={labelCls}>Additional Benefits (accommodation, transport, PPE, etc.)</label><textarea value={props.additionalBenefits} onChange={e => props.setAdditionalBenefits(e.target.value)} rows={2} className={textAreaCls} /></div>
        )}
      </fieldset>

      {/* Termination & Legal */}
      <fieldset className="space-y-4">
        <legend className="text-xs font-black text-brand-navy uppercase tracking-wider border-b border-slate-100 pb-2 mb-3 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-brand-gold" /> Termination, Gratuity & Signatory
        </legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><label className={labelCls}>Notice Period</label><input type="text" value={props.noticePeriod} onChange={e => props.setNoticePeriod(e.target.value)} className={inputCls} /></div>
          <div><label className={labelCls}>Signatory Name</label><input type="text" value={props.signatoryName} onChange={e => props.setSignatoryName(e.target.value)} className={inputCls} /></div>
          <div><label className={labelCls}>Signatory Title</label><input type="text" value={props.signatoryTitle} onChange={e => props.setSignatoryTitle(e.target.value)} className={inputCls} /></div>
        </div>
        {isAppt && (
          <>
            <div><label className={labelCls}>Gratuity Clause</label><textarea value={props.gratuityNote} onChange={e => props.setGratuityNote(e.target.value)} rows={2} className={textAreaCls} /></div>
            <div><label className={labelCls}>Confidentiality / NDA Clause</label><textarea value={props.confidentialityClause} onChange={e => props.setConfidentialityClause(e.target.value)} rows={3} className={textAreaCls} /></div>
          </>
        )}
      </fieldset>
    </>
  );
}
