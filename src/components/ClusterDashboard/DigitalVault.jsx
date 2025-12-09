import React, { useState } from 'react';
import { motion } from 'framer-motion';

// =========================================================
// COMPONENTE: DigitalVault (Bóveda Digital)
// PROPÓSITO:
// Gestión centralizada de documentos legales y operativos.
// Permite carga, versionado y control de vigencia.
// =========================================================

export default function DigitalVault() {
  const [filter, setFilter] = useState('all');

  // Mock Data
  const documents = [
    { id: 1, name: 'Acta Constitutiva', type: 'Legal', status: 'Vigente', date: '2024-01-15', expiry: null, size: '2.4 MB' },
    { id: 2, name: 'Poder del Representante Legal', type: 'Legal', status: 'Vigente', date: '2024-02-10', expiry: null, size: '1.1 MB' },
    { id: 3, name: 'Opinión de Cumplimiento SAT', type: 'Fiscal', status: 'Por Vencer', date: '2025-03-01', expiry: '2025-04-01', size: '0.5 MB' },
    { id: 4, name: 'Comprobante de Domicilio', type: 'Operativo', status: 'Vencido', date: '2024-11-20', expiry: '2025-02-20', size: '0.8 MB' },
    { id: 5, name: 'Constancia Situación Fiscal', type: 'Fiscal', status: 'Vigente', date: '2025-01-10', expiry: null, size: '0.3 MB' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Vigente': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Por Vencer': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Vencido': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-text-body border-gray-200';
    }
  };

  return (
    <div className="-m-8 p-8 min-h-full w-full font-sans text-text-body">
      
      {/* HEADER */}
      <header className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-black text-text-main tracking-tight">Bóveda Digital</h1>
          <p className="text-text-body text-sm mt-1 font-medium">Repositorio seguro de documentación legal y fiscal.</p>
        </div>
        <button className="bg-primary hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-primary/20 flex items-center gap-2 transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
            Subir Documento
        </button>
      </header>

      {/* OVERVIEW CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 011.414.586l4 4a1 1 0 01.586 1.414V19a2 2 0 01-2 2z"/></svg>
            </div>
            <div>
                <p className="text-2xl font-bold text-text-main">12</p>
                <p className="text-xs font-bold text-text-body uppercase tracking-wide">Documentos Totales</p>
            </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div>
                <p className="text-2xl font-bold text-text-main">85%</p>
                <p className="text-xs font-bold text-text-body uppercase tracking-wide">Vigencia Global</p>
            </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div>
                <p className="text-2xl font-bold text-text-main">1</p>
                <p className="text-xs font-bold text-text-body uppercase tracking-wide">Atención Requerida</p>
            </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        
        {/* Toolbar */}
        <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <div className="flex gap-2">
                {['Todos', 'Legal', 'Fiscal', 'Operativo'].map(cat => (
                    <button 
                        key={cat}
                        onClick={() => setFilter(cat === 'Todos' ? 'all' : cat)}
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                            (filter === cat || (filter === 'all' && cat === 'Todos')) 
                            ? 'bg-secondary text-white shadow-md' 
                            : 'bg-white text-text-body border border-gray-200 hover:bg-gray-100'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <div className="relative">
                <input 
                    type="text" 
                    placeholder="Buscar documento..." 
                    className="pl-9 pr-4 py-2 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none w-64"
                />
                <svg className="w-4 h-4 text-text-body absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-text-body font-semibold uppercase tracking-wider text-xs">
                    <tr>
                        <th className="px-6 py-4">Documento</th>
                        <th className="px-6 py-4">Categoría</th>
                        <th className="px-6 py-4">Estado</th>
                        <th className="px-6 py-4">Fecha Carga</th>
                        <th className="px-6 py-4">Vencimiento</th>
                        <th className="px-6 py-4 text-right">Acciones</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {documents
                        .filter(doc => filter === 'all' || doc.type === filter)
                        .map((doc) => (
                        <motion.tr 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            key={doc.id} 
                            className="hover:bg-gray-50/80 transition-colors group"
                        >
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded bg-red-50 flex items-center justify-center text-red-500 flex-shrink-0 border border-red-100">
                                        <span className="text-[10px] font-bold">PDF</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-text-main">{doc.name}</p>
                                        <p className="text-xs text-text-body">{doc.size}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="px-2 py-1 bg-gray-100 text-text-body rounded text-xs font-bold border border-gray-200">
                                    {doc.type}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(doc.status)}`}>
                                    {doc.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-text-body font-medium">{doc.date}</td>
                            <td className="px-6 py-4">
                                {doc.expiry ? (
                                    <span className={`font-mono font-bold ${doc.status === 'Vencido' ? 'text-red-600' : doc.status === 'Por Vencer' ? 'text-amber-600' : 'text-text-body'}`}>
                                        {doc.expiry}
                                    </span>
                                ) : (
                                    <span className="text-text-body text-xs italic">N/A</span>
                                )}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="p-2 text-text-body hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Descargar">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
                                    </button>
                                    <button className="p-2 text-text-body hover:text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Actualizar">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                                    </button>
                                    <button className="p-2 text-text-body hover:text-text-main hover:bg-gray-100 rounded-lg transition-colors" title="Historial">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                    </button>
                                </div>
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
        
        {/* Footer de Paginación (Visual) */}
        <div className="p-4 border-t border-gray-100 flex justify-between items-center text-xs text-text-body">
            <span>Mostrando 5 de 12 documentos</span>
            <div className="flex gap-1">
                <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50">Anterior</button>
                <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Siguiente</button>
            </div>
        </div>

      </div>
    </div>
  );
}
