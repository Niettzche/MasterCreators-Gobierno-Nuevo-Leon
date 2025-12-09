import React from 'react';
import { motion } from 'framer-motion';

// =========================================================
// COMPONENTE: ClusterFinances
// PROPÓSITO:
// Vista financiera para el Clúster.
// Permite ver el estado de los recursos, dispersiones y comprobaciones.
// =========================================================

export default function ClusterFinances() {
  
  // Mock Data
  const financialSummary = {
    approved: 2500000,
    received: 1875000,
    pending: 625000,
    verified: 1200000
  };

  const transactions = [
    { id: 1, project: 'Certificación Tier 2', concept: 'Ministración 1 (Anticipo)', date: '2024-10-15', amount: 625000, status: 'Pagado', ref: 'SPEI-88291' },
    { id: 2, project: 'Certificación Tier 2', concept: 'Ministración 2 (Avance)', date: '2024-12-01', amount: 625000, status: 'Pagado', ref: 'SPEI-99102' },
    { id: 3, project: 'Capacitación IA', concept: 'Pago Único', date: '2024-11-20', amount: 625000, status: 'Pagado', ref: 'SPEI-92831' },
    { id: 4, project: 'Certificación Tier 2', concept: 'Ministración Final (Cierre)', date: '2025-02-15', amount: 625000, status: 'Pendiente', ref: '-' },
  ];

  return (
    <div className="-m-8 p-8 min-h-full w-full font-sans text-text-body">
      
      {/* HEADER */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-black text-text-main tracking-tight">Finanzas y Pagos</h1>
          <p className="text-text-body text-sm mt-1 font-medium">Estado de cuenta de recursos públicos asignados.</p>
        </div>
        <button className="bg-white border border-gray-200 text-text-body px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors shadow-sm flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            Descargar Estado de Cuenta
        </button>
      </header>

      {/* FINANCIAL CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="p-6 bg-secondary rounded-2xl text-white shadow-lg shadow-secondary/20">
            <p className="text-xs font-bold uppercase tracking-wider opacity-70 mb-1">Total Aprobado</p>
            <p className="text-3xl font-black">${financialSummary.approved.toLocaleString()}</p>
            <div className="mt-4 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-full"></div>
            </div>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
            <p className="text-xs font-bold text-text-body uppercase tracking-wider mb-1">Recibido (Dispersado)</p>
            <p className="text-3xl font-black text-emerald-600">${financialSummary.received.toLocaleString()}</p>
            <p className="text-xs text-text-body mt-2">75% del total</p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
            <p className="text-xs font-bold text-text-body uppercase tracking-wider mb-1">Por Recibir</p>
            <p className="text-3xl font-black text-text-main">${financialSummary.pending.toLocaleString()}</p>
            <p className="text-xs text-text-body mt-2">Sujeto a comprobación</p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
            <p className="text-xs font-bold text-text-body uppercase tracking-wider mb-1">Comprobado</p>
            <p className="text-3xl font-black text-blue-600">${financialSummary.verified.toLocaleString()}</p>
            <p className="text-xs text-text-body mt-2">Facturas validadas</p>
        </div>
      </div>

      {/* MAIN CONTENT SPLIT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT: TRANSACTIONS TABLE */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-lg font-bold text-text-main">Historial de Ministraciones</h2>
                <div className="flex gap-2">
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-100">● Pagado</span>
                    <span className="text-xs font-bold text-text-body bg-gray-50 px-2 py-1 rounded border border-gray-100">● Pendiente</span>
                </div>
            </div>
            <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-text-body font-semibold uppercase tracking-wider text-xs">
                    <tr>
                        <th className="px-6 py-4">Concepto / Proyecto</th>
                        <th className="px-6 py-4">Fecha</th>
                        <th className="px-6 py-4">Referencia</th>
                        <th className="px-6 py-4 text-right">Monto</th>
                        <th className="px-6 py-4 text-center">Estado</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {transactions.map((tx) => (
                        <tr key={tx.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4">
                                <p className="font-bold text-text-main">{tx.concept}</p>
                                <p className="text-xs text-text-body">{tx.project}</p>
                            </td>
                            <td className="px-6 py-4 text-text-body font-medium">{tx.date}</td>
                            <td className="px-6 py-4 text-text-body font-mono text-xs">{tx.ref}</td>
                            <td className="px-6 py-4 text-right font-bold text-text-main">${tx.amount.toLocaleString()}</td>
                            <td className="px-6 py-4 text-center">
                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border ${
                                    tx.status === 'Pagado' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-gray-100 text-text-body border-gray-200'
                                }`}>
                                    {tx.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/* RIGHT: BUDGET UTILIZATION CHART (CSS) */}
        <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <h3 className="text-sm font-bold text-text-main mb-6">Ejercicio Presupuestal</h3>
                
                {/* Bar Chart */}
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between text-xs mb-1">
                            <span className="font-bold text-text-body">Proyecto Tier 2</span>
                            <span className="text-text-body">70%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: '70%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-xs mb-1">
                            <span className="font-bold text-text-body">Capacitación IA</span>
                            <span className="text-text-body">100%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-xs mb-1">
                            <span className="font-bold text-text-body">Encuentro Negocios</span>
                            <span className="text-text-body">0%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-slate-300 rounded-full" style={{ width: '0%' }}></div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                    <button className="w-full py-2 bg-gray-50 text-text-body font-bold text-xs rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                        Ver Reporte Detallado
                    </button>
                </div>
            </div>

            {/* Account Info */}
            <div className="bg-gradient-to-br from-secondary to-slate-900 rounded-2xl p-6 text-white shadow-lg">
                <div className="flex items-center gap-3 mb-4 opacity-80">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
                    <span className="text-xs font-bold uppercase tracking-widest">Cuenta de Depósito</span>
                </div>
                <p className="text-sm text-slate-400 mb-1">Banco Afirme</p>
                <p className="text-xl font-mono font-bold tracking-wider mb-4">**** **** **** 9928</p>
                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                    <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                        Validada
                    </span>
                    <button className="text-xs font-bold underline hover:text-primary transition-colors">Cambiar</button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
