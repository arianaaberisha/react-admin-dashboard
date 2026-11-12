import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import CRM from './pages/CRM';
import ECommerce from './pages/ECommerce';
import Logistics from './pages/Logistics';

const App: React.FC = () => {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth <= 1024);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => setIsMobileOrTablet(window.innerWidth <= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const location = useLocation();

  // Close the mobile sidebar after navigating
  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [location.pathname]);

  const toggleSidebar = () => {
    if (isMobileOrTablet) {
      setIsMobileSidebarOpen(prev => !prev);
    } else {
      setIsMenuCollapsed(prev => !prev);
    }
  };

  const sidebarWidth = isMenuCollapsed ? 80 : 260;

  return (
    <div className="relative w-screen h-screen overflow-x-hidden bg-gray-50 dark:bg-[#25293C]">
      {!isMobileOrTablet ? (
        <aside
          className="fixed top-0 left-0 h-full border-r bg-white shadow-md transition-[width] duration-300 ease-in-out z-[100] overflow-hidden dark:bg-[#2F3349]"
          style={{ width: sidebarWidth }}
        >
          <Menu isCollapsed={isMenuCollapsed} onToggleCollapse={toggleSidebar} />
        </aside>
      ) : (
        isMobileSidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/40 z-[140]"
              onClick={() => setIsMobileSidebarOpen(false)}
            />
            <aside className="fixed top-0 left-0 h-full w-[250px] border-r bg-white shadow-md z-[150] dark:bg-[#2F3349]">
              <Menu isCollapsed={false} onToggleCollapse={() => setIsMobileSidebarOpen(false)} />
            </aside>
          </>
        )
      )}
      <header
        className="fixed top-4 md:mr-6 md:ml-6 lg:mr-12 lg:ml-1 transition-all duration-300 h-14 bg-white flex items-center shadow-lg rounded-md z-10 dark:bg-[#2F3349]"
        style={{
          left: !isMobileOrTablet ? `${sidebarWidth + 60}px` : '20px',
          right: '20px'
        }}
      >
        <Navbar
          toggleDarkMode={() => setDarkMode(!darkMode)}
          darkMode={darkMode}
          onMenuToggle={toggleSidebar}
        />
      </header>
      <main
        className="transition-all duration-300 mt-24 h-[calc(100vh-6rem)] overflow-y-auto dark:bg-[#25293C]"
        style={{
          marginLeft: !isMobileOrTablet ? `${sidebarWidth + 40}px` : '20px',
          marginRight: '20px',
          padding: '0 24px 16px'
        }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/analytics" replace />} />
          <Route path="/analytics" element={<Body />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="ecommerce" element={<ECommerce />} />
          <Route path="/logistics" element={<Logistics />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
};

export default App;
