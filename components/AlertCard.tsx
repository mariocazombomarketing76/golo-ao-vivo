
import React from 'react';
import { Alert } from '../types';
import { Bell, Zap, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';

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
    <div className={`relative glass rounded-2xl p-4 transition-all hover:border-[#FFD700]/40 ${isBlurred ? 'opacity-50 blur-sm pointer-events-none' : 'shadow-lg shadow-red-950/10'}`}>
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <div className="bg-black p-2 rounded-lg border border-red-900/30">
            {getIcon()}
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
              {alert.type === 'DANGER' ? 'PERIGO' : alert.type.replace('_', ' ')}
            </span>
            <div className="text-sm font-semibold text-white">Minuto: {alert.minute}'</div>
          </div>
        </div>
        <div className="text-[10px] text-slate-500 font-mono">
          {new Date(alert.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>

      <p className="text-slate-200 text-sm mb-4 leading-snug">
        {alert.message}
      </p>

      {alert.isConfirmed && alert.accuracyScore && (
        <div className="flex items-center gap-2 pt-3 border-t border-slate-800">
          <CheckCircle2 className="h-4 w-4 text-[#FFD700]" />
          <span className="text-xs text-[#FFD700] font-bold">Precisão: {alert.accuracyScore}%</span>
        </div>
      )}
      
      {isBlurred && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <span className="bg-[#FFD700] text-black px-4 py-2 rounded-full font-bold text-sm shadow-xl">Desbloquear VIP</span>
        </div>
      )}
    </div>
  );
};

export default AlertCard;
