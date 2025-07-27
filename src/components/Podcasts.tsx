
import { Mic, Headphones, Radio, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import EmailForm from './EmailForm';

const Podcasts = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
    <section id="podcasts" className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 neo-glass rounded-full text-sm font-medium text-white mb-8 border border-white/20">
            <Radio className="w-4 h-4 mr-2 text-white" />
            Conteúdo Inspirador
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Podcasts que
            <span className="gradient-text"> Inspiram</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Em breve, histórias reais de jovens empreendedores e grandes nomes do mundo 
            dos negócios compartilharão suas experiências e conhecimentos conosco.
          </p>
        </div>

        {/* Coming Soon Content */}
        <div className="max-w-5xl mx-auto">
          <Card className="neo-glass border border-white/10 overflow-hidden transform hover:scale-105 transition-all duration-300 mb-12">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6">
                  <Mic size={40} className="text-black" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Podcast em Produção</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Estamos preparando conversas exclusivas com empreendedores que mudaram o mundo. 
                  Conteúdo de alta qualidade, especialmente pensado para jovens visionários.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="neo-glass rounded-xl p-8 border border-white/10">
                  <Headphones className="w-12 h-12 text-white mb-4 mx-auto" />
                  <h4 className="text-xl font-semibold text-white mb-3">Episódios Semanais</h4>
                  <p className="text-gray-400">
                    Novos episódios toda semana com histórias inspiradoras e dicas práticas
                  </p>
                </div>
                
                <div className="neo-glass rounded-xl p-8 border border-white/10">
                  <Sparkles className="w-12 h-12 text-white mb-4 mx-auto" />
                  <h4 className="text-xl font-semibold text-white mb-3">Convidados Especiais</h4>
                  <p className="text-gray-400">
                    CEOs, fundadores e investidores compartilhando seus segredos de sucesso
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="text-2xl font-bold text-white">Episódios Planejados:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    "Como Começar um Negócio aos 15 Anos",
                    "Mentalidade Empreendedora na Adolescência", 
                    "Validação de Ideias: Dicas Práticas"
                  ].map((episode, index) => (
                    <div key={index} className="neo-glass rounded-lg p-4 border border-white/10">
                      <p className="text-white font-medium text-sm">{episode}</p>
                      <p className="text-gray-400 text-xs mt-2">Em breve</p>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-200 text-black px-8 py-4 text-lg font-bold rounded-full shadow-2xl"
                onClick={() => setShowEmailForm(true)}
              >
                Seja o Primeiro a Ouvir
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <EmailForm 
        isOpen={showEmailForm} 
        onClose={() => setShowEmailForm(false)} 
      />
    </section>
  );
};

export default Podcasts;
