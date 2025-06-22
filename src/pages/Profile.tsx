
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import { User, Settings, Save } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Profile = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    targetRole: 'Desenvolvedor Frontend',
    targetArea: 'Tecnologia',
    location: 'São Paulo, SP'
  });

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleSave = () => {
    toast({
      title: "Perfil atualizado!",
      description: "Suas informações foram salvas com sucesso.",
    });
  };

  return (
    <div className="min-h-screen bg-aalvo-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">
            Perfil
          </h1>
          <p className="text-aalvo-gray-600">
            Gerencie suas informações pessoais e preferências
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-aalvo-gray-200">
              <CardHeader>
                <CardTitle className="text-black flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Informações Pessoais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="border-aalvo-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="border-aalvo-gray-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Localização</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    className="border-aalvo-gray-300"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-aalvo-gray-200">
              <CardHeader>
                <CardTitle className="text-black flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Preferências Profissionais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="target-role">Cargo-alvo</Label>
                    <Input
                      id="target-role"
                      value={formData.targetRole}
                      onChange={(e) => setFormData(prev => ({ ...prev, targetRole: e.target.value }))}
                      className="border-aalvo-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="target-area">Área de atuação</Label>
                    <Input
                      id="target-area"
                      value={formData.targetArea}
                      onChange={(e) => setFormData(prev => ({ ...prev, targetArea: e.target.value }))}
                      className="border-aalvo-gray-300"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button onClick={handleSave} className="bg-black text-white hover:bg-aalvo-gray-800">
                <Save className="h-4 w-4 mr-2" />
                Salvar alterações
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-aalvo-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Estatísticas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-aalvo-gray-600">Currículos criados</span>
                  <span className="font-semibold text-black">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-aalvo-gray-600">Análises realizadas</span>
                  <span className="font-semibold text-black">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-aalvo-gray-600">Match médio</span>
                  <span className="font-semibold text-black">72%</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-aalvo-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Plano Atual</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-black">Gratuito</p>
                    <p className="text-aalvo-gray-600 text-sm">
                      1 currículo • 3 análises por mês
                    </p>
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-aalvo-gray-800">
                    Fazer upgrade
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
