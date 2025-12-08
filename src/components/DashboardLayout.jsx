import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import gobiernoLogo from '../assets/gobierno.svg';

// =========================================================
// COMPONENTE: DashboardLayout
// PROPÓSITO:
// Layout unificado y basado en configuración (Data-Driven)
// para garantizar consistencia visual absoluta entre roles.
// =========================================================

// --- ICONOS ---
const Icons = {
  Resumen: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>,
  Proyectos: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 011.414.586l4 4a1 1 0 01.586 1.414V19a2 2 0 01-2 2z"/></svg>,
  Boveda: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>,
  Finanzas: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
  Perfil: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>,
  Inbox: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/></svg>,
  Clusters: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>,
  Convocatorias: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>,
  Reports: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>,
  Expedientes: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>,
  Validacion: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>,
  Hallazgos: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/></svg>,
  Soporte: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
};

// --- CONFIGURACIÓN DE MENÚ POR ROL ---
const MENU_CONFIG = {
  cluster: [
    {
      title: "Gestión Operativa",
      key: "gestion",
      items: [
        { to: "/cluster-dashboard", label: "Resumen General", icon: Icons.Resumen },
        { to: "/cluster-dashboard/proyectos", label: "Mis Proyectos", icon: Icons.Proyectos },
        { to: "/cluster-dashboard/evidencias", label: "Bóveda Digital", icon: Icons.Boveda },
      ]
    },
    {
      title: "Administración",
      key: "finanzas",
      items: [
        { to: "/cluster-dashboard/finanzas", label: "Finanzas y Pagos", icon: Icons.Finanzas },
        { to: "/cluster-dashboard/perfil", label: "Perfil Institucional", icon: Icons.Perfil },
      ]
    }
  ],
  evaluator: [
    {
      title: "Evaluación de Proyectos",
      key: "evaluacion",
      items: [
        { to: "/evaluator-dashboard", label: "Expedientes Asignados", icon: Icons.Expedientes },
      ]
    }
  ],
  finanzas: [
    {
      title: "Tesorería y Pagos",
      key: "finanzas_admin",
      items: [
        { to: "/finance-dashboard", label: "Dispersión de Recursos", icon: Icons.Finanzas },
        { to: "/finance-dashboard/bank-accounts", label: "Validación Bancaria", icon: Icons.Validacion },
      ]
    }
  ],
  auditor: [
    {
      title: "Control y Auditoría",
      key: "auditoria_admin",
      items: [
        { to: "/audit-dashboard", label: "Expedientes Cerrados", icon: Icons.Expedientes },
        { to: "/audit-dashboard/reports", label: "Hallazgos y Reportes", icon: Icons.Hallazgos },
      ]
    }
  ],
  admin: [
    {
      title: "Supervisión",
      key: "gestion",
      items: [
        { to: "/admin-dashboard/inbox", label: "Bandeja de Entrada", icon: Icons.Inbox },
        { to: "/admin-dashboard/clusters", label: "Padrón de Clústeres", icon: Icons.Clusters },
      ]
    },
    {
      title: "Programas",
      key: "admin",
      items: [
        { to: "/admin-dashboard/convocatorias", label: "Gestión Convocatorias", icon: Icons.Convocatorias },
        { to: "/admin-dashboard/reports", label: "Indicadores Globales", icon: Icons.Reports },
      ]
    }
  ]
};

export default function DashboardLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [userRole, setUserRole] = useState('');
  const [userEmail, setUserEmail] = useState('');
  
  // Estado del acordeón
  const [openSections, setOpenSections] = useState({
    gestion: false,
    reportes: false,
    finanzas: false,
    evaluacion: false,
    finanzas_admin: false,
    auditoria_admin: false,
    admin: false
  });

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    const email = localStorage.getItem('userEmail');
    
    if (!role) {
      navigate('/login'); 
    } else {
      setUserRole(role);
      setUserEmail(email);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // --- LOGICA DE SELECCIÓN MEJORADA ---
  const isActive = (path) => {
    // Lista de rutas "raíz" que no deben activarse parcialmente
    const rootPaths = [
      '/cluster-dashboard', 
      '/admin-dashboard', 
      '/evaluator-dashboard', 
      '/finance-dashboard', 
      '/audit-dashboard'
    ];

    // Si es una ruta raíz, la coincidencia debe ser EXACTA
    if (rootPaths.includes(path)) {
      return location.pathname === path;
    }

    // Para subrutas (ej. /dashboard/proyectos), permitimos coincidencia parcial
    // para que se mantenga activo si entras al detalle (/dashboard/proyectos/123)
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  // --- SUB-COMPONENTES VISUALES ---

  const MenuSection = ({ title, sectionKey, children }) => (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={() => toggleSection(sectionKey)}
        className="w-full flex justify-between items-center py-4 px-2 text-xs font-bold text-slate-800 uppercase tracking-widest hover:text-orange-600 transition-colors"
      >
        {title}
        <motion.svg 
          animate={{ rotate: openSections[sectionKey] ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-4 h-4 text-gray-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {openSections[sectionKey] && (
          <motion.div 
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-4 space-y-1 px-2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const MenuLink = ({ to, label, icon }) => {
    const active = isActive(to);
    return (
      <button
        onClick={() => navigate(to)}
        className={`relative w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 flex items-center gap-3 group overflow-hidden ${
          active ? 'text-orange-700 font-bold' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
        }`}
      >
        {/* Fondo animado para estado activo */}
        {active && (
          <motion.div
            layoutId="activeMenuLink"
            className="absolute inset-0 bg-orange-50 border-l-4 border-orange-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}

        <span className={`relative z-10 transition-colors ${active ? 'text-orange-600' : 'text-gray-400 group-hover:text-orange-500'}`}>
          {icon}
        </span>
        <span className="relative z-10">{label}</span>
      </button>
    );
  };

  const SupportCard = () => (
    <div className="mt-6 mb-6 relative group cursor-pointer">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
      <div className="relative bg-white p-4 rounded-xl border border-orange-100 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
            {Icons.Soporte}
          </div>
          <div>
            <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wide">Soporte Técnico</h4>
            <p className="text-[10px] text-slate-500">Línea directa</p>
          </div>
        </div>
        <button className="w-full py-1.5 bg-orange-600 text-white text-xs font-bold rounded-lg hover:bg-orange-700 transition-colors">
          Crear Ticket
        </button>
      </div>
    </div>
  );

  // Lógica de renderizado basada en configuración
  const getMenuForRole = (role) => {
    if (['admin', 'gobierno', 'superadmin'].includes(role)) return MENU_CONFIG.admin;
    return MENU_CONFIG[role] || [];
  };

  const currentMenu = getMenuForRole(userRole);
  const showSupportCard = ['cluster', 'evaluator', 'finanzas', 'auditor'].includes(userRole);

  return (
    <div className="flex h-screen bg-[#F3F4F6] overflow-hidden font-sans">
      
      {/* SIDEBAR */}
      <aside className="w-[280px] bg-white border-r border-gray-200 flex flex-col flex-shrink-0 z-30 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 bg-white">
          <div className="flex items-center gap-3">
             <img src={gobiernoLogo} alt="Logo" className="h-10 w-auto object-contain" />
             <div className="leading-tight">
               <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Plataforma</div>
               <div className="text-sm font-black text-slate-800 tracking-tight">CLÚSTERES NL</div>
             </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 custom-scrollbar">
          {currentMenu.map((section) => (
            <MenuSection key={section.key} title={section.title} sectionKey={section.key}>
              {section.items.map((item) => (
                <MenuLink 
                  key={item.to}
                  to={item.to}
                  label={item.label}
                  icon={item.icon}
                />
              ))}
            </MenuSection>
          ))}
          
          {showSupportCard && <SupportCard />}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-orange-600 font-bold text-sm">
              {userEmail ? userEmail.charAt(0).toUpperCase() : 'U'}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-xs font-bold text-slate-700 truncate">{userEmail || 'Usuario'}</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-wide truncate">{userRole || 'Invitado'}</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-bold text-slate-600 hover:text-red-600 hover:border-red-100 hover:bg-red-50 transition-all shadow-sm"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto relative bg-[#F8FAFC]">
        <header
          id="main-content-header"
          className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-gray-200 w-screen -ml-[280px] pl-[312px] pr-8 py-4 flex justify-between items-center"
        >
           <div className="flex-1"> 
             <h1 className="text-xl font-bold text-slate-800">
               {userRole === 'cluster' ? 'Tablero de Control' : 'Panel de Gestión'}
             </h1>
             <p className="text-xs text-slate-500">Bienvenido de nuevo al sistema de gestión.</p>
           </div>
           
           <div className="flex items-center gap-3">
             <button className="p-2 text-gray-400 hover:text-orange-600 transition-colors relative">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
               <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
             </button>
           </div>
        </header>

        <div className="p-8">
          {children}
        </div>
        
        {/* Floating Action Button for Clusters */}
        {userRole === 'cluster' && (
          <motion.button 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="fixed bottom-8 right-8 bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-full shadow-xl shadow-orange-600/30 flex items-center justify-center z-40 transition-transform hover:-translate-y-1"
            onClick={() => navigate('/register-project')} 
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
          </motion.button>
        )}
      </main>
    </div>
  );
}
