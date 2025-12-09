import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// =========================================================
// COMPONENTE: EvaluatorDashboard
// PROPÓSITO:
// Vista principal para el ROL: COMITÉ EVALUADOR.
// Muestra una lista de expedientes de proyectos asignados para su revisión.
// =========================================================

export default function EvaluatorDashboard() {
  const navigate = useNavigate();

  // Mock data for projects assigned to the evaluator
  const projectsToEvaluate = [
    { id: 'proj001', name: 'Innovación en Manufactura Aditiva', cluster: 'Clúster Automotriz', submitted: '2025-11-20', due: '2025-12-15', status: 'Pendiente' },
    { id: 'proj002', name: 'Desarrollo de Software Educativo', cluster: 'Clúster TI', submitted: '2025-11-25', due: '2025-12-18', status: 'Pendiente' },
    { id: 'proj003', name: 'Turismo Sostenible en Región Citrícola', cluster: 'Clúster Turístico', submitted: '2025-11-28', due: '2025-12-20', status: 'En Revisión' },
    { id: 'proj004', name: 'Optimización Logística Puerto de Altura', cluster: 'Clúster Logístico', submitted: '2025-12-01', due: '2025-12-22', status: 'Pendiente' },
  ];

  return (
    <div className="-m-8 p-8 min-h-full w-auto">
      <div className="space-y-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-800">Expedientes Asignados para Evaluación</h2>
            <button 
              className="text-sm text-orange-600 font-semibold hover:text-orange-700 flex items-center gap-1"
              onClick={() => console.log('Ver guía de evaluación')} // Placeholder for future action
            >
              Guía de Evaluación <span>&rarr;</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="text-slate-500 text-sm border-b border-slate-100">
                  <th className="pb-3 font-medium pr-4">Proyecto</th>
                  <th className="pb-3 font-medium pr-4">Clúster</th>
                  <th className="pb-3 font-medium pr-4">Fecha de Envío</th>
                  <th className="pb-3 font-medium pr-4">Fecha Límite</th>
                  <th className="pb-3 font-medium pr-4">Estado</th>
                  <th className="pb-3 font-medium text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {projectsToEvaluate.map(project => (
                  <motion.tr 
                    key={project.id} 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + projectsToEvaluate.indexOf(project) * 0.05 }}
                    className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors last:border-b-0"
                  >
                    <td className="py-4 font-semibold text-slate-700 pr-4">{project.name}</td>
                    <td className="py-4 text-slate-500 pr-4">{project.cluster}</td>
                    <td className="py-4 text-slate-500 pr-4">{project.submitted}</td>
                    <td className="py-4 text-red-500 font-bold pr-4">{project.due}</td>
                    <td className="py-4 pr-4">
                      <span className={`px-2 py-1 rounded text-xs font-bold border ${
                        project.status === 'Pendiente' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                        project.status === 'En Revisión' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                        'bg-slate-50 text-slate-600 border-slate-100'
                      }`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="py-4 text-right">
                      <button 
                        onClick={() => navigate(`/evaluator-dashboard/project/${project.id}`)}
                        className="px-3 py-1.5 bg-orange-600 text-white text-xs font-bold rounded-lg hover:bg-orange-700 transition-colors shadow-sm"
                      >
                        Evaluar
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
