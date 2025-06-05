
import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export const RelogioDigital = () => {
  const [dataHora, setDataHora] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDataHora(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatarData = (data: Date) => {
    return data.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formatarHora = (data: Date) => {
    return data.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="flex items-center justify-center gap-3 bg-cige-dark text-cige-secondary border-2 border-cige-secondary rounded-lg px-6 py-3 font-mono font-semibold text-lg shadow-lg">
      <Clock className="w-5 h-5" />
      <span className="whitespace-nowrap">
        {formatarData(dataHora)} {formatarHora(dataHora)}
      </span>
    </div>
  );
};
