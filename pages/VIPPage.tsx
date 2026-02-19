
import React from 'react';
import { Check, Zap, Crown, Globe, MessageSquare, BellRing } from 'lucide-react';

const VIPPage: React.FC = () => {
  const plans = [
    {
      name: 'Grátis',
      price: '0 Kz',
      period: 'Para sempre',
      features: ['3 Minutos de Atraso', 'Apenas Top 5 Ligas', 'Estatísticas Limitadas', 'Alertas via Browser'],
      button: 'Plano Atual',
      isPopular: false,
    },
    {
      name: 'Pro VIP',
      price: '15.000 Kz',
      period: 'por mês',
      features: ['Latência Zero', 'Ligas de Todo o Mundo', 'API de Momentum Avançada', 'Integração Telegram', 'Suporte Privado'],
      button: 'Aderir VIP Agora',
      isPopular: true,
    },
    {
      name: 'Anual VIP',
      price: '120.000 Kz',
      period: 'por ano',
      features: ['Tudo do Pro', 'Poupe 60.000 Kz/ano', 'Funcionalidades Beta', 'Masterclass de Estratégia'],
      button: 'Melhor Valor',
      isPopular: false,
    }
  ];

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-block bg-[#FFD700]/10 p-3 rounded-2xl mb-6 border border-[#FFD700]/20">
          <Crown className="h-10 w-10 text-[#FFD700]" />
        </div>
        <h1 className="text-4xl font-black text-white mb-4">Domine a Sua Estratégia</h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          Tenha acesso ao motor de processamento de futebol mais rápido do mercado. 
          Ganhe vantagem sobre as casas com inteligência instantânea.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {plans.map((plan, i) => (
          <div 
            key={i} 
            className={`relative glass p-8 rounded-3xl border ${plan.isPopular ? 'border-[#FFD700] shadow-2xl shadow-[#FFD700]/10' : 'border-red-900/20'}`}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C41E3A] text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                Mais Popular
              </div>
            )}
            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-3xl font-black text-white">{plan.price}</span>
              <span className="text-slate-500 text-sm ml-2">{plan.period}</span>
            </div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feat, j) => (
                <li key={j} className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="bg-black p-1 rounded border border-red-900/20">
                    <Check className="h-3 w-3 text-[#FFD700]" />
                  </div>
                  {feat}
                </li>
              ))}
            </ul>
            <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
              plan.isPopular 
                ? 'bg-[#C41E3A] text-white hover:bg-red-600' 
                : 'bg-slate-900 text-white hover:bg-slate-800 border border-slate-700'
            }`}>
              {plan.button}
            </button>
          </div>
        ))}
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: BellRing, title: 'Notificações Push', text: 'Receba alertas mesmo com o telemóvel bloqueado.' },
          { icon: Globe, title: '800+ Ligas', text: 'Da Premier League ao Girabola de Angola.' },
          { icon: MessageSquare, title: 'Bot Telegram', text: 'Mensagens instantâneas diretamente no seu chat.' },
          { icon: Zap, title: 'Dados Ultra-Rápidos', text: 'Nossos servidores estão junto aos hubs de dados.' }
        ].map((item, i) => (
          <div key={i} className="bg-[#0a0a0a] p-6 rounded-2xl border border-red-900/20 text-center">
            <item.icon className="h-8 w-8 text-[#FFD700] mx-auto mb-4" />
            <h4 className="text-white font-bold mb-2">{item.title}</h4>
            <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VIPPage;
