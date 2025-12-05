import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

const companiesData = [
  {
    id: 101,
    name: 'Apex Innovations',
    initial: 'AI',
    type: 'Desarrollo de Software',
    verified: true,
    description: 'Líderes en consultoría de IA y soluciones de Machine Learning para la industria 4.0.',
    fullDescription: 'Apex Innovations se especializa en transformar datos complejos en ventajas competitivas tangibles. Nuestro equipo de científicos de datos e ingenieros de software desarrolla algoritmos personalizados que optimizan la producción, predicen tendencias de mercado y automatizan procesos críticos. Trabajamos con tecnologías de vanguardia para asegurar que su empresa esté preparada para el futuro.',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Kubernetes'],
    employees: '50-200',
    reach: 'Internacional',
    location: 'Monterrey, Nuevo León',
    website: 'https://apexinnovations.tech',
    founded: '2018',
    projects: 120
  },
  {
    id: 102,
    name: 'Cloud Tintec',
    initial: 'CT',
    type: 'Infraestructura & Cloud',
    verified: true,
    description: 'Infraestructura cloud híbrida y servicios de ciberseguridad avanzada para el sector financiero.',
    fullDescription: 'Cloud Tintec es su socio estratégico para la transformación digital segura. Ofrecemos arquitectura de nube robusta, migraciones sin interrupciones y una capa de ciberseguridad de grado militar. Nos enfocamos en la resiliencia operativa y el cumplimiento normativo, permitiendo a las instituciones financieras innovar sin riesgos.',
    technologies: ['AWS', 'Azure', 'Security', 'Docker', 'Terraform'],
    employees: '20-50',
    reach: 'Nacional',
    location: 'San Pedro Garza García, NL',
    website: 'https://cloudtintec.mx',
    founded: '2015',
    projects: 85
  },
  {
    id: 103,
    name: 'NovaWeb Systems',
    initial: 'NW',
    type: 'Desarrollo de Software',
    verified: false,
    description: 'Agencia de desarrollo web full-stack especializada en aplicaciones escalables y UX/UI.',
    fullDescription: 'En NovaWeb Systems, creamos experiencias digitales que cautivan. Combinamos diseño UX/UI centrado en el usuario con una ingeniería de software sólida para construir aplicaciones web y móviles rápidas, escalables y visualmente impactantes. Desde startups hasta grandes corporativos, ayudamos a materializar visiones digitales.',
    technologies: ['React', 'Node.js', 'Next.js', 'TypeScript'],
    employees: '10-20',
    reach: 'Local',
    location: 'Monterrey, Nuevo León',
    website: 'https://novawebsystems.com',
    founded: '2020',
    projects: 45
  }
];

export default function DirectoryView() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);
  const [maturityLevel, setMaturityLevel] = useState(3);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [aiSearchInput, setAiSearchInput] = useState('');
  const [aiSearchResults, setAiSearchResults] = useState([]);
  const [showAiResults, setShowAiResults] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null); // State for selected company profile

  const toggleTechnology = (tech) => {
    setSelectedTechnologies(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech) 
        : [...prev, tech]
    );
  };

  const handleSearchSolutions = () => {
    const results = [
      { id: 1, name: 'Quantum Leap Inc.', initial: 'QL', description: 'Expertos en optimización de procesos y desarrollo de algoritmos cuánticos para problemas complejos.', coherence: 92, technologies: ['Python', 'AI', 'Quantum'] },
      { id: 2, name: 'Cloud Architects', initial: 'CA', description: 'Implementación y migración de infraestructuras cloud con enfoque en AWS y Azure, garantizando alta disponibilidad.', coherence: 88, technologies: ['AWS', 'Azure', 'Cloud'] },
      { id: 3, name: 'SecureNet Solutions', initial: 'SN', description: 'Especialistas en ciberseguridad, protección de datos y auditorías de seguridad para entornos empresariales.', coherence: 85, technologies: ['Security', 'Network'] },
      { id: 4, name: 'Digital Growth Hub', initial: 'DGH', description: 'Desarrollo de plataformas web y móviles escalables con tecnologías React y Node.js, optimizadas para el crecimiento digital.', coherence: 80, technologies: ['React', 'Node.js', 'Web'] },
      { id: 5, name: 'Innovate Fintech', initial: 'IF', description: 'Soluciones financieras tecnológicas innovadoras, desarrollo de wallets digitales y pasarelas de pago seguras.', coherence: 75, technologies: ['Fintech', 'Blockchain'] },
    ];
    setAiSearchResults(results);
    setShowAiResults(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      id="view-directory" 
      className="w-full h-full flex flex-col md:flex-row absolute inset-0 z-10 bg-background-alternate"
    >
      
      {/* AI Search Results Modal */}
      <AnimatePresence>
        {showAiResults && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-gray-900/50 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white border border-gray-200 rounded-xl shadow-2xl max-w-4xl w-full p-6 space-y-6 relative"
            >
              <button 
                onClick={() => setShowAiResults(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-text-main transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>

              <h3 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-3">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                Resultados de AI Matchmaker
              </h3>

              <div className="space-y-4">
                {aiSearchResults.map(company => (
                  <motion.div
                    key={company.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * company.id }}
                    className="flex items-start bg-gray-50 border border-gray-200 rounded-lg p-4 gap-4 hover:border-primary/50 transition-colors cursor-pointer"
                    onClick={() => {
                        // Try to find the company in real data, or use the search result data augmented
                        const realCompany = companiesData.find(c => c.id === company.id);
                        const companyProfile = realCompany || {
                            ...company,
                            type: 'AI Match',
                            verified: true,
                            fullDescription: company.description, // Use brief description as full for mock
                            employees: 'N/A',
                            reach: 'N/A',
                            location: 'N/A',
                            website: '#',
                            founded: 'N/A',
                            projects: 0
                        };
                        setSelectedCompany(companyProfile);
                        setShowAiResults(false);
                    }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary text-secondary flex items-center justify-center font-bold shrink-0">
                      {company.initial}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="text-lg font-semibold text-text-main hover:text-primary transition-colors">{company.name}</h4>
                        <span className="text-xs font-mono text-success bg-success/10 px-2 py-0.5 rounded border border-success/20">{company.coherence}% Coherencia</span>
                      </div>
                      <p className="text-sm text-text-body">{company.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {company.technologies.map(tech => (
                            <span key={tech} className="text-[10px] font-medium text-text-body bg-white px-2 py-1 rounded border border-gray-200">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button 
                onClick={() => setShowAiResults(false)}
                className="w-full mt-6 py-3 bg-primary text-secondary font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all"
              >
                Cerrar Resultados
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Company Profile Modal */}
      <AnimatePresence>
        {selectedCompany && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm flex justify-end"
            onClick={() => setSelectedCompany(null)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-full md:w-[600px] h-full bg-white border-l border-gray-200 shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Banner */}
              <div className="h-40 bg-gradient-to-r from-secondary to-primary relative">
                <button 
                  onClick={() => setSelectedCompany(null)}
                  className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-all backdrop-blur-sm"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>

              <div className="px-8 -mt-16 pb-12 relative">
                {/* Header Info */}
                <div className="flex justify-between items-end mb-6">
                  <div className="w-32 h-32 rounded-2xl bg-white border-4 border-white flex items-center justify-center text-4xl font-bold text-primary shadow-xl">
                    {selectedCompany.initial}
                  </div>
                  <div className="flex gap-2 mb-4">
                    <button className="p-2 rounded-lg bg-white border border-gray-200 text-gray-400 hover:text-primary hover:border-primary transition-all shadow-sm">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </button>
                    <button className="p-2 rounded-lg bg-white border border-gray-200 text-gray-400 hover:text-primary hover:border-primary transition-all shadow-sm">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                    </button>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-3xl font-bold text-text-main">{selectedCompany.name}</h2>
                    {selectedCompany.verified && (
                      <span className="bg-success/10 text-success text-xs font-bold px-2 py-1 rounded border border-success/20 uppercase tracking-wider flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Verified
                      </span>
                    )}
                  </div>
                  <p className="text-primary font-medium text-sm">{selectedCompany.type}</p>
                  <p className="text-text-body mt-4 leading-relaxed">{selectedCompany.fullDescription}</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Empleados</div>
                    <div className="text-lg font-semibold text-text-main">{selectedCompany.employees}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Alcance</div>
                    <div className="text-lg font-semibold text-text-main">{selectedCompany.reach}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Ubicación</div>
                    <div className="text-lg font-semibold text-text-main">{selectedCompany.location}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Proyectos</div>
                    <div className="text-lg font-semibold text-text-main">+{selectedCompany.projects}</div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-text-main uppercase tracking-wider mb-4">Stack Tecnológico</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCompany.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-text-body text-sm font-medium shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Button */}
                <button className="w-full py-4 rounded-xl bg-primary text-secondary font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all transform hover:-translate-y-1">
                  Contactar Empresa
                </button>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sidebar de Filtros */}
      <AnimatePresence mode="wait">
        {isFiltersOpen && (
          <motion.aside 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 300, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="border-r border-gray-200 bg-white/80 backdrop-blur-sm overflow-y-auto hidden md:block shrink-0"
          >
            <div className="p-6 space-y-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold text-text-main uppercase tracking-widest">Filtros</h3>
                <button onClick={() => setIsFiltersOpen(false)} className="text-gray-400 hover:text-text-main transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>

              {/* Filtro: Giro Principal */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Giro Principal</h4>
                <div className="space-y-2">
                  {['Desarrollo de Software', 'Infraestructura & Cloud', 'Ciberseguridad', 'Fintech'].map((giro) => (
                    <label key={giro} className="flex items-center gap-3 cursor-pointer group p-2 rounded-md hover:bg-gray-50 transition-colors">
                      <div className="relative flex items-center">
                        <input type="checkbox" className="peer appearance-none w-4 h-4 border border-gray-300 rounded bg-white checked:bg-primary checked:border-primary transition-all" />
                        <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 left-0.5 top-0.5 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span className="text-sm text-text-body group-hover:text-text-main transition-colors">{giro}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Filtro: Tecnologías */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Tecnologías</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'React', 'Node.js', 'AWS', 'Azure', 'Java'].map((tech) => (
                    <button 
                      key={tech} 
                      onClick={() => toggleTechnology(tech)}
                      className={`text-xs px-3 py-1 rounded-full border transition-all ${
                        selectedTechnologies.includes(tech)
                          ? 'border-primary text-primary bg-primary/10 shadow-sm shadow-primary/20'
                          : 'border-gray-300 text-text-body hover:border-primary hover:text-primary hover:bg-primary/5 bg-white'
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filtro: Madurez */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Nivel de Madurez</h4>
                <div className="flex justify-between gap-2 px-1">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <button
                      key={level}
                      onClick={() => setMaturityLevel(level)}
                      className={`w-8 h-8 rounded-full text-xs font-bold transition-all duration-300 border ${
                        maturityLevel === level
                          ? 'bg-primary text-secondary border-transparent shadow-lg shadow-primary/30 scale-110'
                          : 'bg-white text-text-body border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between text-[10px] text-gray-400 mt-1 font-medium uppercase px-1">
                  <span>Emergente</span>
                  <span>Consolidado</span>
                </div>
              </div>

              {/* Búsqueda Semántica AI */}
              <div className="relative group rounded-xl bg-white border border-gray-200 p-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-50 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <h4 className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 uppercase tracking-wider">AI Matchmaker</h4>
                  </div>
                  <p className="text-[10px] text-gray-500 leading-relaxed">
                    Describa su necesidad o problema y nuestra IA encontrará los partners ideales.
                  </p>
                  <textarea 
                    className="w-full bg-white border border-gray-200 rounded-lg p-3 text-xs text-text-body placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none resize-none transition-all"
                    rows="3"
                    placeholder="Ej: Necesito migrar mi infraestructura legacy a la nube con alta disponibilidad..."
                    value={aiSearchInput}
                    onChange={(e) => setAiSearchInput(e.target.value)}
                  ></textarea>
                  <button onClick={handleSearchSolutions} className="w-full py-2 rounded-lg bg-secondary hover:bg-slate-800 border border-secondary text-xs font-semibold text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-secondary/20">
                    <span>Buscar Soluciones</span>
                    <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Contenido Principal */}
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-background-alternate">
        
        {/* Header de la Vista */}
        <header className="px-6 py-5 border-b border-gray-200 bg-white/80 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0 z-20">
          <div className="flex items-center gap-4">
            {!isFiltersOpen && (
              <button onClick={() => setIsFiltersOpen(true)} className="p-2 text-gray-400 hover:text-text-main hover:bg-gray-100 rounded-lg transition-all hidden md:block">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
              </button>
            )}
            <div>
              <h2 className="text-xl font-bold text-text-main tracking-tight">Directorio de Miembros</h2>
              <p className="text-sm text-text-body">Explorando <span className="text-primary font-semibold">342</span> empresas del cluster</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <input type="text" placeholder="Buscar por nombre, servicio..." className="w-full bg-white border border-gray-200 text-text-main text-sm rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-400" />
              <svg className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <button className="px-4 py-2 bg-white hover:bg-gray-50 text-text-body text-sm font-medium rounded-lg border border-gray-200 transition-all whitespace-nowrap flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Exportar
            </button>
          </div>
        </header>

        {/* Grid de Tarjetas */}
        <div className="flex-1 overflow-y-auto p-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {companiesData.map((company) => (
              <motion.div key={company.id} variants={itemVariants} className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-primary font-bold shadow-inner border border-gray-200">
                    {company.initial}
                  </div>
                  {company.verified && (
                    <span className="bg-success/10 text-success text-[10px] font-bold px-2 py-1 rounded border border-success/20 uppercase tracking-wider">Verificado</span>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-text-main mb-1 group-hover:text-primary transition-colors">{company.name}</h3>
                <p className="text-sm text-text-body mb-4 line-clamp-2">{company.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-auto">
                  {company.technologies.slice(0, 2).map((tech) => (
                    <span key={tech} className="text-[10px] font-medium text-text-body bg-gray-50 px-2 py-1 rounded border border-gray-200">{tech}</span>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-gray-400">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    {company.employees}
                  </div>
                  <button 
                    onClick={() => setSelectedCompany(company)}
                    className="text-primary hover:text-orange-600 font-medium transition-colors flex items-center gap-1"
                  >
                    Perfil <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}