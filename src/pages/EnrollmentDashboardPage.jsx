import React from 'react';
import { AreaChartCard } from '../components/charts/AreaChartCard'; // <-- Novo gráfico
import { MapChartLeaflet } from '../components/charts/MapChartLeaflet';
import { ChoroplethMapLeaflet } from '../components/charts/ChoroplethMapLeaflet';

export const EnrollmentDashboardPage = () => {
  return (
    <div>
      <header>
        <h1 className="text-3xl font-bold text-ifce-gray-dark dark:text-dark-text-primary">Análise de Matrículas e Ofertas</h1>
        <p className="text-slate-600 dark:text-dark-text-secondary mt-1">Evolução anual e distribuição geográfica de estudantes.</p>
      </header>
      
      <main className="mt-8 flex flex-col gap-6">
        {/* Gráfico de barras substituído pelo de área */}
        <AreaChartCard 
          title="Total de Matrículas por Ano" 
          endpoint="/enrollments/total_yearly" 
        />
        
        <div className="flex flex-col gap-6">
          <MapChartLeaflet 
            title="Distribuição de Polos" 
            endpoint="/enrollments/by_polo_yearly"
          />
          <ChoroplethMapLeaflet 
            title="Distribuição de Matrículas por Município (CE)"
            endpoint="/enrollments/by_location?typelocal=municipio"
          />
        </div>
      </main>
    </div>
  );
};