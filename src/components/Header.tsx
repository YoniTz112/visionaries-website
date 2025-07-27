
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EmailForm from './EmailForm';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
    <header className="fixed top-4 left-4 right-4 z-40 neo-glass border border-white/10 rounded-[2rem]">
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo com múltiplos filtros para remover fundo branco */}
          <div className="flex items-center">
            <img 
              src="public/uploads/97048dac-2bc6-4c47-b9ac-a68b0647ed5f.png" 
              alt="Visionaries Logo" 
              className="h-8 w-auto"
              style={{ 
                filter: 'grayscale(1) brightness(0) invert(1) contrast(2) saturate(0) hue-rotate(180deg)',
                mixBlendMode: 'multiply',
                opacity: 0.9
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {['Início', 'Sobre', 'Eventos', 'Cursos', 'Podcasts'].map((item, index) => (
              <a 
                key={index}
                href={`#${item.toLowerCase()}`} 
                className="px-4 py-2 text-sm text-white/70 hover:text-white transition-all duration-300 hover:bg-white/5 rounded-lg"
              >
                {item}
              </a>
            ))}
            <Button 
              className="ml-4 bg-white text-black hover:bg-white/90 text-sm px-6 py-2 rounded-lg font-medium neo-hover"
              onClick={() => setShowEmailForm(true)}
            >
              Entrar
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col space-y-2">
              {['Início', 'Sobre', 'Eventos', 'Cursos', 'Podcasts'].map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.toLowerCase()}`} 
                  className="text-white/70 hover:text-white transition-colors p-3 hover:bg-white/5 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button 
                className="bg-white text-black hover:bg-white/90 w-full mt-4 rounded-lg"
                onClick={() => setShowEmailForm(true)}
              >
                Entrar
              </Button>
            </div>
          </nav>
        )}
      </div>

      <EmailForm 
        isOpen={showEmailForm} 
        onClose={() => setShowEmailForm(false)} 
      />
    </header>
  );
};

export default Header;
