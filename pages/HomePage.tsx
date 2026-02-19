
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ShieldCheck, Target, TrendingUp, ChevronRight, Crown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { HISTORY_STATS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="pt-24 pb-12">
      {/* Hero */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 px-4 py-1.5 rounded-full text-red-500 text-sm font-bold mb-6 animate-pulse">
          <Zap className="h-4 w-4 fill-current" />
          Processamento IA ao Vivo
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
          Vença o Mercado com <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-[#FFD700]">
            Alertas Inteligentes
          </span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          A ferramenta definitiva de scanning de futebol. Analisamos mais de 1.000 pontos de dados por segundo para prever golos antes que aconteçam.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/free" className="bg-slate-900 border border-slate-800 hover:border-red-600/50 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl flex items-center justify-center gap-2">
            Aceder Alertas Grátis
          </Link>
          <Link to="/vip" className="bg-[#FFD700] hover:bg-[#E6C200] text-black px-8 py-4 rounded-xl font-bold transition-all shadow-xl flex items-center justify-center gap-2">
            Obter Acesso VIP <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-20">
        <div className="glass rounded-3xl p-8 border border-red-900/30 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[100px] -z-10"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-white mb-4">Precisão Histórica</h2>
              <p className="text-slate-400 text-sm mb-6">
                Nosso modelo mantém uma precisão consistente de 88%+ em alertas de momentum de golo nos últimos 6 meses.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-slate-500 text-sm">Precisão Média</span>
                  <span className="text-3xl font-black text-[#FFD700]">89.4%</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-2">
                  <div className="bg-[#C41E3A] h-2 rounded-full shadow-[0_0_8px_#C41E3A]" style={{ width: '89%' }}></div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={HISTORY_STATS}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" />
                  <XAxis dataKey="date" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#000', border: '1px solid #C41E3A', borderRadius: '8px' }}
                    itemStyle={{ color: '#FFD700' }}
                  />
                  <Line type="monotone" dataKey="accuracy" stroke="#FFD700" strokeWidth={3} dot={{ r: 4, fill: '#FFD700' }} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          { icon: Target, title: 'Scanning de Precisão', desc: 'Alertamos apenas quando métricas específicas atingem o nosso limite de alta probabilidade.' },
          { icon: ShieldCheck, title: 'Resultados Verificados', desc: 'Cada alerta é registado e verificado contra os resultados finais das partidas.' },
          { icon: TrendingUp, title: 'Movimentação de Odds', desc: 'Detete quando as casas de apostas demoram a reagir a eventos no campo.' }
        ].map((f, i) => (
          <div key={i} className="glass p-6 rounded-2xl border border-red-900/20">
            <div className="bg-black w-12 h-12 flex items-center justify-center rounded-xl mb-4 border border-red-900/30">
              <f.icon className="text-[#FFD700] h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA Box */}
      <section className="px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-black to-[#0a0a0a] p-10 rounded-3xl border border-red-600/20 shadow-2xl">
          <div className="inline-block bg-[#FFD700]/10 text-[#FFD700] p-3 rounded-full mb-6 border border-[#FFD700]/20">
            <Crown className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Seja VIP para Vantagem Real</h2>
          <p className="text-slate-400 mb-8">
            Utilizadores grátis recebem alertas com 3 minutos de atraso. Membros VIP recebem notificações instantâneas e insights avançados.
          </p>
          <Link to="/vip" className="inline-block bg-[#C41E3A] hover:bg-red-600 text-white px-10 py-4 rounded-xl font-black transition-transform hover:scale-105 shadow-[0_0_20px_rgba(196,30,58,0.4)]">
            DESBLOQUEAR ACESSO VIP
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
