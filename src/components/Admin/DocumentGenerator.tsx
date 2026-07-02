import React, { useState, useEffect } from 'react';
import { LetterParams, DEFAULT_LETTER_PARAMS } from './letterTypes';
import GeneratorPersonalFields from './GeneratorPersonalFields';
import GeneratorContractFields from './GeneratorContractFields';
import { FileText, FileCheck } from 'lucide-react';

interface DocumentGeneratorProps {
  initialName?: string;
  initialPosition?: string;
  editParams?: LetterParams | null;
  onGenerate: (params: LetterParams) => void;
}

export default function DocumentGenerator({ initialName = '', initialPosition = '', editParams = null, onGenerate }: DocumentGeneratorProps) {
  const d = DEFAULT_LETTER_PARAMS;
  const [template, setTemplate] = useState<'offer' | 'appointment'>('offer');

  // Personal & Position
  const [fullName, setFullName] = useState(d.fullName);
  const [nationality, setNationality] = useState(d.nationality);
  const [passportNumber, setPassportNumber] = useState(d.passportNumber);
  const [address, setAddress] = useState(d.address);
  const [position, setPosition] = useState(d.position);
  const [department, setDepartment] = useState(d.department);
  const [reportingTo, setReportingTo] = useState(d.reportingTo);
  const [workLocation, setWorkLocation] = useState(d.workLocation);

  // Contract
  const [contractType, setContractType] = useState(d.contractType);
  const [startDate, setStartDate] = useState(d.startDate);
  const [probationMonths, setProbationMonths] = useState(d.probationMonths);
  const [workingHours, setWorkingHours] = useState(d.workingHours);
  const [weeklyOff, setWeeklyOff] = useState(d.weeklyOff);

  // Salary
  const [basicSalary, setBasicSalary] = useState(d.basicSalary);
  const [housingAllowance, setHousingAllowance] = useState(d.housingAllowance);
  const [transportAllowance, setTransportAllowance] = useState(d.transportAllowance);
  const [otherAllowance, setOtherAllowance] = useState(d.otherAllowance);
  const [totalSalary, setTotalSalary] = useState(d.totalSalary);

  // Leave & Benefits
  const [annualLeaveDays, setAnnualLeaveDays] = useState(d.annualLeaveDays);
  const [sickLeaveDays, setSickLeaveDays] = useState(d.sickLeaveDays);
  const [flightAllowance, setFlightAllowance] = useState(d.flightAllowance);
  const [medicalInsurance, setMedicalInsurance] = useState(d.medicalInsurance);
  const [additionalBenefits, setAdditionalBenefits] = useState(d.additionalBenefits);

  // Termination & Legal
  const [noticePeriod, setNoticePeriod] = useState(d.noticePeriod);
  const [gratuityNote, setGratuityNote] = useState(d.gratuityNote);
  const [confidentialityClause, setConfidentialityClause] = useState(d.confidentialityClause);
  const [signatoryName, setSignatoryName] = useState(d.signatoryName);
  const [signatoryTitle, setSignatoryTitle] = useState(d.signatoryTitle);

  // Load initial params or edit params
  useEffect(() => {
    if (editParams) {
      setTemplate(editParams.template);
      setFullName(editParams.fullName);
      setNationality(editParams.nationality);
      setPassportNumber(editParams.passportNumber);
      setAddress(editParams.address);
      setPosition(editParams.position);
      setDepartment(editParams.department);
      setReportingTo(editParams.reportingTo);
      setWorkLocation(editParams.workLocation);
      setContractType(editParams.contractType);
      setStartDate(editParams.startDate);
      setProbationMonths(editParams.probationMonths);
      setWorkingHours(editParams.workingHours);
      setWeeklyOff(editParams.weeklyOff);
      setBasicSalary(editParams.basicSalary);
      setHousingAllowance(editParams.housingAllowance);
      setTransportAllowance(editParams.transportAllowance);
      setOtherAllowance(editParams.otherAllowance);
      setTotalSalary(editParams.totalSalary);
      setAnnualLeaveDays(editParams.annualLeaveDays);
      setSickLeaveDays(editParams.sickLeaveDays);
      setFlightAllowance(editParams.flightAllowance);
      setMedicalInsurance(editParams.medicalInsurance);
      setAdditionalBenefits(editParams.additionalBenefits);
      setNoticePeriod(editParams.noticePeriod);
      setGratuityNote(editParams.gratuityNote);
      setConfidentialityClause(editParams.confidentialityClause);
      setSignatoryName(editParams.signatoryName);
      setSignatoryTitle(editParams.signatoryTitle);
    } else {
      setFullName(initialName || d.fullName);
      setPosition(initialPosition || d.position);
      // Reset other fields to default
      setNationality(d.nationality);
      setPassportNumber(d.passportNumber);
      setAddress(d.address);
      setDepartment(d.department);
      setReportingTo(d.reportingTo);
      setWorkLocation(d.workLocation);
      setContractType(d.contractType);
      setStartDate(d.startDate);
      setProbationMonths(d.probationMonths);
      setWorkingHours(d.workingHours);
      setWeeklyOff(d.weeklyOff);
      setBasicSalary(d.basicSalary);
      setHousingAllowance(d.housingAllowance);
      setTransportAllowance(d.transportAllowance);
      setOtherAllowance(d.otherAllowance);
      setTotalSalary(d.totalSalary);
      setAnnualLeaveDays(d.annualLeaveDays);
      setSickLeaveDays(d.sickLeaveDays);
      setFlightAllowance(d.flightAllowance);
      setMedicalInsurance(d.medicalInsurance);
      setAdditionalBenefits(d.additionalBenefits);
      setNoticePeriod(d.noticePeriod);
      setGratuityNote(d.gratuityNote);
      setConfidentialityClause(d.confidentialityClause);
      setSignatoryName(d.signatoryName);
      setSignatoryTitle(d.signatoryTitle);
    }
  }, [initialName, initialPosition, editParams]);

  const generateRef = () => `AR-HR-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`;
  const todayStr = () => new Date().toLocaleDateString('en-AE', { year: 'numeric', month: 'long', day: 'numeric' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !position) { alert('Name and Position are required.'); return; }
    onGenerate({
      template, 
      refNumber: editParams ? editParams.refNumber : generateRef(), 
      date: editParams ? editParams.date : todayStr(),
      fullName, nationality, passportNumber, address,
      position, department, reportingTo, workLocation,
      contractType, startDate: startDate || todayStr(), probationMonths, workingHours, weeklyOff,
      basicSalary, housingAllowance, transportAllowance, otherAllowance, totalSalary,
      annualLeaveDays, sickLeaveDays, flightAllowance, medicalInsurance, additionalBenefits,
      noticePeriod, gratuityNote, confidentialityClause, signatoryName, signatoryTitle
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-sm p-6 md:p-8 shadow-sm space-y-8" id="admin-document-generator-form">
      {/* Header + Template Switcher */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 pb-4 gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-brand-navy uppercase tracking-tight">
            {editParams ? `Edit Letter (${editParams.refNumber})` : 'HR Letter Generator'}
          </h2>
          <p className="text-xs text-slate-500">Every field is fully editable — customize before generating</p>
        </div>
        <div className="flex bg-slate-100 p-1 rounded border border-slate-200 shrink-0">
          <button type="button" onClick={() => setTemplate('offer')} className={`flex items-center gap-1 px-3 py-1.5 rounded text-xs font-bold transition-all cursor-pointer ${template === 'offer' ? 'bg-white text-brand-navy shadow-sm' : 'text-slate-500'}`}>
            <FileText className="w-3.5 h-3.5" /> Offer & Agreement
          </button>
          <button type="button" onClick={() => setTemplate('appointment')} className={`flex items-center gap-1 px-3 py-1.5 rounded text-xs font-bold transition-all cursor-pointer ${template === 'appointment' ? 'bg-white text-brand-navy shadow-sm' : 'text-slate-500'}`}>
            <FileCheck className="w-3.5 h-3.5" /> Appointment Letter
          </button>
        </div>
      </div>

      {/* Personal Fields */}
      <GeneratorPersonalFields
        template={template}
        fullName={fullName} setFullName={setFullName} nationality={nationality} setNationality={setNationality}
        passportNumber={passportNumber} setPassportNumber={setPassportNumber} address={address} setAddress={setAddress}
        position={position} setPosition={setPosition} department={department} setDepartment={setDepartment}
        reportingTo={reportingTo} setReportingTo={setReportingTo} workLocation={workLocation} setWorkLocation={setWorkLocation}
      />

      {/* Contract & Salary Fields */}
      <GeneratorContractFields
        template={template}
        contractType={contractType} setContractType={setContractType} startDate={startDate} setStartDate={setStartDate}
        probationMonths={probationMonths} setProbationMonths={setProbationMonths} workingHours={workingHours} setWorkingHours={setWorkingHours}
        weeklyOff={weeklyOff} setWeeklyOff={setWeeklyOff} basicSalary={basicSalary} setBasicSalary={setBasicSalary}
        housingAllowance={housingAllowance} setHousingAllowance={setHousingAllowance} transportAllowance={transportAllowance} setTransportAllowance={setTransportAllowance}
        otherAllowance={otherAllowance} setOtherAllowance={setOtherAllowance} totalSalary={totalSalary} setTotalSalary={setTotalSalary}
        annualLeaveDays={annualLeaveDays} setAnnualLeaveDays={setAnnualLeaveDays} sickLeaveDays={sickLeaveDays} setSickLeaveDays={setSickLeaveDays}
        flightAllowance={flightAllowance} setFlightAllowance={setFlightAllowance} medicalInsurance={medicalInsurance} setMedicalInsurance={setMedicalInsurance}
        additionalBenefits={additionalBenefits} setAdditionalBenefits={setAdditionalBenefits}
        noticePeriod={noticePeriod} setNoticePeriod={setNoticePeriod} gratuityNote={gratuityNote} setGratuityNote={setGratuityNote}
        confidentialityClause={confidentialityClause} setConfidentialityClause={setConfidentialityClause}
        signatoryName={signatoryName} setSignatoryName={setSignatoryName} signatoryTitle={signatoryTitle} setSignatoryTitle={setSignatoryTitle}
      />

      {/* Submit */}
      <div className="pt-4 border-t border-slate-100 flex justify-end">
        <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-navy hover:bg-brand-dark text-white font-extrabold text-xs shadow-md transition-all duration-200 hover:translate-y-[-1px] active:translate-y-0 cursor-pointer uppercase tracking-widest">
          <FileCheck className="w-4 h-4 text-brand-gold" /> {editParams ? 'Save & Preview' : 'Generate Preview'}
        </button>
      </div>
    </form>
  );
}
