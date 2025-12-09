import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';

// =========================================================
// COMPONENTE: EvaluationRoom
// PROPÓSITO:
// Espacio de trabajo para que el Comité Evaluador revise
// un proyecto específico. Interfaz de pantalla dividida.
// =========================================================

export default function EvaluationRoom() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('resumen');
  const [scores, setScores] = useState({
    impacto: '',
    viabilidad: '',
    presupuesto: '',
    metodologia: ''
  });

  // Mock Project Data
  const project = {
    id: id || 'proj001',
    title: 'Innovación en Manufactura Aditiva',
    cluster: 'Clúster Automotriz',
    amount: '$1,250,000.00',
    submissionDate: '2025-11-20',
    description: 'Implementación de un centro de diseño y prototipado rápido para PYMES del sector automotriz, con el objetivo de reducir tiempos de desarrollo en un 40%.',
    objectives: [
        'Capacitar a 50 ingenieros en diseño 3D.',
        'Generar 5 prototipos funcionales para empresas Tier 2.',
        'Vincular a 10 empresas con proveedores de tecnología.'
    ],
    documents: [
        { name: 'Proyecto Técnico.pdf', size: '2.4 MB' },
        { name: 'Presupuesto Desglosado.xlsx', size: '1.1 MB' },
        { name: 'Cartas de Intención.pdf', size: '3.5 MB' },
        { name: 'CV del Equipo.pdf', size: '0.8 MB' }
    ]
  };

  const handleScoreChange = (criteria, value) => {
    setScores(prev => ({ ...prev, [criteria]: value }));
  };

  const calculateTotal = () => {
    const values = Object.values(scores).map(v => Number(v) || 0);
    return values.reduce((a, b) => a + b, 0);
  };

  return (
    <div className="-m-8 flex flex-col bg-slate-100 h-[calc(100vh-85px)] overflow-hidden rounded-tl-2xl border-l border-t border-slate-200">
      
      {/* TOP BAR */}
      <header className="bg-white border-b border-slate-200 px-6 py-3 flex justify-between items-center shadow-sm z-20">
        <div className="flex items-center gap-4">
            <div>
                <h1 className="text-sm font-bold text-slate-800 leading-tight">{project.title}</h1>
                <p className="text-[10px] text-slate-500">{project.cluster} • Solicitud #{project.id.toUpperCase()}</p>
            </div>
        </div>
        <div className="flex items-center gap-4">
            <div className="text-right mr-4">
                <p className="text-[10px] text-slate-400 uppercase tracking-wider">Puntaje Actual</p>
                <p className="text-xl font-black text-orange-500 leading-none">{calculateTotal()}<span className="text-xs text-slate-500 font-normal">/100</span></p>
            </div>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors shadow-lg shadow-emerald-500/20">
                Emitir Dictamen
            </button>
        </div>
      </header>

      {/* MAIN SPLIT VIEW */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* LEFT: EXPEDIENTE VIEWER */}
        <div className="w-7/12 bg-slate-50 flex flex-col border-r border-slate-200">
            {/* Tabs */}
            <div className="flex border-b border-slate-200 bg-white px-4">
                {['resumen', 'documentos', 'presupuesto'].map(tab => (
                    <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-3 text-xs font-bold uppercase tracking-wide border-b-2 transition-colors ${
                            activeTab === tab 
                            ? 'border-orange-500 text-orange-600' 
                            : 'border-transparent text-slate-500 hover:text-slate-800'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content Viewer */}
            <div className="flex-1 overflow-y-auto p-8">
                {activeTab === 'resumen' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                        <h2 className="text-lg font-bold text-slate-800 mb-4">Resumen Ejecutivo</h2>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 text-justify">
                            {project.description}
                        </p>
                        
                        <h3 className="text-sm font-bold text-slate-800 mb-3">Objetivos Específicos</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            {project.objectives.map((obj, i) => (
                                <li key={i} className="text-sm text-slate-600">{obj}</li>
                            ))}
                        </ul>

                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">Datos Clave</h4>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="block text-slate-400 text-xs">Monto Solicitado</span>
                                    <span className="font-bold text-slate-800">{project.amount}</span>
                                </div>
                                <div>
                                    <span className="block text-slate-400 text-xs">Fecha Envío</span>
                                    <span className="font-bold text-slate-800">{project.submissionDate}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {activeTab === 'documentos' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-2 gap-4">
                        {project.documents.map((doc, i) => (
                            <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 hover:border-orange-300 cursor-pointer transition-all group">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500 border border-red-100">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                                    </div>
                                    <div className="flex-1 overflow-hidden">
                                        <p className="font-bold text-slate-700 text-sm truncate">{doc.name}</p>
                                        <p className="text-xs text-slate-400">{doc.size}</p>
                                    </div>
                                </div>
                                <button className="w-full py-2 bg-slate-50 text-slate-600 text-xs font-bold rounded-lg group-hover:bg-slate-100 transition-colors">
                                    Visualizar
                                </button>
                            </div>
                        ))}
                    </motion.div>
                )}

                {activeTab === 'presupuesto' && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center h-full text-slate-400">
                        <p>Vista detallada del presupuesto...</p>
                    </motion.div>
                )}
            </div>
        </div>

        {/* RIGHT: EVALUATION FORM */}
        <div className="w-5/12 bg-white flex flex-col shadow-xl z-10">
            <div className="p-6 bg-slate-50 border-b border-slate-200">
                <h2 className="text-lg font-bold text-slate-800">Rúbrica de Evaluación</h2>
                <p className="text-xs text-slate-500 mt-1">Asigne un puntaje del 0 al 25 para cada criterio.</p>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
                
                {/* Criterio 1 */}
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-bold text-slate-700">1. Impacto Estratégico</label>
                        <span className="text-xs font-bold bg-slate-100 px-2 py-1 rounded text-slate-600">Max 25 pts</span>
                    </div>
                    <p className="text-xs text-slate-500 mb-3 text-justify">
                        El proyecto se alinea con los objetivos del sector y genera un beneficio tangible para la industria.
                    </p>
                    <input 
                        type="number" max="25" min="0" 
                        value={scores.impacto}
                        onChange={(e) => handleScoreChange('impacto', e.target.value)}
                        className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none font-bold text-lg text-center"
                        placeholder="0"
                    />
                </div>

                {/* Criterio 2 */}
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-bold text-slate-700">2. Viabilidad Técnica</label>
                        <span className="text-xs font-bold bg-slate-100 px-2 py-1 rounded text-slate-600">Max 25 pts</span>
                    </div>
                    <p className="text-xs text-slate-500 mb-3 text-justify">
                        Los objetivos son alcanzables en el tiempo propuesto y con los recursos solicitados.
                    </p>
                    <input 
                        type="number" max="25" min="0"
                        value={scores.viabilidad}
                        onChange={(e) => handleScoreChange('viabilidad', e.target.value)}
                        className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none font-bold text-lg text-center"
                        placeholder="0"
                    />
                </div>

                {/* Criterio 3 */}
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-bold text-slate-700">3. Coherencia Presupuestal</label>
                        <span className="text-xs font-bold bg-slate-100 px-2 py-1 rounded text-slate-600">Max 25 pts</span>
                    </div>
                    <p className="text-xs text-slate-500 mb-3 text-justify">
                        Los costos unitarios están dentro de mercado y la aportación privada cumple con las reglas.
                    </p>
                    <input 
                        type="number" max="25" min="0"
                        value={scores.presupuesto}
                        onChange={(e) => handleScoreChange('presupuesto', e.target.value)}
                        className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none font-bold text-lg text-center"
                        placeholder="0"
                    />
                </div>

                {/* Criterio 4 */}
                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-bold text-slate-700">4. Metodología y Equipo</label>
                        <span className="text-xs font-bold bg-slate-100 px-2 py-1 rounded text-slate-600">Max 25 pts</span>
                    </div>
                    <p className="text-xs text-slate-500 mb-3 text-justify">
                        El equipo de trabajo cuenta con la experiencia necesaria para la ejecución.
                    </p>
                    <input 
                        type="number" max="25" min="0"
                        value={scores.metodologia}
                        onChange={(e) => handleScoreChange('metodologia', e.target.value)}
                        className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none font-bold text-lg text-center"
                        placeholder="0"
                    />
                </div>

                {/* Comentarios */}
                <div className="pt-4 border-t border-slate-100">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Comentarios y Observaciones</label>
                    <textarea 
                        rows="4" 
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                        placeholder="Escriba aquí sus observaciones para el Comité Técnico..."
                    ></textarea>
                </div>

            </div>
        </div>

      </div>
    </div>
  );
}
