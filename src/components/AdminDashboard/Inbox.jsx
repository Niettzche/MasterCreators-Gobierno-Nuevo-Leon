import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function AdminInbox() {
  const [filter, setFilter] = useState('pending');
  const navigate = useNavigate();
  
  const messages = [
    {
      id: 1,
      sender: "Clúster Automotriz (CLAUT)",
      subject: "Solicitud de Proyecto: Capacitación 4.0",
      date: "Hace 10 min",
      status: "pending",
      priority: "high",
      type: "project"
    },
    {
      id: 2,
      sender: "Clúster de Electrodomésticos",
      subject: "Carga de Evidencias Financieras - Marzo",
      date: "Hace 2 horas",
      status: "pending",
      priority: "medium",
      type: "finance"
    },
    {
      id: 3,
      sender: "Clúster Agroalimentario",
      subject: "Registro de Nuevo Usuario: Representante Legal",
      date: "Ayer",
      status: "reviewed",
      priority: "low",
      type: "admin"
    }
  ];

  const filteredMessages = messages.filter(m => filter === 'pending' ? m.status === 'pending' : m.status === 'reviewed');

  return (
    <div className="space-y-6 relative">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Bandeja de Entrada</h1>
          <p className="text-slate-500 text-sm">Gestiona las solicitudes y notificaciones del sistema.</p>
        </div>
        <div className="flex bg-white p-1 rounded-lg border border-slate-200">
          <button 
            onClick={() => setFilter('pending')}
            className={`px-4 py-1.5 text-sm font-bold rounded-md transition-all ${filter === 'pending' ? 'bg-orange-100 text-orange-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Pendientes
          </button>
          <button 
            onClick={() => setFilter('reviewed')}
            className={`px-4 py-1.5 text-sm font-bold rounded-md transition-all ${filter === 'reviewed' ? 'bg-orange-100 text-orange-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Procesados
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {filteredMessages.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {filteredMessages.map((msg) => (
              <motion.div 
                key={msg.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => navigate(`/admin-dashboard/inbox/${msg.id}`)}
                className="p-6 hover:bg-slate-50 transition-colors flex items-start gap-4 cursor-pointer group"
              >
                <div className={`mt-1 w-3 h-3 rounded-full flex-shrink-0 ${msg.priority === 'high' ? 'bg-red-500' : msg.priority === 'medium' ? 'bg-blue-500' : 'bg-slate-300'}`}></div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-bold text-slate-800 group-hover:text-orange-600 transition-colors">{msg.subject}</h3>
                    <span className="text-xs text-slate-400 font-medium">{msg.date}</span>
                  </div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">{msg.sender}</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px] font-bold uppercase border border-slate-200">
                      {msg.type === 'project' ? 'Proyecto' : msg.type === 'finance' ? 'Finanzas' : 'Admin'}
                    </span>
                    {msg.priority === 'high' && (
                      <span className="px-2 py-0.5 bg-red-50 text-red-600 rounded text-[10px] font-bold uppercase border border-red-100">
                        Urgente
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center self-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <button className="p-2 text-slate-400 hover:text-orange-600 bg-white border border-slate-200 rounded-lg shadow-sm">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center text-slate-400">
            <svg className="w-12 h-12 mx-auto mb-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/></svg>
            <p>No tienes notificaciones en esta bandeja.</p>
          </div>
        )}
      </div>
    </div>
  );
}