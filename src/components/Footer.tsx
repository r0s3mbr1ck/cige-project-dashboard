
import { Mail, Calendar } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-cige-dark font-semibold">
            <Calendar className="w-4 h-4" />
            <span>Desenvolvido por Alex Marano em 28/05/2025</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Mail className="w-4 h-4" />
            <a 
              href="mailto:marano.alex@eb.mil.br" 
              className="hover:text-cige-primary transition-colors underline"
            >
              marano.alex@eb.mil.br
            </a>
          </div>
          
          <div className="text-sm text-gray-500 mt-4">
            Centro de Inteligência Geoespacial do Exército - CIGE
          </div>
        </div>
      </div>
    </footer>
  );
};
