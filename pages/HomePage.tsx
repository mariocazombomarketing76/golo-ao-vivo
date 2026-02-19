
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ShieldCheck, Target, TrendingUp, ChevronRight, Crown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { HISTORY_STATS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="pt-24 pb-12 overflow-hidden">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto text-center mb-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD700] blur-[120px] rounded-full opacity-30"></div>
        </div>

        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-white text-xs font-black uppercase tracking-widest mb-8 premium-shadow">
          <div className="w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
          Motor de IA Ativo: 1.240 Scans/Seg
        </div>

        <h1 className="text-5xl sm:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter uppercase italic">
          Vença o Mercado <br className="hidden sm:block" />
          das apostas Desportivas <br className="hidden sm:block" />
          com <span className="text-gold">Alertas Inteligentes</span>
        </h1>

        <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          A plataforma de scanning profissional que transforma dados brutos em
          <span className="text-white font-bold ml-1">oportunidades lucrativas em tempo real.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Link to="/vip" className="group relative bg-metallic-red text-white px-10 py-5 rounded-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(255,30,30,0.3)] flex items-center gap-3">
            <Crown className="h-6 w-6 group-hover:rotate-12 transition-transform" />
            OBTER ACESSO VIP
            <ChevronRight className="h-5 w-5" />
          </Link>
          <Link to="/free" className="text-slate-400 hover:text-white font-bold transition-colors flex items-center gap-2 px-8 py-5">
            Ver Alertas Grátis
          </Link>
        </div>
      </section>

      {/* Stats Dashboard Section */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto mb-24">
        <div className="glass rounded-[2rem] p-1 pb-1 border-white/5 relative overflow-hidden">
          <div className="bg-[#050505] rounded-[1.8rem] p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 space-y-8">
                <div>
                  <h2 className="text-3xl font-black text-white mb-2 italic">PERFORMANCE</h2>
                  <div className="h-1 w-20 bg-red-600"></div>
                </div>

                <p className="text-slate-400 font-medium">
                  Nossa inteligência artificial analisa momentum, posse e pressão perigosa para entregar alertas com precisão cirúrgica.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="text-slate-500 text-xs font-bold uppercase mb-1">Taxa de Acerto</div>
                    <div className="text-2xl font-black text-white">89.4%</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="text-slate-500 text-xs font-bold uppercase mb-1">ROI Mensal</div>
                    <div className="text-2xl font-black text-[#FFD700]">+24%</div>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-slate-400 text-sm font-bold">Consistência do Algoritmo</span>
                    <span className="text-white font-black">EXCELENTE</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-3 p-0.5">
                    <div className="bg-metallic-red h-full rounded-full premium-shadow" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 h-[400px] w-full bg-white/[0.02] rounded-3xl p-6 border border-white/5">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={HISTORY_STATS}>
                    <defs>
                      <linearGradient id="colorAcc" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#C41E3A" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#C41E3A" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis
                      dataKey="date"
                      stroke="rgba(255,255,255,0.3)"
                      fontSize={11}
                      tickLine={false}
                      axisLine={false}
                      dy={10}
                    />
                    <YAxis
                      stroke="rgba(255,255,255,0.3)"
                      fontSize={11}
                      tickLine={false}
                      axisLine={false}
                      dx={-10}
                    />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                      itemStyle={{ color: '#FFD700', fontWeight: 'bold' }}
                      cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 2 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="accuracy"
                      stroke="#FFD700"
                      strokeWidth={4}
                      dot={{ r: 6, fill: '#000', stroke: '#FFD700', strokeWidth: 2 }}
                      activeDot={{ r: 8, fill: '#FFD700', stroke: '#fff', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 sm:px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          { icon: Target, title: 'Scanning Laser', desc: 'Filtramos o ruído para focar apenas em jogos com alta propensão a golos nos próximos 10-15 minutos.' },
          { icon: ShieldCheck, title: 'Transparência Total', desc: 'Pode consultar o histórico de cada alerta enviado. Resultados auditados e verificados diariamente.' },
          { icon: TrendingUp, title: 'Vantagem Matemática', desc: 'Identifique odds desajustadas antes que o mercado corrija. Seja mais rápido que as casas.' }
        ].map((f, i) => (
          <div key={i} className="group glass p-8 rounded-3xl border border-white/5 hover:border-red-600/30 transition-all hover:-translate-y-2">
            <div className="bg-red-600/10 w-16 h-16 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-red-600/20 transition-colors">
              <f.icon className="text-red-500 h-8 w-8" />
            </div>
            <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight">{f.title}</h3>
            <p className="text-slate-400 leading-relaxed font-medium">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Elite CTA */}
      <section className="px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <div className="relative overflow-hidden bg-white/[0.03] p-12 lg:p-20 rounded-[3rem] border border-white/5 shadow-2xl">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-red-600/20 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-yellow-600/10 blur-[100px] rounded-full"></div>

          <div className="relative z-10">
            <div className="inline-block bg-[#FFD700]/10 text-[#FFD700] px-6 py-2 rounded-full mb-8 border border-[#FFD700]/20 text-sm font-black tracking-widest uppercase">
              Acesso de Elite
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 leading-tight">PREPARADO PARA <br />PROFISSIONALIZAR?</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto font-medium">
              Não perca segundos preciosos. Membros VIP recebem alertas instantâneos via Telegram e acesso a todas as ligas globais.
            </p>
            <Link to="/vip" className="inline-block bg-white text-black hover:bg-slate-200 px-12 py-5 rounded-2xl font-black transition-transform hover:scale-105 premium-shadow uppercase tracking-wider">
              Começar Agora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
