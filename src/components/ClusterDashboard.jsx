import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// =========================================================
// COMPONENTE: ClusterDashboard
// PROPÓSITO:
// Vista principal para el ROL: CLÚSTER (Solicitante).
// Muestra el estado de sus solicitudes de apoyo ("Mis Proyectos"),
// alertas de acciones requeridas y acceso a crear nuevas solicitudes.
// =========================================================

// Mock Data: Proyectos del usuario
const mockProjects = [
  { 
    id: 1, 
    folio: 'NL-2025-0012', 
    name: 'Programa de Certificación IATF 16949', 
    program: 'Fortalecimiento Industrial 2025', 
    date: '2025-02-15', 
    amount: 1200000, 
    status: 'EN_REVISION' 
  },
  { 
    id: 2, 
    folio: 'NL-2025-0045', 
    name: 'Encuentro de Negocios Tier 1', 
    program: 'Vinculación Comercial', 
    date: '2025-03-10', 
    amount: 450000, 
    status: 'BORRADOR' 
  },
  { 
    id: 3, 
    folio: 'NL-2024-0982', 
    name: 'Capacitación en Ciberseguridad Industrial', 
    program: 'Innovación Tecnológica 2024', 
    date: '2024-11-20', 
    amount: 800000, 
    status: 'APROBADO' 
  }
];

// Helper para colores de estatus
const getStatusBadge = (status) => {
  const styles = {
    BORRADOR: 'bg-slate-100 text-slate-600 border-slate-200',
    EN_REVISION: 'bg-blue-50 text-blue-700 border-blue-200',
    REQUIERE_CAMBIOS: 'bg-orange-50 text-orange-700 border-orange-200',
    APROBADO: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    RECHAZADO: 'bg-red-50 text-red-700 border-red-200',
  };
  
  const labels = {
    BORRADOR: 'Borrador',
    EN_REVISION: 'En Revisión',
    REQUIERE_CAMBIOS: 'Requiere Atención',
    APROBADO: 'Aprobado',
    RECHAZADO: 'Rechazado'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${styles[status] || styles.BORRADOR}`}>
      {labels[status] || status}
    </span>
  );
};

export default function ClusterDashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      
      {/* HEADER DE BIENVENIDA */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Mis Proyectos Estratégicos</h1>
          <p className="text-slate-500">Gestione sus solicitudes de apoyo y consulte su estatus en tiempo real.</p>
        </div>
        <button 
          onClick={() => navigate('/register')} // Usamos /register que es donde está el Wizard actualmente
          className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-orange-500/20 transition-all flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          Nueva Solicitud
        </button>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 011.414.586l4 4a1 1 0 01.586 1.414V19a2 2 0 01-2 2z"></path></svg>
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase">Total Solicitado</span>
          </div>
          <h3 className="text-3xl font-bold text-slate-800 mb-1">3</h3>
          <p className="text-sm text-slate-500">Proyectos en historial</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-orange-50 rounded-xl text-orange-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase">En Proceso</span>
          </div>
          <h3 className="text-3xl font-bold text-slate-800 mb-1">1</h3>
          <p className="text-sm text-slate-500">Requiere seguimiento</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase">Aprobado (MXN)</span>
          </div>
          <h3 className="text-3xl font-bold text-slate-800 mb-1">$800k</h3>
          <p className="text-sm text-slate-500">Recursos asignados 2024</p>
        </motion.div>
      </div>

      {/* TABLA DE PROYECTOS */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold text-slate-800">Expedientes Recientes</h3>
          <div className="flex gap-2">
            {/* Filtros Mock */}
            <select className="text-sm border border-slate-200 rounded-lg px-3 py-2 bg-slate-50 focus:outline-none">
              <option>Todos los años</option>
              <option>2025</option>
              <option>2024</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 font-semibold uppercase tracking-wider">
              <tr>
                <th className="p-4">Folio</th>
                <th className="p-4">Proyecto</th>
                <th className="p-4">Programa / Convocatoria</th>
                <th className="p-4 text-right">Monto</th>
                <th className="p-4 text-center">Estatus</th>
                <th className="p-4 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockProjects.map((project) => (
                <tr key={project.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-mono text-slate-600">{project.folio}</td>
                  <td className="p-4 font-medium text-slate-800">{project.name}</td>
                  <td className="p-4 text-slate-500">
                    {project.program}
                    <div className="text-xs text-slate-400 mt-1">Registrado: {project.date}</div>
                  </td>
                  <td className="p-4 text-right font-medium text-slate-700">
                    ${project.amount.toLocaleString()}
                  </td>
                  <td className="p-4 text-center">
                    {getStatusBadge(project.status)}
                  </td>
                  <td className="p-4 text-center">
                    <button className="text-orange-600 hover:text-orange-800 font-medium text-xs border border-orange-200 hover:bg-orange-50 px-3 py-1.5 rounded-lg transition-colors">
                      Ver Detalle
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Paginación Mock */}
        <div className="p-4 border-t border-slate-100 flex justify-center">
          <span className="text-xs text-slate-400">Mostrando 3 de 3 proyectos</span>
        </div>
      </motion.div>

    </div>
  );
}
