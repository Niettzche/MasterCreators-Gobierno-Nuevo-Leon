import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function InboxDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('details'); // details, documents, finances
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    const mockMessages = [
        {
          id: 1,
          sender: "Clúster Automotriz (CLAUT)",
          subject: "Solicitud de Proyecto: Capacitación 4.0",
          date: "Hace 10 min",
          status: "pending",
          priority: "high",
          type: "project",
          details: "Solicitud de revisión para el proyecto de capacitación avanzada en industria 4.0. Se adjuntan los presupuestos y el plan de trabajo detallado para su aprobación.",
          documents: [
            { name: "Propuesta_Tecnica_v2.pdf", type: "pdf", size: "2.4 MB", status: "ok" },
            { name: "Presupuesto_Desglosado.xlsx", type: "xls", size: "1.1 MB", status: "ok" },
            { name: "Cronograma_Actividades.pdf", type: "pdf", size: "850 KB", status: "warning" }
          ],
          finance: {
            requested: 1200000,
            approved: 0,
            currency: "MXN",
            items: [
              { concept: "Instructores Especializados", amount: 800000 },
              { concept: "Material Didáctico", amount: 200000 },
              { concept: "Logística y Sedes", amount: 200000 }
            ]
          }
        },
        {
          id: 2,
          sender: "Clúster de Electrodomésticos",
          subject: "Carga de Evidencias Financieras - Marzo",
          date: "Hace 2 horas",
          status: "pending",
          priority: "medium",
          type: "finance",
          details: "Se han cargado las facturas correspondientes al mes de Marzo para la comprobación de gastos operativos. Pendiente validación fiscal.",
          documents: [
            { name: "Factura_F1293.xml", type: "xml", size: "15 KB", status: "ok" },
            { name: "Factura_F1293.pdf", type: "pdf", size: "120 KB", status: "ok" },
            { name: "Comprobante_Pago.pdf", type: "pdf", size: "450 KB", status: "ok" }
          ],
          finance: {
            requested: 0,
            approved: 0,
            currency: "MXN",
            items: []
          }
        },
        {
          id: 3,
          sender: "Clúster Agroalimentario",
          subject: "Registro de Nuevo Usuario: Representante Legal",
          date: "Ayer",
          status: "reviewed",
          priority: "low",
          type: "admin",
          details: "Solicitud de alta para nuevo representante legal. Poder notarial y acta constitutiva adjuntos para revisión.",
          documents: [
            { name: "Acta_Constitutiva.pdf", type: "pdf", size: "5.6 MB", status: "ok" },
            { name: "Poder_Notarial.pdf", type: "pdf", size: "3.2 MB", status: "ok" },
            { name: "INE_Representante.jpg", type: "img", size: "2.1 MB", status: "ok" }
          ],
          finance: null
        }
      ];
    const found = mockMessages.find(m => m.id === parseInt(id));
    setMessage(found);
  }, [id]);

  if (!message) return <div className="p-8 text-center text-slate-500">Cargando mensaje...</div>;

  return (
    <div className="-m-8 p-8 min-h-full w-full font-sans">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
          <button 
            onClick={() => navigate('/admin-dashboard/inbox')}
            className="p-2 rounded-lg hover:bg-gray-100 text-slate-500 hover:text-orange-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div>
             <div className="flex items-center gap-3">
               <h1 className="text-2xl font-black text-slate-800 tracking-tight">{message.subject}</h1>
               <span className={`px-2 py-0.5 text-xs font-bold uppercase border rounded ${
                  message.priority === 'high' ? 'bg-red-50 text-red-600 border-red-100' :
                  message.priority === 'medium' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                  'bg-gray-100 text-gray-500 border-gray-200'
               }`}>
                  {message.priority === 'high' ? 'Alta Prioridad' : message.priority === 'medium' ? 'Media' : 'Baja'}
               </span>
             </div>
             <p className="text-slate-500 text-sm font-medium">{message.sender} • {message.date}</p>
          </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6 bg-white rounded-t-2xl px-6 pt-2">
           <button 
             onClick={() => setActiveTab('details')}
             className={`px-6 py-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'details' ? 'border-orange-500 text-orange-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
           >
             Resumen y Gestión
           </button>
           <button 
             onClick={() => setActiveTab('documents')}
             className={`px-6 py-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'documents' ? 'border-orange-500 text-orange-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
           >
             Documentos ({message.documents?.length || 0})
           </button>
           {message.finance && (
             <button 
               onClick={() => setActiveTab('finances')}
               className={`px-6 py-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'finances' ? 'border-orange-500 text-orange-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
             >
               Finanzas
             </button>
           )}
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl rounded-tr-none border border-gray-200 shadow-sm p-8 min-h-[500px]">
           
           {/* TAB: DETAILS */}
           {activeTab === 'details' && (
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                   <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h3 className="text-sm font-bold text-slate-800 mb-4 uppercase tracking-wide">Descripción</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{message.details}</p>
                   </div>
                </div>
                <div className="space-y-6">
                   <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-gray-100 pb-2">Panel de Gestión</h3>
                      
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2">Estatus Actual</label>
                        <div className="flex items-center gap-2 mb-2">
                            <span className={`w-3 h-3 rounded-full ${message.status === 'pending' ? 'bg-orange-500' : 'bg-emerald-500'}`}></span>
                            <span className="font-bold text-slate-800 text-sm capitalize">{message.status === 'pending' ? 'Pendiente' : 'Procesado'}</span>
                        </div>
                        <select className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-slate-700 focus:ring-2 focus:ring-orange-500/20 outline-none">
                            <option value="pending">Marcar como Pendiente</option>
                            <option value="reviewed">Marcar como Procesado</option>
                            <option value="info">Solicitar Información</option>
                        </select>
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                         <button className="w-full py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold rounded-xl shadow-lg shadow-orange-600/20 transition-all">
                            Guardar Cambios
                         </button>
                      </div>
                   </div>
                </div>
             </div>
           )}

           {/* TAB: DOCUMENTS */}
           {activeTab === 'documents' && (
             <div className="space-y-6">
                <div className="flex justify-between items-center">
                   <h3 className="font-bold text-slate-700">Archivos Adjuntos al Ticket</h3>
                   <button className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg border border-orange-100 hover:bg-orange-100 transition-colors">
                      Descargar Todo (.zip)
                   </button>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {message.documents && message.documents.map((doc, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between hover:border-orange-200 transition-colors group">
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm ${
                              doc.type === 'pdf' ? 'bg-red-50 text-red-600' :
                              doc.type === 'xls' || doc.type === 'xlsx' ? 'bg-green-50 text-green-600' :
                              'bg-blue-50 text-blue-600'
                            }`}>
                              {doc.type.toUpperCase()}
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-800">{doc.name}</p>
                              <p className="text-xs text-slate-500">{doc.size} • Cargado hace 1 día</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="text-slate-400 hover:text-orange-600 p-2 hover:bg-orange-50 rounded-lg transition-colors" title="Descargar">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                            </button>
                            <button className="text-slate-400 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-lg transition-colors" title="Vista Previa">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                            </button>
                        </div>
                      </div>
                  ))}
                </div>
             </div>
           )}

           {/* TAB: FINANCES */}
           {activeTab === 'finances' && message.finance && (
             <div className="space-y-8">
                {/* Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Monto Solicitado</p>
                      <p className="text-4xl font-black text-slate-800">${message.finance.requested.toLocaleString()} <span className="text-sm font-bold text-slate-400">{message.finance.currency}</span></p>
                   </div>
                   <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                      <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">Monto Aprobado</p>
                      <p className="text-4xl font-black text-emerald-700">${message.finance.approved.toLocaleString()} <span className="text-sm font-bold text-emerald-500/70">{message.finance.currency}</span></p>
                   </div>
                </div>

                {/* Table */}
                <div>
                   <h3 className="font-bold text-slate-800 mb-4">Desglose de Partidas Financieras</h3>
                   <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                      <table className="w-full text-left text-sm">
                          <thead className="bg-gray-50 text-slate-500 font-bold uppercase tracking-wider text-xs border-b border-gray-100">
                              <tr>
                                <th className="px-6 py-4">Concepto</th>
                                <th className="px-6 py-4 text-right">Monto</th>
                              </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                              {message.finance.items.map((item, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-700">{item.concept}</td>
                                    <td className="px-6 py-4 text-right font-mono text-slate-600">${item.amount.toLocaleString()}</td>
                                </tr>
                              ))}
                              <tr className="bg-gray-50 font-bold text-slate-800">
                                  <td className="px-6 py-4 text-right uppercase text-xs tracking-wider">Total General</td>
                                  <td className="px-6 py-4 text-right">${message.finance.requested.toLocaleString()}</td>
                              </tr>
                          </tbody>
                      </table>
                   </div>
                </div>
             </div>
           )}

      </div>
    </div>
  );
}
