
import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import { Plus, FileText, Search, Calendar } from 'lucide-react';

interface Resume {
  id: string;
  title: string;
  lastModified: string;
  status: 'draft' | 'completed';
}

const Dashboard = () => {
  const { user } = useAuth();
  const [resumes, setResumes] = useState<Resume[]>([]);

  useEffect(() => {
    // Simular carregamento de currículos
    const mockResumes: Resume[] = [
      {
        id: '1',
        title: 'Currículo - Desenvolvedor Frontend',
        lastModified: '2024-01-15',
        status: 'completed'
      },
      {
        id: '2',
        title: 'Currículo - Designer UX/UI',
        lastModified: '2024-01-10',
        status: 'draft'
      }
    ];
    setResumes(mockResumes);
  }, []);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  return (
    <div className="min-h-screen bg-aalvo-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">
            Olá, {user.name}!
          </h1>
          <p className="text-aalvo-gray-600">
            Gerencie seus currículos e análises de vagas
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="border-aalvo-gray-200 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                  <Plus className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-black mb-1">
                    Criar novo currículo
                  </h3>
                  <p className="text-aalvo-gray-600 text-sm">
                    Use nossa IA para criar um currículo otimizado
                  </p>
                </div>
                <Link to="/builder">
                  <Button className="bg-black text-white hover:bg-aalvo-gray-800">
                    Criar
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="border-aalvo-gray-200 hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-aalvo-gray-100 rounded-lg flex items-center justify-center">
                  <Search className="h-6 w-6 text-aalvo-gray-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-black mb-1">
                    Analisar vaga
                  </h3>
                  <p className="text-aalvo-gray-600 text-sm">
                    Veja o match entre seu currículo e uma vaga
                  </p>
                </div>
                <Link to="/analysis">
                  <Button variant="outline" className="border-aalvo-gray-300">
                    Analisar
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Resumes Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-black">Meus currículos</h2>
            <Link to="/builder">
              <Button className="bg-black text-white hover:bg-aalvo-gray-800">
                <Plus className="h-4 w-4 mr-2" />
                Novo currículo
              </Button>
            </Link>
          </div>

          {resumes.length === 0 ? (
            <Card className="border-aalvo-gray-200">
              <CardContent className="p-12 text-center">
                <FileText className="h-12 w-12 text-aalvo-gray-400 mx-auto mb-4" />
                <h3 className="font-semibold text-black mb-2">
                  Nenhum currículo criado ainda
                </h3>
                <p className="text-aalvo-gray-600 mb-6">
                  Comece criando seu primeiro currículo com nossa IA
                </p>
                <Link to="/builder">
                  <Button className="bg-black text-white hover:bg-aalvo-gray-800">
                    Criar meu primeiro currículo
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resumes.map((resume) => (
                <Card key={resume.id} className="border-aalvo-gray-200 hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-semibold text-black mb-1">
                          {resume.title}
                        </CardTitle>
                        <div className="flex items-center text-sm text-aalvo-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(resume.lastModified)}
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        resume.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {resume.status === 'completed' ? 'Completo' : 'Rascunho'}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex space-x-2">
                      <Link to={`/builder/${resume.id}`} className="flex-1">
                        <Button variant="outline" className="w-full border-aalvo-gray-300">
                          Editar
                        </Button>
                      </Link>
                      <Button className="bg-black text-white hover:bg-aalvo-gray-800">
                        Baixar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Recent Analysis */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-6">Análises recentes</h2>
          <Card className="border-aalvo-gray-200">
            <CardContent className="p-12 text-center">
              <Search className="h-12 w-12 text-aalvo-gray-400 mx-auto mb-4" />
              <h3 className="font-semibold text-black mb-2">
                Nenhuma análise ainda
              </h3>
              <p className="text-aalvo-gray-600 mb-6">
                Analise a compatibilidade do seu currículo com vagas de interesse
              </p>
              <Link to="/analysis">
                <Button className="bg-black text-white hover:bg-aalvo-gray-800">
                  Fazer primeira análise
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
