import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ClusterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('summary');
  const [cluster, setCluster] = useState(null);

  useEffect(() => {
    // Mock Data Fetching
    const mockClusters = [
        { id: 1, name: "Clúster Automotriz de Nuevo León", acronym: "CLAUT", status: "active", members: 120, location: "Monterrey", contactName: "Roberto Martínez", contactEmail: "roberto@claut.mx", website: "www.claut.mx", foundingYear: 2008, address: "Av. Fundidora 501, Col. Obrera" },
        { id: 2, name: "Clúster de Electrodomésticos", acronym: "CLELAC", status: "active", members: 85, location: "Apodaca", contactName: "Ana Silva", contactEmail: "ana@clelac.org", website: "www.clelac.org.mx", foundingYear: 2010, address: "Parque de Investigación e Innovación Tecnológica" },
        { id: 3, name: "Clúster de Software", acronym: "CSOFTMTY", status: "active", members: 450, location: "San Pedro", contactName: "Luis García", contactEmail: "lgarcia@csoftmty.org", website: "www.csoftmty.org", foundingYear: 2006, address: "Blvd. Díaz Ordaz 140" },
        { id: 4, name: "Clúster Agroalimentario", acronym: "AGRO", status: "pending", members: 0, location: "Linares", contactName: "Pendiente", contactEmail: "contacto@agro.mx", website: "n/a", foundingYear: 2024, address: "Carretera Nacional Km 85" },
        { id: 5, name: "Clúster de Turismo", acronym: "TURISMO", status: "active", members: 300, location: "Monterrey", contactName: "Karla Ruiz", contactEmail: "karla@turismonl.mx", website: "www.turismonl.mx", foundingYear: 2015, address: "Pabellón M, Piso 5" },
    ];
    
    // Mock Projects for this cluster
    const mockProjects = [
        { id: 101, title: "Capacitación 4.0", status: "En Revisión", amount: 1200000, year: 2025 },
        { id: 102, title: "Certificación Proveedores", status: "Aprobado", amount: 850000, year: 2024 },
        { id: 103, title: "Encuentro de Negocios", status: "Finalizado", amount: 400000, year: 2023 }
    ];

    // Mock Documents
    const mockDocuments = [
        { name: "Acta Constitutiva.pdf", type: "Legal", date: "2023-01-15", status: "Vigente" },
        { name: "Poder Notarial.pdf", type: "Legal", date: "2023-05-20", status: "Vigente" },
        { name: "Comprobante Domicilio.pdf", type: "Administrativo", date: "2025-01-10", status: "Vigente" },
        { name: "Opinión Cumplimiento SAT.pdf", type: "Fiscal", date: "2025-02-01", status: "Vigente" }
    ];

    const found = mockClusters.find(c => c.id === parseInt(id));
    if (found) {
        setCluster({ ...found, projects: mockProjects, documents: mockDocuments });
    }
  }, [id]);

  if (!cluster) return <div className="p-8 text-center text-slate-500">Cargando información del clúster...</div>;

  return (
    <div className="-m-8 p-8 min-h-full w-full font-sans text-slate-800">
      
      {/* HEADER */}
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => navigate('/admin-dashboard/clusters')}
          className="p-2 rounded-lg hover:bg-gray-100 text-slate-500 hover:text-slate-800 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="flex-1">
           <div className="flex items-center gap-3">
              <h1 className="text-3xl font-black text-slate-800 tracking-tight">{cluster.name}</h1>
              <span className={`px-3 py-1 text-xs font-bold uppercase rounded-full border ${cluster.status === 'active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-orange-50 text-orange-700 border-orange-200'}`}>
                  {cluster.status === 'active' ? 'Activo' : 'Pendiente'}
              </span>
           </div>
           <p className="text-slate-500 font-medium">{cluster.acronym} • {cluster.location}, N.L.</p>
        </div>
      </div>

      {/* TABS */}
      <div className="flex border-b border-gray-200 mb-8">
         {['summary', 'projects', 'documents'].map((tab) => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`px-6 py-3 text-sm font-bold border-b-2 transition-colors capitalize ${
                 activeTab === tab ? 'border-slate-800 text-slate-800' : 'border-transparent text-slate-400 hover:text-slate-600'
               }`}
             >
               {tab === 'summary' ? 'Resumen General' : tab === 'projects' ? 'Proyectos' : 'Documentación'}
             </button>
         ))}
      </div>

      {/* CONTENT */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 min-h-[400px]">
         
         {/* TAB: SUMMARY */}
         {activeTab === 'summary' && (
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                   <div className="grid grid-cols-2 gap-6">
                      <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Contacto Principal</p>
                         <p className="font-bold text-slate-800 text-lg mb-1">{cluster.contactName}</p>
                         <p className="text-sm text-slate-600">{cluster.contactEmail}</p>
                      </div>
                      <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Sitio Web</p>
                         <a href={`http://${cluster.website}`} target="_blank" rel="noreferrer" className="font-bold text-blue-600 hover:underline text-lg block mb-1 truncate">
                             {cluster.website}
                         </a>
                         <p className="text-sm text-slate-600">Portal Oficial</p>
                      </div>
                   </div>
                   
                   <div>
                      <h3 className="font-bold text-slate-800 mb-4 border-b border-gray-100 pb-2">Información Institucional</h3>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
                         <div>
                            <span className="block text-slate-500 font-medium">Razón Social</span>
                            <span className="font-bold text-slate-800">{cluster.name} A.C.</span>
                         </div>
                         <div>
                            <span className="block text-slate-500 font-medium">Año de Fundación</span>
                            <span className="font-bold text-slate-800">{cluster.foundingYear}</span>
                         </div>
                         <div className="col-span-2">
                            <span className="block text-slate-500 font-medium">Dirección Fiscal</span>
                            <span className="font-bold text-slate-800">{cluster.address}, {cluster.location}, Nuevo León.</span>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Sidebar Stats */}
                <div className="space-y-6">
                   <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg">
                      <p className="text-xs font-bold opacity-60 uppercase tracking-widest mb-2">Membresía</p>
                      <p className="text-4xl font-black">{cluster.members}</p>
                      <p className="text-sm opacity-80 mt-1">Empresas y Asociados Activos</p>
                   </div>
                   <div className="bg-emerald-50 text-emerald-800 p-6 rounded-2xl border border-emerald-100">
                      <p className="text-xs font-bold opacity-60 uppercase tracking-widest mb-2">Proyectos Totales</p>
                      <p className="text-4xl font-black">{cluster.projects?.length || 0}</p>
                      <p className="text-sm opacity-80 mt-1">Histórico de participaciones</p>
                   </div>
                </div>
             </div>
         )}

         {/* TAB: PROJECTS */}
         {activeTab === 'projects' && (
             <div>
                <div className="flex justify-between items-center mb-6">
                   <h3 className="font-bold text-slate-800">Historial de Proyectos</h3>
                   <button className="text-xs font-bold text-slate-500 hover:text-slate-800 border border-slate-200 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">
                      Descargar Reporte
                   </button>
                </div>
                <div className="overflow-x-auto">
                   <table className="w-full text-left text-sm">
                      <thead className="bg-gray-50 text-slate-500 font-bold uppercase tracking-wider text-xs border-b border-gray-100">
                         <tr>
                            <th className="px-6 py-4">Nombre del Proyecto</th>
                            <th className="px-6 py-4 text-center">Año</th>
                            <th className="px-6 py-4 text-right">Monto</th>
                            <th className="px-6 py-4 text-center">Estatus</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                         {cluster.projects?.map((proj) => (
                            <tr key={proj.id} className="hover:bg-gray-50 transition-colors">
                               <td className="px-6 py-4 font-bold text-slate-700">{proj.title}</td>
                               <td className="px-6 py-4 text-center text-slate-500">{proj.year}</td>
                               <td className="px-6 py-4 text-right font-mono text-slate-600">${proj.amount.toLocaleString()}</td>
                               <td className="px-6 py-4 text-center">
                                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                                     proj.status === 'Aprobado' || proj.status === 'Finalizado' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' :
                                     'bg-amber-50 text-amber-700 border-amber-100'
                                  }`}>
                                     {proj.status}
                                  </span>
                               </td>
                            </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
             </div>
         )}

         {/* TAB: DOCUMENTS */}
         {activeTab === 'documents' && (
             <div>
                <h3 className="font-bold text-slate-800 mb-6">Expediente Legal y Administrativo</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {cluster.documents?.map((doc, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow group">
                         <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-slate-100 text-slate-500 rounded-lg flex items-center justify-center">
                               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 011.414.586l4 4a1 1 0 01.586 1.414V19a2 2 0 01-2 2z" /></svg>
                            </div>
                            <div>
                               <p className="font-bold text-slate-800 text-sm">{doc.name}</p>
                               <p className="text-xs text-slate-500">{doc.type} • {doc.date}</p>
                            </div>
                         </div>
                         <div className="flex items-center gap-3">
                            <span className="text-[10px] font-bold uppercase bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-100">
                               {doc.status}
                            </span>
                            <button className="text-slate-400 hover:text-slate-700">
                               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            </button>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
         )}

      </div>
    </div>
  );
}
