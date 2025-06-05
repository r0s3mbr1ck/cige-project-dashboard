
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FiltroStatus } from '@/types/projeto';

interface FiltrosProjetosProps {
  termoPesquisa: string;
  setTermoPesquisa: (termo: string) => void;
  filtroStatus: FiltroStatus;
  setFiltroStatus: (status: FiltroStatus) => void;
}

export const FiltrosProjetos = ({
  termoPesquisa,
  setTermoPesquisa,
  filtroStatus,
  setFiltroStatus
}: FiltrosProjetosProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
        {/* Campo de pesquisa */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Pesquisar projetos..."
            value={termoPesquisa}
            onChange={(e) => setTermoPesquisa(e.target.value)}
            className="pl-10 h-11"
          />
        </div>
        
        {/* Filtro por status */}
        <div className="flex items-center gap-2">
          <Filter className="text-gray-500 w-4 h-4" />
          <Select value={filtroStatus} onValueChange={(value) => setFiltroStatus(value as FiltroStatus)}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filtrar por status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos os Status</SelectItem>
              <SelectItem value="ativo">Ativo</SelectItem>
              <SelectItem value="pausado">Pausado</SelectItem>
              <SelectItem value="concluido">Concluído</SelectItem>
              <SelectItem value="atrasado">Atrasado</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
