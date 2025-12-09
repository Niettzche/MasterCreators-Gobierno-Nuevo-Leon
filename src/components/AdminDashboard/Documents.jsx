import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function AdminDocuments() {
  // Mock Data
  const documents = [
    { id: 1, name: "Acta Constitutiva.pdf", cluster: "Clúster Automotriz (CLAUT)", type: "Legal", date: "2024-01-15", size: "2.4 MB" },
    { id: 2, name: "Reporte Financiero Q1.xlsx", cluster: "Clúster de Software (Csoftmty)", type: "Financiero", date: "2024-04-10", size: "1.1 MB" },
    { id: 3, name: "Carta de Adhesión.pdf", cluster: "Clúster Agroalimentario", type: "Legal", date: "2024-05-20", size: "850 KB" },
    { id: 4, name: "Evidencia Evento Anual.jpg", cluster: "Clúster de Turismo", type: "Proyecto", date: "2024-06-05", size: "4.2 MB" },
    { id: 5, name: "Poder Notarial.pdf", cluster: "Clúster de Electrodomésticos", type: "Legal", date: "2023-11-30", size: "1.8 MB" },
    { id: 6, name: "Proyecto 'Tech 2025'.pdf", cluster: "Clúster de Software (Csoftmty)", type: "Proyecto", date: "2024-02-28", size: "5.5 MB" },
    { id: 7, name: "Comprobante de Domicilio.pdf", cluster: "Clúster Automotriz (CLAUT)", type: "Legal", date: "2024-01-10", size: "400 KB" },
  ];

  const [filter, setFilter] = useState('');

  const filteredDocs = documents.filter(doc =>
    doc.name.toLowerCase().includes(filter.toLowerCase()) ||
    doc.cluster.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Expedientes Globales</h1>
          <p className="text-slate-500 text-sm">Repositorio centralizado de documentos de todos los clústeres.</p>
        </div>
        <div className="relative">
             <input
                type="text"
                placeholder="Buscar documento o clúster..."
                className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 w-64 md:w-80 shadow-sm transition-all"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
             />
             <svg className="w-4 h-4 text-slate-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 uppercase tracking-wider font-semibold">
                    <tr>
                        <th className="p-4">Nombre del Archivo</th>
                        <th className="p-4">Clúster</th>
                        <th className="p-4">Categoría</th>
                        <th className="p-4">Fecha</th>
                        <th className="p-4 text-right">Tamaño</th>
                        <th className="p-4 text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {filteredDocs.map((doc) => (
                        <motion.tr
                            key={doc.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="hover:bg-slate-50 transition-colors group"
                        >
                            <td className="p-4 font-bold text-slate-700 flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-500">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                                </div>
                                {doc.name}
                            </td>
                            <td className="p-4 text-slate-600 text-xs font-medium">{doc.cluster}</td>
                            <td className="p-4">
                                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase border ${
                                    doc.type === 'Legal' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                    doc.type === 'Financiero' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                                    'bg-purple-50 text-purple-600 border-purple-100'
                                }`}>
                                    {doc.type}
                                </span>
                            </td>
                            <td className="p-4 text-slate-500 font-mono text-xs">{doc.date}</td>
                            <td className="p-4 text-right text-slate-400 font-mono text-xs">{doc.size}</td>
                            <td className="p-4 text-center">
                                <button className="text-slate-400 hover:text-orange-600 transition-colors p-2 hover:bg-orange-50 rounded-lg" title="Descargar">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                                </button>
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
        {filteredDocs.length === 0 && (
            <div className="p-12 text-center text-slate-400 flex flex-col items-center">
                <svg className="w-12 h-12 mb-3 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 011.414.586l4 4a1 1 0 01.586 1.414V19a2 2 0 01-2 2z"/></svg>
                <p>No se encontraron documentos que coincidan con la búsqueda.</p>
            </div>
        )}
      </div>
    </div>
  );
}
