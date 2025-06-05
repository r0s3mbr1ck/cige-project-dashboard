
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Calendar, Target, ArrowRight, CheckCircle, Pause, AlertCircle } from 'lucide-react';
import { Projeto } from '@/types/projeto';

interface CardProjetoProps {
  projeto: Projeto;
}

export const CardProjeto = ({ projeto }: CardProjetoProps) => {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'ativo':
        return {
          label: 'Ativo',
          variant: 'default' as const,
          icon: Target,
          color: 'text-cige-secondary'
        };
      case 'pausado':
        return {
          label: 'Pausado',
          variant: 'secondary' as const,
          icon: Pause,
          color: 'text-yellow-600'
        };
      case 'concluido':
        return {
          label: 'Concluído',
          variant: 'default' as const,
          icon: CheckCircle,
          color: 'text-emerald-600'
        };
      case 'atrasado':
        return {
          label: 'Atrasado',
          variant: 'destructive' as const,
          icon: AlertCircle,
          color: 'text-red-600'
        };
      default:
        return {
          label: 'Ativo',
          variant: 'default' as const,
          icon: Target,
          color: 'text-cige-secondary'
        };
    }
  };

  const statusConfig = getStatusConfig(projeto.status);
  const StatusIcon = statusConfig.icon;

  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group cursor-pointer">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-lg font-semibold text-cige-dark leading-tight group-hover:text-cige-primary transition-colors">
            {projeto.projeto}
          </CardTitle>
          <Badge variant={statusConfig.variant} className="shrink-0">
            <StatusIcon className="w-3 h-3 mr-1" />
            {statusConfig.label}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Objetivo */}
        <div>
          <h4 className="font-medium text-gray-700 mb-1 flex items-center gap-2">
            <Target className="w-4 h-4 text-cige-primary" />
            Objetivo
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            {projeto.objetivo}
          </p>
        </div>

        {/* Fase atual */}
        <div>
          <h4 className="font-medium text-gray-700 mb-1">Fase Atual</h4>
          <p className="text-sm text-cige-primary font-medium">
            {projeto.fase}
          </p>
        </div>

        {/* Próxima ação */}
        <div>
          <h4 className="font-medium text-gray-700 mb-1 flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-cige-secondary" />
            Próxima Ação
          </h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            {projeto.proximaAcao}
          </p>
        </div>

        {/* Prazo */}
        <div>
          <h4 className="font-medium text-gray-700 mb-1 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-orange-500" />
            Prazo
          </h4>
          <p className="text-sm font-medium text-orange-600">
            {projeto.prazo}
          </p>
        </div>

        {/* Progresso */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium text-gray-700">Progresso</h4>
            <span className="text-sm font-semibold text-cige-secondary">
              {projeto.progresso}%
            </span>
          </div>
          <Progress 
            value={projeto.progresso} 
            className="h-3 animate-pulse-progress"
          />
        </div>
      </CardContent>
    </Card>
  );
};
