import React from 'react';
import { ShieldCheck } from 'lucide-react';
import AffiliatePartners from './AffiliatePartners';

interface TrustStripProps {
    className?: string;
}

const TrustStrip: React.FC<TrustStripProps> = ({ className = '' }) => {
    return (
        <div className={`w-full max-w-4xl mx-auto ${className}`}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 text-center md:text-left">
                    <div className="bg-green-500/10 p-3 rounded-full hidden md:block">
                        <ShieldCheck className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-1">
                            Plataformas de Apostas Confiáveis
                        </h3>
                        <p className="text-slate-400 text-xs">
                            Recomendadas para operar em Angola
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="h-10 w-px bg-white/10 hidden md:block"></div>
                    <AffiliatePartners variant="strip" />
                </div>
            </div>
        </div>
    );
};

export default TrustStrip;
