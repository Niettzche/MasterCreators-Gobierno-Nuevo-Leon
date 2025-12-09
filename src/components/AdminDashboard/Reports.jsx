import React from 'react';
import { motion } from 'framer-motion';

export default function AdminReports() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Indicadores Globales</h1>
          <p className="text-slate-500 text-sm">Visión general del impacto y distribución presupuestal.</p>
        </div>
        <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-colors shadow-sm text-sm">
          Exportar PDF
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {/* Summary Cards */}
         <div className="bg-slate-800 p-6 rounded-2xl shadow-lg text-white">
            <h3 className="text-slate-400 text-xs font-bold uppercase mb-2">Presupuesto Total 2025</h3>
            <p className="text-3xl font-black mb-4">$45,000,000</p>
            <div className="flex gap-2 text-xs">
               <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">+12% vs 2024</span>
            </div>
         </div>
         <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-slate-500 text-xs font-bold uppercase mb-2">Proyectos Apoyados</h3>
            <p className="text-3xl font-black text-slate-800 mb-4">8</p>
            <p className="text-xs text-slate-400">Meta anual: 25 proyectos</p>
         </div>
         <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-slate-500 text-xs font-bold uppercase mb-2">Total Beneficiarios</h3>
            <p className="text-3xl font-black text-slate-800 mb-4">1,250</p>
            <p className="text-xs text-slate-400">Empleos conservados/generados</p>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Placeholder Charts */}
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-80 flex flex-col items-center justify-center text-center"
        >
             <div className="w-40 h-40 rounded-full border-8 border-slate-100 border-t-orange-500 border-r-orange-400 mb-4 animate-spin-slow"></div>
             <h4 className="font-bold text-slate-700">Distribución por Sector</h4>
             <p className="text-xs text-slate-400">Automotriz lidera con 45%</p>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-80 flex flex-col"
        >
             <h4 className="font-bold text-slate-700 mb-6">Avance Mensual de Ejercicio</h4>
             <div className="flex items-end justify-between h-full gap-2 px-4 pb-2">
                {[30, 45, 25, 60, 75, 50].map((h, i) => (
                    <div key={i} className="w-full bg-slate-100 rounded-t-lg relative group">
                        <div 
                            className="absolute bottom-0 w-full bg-blue-500 rounded-t-lg transition-all duration-500 group-hover:bg-blue-600"
                            style={{ height: `${h}%` }}
                        ></div>
                    </div>
                ))}
             </div>
             <div className="flex justify-between text-xs text-slate-400 px-2 mt-2">
                <span>Ene</span><span>Feb</span><span>Mar</span><span>Abr</span><span>May</span><span>Jun</span>
             </div>
        </motion.div>
      </div>
    </div>
  );
}
