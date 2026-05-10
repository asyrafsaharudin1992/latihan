import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { sendSheetAction } from '@/services/googleSheets';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface ReportQuestionModalProps {
  questionText: string;
  userName: string;
  onClose: () => void;
}

export function ReportQuestionModal({ questionText, userName, onClose }: ReportQuestionModalProps) {
  const [isu, setIsu] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isu.trim()) return;

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      await sendSheetAction('laporSoalan', {
        tab: 'Laporan Soalan',
        namaPelapor: userName,
        soalan: questionText,
        isu: isu
      });
      setSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err: any) {
      setErrorMsg(err.message || 'Ralat berlaku semasa menghantar laporan.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl w-full max-w-lg flex flex-col max-h-[90vh]"
      >
        <div className="bg-red-500/10 p-6">
          <h2 className="text-xl font-bold text-red-600 flex items-center gap-2">
            <AlertCircle /> Lapor Soalan
          </h2>
          <p className="text-red-600/70 text-sm mt-1">Sila beritahu isu yang anda hadapi pada soalan ini.</p>
        </div>
        
        <div className="p-6 overflow-y-auto flex-1">
          {success ? (
            <div className="text-center py-8 space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Laporan Dihantar!</h3>
              <p className="text-slate-600">Terima kasih kerana membantu cikgu perbaiki soalan.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 flex flex-col h-full">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">Soalan Asal:</label>
                <div className="p-4 bg-slate-100/50 rounded-2xl text-slate-600 text-sm border border-slate-200/50">
                  {questionText || '(Soalan bergambar/padanan)'}
                </div>
              </div>
              
              <div className="flex-1">
                <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">Apa masalah soalan ini?</label>
                <textarea
                  value={isu}
                  onChange={(e) => setIsu(e.target.value)}
                  placeholder="Contoh: Ejaan salah, atau semua jawapan tak masuk akal..."
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 resize-none h-32 bg-white"
                  required
                />
              </div>

              {errorMsg && (
                <div className="p-4 bg-red-50 text-red-600 rounded-2xl text-sm border border-red-100">
                  {errorMsg}
                </div>
              )}

              <div className="flex gap-3 mt-auto">
                <Button type="button" variant="outline" className="w-full h-14 rounded-full" onClick={onClose}>
                  Batal
                </Button>
                <Button 
                  type="submit" 
                  disabled={isSubmitting || !isu.trim()}
                  className="w-full h-14 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-md shadow-red-500/20"
                >
                  {isSubmitting ? 'Menghantar...' : 'Hantar Laporan'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
