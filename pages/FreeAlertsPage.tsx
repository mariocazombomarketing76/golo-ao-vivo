
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, ArrowRight, Lock, Clock } from 'lucide-react';
import { MOCK_ALERTS, MOCK_MATCHES } from '../constants';
import AlertCard from '../components/AlertCard';

const FreeAlertsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'alerts' | 'matches'>('alerts');

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Bell className="text-red-600" />
            Alertas Grátis ao Vivo
          </h1>
          <p className="text-slate-500 text-sm flex items-center gap-2 mt-1">
            <Clock className="h-3 w-3" /> 
            Nota: Alertas gratuitos têm um atraso de 3 minutos na transmissão.
          </p>
        </div>
        <Link to="/vip" className="bg-black border border-[#FFD700]/30 text-[#FFD700] px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-900 transition-colors">
          <Lock className="h-4 w-4" /> Upgrade para Tempo Real
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Stream de Alertas */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex border-b border-red-900/30 mb-6">
            <button 
              onClick={() => setActiveTab('alerts')}
              className={`pb-4 px-6 font-bold transition-all ${activeTab === 'alerts' ? 'text-[#FFD700] border-b-2 border-[#FFD700]' : 'text-slate-500 hover:text-white'}`}
            >
              Alertas Recentes
            </button>
            <button 
              onClick={() => setActiveTab('matches')}
              className={`pb-4 px-6 font-bold transition-all ${activeTab === 'matches' ? 'text-[#FFD700] border-b-2 border-[#FFD700]' : 'text-slate-500 hover:text-white'}`}
            >
              Jogos em Direto
            </button>
          </div>

          {activeTab === 'alerts' ? (
            <div className="grid gap-4">
              {MOCK_ALERTS.map((alert) => (
                <AlertCard key={alert.id} alert={alert} />
              ))}
              {/* Placeholder VIP Desfocado */}
              <AlertCard 
                isBlurred 
                alert={{
                  id: 'vip1',
                  matchId: '99',
                  type: 'GOAL',
                  message: 'ALERTA CRÍTICO: Oportunidade estratégica de golo detetada.',
                  timestamp: new Date().toISOString(),
                  minute: 82,
                  isConfirmed: false
                }} 
              />
            </div>
          ) : (
            <div className="space-y-4">
              {MOCK_MATCHES.map(match => (
                <div key={match.id} className="glass p-4 rounded-2xl flex items-center justify-between border border-red-900/10">
                  <div className="flex-1">
                    <span className="text-[10px] text-slate-500 uppercase font-bold">{match.league}</span>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-white font-bold w-32 truncate">{match.homeTeam}</span>
                      <div className="bg-black px-3 py-1 rounded text-[#FFD700] font-mono text-sm border border-red-900/20">
                        {match.homeScore} - {match.awayScore}
                      </div>
                      <span className="text-white font-bold w-32 truncate text-right">{match.awayTeam}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <span className="animate-pulse w-2 h-2 rounded-full bg-red-600"></span>
                    <span className="text-xs text-slate-400 font-mono">{match.minute}'</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="glass p-6 rounded-3xl border border-red-900/20">
            <h3 className="text-lg font-bold text-white mb-4">Porquê mudar?</h3>
            <ul className="space-y-4 mb-6">
              {[
                'Zero atraso (Notificações instantâneas)',
                '15+ ligas adicionais monitorizadas',
                'Análise estatística avançada',
                'Integração direta com Telegram'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                  <ArrowRight className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/vip" className="block text-center bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold py-3 rounded-xl transition-all">
              Tornar-se VIP Agora
            </Link>
          </div>

          <div className="bg-[#0a0a0a] p-6 rounded-3xl border border-red-900/20 text-center">
            <h4 className="text-slate-500 text-xs font-bold uppercase mb-2">Precisão Atual</h4>
            <div className="text-4xl font-black text-[#FFD700]">82%</div>
            <p className="text-slate-600 text-[10px] mt-2 italic">Baseado nas últimas 24h de alertas grátis</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeAlertsPage;
