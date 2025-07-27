
import { Target, Users, Lightbulb, Trophy } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Visão Futurista",
      description: "Preparamos jovens para os desafios do empreendedorismo moderno"
    },
    {
      icon: Users,
      title: "Rede Poderosa",
      description: "Conecte-se com outros jovens empreendedores e construa sua rede"
    },
    {
      icon: Lightbulb,
      title: "Inovação Constante",
      description: "Transforme suas ideias em negócios reais com nosso suporte"
    },
    {
      icon: Trophy,
      title: "Resultados Reais",
      description: "Histórias de sucesso de jovens que já mudaram suas vidas"
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Transformando Jovens em
            <span className="gradient-text"> Líderes</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A Visionaries é mais que uma comunidade - é um movimento de jovens que acreditam 
            que a idade não é barreira para grandes conquistas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 neo-glass rounded-2xl neo-hover"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-4">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/60 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="neo-glass-dark rounded-2xl p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Nossa Missão
              </h3>
              <p className="text-white/70 mb-4">
                Acreditamos que o empreendedorismo não tem idade. Nossa missão é capacitar jovens 
                com conhecimento, network e mentalidade necessários para se tornarem 
                os líderes empresariais do futuro.
              </p>
              <p className="text-white/70">
                Através de eventos exclusivos, cursos práticos e podcasts inspiradores, criamos 
                um ambiente onde jovens visionários podem crescer e transformar suas 
                ideias em realidade.
              </p>
            </div>
            <div className="relative">
              <div className="neo-glass rounded-2xl p-6 h-64 flex items-center justify-center">
                <div className="text-center">
                  <img src="public/uploads/97048dac-2bc6-4c47-b9ac-a68b0647ed5f.png" alt="Logo da Visionaries" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
