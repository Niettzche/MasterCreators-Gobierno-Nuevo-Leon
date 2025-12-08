import React, { useState } from 'react';
import { motion } from 'framer-motion';

// =========================================================
// COMPONENTE: AuditFindings
// PROPÓSITO:
// Gestión de hallazgos de auditoría y generación de reportes.
// Permite al auditor documentar observaciones y seguir su solvencia.
// =========================================================

export default function AuditFindings() {
  const [selectedFinding, setSelectedFinding] = useState(null);

  // Mock Data
  const findings = [
    { 
      id: 1, 
      project: 'Capacitación Dual 2024', 
      cluster: 'Clúster Automotriz', 
      title: 'Falta evidencia fotográfica en entregable 2', 
      risk: 'Medio', 
      status: 'Abierto', 
      date: '2025-03-10',
      description: 'El reporte indica 50 asistentes pero solo hay evidencia de 30 en las listas de asistencia cargadas.'
    },
    { 
      id: 2, 
      project: 'Certificación ISO 9001', 
      cluster: 'Clúster Aeroespacial', 
      title: 'Diferencia en monto de factura vs. pago', 
      risk: 'Alto', 
      status: 'Abierto', 
      date: '2025-03-08',
      description: 'La factura F-992 por $50,000 fue pagada por $52,000. Se requiere aclaración o reintegro.'
    },
    { 
      id: 3, 
      project: 'Foro de Innovación', 
      cluster: 'Clúster de Electrodomésticos', 
      title: 'Retraso en cronograma justificado', 
      risk: 'Bajo', 
      status: 'Solventado', 
      date: '2025-02-15',
      description: 'El evento se movió de fecha por causas de fuerza mayor. Se anexó carta de justificación aceptada.'
    },
  ];

  return (
    <div className="-m-8 p-8 min-h-full w-full font-sans text-slate-900 flex flex-col h-screen">
      
      {/* HEADER */}
      <header className="flex justify-between items-center mb-6 flex-shrink-0">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Hallazgos y Reportes</h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">Gestión de observaciones de auditoría y seguimiento.</p>
        </div>
        <button className="bg-slate-900 text-white px-5 py-2 rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
            Registrar Nuevo Hallazgo
        </button>
      </header>

      <div className="flex gap-6 flex-1 overflow-hidden">
        
        {/* LISTA DE HALLAZGOS (Izquierda) */}
        <div className="w-1/3 flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Buscar por folio, proyecto..." 
                        className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-slate-400 outline-none"
                    />
                    <svg className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                </div>
                <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                    <span className="px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-bold cursor-pointer">Todos</span>
                    <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-bold cursor-pointer hover:bg-slate-50">Abiertos</span>
                    <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-bold cursor-pointer hover:bg-slate-50">Alto Riesgo</span>
                </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-2 space-y-2">
                {findings.map(item => (
                    <div 
                        key={item.id}
                        onClick={() => setSelectedFinding(item)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                            selectedFinding?.id === item.id 
                            ? 'bg-slate-50 border-slate-300 shadow-inner' 
                            : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-200'
                        }`}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border ${
                                item.risk === 'Alto' ? 'bg-red-50 text-red-600 border-red-100' : 
                                item.risk === 'Medio' ? 'bg-amber-50 text-amber-600 border-amber-100' : 'bg-emerald-50 text-emerald-600 border-emerald-100'
                            }`}>
                                {item.risk}
                            </span>
                            <span className="text-xs text-slate-400">{item.date}</span>
                        </div>
                        <h3 className="text-sm font-bold text-slate-800 leading-tight mb-1">{item.title}</h3>
                        <p className="text-xs text-slate-500 truncate">{item.project}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* DETALLE DEL HALLAZGO (Derecha) */}
        <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-y-auto p-8">
            {selectedFinding ? (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={selectedFinding.id}
                >
                    <div className="flex justify-between items-start mb-6 border-b border-slate-100 pb-6">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className={`w-3 h-3 rounded-full ${selectedFinding.status === 'Abierto' ? 'bg-red-500 animate-pulse' : 'bg-emerald-500'}`}></span>
                                <h2 className="text-xl font-bold text-slate-900">OBS-{selectedFinding.id.toString().padStart(3, '0')}</h2>
                            </div>
                            <h1 className="text-2xl font-black text-slate-800 mb-2">{selectedFinding.title}</h1>
                            <p className="text-sm text-slate-500">Proyecto: <span className="font-semibold text-slate-700">{selectedFinding.project}</span> • {selectedFinding.cluster}</p>
                        </div>
                        <div className="text-right">
                            <button className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors">
                                Generar Oficio PDF
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-8 mb-8">
                        <div className="col-span-2 space-y-6">
                            <div>
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Descripción Detallada</h3>
                                <p className="text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    {selectedFinding.description}
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Evidencia Relacionada</h3>
                                <div className="flex gap-3">
                                    <div className="w-24 h-24 bg-slate-100 rounded-lg border border-slate-200 flex flex-col items-center justify-center text-slate-400 cursor-pointer hover:bg-slate-200 transition-colors">
                                        <svg className="w-8 h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                                        <span className="text-[10px] font-bold">Reporte.pdf</span>
                                    </div>
                                    <div className="w-24 h-24 bg-slate-100 rounded-lg border border-slate-200 flex flex-col items-center justify-center text-slate-400 cursor-pointer hover:bg-slate-200 transition-colors">
                                        <svg className="w-8 h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                                        <span className="text-[10px] font-bold">Foto 1.jpg</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1 bg-slate-50 rounded-xl p-6 border border-slate-100 h-fit">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Acciones de Auditoría</h3>
                            
                            <div className="space-y-3">
                                <label className="block text-sm font-bold text-slate-700">Estado del Hallazgo</label>
                                <select className="w-full p-2 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-slate-400">
                                    <option>Abierto (Requiere Solventación)</option>
                                    <option>En Revisión</option>
                                    <option>Solventado</option>
                                    <option>No Solventado (Reintegro)</option>
                                </select>

                                <label className="block text-sm font-bold text-slate-700 mt-4">Asignar a</label>
                                <select className="w-full p-2 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-slate-400">
                                    <option>Comité Técnico</option>
                                    <option>Jurídico</option>
                                    <option>Finanzas</option>
                                </select>

                                <button className="w-full mt-6 bg-slate-900 text-white py-2 rounded-lg font-bold text-sm hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
                                    Guardar Cambios
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-100 pt-6">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Bitácora de Seguimiento</h3>
                        <div className="space-y-4 pl-4 border-l-2 border-slate-100">
                            <div className="relative">
                                <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-slate-300 border-2 border-white"></div>
                                <p className="text-xs text-slate-400 mb-1">10 Mar 2025 • 14:30</p>
                                <p className="text-sm text-slate-700">Hallazgo registrado por <strong>Auditor Interno</strong>.</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-orange-400 border-2 border-white"></div>
                                <p className="text-xs text-slate-400 mb-1">11 Mar 2025 • 09:15</p>
                                <p className="text-sm text-slate-700">Notificación enviada al Clúster Automotriz. Plazo de respuesta: 5 días hábiles.</p>
                            </div>
                        </div>
                    </div>

                </motion.div>
            ) : (
                <div className="h-full flex flex-col items-center justify-center text-slate-300">
                    <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                    <p className="text-lg font-bold">Seleccione un hallazgo para ver el detalle</p>
                </div>
            )}
        </div>

      </div>
    </div>
  );
}
