import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock data fetching based on ID
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      // Mock Data (matches ClusterProjects.jsx)
      const mockProjects = [
        {
          id: 1,
          title: "Programa de Certificación Tier 2",
          program: "Fortalecimiento de Clústeres 2025",
          status: "En Validación",
          submissionDate: "12 Oct 2024",
          amount: 1250000,
          progress: 30,
          color: "orange",
          description: "Implementación de un programa integral de certificación para proveedores Tier 2 en la industria automotriz, con el objetivo de elevar los estándares de calidad y competitividad.",
          folio: "NL-2025-0012",
          documents: [
            { name: "Propuesta Técnica.pdf", status: "Validado" },
            { name: "Presupuesto Desglosado.xlsx", status: "En Revisión" },
            { name: "Cronograma.pdf", status: "Validado" }
          ],
          timeline: [
            { date: "12 Oct 2024", event: "Solicitud Enviada", status: "completed" },
            { date: "15 Oct 2024", event: "Revisión Administrativa", status: "completed" },
            { date: "20 Oct 2024", event: "Evaluación Técnica", status: "current" },
            { date: "Pendiente", event: "Aprobación Final", status: "pending" }
          ]
        },
        {
          id: 2,
          title: "Encuentro de Negocios Automotriz",
          program: "Vinculación Estratégica Q1",
          status: "Borrador",
          submissionDate: "Pendiente",
          amount: 450000,
          progress: 10,
          color: "slate",
          description: "Organización de un encuentro de negocios B2B entre proveedores locales y compradores internacionales del sector automotriz.",
          folio: "NL-2025-0045",
          documents: [
            { name: "Borrador de Propuesta.docx", status: "Pendiente" }
          ],
          timeline: [
             { date: "Pendiente", event: "Solicitud Enviada", status: "pending" }
          ]
        },
        {
          id: 3,
          title: "Capacitación en Inteligencia Artificial",
          program: "Capital Humano 4.0",
          status: "Aprobado",
          submissionDate: "05 Sep 2024",
          amount: 890000,
          progress: 100,
          color: "emerald",
          description: "Curso especializado en aplicación de IA para optimización de procesos de manufactura.",
          folio: "NL-2024-0982",
          documents: [
             { name: "Informe Final.pdf", status: "Aprobado" },
             { name: "Evidencia Fotográfica.zip", status: "Aprobado" }
          ],
          timeline: [
            { date: "05 Sep 2024", event: "Solicitud Enviada", status: "completed" },
            { date: "10 Sep 2024", event: "Aprobación", status: "completed" },
            { date: "15 Nov 2024", event: "Cierre de Proyecto", status: "completed" }
          ]
        }
      ];

      const foundProject = mockProjects.find(p => p.id === parseInt(id));
      setProject(foundProject);
      setLoading(false);
    }, 500);
  }, [id]);

  const getStatusBadge = (status, color) => {
    const styles = {
      orange: "bg-orange-50 text-orange-700 border-orange-200",
      slate: "bg-gray-100 text-slate-700 border-gray-200",
      emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
      red: "bg-red-50 text-red-700 border-red-200"
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${styles[color] || styles.slate}`}>
        {status}
      </span>
    );
  };

  if (loading) return <div className="p-8 text-center text-slate-500">Cargando detalles del proyecto...</div>;
  if (!project) return <div className="p-8 text-center text-slate-500">Proyecto no encontrado.</div>;

  return (
    <div className="-m-8 p-8 min-h-full w-full font-sans">
      {/* Header with Back Button */}
      <div className="mb-8">
        <button 
          onClick={() => navigate('/cluster-dashboard/proyectos')}
          className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition-colors mb-4 text-sm font-bold"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          Volver al Listado
        </button>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
               <h1 className="text-2xl font-black text-slate-800 tracking-tight">{project.title}</h1>
               {getStatusBadge(project.status, project.color)}
            </div>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">
              {project.program} • Folio: <span className="font-mono text-slate-700">{project.folio}</span>
            </p>
          </div>
          {project.status === 'Borrador' && (
             <button 
                onClick={() => navigate(`/register-project?projectId=${project.id}`)}
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-orange-600/20 transition-all flex items-center gap-2"
             >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                Editar Solicitud
             </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content: Info & Timeline */}
        <div className="lg:col-span-2 space-y-8">
           
           {/* Description Card */}
           <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-800 mb-4">Descripción del Proyecto</h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                {project.description}
              </p>
           </div>

           {/* Documents Card */}
           <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-800 mb-4">Documentación Adjunta</h2>
              <div className="space-y-3">
                 {project.documents.map((doc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-red-500">
                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                          </div>
                          <span className="text-sm font-medium text-slate-700">{doc.name}</span>
                       </div>
                       <span className="text-xs font-bold px-2 py-1 bg-white border border-gray-200 rounded text-slate-500">
                          {doc.status}
                       </span>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Sidebar: Financials & Timeline */}
        <div className="space-y-8">
           
           {/* Financial Summary */}
           <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Resumen Financiero</h3>
              <div className="mb-6">
                 <p className="text-xs text-slate-400 font-bold uppercase mb-1">Monto Solicitado</p>
                 <p className="text-3xl font-black text-slate-800 tracking-tight">${project.amount.toLocaleString()}</p>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5 mb-2 overflow-hidden">
                 <div className={`h-2.5 rounded-full ${project.color === 'emerald' ? 'bg-emerald-500' : 'bg-orange-500'}`} style={{ width: `${project.progress}%` }}></div>
              </div>
              <div className="flex justify-between text-xs font-bold text-slate-500">
                 <span>Progreso</span>
                 <span>{project.progress}%</span>
              </div>
           </div>

           {/* Timeline */}
           <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Línea de Tiempo</h3>
              <div className="relative border-l-2 border-gray-100 ml-3 space-y-8 pb-2">
                 {project.timeline.map((step, idx) => (
                    <div key={idx} className="relative pl-6">
                       <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${
                          step.status === 'completed' ? 'bg-emerald-500 border-emerald-500' :
                          step.status === 'current' ? 'bg-white border-orange-500' :
                          'bg-gray-100 border-gray-300'
                       }`}></div>
                       <p className={`text-xs font-bold mb-0.5 ${step.status === 'pending' ? 'text-slate-400' : 'text-slate-800'}`}>
                          {step.event}
                       </p>
                       <p className="text-[10px] text-slate-400 font-mono font-medium">{step.date}</p>
                    </div>
                 ))}
              </div>
           </div>

        </div>

      </div>
    </div>
  );
}
