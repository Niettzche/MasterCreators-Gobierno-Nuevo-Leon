import React, { useState } from 'react';
import { motion } from 'framer-motion';

// =========================================================
// COMPONENTE: ClusterProfile
// PROPÓSITO:
// Gestión del perfil institucional del Clúster.
// Datos generales, contacto y órganos de gobierno.
// =========================================================

export default function ClusterProfile() {
  const [isEditing, setIsEditing] = useState(false);

  // Mock Data
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

  return (
    <div className="-m-8 p-8 min-h-full w-full font-sans text-slate-900">
      
      {/* HEADER PROFILE */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="h-32 bg-gradient-to-r from-slate-800 to-slate-700 relative">
            <div className="absolute -bottom-10 left-8 w-24 h-24 bg-white rounded-full border-4 border-white shadow-md flex items-center justify-center">
                <span className="text-2xl font-black text-slate-300">CL</span>
            </div>
        </div>
        <div className="pt-12 pb-6 px-8 flex justify-between items-end">
            <div>
                <h1 className="text-2xl font-black text-slate-900">{profile.name}</h1>
                <div className="flex gap-4 mt-2 text-sm text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                        {profile.rfc}
                    </span>
                    <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                        {profile.members} Socios Activos
                    </span>
                </div>
            </div>
            <button 
                onClick={() => setIsEditing(!isEditing)}
                className={`px-5 py-2 rounded-xl font-bold text-sm transition-colors border ${
                    isEditing 
                    ? 'bg-slate-900 text-white border-slate-900' 
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
            >
                {isEditing ? 'Guardar Cambios' : 'Editar Perfil'}
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* COLUMNA IZQUIERDA: DATOS GENERALES */}
        <div className="lg:col-span-2 space-y-8">
            
            {/* TARJETA 1: IDENTIDAD */}
            <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                <h2 className="text-lg font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">Datos Generales</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Razón Social</label>
                        <input 
                            disabled={!isEditing}
                            type="text" value={profile.name}
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-medium focus:ring-2 focus:ring-orange-500 outline-none disabled:opacity-70"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">RFC</label>
                        <input 
                            disabled
                            type="text" value={profile.rfc}
                            className="w-full p-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-500 font-mono cursor-not-allowed"
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Domicilio Fiscal</label>
                        <input 
                            disabled={!isEditing}
                            type="text" value={profile.address}
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-medium focus:ring-2 focus:ring-orange-500 outline-none disabled:opacity-70"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Sitio Web</label>
                        <input 
                            disabled={!isEditing}
                            type="text" value={profile.website}
                            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 font-medium focus:ring-2 focus:ring-orange-500 outline-none disabled:opacity-70"
                        />
                    </div>
                </div>
            </section>

            {/* TARJETA 2: ORGANOS DE GOBIERNO */}
            <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                <h2 className="text-lg font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">Órganos de Gobierno</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Presidente</label>
                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">CG</div>
                            <input 
                                disabled={!isEditing}
                                type="text" value={profile.president}
                                className="bg-transparent w-full outline-none font-medium text-slate-700"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Secretario</label>
                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">AL</div>
                            <input 
                                disabled={!isEditing}
                                type="text" value={profile.secretary}
                                className="bg-transparent w-full outline-none font-medium text-slate-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>

        {/* COLUMNA DERECHA: CONTACTO */}
        <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                <h3 className="text-sm font-bold text-slate-800 mb-4">Contacto Principal</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Representante Legal</label>
                        <input 
                            disabled={!isEditing}
                            type="text" value={profile.repName}
                            className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-bold text-slate-800 focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Correo Electrónico</label>
                        <input 
                            disabled={!isEditing}
                            type="email" value={profile.repEmail}
                            className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-600 focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Teléfono</label>
                        <input 
                            disabled={!isEditing}
                            type="text" value={profile.repPhone}
                            className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-600 focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                    </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-100">
                    <p className="text-xs text-slate-400 mb-3">
                        Para cambios en el Representante Legal, es necesario actualizar el Poder Notarial en la Bóveda Digital.
                    </p>
                    <button className="w-full py-2 text-xs font-bold text-orange-600 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                        Ir a Bóveda Digital
                    </button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
