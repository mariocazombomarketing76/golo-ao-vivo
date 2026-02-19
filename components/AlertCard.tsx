
import React from 'react';
import { Alert } from '../types';
import { Bell, Zap, TrendingUp, AlertCircle, CheckCircle2, Crown } from 'lucide-react';

interface AlertCardProps {
  alert: Alert;
  isBlurred?: boolean;
}

const AlertCard: React.FC<AlertCardProps> = ({ alert, isBlurred = false }) => {
  const getIcon = () => {
    switch (alert.type) {
      case 'DANGER': return <AlertCircle className="text-red-600" />;
      case 'GOAL': return <Zap className="text-[#FFD700]" />;
      case 'AI_PICK': return <TrendingUp className="text-[#FFD700]" />;
      default: return <Bell className="text-slate-400" />;
    }
  };

  return (
    <div className={`relative glass rounded-[1.5rem] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-600/30 ${isBlurred ? 'opacity-50 blur-md pointer-events-none' : 'shadow-2xl shadow-black/50'}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-white/5 p-2.5 rounded-xl border border-white/5 premium-shadow">
            {getIcon()}
          </div>
          <div className="flex flex-col">
            <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${alert.type === 'DANGER' ? 'text-red-500' : 'text-slate-500'}`}>
              {alert.type === 'DANGER' ? 'Perigo Imediato' : alert.type.replace('_', ' ')}
            </span>
            <div className="text-base font-black text-white italic tracking-tight">
              Minuto {alert.minute}'
            </div>
          </div>
        </div>
        <div className="bg-white/5 px-2 py-1 rounded-md text-[10px] text-slate-400 font-black tabular-nums border border-white/5 uppercase tracking-widest">
          {new Date(alert.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>

      <p className="text-slate-400 text-sm mb-5 leading-relaxed font-medium">
        {alert.message}
      </p>

      {alert.isConfirmed && alert.accuracyScore && (
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Match Confirmado</span>
          </div>
          <div className="flex items-center gap-1.5">
            <TrendingUp className="h-3.5 w-3.5 text-gold" />
            <span className="text-sm text-gold font-black italic">IA: {alert.accuracyScore}%</span>
          </div>
        </div>
      )}

      {isBlurred && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/20 backdrop-blur-sm rounded-[1.5rem]">
          <div className="bg-metallic-red text-white px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl premium-shadow flex items-center gap-2">
            <Crown className="h-3.5 w-3.5" />
            Upgrade VIP
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertCard;
