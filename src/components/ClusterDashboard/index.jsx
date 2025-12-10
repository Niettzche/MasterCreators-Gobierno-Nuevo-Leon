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
    BORRADOR: 'bg-gray-100 text-text-body border-gray-200',
    EN_REVISION: 'bg-blue-50 text-blue-700 border-blue-200',
    REQUIERE_CAMBIOS: 'bg-amber-50 text-amber-700 border-amber-200',
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
    <div className="relative w-full h-full bg-background-alternate rounded-3xl overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d6d6d61a_1px,transparent_1px),linear-gradient(to_bottom,#d6d6d61a_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>
        <div className="absolute -left-28 -top-28 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute right-0 top-10 w-96 h-96 bg-gradient-to-br from-primary/10 via-orange-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-10 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 space-y-8">
        <header className="relative overflow-hidden bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm p-6 md:p-7">
          <div className="absolute -inset-10 bg-gradient-brand opacity-20 blur-3xl pointer-events-none"></div>
          <div className="relative z-10 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <nav className="flex items-center text-xs md:text-sm text-text-body gap-2 uppercase tracking-widest">
                <span className="font-semibold text-text-main">Plataforma Integral</span>
                <span className="text-gray-300">/</span>
                <span className="text-primary font-bold">Panel de Clúster</span>
              </nav>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-text-main tracking-tight mb-1">
                  Plataforma Integral de Clústeres
                </h1>
                <p className="text-base text-text-body font-medium">
                  Gobierno del Estado de Nuevo León
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-gray-100 text-text-body rounded-lg text-sm font-semibold border border-gray-200">
                    Clúster Automotriz de Nuevo León, A.C.
                  </span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-semibold border border-green-200 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Estatus: Activo
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 flex items-center gap-3 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 011.414.586l4 4a1 1 0 01.586 1.414V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Rol: Clúster</p>
                  <p className="text-sm font-semibold text-text-main">Acceso a Directorio y Ventanilla</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="space-y-8">
          <section className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">Módulos de gestión</p>
                <h2 className="text-xl font-bold text-text-main">Directorio y Ventanilla Digital</h2>
              </div>
              <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-xs text-text-body shadow-sm">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18"></path></svg>
                <span>Sincronizado con la vista pública</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* MÓDULO A: DIRECTORIO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col"
            >
              <div className="absolute -inset-0.5 bg-gradient-brand opacity-0 group-hover:opacity-20 transition duration-500 blur-xl pointer-events-none"></div>
              <div className="relative z-10">
                <div className="p-6 border-b border-gray-100 bg-gray-50/70">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shadow-inner">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-text-main">Directorio de Clústeres</h2>
                      <p className="text-xs text-text-body font-bold uppercase tracking-wider">Módulo A</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col gap-4">
                  <p className="text-text-body text-sm">
                    Gestione la información institucional, órganos de gobierno y el padrón de empresas asociadas.
                  </p>

                  <div className="space-y-3 mt-2">
                    <div className="flex items-center justify-between text-sm p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <span className="text-text-body font-medium">Perfil Institucional</span>
                      <span className="text-emerald-600 font-bold flex items-center gap-1.5 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 text-xs">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> 100% Completo
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <span className="text-text-body font-medium">Empresas Asociadas</span>
                      <span className="font-bold text-text-main bg-gray-50 px-2 py-0.5 rounded-full border border-gray-200 text-xs">
                        45 Registradas
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 border-t border-gray-100 flex gap-3">
                                    <button
                                      onClick={() => navigate('/cluster-dashboard/perfil?tab=companies')}
                                      className="flex-1 py-2.5 px-4 bg-white border border-primary/30 text-primary font-bold rounded-xl hover:bg-primary/10 transition-all text-sm shadow-sm"
                                    >
                                      Ver Empresas
                                    </button>                  <button 
                    onClick={() => navigate('/cluster-dashboard/perfil')}
                    className="flex-1 py-2.5 px-4 bg-primary text-white font-bold rounded-xl hover:bg-orange-600 shadow-lg shadow-primary/20 transition-all text-sm"
                  >
                    Actualizar Perfil
                  </button>
                </div>
              </div>
            </motion.div>

            {/* MÓDULO B: VENTANILLA DIGITAL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="group relative bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col"
            >
              <div className="absolute -inset-0.5 bg-gradient-brand opacity-0 group-hover:opacity-20 transition duration-500 blur-xl pointer-events-none"></div>
              <div className="relative z-10">
                <div className="p-6 border-b border-gray-100 bg-gray-50/70">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 text-primary rounded-xl flex items-center justify-center shadow-inner">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 011.414.586l4 4a1 1 0 01.586 1.414V19a2 2 0 01-2 2z"></path></svg>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-text-main">Ventanilla Digital</h2>
                      <p className="text-xs text-text-body font-bold uppercase tracking-wider">Módulo B - Apoyos</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col gap-4">
                  <p className="text-text-body text-sm">
                    Ciclo completo de gestión de apoyos: convocatorias, postulación, seguimiento y cierre de proyectos.
                  </p>

                  <div className="grid grid-cols-3 gap-3 mt-2">
                    <div className="p-3 bg-primary/10 rounded-xl border border-primary/20 text-center shadow-sm">
                      <div className="text-2xl font-bold text-primary">1</div>
                      <div className="text-[10px] text-primary font-bold uppercase mt-1">En Proceso</div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 text-center shadow-sm">
                      <div className="text-2xl font-bold text-blue-600">3</div>
                      <div className="text-[10px] text-blue-800 font-bold uppercase mt-1">Historial</div>
                    </div>
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-center shadow-sm">
                      <div className="text-2xl font-bold text-emerald-600">$800k</div>
                      <div className="text-[10px] text-emerald-800 font-bold uppercase mt-1">Aprobado</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 border-t border-gray-100">
                  <button
                    onClick={() => navigate('/register-project')}
                    className="w-full py-2.5 px-4 bg-primary text-white font-bold rounded-xl hover:bg-orange-600 shadow-lg shadow-primary/20 transition-all text-sm flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                    Nueva Solicitud de Apoyo
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECCIÓN INFERIOR: TABLA DE PROYECTOS (DETALLE VENTANILLA) */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
        >
          <div className="flex items-center justify-between px-6 py-5 bg-gray-50/70 border-b border-gray-100 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Seguimiento</p>
              <h3 className="text-lg font-bold text-text-main">Proyectos Recientes</h3>
            </div>
            <button 
              onClick={() => navigate('/cluster-dashboard/proyectos')}
              className="text-sm text-primary font-semibold hover:text-orange-600 flex items-center gap-1"
            >
              Ver todos
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-text-body font-semibold uppercase tracking-wider">
                <tr>
                  <th className="p-4">Folio</th>
                  <th className="p-4">Proyecto</th>
                  <th className="p-4">Programa / Convocatoria</th>
                  <th className="p-4 text-right">Monto</th>
                  <th className="p-4 text-center">Estatus</th>
                  <th className="p-4 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {mockProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-mono text-text-body text-xs">{project.folio}</td>
                    <td className="p-4 font-bold text-text-main">{project.name}</td>
                    <td className="p-4 text-text-body">
                      {project.program}
                      <div className="text-xs text-text-body mt-1">Registrado: {project.date}</div>
                    </td>
                    <td className="p-4 text-right font-medium text-text-main">
                      ${project.amount.toLocaleString()}
                    </td>
                    <td className="p-4 text-center">
                      {getStatusBadge(project.status)}
                    </td>
                    <td className="p-4 text-center">
                      <button 
                        onClick={() => navigate('/cluster-dashboard/proyectos')}
                        className="text-text-body hover:text-primary font-medium transition-colors p-2 hover:bg-primary/10 rounded-lg"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>
      </main>
    </div>
    </div>
  );
}
