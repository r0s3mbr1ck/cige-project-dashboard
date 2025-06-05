
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, CheckCircle, Users, Target } from 'lucide-react';

interface EstatisticasProjetosProps {
  totalProjetos: number;
  projetosAtivos: number;
  projetosConcluidos: number;
}

export const EstatisticasProjetos = ({
  totalProjetos,
  projetosAtivos,
  projetosConcluidos
}: EstatisticasProjetosProps) => {
  const projetosRestantes = totalProjetos - projetosConcluidos;
  const percentualConclusao = totalProjetos > 0 ? Math.round((projetosConcluidos / totalProjetos) * 100) : 0;

  const estatisticas = [
    {
      titulo: 'Total de Projetos',
      valor: totalProjetos,
      icone: Target,
      cor: 'text-cige-primary',
      background: 'bg-blue-50'
    },
    {
      titulo: 'Projetos Ativos',
      valor: projetosAtivos,
      icone: Activity,
      cor: 'text-cige-secondary',
      background: 'bg-green-50'
    },
    {
      titulo: 'Projetos Concluídos',
      valor: projetosConcluidos,
      icone: CheckCircle,
      cor: 'text-emerald-600',
      background: 'bg-emerald-50'
    },
    {
      titulo: 'Taxa de Conclusão',
      valor: `${percentualConclusao}%`,
      icone: Users,
      cor: 'text-purple-600',
      background: 'bg-purple-50'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {estatisticas.map((stat, index) => {
        const IconeComponent = stat.icone;
        return (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.titulo}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.background}`}>
                <IconeComponent className={`h-4 w-4 ${stat.cor}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${stat.cor}`}>
                {stat.valor}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
