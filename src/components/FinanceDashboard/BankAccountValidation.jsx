import React, { useState } from 'react';
import { motion } from 'framer-motion';

// =========================================================
// COMPONENTE: BankAccountValidation
// PROPÓSITO:
// Interfaz para que el rol de Finanzas valide las cuentas bancarias
// proporcionadas por los clústeres para la dispersión de recursos.
// =========================================================

export default function BankAccountValidation() {
  const [selectedAccount, setSelectedAccount] = useState(null);

  // Mock Data
  const accountsToValidate = [
    {
      id: 1,
      cluster: 'Clúster Automotriz de N.L.',
      project: 'Certificación Tier 2 Proveedores Locales',
      bank: 'Banorte',
      clabe: '072180000000000001',
      accountNum: '0000123456',
      holder: 'Clúster Automotriz de N.L. A.C.',
      status: 'Pendiente',
      submissionDate: '2025-03-10',
      document: '/path/to/caratula_claut.pdf' // Mock document path
    },
    {
      id: 2,
      cluster: 'Clúster Aeroespacial México',
      project: 'Innovación en Materiales Compuestos',
      bank: 'BBVA Bancomer',
      clabe: '012180000000000002',
      accountNum: '0000654321',
      holder: 'Asociación Aeroespacial de México',
      status: 'Pendiente',
      submissionDate: '2025-03-12',
      document: '/path/to/caratula_aero.pdf'
    },
    {
      id: 3,
      cluster: 'Clúster de Tecnología de N.L.',
      project: 'Desarrollo de Talentos Digitales',
      bank: 'Banregio',
      clabe: '058180000000000003',
      accountNum: '0000112233',
      holder: 'Asociación de TI de Nuevo León',
      status: 'Aprobado',
      submissionDate: '2025-03-05',
      document: '/path/to/caratula_ti.pdf'
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pendiente': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Aprobado': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Rechazado': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  return (
    <div className="-m-8 p-8 min-h-full w-full font-sans text-slate-900 flex flex-col h-screen">
      
      {/* HEADER */}
      <header className="flex justify-between items-center mb-6 flex-shrink-0">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Validación de Cuentas Bancarias</h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">Revisión y aprobación de datos bancarios para dispersión.</p>
        </div>
        <button className="bg-orange-600 text-white px-5 py-2 rounded-xl font-bold text-sm hover:bg-orange-700 transition-colors flex items-center gap-2 shadow-lg shadow-orange-500/20">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
            Ver Cuentas Aprobadas
        </button>
      </header>

      <div className="flex gap-6 flex-1 overflow-hidden">
        
        {/* LISTA DE CUENTAS PENDIENTES (Izquierda) */}
        <div className="w-1/3 flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Buscar por Clúster, CLABE..." 
                        className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-slate-400 outline-none"
                    />
                    <svg className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-2 space-y-2">
                {accountsToValidate.filter(acc => acc.status === 'Pendiente').map(account => (
                    <div 
                        key={account.id}
                        onClick={() => setSelectedAccount(account)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                            selectedAccount?.id === account.id 
                            ? 'bg-orange-50 border-orange-300 shadow-inner' 
                            : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-200'
                        }`}
                    >
                        <div className="flex justify-between items-start mb-1">
                            <h3 className="text-sm font-bold text-slate-800 leading-tight">{account.cluster}</h3>
                            <span className="text-xs text-slate-400">{account.submissionDate}</span>
                        </div>
                        <p className="text-xs text-slate-500 truncate">{account.project}</p>
                        <p className="text-sm font-mono text-slate-700 mt-2">{account.clabe}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* DETALLE DE LA CUENTA (Derecha) */}
        <div className="flex-1 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-y-auto p-8">
            {selectedAccount ? (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={selectedAccount.id}
                >
                    <div className="mb-6 border-b border-slate-100 pb-6">
                        <h2 className="text-2xl font-black text-slate-800 mb-2">Detalle de Cuenta Bancaria</h2>
                        <p className="text-sm text-slate-500">Solicitud de <span className="font-semibold text-slate-700">{selectedAccount.cluster}</span> para el proyecto <span className="font-semibold text-slate-700">{selectedAccount.project}</span>.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Titular</p>
                            <p className="text-sm font-bold text-slate-800">{selectedAccount.holder}</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Banco</p>
                            <p className="text-sm font-bold text-slate-800">{selectedAccount.bank}</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">CLABE Interbancaria</p>
                            <p className="text-sm font-mono font-bold text-slate-800">{selectedAccount.clabe}</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">No. de Cuenta</p>
                            <p className="text-sm font-bold text-slate-800">{selectedAccount.accountNum}</p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Documento de Respaldo</h3>
                        <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                            <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-red-500 flex-shrink-0">
                                <span className="text-xs font-bold">PDF</span>
                            </div>
                            <div className="flex-1">
                                <p className="font-bold text-slate-800 text-sm">Carátula Bancaria - {selectedAccount.cluster}.pdf</p>
                                <p className="text-xs text-slate-500">Fecha de envío: {selectedAccount.submissionDate}</p>
                            </div>
                            <a href={selectedAccount.document} target="_blank" rel="noopener noreferrer" className="bg-white border border-slate-200 text-slate-600 px-3 py-2 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                                Ver PDF
                            </a>
                        </div>
                    </div>

                    <div className="border-t border-slate-100 pt-6 flex justify-end gap-3">
                        <button className="bg-red-50 text-red-600 px-5 py-2 rounded-xl font-bold text-sm hover:bg-red-100 transition-colors">
                            Rechazar
                        </button>
                        <button className="bg-slate-100 text-slate-700 px-5 py-2 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors">
                            Solicitar Aclaración
                        </button>
                        <button className="bg-emerald-600 text-white px-5 py-2 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/20">
                            Aprobar Cuenta
                        </button>
                    </div>

                </motion.div>
            ) : (
                <div className="h-full flex flex-col items-center justify-center text-slate-300">
                    <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
                    <p className="text-lg font-bold">Seleccione una cuenta para revisar el detalle</p>
                </div>
            )}
        </div>

      </div>
    </div>
  );
}
