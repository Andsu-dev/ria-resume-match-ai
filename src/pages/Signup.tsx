
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';
import { Mail, Lock, User } from 'lucide-react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Senha muito curta",
        description: "A senha deve ter pelo menos 6 caracteres.",
        variant: "destructive",
      });
      return;
    }

    try {
      await signup(email, password, name);
      toast({
        title: "Conta criada com sucesso!",
        description: "Bem-vindo ao Aalvo.",
      });
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Erro no cadastro",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-aalvo-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold text-black">
            Aalvo
          </Link>
          <p className="mt-2 text-aalvo-gray-600">
            Crie sua conta gratuita
          </p>
        </div>

        <Card className="border-aalvo-gray-200">
          <CardHeader>
            <CardTitle className="text-center text-black">Começar grátis</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-aalvo-gray-700">
                  Nome completo
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-aalvo-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="pl-10 border-aalvo-gray-300"
                    placeholder="Seu nome"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-aalvo-gray-700">
                  E-mail
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-aalvo-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 border-aalvo-gray-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-aalvo-gray-700">
                  Senha
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-aalvo-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 border-aalvo-gray-300"
                    placeholder="Mínimo 6 caracteres"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-black text-white hover:bg-aalvo-gray-800"
                disabled={isLoading}
              >
                {isLoading ? 'Criando conta...' : 'Criar conta grátis'}
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-aalvo-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-aalvo-gray-500">Ou continue com</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  className="border-aalvo-gray-300 text-aalvo-gray-700 hover:bg-aalvo-gray-50"
                >
                  Google
                </Button>
                <Button 
                  variant="outline" 
                  className="border-aalvo-gray-300 text-aalvo-gray-700 hover:bg-aalvo-gray-50"
                >
                  LinkedIn
                </Button>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-aalvo-gray-600">
              Já tem uma conta?{' '}
              <Link to="/login" className="font-medium text-black hover:underline">
                Fazer login
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
