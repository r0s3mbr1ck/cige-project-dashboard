
export interface Projeto {
  id: string;
  projeto: string;
  objetivo: string;
  fase: string;
  proximaAcao: string;
  prazo: string;
  progresso: number;
  status: 'ativo' | 'pausado' | 'concluido' | 'atrasado';
}

export type FiltroStatus = 'todos' | 'ativo' | 'pausado' | 'concluido' | 'atrasado';
