import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

// --- MODAL COMPONENT FOR CLUSTERS ---
const ClusterModal = ({ isOpen, onClose, onSave, initialData }) => {
  const [formData, setFormData] = useState(initialData || {
    name: '',
    acronym: '',
    location: '',
    members: '',
    status: 'pending',
    contactName: '',
    contactEmail: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
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
              {initialData ? 'Editar Clúster' : 'Registrar Nuevo Clúster'}
            </h3>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nombre Oficial</label>
                    <input 
                        name="name"
                        value={formData.name} 
                        onChange={handleChange}
                        required
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                        placeholder="Ej. Clúster Automotriz de NL"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Siglas</label>
                    <input 
                        name="acronym"
                        value={formData.acronym} 
                        onChange={handleChange}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                        placeholder="Ej. CLAUT"
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Ubicación / Municipio</label>
                <input 
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                  placeholder="Ej. Monterrey"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Miembros Actuales</label>
                <input 
                  type="number"
                  name="members"
                  value={formData.members}
                  onChange={handleChange}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                  placeholder="0"
                />
              </div>
            </div>

            <hr className="border-slate-100" />
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Contacto Principal</h4>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nombre</label>
                    <input 
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                        placeholder="Representante"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email</label>
                    <input 
                        type="email"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleChange}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                        placeholder="contacto@cluster.com"
                    />
                </div>
            </div>

            <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Estatus del Registro</label>
                <select 
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                >
                  <option value="pending">Pendiente de Validación</option>
                  <option value="active">Activo</option>
                  <option value="suspended">Suspendido</option>
                </select>
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
                className="px-6 py-2 bg-slate-900 text-white font-bold text-sm rounded-lg hover:bg-slate-800 shadow-lg shadow-slate-200 transition-all"
              >
                Guardar Registro
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
};

export default function AdminClusters() {
  const [clusters, setClusters] = useState([
    { id: 1, name: "Clúster Automotriz de Nuevo León", acronym: "CLAUT", status: "active", members: 120, location: "Monterrey", contactName: "Roberto Martínez", contactEmail: "roberto@claut.mx" },
    { id: 2, name: "Clúster de Electrodomésticos", acronym: "CLELAC", status: "active", members: 85, location: "Apodaca", contactName: "Ana Silva", contactEmail: "ana@clelac.org" },
    { id: 3, name: "Clúster de Software", acronym: "CSOFTMTY", status: "active", members: 450, location: "San Pedro", contactName: "Luis García", contactEmail: "lgarcia@csoftmty.org" },
    { id: 4, name: "Clúster Agroalimentario", acronym: "AGRO", status: "pending", members: 0, location: "Linares", contactName: "Pendiente", contactEmail: "contacto@agro.mx" },
    { id: 5, name: "Clúster de Turismo", acronym: "TURISMO", status: "active", members: 300, location: "Monterrey", contactName: "Karla Ruiz", contactEmail: "karla@turismonl.mx" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCluster, setEditingCluster] = useState(null);

  const handleCreate = (data) => {
    const newCluster = {
        ...data,
        id: Date.now(),
        members: Number(data.members) || 0
    };
    setClusters([...clusters, newCluster]);
  };

  const handleUpdate = (data) => {
    setClusters(clusters.map(c => c.id === editingCluster.id ? { ...c, ...data } : c));
  };

  const handleDelete = (id) => {
    if (confirm('¿Confirma que desea dar de baja este Clúster del padrón?')) {
        setClusters(clusters.filter(c => c.id !== id));
    }
  };

  const openCreateModal = () => {
    setEditingCluster(null);
    setIsModalOpen(true);
  };

  const openEditModal = (cluster) => {
    setEditingCluster(cluster);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Padrón de Clústeres</h1>
          <p className="text-slate-500 text-sm">Administración de entidades registradas en la plataforma.</p>
        </div>
        <button 
            onClick={openCreateModal}
            className="px-4 py-2 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200 flex items-center gap-2 text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
          Registrar Clúster
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 uppercase tracking-wider font-semibold">
              <tr>
                <th className="p-4">Nombre del Clúster</th>
                <th className="p-4">Ubicación</th>
                <th className="p-4 text-center">Miembros</th>
                <th className="p-4 text-center">Estatus</th>
                <th className="p-4 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {clusters.map((cluster) => (
                <motion.tr 
                  key={cluster.id} 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="hover:bg-slate-50 transition-colors group"
                >
                  <td className="p-4">
                    <div className="font-bold text-slate-800">{cluster.name}</div>
                    <div className="text-xs text-slate-400 font-bold">{cluster.acronym}</div>
                  </td>
                  <td className="p-4 text-slate-500">{cluster.location}</td>
                  <td className="p-4 text-center font-mono text-slate-600">{cluster.members}</td>
                  <td className="p-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${cluster.status === 'active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-orange-50 text-orange-700 border-orange-200'}`}>
                      {cluster.status === 'active' ? 'Activo' : 'Pendiente'}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center gap-2">
                        <button 
                            onClick={() => openEditModal(cluster)}
                            className="text-slate-400 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors"
                            title="Editar Información"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                        </button>
                        <button 
                            onClick={() => handleDelete(cluster.id)}
                            className="text-slate-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50 transition-colors"
                            title="Dar de Baja"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                        </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <ClusterModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={editingCluster ? handleUpdate : handleCreate}
            initialData={editingCluster}
        />
      )}
    </div>
  );
}