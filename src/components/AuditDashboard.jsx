import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// =========================================================
// COMPONENTE: AuditDashboard
// PROPÓSITO:
// Vista principal para el ROL: AUDITORÍA / ÓRGANO INTERNO DE CONTROL.
// Muestra herramientas de consulta, trazabilidad y auditoría de expedientes.
// =========================================================

export default function AuditDashboard() {
  const navigate = useNavigate();

  // Mock data for recently closed projects available for audit
  const auditableProjects = [
    { id: 'aud001', project: 'Programa de Proveedores Locales 2024', cluster: 'Clúster de Herramentales', closedDate: '2025-01-15', status: 'Cerrado - Listo para Auditoría', riskLevel: 'Bajo' },
    { id: 'aud002', project: 'Diplomado en Gestión Energética', cluster: 'Clúster de Energía', closedDate: '2025-02-20', status: 'En Proceso de Cierre', riskLevel: 'Medio' },
    { id: 'aud003', project: 'Feria Internacional de Biotecnología', cluster: 'Biocluster', closedDate: '2025-03-05', status: 'Cerrado - Con Observaciones', riskLevel: 'Alto' },
  ];

  return (
    <div className="-m-8 p-8 min-h-full w-auto">
      <div className="space-y-8 w-full">
      
      {/* KPI GRID - Auditoría */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full">
        
        {/* KPI 1: Total Expedientes Cerrados */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-semibold text-slate-500">Expedientes Cerrados (2024-2025)</span>
            <div className="bg-slate-100 p-2 rounded-lg text-slate-600">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">42</div>
          <div className="flex items-center gap-1 text-sm font-medium text-slate-500">
            <span>Disponibles para revisión</span>
          </div>
        </motion.div>

        {/* KPI 2: Observaciones Abiertas */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-semibold text-slate-500">Observaciones Abiertas</span>
            <div className="bg-red-50 p-2 rounded-lg text-red-600">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">7</div>
          <div className="flex items-center gap-1 text-sm font-medium text-red-500">
            <span>3 críticas pendientes de solventar</span>
          </div>
        </motion.div>

        {/* KPI 3: Buscador Rápido */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 shadow-sm flex flex-col justify-center"
        >
          <h3 className="text-lg font-bold text-indigo-900 mb-2">Consulta de Expediente</h3>
          <p className="text-sm text-indigo-700 mb-4">Busque por folio, nombre del proyecto o RFC del clúster.</p>
          <div className="relative">
             <input 
               type="text" 
               placeholder="Ingrese folio o palabras clave..." 
               className="w-full pl-4 pr-10 py-2 rounded-lg border-indigo-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
             />
             <button className="absolute right-2 top-1.5 text-indigo-500 hover:text-indigo-700">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
             </button>
          </div>
        </motion.div>
      </section>

      {/* TABLA DE PROYECTOS AUDITABLES */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6"
      >
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-800">Proyectos Recientes (Ciclo Cerrado)</h2>
             <div className="flex gap-2">
               <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50">Filtros Avanzados</button>
               <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50">Exportar Reporte</button>
             </div>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="text-slate-500 text-sm border-b border-slate-100">
                        <th className="pb-3 font-medium">Proyecto</th>
                        <th className="pb-3 font-medium">Clúster</th>
                        <th className="pb-3 font-medium">Fecha Cierre</th>
                        <th className="pb-3 font-medium">Nivel Riesgo</th>
                        <th className="pb-3 font-medium">Estado</th>
                        <th className="pb-3 font-medium text-right">Acción</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {auditableProjects.map(project => (
                       <tr key={project.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors last:border-0">
                        <td className="py-4 font-semibold text-slate-700">{project.project}</td>
                        <td className="py-4 text-slate-500">{project.cluster}</td>
                        <td className="py-4 text-slate-500">{project.closedDate}</td>
                        <td className="py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-bold border ${
                            project.riskLevel === 'Alto' ? 'bg-red-50 text-red-600 border-red-100' :
                            project.riskLevel === 'Medio' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                            'bg-emerald-50 text-emerald-600 border-emerald-100'
                          }`}>
                            {project.riskLevel}
                          </span>
                        </td>
                        <td className="py-4 text-slate-600 text-xs">{project.status}</td>
                        <td className="py-4 text-right">
                            <button className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-sm">
                                Auditar
                            </button>
                        </td>
                    </tr> 
                    ))}
                </tbody>
            </table>
        </div>
      </motion.div>

    </div>
  </div>
  );
}
