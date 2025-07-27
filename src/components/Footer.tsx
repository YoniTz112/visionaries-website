import { Instagram, Youtube, Linkedin, Mail } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-visionaries-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/public/uploads/adaad02f-fa71-4c7a-b8b8-c75c6e88ea3f.png" alt="Visionaries Logo" className="h-8 w-auto filter brightness-0 invert" />
              <span className="text-2xl font-bold">VISIONARIES</span>
            </div>
            <p className="text-visionaries-gray-300 mb-6 max-w-md">
              Transformando jovens de 13 a 17 anos em líderes empreendedores do futuro. 
              Junte-se à nossa comunidade e comece sua jornada hoje mesmo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-visionaries-gray-300 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-visionaries-gray-300 hover:text-white transition-colors">
                <Youtube size={24} />
              </a>
              <a href="#" className="text-visionaries-gray-300 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-visionaries-gray-300 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-visionaries-gray-300 hover:text-white transition-colors">Início</a></li>
              <li><a href="#about" className="text-visionaries-gray-300 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#events" className="text-visionaries-gray-300 hover:text-white transition-colors">Eventos</a></li>
              <li><a href="#courses" className="text-visionaries-gray-300 hover:text-white transition-colors">Cursos</a></li>
              <li><a href="#podcasts" className="text-visionaries-gray-300 hover:text-white transition-colors">Podcasts</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-visionaries-gray-300">
              <li>visionaries.oficial@gmail.com</li>
              <li>+55 (21) 97763-5600</li>
              <li>Rio de Janeiro, RJ</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-visionaries-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-visionaries-gray-400 text-sm">© 2025 Visionaries. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-visionaries-gray-400 hover:text-white text-sm transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-visionaries-gray-400 hover:text-white text-sm transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;