
import { Header } from '@/components/Header';
import { EstatisticasProjetos } from '@/components/EstatisticasProjetos';
import { FiltrosProjetos } from '@/components/FiltrosProjetos';
import { CardProjeto } from '@/components/CardProjeto';
import { LoadingProjetos } from '@/components/LoadingProjetos';
import { Footer } from '@/components/Footer';
import { useProjetos } from '@/hooks/useProjetos';

const Index = () => {
  const {
    projetos,
    isLoading,
    filtroStatus,
    setFiltroStatus,
    termoPesquisa,
    setTermoPesquisa,
    totalProjetos,
    projetosAtivos,
    projetosConcluidos
  } = useProjetos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Estatísticas */}
        <EstatisticasProjetos
          totalProjetos={totalProjetos}
          projetosAtivos={projetosAtivos}
          projetosConcluidos={projetosConcluidos}
        />

        {/* Filtros */}
        <FiltrosProjetos
          termoPesquisa={termoPesquisa}
          setTermoPesquisa={setTermoPesquisa}
          filtroStatus={filtroStatus}
          setFiltroStatus={setFiltroStatus}
        />

        {/* Grid de projetos */}
        {isLoading ? (
          <LoadingProjetos />
        ) : (
          <>
            {projetos.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-gray-500 text-lg mb-4">
                  Nenhum projeto encontrado com os filtros aplicados
                </div>
                <button 
                  onClick={() => {
                    setFiltroStatus('todos');
                    setTermoPesquisa('');
                  }}
                  className="text-cige-primary hover:text-cige-secondary font-medium underline"
                >
                  Limpar filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projetos.map((projeto) => (
                  <CardProjeto key={projeto.id} projeto={projeto} />
                ))}
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
