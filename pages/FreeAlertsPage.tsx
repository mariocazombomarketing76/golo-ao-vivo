
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, ArrowRight, Lock, Clock, Check } from 'lucide-react';
import { MOCK_MATCHES } from '../constants';
import AlertCard from '../components/AlertCard';
import { useLiveAlerts } from '../hooks/useLiveAlerts';

const FreeAlertsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'alerts' | 'matches'>('alerts');
  const alerts = useLiveAlerts();

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-600/10 blur-[60px] rounded-full -z-10"></div>
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 px-3 py-1 rounded-full text-red-500 text-[10px] font-black uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping"></span>
            Live Scanning Ativo
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tighter uppercase italic">
            Alertas em <span className="text-gold">Direto</span>
          </h1>
          <p className="text-slate-500 font-medium mt-2 flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Versão gratuita com 3 minutos de latência.
          </p>
        </div>

        <Link to="/vip" className="group relative bg-white/[0.03] border border-white/10 p-1 rounded-2xl transition-all hover:border-red-600/50">
          <div className="bg-metallic-red text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-[0.15em] flex items-center gap-3">
            <Lock className="h-4 w-4" />
            Remover Atraso VIP
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Feed */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="flex bg-white/5 p-1.5 rounded-2xl border border-white/5 self-start">
            <button
              onClick={() => setActiveTab('alerts')}
              className={`py-3 px-8 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${activeTab === 'alerts' ? 'bg-white text-black shadow-xl' : 'text-slate-500 hover:text-white'}`}
            >
              Recent Alertas
            </button>
            <button
              onClick={() => setActiveTab('matches')}
              className={`py-3 px-8 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${activeTab === 'matches' ? 'bg-white text-black shadow-xl' : 'text-slate-500 hover:text-white'}`}
            >
              Jogos ao Vivo
            </button>
          </div>

          <div className="space-y-4">
            {activeTab === 'alerts' ? (
              <>
                {alerts.map((alert) => (
                  <AlertCard key={alert.id} alert={alert} />
                ))}

                {/* VIP Upsell Card */}
                <div className="relative overflow-hidden glass rounded-3xl border border-red-600/30 p-8 group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-[60px] rounded-full"></div>
                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div className="bg-red-600/20 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Lock className="h-8 w-8 text-red-500" />
                    </div>
                    <div className="flex-grow text-center md:text-left">
                      <h3 className="text-xl font-black text-white mb-2 uppercase italic tracking-tight">Alerta Premium Bloqueado</h3>
                      <p className="text-slate-400 text-sm font-medium">Este jogo faz parte da nossa seleção de Elite. Membros VIP estão a receber dados de momentum exclusivos agora.</p>
                    </div>
                    <Link to="/vip" className="bg-white text-black px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all whitespace-nowrap">
                      Desbloquear Agora
                    </Link>
                  </div>
                  {/* Blurry Background Elements to simulate a hidden alert */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm -z-10"></div>
                </div>
              </>
            ) : (
              <div className="grid gap-4">
                {MOCK_MATCHES.map(match => (
                  <div key={match.id} className="glass p-6 rounded-3xl border border-white/5 hover:border-white/10 transition-all group">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-6 flex-1 w-full md:w-auto">
                        <div className="flex-1 text-right font-black text-white uppercase italic tracking-tighter text-lg">{match.homeTeam}</div>
                        <div className="bg-red-600/10 px-6 py-3 rounded-2xl border border-red-600/20 text-red-500 font-black text-xl tabular-nums">
                          {match.homeScore} - {match.awayScore}
                        </div>
                        <div className="flex-1 text-left font-black text-white uppercase italic tracking-tighter text-lg">{match.awayTeam}</div>
                      </div>

                      <div className="flex items-center gap-6 border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-8">
                        <div className="flex flex-col items-center">
                          <span className="text-red-600 animate-pulse text-[10px] font-black uppercase tracking-widest">Live</span>
                          <span className="text-white font-black font-mono text-xl">{match.minute}'</span>
                        </div>
                        <Link to="/vip" className="p-3 bg-white/5 rounded-xl text-slate-400 group-hover:text-red-500 transition-colors">
                          <ArrowRight className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#111] to-black p-8 rounded-[2rem] border border-white/5 shadow-2xl">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-600/10 blur-[60px] rounded-full"></div>
            <h3 className="text-xl font-black text-white mb-6 uppercase italic tracking-tight">EXPERIÊNCIA VIP</h3>
            <ul className="space-y-4 mb-10">
              {[
                { text: 'Latência Zero no Telegram', check: true },
                { text: 'Alertas HT/FT Estratégicos', check: true },
                { text: 'Scanner de Cantos ao Vivo', check: true },
                { text: '800+ Ligas Monitorizadas', check: true }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-400 italic">
                  <div className="bg-red-600 rounded-full p-0.5"><Check className="h-3 w-3 text-white" /></div>
                  {item.text}
                </li>
              ))}
            </ul>
            <Link to="/vip" className="block w-full text-center bg-gold text-black font-black py-4 rounded-2xl text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all">
              Tornar-se de Elite
            </Link>
          </div>

          <div className="bg-white/[0.02] p-8 rounded-[2rem] border border-white/5 text-center">
            <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.25em] mb-3 block">Estabilidade IA</span>
            <div className="text-5xl font-black text-white italic tracking-tighter mb-4">98.2%</div>
            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div className="bg-metallic-red h-full w-[98%]" />
            </div>
            <p className="text-slate-600 text-[10px] mt-4 font-bold uppercase tracking-widest">Uptime Verificado</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeAlertsPage;
