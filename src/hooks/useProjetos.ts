
import { useState, useEffect } from 'react';
import { Projeto, FiltroStatus } from '@/types/projeto';

// Dados de exemplo simulando a leitura da planilha ODS
const projetosData: Projeto[] = [
  {
    id: '1',
    projeto: 'Sistema de Monitoramento Geoespacial',
    objetivo: 'Desenvolver sistema para monitoramento em tempo real de áreas estratégicas',
    fase: 'Desenvolvimento',
    proximaAcao: 'Implementar módulo de alertas automatizados',
    prazo: '15/07/2025',
    progresso: 75,
    status: 'ativo'
  },
  {
    id: '2',
    projeto: 'Integração de Dados Satelitais',
    objetivo: 'Criar plataforma unificada para análise de dados de múltiplos satélites',
    fase: 'Testes',
    proximaAcao: 'Realizar testes de integração com sistemas legados',
    prazo: '30/06/2025',
    progresso: 90,
    status: 'ativo'
  },
  {
    id: '3',
    projeto: 'Capacitação em GIS Avançado',
    objetivo: 'Treinar equipe em tecnologias GIS de última geração',
    fase: 'Planejamento',
    proximaAcao: 'Definir cronograma de treinamentos',
    prazo: '20/08/2025',
    progresso: 25,
    status: 'ativo'
  },
  {
    id: '4',
    projeto: 'Modernização da Infraestrutura',
    objetivo: 'Atualizar servidores e equipamentos de processamento',
    fase: 'Concluído',
    proximaAcao: 'Documentar processo e resultados',
    prazo: '01/05/2025',
    progresso: 100,
    status: 'concluido'
  },
  {
    id: '5',
    projeto: 'Análise de Mudanças Climáticas',
    objetivo: 'Desenvolver modelos preditivos para impactos ambientais',
    fase: 'Pesquisa',
    proximaAcao: 'Coletar dados históricos das últimas duas décadas',
    prazo: '10/09/2025',
    progresso: 45,
    status: 'ativo'
  },
  {
    id: '6',
    projeto: 'Sistema de Backup Distribuído',
    objetivo: 'Implementar sistema de backup em múltiplas localizações',
    fase: 'Pausado',
    proximaAcao: 'Aguardar aprovação de orçamento adicional',
    prazo: '15/11/2025',
    progresso: 35,
    status: 'pausado'
  }
];

export const useProjetos = () => {
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [filtroStatus, setFiltroStatus] = useState<FiltroStatus>('todos');
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula carregamento de dados
    const timer = setTimeout(() => {
      setProjetos(projetosData);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const projetosFiltrados = projetos.filter(projeto => {
    const matchStatus = filtroStatus === 'todos' || projeto.status === filtroStatus;
    const matchPesquisa = projeto.projeto.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
                         projeto.objetivo.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
                         projeto.fase.toLowerCase().includes(termoPesquisa.toLowerCase());
    
    return matchStatus && matchPesquisa;
  });

  return {
    projetos: projetosFiltrados,
    isLoading,
    filtroStatus,
    setFiltroStatus,
    termoPesquisa,
    setTermoPesquisa,
    totalProjetos: projetos.length,
    projetosAtivos: projetos.filter(p => p.status === 'ativo').length,
    projetosConcluidos: projetos.filter(p => p.status === 'concluido').length,
  };
};
