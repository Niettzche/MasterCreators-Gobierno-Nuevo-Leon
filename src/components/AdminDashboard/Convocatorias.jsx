import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

// --- MODAL COMPONENT ---
const ConvocatoriaModal = ({ isOpen, onClose, onSave, initialData }) => {
  const [formData, setFormData] = useState(initialData || {
    title: '',
    status: 'Borrador',
    deadline: '',
    budget: '',
    description: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ 
        ...formData, 
        budget: Number(formData.budget),
        assigned: formData.assigned || 0,
        applications: formData.applications || 0
    });
    onClose();
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4"
      >
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
        >
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-800 text-lg">
              {initialData ? 'Editar Convocatoria' : 'Nueva Convocatoria'}
            </h3>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nombre del Programa</label>
              <input 
                name="title"
                value={formData.title} 
                onChange={handleChange}
                required
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                placeholder="Ej. Innovación Tecnológica 2025"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Estatus</label>
                <select 
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                >
                  <option value="Borrador">Borrador</option>
                  <option value="Abierta">Abierta</option>
                  <option value="Cerrada">Cerrada</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Fecha de Cierre</label>
                <input 
                  type="date"
                  name="deadline" // In a real app, handle date formatting properly
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Presupuesto Total (MXN)</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-slate-400">$</span>
                <input 
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full pl-7 p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none font-mono"
                    placeholder="0.00"
                />
              </div>
            </div>

            <div>
                 <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Descripción Corta</label>
                 <textarea 
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="3"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                    placeholder="Objetivo principal del apoyo..."
                 ></textarea>
            </div>

            <div className="pt-4 flex justify-end gap-3">
              <button 
                type="button" 
                onClick={onClose}
                className="px-4 py-2 text-slate-600 font-bold text-sm hover:bg-slate-50 rounded-lg transition-colors"
              >
                Cancelar
              </button>
              <button 
                type="submit"
                className="px-6 py-2 bg-orange-600 text-white font-bold text-sm rounded-lg hover:bg-orange-700 shadow-lg shadow-orange-600/20 transition-all"
              >
                Guardar
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default function AdminConvocatorias() {
  // Initial Mock Data
  const [convocatorias, setConvocatorias] = useState([
    {
      id: 1,
      title: "Fortalecimiento Industrial 2025",
      status: "Abierta",
      deadline: "2025-04-30",
      budget: 15000000,
      assigned: 4500000,
      applications: 12,
      description: "Apoyo para la adquisición de maquinaria y certificación de procesos."
    },
    {
      id: 2,
      title: "Vinculación Comercial Q1",
      status: "Cerrada",
      deadline: "2025-03-15",
      budget: 5000000,
      assigned: 5000000,
      applications: 8,
      description: "Fomento a la participación en ferias y eventos internacionales."
    },
    {
      id: 3,
      title: "Innovación Tecnológica 2025",
      status: "Borrador",
      deadline: "",
      budget: 25000000,
      assigned: 0,
      applications: 0,
      description: "Fondos para proyectos de I+D y adopción de Industria 4.0."
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingConv, setEditingConv] = useState(null);

  const handleCreate = (data) => {
    const newConv = {
      ...data,
      id: Date.now(), // Simple ID generation
    };
    setConvocatorias([...convocatorias, newConv]);
  };

  const handleUpdate = (data) => {
    setConvocatorias(convocatorias.map(c => c.id === editingConv.id ? { ...c, ...data } : c));
  };

  const handleDelete = (id) => {
    if (confirm('¿Estás seguro de eliminar esta convocatoria?')) {
        setConvocatorias(convocatorias.filter(c => c.id !== id));
    }
  };

  const openCreateModal = () => {
    setEditingConv(null);
    setIsModalOpen(true);
  };

  const openEditModal = (conv) => {
    setEditingConv(conv);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Gestión de Convocatorias</h1>
          <p className="text-slate-500 text-sm">Crea y administra los programas de apoyo vigentes.</p>
        </div>
        <button 
          onClick={openCreateModal}
          className="px-4 py-2 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/20 flex items-center gap-2 text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
          Nueva Convocatoria
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
            {convocatorias.map((conv) => (
            <motion.div 
                key={conv.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                layout
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow relative overflow-hidden group"
            >
                {/* Status Strip */}
                <div className={`absolute top-0 left-0 w-1.5 h-full ${
                conv.status === 'Abierta' ? 'bg-emerald-500' : 
                conv.status === 'Cerrada' ? 'bg-slate-400' : 'bg-orange-300'
                }`}></div>

                {/* Top Action Bar */}
                <div className="pl-3 mb-4 flex justify-between items-start">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${
                        conv.status === 'Abierta' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                        conv.status === 'Cerrada' ? 'bg-slate-100 text-slate-600 border-slate-200' :
                        'bg-orange-50 text-orange-600 border-orange-100'
                    }`}>
                        {conv.status}
                    </span>
                    
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                            onClick={() => openEditModal(conv)}
                            className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Editar"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                        </button>
                        <button 
                            onClick={() => handleDelete(conv.id)}
                            className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Eliminar"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                        </button>
                    </div>
                </div>

                <div className="pl-3 mb-6">
                    <h3 className="font-bold text-lg text-slate-800 leading-tight mb-2">{conv.title}</h3>
                    <p className="text-xs text-slate-500">
                        {conv.deadline ? `Cierre: ${conv.deadline}` : 'Fecha sin definir'}
                    </p>
                </div>

                <div className="pl-3 space-y-3">
                <div>
                    <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-500">Presupuesto Asignado</span>
                    <span className="font-bold text-slate-700">{conv.budget > 0 ? Math.round((conv.assigned / conv.budget) * 100) : 0}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5">
                        <div 
                        className={`h-1.5 rounded-full ${conv.status === 'Abierta' ? 'bg-emerald-500' : 'bg-slate-400'}`} 
                        style={{ width: `${conv.budget > 0 ? (conv.assigned / conv.budget) * 100 : 0}%` }}
                        ></div>
                    </div>
                    <div className="flex justify-between text-[10px] mt-1 text-slate-400">
                        <span>${(conv.assigned / 1000000).toFixed(1)}M</span>
                        <span>${(conv.budget / 1000000).toFixed(1)}M Total</span>
                    </div>
                </div>
                
                <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
                    <div className="flex -space-x-2">
                        {[...Array(Math.min(3, conv.applications))].map((_, i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[8px] font-bold text-slate-500">
                            {String.fromCharCode(65 + i)}
                        </div>
                        ))}
                        {conv.applications > 3 && (
                        <div className="w-6 h-6 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[8px] font-bold text-slate-500">+{conv.applications - 3}</div>
                        )}
                    </div>
                    <span className="text-xs font-bold text-slate-600">{conv.applications} Solicitudes</span>
                </div>
                </div>

            </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {/* MODAL INSTANCE */}
      {isModalOpen && (
        <ConvocatoriaModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={editingConv ? handleUpdate : handleCreate}
            initialData={editingConv}
        />
      )}

    </div>
  );
}