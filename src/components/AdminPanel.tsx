import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { sendSheetAction } from '@/services/googleSheets';
import { Settings, Users, ArrowLeft } from 'lucide-react';

interface AdminPanelProps {
  onClose: () => void;
}

export function AdminPanel({ onClose }: AdminPanelProps) {
  const [usersCount, setUsersCount] = useState<number | null>(null);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);

  useEffect(() => {
    loadUsersCount();
  }, []);

  const loadUsersCount = async () => {
    setIsLoadingUsers(true);
    try {
      const res = await sendSheetAction('getUsersList', {});
      if (res.success && res.users) {
         setUsersCount(res.users.length);
      }
    } catch (err) {
      console.log('Cannot fetch users', err);
    }
    setIsLoadingUsers(false);
  };

  return (
    <div className="fixed inset-0 bg-[#F2F2F7] z-50 overflow-y-auto">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={onClose} className="rounded-full flex-shrink-0 w-10 h-10">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
            <Settings className="text-primary w-8 h-8" /> Tetapan Cikgu (Admin)
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-sm border border-white/50 p-8">
             <div className="flex items-center gap-3 mb-6">
               <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                 <Users className="w-6 h-6" />
               </div>
               <h2 className="text-xl font-bold text-slate-900">Statistik Murid</h2>
             </div>
             
             {isLoadingUsers ? (
               <p className="text-slate-500 animate-pulse">Memuatkan data...</p>
             ) : usersCount !== null ? (
               <div className="text-center py-6">
                 <div className="text-5xl font-black text-slate-900 mb-2">{usersCount}</div>
                 <div className="text-slate-500 font-medium text-sm">Murid telah mendaftar</div>
                 <Button variant="outline" className="mt-6 rounded-full px-6" onClick={loadUsersCount}>
                   Segarkan Data
                 </Button>
               </div>
             ) : (
               <p className="text-slate-500 text-center py-6 text-sm">Gagal memuatkan statistik murid.</p>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}
