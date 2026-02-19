
import React, { useState, useMemo } from 'react';
import { BarChart3, Clock } from 'lucide-react';
import { MOCK_ALERTS, MOCK_MATCHES } from '../constants';
import AlertCard from '../components/AlertCard';

const ResultsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('Últimas 24h');

  const categories = ['Sempre', 'Últimas 24h', 'Premier League', 'Girabola', 'Liga dos Campeões', 'La Liga'];

  const filteredAlerts = useMemo(() => {
    return MOCK_ALERTS.filter(alert => {
      if (selectedFilter === 'Sempre') return true;
      
      if (selectedFilter === 'Últimas 24h') {
        const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
        return new Date(alert.timestamp).getTime() > oneDayAgo;
      }

      // Encontrar a liga correspondente ao matchId do alerta
      const match = MOCK_MATCHES.find(m => m.id === alert.matchId);
      return match?.league === selectedFilter;
    });
  }, [selectedFilter]);

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
        <div>
          <h1 className="text-3xl font-black text-white flex items-center gap-3">
            <BarChart3 className="text-red-600" />
            Resultados Confirmados
          </h1>
          <p className="text-slate-500 mt-2">Transparência é a nossa prioridade. Veja cada alerta enviado.</p>
        </div>
        
        <div className="flex gap-4">
          <div className="glass px-6 py-4 rounded-2xl border border-red-900/30 text-center">
            <div className="text-xs text-slate-500 uppercase font-bold mb-1">Total Vitórias</div>
            <div className="text-2xl font-black text-[#FFD700] tracking-tighter">1.492</div>
          </div>
          <div className="glass px-6 py-4 rounded-2xl border border-red-900/30 text-center">
            <div className="text-xs text-slate-500 uppercase font-bold mb-1">Taxa de Sucesso</div>
            <div className="text-2xl font-black text-red-600 tracking-tighter">91.4%</div>
          </div>
        </div>
      </div>

      <div className="mb-8 flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((cat) => (
          <button 
            key={cat} 
            onClick={() => setSelectedFilter(cat)}
            className={`px-6 py-2.5 rounded-full whitespace-nowrap text-xs font-bold transition-all border ${
              selectedFilter === cat 
                ? 'bg-[#FFD700] text-black border-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.3)]' 
                : 'bg-black text-slate-400 border-red-900/30 hover:border-[#FFD700]/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredAlerts.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredAlerts.map((alert, i) => (
            <div key={`${alert.id}-${i}`} className="relative group">
              <AlertCard alert={{...alert, isConfirmed: true, accuracyScore: alert.accuracyScore || Math.floor(Math.random() * 10) + 88}} />
              <div className="absolute top-4 right-4 bg-red-600/10 text-red-500 text-[10px] font-bold px-2 py-1 rounded-md border border-red-600/20 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Acerto Verificado
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 glass rounded-3xl border border-dashed border-slate-800">
          <p className="text-slate-500 font-medium">Nenhum alerta encontrado para este filtro nas últimas horas.</p>
          <button 
            onClick={() => setSelectedFilter('Sempre')}
            className="mt-4 text-[#FFD700] text-sm font-bold hover:underline"
          >
            Ver todo o histórico
          </button>
        </div>
      )}

      <div className="mt-12 text-center">
        <button className="bg-black border border-red-900/30 text-slate-400 px-8 py-3 rounded-xl font-bold hover:bg-slate-900 transition-colors flex items-center gap-2 mx-auto">
          <Clock className="h-4 w-4" /> Carregar Mais Histórico
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;
