
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bell, Crown, BarChart2, ChevronRight } from 'lucide-react';

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
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-transparent p-1 group-hover:scale-110 transition-transform duration-500">
                <FootballIcon className="h-10 w-10 drop-shadow-[0_0_8px_rgba(196,30,58,0.5)]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-white leading-none">
                  GOLO<span className="text-gold italic">AO VIVO</span>
                </span>
                <span className="text-[10px] font-black text-red-600 tracking-[0.2em] uppercase">IA Intelligence</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline space-x-6">
              {navItems.filter(i => i.name !== 'VIP').map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-bold uppercase tracking-wider transition-all relative group ${isActive(item.path) ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
            </div>

            <Link to="/vip" className="bg-metallic-red text-white px-6 py-2.5 rounded-xl font-black text-sm uppercase tracking-widest premium-shadow hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
              <Crown className="h-4 w-4" />
              Upgrade VIP
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <Link to="/vip" className="p-2 bg-metallic-red rounded-lg text-white premium-shadow animate-pulse-soft">
              <Crown className="h-5 w-5" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 glass border-b border-white/5 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between p-4 rounded-2xl font-black uppercase tracking-widest text-sm transition-all ${isActive(item.path)
                  ? 'bg-red-600/10 text-white border border-red-600/20'
                  : 'text-slate-400 hover:bg-white/5'
                  }`}
              >
                <div className="flex items-center gap-4">
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </div>
                <ChevronRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
