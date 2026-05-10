import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { sendSheetAction } from '@/services/googleSheets';
import { LogIn, User } from 'lucide-react';

export interface UserData {
  nama: string;
  kataKunci: string;
  score: number;
  dayStreak: number;
}

interface LoginModalProps {
  onLogin: (user: UserData) => void;
  isAdminMode: () => void;
}

export function LoginModal({ onLogin, isAdminMode }: LoginModalProps) {
  const [nama, setNama] = useState('');
  const [kataKunci, setKataKunci] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama.trim() || !kataKunci.trim()) return;

    // Admin backdoor
    if (nama === 'admin' && kataKunci === 'admin123') {
      isAdminMode();
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const res = await sendSheetAction('registerOrLogin', {
        nama: nama,
        kataKunci: kataKunci
      });
      
      if (res.success) {
        onLogin({
          nama,
          kataKunci,
          score: res.score || 0,
          dayStreak: res.dayStreak || 0
        });
      } else {
        setErrorMsg(res.message || 'Gagal log masuk.');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Sila pastikan URL Google Sheets di tetapkan.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl w-full max-w-md overflow-hidden relative border border-white/20"
      >
        <div className="bg-primary p-6 text-white text-center">
          <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-white/20 mb-4 backdrop-blur-sm">
            <User size={32} />
          </div>
          <h2 className="text-2xl font-bold">Selamat Datang!</h2>
          <p className="text-white/80 mt-1">Sila log masuk atau daftar nama baru.</p>
        </div>
        
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">Nama Anda</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Contoh: Ali bin Abu"
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 h-14 bg-slate-50"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">Kata Kunci (Password)</label>
              <input
                type="password"
                value={kataKunci}
                onChange={(e) => setKataKunci(e.target.value)}
                placeholder="Rahsia anda"
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 h-14 bg-slate-50"
                required
              />
            </div>

            {errorMsg && (
              <div className="p-4 bg-red-50 text-red-600 rounded-2xl text-sm border border-red-100">
                {errorMsg}
              </div>
            )}

            <Button 
              type="submit" 
              disabled={isSubmitting || !nama.trim() || !kataKunci.trim()}
              className="w-full h-14 text-lg rounded-full shadow-lg mt-4 bg-primary hover:bg-primary/90"
            >
              {isSubmitting ? 'Menyemak...' : (
                <><LogIn className="mr-2" /> Log Masuk / Daftar</>
              )}
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
