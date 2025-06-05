
import { RelogioDigital } from './RelogioDigital';

export const Header = () => {
  return (
    <header className="bg-cige-dark text-white py-8 px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-cige-dark via-slate-800 to-cige-dark opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Título principal */}
          <h1 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl text-center leading-tight">
            <span className="bg-gradient-to-r from-white to-cige-secondary bg-clip-text text-transparent">
              Dashboard de Projetos do CIGE
            </span>
          </h1>
          
          {/* Subtítulo */}
          <p className="text-slate-300 text-lg md:text-xl text-center max-w-2xl">
            Centro de Inteligência Geoespacial do Exército
          </p>
          
          {/* Relógio */}
          <RelogioDigital />
        </div>
      </div>
    </header>
  );
};
