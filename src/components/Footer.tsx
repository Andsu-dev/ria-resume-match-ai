
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-aalvo-gray-50 border-t border-aalvo-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-black">
              Aalvo
            </Link>
            <p className="mt-4 text-aalvo-gray-600 max-w-md">
              Construa seu currículo com inteligência artificial e descubra se você dá match 
              com a vaga dos seus sonhos.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-black mb-4">Produto</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/signup" className="text-aalvo-gray-600 hover:text-black transition-colors">
                  Começar grátis
                </Link>
              </li>
              <li>
                <Link to="/#como-funciona" className="text-aalvo-gray-600 hover:text-black transition-colors">
                  Como funciona
                </Link>
              </li>
              <li>
                <Link to="/#beneficios" className="text-aalvo-gray-600 hover:text-black transition-colors">
                  Benefícios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-black mb-4">Suporte</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/support" className="text-aalvo-gray-600 hover:text-black transition-colors">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-aalvo-gray-600 hover:text-black transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-aalvo-gray-600 hover:text-black transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-aalvo-gray-200">
          <p className="text-center text-aalvo-gray-500">
            © 2024 Aalvo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
