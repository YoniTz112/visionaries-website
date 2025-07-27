
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Hero3D from './Hero3D';
import EmailForm from './EmailForm';

const Hero = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-dark-900 relative overflow-hidden pt-20">
      <Hero3D />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 neo-glass rounded-full text-xs text-white/80 mb-8 border border-white/10">
            <Sparkles className="w-3 h-3 mr-2" />
            Para jovens de 13-17 anos
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            CONSTRUINDO O
            <br />
            <span className="gradient-text">
              FUTURO
            </span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl text-white/60 font-normal">
              do empreendedorismo
            </span>
          </h1>

          {/* Subtitle */}
          <div className="neo-glass-dark rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-lg text-white/70 leading-relaxed">
              Conecte-se com jovens visionários e transforme suas ideias em realidade através de uma experiência única e inovadora.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-white/90 px-8 py-3 rounded-xl font-medium neo-hover group"
              onClick={() => setShowEmailForm(true)}
            >
              Começar Agora
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { number: "500+", label: "Jovens Já Foram Impactados" },
              { number: "50+", label: "Encontros Transformadores" },
              { number: "20+", label: "Especialistas que Já Colaboraram" }
            ].map((stat, index) => (
              <div key={index} className="neo-glass rounded-xl p-4 text-center neo-hover">
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <EmailForm 
        isOpen={showEmailForm} 
        onClose={() => setShowEmailForm(false)} 
      />
    </section>
  );
};

export default Hero;
