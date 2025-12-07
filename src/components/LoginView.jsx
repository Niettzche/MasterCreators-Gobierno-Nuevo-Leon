import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import gobiernoLogo from '../assets/gobierno.svg'; 

// =========================================================
// COMPONENTE: LoginView
// PROPÓSITO:
// Interfaz de inicio de sesión para acceder al sistema interno.
// Autentica a los usuarios con diferentes roles (SuperAdmin, Gobierno, Clúster, etc.).
// ========================================================= 

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const mockUsers = [
    { email: 'superadmin@test.com', password: 'password', role: 'superadmin' },
    { email: 'gobierno@test.com', password: 'password', role: 'gobierno' },
    { email: 'cluster@test.com', password: 'password', role: 'cluster' },
    { email: 'evaluator@test.com', password: 'password', role: 'evaluator' },
    { email: 'comite@test.com', password: 'password', role: 'comite' },
    { email: 'finanzas@test.com', password: 'password', role: 'finanzas' },
    { email: 'auditor@test.com', password: 'password', role: 'auditor' },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    const user = mockUsers.find((u) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('userRole', user.role); 
      localStorage.setItem('userEmail', user.email);
      if (user.role === 'superadmin' || user.role === 'gobierno') {
        navigate('/admin-dashboard'); 
      } else if (user.role === 'cluster') {
        navigate('/cluster-dashboard'); 
      } else if (user.role === 'evaluator') {
        navigate('/evaluator-dashboard');
      } else if (user.role === 'finanzas') {
        navigate('/finance-dashboard');
      } else if (user.role === 'auditor') { // New redirection for auditor role
        navigate('/audit-dashboard');
      } else {
        navigate('/dashboard'); 
      }
    } else {
      setError('Credenciales inválidas.');
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      
      {/* Background Decorativo - Elegante y Sutil */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent"></div>
         <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-slate-200/40 via-transparent to-transparent"></div>
         {/* Patrón de puntos sutil */}
         <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white/50"
      >
        {/* Header con Logo */}
        <div className="text-center mb-10">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block p-4 rounded-full bg-gradient-to-b from-white to-slate-50 shadow-sm border border-slate-100 mb-6"
          >
            <img src={gobiernoLogo} alt="Gobierno de Nuevo León" className="h-20 w-auto object-contain" />
          </motion.div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Plataforma de Clústeres</h1>
          <p className="text-slate-500 text-sm mt-2 font-medium">Acceso Institucional Seguro</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Correo Institucional</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm font-medium"
                placeholder="usuario@dominio.gob.mx"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center px-1">
               <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Contraseña</label>
               <a href="#" className="text-xs text-orange-600 hover:text-orange-700 font-semibold hover:underline">¿Olvidaste tu clave?</a>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm font-medium"
                placeholder="••••••••••••"
                required
              />
            </div>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-100"
            >
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{error}</span>
            </motion.div>
          )}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.01, boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3.5 px-4 bg-gradient-to-r from-orange-600 to-orange-500 hover:to-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 text-sm uppercase tracking-wide"
          >
            Entrar al Sistema
          </motion.button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400">
            Gobierno del Estado de Nuevo León <br/>
            <span className="opacity-70">Ventanilla Digital v1.0.0</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}