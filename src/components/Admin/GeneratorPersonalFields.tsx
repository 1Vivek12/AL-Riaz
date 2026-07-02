import React from 'react';
import { User } from 'lucide-react';

interface PersonalFieldsProps {
  template: 'offer' | 'appointment';
  fullName: string; setFullName: (v: string) => void;
  nationality: string; setNationality: (v: string) => void;
  passportNumber: string; setPassportNumber: (v: string) => void;
  address: string; setAddress: (v: string) => void;
  position: string; setPosition: (v: string) => void;
  department: string; setDepartment: (v: string) => void;
  reportingTo: string; setReportingTo: (v: string) => void;
  workLocation: string; setWorkLocation: (v: string) => void;
}

const inputCls = "w-full px-3 py-2 border border-slate-200 rounded focus:border-brand-gold focus:outline-none text-sm bg-white";
const labelCls = "text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-1";

export default function GeneratorPersonalFields(props: PersonalFieldsProps) {
  const isAppt = props.template === 'appointment';

  return (
    <fieldset className="space-y-5">
      <legend className="text-xs font-black text-brand-navy uppercase tracking-wider border-b border-slate-100 pb-2 mb-3 flex items-center gap-1.5">
        <User className="w-4 h-4 text-brand-gold" /> Employee & Position Details
      </legend>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Full Name (as per Passport) *</label>
          <input type="text" value={props.fullName} onChange={e => props.setFullName(e.target.value)} placeholder="e.g. Mohammad Tariq Khan" required className={inputCls} />
        </div>
        
        <div>
          <label className={labelCls}>Nationality</label>
          <input type="text" value={props.nationality} onChange={e => props.setNationality(e.target.value)} placeholder="e.g. Pakistani" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Passport Number</label>
          <input type="text" value={props.passportNumber} onChange={e => props.setPassportNumber(e.target.value)} placeholder="e.g. AB1234567" className={inputCls} />
        </div>
        <div className="md:col-span-2">
          <label className={labelCls}>Residential Address</label>
          <input type="text" value={props.address} onChange={e => props.setAddress(e.target.value)} className={inputCls} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Position / Designation *</label>
          <input type="text" value={props.position} onChange={e => props.setPosition(e.target.value)} placeholder="e.g. Heavy Forklift Operator" required className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Department</label>
          <input type="text" value={props.department} onChange={e => props.setDepartment(e.target.value)} className={inputCls} />
        </div>
        {isAppt && (
          <div>
            <label className={labelCls}>Reporting To</label>
            <input type="text" value={props.reportingTo} onChange={e => props.setReportingTo(e.target.value)} className={inputCls} />
          </div>
        )}
        <div>
          <label className={labelCls}>Work Location</label>
          <input type="text" value={props.workLocation} onChange={e => props.setWorkLocation(e.target.value)} className={inputCls} />
        </div>
      </div>
    </fieldset>
  );
}
