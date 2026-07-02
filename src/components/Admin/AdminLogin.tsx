import React, { useState } from 'react';
import { Lock, User, ShieldAlert } from 'lucide-react';
import Logo from '../Logo';

interface AdminLoginProps {
  onLoginSuccess: () => void;
}

export default function AdminLogin({ onLoginSuccess }: AdminLoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      // Fetch dynamic credentials from localStorage or fall back to default
      const savedCreds = localStorage.getItem('al_riaz_admin_creds');
      const activeCreds = savedCreds ? JSON.parse(savedCreds) : { user: 'admin', pass: 'admin123' };

      if (username.trim() === activeCreds.user && password === activeCreds.pass) {
        onLoginSuccess();
      } else {
        setErrorMsg('Invalid Username or Password. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Authentication subsystem error.');
    }
  };

  return (
    <div className="bg-slate-50 py-16 md:py-24 flex-1 flex items-center justify-center animate-in fade-in duration-200" id="admin-login-screen">
      <div className="w-full max-w-md px-4">
        
        {/* Login Container */}
        <div className="bg-white border border-slate-200 rounded-sm shadow-md p-8 space-y-6">
          <div className="text-center space-y-3">
            <div className="flex justify-center">
              <Logo className="w-16 h-16" showText={false} variant="dark" />
            </div>
            <h2 className="text-xl font-black text-brand-navy uppercase tracking-tight">Admin Authentication</h2>
            <p className="text-xs text-slate-500">Sign in to access corporate letter logs and document builders</p>
          </div>

          {errorMsg && (
            <div className="bg-rose-50 border border-rose-100 text-rose-700 text-xs p-3 rounded flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Username</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  required
                  className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded focus:border-brand-gold focus:outline-none text-sm bg-white"
                />
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider block">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded focus:border-brand-gold focus:outline-none text-sm bg-white"
                />
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-3 rounded bg-brand-navy hover:bg-brand-dark text-white font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md"
            >
              Access Dashboard
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
