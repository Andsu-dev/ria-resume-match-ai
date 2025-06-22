
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { User, LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="border-b border-aalvo-gray-200 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to={user ? "/dashboard" : "/"} className="text-2xl font-bold text-black">
            Aalvo
          </Link>

          <nav className="hidden md:flex space-x-8">
            {user ? (
              <>
                <Link to="/dashboard" className="text-aalvo-gray-600 hover:text-black transition-colors">
                  Dashboard
                </Link>
                <Link to="/analysis" className="text-aalvo-gray-600 hover:text-black transition-colors">
                  Análise de Vaga
                </Link>
                <Link to="/support" className="text-aalvo-gray-600 hover:text-black transition-colors">
                  Suporte
                </Link>
              </>
            ) : (
              <>
                <Link to="#como-funciona" className="text-aalvo-gray-600 hover:text-black transition-colors">
                  Como funciona
                </Link>
                <Link to="#beneficios" className="text-aalvo-gray-600 hover:text-black transition-colors">
                  Benefícios
                </Link>
                <Link to="#faq" className="text-aalvo-gray-600 hover:text-black transition-colors">
                  FAQ
                </Link>
              </>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span className="hidden sm:inline">{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white border border-aalvo-gray-200">
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      Perfil
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="text-aalvo-gray-600 hover:text-black">
                    Entrar
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-black text-white hover:bg-aalvo-gray-800">
                    Comece grátis
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
