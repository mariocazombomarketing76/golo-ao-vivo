
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bell, Crown, BarChart2 } from 'lucide-react';

const FootballIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Base da Bola (Branco Puro) */}
    <circle cx="50" cy="50" r="48" fill="white" stroke="#000" strokeWidth="2" />
    
    {/* Padrão de Futebol Clássico (Preto e Branco) */}
    <g fill="black">
      {/* Centro */}
      <path d="M50 35 L62 43 L58 58 L42 58 L38 43 Z" />
      
      {/* Gomos Periféricos */}
      <path d="M50 2 L65 12 L60 28 L40 28 L35 12 Z" /> {/* Topo */}
      <path d="M10 38 L25 32 L35 42 L30 55 L15 50 Z" /> {/* Esquerda */}
      <path d="M90 38 L75 32 L65 42 L70 55 L85 50 Z" /> {/* Direita */}
      <path d="M50 98 L35 88 L40 72 L60 72 L65 88 Z" /> {/* Baixo */}
      <path d="M15 75 L30 68 L42 78 L35 92 L20 88 Z" /> {/* Baixo Esq */}
      <path d="M85 75 L70 68 L58 78 L65 92 L80 88 Z" /> {/* Baixo Dir */}
    </g>

    {/* Linhas de Estrutura */}
    <g stroke="black" strokeWidth="1.5" fill="none">
      <line x1="50" y1="35" x2="50" y2="28" />
      <line x1="62" y1="43" x2="65" y2="42" />
      <line x1="38" y1="43" x2="35" y2="42" />
      <line x1="58" y1="58" x2="60" y2="72" />
      <line x1="42" y1="58" x2="40" y2="72" />
    </g>
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Início', path: '/', icon: FootballIcon },
    { name: 'Alertas Grátis', path: '/free', icon: Bell },
    { name: 'VIP', path: '/vip', icon: Crown },
    { name: 'Resultados', path: '/results', icon: BarChart2 },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-red-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-transparent p-1 group-hover:scale-110 transition-transform">
                <div className="sphere-container">
                  <FootballIcon className="h-9 w-9 animate-rotate-y drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]" />
                </div>
              </div>
              <span className="text-xl font-extrabold tracking-tighter text-white ml-2">
                GOLO<span className="text-[#FFD700]"> AO VIVO</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-[#FFD700] bg-red-950/30'
                      : 'text-slate-300 hover:text-[#FFD700] hover:bg-slate-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-[#FFD700] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden glass border-b border-red-900/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'text-[#FFD700] bg-red-950/30'
                    : 'text-slate-300 hover:text-[#FFD700] hover:bg-slate-900'
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
