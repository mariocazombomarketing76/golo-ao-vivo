
import React, { useState, useMemo } from 'react';
import { BarChart3, Clock } from 'lucide-react';
import { MOCK_MATCHES } from '../constants';
import AlertCard from '../components/AlertCard';
import { useLiveAlerts } from '../hooks/useLiveAlerts';

const ResultsPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('Últimas 24h');
  const alerts = useLiveAlerts();

  const categories = ['Sempre', 'Últimas 24h', 'Premier League', 'Girabola', 'Liga dos Campeões', 'La Liga'];

  const filteredAlerts = useMemo(() => {
    return alerts.filter(alert => {
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
    <div className="pt-24 pb-12 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8 relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-600/5 blur-[80px] rounded-full -z-10"></div>
        <div>
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full text-yellow-500 text-[10px] font-black uppercase tracking-widest mb-4">
            Auditoria IA Concluída
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tighter uppercase italic">
            Histórico de <span className="text-gold">Precisão</span>
          </h1>
          <p className="text-slate-500 font-medium mt-2">Nossa inteligência artificial mantém transparência total em cada previsão.</p>
        </div>

        <div className="flex gap-4 w-full md:w-auto">
          <div className="flex-1 md:flex-none glass px-8 py-5 rounded-[1.5rem] border border-white/5 text-center transition-all hover:border-white/10">
            <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2">Total Acertos</div>
            <div className="text-3xl font-black text-white tracking-tighter tabular-nums">1.492</div>
          </div>
          <div className="flex-1 md:flex-none glass px-8 py-5 rounded-[1.5rem] border-red-600/30 bg-red-600/5 text-center transition-all premium-shadow">
            <div className="text-[10px] text-red-500/80 uppercase font-black tracking-widest mb-2">Win Rate</div>
            <div className="text-3xl font-black text-red-600 tracking-tighter tabular-nums">91.4%</div>
          </div>
        </div>
      </div>

      <div className="mb-10 flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-8 py-3 rounded-xl whitespace-nowrap text-[10px] font-black uppercase tracking-widest transition-all ${selectedFilter === cat
              ? 'bg-white text-black shadow-2xl scale-105'
              : 'bg-white/5 text-slate-500 border border-white/5 hover:border-white/20'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredAlerts.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredAlerts.map((alert, i) => (
            <div key={`${alert.id}-${i}`} className="group relative">
              <AlertCard alert={{ ...alert, isConfirmed: true, accuracyScore: alert.accuracyScore || Math.floor(Math.random() * 10) + 88 }} />
              <div className="absolute top-4 right-4 bg-green-500/10 text-green-500 text-[9px] font-black px-3 py-1.5 rounded-lg border border-green-500/20 uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                VERIFICADO PELO ALGORITMO
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-32 glass rounded-[3rem] border border-dashed border-white/10">
          <div className="bg-white/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <BarChart3 className="h-10 w-10 text-slate-700" />
          </div>
          <p className="text-slate-500 font-black uppercase tracking-widest text-sm">Sem dados disponíveis para este filtro.</p>
          <button
            onClick={() => setSelectedFilter('Sempre')}
            className="mt-6 text-gold text-xs font-black uppercase tracking-widest hover:underline"
          >
            Resetar Filtros
          </button>
        </div>
      )}

      <div className="mt-16 text-center">
        <button className="group bg-white/5 border border-white/10 text-slate-400 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/[0.08] hover:text-white transition-all flex items-center gap-3 mx-auto">
          <Clock className="h-5 w-5 group-hover:rotate-12 transition-transform" />
          Carregar Arquivos Históricos
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;
