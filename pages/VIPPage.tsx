
import React from 'react';
import { Check, Zap, Crown, Globe, MessageSquare, BellRing } from 'lucide-react';
import AffiliatePartners from '../components/AffiliatePartners';

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
    <div className="pt-24 pb-20 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full -z-10"></div>

      <div className="text-center mb-20 relative">
        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-4 py-2 rounded-full text-yellow-500 text-xs font-black tracking-widest uppercase mb-8">
          <Crown className="h-4 w-4" />
          Acesso Prioritário Disponível
        </div>
        <h1 className="text-5xl sm:text-7xl font-black text-white mb-6 leading-tight tracking-tighter">
          PARE DE ADIVINHAR. <br />
          <span className="text-gold italic">COMECE A SCANNEAR.</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-medium">
          Escolha o seu nível de vantagem. Junte-se a centenas de utilizadores profissionais que
          recebem os nossos alertas direto no Telegram em milissegundos.
        </p>

        <div className="mt-8 flex justify-center">
          <div className="inline-block bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <p className="text-white text-sm font-bold uppercase tracking-widest mb-4">
              Membros VIP utilizam plataformas confiáveis para maximizar ganhos
            </p>
            <AffiliatePartners variant="strip" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 relative">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`relative group glass p-10 rounded-[2.5rem] border transition-all duration-500 hover:-translate-y-2 ${plan.isPopular
              ? 'border-red-600 bg-red-600/5 shadow-[0_30px_60px_rgba(255,30,30,0.15)] ring-1 ring-red-600/50'
              : 'border-white/5 hover:border-white/20'
              }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-metallic-red text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] premium-shadow whitespace-nowrap">
                OPÇÃO RECOMENDADA
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tight">{plan.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-white tracking-tighter">{plan.price}</span>
                <span className="text-slate-500 text-sm font-bold">{plan.period}</span>
              </div>
            </div>

            <ul className="space-y-5 mb-10">
              {plan.features.map((feat, j) => (
                <li key={j} className="flex items-start gap-3 text-slate-400 text-sm font-medium leading-relaxed">
                  <div className={`mt-1 p-0.5 rounded-full ${plan.isPopular ? 'bg-red-600' : 'bg-slate-800'}`}>
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  {feat}
                </li>
              ))}
            </ul>

            <button className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all active:scale-95 ${plan.isPopular
              ? 'bg-white text-black hover:bg-slate-200 premium-shadow'
              : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
              }`}>
              {plan.button}
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: BellRing, title: 'LATÊNCIA ZERO', text: 'Receba o alerta no momento exato em que o algoritmo dispara.' },
          { icon: Globe, title: 'COBERTURA GLOBAL', text: 'Scaneamos todas as ligas profissionais 24 horas por dia.' },
          { icon: MessageSquare, title: 'BOT TELEGRAM', text: 'Configuração simples em 1 minuto direto no seu dispositivo.' },
          { icon: Zap, title: 'POWER ANALYTICS', text: 'Entenda o porquê de cada alerta com métricas avançadas.' }
        ].map((item, i) => (
          <div key={i} className="bg-white/[0.02] p-8 rounded-3xl border border-white/5 hover:bg-white/[0.04] transition-all">
            <item.icon className="h-10 w-10 text-red-600 mb-6" />
            <h4 className="text-white font-black mb-3 uppercase tracking-tight">{item.title}</h4>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VIPPage;
