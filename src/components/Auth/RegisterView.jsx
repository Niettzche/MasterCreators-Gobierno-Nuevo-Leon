import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import mitcLogo from '../../assets/MITC.svg';

// =========================================================
// COMPONENTE: RegisterView
// PROPÓSITO:
// Asistente (Wizard) de registro multi-pasos para la
// postulación de proyectos en la Ventanilla Digital.
// Este componente encapsula la lógica de captura
// de datos para una solicitud de apoyo.
// =========================================================

const stepContainerVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      duration: 0.4
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

export default function RegisterView() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = 5;

  // Form State
  const [formData, setFormData] = useState({
    // A. Identidad
    rfc: '', razonsocial: '', domicilio: '', municipio: 'Monterrey', giro: '', contacto: '', replegal: '',
    // B. Proyecto
    nombreProyecto: '', programa: 'Proyectos Estratégicos 2025', rubro: '', resumen: '',
    fechaInicio: '', fechaFin: '',
    // C. Presupuesto
    montoTotal: 0, montoSolicitado: 0, aportacion: 0,
    partidas: [],
    // D. Indicadores
    metaBeneficiarios: 0, metaEmpleos: 0,
    // E. Cuenta
    banco: '', clabe: ''
  });

  const [partidaTemp, setPartidaTemp] = useState({ concepto: '', costo: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addPartida = () => {
    if (partidaTemp.concepto && partidaTemp.costo) {
      setFormData(prev => ({
        ...prev,
        partidas: [...prev.partidas, { ...partidaTemp, id: Date.now() }]
      }));
      setPartidaTemp({ concepto: '', costo: '' });
    }
  };

  const changeStep = (direction) => {
    if (direction === 1 && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else if (direction === -1 && currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else if (direction === 1 && currentStep === totalSteps) {
      setIsSubmitted(true);
    }
  };

  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  const steps = [
    { num: 1, label: 'Identidad' },
    { num: 2, label: 'Proyecto' },
    { num: 3, label: 'Presupuesto' },
    { num: 4, label: 'Indicadores' },
    { num: 5, label: 'Documentos' },
  ];

  if (isSubmitted) {
    return (
      <motion.div
        className="w-full min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-2xl w-full border border-slate-100"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
        >
          <motion.div 
            className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
             <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </motion.div>
          
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Solicitud Recibida</h2>
          <p className="text-slate-600 text-lg mb-8">
            Su proyecto <span className="font-semibold text-orange-600">"{formData.nombreProyecto}"</span> ha sido registrado con el folio <span className="font-mono bg-slate-100 px-2 py-1 rounded">NL-2025-0042</span>.
            <br/><br/>
            El Comité Técnico validará su documentación en un plazo máximo de 5 días hábiles.
          </p>

          <button
            className="px-8 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all"
            onClick={() => window.location.href = '/'}
          >
            Volver al Directorio
          </button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] text-slate-800 font-sans flex flex-col items-center py-10 px-4 md:px-8">
      
      {/* Header */}
      <header className="w-full max-w-5xl flex justify-between items-center mb-12">
        <div className="flex items-center gap-4">
          <img src={mitcLogo} alt="Logo" className="h-12 w-auto" />
          <div className="hidden md:block h-8 w-px bg-slate-300"></div>
          <div className="hidden md:block">
            <h1 className="text-lg font-bold text-slate-900 leading-tight">Ventanilla Digital</h1>
            <p className="text-xs text-slate-500 font-medium tracking-wide">GOBIERNO DEL ESTADO DE NUEVO LEÓN</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-orange-600">Convocatoria 2025</p>
          <p className="text-xs text-slate-400">Cierre: 30 de Diciembre</p>
        </div>
      </header>

      {/* Progress Stepper */}
      <div className="w-full max-w-4xl mb-10 relative px-4">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-10 transform -translate-y-1/2 rounded-full"></div>
        <motion.div 
          className="absolute top-1/2 left-0 h-1 bg-orange-500 -z-10 transform -translate-y-1/2 rounded-full transition-all duration-500" 
          style={{ width: `${progress}%` }}
        />
        
        <div className="flex justify-between w-full">
          {steps.map((step) => {
            const isActive = step.num === currentStep;
            const isCompleted = step.num < currentStep;
            
            return (
              <div key={step.num} className="relative flex flex-col items-center group cursor-default">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 z-10 border-4
                    ${isActive ? 'bg-orange-600 border-orange-200 text-white scale-110 shadow-lg shadow-orange-500/30' : 
                      isCompleted ? 'bg-slate-900 border-slate-900 text-white' : 'bg-white border-slate-200 text-slate-400'}
                  `}
                >
                  {isCompleted ? '✓' : step.num}
                </div>
                <span className={`absolute -bottom-8 text-xs font-semibold transition-colors duration-300 ${isActive ? 'text-orange-600' : 'text-slate-400'}`}>
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Form Card */}
      <motion.div 
        className="w-full max-w-4xl bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {/* Form Content Area */}
        <div className="p-8 md:p-12 min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: IDENTIDAD */}
            {currentStep === 1 && (
              <motion.div key="step1" variants={stepContainerVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900">Identidad del Solicitante</h2>
                  <p className="text-slate-500">Confirme los datos fiscales y operativos de la entidad solicitante.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Razón Social / Nombre del Clúster</label>
                    <input 
                      name="razonsocial" value={formData.razonsocial} onChange={handleInputChange}
                      type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all" placeholder="Ej. Clúster Automotriz de Nuevo León A.C." 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">RFC</label>
                    <input 
                      name="rfc" value={formData.rfc} onChange={handleInputChange}
                      type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" placeholder="AAA010101AAA" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Giro / Sector</label>
                    <select name="giro" value={formData.giro} onChange={handleInputChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none">
                      <option value="">Seleccione...</option>
                      <option value="automotriz">Automotriz</option>
                      <option value="electrodomesticos">Electrodomésticos</option>
                      <option value="ti">Tecnologías de Información</option>
                      <option value="agro">Agroalimentario</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Domicilio Fiscal Completo</label>
                    <input 
                      name="domicilio" value={formData.domicilio} onChange={handleInputChange}
                      type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Calle, Número, Colonia, CP" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Nombre Representante Legal</label>
                    <input 
                      name="replegal" value={formData.replegal} onChange={handleInputChange}
                      type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Contacto Operativo</label>
                    <input 
                      name="contacto" value={formData.contacto} onChange={handleInputChange}
                      type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Quién gestiona el proyecto"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2: PROYECTO */}
            {currentStep === 2 && (
              <motion.div key="step2" variants={stepContainerVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                 <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900">Datos del Proyecto</h2>
                  <p className="text-slate-500">Defina el alcance, objetivos y cronograma de la iniciativa.</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Nombre del Proyecto</label>
                    <input 
                      name="nombreProyecto" value={formData.nombreProyecto} onChange={handleInputChange}
                      type="text" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none font-medium text-lg" placeholder="Ej. Programa de Certificación en Industria 4.0" 
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Rubro Principal</label>
                      <select name="rubro" value={formData.rubro} onChange={handleInputChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none">
                        <option value="">Seleccione...</option>
                        <option value="capacitacion">Capacitación Especializada</option>
                        <option value="certificacion">Certificaciones de Calidad</option>
                        <option value="vinculacion">Eventos de Vinculación</option>
                        <option value="equipamiento">Equipamiento Tecnológico</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Convocatoria</label>
                      <input 
                        value={formData.programa} disabled
                        type="text" className="w-full p-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-500 cursor-not-allowed" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Resumen Ejecutivo</label>
                    <textarea 
                      name="resumen" value={formData.resumen} onChange={handleInputChange}
                      rows="4" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none resize-none" placeholder="Describa brevemente el problema a resolver y la solución propuesta..."
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Fecha Inicio</label>
                      <input name="fechaInicio" value={formData.fechaInicio} onChange={handleInputChange} type="date" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Fecha Fin</label>
                      <input name="fechaFin" value={formData.fechaFin} onChange={handleInputChange} type="date" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3: PRESUPUESTO */}
            {currentStep === 3 && (
              <motion.div key="step3" variants={stepContainerVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900">Presupuesto y Financiamiento</h2>
                  <p className="text-slate-500">Desglose las partidas presupuestales. La aportación privada debe ser al menos el 15%.</p>
                </div>

                {/* Resumen Financiero */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Monto Total</p>
                    <p className="text-xl font-bold text-slate-900">${formData.partidas.reduce((acc, item) => acc + Number(item.costo), 0).toLocaleString()}</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                    <p className="text-xs text-orange-600 uppercase tracking-wider">Solicitado (85%)</p>
                    <p className="text-xl font-bold text-orange-700">${(formData.partidas.reduce((acc, item) => acc + Number(item.costo), 0) * 0.85).toLocaleString()}</p>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                    <p className="text-xs text-emerald-600 uppercase tracking-wider">Aportación (15%)</p>
                    <p className="text-xl font-bold text-emerald-700">${(formData.partidas.reduce((acc, item) => acc + Number(item.costo), 0) * 0.15).toLocaleString()}</p>
                  </div>
                </div>

                {/* Add Partida Form */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6">
                  <h3 className="text-sm font-bold text-slate-700 mb-3">Agregar Partida</h3>
                  <div className="flex gap-4">
                    <input 
                      type="text" placeholder="Concepto (ej. Renta de Salón)" 
                      className="flex-1 p-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-orange-500"
                      value={partidaTemp.concepto}
                      onChange={(e) => setPartidaTemp({...partidaTemp, concepto: e.target.value})}
                    />
                    <input 
                      type="number" placeholder="Costo Unitario" 
                      className="w-32 p-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-orange-500"
                      value={partidaTemp.costo}
                      onChange={(e) => setPartidaTemp({...partidaTemp, costo: e.target.value})}
                    />
                    <button 
                      onClick={addPartida}
                      className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 text-sm font-medium"
                    >
                      + Agregar
                    </button>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-hidden rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-slate-500">
                      <tr>
                        <th className="p-3 font-medium">Concepto</th>
                        <th className="p-3 font-medium">Rubro</th>
                        <th className="p-3 font-medium text-right">Subtotal</th>
                        <th className="p-3 font-medium text-center">Acción</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {formData.partidas.length === 0 ? (
                        <tr>
                          <td colSpan="4" className="p-6 text-center text-slate-400 italic">No hay partidas registradas</td>
                        </tr>
                      ) : (
                        formData.partidas.map((item) => (
                          <tr key={item.id} className="hover:bg-slate-50">
                            <td className="p-3 text-slate-700">{item.concepto}</td>
                            <td className="p-3 text-slate-500">{formData.rubro || 'General'}</td>
                            <td className="p-3 text-right font-mono text-slate-700">${Number(item.costo).toLocaleString()}</td>
                            <td className="p-3 text-center text-red-500 cursor-pointer hover:text-red-700">Eliminar</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

             {/* STEP 4: INDICADORES */}
             {currentStep === 4 && (
              <motion.div key="step4" variants={stepContainerVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900">Indicadores de Impacto</h2>
                  <p className="text-slate-500">Defina las metas cuantitativas que se compromete a cumplir.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                      </div>
                      <h3 className="font-bold text-slate-700">Beneficiarios</h3>
                    </div>
                    <label className="block text-sm text-slate-500 mb-2">Meta de Personas/Empresas a atender</label>
                    <input 
                      name="metaBeneficiarios" value={formData.metaBeneficiarios} onChange={handleInputChange}
                      type="number" className="w-full p-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-2xl font-bold text-center"
                    />
                  </div>

                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                      </div>
                      <h3 className="font-bold text-slate-700">Competitividad</h3>
                    </div>
                    <label className="block text-sm text-slate-500 mb-2">Meta de Incremento en Ventas (%)</label>
                    <input 
                      name="metaEmpleos" value={formData.metaEmpleos} onChange={handleInputChange}
                      type="number" className="w-full p-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-2xl font-bold text-center"
                    />
                  </div>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 text-orange-800 text-sm">
                  <span className="font-bold">Nota:</span> El cumplimiento de estas metas será auditado al cierre del proyecto. Asegúrese de que sean realistas y medibles.
                </div>
              </motion.div>
             )}

             {/* STEP 5: DOCUMENTOS */}
             {currentStep === 5 && (
               <motion.div key="step5" variants={stepContainerVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                 <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900">Expediente Digital</h2>
                  <p className="text-slate-500">Cargue la documentación requerida en formato PDF.</p>
                </div>

                <div className="space-y-4">
                  {[
                    "Acta Constitutiva del Clúster",
                    "Poder del Representante Legal",
                    "Constancia de Situación Fiscal (Vigente)",
                    "Opinión de Cumplimiento SAT (Positiva)",
                    "Carátula Bancaria (Cuenta Exclusiva)",
                    "Cotizaciones de Proveedores"
                  ].map((doc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-orange-300 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-slate-400">
                          PDF
                        </div>
                        <div>
                          <p className="font-semibold text-slate-700 text-sm">{doc}</p>
                          <p className="text-xs text-slate-400">Max 5MB</p>
                        </div>
                      </div>
                      <button className="px-4 py-2 text-sm font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
                        Subir
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100">
                   <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-5 h-5 text-orange-600 rounded border-gray-300 focus:ring-orange-500" />
                      <span className="text-sm text-slate-600">
                        Declaro bajo protesta de decir verdad que la información proporcionada es verídica y cuento con las facultades legales para realizar esta solicitud a nombre del Clúster.
                      </span>
                   </label>
                </div>
               </motion.div>
             )}

          </AnimatePresence>
        </div>

        {/* Footer Controls */}
        <div className="px-8 py-6 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
          <button 
            onClick={() => changeStep(-1)}
            disabled={currentStep === 1}
            className={`px-6 py-2.5 rounded-xl font-medium transition-all
              ${currentStep === 1 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-200'}`}
          >
            Atrás
          </button>
          
          <button 
            onClick={() => changeStep(1)}
            className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold shadow-lg shadow-orange-500/20 transition-all flex items-center gap-2"
          >
            {currentStep === totalSteps ? 'Firmar y Enviar' : 'Siguiente'}
            {currentStep !== totalSteps && (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
