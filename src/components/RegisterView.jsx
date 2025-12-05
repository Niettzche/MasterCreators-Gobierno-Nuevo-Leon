import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import mitcLogo from '../assets/gobierno.svg';

// Animation Variants
const stepContainerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  exit: { 
    opacity: 0,
    x: -20,
    transition: { duration: 0.2 }
  }
};

const fieldVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

const titleVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export default function RegisterView() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = 5;

  const [maturity, setMaturity] = useState(3);
  const [delivery, setDelivery] = useState(4);
  const [innovation, setInnovation] = useState(2);
  
  const [selectedGiro, setSelectedGiro] = useState(null);
  const [selectedTech, setSelectedTech] = useState([]);

  const changeStep = (direction) => {
    if (direction === 1 && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else if (direction === -1 && currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else if (direction === 1 && currentStep === totalSteps) {
      setIsSubmitted(true);
    }
  };

  const toggleTech = (tech) => {
    if (selectedTech.includes(tech)) {
      setSelectedTech(selectedTech.filter(t => t !== tech));
    } else {
      setSelectedTech([...selectedTech, tech]);
    }
  };

  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  const steps = [
    { num: 1, label: 'Identidad' },
    { num: 2, label: 'Capacidades' },
    { num: 3, label: 'Evaluación' },
    { num: 4, label: 'Matching' },
    { num: 5, label: 'Confirmar' },
  ];

  if (isSubmitted) {
    return (
      <motion.div
        className="w-full h-full flex flex-col items-center justify-center absolute inset-0 z-50 bg-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute top-[20%] left-[20%] w-96 h-96 bg-success/10 rounded-full blur-[100px]"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3], 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-primary/10 rounded-full blur-[100px]"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Logo Animation */}
        <motion.div
          className="relative z-10 mb-12"
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 1.5 
          }}
        >
          <motion.div 
            className="absolute inset-0 bg-primary/5 rounded-full blur-2xl transform scale-150"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <img src={mitcLogo} alt="MITC Logo" className="w-32 md:w-48 h-auto drop-shadow-[0_0_30px_rgba(255,107,0,0.3)]" />
        </motion.div>

        {/* Text Content */}
        <div className="relative z-10 text-center px-6">
          <motion.h2 
            className="text-4xl md:text-7xl font-bold text-text-main mb-4 tracking-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          >
            Bienvenido al <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-primary bg-300% animate-gradient">
              Ecosistema
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-text-body text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Su registro ha sido recibido exitosamente. Estamos procesando su solicitud para integrarlo a la red de innovación más grande del norte.
          </motion.p>

          <motion.button
            className="mt-12 px-10 py-4 bg-primary text-secondary font-bold rounded-full hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(255,107,0,0.2)] transition-all group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/'}
          >
            <span className="mr-2">Explorar el Directorio</span>
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      id="view-register" 
      className="w-full h-full flex flex-col items-center justify-start absolute inset-0 overflow-y-auto z-10 bg-background-alternate"
    >
      
      <div className="w-full max-w-3xl px-4 py-12 pb-24">
        
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-text-main mb-2"
          >
            Solicitud de Ingreso al Cluster
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-text-body"
          >
            Complete su perfil corporativo para acceder a oportunidades de negocio.
          </motion.p>
        </div>

        <div className="flex justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-0 h-0.5 bg-primary -z-10 transform -translate-y-1/2 transition-all duration-500" style={{ width: `${progress}%` }}></div>
          
          {steps.map((step) => {
            let circleClass = "";
            let labelClass = "";
            let content = step.num;

            if (step.num < currentStep) {
              circleClass = "bg-success shadow-lg shadow-success/20";
              content = "✓";
              labelClass = "text-success";
            } else if (step.num === currentStep) {
              circleClass = "bg-primary shadow-lg shadow-primary/30 transform scale-110";
              labelClass = "text-primary font-bold";
            } else {
              circleClass = "bg-white border-2 border-gray-300 text-gray-400";
              labelClass = "text-gray-400";
            }

            return (
              <div key={step.num} className="relative flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold transition-all ${circleClass}`}>
                  <span className={step.num > currentStep ? "text-gray-500" : "text-white"}>{content}</span>
                </div>
                <span className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium whitespace-nowrap ${labelClass}`}>
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="glass-panel p-8 md:p-10 rounded-2xl shadow-xl relative min-h-[400px] overflow-hidden bg-white">
          
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                variants={stepContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="step-content"
              >
                <motion.h3 variants={titleVariants} className="text-xl font-semibold text-text-main mb-6 border-l-4 border-primary pl-4">
                  Información Corporativa
                </motion.h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={fieldVariants} className="md:col-span-2">
                    <label className="block text-xs font-bold text-text-body uppercase tracking-wider mb-2">Nombre Comercial</label>
                    <input type="text" className="input-field" placeholder="Ej. TechSolutions México" />
                  </motion.div>
                  <motion.div variants={fieldVariants}>
                    <label className="block text-xs font-bold text-text-body uppercase tracking-wider mb-2">Razón Social</label>
                    <input type="text" className="input-field" placeholder="Tech S.A. de C.V." />
                  </motion.div>
                  <motion.div variants={fieldVariants}>
                    <label className="block text-xs font-bold text-text-body uppercase tracking-wider mb-2">RFC / Tax ID</label>
                    <input type="text" className="input-field" placeholder="TES010101XYZ" />
                  </motion.div>
                  <motion.div variants={fieldVariants}>
                    <label className="block text-xs font-bold text-text-body uppercase tracking-wider mb-2">Ciudad Base</label>
                    <select className="input-field">
                      <option>Monterrey</option>
                      <option>CDMX</option>
                      <option>Guadalajara</option>
                      <option>Austin (USA)</option>
                    </select>
                  </motion.div>
                  <motion.div variants={fieldVariants}>
                    <label className="block text-xs font-bold text-text-body uppercase tracking-wider mb-2">Número de Empleados</label>
                    <select className="input-field">
                      <option>1 - 10</option>
                      <option>11 - 50</option>
                      <option>51 - 200</option>
                      <option>200+</option>
                    </select>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                variants={stepContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="step-content"
              >
                <motion.h3 variants={titleVariants} className="text-xl font-semibold text-text-main mb-6 border-l-4 border-primary pl-4">
                  Capacidades Técnicas
                </motion.h3>
                
                <motion.div variants={fieldVariants} className="mb-8">
                  <label className="block text-xs font-bold text-text-body uppercase tracking-wider mb-3">Giro Principal</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {['Desarrollo de Software', 'Infraestructura & Hardware', 'Consultoría TI & Estrategia', 'Ciberseguridad'].map(giro => (
                      <button 
                        key={giro}
                        onClick={() => setSelectedGiro(giro)}
                        className={`p-3 rounded-lg border text-left text-sm transition-all hover:border-primary hover:bg-gray-50 focus:ring-2 focus:ring-primary focus:border-primary 
                          ${selectedGiro === giro ? 'border-primary bg-primary/5 text-primary font-semibold' : 'border-gray-300 bg-white text-text-body'}`}
                      >
                        {giro}
                      </button>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fieldVariants}>
                  <label className="block text-xs font-bold text-text-body uppercase tracking-wider mb-3">Stack Tecnológico (Seleccione múltiples)</label>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'React', 'Node.js', 'AWS', 'Azure', 'Java', 'Docker', 'Kubernetes'].map(tech => (
                      <span 
                        key={tech}
                        onClick={() => toggleTech(tech)}
                        className={`cursor-pointer px-4 py-2 rounded-full border text-sm transition-colors 
                          ${selectedTech.includes(tech) 
                            ? 'bg-primary text-secondary border-primary' 
                            : 'border-gray-300 bg-white text-text-body hover:border-primary hover:text-primary'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                variants={stepContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="step-content"
              >
                <motion.h3 variants={titleVariants} className="text-xl font-semibold text-text-main mb-6 border-l-4 border-primary pl-4">
                  Evaluación de Madurez
                </motion.h3>
                <motion.p variants={fieldVariants} className="text-sm text-text-body mb-8">Autoevaluación del 1 al 5. Esta información se usará para el algoritmo de matching.</motion.p>
                
                <div className="space-y-8">
                  <motion.div variants={fieldVariants} className="group">
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-text-main">Madurez Tecnológica</label>
                      <span className="text-primary font-bold">{maturity}/5</span>
                    </div>
                    <input type="range" min="1" max="5" value={maturity} onChange={(e) => setMaturity(e.target.value)} className="w-full" />
                    <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Nivel de adopción de tecnologías de vanguardia.</p>
                  </motion.div>

                  <motion.div variants={fieldVariants} className="group">
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-text-main">Capacidad de Entrega (Delivery)</label>
                      <span className="text-primary font-bold">{delivery}/5</span>
                    </div>
                    <input type="range" min="1" max="5" value={delivery} onChange={(e) => setDelivery(e.target.value)} className="w-full" />
                    <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Fiabilidad en plazos y calidad.</p>
                  </motion.div>

                  <motion.div variants={fieldVariants} className="group">
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-text-main">Nivel de Innovación</label>
                      <span className="text-primary font-bold">{innovation}/5</span>
                    </div>
                    <input type="range" min="1" max="5" value={innovation} onChange={(e) => setInnovation(e.target.value)} className="w-full" />
                    <p className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Generación de IP propia y R&D.</p>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div
                key="step4"
                variants={stepContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="step-content"
              >
                <motion.h3 variants={titleVariants} className="text-xl font-semibold text-text-main mb-6 border-l-4 border-primary pl-4">
                  Ecosistema Matching
                </motion.h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                  <motion.div variants={fieldVariants} className="bg-background-alternate p-4 rounded-xl border border-gray-200">
                    <h4 className="text-sm font-bold text-success uppercase tracking-wide mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-success"></span> Lo que OFRECE
                    </h4>
                    <textarea className="w-full bg-white border border-gray-300 rounded-lg p-3 text-sm text-text-main h-32 focus:border-success focus:outline-none resize-none" placeholder="Describa sus servicios clave, productos o ventajas competitivas..."></textarea>
                  </motion.div>

                  <motion.div variants={fieldVariants} className="bg-background-alternate p-4 rounded-xl border border-gray-200">
                    <h4 className="text-sm font-bold text-primary uppercase tracking-wide mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span> Lo que BUSCA
                    </h4>
                    <textarea className="w-full bg-white border border-gray-300 rounded-lg p-3 text-sm text-text-main h-32 focus:border-primary focus:outline-none resize-none" placeholder="¿Qué tipo de partners, clientes o tecnologías busca en el cluster?"></textarea>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {currentStep === 5 && (
              <motion.div
                key="step5"
                variants={stepContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="step-content text-center py-10"
              >
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary/20 border border-gray-200 relative"
                >
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <div className="absolute inset-0 rounded-full border border-primary/30 animate-pulse"></div>
                </motion.div>
                <motion.h3 variants={fieldVariants} className="text-2xl font-bold text-text-main mb-2">
                  Perfil Listo para Verificación
                </motion.h3>
                <motion.p variants={fieldVariants} className="text-text-body max-w-md mx-auto mb-8">
                  Su información ha sido estructurada. Al confirmar, su perfil pasará a estado "Pendiente" hasta ser validado por el comité MITC.
                </motion.p>
                
                <motion.div variants={fieldVariants} className="bg-background-alternate rounded-lg p-4 max-w-sm mx-auto text-left border border-gray-200 mb-8">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Score de Completitud</span>
                    <span className="text-success font-bold">95%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-orange-400 w-[95%]"></div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-between mt-10 pt-6 border-t border-gray-200">
            <button 
              id="btn-prev" 
              className={`btn-outline ${currentStep === 1 ? 'opacity-0 pointer-events-none' : ''}`} 
              onClick={() => changeStep(-1)}
            >
              Atrás
            </button>
            <button 
              id="btn-next" 
              className={`btn-primary ${currentStep === totalSteps ? 'bg-success hover:bg-green-600' : ''}`} 
              onClick={() => changeStep(1)}
            >
              {currentStep === totalSteps ? 'Finalizar Registro' : (
                <>
                  Siguiente Paso
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
