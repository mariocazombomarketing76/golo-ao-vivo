import React from 'react';
import { PARTNERS } from './AffiliatePartners';
import { ArrowRight, Trophy } from 'lucide-react';

const ConversionBlock: React.FC = () => {
    // Use the first partner (BantuBet) for primary CTA, or rotate/randomize if desired
    const primaryPartner = PARTNERS[0];
    const secondaryPartner = PARTNERS[1];

    return (
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 p-8 my-8 group">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-black z-0"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[80px] rounded-full z-0"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 text-gold font-black uppercase tracking-widest text-xs mb-3">
                        <Trophy className="w-4 h-4" />
                        Vantagem Competitiva
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-white italic tracking-tighter mb-2">
                        Pronto para apostar com vantagem?
                    </h3>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-lg">
                        Utilize as nossas previsões nas melhores casas de apostas. Odds competitivas e pagamentos rápidos.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <a
                        href={primaryPartner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white text-black hover:bg-slate-200 px-6 py-4 rounded-xl font-black uppercase tracking-wider text-sm transition-all hover:scale-105 shadow-xl"
                    >
                        Apostar na {primaryPartner.name}
                        <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                        href={secondaryPartner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white/5 text-white hover:bg-white/10 px-6 py-4 rounded-xl font-black uppercase tracking-wider text-sm transition-all border border-white/10"
                    >
                        Criar conta {secondaryPartner.name}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ConversionBlock;
