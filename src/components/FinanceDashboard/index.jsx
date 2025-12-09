import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// =========================================================
// COMPONENTE: FinanceDashboard
// PROPÓSITO:
// Vista principal para el ROL: FINANZAS (Tesorería/Pagos).
// Muestra flujos de dispersión y validación de cuentas bancarias.
// =========================================================

export default function FinanceDashboard() {
  const navigate = useNavigate();

  // Mock data for payments pending dispersion
  const pendingPayments = [
    { id: 'pay001', project: 'Capacitación 4.0', cluster: 'Clúster Automotriz', amount: '$250,000.00', dateApproved: '2025-04-10', status: 'Por Dispersar' },
    { id: 'pay002', project: 'Certificación ISO', cluster: 'Clúster Aeroespacial', amount: '$120,000.00', dateApproved: '2025-04-12', status: 'Por Dispersar' },
  ];

  return (
    <div className="-m-8 p-8 min-h-full w-auto">
      <div className="space-y-8 w-full">
      
      {/* KPI GRID - Finanzas */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full">
        
        {/* KPI 1: Por Dispersar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-semibold text-slate-500">Pendiente de Pago</span>
            <div className="bg-orange-50 p-2 rounded-lg text-orange-600">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">$370,000</div>
          <div className="flex items-center gap-1 text-sm font-medium text-slate-400">
            <span>2 proyectos aprobados</span>
          </div>
        </motion.div>

        {/* KPI 2: Cuentas por Validar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm cursor-pointer hover:shadow-md transition-all"
          onClick={() => navigate('/finance-dashboard/bank-accounts')}
        >
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-semibold text-slate-500">Validación Bancaria</span>
            <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">4</div>
          <div className="flex items-center gap-1 text-sm font-medium text-blue-500">
            <span>Requieren revisión de carátula</span>
          </div>
        </motion.div>

        {/* KPI 3: Presupuesto Disponible */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
        >
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-semibold text-slate-500">Presupuesto Disponible</span>
            <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
            </div>
          </div>
          <div className="text-3xl font-bold text-slate-900 mb-2">$12.5M</div>
          <div className="flex items-center gap-1 text-sm font-medium text-emerald-500">
            <span>Suficiencia Presupuestal OK</span>
          </div>
        </motion.div>
      </section>

      {/* LISTA DE DISPERSIÓN */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6"
      >
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-800">Solicitudes de Dispersión (Pago)</h2>
             <button className="text-sm text-slate-500 hover:text-slate-700 font-medium">
              Ver historial completo
            </button>
        </div>
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="text-slate-500 text-sm border-b border-slate-100">
                        <th className="pb-3 font-medium">Proyecto</th>
                        <th className="pb-3 font-medium">Beneficiario</th>
                        <th className="pb-3 font-medium">Fecha Aprobación</th>
                        <th className="pb-3 font-medium">Monto</th>
                        <th className="pb-3 font-medium text-right">Acción</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {pendingPayments.map(payment => (
                       <tr key={payment.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors last:border-0">
                        <td className="py-4 font-semibold text-slate-700">{payment.project}</td>
                        <td className="py-4 text-slate-500">{payment.cluster}</td>
                        <td className="py-4 text-slate-500">{payment.dateApproved}</td>
                        <td className="py-4 text-slate-800 font-mono font-bold">{payment.amount}</td>
                        <td className="py-4 text-right">
                            <button className="px-3 py-1.5 bg-slate-800 text-white text-xs font-bold rounded-lg hover:bg-slate-700 transition-colors shadow-sm flex items-center gap-2 ml-auto">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                                Registrar Pago
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
