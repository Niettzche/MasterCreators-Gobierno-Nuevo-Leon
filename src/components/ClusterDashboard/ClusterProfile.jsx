import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// =========================================================
// COMPONENTE: ClusterProfile
// PROPÓSITO:
// Gestión del perfil institucional del Clúster.
// Datos generales, contacto y órganos de gobierno.
// Ahora incluye vista de directorio para empresas asociadas.
// =========================================================

export default function ClusterProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentTab = queryParams.get('tab') || 'profile'; // Default to 'profile'

  // State for Directory View
  const [selectedMember, setSelectedMember] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock Data Profile
  const [profile, setProfile] = useState({
    name: "Clúster Automotriz de Nuevo León A.C.",
    rfc: "CAN123456XYZ",
    address: "Av. Fundidora 501, Col. Obrera, Monterrey, N.L.",
    website: "www.claut.com.mx",
    repName: "Lic. Roberto Martínez",
    repEmail: "direccion@claut.com.mx",
    repPhone: "(81) 8345-9000",
    president: "Ing. Carlos García (Metalsa)",
    secretary: "Lic. Ana López (Nemak)",
    members: 85
  });

  // Mock Data Companies (Expanded)
  const mockCompanies = [
    { 
      id: 1, 
      name: "Empresa X S.A. de C.V.", 
      sector: "Automotriz", 
      type: "Autopartes",
      tier: "Tier 1",
      contact: "contacto@empresax.com", 
      status: "Activo",
      location: "Monterrey",
      description: "Empresa líder en manufactura de componentes automotrices de alta precisión para motores de combustión interna.",
      website: "www.empresax.com",
      employees: "500-1000",
      certifications: ["ISO 9001", "IATF 16949"],
      products: ["Pistones", "Bielas", "Válvulas"]
    },
    { 
      id: 2, 
      name: "Manufacturas Y Ltda.", 
      sector: "Metalmecánica", 
      type: "Maquinado",
      tier: "Tier 2",
      contact: "info@manufacturasy.com", 
      status: "Activo",
      location: "Apodaca",
      description: "Especialistas en maquinados CNC de precisión y fabricación de moldes para inyección de plástico.",
      website: "www.manufacturasy.com",
      employees: "100-250",
      certifications: ["ISO 9001"],
      products: ["Moldes de inyección", "Piezas CNC"]
    },
    { 
      id: 3, 
      name: "Servicios Z Global", 
      sector: "Logística", 
      type: "Logística 3PL",
      tier: "Proveedor",
      contact: "ventas@serviciosz.com", 
      status: "Inactivo",
      location: "San Pedro",
      description: "Soluciones logísticas integrales 3PL, almacenaje y distribución nacional e internacional.",
      website: "www.serviciosz.com",
      employees: "50-100",
      certifications: ["OEA", "CTPAT"],
      products: ["Transporte", "Almacenaje", "Aduanas"]
    },
    {
      id: 4,
      name: "Tecnologías Avanzadas del Norte",
      sector: "Tecnología",
      type: "Desarrollo de Software",
      tier: "Servicios",
      contact: "contacto@tecnoavanzada.mx",
      status: "Activo",
      location: "Monterrey",
      description: "Desarrollo de software a la medida e integración de sistemas de industria 4.0.",
      website: "www.tecnoavanzada.mx",
      employees: "20-50",
      certifications: ["ISO 27001"],
      products: ["Sistemas MES", "Integración IoT"]
    }
  ];

  // Filter Logic
  const filteredCompanies = mockCompanies.filter(company => 
    company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="-m-8 p-8 min-h-full w-full font-sans text-text-body relative">
      
      {/* MEMBER DETAIL MODAL (Portal) */}
      {selectedMember && ReactDOM.createPortal(
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex justify-end bg-slate-900/30 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="w-full md:w-[600px] h-full bg-white shadow-2xl overflow-y-auto border-l border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gray-50 p-8 border-b border-gray-200 relative">
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-text-main hover:bg-gray-200 rounded-full transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-2xl font-bold text-primary shadow-sm">
                    {selectedMember.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-2xl font-bold text-text-main leading-tight">{selectedMember.name}</h2>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-body">
                        <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded border border-primary/20 uppercase">{selectedMember.tier}</span>
                        <span className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            {selectedMember.location}, N.L.
                        </span>
                    </div>
                  </div>
                </div>
                <p className="text-text-body leading-relaxed text-sm">{selectedMember.description}</p>
                <div className="mt-4 flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-bold border ${selectedMember.status === 'Activo' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                        {selectedMember.status}
                    </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-text-main uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-1 h-4 bg-primary rounded-full"></span>Ficha Técnica
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100"><p className="text-xs text-gray-500 uppercase">Sector</p><p className="font-medium text-text-main">{selectedMember.sector}</p></div>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100"><p className="text-xs text-gray-500 uppercase">Giro</p><p className="font-medium text-text-main">{selectedMember.type}</p></div>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100"><p className="text-xs text-gray-500 uppercase">Empleados</p><p className="font-medium text-text-main">{selectedMember.employees}</p></div>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100"><p className="text-xs text-gray-500 uppercase">Contacto</p><p className="font-medium text-text-main truncate" title={selectedMember.contact}>{selectedMember.contact}</p></div>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 col-span-2"><p className="text-xs text-gray-500 uppercase">Sitio Web</p><a href={`http://${selectedMember.website}`} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline flex items-center gap-1">{selectedMember.website}<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text-main uppercase tracking-wider mb-4 flex items-center gap-2"><span className="w-1 h-4 bg-primary rounded-full"></span>Certificaciones y Productos</h3>
                  {selectedMember.certifications && selectedMember.certifications.length > 0 && (<div className="mb-4"><p className="text-xs text-gray-500 mb-2">Certificaciones</p><div className="flex flex-wrap gap-2">{selectedMember.certifications.map(cert => (<span key={cert} className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-100 flex items-center gap-1"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>{cert}</span>))}</div></div>)}
                  {selectedMember.products && selectedMember.products.length > 0 && (<div><p className="text-xs text-gray-500 mb-2">Productos / Servicios</p><div className="flex flex-wrap gap-2">{selectedMember.products.map(prod => (<span key={prod} className="px-3 py-1 bg-gray-100 text-text-body text-xs font-medium rounded border border-gray-200">{prod}</span>))}</div></div>)}
                </div>
              </div>
              
              {/* Actions Footer */}
              <div className="p-6 border-t border-gray-200 bg-white sticky bottom-0">
                <div className="grid grid-cols-2 gap-4">
                  <button className="w-full py-3 rounded-lg border border-gray-300 text-text-main font-bold hover:bg-gray-50 transition-colors">Editar Información</button>
                  <button className="w-full py-3 rounded-lg bg-primary text-white font-medium hover:bg-orange-600 transition-colors">Ver Reportes</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}

      {/* HEADER PROFILE */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-8">
        <div className="h-32 bg-secondary relative">
            <div className="absolute -bottom-10 left-8 w-24 h-24 bg-white rounded-full border-4 border-white shadow-md flex items-center justify-center">
                <span className="text-2xl font-black text-gray-300">CL</span>
            </div>
        </div>
        <div className="pt-12 pb-6 px-8 flex justify-between items-end">
            <div>
                <h1 className="text-2xl font-black text-text-main">{profile.name}</h1>
                <div className="flex gap-4 mt-2 text-sm text-text-body font-medium">
                    <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                        {profile.rfc}
                    </span>
                    <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                        {profile.members} Socios Activos
                    </span>
                </div>
            </div>
            <button 
                onClick={() => setIsEditing(!isEditing)}
                className={`px-5 py-2 rounded-xl font-bold text-sm transition-colors border ${
                    isEditing 
                    ? 'bg-secondary text-white border-secondary' 
                    : 'bg-white text-text-body border-gray-200 hover:bg-gray-50'
                }`}
            >
                {isEditing ? 'Guardar Cambios' : 'Editar Perfil'}
            </button>
        </div>
      </div>

      {currentTab === 'profile' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* COLUMNA IZQUIERDA: DATOS GENERALES */}
          <div className="lg:col-span-2 space-y-8">
              
              {/* TARJETA 1: IDENTIDAD */}
              <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                  <h2 className="text-lg font-bold text-text-main mb-6 border-b border-gray-100 pb-4">Datos Generales</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                          <label className="block text-xs font-bold text-text-body uppercase mb-2">Razón Social</label>
                          <input 
                              disabled={!isEditing}
                              type="text" value={profile.name}
                              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-text-main font-medium focus:ring-2 focus:ring-primary outline-none disabled:opacity-70"
                          />
                      </div>
                      <div>
                          <label className="block text-xs font-bold text-text-body uppercase mb-2">RFC</label>
                          <input 
                              disabled
                              type="text" value={profile.rfc}
                              className="w-full p-3 bg-gray-100 border border-gray-200 rounded-xl text-text-body font-mono cursor-not-allowed"
                          />
                      </div>
                      <div className="md:col-span-2">
                          <label className="block text-xs font-bold text-text-body uppercase mb-2">Domicilio Fiscal</label>
                          <input 
                              disabled={!isEditing}
                              type="text" value={profile.address}
                              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-text-main font-medium focus:ring-2 focus:ring-primary outline-none disabled:opacity-70"
                          />
                      </div>
                      <div>
                          <label className="block text-xs font-bold text-text-body uppercase mb-2">Sitio Web</label>
                          <input 
                              disabled={!isEditing}
                              type="text" value={profile.website}
                              className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-text-main font-medium focus:ring-2 focus:ring-primary outline-none disabled:opacity-70"
                          />
                      </div>
                  </div>
              </section>

              {/* TARJETA 2: ORGANOS DE GOBIERNO */}
              <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                  <h2 className="text-lg font-bold text-text-main mb-6 border-b border-gray-100 pb-4">Órganos de Gobierno</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                          <label className="block text-xs font-bold text-text-body uppercase mb-2">Presidente</label>
                          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
                              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-text-body font-bold">CG</div>
                              <input 
                                  disabled={!isEditing}
                                  type="text" value={profile.president}
                                  className="bg-transparent w-full outline-none font-medium text-text-main"
                              />
                          </div>
                      </div>
                      <div>
                          <label className="block text-xs font-bold text-text-body uppercase mb-2">Secretario</label>
                          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
                              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-text-body font-bold">AL</div>
                              <input 
                                  disabled={!isEditing}
                                  type="text" value={profile.secretary}
                                  className="bg-transparent w-full outline-none font-medium text-text-main"
                              />
                          </div>
                      </div>
                  </div>
              </section>

          </div>

          {/* COLUMNA DERECHA: CONTACTO */}
          <div className="space-y-8">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                  <h3 className="text-sm font-bold text-text-main mb-4">Contacto Principal</h3>
                  <div className="space-y-4">
                      <div>
                          <label className="block text-xs font-bold text-text-body uppercase mb-1">Representante Legal</label>
                          <input 
                              disabled={!isEditing}
                              type="text" value={profile.repName}
                              className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-bold text-text-main focus:ring-2 focus:ring-primary outline-none"
                          />
                      </div>
                      <div>
                          <label className="block text-xs font-bold text-text-body uppercase mb-1">Correo Electrónico</label>
                          <input 
                              disabled={!isEditing}
                              type="email" value={profile.repEmail}
                              className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-text-body focus:ring-2 focus:ring-primary outline-none"
                          />
                      </div>
                      <div>
                          <label className="block text-xs font-bold text-text-body uppercase mb-1">Teléfono</label>
                          <input 
                              disabled={!isEditing}
                              type="text" value={profile.repPhone}
                              className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-text-body focus:ring-2 focus:ring-primary outline-none"
                          />
                      </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                      <p className="text-xs text-text-body mb-3">
                          Para cambios en el Representante Legal, es necesario actualizar el Poder Notarial en la Bóveda Digital.
                      </p>
                      <button className="w-full py-2 text-xs font-bold text-primary bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                          Ir a Bóveda Digital
                      </button>
                  </div>
              </div>
          </div>
        </div>
      )}

      {currentTab === 'companies' && (
        <div className="space-y-6">
          
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold text-text-main flex items-center gap-2">
              Empresas Asociadas
              <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full">{filteredCompanies.length}</span>
            </h2>
            <div className="relative w-full md:w-80">
                <input 
                    type="text" 
                    placeholder="Buscar empresa, sector o giro..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-1 focus:ring-primary transition-all text-text-main"
                />
                <svg className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCompanies.length > 0 ? (
                filteredCompanies.map((company) => (
                    <div 
                        key={company.id} 
                        onClick={() => setSelectedMember(company)}
                        className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-4 hover:shadow-lg transition-all cursor-pointer hover:border-primary/50 group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-50 to-white -mr-4 -mt-4 rounded-full opacity-50 group-hover:scale-150 transition-transform"></div>
                        
                        <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center font-bold text-text-main text-lg group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0 z-10 border border-gray-100">
                            {company.name.charAt(0)}
                        </div>
                        <div className="flex-1 z-10">
                            <h4 className="font-bold text-text-main group-hover:text-primary transition-colors leading-tight mb-1">{company.name}</h4>
                            <p className="text-xs text-text-body font-medium uppercase tracking-wide mb-2">{company.sector}</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded font-bold border border-gray-200">{company.tier}</span>
                                <span className={`text-[10px] px-2 py-0.5 rounded font-bold border ${company.status === 'Activo' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 'bg-red-50 text-red-700 border-red-100'}`}>
                                    {company.status}
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="col-span-full py-12 text-center text-gray-400">
                    <p>No se encontraron empresas que coincidan con su búsqueda.</p>
                </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}