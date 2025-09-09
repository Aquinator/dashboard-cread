import React from 'react';
import { useApiData } from '../hooks/useApiData';
import { Card } from '../components/ui/Card';
import { FiBookOpen } from 'react-icons/fi';

export const CourseListPage = () => {
  // O hook useApiData agora espera que a resposta seja o array diretamente.
  // Precisamos ajustar como ele é chamado ou como ele processa os dados.
  const { data: courses, loading, error } = useApiData('/courses');

  return (
    <div className="flex flex-col gap-6">
      <header>
        <div className="flex items-center">
          <FiBookOpen size={32} className="text-ifce-green-primary mr-3" />
          <h1 className="text-3xl font-bold text-ifce-gray-dark dark:text-dark-text-primary">
            Catálogo de Cursos
          </h1>
        </div>
        <p className="text-slate-600 dark:text-dark-text-secondary mt-1">
          Lista de todos os cursos únicos encontrados na plataforma após normalização.
        </p>
      </header>
      
      <main className="mt-2">
        <Card className="p-0">
          {loading && <p className="p-6">Carregando cursos...</p>}
          {error && <p className="p-6 text-red-500">Erro ao carregar: {error.message}</p>}
          {courses && courses.length > 0 ? (
            <div className="max-h-[60vh] overflow-y-auto">
              <ul className="divide-y divide-ifce-gray-medium dark:divide-dark-border">
                {courses.map(course => (
                  <li key={course.id} className="py-3 px-6 hover:bg-ifce-gray-light dark:hover:bg-dark-bg">
                    <span className="text-sm text-ifce-gray-dark dark:text-dark-text-primary">{course.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            !loading && <p className="p-6">Nenhum curso encontrado.</p>
          )}
        </Card>
      </main>
    </div>
  );
};