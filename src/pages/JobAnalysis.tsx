
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import { Search, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';

interface AnalysisResult {
  matchPercentage: number;
  positivePoints: string[];
  improvements: string[];
  missingKeywords: string[];
}

const JobAnalysis = () => {
  const { user } = useAuth();
  const [jobDescription, setJobDescription] = useState('');
  const [selectedResume, setSelectedResume] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  // Mock resumes
  const mockResumes = [
    { id: '1', title: 'Currículo - Desenvolvedor Frontend' },
    { id: '2', title: 'Currículo - Designer UX/UI' },
  ];

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleAnalysis = async () => {
    if (!jobDescription.trim() || !selectedResume) {
      return;
    }

    setIsAnalyzing(true);
    
    // Simular análise da IA
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const mockResult: AnalysisResult = {
      matchPercentage: 78,
      positivePoints: [
        'Experiência em React e TypeScript mencionada',
        'Conhecimento em metodologias ágeis',
        'Experiência com desenvolvimento frontend',
        'Formação em área relacionada'
      ],
      improvements: [
        'Adicionar experiência com Node.js',
        'Incluir projetos com Next.js',
        'Mencionar conhecimento em testes automatizados',
        'Destacar experiência com Docker'
      ],
      missingKeywords: [
        'Node.js',
        'Next.js',
        'Jest',
        'Docker',
        'AWS',
        'GraphQL'
      ]
    };

    setAnalysisResult(mockResult);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-aalvo-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">
            Análise de Compatibilidade
          </h1>
          <p className="text-aalvo-gray-600">
            Veja se seu currículo dá match com a vaga dos seus sonhos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card className="border-aalvo-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Descrição da Vaga</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="job-description">
                      Cole aqui a descrição completa da vaga
                    </Label>
                    <Textarea
                      id="job-description"
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                      placeholder="Estamos procurando um desenvolvedor frontend com experiência em React, TypeScript e Node.js..."
                      className="border-aalvo-gray-300 min-h-[200px]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="resume-select">
                      Selecione o currículo para análise
                    </Label>
                    <Select value={selectedResume} onValueChange={setSelectedResume}>
                      <SelectTrigger className="border-aalvo-gray-300">
                        <SelectValue placeholder="Escolha um currículo" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-aalvo-gray-200">
                        {mockResumes.map((resume) => (
                          <SelectItem key={resume.id} value={resume.id}>
                            {resume.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    onClick={handleAnalysis}
                    disabled={!jobDescription.trim() || !selectedResume || isAnalyzing}
                    className="w-full bg-black text-white hover:bg-aalvo-gray-800"
                  >
                    {isAnalyzing ? (
                      <>
                        <Search className="h-4 w-4 mr-2 animate-spin" />
                        Analisando...
                      </>
                    ) : (
                      <>
                        <Search className="h-4 w-4 mr-2" />
                        Analisar Compatibilidade
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {analysisResult ? (
              <>
                {/* Match Score */}
                <Card className="border-aalvo-gray-200">
                  <CardHeader>
                    <CardTitle className="text-black flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      Pontuação de Compatibilidade
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center space-y-4">
                      <div className="text-4xl font-bold text-black">
                        {analysisResult.matchPercentage}%
                      </div>
                      <Progress 
                        value={analysisResult.matchPercentage} 
                        className="h-3"
                      />
                      <p className="text-aalvo-gray-600">
                        {analysisResult.matchPercentage >= 80 ? 'Excelente match!' : 
                         analysisResult.matchPercentage >= 60 ? 'Bom match com potencial de melhoria' :
                         'Match moderado - recomendamos algumas melhorias'}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Positive Points */}
                <Card className="border-aalvo-gray-200">
                  <CardHeader>
                    <CardTitle className="text-black flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                      Pontos Positivos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {analysisResult.positivePoints.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-aalvo-gray-700 text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Improvements */}
                <Card className="border-aalvo-gray-200">
                  <CardHeader>
                    <CardTitle className="text-black flex items-center">
                      <AlertCircle className="h-5 w-5 mr-2 text-orange-500" />
                      Sugestões de Melhoria
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {analysisResult.improvements.map((improvement, index) => (
                        <li key={index} className="flex items-start">
                          <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-aalvo-gray-700 text-sm">{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Missing Keywords */}
                <Card className="border-aalvo-gray-200">
                  <CardHeader>
                    <CardTitle className="text-black">Palavras-chave Ausentes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {analysisResult.missingKeywords.map((keyword) => (
                        <span 
                          key={keyword}
                          className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm border border-red-200"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                    <p className="text-aalvo-gray-600 text-sm mt-3">
                      Considere incluir essas palavras-chave no seu currículo para melhorar a compatibilidade.
                    </p>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="border-aalvo-gray-200">
                <CardContent className="p-12 text-center">
                  <Search className="h-12 w-12 text-aalvo-gray-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-black mb-2">
                    Pronto para analisar
                  </h3>
                  <p className="text-aalvo-gray-600">
                    Cole a descrição da vaga e selecione um currículo para ver a análise de compatibilidade.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobAnalysis;
