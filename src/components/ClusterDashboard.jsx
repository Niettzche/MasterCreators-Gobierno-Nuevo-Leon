import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// =========================================================
// COMPONENTE: ClusterDashboard
// PROPÓSITO:
// Vista principal para el ROL: CLÚSTER (Solicitante).
// Adaptada del mockup "Cluster Command Center" (@mockup/dashboardcluster.html).
// =========================================================

export default function ClusterDashboard() {
  const navigate = useNavigate();

  return (
    // WRAPPER: Se expande sobre el padding del Layout padre (-m-8) y restaura el padding interno (p-8).
    // w-[calc(100%+4rem)] asegura que ocupe el 100% del ancho del layout padre compensando los márgenes negativos.
    <div className="-m-8 p-8 w-[calc(100%+4rem)] space-y-6 font-sans text-slate-800">
      
      {/* --- SECCIÓN DE KPIs --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* KPI 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-bold text-slate-500">Proyectos Activos</span>
            <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div className="text-3xl font-extrabold text-slate-900 mb-2">3</div>
          <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 w-fit px-2 py-1 rounded">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            <span>2 en Validación</span>
          </div>
        </motion.div>

        {/* KPI 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-bold text-slate-500">Financiamiento Total</span>
            <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div className="text-3xl font-extrabold text-slate-900 mb-2">$15.0M</div>
          <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 w-fit px-2 py-1 rounded">
            <span>75% Dispersado</span>
          </div>
        </motion.div>

        {/* KPI 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-bold text-slate-500">Ejecución Recursos</span>
            <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
          </div>
          <div className="text-3xl font-extrabold text-slate-900 mb-2">$9.5M</div>
          <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 w-fit px-2 py-1 rounded">
            <span>63% Comprobado</span>
          </div>
        </motion.div>

        {/* KPI 4 */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-bold text-slate-500">Metas Cumplidas</span>
            <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div className="text-3xl font-extrabold text-slate-900 mb-2">
            120<span className="text-lg text-slate-400 font-normal ml-1">/ 150</span>
          </div>
          <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 w-fit px-2 py-1 rounded">
            <span>80% Avance Global</span>
          </div>
        </motion.div>
      </section>

      {/* --- GRID PRINCIPAL (Proyectos + Gráfico) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* TIMELINE DE PROYECTOS (2/3 Ancho) */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-bold text-slate-800">Estado de Proyectos Recientes</h2>
            <button className="text-sm text-orange-600 font-bold hover:text-orange-800 flex items-center gap-1 transition-colors">
              Ver todos <span>&rarr;</span>
            </button>
          </div>

          {/* Project 1 */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-slate-800 text-sm">Proyecto Capacitación Dual 2025</span>
              <span className="text-xs text-slate-400">Actualizado: hace 2 horas</span>
            </div>
            
            {/* Timeline Track */}
            <div className="relative h-1.5 bg-slate-100 rounded-full mb-3 mx-4">
              <div className="absolute left-0 top-0 h-full bg-orange-500 rounded-full transition-all duration-1000" style={{ width: '50%' }}></div>
              
              {/* Steps Dots */}
              <div className="absolute inset-0 flex justify-between items-center -mt-[3px]">
                 {/* Steps: Borrador, Enviado, Validación (Active), Aprobado, Cierre */}
                 {[true, true, 'active', false, false].map((state, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full border-2 ${state === 'active' ? 'bg-orange-500 border-orange-500 ring-4 ring-orange-100 scale-110' : state ? 'bg-orange-500 border-orange-500' : 'bg-white border-slate-200'} z-10`}></div>
                 ))}
              </div>
            </div>
            <div className="flex justify-between px-1">
               <span className="text-[10px] text-slate-400 font-medium w-12 text-center">Borrador</span>
               <span className="text-[10px] text-slate-400 font-medium w-12 text-center">Enviado</span>
               <span className="text-[10px] text-orange-600 font-bold w-12 text-center">Validación</span>
               <span className="text-[10px] text-slate-400 font-medium w-12 text-center">Aprobado</span>
               <span className="text-[10px] text-slate-400 font-medium w-12 text-center">Cierre</span>
            </div>
          </div>
          
          <hr className="border-t border-slate-50 my-8" />

          {/* Project 2 */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-slate-800 text-sm">Certificación Proveedores Tier 2</span>
              <span className="text-xs text-slate-400">Estado: En Ejecución</span>
            </div>
            
             {/* Timeline Track */}
             <div className="relative h-1.5 bg-slate-100 rounded-full mb-3 mx-4">
              <div className="absolute left-0 top-0 h-full bg-orange-500 rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
              
              {/* Steps Dots */}
              <div className="absolute inset-0 flex justify-between items-center -mt-[3px]">
                 {/* Steps: Borrador, Enviado, Validación, Ejecución (Active), Cierre */}
                 {[true, true, true, 'active', false].map((state, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full border-2 ${state === 'active' ? 'bg-orange-500 border-orange-500 ring-4 ring-orange-100 scale-110' : state ? 'bg-orange-500 border-orange-500' : 'bg-white border-slate-200'} z-10`}></div>
                 ))}
              </div>
            </div>
            <div className="flex justify-between px-1">
               <span className="text-[10px] text-slate-400 font-medium w-12 text-center">Borrador</span>
               <span className="text-[10px] text-slate-400 font-medium w-12 text-center">Enviado</span>
               <span className="text-[10px] text-slate-400 font-medium w-12 text-center">Validación</span>
               <span className="text-[10px] text-orange-600 font-bold w-12 text-center">Ejecución</span>
               <span className="text-[10px] text-slate-400 font-medium w-12 text-center">Cierre</span>
            </div>
          </div>
        </motion.div>

        {/* GRÁFICO DE FLUJO (1/3 Ancho) */}
        <motion.div 
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-800">Flujo de Recursos</h2>
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
          </div>
          
          <div className="flex-1 flex items-end justify-around pt-4 pb-2">
             {/* CSS Bar Chart */}
             {[
               { l: 'Ene', h1: '60px', h2: '40px' },
               { l: 'Feb', h1: '80px', h2: '70px' },
               { l: 'Mar', h1: '120px', h2: '50px' },
               { l: 'Abr', h1: '90px', h2: '20px', secondary: true },
             ].map((bar, i) => (
               <div key={i} className="flex flex-col items-center gap-2 w-[15%] group">
                  <div className="w-full bg-slate-50 rounded-t-sm relative overflow-hidden group-hover:bg-slate-100 transition-colors" style={{ height: bar.h1 }}>
                    <div className={`absolute bottom-0 w-full rounded-t-sm ${bar.secondary ? 'bg-slate-700 opacity-80' : 'bg-orange-500'}`} style={{ height: bar.h2 }}></div>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium uppercase">{bar.l}</span>
               </div>
             ))}
          </div>
          
          <div className="mt-6 flex justify-center gap-4 text-[10px] text-slate-500 font-medium">
             <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Dispersado</div>
             <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-700"></span> Ejecutado</div>
          </div>
        </motion.div>
      </div>

      {/* --- TABLA DE VENCIMIENTOS --- */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b border-slate-100">
            <h2 className="text-lg font-bold text-slate-800">Próximos Vencimientos</h2>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead>
                    <tr className="text-slate-400 font-medium border-b border-slate-100">
                        <th className="px-6 py-3">Documento / Acción</th>
                        <th className="px-6 py-3">Proyecto</th>
                        <th className="px-6 py-3">Fecha Límite</th>
                        <th className="px-6 py-3">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors group">
                        <td className="px-6 py-4 font-semibold text-slate-700 group-hover:text-orange-600 transition-colors">Reporte Trimestral Q1</td>
                        <td className="px-6 py-4 text-slate-500">Capacitación Dual</td>
                        <td className="px-6 py-4 text-amber-500 font-bold">15 Abr 2025</td>
                        <td className="px-6 py-4"><span className="bg-amber-50 text-amber-600 px-2 py-1 rounded text-xs font-bold border border-amber-100">Pendiente</span></td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors group">
                        <td className="px-6 py-4 font-semibold text-slate-700 group-hover:text-orange-600 transition-colors">Factura #A-9920 (Proveedor TI)</td>
                        <td className="px-6 py-4 text-slate-500">Certificación Tier 2</td>
                        <td className="px-6 py-4 text-slate-800 font-medium">20 Abr 2025</td>
                        <td className="px-6 py-4"><span className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded text-xs font-bold border border-emerald-100">Validado</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
      </motion.div>

    </div>
  );
}