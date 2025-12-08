import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import gobiernoLogo from '../assets/gobierno.svg';

// =========================================================
// COMPONENTE: NotFound (404 Page)
// PROPÓSITO:
// Mostrar una página personalizada cuando una ruta no existe.
// Incluye el logo de la aplicación y un mensaje amigable.
// =========================================================

export default function NotFound() {
  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-800 p-6 font-sans max-w-lg mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10, delay: 0.2 }}
        className="mb-8"
      >
        <img src={gobiernoLogo} alt="Logo Gobierno de Nuevo León" className="h-24 w-auto mx-auto" />
      </motion.div>

      <motion.h1 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-5xl md:text-7xl font-black text-orange-600 mb-4"
      >
        404
      </motion.h1>
      
      <motion.p 
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-xl md:text-2xl font-bold text-slate-800 mb-4 text-center"
      >
        ¡Vaya! No encontramos lo que buscabas.
      </motion.p>
      
      <motion.p 
        initial={{ y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-md text-slate-600 mb-8 text-center max-w-md"
      >
        La página que intentas visitar no existe o ha sido movida. Por favor, verifica la URL.
      </motion.p>
      
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link 
          to="/" 
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg shadow-orange-500/30 transition-all flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          Ir a Inicio
        </Link>
      </motion.div>
    </motion.div>
  );
}
