import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import CRM from './pages/CRM';
import ECommerce from './pages/ECommerce';

const App: React.FC = () => {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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

  const onMenuToggleHandler = (value: boolean) => {
    if (isMobileOrTablet) {
      setIsMobileSidebarOpen(prev => !prev);
    } else {
      setIsMenuCollapsed(value);
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-x-hidden bg-gray-50 dark:bg-[#25293C]">
      {!isMobileOrTablet ? (
        <aside
          className="fixed top-0 left-0 h-full border-r bg-white shadow-md transition-all duration-500 ease-in-out z-[100]"
          style={{ minWidth: isMenuCollapsed && !isHovered ? '80px' : '350px' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Menu
            isCollapsed={isMenuCollapsed && !isHovered}
            onToggleCollapse={() => setIsMenuCollapsed(prev => !prev)}
          />
        </aside>
      ) : (
        isMobileSidebarOpen && (
          <aside
            className="fixed top-0 left-0 h-full w-[250px] border-r bg-white shadow-md transition-all duration-500 ease-in-out z-[150] dark:bg-[#2F3349]"
          >
            <Menu
              isCollapsed={false}
              onToggleCollapse={() => setIsMobileSidebarOpen(false)}
            />
          </aside>
        )
      )}
      <header
        className="fixed top-4 transition-all duration-300 h-16 bg-white flex items-center shadow-lg rounded-md z-10 dark:bg-[#2F3349]"
        style={{
          left: !isMobileOrTablet ? `${isMenuCollapsed ? '120px' : '370px'}` : '20px',
          right: '20px'
        }}
      >
        <Navbar
          toggleDarkMode={() => setDarkMode(!darkMode)}
          darkMode={darkMode}
          isMenuCollapsed={isMenuCollapsed}
          onMenuToggle={onMenuToggleHandler}
          isMobileOrTablet={isMobileOrTablet}
        />
      </header>
      <main
        className="transition-all duration-300 mt-20 h-[calc(100vh-4rem)] overflow-y-auto p-5 dark:bg-[#25293C]"
        style={{
          marginLeft: !isMobileOrTablet ? `${isMenuCollapsed ? '120px' : '370px'}` : '20px',
          marginRight: '20px'
        }}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/analytics" replace />} />
          <Route path="/analytics" element={<Body />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="ecommerce" element={<ECommerce />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
};

export default App;
