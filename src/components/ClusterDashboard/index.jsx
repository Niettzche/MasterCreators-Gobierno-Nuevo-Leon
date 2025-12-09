import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// =========================================================
// COMPONENTE: ClusterDashboard
// PROPÓSITO:
// Vista principal para el ROL: CLÚSTER (Solicitante).
// Refleja la estructura de la "Plataforma Integral":
// - Módulo A: Directorio (Perfil y Empresas)
// - Módulo B: Ventanilla Digital (Proyectos y Apoyos)
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
    <div className="-m-8 p-8 w-[calc(100%+4rem)] space-y-8">
      
      {/* HEADER PRINCIPAL DE LA PLATAFORMA */}
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-50 to-transparent rounded-full -mr-20 -mt-20 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-50 to-transparent rounded-full -ml-20 -mb-20 opacity-60"></div>

        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-2">
            Plataforma Integral de Clústeres
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            Gobierno del Estado de Nuevo León
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
             <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-sm font-semibold border border-slate-200">
               Clúster Automotriz de Nuevo León, A.C.
             </span>
             <span className="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-sm font-semibold border border-green-200 flex items-center gap-2">
               <span className="w-2 h-2 bg-green-500 rounded-full"></span>
               Estatus: Activo
             </span>
          </div>
        </div>
      </div>

      {/* SECCIÓN DE MÓDULOS (A y B) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* MÓDULO A: DIRECTORIO */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col"
        >
            <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-slate-800">Directorio de Clústeres</h2>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Módulo A</p>
                    </div>
                </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col gap-4">
                <p className="text-slate-600 text-sm">
                    Gestione la información institucional, órganos de gobierno y el padrón de empresas asociadas.
                </p>
                
                <div className="space-y-3 mt-2">
                    <div className="flex items-center justify-between text-sm p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <span className="text-slate-600 font-medium">Perfil Institucional</span>
                        <span className="text-emerald-600 font-bold flex items-center gap-1.5 bg-white px-2 py-0.5 rounded shadow-sm border border-emerald-100 text-xs">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> 100% Completo
                        </span>
                    </div>
                    <div className="flex items-center justify-between text-sm p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <span className="text-slate-600 font-medium">Empresas Asociadas</span>
                        <span className="font-bold text-slate-800 bg-white px-2 py-0.5 rounded shadow-sm border border-slate-200 text-xs">
                            45 Registradas
                        </span>
                    </div>
                </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-3">
                <button className="flex-1 py-2.5 px-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all text-sm shadow-sm">
                    Ver Empresas
                </button>
                <button className="flex-1 py-2.5 px-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all text-sm">
                    Actualizar Perfil
                </button>
            </div>
        </motion.div>

        {/* MÓDULO B: VENTANILLA DIGITAL */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col"
        >
            <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 011.414.586l4 4a1 1 0 01.586 1.414V19a2 2 0 01-2 2z"></path></svg>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-slate-800">Ventanilla Digital</h2>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Módulo B - Apoyos</p>
                    </div>
                </div>
            </div>

            <div className="p-6 flex-1 flex flex-col gap-4">
                <p className="text-slate-600 text-sm">
                    Ciclo completo de gestión de apoyos: convocatorias, postulación, seguimiento y cierre de proyectos.
                </p>

                <div className="grid grid-cols-3 gap-3 mt-2">
                    <div className="p-3 bg-orange-50 rounded-xl border border-orange-100 text-center">
                        <div className="text-2xl font-bold text-orange-600">1</div>
                        <div className="text-[10px] text-orange-800 font-bold uppercase mt-1">En Proceso</div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 text-center">
                        <div className="text-2xl font-bold text-blue-600">3</div>
                        <div className="text-[10px] text-blue-800 font-bold uppercase mt-1">Historial</div>
                    </div>
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-center">
                        <div className="text-2xl font-bold text-emerald-600">$800k</div>
                        <div className="text-[10px] text-emerald-800 font-bold uppercase mt-1">Aprobado</div>
                    </div>
                </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100">
                <button 
                  onClick={() => navigate('/register')}
                  className="w-full py-2.5 px-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 shadow-lg shadow-orange-500/20 transition-all text-sm flex items-center justify-center gap-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                    Nueva Solicitud de Apoyo
                </button>
            </div>
        </motion.div>

      </div>

      {/* SECCIÓN INFERIOR: TABLA DE PROYECTOS (DETALLE VENTANILLA) */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.2 }}
        className="pt-4"
      >
        <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-lg font-bold text-slate-800">Seguimiento de Proyectos Recientes</h3>
            <button className="text-sm text-blue-600 font-medium hover:text-blue-800 flex items-center gap-1">
                Ver todos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
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
                    <td className="p-4 font-mono text-slate-600 text-xs">{project.folio}</td>
                    <td className="p-4 font-bold text-slate-800">{project.name}</td>
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
                        <button className="text-slate-500 hover:text-orange-600 font-medium transition-colors p-2 hover:bg-orange-50 rounded-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
      </motion.div>

    </div>
  );
}
