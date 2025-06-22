import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
import { Save, Download, Plus, X, Sparkles, FileText, User, Briefcase, GraduationCap, Award } from 'lucide-react';
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
  const [activeSection, setActiveSection] = useState('personal');

  useEffect(() => {
    if (id) {
      // Mock data for existing resume
      const mockData: ResumeData = {
        id,
        personalInfo: {
          name: 'João Silva',
          email: 'joao@email.com',
          phone: '(11) 99999-9999',
          location: 'São Paulo, SP',
          summary: 'Desenvolvedor Frontend experiente com foco em React e TypeScript, apaixonado por criar interfaces elegantes e funcionais.'
        },
        experience: [
          {
            id: '1',
            company: 'Tech Innovate',
            position: 'Senior Frontend Developer',
            startDate: '2022-01',
            endDate: '',
            current: true,
            description: 'Liderança técnica no desenvolvimento de aplicações React complexas, implementação de design systems e mentoria de desenvolvedores júniores.'
          }
        ],
        education: [
          {
            id: '1',
            institution: 'Universidade de São Paulo',
            degree: 'Bacharelado em Ciência da Computação',
            startDate: '2018-01',
            endDate: '2021-12'
          }
        ],
        skills: ['React', 'TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker']
      };
      setResumeData(mockData);
    }
  }, [id]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const sections = [
    { id: 'personal', label: 'Pessoal', icon: User },
    { id: 'experience', label: 'Experiência', icon: Briefcase },
    { id: 'education', label: 'Educação', icon: GraduationCap },
    { id: 'skills', label: 'Habilidades', icon: Award },
  ];

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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container-wide py-8">
        {/* Header with Actions */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          <div className="fade-in-up">
            <h1 className="text-headline text-aalvo-text-primary mb-2">
              {id ? 'Editar currículo' : 'Criar currículo'}
            </h1>
            <p className="text-body text-aalvo-text-secondary">
              Use nossa IA para criar um currículo profissional e otimizado
            </p>
          </div>
          
          <div className="flex items-center gap-3 fade-in-up-delay-1">
            <Button onClick={handleSave} variant="outline" className="btn-secondary">
              <Save className="h-4 w-4 mr-2" />
              Salvar
            </Button>
            <Button onClick={handleDownload} className="btn-primary">
              <Download className="h-4 w-4 mr-2" />
              Baixar PDF
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <div className="xl:col-span-3 fade-in-up-delay-2">
            <div className="card-elevated p-6 sticky top-8">
              <div className="flex items-center gap-2 mb-6">
                <FileText className="h-5 w-5 text-aalvo-text-primary" />
                <span className="font-medium text-aalvo-text-primary">Seções</span>
              </div>
              
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;
                  
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                        isActive 
                          ? 'bg-aalvo-primary text-white shadow-sm' 
                          : 'text-aalvo-text-secondary hover:text-aalvo-text-primary hover:bg-aalvo-surface-hover'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="font-medium">{section.label}</span>
                    </button>
                  );
                })}
              </nav>
              
              <div className="mt-8 p-4 bg-aalvo-accent rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-aalvo-text-primary" />
                  <span className="font-medium text-aalvo-text-primary">Sugestão da IA</span>
                </div>
                <p className="text-sm text-aalvo-text-secondary">
                  Adicione mais detalhes quantitativos nas suas experiências para destacar seus resultados.
                </p>
              </div>
            </div>
          </div>

          {/* Main Editor */}
          <div className="xl:col-span-5 fade-in-up-delay-3">
            <div className="space-y-8">
              {/* Personal Information Section */}
              {activeSection === 'personal' && (
                <Card className="card-elevated">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-aalvo-text-primary">
                      <User className="h-5 w-5" />
                      Informações Pessoais
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-aalvo-text-primary font-medium">Nome completo</Label>
                        <Input
                          id="name"
                          value={resumeData.personalInfo.name}
                          onChange={(e) => setResumeData(prev => ({
                            ...prev,
                            personalInfo: { ...prev.personalInfo, name: e.target.value }
                          }))}
                          className="input-modern"
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-aalvo-text-primary font-medium">E-mail</Label>
                        <Input
                          id="email"
                          type="email"
                          value={resumeData.personalInfo.email}
                          onChange={(e) => setResumeData(prev => ({
                            ...prev,
                            personalInfo: { ...prev.personalInfo, email: e.target.value }
                          }))}
                          className="input-modern"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-aalvo-text-primary font-medium">Telefone</Label>
                        <Input
                          id="phone"
                          value={resumeData.personalInfo.phone}
                          onChange={(e) => setResumeData(prev => ({
                            ...prev,
                            personalInfo: { ...prev.personalInfo, phone: e.target.value }
                          }))}
                          className="input-modern"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-aalvo-text-primary font-medium">Localização</Label>
                        <Input
                          id="location"
                          value={resumeData.personalInfo.location}
                          onChange={(e) => setResumeData(prev => ({
                            ...prev,
                            personalInfo: { ...prev.personalInfo, location: e.target.value }
                          }))}
                          className="input-modern"
                          placeholder="Cidade, Estado"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="summary" className="text-aalvo-text-primary font-medium">Resumo profissional</Label>
                      <Textarea
                        id="summary"
                        value={resumeData.personalInfo.summary}
                        onChange={(e) => setResumeData(prev => ({
                          ...prev,
                          personalInfo: { ...prev.personalInfo, summary: e.target.value }
                        }))}
                        className="input-modern min-h-[120px]"
                        placeholder="Descreva brevemente sua experiência e objetivos profissionais..."
                        rows={5}
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Experience Section */}
              {activeSection === 'experience' && (
                <Card className="card-elevated">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-center">
                      <CardTitle className="flex items-center gap-2 text-aalvo-text-primary">
                        <Briefcase className="h-5 w-5" />
                        Experiência Profissional
                      </CardTitle>
                      <Button onClick={addExperience} className="btn-secondary">
                        <Plus className="h-4 w-4 mr-2" />
                        Adicionar
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {resumeData.experience.map((exp, index) => (
                      <div key={exp.id} className="card-surface p-6 space-y-4">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-aalvo-accent rounded-full flex items-center justify-center">
                              <span className="text-sm font-medium text-aalvo-text-primary">{index + 1}</span>
                            </div>
                            <span className="text-micro text-aalvo-text-muted">Experiência {index + 1}</span>
                          </div>
                          <Button 
                            onClick={() => removeExperience(exp.id)}
                            variant="ghost"
                            size="sm"
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-aalvo-text-primary font-medium">Empresa</Label>
                            <Input
                              value={exp.company}
                              onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                              className="input-modern"
                              placeholder="Nome da empresa"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-aalvo-text-primary font-medium">Cargo</Label>
                            <Input
                              value={exp.position}
                              onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                              className="input-modern"
                              placeholder="Título do cargo"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-aalvo-text-primary font-medium">Data de início</Label>
                            <Input
                              type="month"
                              value={exp.startDate}
                              onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                              className="input-modern"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label className="text-aalvo-text-primary font-medium">Data de fim</Label>
                            <Input
                              type="month"
                              value={exp.endDate}
                              onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                              disabled={exp.current}
                              className="input-modern"
                              placeholder={exp.current ? 'Atual' : ''}
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label className="text-aalvo-text-primary font-medium">Descrição das atividades</Label>
                          <Textarea
                            value={exp.description}
                            onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                            className="input-modern min-h-[100px]"
                            placeholder="Descreva suas principais responsabilidades e conquistas..."
                            rows={4}
                          />
                        </div>
                      </div>
                    ))}
                    
                    {resumeData.experience.length === 0 && (
                      <div className="text-center py-12">
                        <Briefcase className="h-12 w-12 text-aalvo-text-muted mx-auto mb-4" />
                        <p className="text-aalvo-text-muted">Nenhuma experiência adicionada ainda</p>
                        <p className="text-sm text-aalvo-text-muted mt-1">Clique em "Adicionar" para começar</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Skills Section */}
              {activeSection === 'skills' && (
                <Card className="card-elevated">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-aalvo-text-primary">
                      <Award className="h-5 w-5" />
                      Habilidades
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex gap-3">
                      <Input
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        placeholder="Digite uma habilidade"
                        className="input-modern flex-1"
                        onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                      />
                      <Button onClick={addSkill} className="btn-primary">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {resumeData.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="inline-flex items-center gap-2 bg-aalvo-accent text-aalvo-text-primary px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-aalvo-accent-hover"
                        >
                          {skill}
                          <button
                            onClick={() => removeSkill(skill)}
                            className="text-aalvo-text-muted hover:text-red-500 transition-colors"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                    
                    {resumeData.skills.length === 0 && (
                      <div className="text-center py-12">
                        <Award className="h-12 w-12 text-aalvo-text-muted mx-auto mb-4" />
                        <p className="text-aalvo-text-muted">Nenhuma habilidade adicionada ainda</p>
                        <p className="text-sm text-aalvo-text-muted mt-1">Digite no campo acima para começar</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Preview Panel */}
          <div className="xl:col-span-4 fade-in-up-delay-3">
            <div className="sticky top-8">
              <Card className="card-elevated">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-aalvo-text-primary">
                    <FileText className="h-5 w-5" />
                    Visualização
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-white border border-aalvo-border-subtle rounded-xl p-8 min-h-[600px] shadow-elegant">
                    <div className="space-y-6 font-serif">
                      {/* Header */}
                      <div className="text-center border-b border-gray-200 pb-6">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">
                          {resumeData.personalInfo.name || 'Seu Nome'}
                        </h1>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p>{resumeData.personalInfo.email} • {resumeData.personalInfo.phone}</p>
                          <p>{resumeData.personalInfo.location}</p>
                        </div>
                      </div>

                      {/* Summary */}
                      {resumeData.personalInfo.summary && (
                        <div>
                          <h2 className="text-lg font-semibold text-gray-900 mb-3 uppercase tracking-wide text-sm">Resumo</h2>
                          <p className="text-gray-700 text-sm leading-relaxed">{resumeData.personalInfo.summary}</p>
                        </div>
                      )}

                      {/* Experience */}
                      {resumeData.experience.length > 0 && (
                        <div>
                          <h2 className="text-lg font-semibold text-gray-900 mb-4 uppercase tracking-wide text-sm">Experiência</h2>
                          <div className="space-y-4">
                            {resumeData.experience.map((exp) => (
                              <div key={exp.id} className="border-l-2 border-gray-200 pl-4">
                                <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                                <p className="text-gray-600 font-medium">{exp.company}</p>
                                <p className="text-gray-500 text-xs mb-2">
                                  {exp.startDate} - {exp.current ? 'Atual' : exp.endDate}
                                </p>
                                {exp.description && (
                                  <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Skills */}
                      {resumeData.skills.length > 0 && (
                        <div>
                          <h2 className="text-lg font-semibold text-gray-900 mb-3 uppercase tracking-wide text-sm">Habilidades</h2>
                          <div className="flex flex-wrap gap-2">
                            {resumeData.skills.map((skill) => (
                              <span key={skill} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
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
        </div>
      </main>
    </div>
  );
};

export default ResumeBuilder;
