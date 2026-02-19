
import React from 'react';
import { ShieldAlert, Info } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-red-950 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Golo AO Vivo IA</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Alertas de futebol em tempo real alimentados por análise estatística avançada e modelos de machine learning. 
              Ajudamos a tomar decisões baseadas em dados no momento certo.
            </p>
          </div>
          <div className="bg-[#0a0a0a] p-6 rounded-xl border border-red-900/30">
            <div className="flex items-center gap-2 text-[#FFD700] mb-3">
              <ShieldAlert className="h-5 w-5" />
              <span className="font-bold text-sm">Jogo Responsável</span>
            </div>
            <div className="space-y-2">
              <p className="text-slate-400 text-xs">
                As apostas devem ser para entretenimento. Jogue sempre dentro dos seus limites.
              </p>
              <div className="flex items-center gap-4">
                <span className="bg-red-600/20 text-red-500 px-2 py-1 rounded font-bold text-xs border border-red-600/30">18+</span>
                <a href="#" className="text-[#FFD700] text-xs hover:underline">Aposte com Responsabilidade</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-500 text-xs mb-4">
            <Info className="h-4 w-4" />
            <span>AVISO: Alertas gerados via análise estatística. Lucros não são garantidos.</span>
          </div>
          <p className="text-slate-600 text-[10px] uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Golo AO Vivo Technologies. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
