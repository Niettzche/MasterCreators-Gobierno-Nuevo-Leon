import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// =========================================================
// COMPONENTE: ClusterProjects
// PROPÓSITO:
// Vista de listado de proyectos para el rol CLÚSTER.
// Muestra tarjetas con el estado y resumen de cada solicitud.
// =========================================================

export default function ClusterProjects() {
  const navigate = useNavigate();

  // Mock Data basado en los estados del documento (Sección 4.2)
  const projects = [
    {
      id: 1,
      title: "Programa de Certificación Tier 2",
      program: "Fortalecimiento de Clústeres 2025",
      status: "En Validación",
      submissionDate: "12 Oct 2024",
      amount: 1250000,
      progress: 30,
      color: "orange"
    },
    {
      id: 2,
      title: "Encuentro de Negocios Automotriz",
      program: "Vinculación Estratégica Q1",
      status: "Borrador",
      submissionDate: "Pendiente",
      amount: 450000,
      progress: 10,
      color: "slate"
    },
    {
      id: 3,
      title: "Capacitación en Inteligencia Artificial",
      program: "Capital Humano 4.0",
      status: "Aprobado",
      submissionDate: "05 Sep 2024",
      amount: 890000,
      progress: 100,
      color: "emerald"
    }
  ];

  const getStatusBadge = (status, color) => {
    const styles = {
      orange: "bg-primary/10 text-primary border-primary/20",
      slate: "bg-gray-100 text-text-body border-gray-200",
      emerald: "bg-green-50 text-green-700 border-green-100",
      red: "bg-red-50 text-red-700 border-red-100"
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${styles[color] || styles.slate}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="-m-8 p-8 min-h-full w-full">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-text-main">Mis Proyectos</h1>
          <p className="text-text-body text-sm mt-1">Gestione sus solicitudes y seguimientos.</p>
        </div>
        <button 
          onClick={() => navigate('/register-project')}
          className="bg-primary hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-primary/20 transition-all flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
          Nuevo Proyecto
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"
          >
            {/* Status Strip */}
            <div className={`absolute top-0 left-0 w-1.5 h-full ${
              project.color === 'orange' ? 'bg-primary' : 
              project.color === 'emerald' ? 'bg-emerald-500' : 'bg-gray-300'
            }`}></div>

            <div className="flex justify-between items-start mb-4 pl-2">
              {getStatusBadge(project.status, project.color)}
              <button className="text-text-body hover:text-text-main">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/></svg>
              </button>
            </div>

            <div className="pl-2 mb-6">
              <h3 className="text-lg font-bold text-text-main leading-tight mb-1 group-hover:text-primary transition-colors cursor-pointer">
                {project.title}
              </h3>
              <p className="text-xs text-text-body uppercase tracking-wide font-medium">{project.program}</p>
            </div>

            <div className="pl-2 space-y-3 border-t border-gray-50 pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-text-body">Monto Solicitado</span>
                <span className="font-bold text-text-main">${project.amount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-body">Fecha Envío</span>
                <span className="font-medium text-text-main">{project.submissionDate}</span>
              </div>
            </div>

            <div className="pl-2 mt-6 flex gap-2">
              <button 
                onClick={() => navigate('/cluster-dashboard/proyectos/' + project.id)}
                className="flex-1 bg-white border border-gray-200 text-text-body text-xs font-bold py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Ver Detalle
              </button>
              {project.status === 'Borrador' && (
                <button 
                  onClick={() => navigate('/register-project?projectId=' + project.id)}
                  className="flex-1 bg-primary/10 text-primary border border-primary/20 text-xs font-bold py-2 rounded-lg hover:bg-primary/20 transition-colors"
                >
                  Continuar
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
