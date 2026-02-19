
import React from 'react';
import { ShieldAlert, Info } from 'lucide-react';
import AffiliatePartners from './AffiliatePartners';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-black tracking-tighter text-white">
                GOLO<span className="text-gold italic">AO VIVO</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium">
              O motor de inteligência artificial pioneiro para scanning de momentum em futebol.
              Transformamos estatísticas komplexas em sinais de lucro imediatos.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="bg-white/[0.02] p-8 rounded-3xl border border-white/5 relative group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShieldAlert className="h-20 w-20 text-red-600" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 text-red-500 mb-4 font-black uppercase tracking-widest text-xs">
                  <ShieldAlert className="h-4 w-4" />
                  Compromisso Responsável
                </div>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed font-medium">
                  Nossas ferramentas são destinadas apenas para fins informativos e de entretenimento.
                  O sucesso passado não garante lucros futuros. Arrisque apenas o que pode perder.
                </p>
                <div className="flex items-center gap-4">
                  <span className="bg-white/5 px-4 py-1.5 rounded-lg font-black text-white text-xs border border-white/10 tracking-widest">18+</span>
                  <a href="#" className="text-gold text-xs font-black uppercase tracking-widest hover:text-white transition-colors">Apoio ao Jogador</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="border-t border-white/5 pt-12 mb-12">
        <div className="text-center mb-8">
          <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-6">
            Parceiros Oficiais de Apostas
          </p>
          <AffiliatePartners variant="footer" />
        </div>
      </div>

      <div className="pt-12 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 text-slate-600 text-[10px] font-black uppercase tracking-[0.2em] italic">
            <Info className="h-4 w-4 text-slate-700" />
            <span>Dados processados em clusters de baixa latência</span>
          </div>
          <p className="text-slate-700 text-[10px] font-black uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} GOLO AO VIVO TECHNOLOGIES. LONDON / LISBON.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
