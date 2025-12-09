import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import gobiernoLogo from '../../assets/gobierno.svg';

// =========================================================
// COMPONENTE: ProjectSubmissionWizard
// PROPÓSITO:
// Formulario guiado (Wizard) para la postulación de proyectos.
// Cubre Secciones A-F del documento de requerimientos.
// =========================================================

function SubmissionSuccessAnimation({ onComplete }) {
  const text = "SOLICITUD ENVIADA";
  const words = text.split(" ");

  React.useEffect(() => {
    const timer = setTimeout(() => {
        onComplete();
    }, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background-alternate overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#FF6B0040,transparent)]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Decorative Orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] border border-primary/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] border border-secondary/10 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Main Logo Container */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1.5
          }}
          className="relative mb-8"
        >
          {/* Logo Glow Effect */}
          <motion.div 
            className="absolute inset-0 bg-primary/30 blur-3xl rounded-full"
            animate={{ scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <img src={gobiernoLogo} alt="Gobierno Nuevo León" className="w-32 h-32 md:w-48 md:h-48 object-contain relative z-10 drop-shadow-2xl" />
        </motion.div>

        {/* Staggered Text Animation */}
        <div className="overflow-hidden flex gap-3 text-3xl md:text-5xl font-black tracking-tighter text-text-main uppercase">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.5 + (i * 0.1),
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
              className="text-primary"
            >
              {word}
            </motion.span>
          ))}
        </div>
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-6 flex items-center gap-2 text-emerald-600 font-bold bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 shadow-sm"
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            <span>Registro Exitoso</span>
        </motion.div>

        <motion.p
          className="mt-4 text-sm font-medium text-text-body tracking-[0.3em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          Redirigiendo al panel...
        </motion.p>
      </div>
    </motion.div>
  );
}

const STEPS = [
  { id: 1, title: 'Datos Generales', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0c0 .884-.95 2-2 2a2 2 0 100 4 2 2 0 012-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> },
  { id: 2, title: 'Presupuesto', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
  { id: 3, title: 'Indicadores', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> },
  { id: 4, title: 'Documentación', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg> },
];

export default function ProjectSubmissionWizard() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Paso 1
    projectName: '',
    objective: '',
    duration: '',
    // Paso 2
    budgetItems: [
        { id: 1, concept: 'Instructores Especializados', provider: 'TechEdu S.A.', amount: 120000, type: 'Capacitación' },
        { id: 2, concept: 'Material Didáctico', provider: 'Papelería Norte', amount: 35000, type: 'Materiales' },
    ],
    // Paso 3
    indicators: [
        { id: 1, name: 'Empresas Beneficiadas', target: 50, unit: 'Empresas' }
    ]
  });

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const budgetTotal = formData.budgetItems.reduce((acc, item) => acc + item.amount, 0);
  const contribution = budgetTotal * 0.20; // Mock 20% contribution
  const requiredContribution = budgetTotal * 0.15; // Rule: 15%

  return (
    <div className="-m-8 min-h-full bg-slate-50/50">
      <AnimatePresence>
        {isSubmitted && (
            <SubmissionSuccessAnimation onComplete={() => navigate('/cluster-dashboard/proyectos')} />
        )}
      </AnimatePresence>

      {/* Header del Wizard */}
      <div className="bg-white border-b border-slate-200 px-8 py-6 sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-black text-slate-800 tracking-tight">Nueva Solicitud de Proyecto</h1>
              <p className="text-sm text-slate-500 mt-1">Convocatoria: <span className="font-semibold text-orange-600">Fortalecimiento de Clústeres 2025</span></p>
            </div>
            <div className="flex gap-3">
               <button onClick={() => navigate(-1)} className="text-slate-400 hover:text-slate-600 text-sm font-bold px-4 py-2">Cancelar</button>
               <button className="bg-white border border-slate-200 text-slate-600 text-sm font-bold px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors">Guardar Borrador</button>
            </div>
          </div>

          {/* Stepper */}
          <div className="flex justify-between relative">
            {/* Linea de fondo */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-0 -translate-y-1/2 rounded-full"></div>
            {/* Linea de progreso */}
            <motion.div 
                className="absolute top-1/2 left-0 h-1 bg-orange-500 -z-0 -translate-y-1/2 rounded-full origin-left"
                initial={{ width: '0%' }}
                animate={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
                transition={{ duration: 0.5 }}
            ></motion.div>

            {STEPS.map((step, idx) => {
              const isActive = idx + 1 === currentStep;
              const isCompleted = idx + 1 < currentStep;
              return (
                <div key={step.id} className="relative z-10 flex flex-col items-center">
                  <motion.div 
                    animate={{
                        backgroundColor: isActive || isCompleted ? '#f97316' : '#ffffff',
                        borderColor: isActive || isCompleted ? '#f97316' : '#e2e8f0',
                        color: isActive || isCompleted ? '#ffffff' : '#94a3b8'
                    }}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold shadow-sm transition-colors duration-300 ${isActive ? 'ring-4 ring-orange-100' : ''}`}
                  >
                    {isCompleted ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    ) : (
                        step.icon
                    )}
                  </motion.div>
                  <span className={`text-xs font-bold mt-2 uppercase tracking-wide ${isActive ? 'text-orange-600' : 'text-slate-400'}`}>
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Área de Contenido */}
      <div className="max-w-4xl mx-auto p-8 pb-24">
        <AnimatePresence mode="wait">
            <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
            >
                {currentStep === 1 && (
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                        <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-4 mb-6">1. Información del Proyecto</h2>
                        
                        <div className="grid grid-cols-2 gap-6">
                            <div className="col-span-2">
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Nombre del Proyecto</label>
                                <input type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none" placeholder="Ej. Programa de Certificación Tier 2" />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Objetivo General</label>
                                <textarea rows="4" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none" placeholder="Describa el impacto principal..."></textarea>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Duración (Meses)</label>
                                <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none">
                                    <option>6 Meses</option>
                                    <option>12 Meses</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Rubro Principal</label>
                                <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:outline-none">
                                    <option>Capacitación</option>
                                    <option>Certificaciones</option>
                                    <option>Equipamiento</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}

                {currentStep === 2 && (
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-lg font-bold text-slate-800">2. Desglose Presupuestal</h2>
                                <button className="text-sm font-bold text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg hover:bg-orange-100 transition-colors">+ Agregar Partida</button>
                            </div>

                            <table className="w-full text-left text-sm">
                                <thead className="text-slate-500 border-b border-slate-100">
                                    <tr>
                                        <th className="pb-3 font-medium">Concepto</th>
                                        <th className="pb-3 font-medium">Proveedor</th>
                                        <th className="pb-3 font-medium">Rubro</th>
                                        <th className="pb-3 font-medium text-right">Monto</th>
                                        <th className="pb-3 font-medium w-10"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {formData.budgetItems.map(item => (
                                        <tr key={item.id}>
                                            <td className="py-3 font-semibold text-slate-700">{item.concept}</td>
                                            <td className="py-3 text-slate-500">{item.provider}</td>
                                            <td className="py-3"><span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-bold">{item.type}</span></td>
                                            <td className="py-3 text-right font-mono">${item.amount.toLocaleString()}</td>
                                            <td className="py-3 text-right text-red-400 cursor-pointer hover:text-red-600">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Resumen Financiero */}
                        <div className="grid grid-cols-3 gap-6">
                            <div className="bg-slate-800 text-white p-6 rounded-xl shadow-lg shadow-slate-200">
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Monto Total</p>
                                <p className="text-3xl font-black">${budgetTotal.toLocaleString()}</p>
                            </div>
                            <div className={`p-6 rounded-xl border-2 ${contribution >= requiredContribution ? 'bg-emerald-50 border-emerald-100' : 'bg-red-50 border-red-100'}`}>
                                <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${contribution >= requiredContribution ? 'text-emerald-600' : 'text-red-600'}`}>Aportación Privada (20%)</p>
                                <p className={`text-3xl font-black ${contribution >= requiredContribution ? 'text-emerald-700' : 'text-red-700'}`}>${contribution.toLocaleString()}</p>
                                <p className="text-xs mt-2 font-medium opacity-80">Mínimo requerido: ${requiredContribution.toLocaleString()} (15%)</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Solicitado a Gobierno</p>
                                <p className="text-3xl font-black text-slate-800">${(budgetTotal - contribution).toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                )}

                {currentStep === 3 && (
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-slate-800">3. Metas e Indicadores</h2>
                            <button className="text-sm font-bold text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg hover:bg-orange-100 transition-colors">+ Agregar Indicador</button>
                        </div>
                        <div className="space-y-4">
                            {formData.indicators.map(ind => (
                                <div key={ind.id} className="flex items-center gap-4 p-4 border border-slate-100 rounded-xl bg-slate-50">
                                    <div className="bg-white p-3 rounded-lg border border-slate-200">
                                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-slate-800">{ind.name}</h4>
                                        <p className="text-xs text-slate-500">Meta comprometida al finalizar el proyecto</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-2xl font-black text-slate-800">{ind.target}</span>
                                        <span className="text-xs font-bold text-slate-400 ml-1 uppercase">{ind.unit}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {currentStep === 4 && (
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                        <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-4 mb-6">4. Expediente Digital</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {['Acta Constitutiva', 'Poder Legal', 'Comprobante de Domicilio', 'Opinión de Cumplimiento (SAT)', 'Cotizaciones (PDF)', 'Carta de No Duplicidad'].map((doc, i) => (
                                <div key={i} className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-orange-300 transition-all cursor-pointer group">
                                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-white group-hover:shadow-sm transition-all">
                                        <svg className="w-6 h-6 text-slate-400 group-hover:text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                                    </div>
                                    <p className="text-sm font-bold text-slate-700 mb-1">{doc}</p>
                                    <p className="text-[10px] text-slate-400">Arrastre o clic para subir (PDF, Max 5MB)</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer de Navegación */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 z-20">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
            <button 
                onClick={prevStep} 
                disabled={currentStep === 1}
                className="px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                &larr; Anterior
            </button>
            
            {currentStep < STEPS.length ? (
                <button 
                    onClick={nextStep}
                    className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 shadow-lg shadow-slate-200 transition-all flex items-center gap-2"
                >
                    Siguiente Paso &rarr;
                </button>
            ) : (
                <button 
                    onClick={() => setIsSubmitted(true)}
                    className="px-8 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-xl font-bold hover:shadow-orange-500/30 shadow-lg transition-all flex items-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Finalizar y Enviar
                </button>
            )}
        </div>
      </div>
    </div>
  );
}
