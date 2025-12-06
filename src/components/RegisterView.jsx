import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import MITCLogo from '../assets/MITC.svg'; // Placeholder for your MITC logo, if any

export default function RegisterView() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    sector: '',
    employees: '',
    comments: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form data submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      // You might want to clear form data here or redirect
    }, 2000);
  };

  const handleReset = () => {
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      sector: '',
      employees: '',
      comments: '',
    });
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-background-alternate p-6 md:p-10 flex items-center justify-center">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-lg w-full text-center border border-gray-200"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="w-24 h-24 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center text-green-500 text-4xl"
            >
              <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </motion.div>
            <h2 className="text-3xl font-bold text-text-main mb-3">¡Registro Exitoso!</h2>
            <p className="text-text-body text-lg mb-6">
              Gracias por tu interés en formar parte del ecosistema de Nuevo León. Revisaremos tu información y nos pondremos en contacto pronto.
            </p>
            <button
              onClick={handleReset}
              className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-primary/20 hover:shadow-primary/30"
            >
              Registrar otra empresa
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-2xl w-full border border-gray-200"
          >
            <div className="text-center mb-8">
              <img src={MITCLogo} alt="MITC Logo" className="h-16 mx-auto mb-4 text-primary" /> {/* Using SVG directly */}
              <h2 className="text-3xl font-bold text-text-main mb-2">Registra tu Empresa</h2>
              <p className="text-text-body">
                Únete a la red de clústeres estratégicos de Nuevo León.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-text-main mb-1">Nombre de la Empresa</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-text-main mb-1">Nombre de Contacto</label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-main mb-1">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text-main mb-1">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="sector" className="block text-sm font-medium text-text-main mb-1">Sector Principal</label>
                <select
                  id="sector"
                  name="sector"
                  value={formData.sector}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                  required
                >
                  <option value="">Selecciona un sector</option>
                  <option value="Manufactura">Manufactura</option>
                  <option value="Tecnología">Tecnología</option>
                  <option value="Servicios">Servicios</option>
                  <option value="Ciencia">Ciencia</option>
                  <option value="Consumo">Consumo</option>
                  <option value="Industria">Industria</option>
                </select>
              </div>
              <div>
                <label htmlFor="employees" className="block text-sm font-medium text-text-main mb-1">Número de Empleados</label>
                <input
                  type="number"
                  id="employees"
                  name="employees"
                  value={formData.employees}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition-colors"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="comments" className="block text-sm font-medium text-text-main mb-1">Comentarios / Intereses</label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary transition-colors resize-y"
                ></textarea>
              </div>
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-primary/20 hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Registrar Empresa'}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
