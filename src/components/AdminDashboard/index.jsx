import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// =========================================================
// COMPONENTE: SuperAdminDashboard
// PROPÓSITO:
// Vista principal para el ROL: SUPER ADMIN (Gobierno/Dirección).
// Muestra indicadores globales, alertas de gestión y estado de convocatorias.
// =========================================================

export default function SuperAdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="-m-8 p-8 min-h-full w-auto">
      <div className="space-y-8 w-full">
      
      {/* KPI GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 w-full">
        
        {/* KPI 1: Solicitudes Pendientes (Actionable) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 cursor-pointer"
          onClick={() => navigate('/admin-dashboard/inbox')}
        >
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-semibold text-slate-500">Por Validar</span>
            <div className="bg-red-50 p-2 rounded-lg text-red-600">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">8</div>
          <div className="flex items-center gap-1 text-sm font-medium text-red-500">
            <span>5 requieren atención urgente</span>
          </div>
        </motion.div>

        {/* KPI 2: Convocatorias Activas */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-semibold text-slate-500">Convocatorias Activas</span>
            <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">2</div>
          <div className="flex items-center gap-1 text-sm font-medium text-slate-400">
            <span>Cierran en 15 días</span>
          </div>
        </motion.div>

        {/* KPI 3: Presupuesto Global */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-semibold text-slate-500">Presupuesto Ejercicio 2025</span>
            <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">$45.0M</div>
          <div className="flex items-center gap-1 text-sm font-medium text-emerald-500">
            <span>32% Asignado</span>
          </div>
        </motion.div>

        {/* KPI 4: Clústeres */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-semibold text-slate-500">Clústeres Registrados</span>
            <div className="bg-orange-50 p-2 rounded-lg text-orange-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">
            12<span className="text-lg text-slate-400 font-normal">/15</span>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-slate-500">
            <span>3 pendientes de registro</span>
          </div>
        </motion.div>
      </section>

      {/* MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
        {/* BANDEJA DE ENTRADA (INBOX PREVIEW) */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-800">Actividad Reciente</h2>
            <button 
              onClick={() => navigate('/admin-dashboard/inbox')}
              className="text-sm text-orange-600 font-semibold hover:text-orange-700 flex items-center gap-1"
            >
              Ver bandeja completa <span>&rarr;</span>
            </button>
          </div>

          <div className="space-y-4">
            {/* Item 1 */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
              <div className="mt-1 w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                   <h3 className="text-sm font-bold text-slate-800">Solicitud de Proyecto: "Capacitación 4.0"</h3>
                   <span className="text-xs text-slate-400">Hace 10 min</span>
                </div>
                <p className="text-sm text-slate-600 mt-1">El <span className="font-semibold">Clúster Automotriz</span> ha enviado una nueva solicitud para la Convocatoria 2025-A.</p>
                <div className="mt-3 flex gap-2">
                   <button 
                     onClick={() => navigate('/admin-dashboard/inbox')}
                     className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:text-orange-600 hover:border-orange-200 transition-colors"
                   >
                     Revisar Documentos
                   </button>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
              <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                   <h3 className="text-sm font-bold text-slate-800">Reporte Mensual: Marzo 2025</h3>
                   <span className="text-xs text-slate-400">Hace 2 horas</span>
                </div>
                <p className="text-sm text-slate-600 mt-1"><span className="font-semibold">Clúster de Electrodomésticos</span> cargó evidencias financieras.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
              <div className="mt-1 w-2 h-2 rounded-full bg-slate-300 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                   <h3 className="text-sm font-bold text-slate-800">Nuevo Usuario Registrado</h3>
                   <span className="text-xs text-slate-400">Ayer</span>
                </div>
                <p className="text-sm text-slate-600 mt-1">Representante Legal del <span className="font-semibold">Clúster Agroalimentario</span> completó su perfil.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RESUMEN CONVOCATORIAS */}
        <motion.div 
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-800">Estado Convocatorias</h2>
          </div>
          
          <div className="space-y-6">
             <div className="relative pl-4 border-l-2 border-orange-100">
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-orange-500 border-2 border-white"></div>
                <h4 className="text-sm font-bold text-slate-800">Programa de Fortalecimiento 2025</h4>
                <div className="flex justify-between items-center mt-2">
                   <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">Abierta</span>
                   <span className="text-xs text-slate-500">Cierra: 30 Abr</span>
                </div>
                <div className="mt-3 w-full bg-slate-100 rounded-full h-1.5">
                   <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <div className="mt-1 flex justify-between text-[10px] text-slate-400">
                   <span>12 Solicitudes</span>
                   <span>Meta: 20</span>
                </div>
             </div>

             <div className="relative pl-4 border-l-2 border-slate-100">
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-slate-300 border-2 border-white"></div>
                <h4 className="text-sm font-bold text-slate-800">Eventos de Vinculación Q1</h4>
                <div className="flex justify-between items-center mt-2">
                   <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-bold">Cerrada</span>
                   <span className="text-xs text-slate-500">Evaluación en proceso</span>
                </div>
                 <div className="mt-3 w-full bg-slate-100 rounded-full h-1.5">
                   <div className="bg-slate-400 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
             </div>
          </div>
          
          <div className="mt-auto pt-6">
            <button 
              onClick={() => navigate('/admin-dashboard/convocatorias')}
              className="w-full py-2.5 bg-slate-800 text-white text-sm font-bold rounded-lg hover:bg-slate-700 transition-colors shadow-lg shadow-slate-200 flex items-center justify-center gap-2"
            >
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
               Nueva Convocatoria
            </button>
          </div>
        </motion.div>
      </div>

    </div>
  </div>
  );
}
