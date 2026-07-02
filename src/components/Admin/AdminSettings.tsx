import React, { useState } from 'react';
import { ShieldCheck, ShieldAlert, Key } from 'lucide-react';

export default function AdminSettings() {
  const [currentUsername, setCurrentUsername] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleUpdateCreds = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (newPassword !== confirmPassword) {
      setErrorMsg('New passwords do not match.');
      return;
    }

    try {
      const savedCreds = localStorage.getItem('al_riaz_admin_creds');
      const activeCreds = savedCreds ? JSON.parse(savedCreds) : { user: 'admin', pass: 'admin123' };

      // Validate current credentials
      if (currentUsername.trim() !== activeCreds.user || currentPassword !== activeCreds.pass) {
        setErrorMsg('Invalid current username or password.');
        return;
      }

      // Save new credentials
      const updatedCreds = {
        user: newUsername.trim(),
        pass: newPassword
      };
      localStorage.setItem('al_riaz_admin_creds', JSON.stringify(updatedCreds));
      setSuccessMsg('Security credentials updated successfully.');

      // Clear input fields
      setCurrentUsername('');
      setCurrentPassword('');
      setNewUsername('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      console.error(err);
      setErrorMsg('Failed to update security credentials.');
    }
  };

  const labelCls = "text-[10px] font-bold text-slate-700 uppercase tracking-wider block mb-1";
  const inputCls = "w-full px-3 py-2 border border-slate-200 rounded focus:border-brand-gold focus:outline-none text-sm bg-white";

  return (
    <div className="bg-white border border-slate-200 rounded-sm p-6 md:p-8 shadow-sm max-w-xl mx-auto space-y-6" id="admin-security-settings-form">
      <div>
        <h2 className="text-xl font-extrabold text-brand-navy uppercase tracking-tight flex items-center gap-1.5">
          <Key className="w-5 h-5 text-brand-gold" /> Security Settings
        </h2>
        <p className="text-xs text-slate-500">Update username and password to secure document generation</p>
      </div>

      {errorMsg && (
        <div className="bg-rose-50 border border-rose-100 text-rose-700 text-xs p-3 rounded flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 shrink-0 text-rose-600" />
          <span>{errorMsg}</span>
        </div>
      )}

      {successMsg && (
        <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs p-3 rounded flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600" />
          <span>{successMsg}</span>
        </div>
      )}

      <form onSubmit={handleUpdateCreds} className="space-y-4">
        
        {/* Current Credentials verification */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b border-slate-100 pb-4">
          <div>
            <label className={labelCls}>Current Username</label>
            <input type="text" value={currentUsername} onChange={e => setCurrentUsername(e.target.value)} required className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Current Password</label>
            <input type="password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} required className={inputCls} />
          </div>
        </div>

        {/* New Credentials inputs */}
        <div className="space-y-4">
          <div>
            <label className={labelCls}>New Username</label>
            <input type="text" value={newUsername} onChange={e => setNewUsername(e.target.value)} required className={inputCls} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>New Password</label>
              <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} required className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Confirm New Password</label>
              <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required className={inputCls} />
            </div>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button 
            type="submit"
            className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded bg-brand-navy hover:bg-brand-dark text-white font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-sm"
          >
            Save Security Credentials
          </button>
        </div>
      </form>
    </div>
  );
}
