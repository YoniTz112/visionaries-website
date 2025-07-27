
import { BookOpen, Clock, Star, Rocket, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import EmailForm from './EmailForm';

const Courses = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
    <section id="courses" className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 neo-glass rounded-3xl text-sm font-medium text-white mb-8 border border-white/20">
            <BookOpen className="w-4 h-4 mr-2 text-white" />
            Educação de Qualidade
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Cursos que
            <span className="gradient-text"> Capacitam</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Em breve, você terá acesso a cursos práticos e direcionados, 
            criados pelos melhores profissionais do mercado especialmente para jovens empreendedores.
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="neo-glass border border-white/10 overflow-hidden transform hover:scale-105 transition-all duration-300 rounded-3xl">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-2xl mb-6">
                  <Rocket size={40} className="text-black" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Cursos em Desenvolvimento</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-medium">
                  Estamos criando uma experiência educacional única com os maiores nomes do empreendedorismo. 
                  Prepare-se para uma jornada transformadora!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  "Fundamentos do Empreendedorismo",
                  "Marketing Digital Avançado", 
                  "Criação de Startups"
                ].map((course, index) => (
                  <div key={index} className="neo-glass rounded-2xl p-6 border border-white/10">
                    <Sparkles className="w-8 h-8 text-white mb-3 mx-auto" />
                    <h4 className="text-lg font-semibold text-white mb-2">{course}</h4>
                    <p className="text-gray-400 text-sm font-medium">Em breve</p>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="bg-white hover:bg-gray-200 text-black px-8 py-4 text-lg font-bold rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => setShowEmailForm(true)}
              >
                Seja Notificado do Lançamento
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

export default Courses;
