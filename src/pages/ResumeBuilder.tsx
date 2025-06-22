
import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import { Save, Download, Plus, X } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface ResumeData {
  id?: string;
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
  };
  experience: Array<{
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }>;
  education: Array<{
    id: string;
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
  }>;
  skills: string[];
}

const ResumeBuilder = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      location: '',
      summary: ''
    },
    experience: [],
    education: [],
    skills: []
  });
  const [newSkill, setNewSkill] = useState('');

  useEffect(() => {
    if (id) {
      // Simular carregamento de currículo existente
      const mockData: ResumeData = {
        id,
        personalInfo: {
          name: 'João Silva',
          email: 'joao@email.com',
          phone: '(11) 99999-9999',
          location: 'São Paulo, SP',
          summary: 'Desenvolvedor Frontend com 3 anos de experiência...'
        },
        experience: [
          {
            id: '1',
            company: 'Tech Company',
            position: 'Desenvolvedor Frontend',
            startDate: '2022-01',
            endDate: '',
            current: true,
            description: 'Desenvolvimento de aplicações React...'
          }
        ],
        education: [
          {
            id: '1',
            institution: 'Universidade de São Paulo',
            degree: 'Ciência da Computação',
            startDate: '2018-01',
            endDate: '2021-12'
          }
        ],
        skills: ['React', 'TypeScript', 'JavaScript', 'CSS']
      };
      setResumeData(mockData);
    }
  }, [id]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const addExperience = () => {
    const newExp = {
      id: Date.now().toString(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    };
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, newExp]
    }));
  };

  const removeExperience = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  const updateExperience = (id: string, field: string, value: any) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => 
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const addEducation = () => {
    const newEdu = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      startDate: '',
      endDate: ''
    };
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, newEdu]
    }));
  };

  const removeEducation = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  const updateEducation = (id: string, field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu => 
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const addSkill = () => {
    if (newSkill.trim() && !resumeData.skills.includes(newSkill.trim())) {
      setResumeData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill('');
    }
  };

  const removeSkill = (skill: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }));
  };

  const handleSave = () => {
    toast({
      title: "Currículo salvo!",
      description: "Suas alterações foram salvas com sucesso.",
    });
  };

  const handleDownload = () => {
    toast({
      title: "Download iniciado",
      description: "Seu currículo será baixado em PDF.",
    });
  };

  return (
    <div className="min-h-screen bg-aalvo-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-black">
            {id ? 'Editar currículo' : 'Criar currículo'}
          </h1>
          <div className="flex space-x-4">
            <Button onClick={handleSave} variant="outline" className="border-aalvo-gray-300">
              <Save className="h-4 w-4 mr-2" />
              Salvar
            </Button>
            <Button onClick={handleDownload} className="bg-black text-white hover:bg-aalvo-gray-800">
              <Download className="h-4 w-4 mr-2" />
              Baixar PDF
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Editor */}
          <div className="space-y-8">
            {/* Informações Pessoais */}
            <Card className="border-aalvo-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Informações Pessoais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input
                      id="name"
                      value={resumeData.personalInfo.name}
                      onChange={(e) => setResumeData(prev => ({
                        ...prev,
                        personalInfo: { ...prev.personalInfo, name: e.target.value }
                      }))}
                      className="border-aalvo-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={resumeData.personalInfo.email}
                      onChange={(e) => setResumeData(prev => ({
                        ...prev,
                        personalInfo: { ...prev.personalInfo, email: e.target.value }
                      }))}
                      className="border-aalvo-gray-300"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      value={resumeData.personalInfo.phone}
                      onChange={(e) => setResumeData(prev => ({
                        ...prev,
                        personalInfo: { ...prev.personalInfo, phone: e.target.value }
                      }))}
                      className="border-aalvo-gray-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Localização</Label>
                    <Input
                      id="location"
                      value={resumeData.personalInfo.location}
                      onChange={(e) => setResumeData(prev => ({
                        ...prev,
                        personalInfo: { ...prev.personalInfo, location: e.target.value }
                      }))}
                      className="border-aalvo-gray-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="summary">Resumo profissional</Label>
                  <Textarea
                    id="summary"
                    value={resumeData.personalInfo.summary}
                    onChange={(e) => setResumeData(prev => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, summary: e.target.value }
                    }))}
                    className="border-aalvo-gray-300"
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Experiência */}
            <Card className="border-aalvo-gray-200">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-black">Experiência Profissional</CardTitle>
                  <Button onClick={addExperience} size="sm" variant="outline" className="border-aalvo-gray-300">
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {resumeData.experience.map((exp) => (
                  <div key={exp.id} className="border border-aalvo-gray-200 rounded-lg p-4 space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="grid grid-cols-2 gap-4 flex-1">
                        <div className="space-y-2">
                          <Label>Empresa</Label>
                          <Input
                            value={exp.company}
                            onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                            className="border-aalvo-gray-300"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Cargo</Label>
                          <Input
                            value={exp.position}
                            onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                            className="border-aalvo-gray-300"
                          />
                        </div>
                      </div>
                      <Button 
                        onClick={() => removeExperience(exp.id)}
                        size="sm"
                        variant="ghost"
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Data de início</Label>
                        <Input
                          type="month"
                          value={exp.startDate}
                          onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                          className="border-aalvo-gray-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Data de fim</Label>
                        <Input
                          type="month"
                          value={exp.endDate}
                          onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                          disabled={exp.current}
                          className="border-aalvo-gray-300"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Descrição</Label>
                      <Textarea
                        value={exp.description}
                        onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                        className="border-aalvo-gray-300"
                        rows={3}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Habilidades */}
            <Card className="border-aalvo-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Habilidades</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Digite uma habilidade"
                    className="border-aalvo-gray-300"
                    onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                  />
                  <Button onClick={addSkill} size="sm" className="bg-black text-white hover:bg-aalvo-gray-800">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="bg-aalvo-gray-100 text-aalvo-gray-700 px-3 py-1 rounded-full text-sm flex items-center"
                    >
                      {skill}
                      <button
                        onClick={() => removeSkill(skill)}
                        className="ml-2 text-aalvo-gray-500 hover:text-red-500"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview */}
          <div className="lg:sticky lg:top-8">
            <Card className="border-aalvo-gray-200">
              <CardHeader>
                <CardTitle className="text-black">Visualização</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white border border-aalvo-gray-300 rounded-lg p-8 min-h-[600px]">
                  <div className="space-y-6">
                    <div className="text-center border-b border-aalvo-gray-200 pb-4">
                      <h1 className="text-2xl font-bold text-black">{resumeData.personalInfo.name || 'Seu Nome'}</h1>
                      <p className="text-aalvo-gray-600 mt-1">
                        {resumeData.personalInfo.email} • {resumeData.personalInfo.phone}
                      </p>
                      <p className="text-aalvo-gray-600">{resumeData.personalInfo.location}</p>
                    </div>

                    {resumeData.personalInfo.summary && (
                      <div>
                        <h2 className="text-lg font-semibold text-black mb-2">Resumo</h2>
                        <p className="text-aalvo-gray-700 text-sm">{resumeData.personalInfo.summary}</p>
                      </div>
                    )}

                    {resumeData.experience.length > 0 && (
                      <div>
                        <h2 className="text-lg font-semibold text-black mb-3">Experiência</h2>
                        <div className="space-y-4">
                          {resumeData.experience.map((exp) => (
                            <div key={exp.id}>
                              <h3 className="font-medium text-black">{exp.position}</h3>
                              <p className="text-aalvo-gray-600 text-sm">{exp.company}</p>
                              <p className="text-aalvo-gray-500 text-xs">
                                {exp.startDate} - {exp.current ? 'Atual' : exp.endDate}
                              </p>
                              {exp.description && (
                                <p className="text-aalvo-gray-700 text-sm mt-1">{exp.description}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {resumeData.skills.length > 0 && (
                      <div>
                        <h2 className="text-lg font-semibold text-black mb-2">Habilidades</h2>
                        <div className="flex flex-wrap gap-2">
                          {resumeData.skills.map((skill) => (
                            <span key={skill} className="bg-aalvo-gray-100 text-aalvo-gray-700 px-2 py-1 rounded text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResumeBuilder;
