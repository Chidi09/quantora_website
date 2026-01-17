// =================================================================================
// 2. MAIN APPLICATION (App.jsx)
// Updated to pass the global Formspree ID to the TeamMemberModal.
// =================================================================================
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { collection, getDocs } from 'firebase/firestore';
import { HelmetProvider } from 'react-helmet-async'; // IMPORT THIS
import { db } from './firebase';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

// Import components
import LabyrinthIntro from './components/LabyrinthIntro';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ServiceSection from './components/services/ServiceSection';
import TeamMemberModal from './components/services/TeamMemberModal';
import ContactSection from './components/ContactSection';
import AdminLogin from './components/admin/AdminLogin';
import SEO from './components/SEO'; // IMPORT THIS
import { siteConfig } from './data/siteConfig'; // Named import, not default
export default function App() {
  return (
    <HelmetProvider> {/* WRAP HERE */}
      <ThemeProvider>
        <AuthProvider>
          <QuantoraSite />
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

function QuantoraSite() {
  const [introComplete, setIntroComplete] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const servicesCollection = collection(db, 'services');
        const servicesSnapshot = await getDocs(servicesCollection);
        const servicesList = servicesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        servicesList.sort((a, b) => a.order - b.order);
        setServices(servicesList);
      } catch (error) {
        console.error("Error fetching services: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const handleAnimationComplete = () => setIntroComplete(true);
  const handleSelectMember = (member) => setSelectedMember(member);
  const handleCloseModal = () => setSelectedMember(null);

  useEffect(() => {
    const body = document.body;
    if (selectedMember) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
    return () => { body.style.overflow = 'auto'; };
  }, [selectedMember]);
  
  const refreshData = async () => {
     try {
        const servicesCollection = collection(db, 'services');
        const servicesSnapshot = await getDocs(servicesCollection);
        const servicesList = servicesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        servicesList.sort((a, b) => a.order - b.order);
        setServices(servicesList);
      } catch (error) {
        console.error("Error refetching services: ", error);
      }
  }

  if (loading && !introComplete) {
    return <LabyrinthIntro onAnimationComplete={handleAnimationComplete} />;
  }

  return (
    <>
      <SEO /> {/* DEFAULT SEO TAGS */}
      
      {/* If a member is selected, we can dynamically update the page title for them! */}
      {selectedMember && (
        <SEO 
          title={`${selectedMember.name} - ${selectedMember.role}`}
          description={selectedMember.bio.substring(0, 160)}
          image={selectedMember.avatar}
        />
      )}

      <LabyrinthIntro onAnimationComplete={handleAnimationComplete} />
      <AnimatePresence>
        {introComplete && (
          <div className="relative min-h-screen bg-gray-950 text-white">
            <div className={`transition-all duration-700 ease-in-out ${selectedMember ? 'blur-xl scale-95' : 'blur-0 scale-100'}`}>
              <Navbar links={siteConfig.navLinks} isBlurred={!!selectedMember} onAdminClick={() => setShowLogin(true)} />
              <Header title={siteConfig.title} subtitle={siteConfig.subtitle} />
              <main>
                {services.map(service => (
                  <ServiceSection
                    key={service.id}
                    service={service}
                    onSelectMember={handleSelectMember}
                    refreshData={refreshData}
                  />
                ))}
              </main>
              <ContactSection />
            </div>
            <AnimatePresence>
              {selectedMember && (
                <TeamMemberModal
                  member={selectedMember}
                  onClose={handleCloseModal}
                  formspreeId={siteConfig.formspreeId}
                />
              )}
            </AnimatePresence>
            <AnimatePresence>
              {showLogin && <AdminLogin onClose={() => setShowLogin(false)} />}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

