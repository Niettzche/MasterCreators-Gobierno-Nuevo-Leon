import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

import clautLogo from '../assets/logos/claut.jpg';
import csoftmtyLogo from '../assets/logos/csoftmty.jpg';
import clelacLogo from '../assets/logos/clelac.jpg';
import aeroclusterLogo from '../assets/logos/aerocluster.jpg';
import agroalimLogo from '../assets/logos/agroalim.jpg';
import energeticoLogo from '../assets/logos/energetico.jpg';
import saludLogo from '../assets/logos/salud.jpg';
import viviendaLogo from '../assets/logos/vivienda.jpg';
import bioclusterLogo from '../assets/logos/biocluster.jpg';
import nanoLogo from '../assets/logos/nano.jpg';
import mimecLogo from '../assets/logos/mimec.jpg';
import herramentalesLogo from '../assets/logos/herramentales.jpg';
import turismoLogo from '../assets/logos/turismo.jpg';

// =========================================================
// COMPONENTE: DirectoryView
// PROPÓSITO:
// Vista pública del directorio de Clústeres y Empresas.
// Permite a cualquier visitante buscar y explorar la red.
// No requiere autenticación.
// =========================================================

// --- MOCK DATA: 15 CLUSTERS ---
const clustersData = [
  { id: 1, name: 'Automotriz (CLAUT)', icon: <img src={clautLogo} alt="CLAUT" className="w-full h-full object-contain p-1" />, members: 120, category: 'Manufactura' },
  { id: 2, name: 'Software / TI (Csoftmty)', icon: <img src={csoftmtyLogo} alt="Csoftmty" className="w-full h-full object-contain p-1" />, members: 450, category: 'Tecnología' },
  { id: 3, name: 'Electrodomésticos (CLELAC)', icon: <img src={clelacLogo} alt="CLELAC" className="w-full h-full object-contain p-1" />, members: 85, category: 'Manufactura' },
  { id: 4, name: 'Aeroespacial', icon: <img src={aeroclusterLogo} alt="Aeroespacial" className="w-full h-full object-contain p-1" />, members: 40, category: 'Manufactura' },
  { id: 5, name: 'Agroalimentario', icon: <img src={agroalimLogo} alt="Agroalimentario" className="w-full h-full object-contain p-1" />, members: 110, category: 'Consumo' },
  { id: 6, name: 'Energía', icon: <img src={energeticoLogo} alt="Energía" className="w-full h-full object-contain p-1" />, members: 75, category: 'Industria' },
  { id: 7, name: 'Salud', icon: <img src={saludLogo} alt="Salud" className="w-full h-full object-contain p-1" />, members: 90, category: 'Servicios' },
  { id: 8, name: 'Vivienda y Desarrollo', icon: <img src={viviendaLogo} alt="Vivienda" className="w-full h-full object-contain p-1" />, members: 200, category: 'Servicios' },
  { id: 9, name: 'Biotecnología', icon: <img src={bioclusterLogo} alt="Biotecnología" className="w-full h-full object-contain p-1" />, members: 35, category: 'Ciencia' },
  { id: 10, name: 'Nanotecnología', icon: <img src={nanoLogo} alt="Nanotecnología" className="w-full h-full object-contain p-1" />, members: 25, category: 'Ciencia' },
  { id: 11, name: 'Medios Creativos', icon: <img src={mimecLogo} alt="MIMEC" className="w-full h-full object-contain p-1" />, members: 60, category: 'Tecnología' },
  { id: 12, name: 'Logística y Transporte', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>, members: 150, category: 'Servicios' },
  { id: 13, name: 'Herramentales', icon: <img src={herramentalesLogo} alt="Herramentales" className="w-full h-full object-contain p-1" />, members: 180, category: 'Manufactura' },
  { id: 14, name: 'Turismo', icon: <img src={turismoLogo} alt="Turismo" className="w-full h-full object-contain p-1" />, members: 300, category: 'Servicios' },
  { id: 15, name: 'Gastronómico', icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" /></svg>, members: 500, category: 'Consumo' },
];

// --- MOCK DATA: MEMBERS (Example for drill-down) ---
const membersData = [
  { 
    id: 101, 
    clusterId: 12, 
    name: 'Transportes del Norte', 
    type: 'Transporte de Carga', 
    tier: 'Tier 1', 
    location: 'Apodaca',
    description: 'Líderes en soluciones logísticas integrales con más de 50 años de experiencia en el transporte de carga federal y distribución.',
    website: 'www.grupotransportes.com',
    email: 'ventas@transportes.com',
    employees: '1000+',
    certifications: ['ISO 9001', 'CTPAT', 'OEA'],
    products: ['Carga General', 'Transporte Refrigerado', 'Almacenaje']
  },
  { 
    id: 102, 
    clusterId: 12, 
    name: 'Logística Regiomontana', 
    type: 'Almacenaje y Distribución', 
    tier: 'Tier 2', 
    location: 'Escobedo',
    description: 'Especialistas en servicios de almacenaje "Just in Time" para la industria manufacturera.',
    website: 'www.logistica-regio.mx',
    email: 'info@logistica-regio.mx',
    employees: '200-500',
    certifications: ['ISO 14001'],
    products: ['Cross-docking', 'Inventarios']
  },
  { 
    id: 103, 
    clusterId: 12, 
    name: 'Cargo Express NL', 
    type: 'Última Milla', 
    tier: 'Tier 3', 
    location: 'Monterrey',
    description: 'Soluciones ágiles para entrega de última milla en el área metropolitana.',
    website: 'www.cargoexpress.com',
    email: 'hola@cargoexpress.com',
    employees: '50-200',
    certifications: [],
    products: ['Mensajería', 'Paquetería']
  },
  { 
    id: 104, 
    clusterId: 1, 
    name: 'Nemak', 
    type: 'Autopartes', 
    tier: 'OEM', 
    location: 'García',
    description: 'Proveedor líder de soluciones innovadoras de aligeramiento para la industria automotriz global.',
    website: 'www.nemak.com',
    email: 'contact@nemak.com',
    employees: '5000+',
    certifications: ['IATF 16949', 'ISO 14001'],
    products: ['Cabezas de motor', 'Bloques de motor', 'Componentes estructurales']
  },
  { 
    id: 105, 
    clusterId: 1, 
    name: 'Kia Motors', 
    type: 'Ensambladora', 
    tier: 'OEM', 
    location: 'Pesquería',
    description: 'Planta de manufactura de última generación produciendo vehículos de calidad mundial.',
    website: 'www.kia.com.mx',
    email: 'relaciones@kia.com',
    employees: '3000+',
    certifications: ['ISO 9001', 'ISO 14001'],
    products: ['Forte', 'Rio']
  },
  { 
    id: 106, 
    clusterId: 2, 
    name: 'Softtek', 
    type: 'Desarrollo Software', 
    tier: 'Global', 
    location: 'San Pedro',
    description: 'Proveedor global de soluciones de TI y procesos de negocio.',
    website: 'www.softtek.com',
    email: 'info@softtek.com',
    employees: '10000+',
    certifications: ['CMMI Level 5', 'ISO 27001'],
    products: ['Desarrollo a medida', 'Ciberseguridad', 'Cloud']
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// --- COMPONENTS ---

const FilterSection = ({ title, options, selected, onSelect, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={onToggle}
        className="w-full flex justify-between items-center py-4 text-sm font-bold text-text-main uppercase tracking-widest hover:text-primary transition-colors"
      >
        {title}
        <svg 
          className={`w-4 h-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-4 space-y-1">
              {options.map(opt => (
                <button
                  key={opt}
                  onClick={() => onSelect(opt)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all flex items-center justify-between ${
                    selected === opt 
                      ? 'bg-primary/10 text-primary font-medium' 
                      : 'text-text-body hover:bg-gray-50'
                  }`}
                >
                  {opt}
                  {selected === opt && <span className="text-xs font-bold">✓</span>}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// NEW: AI Chat Modal Component
const AiChatModal = ({ isOpen, onClose, onSelectMember }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hola, soy el Asistente de Vinculación de Nuevo León. ¿Cómo puedo ayudarte a conectar con el ecosistema industrial?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) { // Only scroll when modal is open
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI processing delay
    setTimeout(() => {
      // Simple Mock Logic for AI Response
      let recommendations = [];
      const lowerInput = userMsg.content.toLowerCase();

      if (lowerInput.includes('automatizar') || lowerInput.includes('software') || lowerInput.includes('digital') || lowerInput.includes('ti')) {
        recommendations = membersData.filter(m => m.clusterId === 2); // Software cluster
      } else if (lowerInput.includes('transporte') || lowerInput.includes('logística') || lowerInput.includes('envío')) {
        recommendations = membersData.filter(m => m.clusterId === 12); // Logistics
      } else if (lowerInput.includes('autos') || lowerInput.includes('vehículos') || lowerInput.includes('autopartes')) {
        recommendations = membersData.filter(m => m.clusterId === 1); // Automotive
      } else {
        // Default mixed recommendation
        recommendations = [membersData[0], membersData[3], membersData[5]]; 
      }

      const responseContent = (
        <div className="space-y-3">
          <p>Entendido. Basado en tu necesidad, aquí tienes algunas empresas del ecosistema que podrían ser excelentes aliados estratégicos:</p>
          <div className="space-y-2">
            {recommendations.slice(0, 3).map(company => (
              <div key={company.id} className="bg-white p-3 rounded border border-gray-200 shadow-sm text-sm cursor-pointer hover:bg-gray-50"
                   onClick={() => onSelectMember(company)}>
                <div className="font-bold text-text-main hover:text-primary transition-colors">{company.name}</div>
                <div className="text-xs text-gray-500">{company.type} • {company.location}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">Puedes contactarlas directamente a través de su perfil en el directorio.</p>
        </div>
      );

      setMessages(prev => [...prev, { role: 'assistant', content: responseContent }]);
      setIsTyping(false);
    }, 1500);
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[2000] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white w-full max-w-lg h-[600px] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Chat Header */}
          <div className="bg-primary p-4 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 167.3 240" className="w-6 h-6 text-white" xml:space="preserve"><g><g><path fill="currentColor" d="M72.5,239.5l36.9-23.2c1.7-1.1,3.4-2.2,5-3.3c5.8-3.9,11.4-8.1,16.6-12.8c2.1-1.9,4.2-3.8,6.1-5.9c10.4-12,9.7-29.6,0.9-42.3c-1.8-2.5-3.8-4.9-6.2-6.9l-2.3-2h16c3.2,0,6.1-1.2,8.3-3.5l9.6-9.6c2.2-2.2,3.4-5.2,3.4-8.3V83c0-4.9-3.2-9-7.7-10.3l-33.8-13.2l7.9-10.4c2.1-2.7,0.2-6.6-3.2-6.6h-17.9c0,0.1-55.9,0.1-55.9,0.1c-15,0-29.1,5.8-39.7,16.5C6,69.7,0.2,83.8,0.2,98.7l0.1,87.8l10.1,7.8L72.5,239.5z M94.3,63.2L78.9,80.4c-2.7,2.8-4.3,6.7-4.3,10.6v24.6c0,4.1,1.6,8,4.5,10.9l0.5,0.5l29.2,25.5l9.4,8.2c4.2,3.7,6.3,9,5.8,14.6c-0.6,5.6-3.7,10.4-8.6,13.1l-5.4,3.1L72,215.6l-51-39.2l-0.1-77.7c0-9.5,3.7-18.4,10.4-25.1c6.7-6.7,15.6-10.4,25.1-10.4H94.3z M105.8,122.5l-10.6-9.2V93l15.4-17.2l35.6,13.9V118l-4.4,4.4H105.8z"/></g><g><path fill="currentColor" d="M103.9,33.7H41.1c-2.1,0-3.8-1.7-3.8-3.8v-26c0-1.3,0.8-2.5,2-3c1.2-0.5,2.6-0.3,3.6,0.5l13.8,12.1l13.3-12c1.4-1.3,3.6-1.3,5-0.1L88.6,13l13.7-11.6c1-0.8,2.4-1,3.5-0.5c1.2,0.5,1.9,1.7,1.9,3v26C107.7,32,106,33.7,103.9,33.7z"/></g></g></svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-lg leading-tight">AI Matchmaker</h3>
                <p className="text-white/80 text-xs">Asistente de Vinculación</p>
              </div>
            </div>
            <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-4 text-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-white text-text-body border border-gray-200 rounded-tl-none shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-none p-4 shadow-sm flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200 shrink-0">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="flex gap-2"
            >
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Quiero automatizar mi negocio..." 
                className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-main"
              />
              <button 
                type="submit"
                className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!input.trim() || isTyping}
              >
                <svg className="w-5 h-5 translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.getElementById('modal-root')
  );
};

export default function DirectoryView() {
  const [selectedCluster, setSelectedCluster] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isAiChatOpen, setIsAiChatOpen] = useState(false); // State for AI Chat
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filters State
  const [filterCategory, setFilterCategory] = useState('Todos');
  const [filterType, setFilterType] = useState('Todos');
  const [filterTier, setFilterTier] = useState('Todos');
  const [filterLocation, setFilterLocation] = useState('Todos');

  // Accordion State
  const [openSections, setOpenSections] = useState({
    category: true,
    type: true,
    tier: true,
    location: true
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // Filter Logic
  const filteredClusters = clustersData.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCat = filterCategory === 'Todos' || c.category === filterCategory;
    return matchSearch && matchCat;
  });

  const filteredMembers = selectedCluster 
    ? membersData.filter(m => {
        const matchesCluster = m.clusterId === selectedCluster.id;
        const matchesType = filterType === 'Todos' || m.type === filterType;
        const matchesTier = filterTier === 'Todos' || m.tier === filterTier;
        const matchesLocation = filterLocation === 'Todos' || m.location === filterLocation;
        const matchesSearch = m.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCluster && matchesType && matchesTier && matchesLocation && matchesSearch;
      }) 
    : [];

  const handleClusterSelect = (cluster) => {
    setSelectedCluster(cluster);
    setFilterType('Todos');
    setFilterTier('Todos');
    setFilterLocation('Todos');
    setSearchQuery('');
  };

  const handleBack = () => {
    setSelectedCluster(null);
    setSelectedMember(null);
    setFilterCategory('Todos');
    setSearchQuery('');
  };

  // Function to open Member Detail from AI Chat
  const openMemberDetailFromAi = (member) => {
    setSelectedMember(member);
    setIsAiChatOpen(false); // Close AI chat when opening member detail
  }

  return (
    <div className="w-full h-full flex flex-col md:flex-row absolute inset-0 z-10 bg-background-alternate">
      
      {/* AI CHAT MODAL */}
      <AiChatModal isOpen={isAiChatOpen} onClose={() => setIsAiChatOpen(false)} onSelectMember={openMemberDetailFromAi} />

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
                      <h2 className="text-2xl font-bold text-text-main">{selectedMember.name}</h2>
                      <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded border border-primary/20 uppercase">{selectedMember.tier}</span>
                    </div>
                    <p className="text-text-body text-sm flex items-center gap-1">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      {selectedMember.location}, Nuevo León
                    </p>
                  </div>
                </div>
                <p className="text-text-body leading-relaxed text-sm">{selectedMember.description}</p>
              </div>
              {/* Body */}
              <div className="p-8 space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-text-main uppercase tracking-wider mb-4 flex items-center gap-2">
                    <span className="w-1 h-4 bg-primary rounded-full"></span>Ficha Técnica
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100"><p className="text-xs text-gray-500 uppercase">Giro Principal</p><p className="font-medium text-text-main">{selectedMember.type}</p></div>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100"><p className="text-xs text-gray-500 uppercase">Empleados</p><p className="font-medium text-text-main">{selectedMember.employees}</p></div>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100 col-span-2"><p className="text-xs text-gray-500 uppercase">Sitio Web</p><a href={`http://${selectedMember.website}`} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline flex items-center gap-1">{selectedMember.website}<svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></a></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text-main uppercase tracking-wider mb-4 flex items-center gap-2"><span className="w-1 h-4 bg-primary rounded-full"></span>Certificaciones y Productos</h3>
                  {selectedMember.certifications && selectedMember.certifications.length > 0 && (<div className="mb-4"><p className="text-xs text-gray-500 mb-2">Certificaciones</p><div className="flex flex-wrap gap-2">{selectedMember.certifications.map(cert => (<span key={cert} className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-100 flex items-center gap-1"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>{cert}</span>))}</div></div>)}
                  {selectedMember.products && selectedMember.products.length > 0 && (<div><p className="text-xs text-gray-500 mb-2">Oferta Principal</p><div className="flex flex-wrap gap-2">{selectedMember.products.map(prod => (<span key={prod} className="px-3 py-1 bg-gray-100 text-text-body text-xs font-medium rounded border border-gray-200">{prod}</span>))}</div></div>)}
                </div>
              </div>
              {/* Actions Footer */}
              <div className="p-6 border-t border-gray-200 bg-white sticky bottom-0">
                <div className="grid grid-cols-2 gap-4">
                  <button className="w-full py-3 rounded-lg border border-gray-300 text-text-main font-bold hover:bg-gray-50 transition-colors">Visitar Web</button>
                  <button className="w-full py-3 rounded-lg bg-primary text-white font-medium rounded-full hover:bg-orange-600 transition-colors">Contactar</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.getElementById('modal-root')
      )}

      {/* SIDEBAR FILTERS */}
      <div className="w-full md:w-72 bg-white border-r border-gray-200 flex-shrink-0 flex flex-col overflow-hidden">
        <div className="p-6 border-b border-gray-100 overflow-y-auto">
          <h3 className="text-sm font-bold text-text-main uppercase tracking-widest mb-2">Filtros</h3>
          
          {/* CLUSTER LIST VIEW FILTERS */}
          {!selectedCluster && (
            <FilterSection 
              title="Eje Estratégico" 
              options={['Todos', 'Manufactura', 'Tecnología', 'Servicios', 'Ciencia', 'Consumo', 'Industria']}
              selected={filterCategory}
              onSelect={setFilterCategory}
              isOpen={openSections.category}
              onToggle={() => toggleSection('category')}
            />
          )}



          {/* MEMBER LIST VIEW FILTERS */}
          {selectedCluster && (
            <>
              <FilterSection 
                title="Giro / Especialidad" 
                options={['Todos', 'Autopartes', 'Ensambladora', 'Desarrollo Software', 'Transporte de Carga', 'Almacenaje y Distribución', 'Última Milla']}
                selected={filterType}
                onSelect={setFilterType}
                isOpen={openSections.type}
                onToggle={() => toggleSection('type')}
              />
              <FilterSection 
                title="Nivel / Tier" 
                options={['Todos', 'OEM', 'Tier 1', 'Tier 2', 'Tier 3', 'Global']}
                selected={filterTier}
                onSelect={setFilterTier}
                isOpen={openSections.tier}
                onToggle={() => toggleSection('tier')}
              />
              <FilterSection 
                title="Municipio" 
                options={['Todos', 'Apodaca', 'Monterrey', 'San Pedro', 'García', 'Escobedo', 'Pesquería']}
                selected={filterLocation}
                onSelect={setFilterLocation}
                isOpen={openSections.location}
                onToggle={() => toggleSection('location')}
              />
            </>
          )}

          {/* AI MATCHMAKER WIDGET */}
          <div className="mb-6 relative group cursor-pointer" onClick={() => setIsAiChatOpen(true)}>
            <div className="absolute -inset-0.5 bg-gradient-brand rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-white p-5 rounded-xl border border-gray-200 shadow-xl overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 167.3 240" className="w-5 h-5 text-white" xml:space="preserve"><g><g><path fill="currentColor" d="M72.5,239.5l36.9-23.2c1.7-1.1,3.4-2.2,5-3.3c5.8-3.9,11.4-8.1,16.6-12.8c2.1-1.9,4.2-3.8,6.1-5.9c10.4-12,9.7-29.6,0.9-42.3c-1.8-2.5-3.8-4.9-6.2-6.9l-2.3-2h16c3.2,0,6.1-1.2,8.3-3.5l9.6-9.6c2.2-2.2,3.4-5.2,3.4-8.3V83c0-4.9-3.2-9-7.7-10.3l-33.8-13.2l7.9-10.4c2.1-2.7,0.2-6.6-3.2-6.6h-17.9c0,0.1-55.9,0.1-55.9,0.1c-15,0-29.1,5.8-39.7,16.5C6,69.7,0.2,83.8,0.2,98.7l0.1,87.8l10.1,7.8L72.5,239.5z M94.3,63.2L78.9,80.4c-2.7,2.8-4.3,6.7-4.3,10.6v24.6c0,4.1,1.6,8,4.5,10.9l0.5,0.5l29.2,25.5l9.4,8.2c4.2,3.7,6.3,9,5.8,14.6c-0.6,5.6-3.7,10.4-8.6,13.1l-5.4,3.1L72,215.6l-51-39.2l-0.1-77.7c0-9.5,3.7-18.4,10.4-25.1c6.7-6.7,15.6-10.4,25.1-10.4H94.3z M105.8,122.5l-10.6-9.2V93l15.4-17.2l35.6,13.9V118l-4.4,4.4H105.8z"/></g><g><path fill="currentColor" d="M103.9,33.7H41.1c-2.1,0-3.8-1.7-3.8-3.8v-26c0-1.3,0.8-2.5,2-3c1.2-0.5,2.6-0.3,3.6,0.5l13.8,12.1l13.3-12c1.4-1.3,3.6-1.3,5-0.1L88.6,13l13.7-11.6c1-0.8,2.4-1,3.5-0.5c1.2,0.5,1.9,1.7,1.9,3v26C107.7,32,106,33.7,103.9,33.7z"/></g></g></svg>
                  </div>
                  <h3 className="text-text-main font-bold text-sm tracking-wide">AI Matchmaker</h3>
                </div>
                <p className="text-text-body text-xs leading-relaxed mb-4">
                  Encuentra proveedores y aliados estratégicos utilizando nuestra inteligencia artificial.
                </p>
                <button className="w-full py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                  <span>Iniciar Asistente</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* TOP BAR / BREADCRUMBS */}
        <header className="bg-white border-b border-gray-200 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm text-text-body mb-1">
              <button 
                onClick={handleBack} 
                className="hover:text-primary transition-colors"
              >
                Inicio
              </button>
              <span className="mx-2 text-gray-300">/</span>
              {selectedCluster ? (
                <span className="font-semibold text-text-main">{selectedCluster.name}</span>
              ) : (
                <span className="font-semibold text-text-main">Red de Clústeres</span>
              )}
            </nav>
            <h2 className="text-2xl font-bold text-text-main tracking-tight">
              {selectedCluster ? `Miembros del ${selectedCluster.name}` : 'Sectores Estratégicos'}
            </h2>
          </div>

          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder={selectedCluster ? "Buscar empresa..." : "Buscar clúster..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-1 focus:ring-primary transition-all text-text-main"
            />
            <svg className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
        </header>

        {/* CONTENT AREA */}
        <div className="flex-1 overflow-y-auto p-6 bg-background-alternate">
          <AnimatePresence mode="wait">
            
            {!selectedCluster ? (
              // VIEW: LIST OF CLUSTERS
              <motion.div 
                key="clusters-grid"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredClusters.map((cluster) => (
                  <motion.div 
                    key={cluster.id} 
                    variants={itemVariants}
                    onClick={() => handleClusterSelect(cluster)}
                    className="group bg-white border border-gray-200 rounded-xl p-6 cursor-pointer hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-14 h-14 rounded-lg bg-white flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 text-primary">
                        {cluster.icon}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                        {cluster.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-text-main mb-2 group-hover:text-primary transition-colors">
                      {cluster.name}
                    </h3>
                    <div className="flex items-center text-sm text-text-body">
                      <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                      {cluster.members} Empresas afiliadas
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                      <span className="text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">Ver Miembros</span>
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              // VIEW: LIST OF MEMBERS (Drill-down)
              <motion.div
                key="members-grid"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                {filteredMembers.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredMembers.map((member) => (
                      <div 
                        key={member.id} 
                        onClick={() => setSelectedMember(member)}
                        className="bg-white border border-gray-200 rounded-lg p-5 flex items-center gap-4 hover:shadow-md transition-all cursor-pointer hover:border-primary/50 group"
                      >
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center font-bold text-text-main text-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                          {member.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-text-main group-hover:text-primary transition-colors">{member.name}</h4>
                          <p className="text-sm text-text-body">{member.type}</p>
                          <div className="flex gap-2 mt-2">
                            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">{member.tier}</span>
                            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">{member.location}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Empty State for demo purposes
                  <div className="text-center py-20">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl text-primary/50">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-text-main">Sin registros públicos</h3>
                    <p className="text-text-body mt-2">Este clúster aún no tiene miembros visibles en la plataforma demo.</p>
                    <p className="text-xs text-gray-400 mt-4">Prueba ajustando los filtros de la izquierda.</p>
                    <button onClick={handleBack} className="mt-6 px-6 py-2 bg-primary text-white font-medium rounded-full hover:bg-orange-600 transition-colors">Volver a Clústeres</button>
                  </div>
                )}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
