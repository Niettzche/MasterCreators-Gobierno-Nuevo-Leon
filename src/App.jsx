import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import DirectoryView from './components/Public/DirectoryView';
import LoginView from './components/Auth/LoginView';
import ClusterDashboard from './components/ClusterDashboard/index.jsx'
import SuperAdminDashboard from './components/AdminDashboard/index.jsx'
import EvaluatorDashboard from './components/EvaluatorDashboard/index.jsx'
import FinanceDashboard from './components/FinanceDashboard/index.jsx'
import AuditDashboard from './components/AuditDashboard/index.jsx'
import ProjectSubmissionWizard from './components/ProjectSubmission/ProjectSubmissionWizard.jsx'
import ClusterProjects from './components/ClusterDashboard/ClusterProjects.jsx'
import DigitalVault from './components/ClusterDashboard/DigitalVault.jsx'
import ClusterFinances from './components/ClusterDashboard/ClusterFinances.jsx'
import ClusterProfile from './components/ClusterDashboard/ClusterProfile.jsx'
import AuditFindings from './components/AuditDashboard/AuditFindings.jsx'
import RegisterView from './components/Auth/RegisterView.jsx'
import EvaluationRoom from './components/EvaluatorDashboard/EvaluationRoom.jsx'
import BankAccountValidation from './components/FinanceDashboard/BankAccountValidation.jsx'
import NotFound from './components/Public/NotFound.jsx'
import DashboardLayout from './components/Layout/DashboardLayout.jsx'
import { AnimatePresence, motion } from 'framer-motion';
import gobiernoLogo from './assets/gobierno.svg';

import ProjectDetail from './components/ClusterDashboard/ProjectDetail.jsx'
import AdminInbox from './components/AdminDashboard/Inbox.jsx'
import InboxDetail from './components/AdminDashboard/InboxDetail.jsx'
import AdminClusters from './components/AdminDashboard/Clusters.jsx'
import ClusterDetail from './components/AdminDashboard/ClusterDetail.jsx'
import AdminConvocatorias from './components/AdminDashboard/Convocatorias.jsx'
import AdminReports from './components/AdminDashboard/Reports.jsx'
import AdminDocuments from './components/AdminDashboard/Documents.jsx'

function InitialAnimation({ onComplete }) {
  const text = "NUEVO LEÓN";
  const words = text.split(" ");

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background-alternate overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={onComplete}
    >
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#FF6B0040,transparent)]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Decorative Orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] border border-primary/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] border border-secondary/10 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Main Logo Container */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1.5
          }}
          className="relative mb-8"
        >
          {/* Logo Glow Effect */}
          <motion.div 
            className="absolute inset-0 bg-primary/30 blur-3xl rounded-full"
            animate={{ scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <img src={gobiernoLogo} alt="Gobierno Nuevo León" className="w-48 h-48 md:w-64 md:h-64 object-contain relative z-10 drop-shadow-2xl" />
        </motion.div>

        {/* Staggered Text Animation */}
        <div className="overflow-hidden flex gap-3 text-4xl md:text-6xl font-black tracking-tighter text-text-main uppercase">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.5 + (i * 0.1),
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
              className={word === "LEÓN" ? "text-primary" : ""}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.div 
          className="mt-4 h-1 w-32 bg-gradient-to-r from-secondary to-primary"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: "circOut" }}
        />

        <motion.p
          className="mt-4 text-sm font-medium text-text-body tracking-[0.3em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          El Gobierno del Estado
        </motion.p>
      </div>
    </motion.div>
  );
}

function App() {
  const location = useLocation();
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const showNavbar = !['/audit-dashboard','/cluster-dashboard', '/finance-dashboard', '/admin-dashboard', '/login', '/evaluator-dashboard'].some(path => location.pathname.startsWith(path));

  return (
    <div className="bg-background-alternate text-text-body antialiased min-h-screen flex flex-col overflow-hidden">
      <AnimatePresence mode="wait">
        {showAnimation && (
          <InitialAnimation key="initial-animation" onComplete={() => setShowAnimation(false)} />
        )}
      </AnimatePresence>

      {!showAnimation && (
        <>
          {showNavbar && <Navbar />}
          <main className="flex-1 relative overflow-hidden flex">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<DirectoryView />} />
                <Route path="/register" element={<RegisterView/>} />
                <Route path="/register-project" element={<DashboardLayout><ProjectSubmissionWizard/> </DashboardLayout>} />
                <Route path="/evaluator-dashboard/project/:id" element={<DashboardLayout><EvaluationRoom /></DashboardLayout>} />
                <Route path="/login" element={<LoginView />} />
                <Route path="/cluster-dashboard" element={<DashboardLayout><ClusterDashboard /></DashboardLayout>} />
                <Route path="/cluster-dashboard/proyectos" element={<DashboardLayout><ClusterProjects /></DashboardLayout>} />
                <Route path="/cluster-dashboard/proyectos/:id" element={<DashboardLayout><ProjectDetail /></DashboardLayout>} />
                <Route path="/cluster-dashboard/evidencias" element={<DashboardLayout><DigitalVault /></DashboardLayout>} />
                <Route path="/cluster-dashboard/finanzas" element={<DashboardLayout><ClusterFinances /></DashboardLayout>} />
                <Route path="/cluster-dashboard/perfil" element={<DashboardLayout><ClusterProfile /></DashboardLayout>} />
                <Route path="/admin-dashboard" element={<DashboardLayout><SuperAdminDashboard /></DashboardLayout>} />
                <Route path="/admin-dashboard/inbox" element={<DashboardLayout><AdminInbox /></DashboardLayout>} />
                <Route path="/admin-dashboard/inbox/:id" element={<DashboardLayout><InboxDetail /></DashboardLayout>} />
                <Route path="/admin-dashboard/clusters" element={<DashboardLayout><AdminClusters /></DashboardLayout>} />
                <Route path="/admin-dashboard/clusters/:id" element={<DashboardLayout><ClusterDetail /></DashboardLayout>} />
                <Route path="/admin-dashboard/convocatorias" element={<DashboardLayout><AdminConvocatorias /></DashboardLayout>} />
                <Route path="/admin-dashboard/reports" element={<DashboardLayout><AdminReports /></DashboardLayout>} />
                <Route path="/admin-dashboard/documents" element={<DashboardLayout><AdminDocuments /></DashboardLayout>} />
                <Route path="/evaluator-dashboard/*" element={<DashboardLayout><EvaluatorDashboard /></DashboardLayout>} />
                <Route path="/finance-dashboard/*" element={<DashboardLayout><FinanceDashboard /></DashboardLayout>} />
                <Route path="/audit-dashboard" element={<DashboardLayout><AuditDashboard /></DashboardLayout>} />
                <Route path="/audit-dashboard/reports" element={<DashboardLayout><AuditFindings /></DashboardLayout>} />
                <Route path="/evaluator-dashboard/project/:id" element={<DashboardLayout><EvaluationRoom /></DashboardLayout>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
