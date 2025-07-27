import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Check } from 'lucide-react';

interface EmailFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const EmailForm = ({ isOpen, onClose }: EmailFormProps) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
        onClose();
      }, 3000);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="neo-glass-dark border-white/10 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold mb-2">
            {isSubmitted ? 'Perfeito!' : 'Junte-se aos Visionários'}
          </DialogTitle>
        </DialogHeader>
        
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center">
              <Mail className="w-12 h-12 text-white mx-auto mb-4" />
              <p className="text-white/70 mb-6">
                Seja o primeiro a saber quando lançarmos nossa plataforma completa
              </p>
            </div>
            
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-xl h-12"
                required
              />
              
              <Button 
                type="submit" 
                className="w-full bg-white text-black hover:bg-white/90 rounded-xl h-12 font-medium"
              >
                Quero ser Notificado
              </Button>
            </div>
          </form>
        ) : (
          <div className="text-center py-8">
            <Check className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Email Cadastrado!</h3>
            <p className="text-white/70">
              Quando lançarmos, você será notificado no email {email}
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EmailForm;