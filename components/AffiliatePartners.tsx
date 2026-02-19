import React from 'react';

export const PARTNERS = [
    {
        name: 'BantuBet',
        url: 'https://bantubet.co.ao/affiliates/?btag=2532299',
        bgColor: '#FFCC00',
        textColor: '#000000',
        // Fallback styling since we can't guarantee external logo URLs without checking
        label: 'BantuBet'
    },
    {
        name: '888Africa',
        url: 'https://tracking.888africa.com/visit/?bta=42700&brand=888angola',
        bgColor: '#F76B1C',
        textColor: '#FFFFFF',
        label: '888Africa'
    }
];

interface AffiliatePartnersProps {
    variant?: 'strip' | 'footer' | 'card';
    className?: string;
}

const AffiliatePartners: React.FC<AffiliatePartnersProps> = ({ variant = 'strip', className = '' }) => {
    if (variant === 'footer') {
        return (
            <div className={`flex flex-wrap justify-center gap-6 ${className}`}>
                {PARTNERS.map((partner) => (
                    <a
                        key={partner.name}
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
                    >
                        <div
                            className="px-4 py-2 rounded-lg font-black text-lg tracking-tighter transform group-hover:scale-105 transition-transform"
                            style={{ backgroundColor: partner.bgColor, color: partner.textColor }}
                        >
                            {partner.label}
                        </div>
                    </a>
                ))}
            </div>
        );
    }

    return (
        <div className={`flex flex-wrap justify-center items-center gap-4 ${className}`}>
            {PARTNERS.map((partner) => (
                <a
                    key={partner.name}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                    <div
                        className="px-6 py-3 font-black text-xl italic tracking-tighter uppercase"
                        style={{ backgroundColor: partner.bgColor, color: partner.textColor }}
                    >
                        {partner.label}
                    </div>
                </a>
            ))}
        </div>
    );
};

export default AffiliatePartners;
