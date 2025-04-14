import React, { useState, useEffect } from 'react';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => setIsMobileOrTablet(window.innerWidth <= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-x-hidden bg-gray-50">
      {/* Sidebar only visible on large screens */}
      {!isMobileOrTablet && (
       <aside
       className="fixed top-0 left-0 h-full border-r bg-white shadow-md transition-all duration-500 ease-in-out z-[100]"
       style={{ width: isMenuCollapsed && !isHovered ? '100px' : '350px' }}
       onMouseEnter={() => setIsHovered(true)}
       onMouseLeave={() => setIsHovered(false)}
     >

          <Menu 
            isCollapsed={isMenuCollapsed && !isHovered} 
            onToggleCollapse={() => setIsMenuCollapsed(prev => !prev)} 
          />
        </aside>
      )}

      <header
        className="fixed top-4 transition-all duration-300 h-16 bg-white flex items-center shadow-lg rounded-md z-10"
        style={{
          left: !isMobileOrTablet ? `${isMenuCollapsed ? '120px' : '370px'}` : '20px',
          right: '20px'
        }}
      >
        <Navbar isMenuCollapsed={isMenuCollapsed} onMenuToggle={setIsMenuCollapsed} isMobileOrTablet={isMobileOrTablet} />
      </header>

      <main
        className="transition-all duration-300 mt-20 h-[calc(100vh-4rem)] overflow-y-auto p-5"
        style={{
          marginLeft: !isMobileOrTablet ? `${isMenuCollapsed ? '120px' : '370px'}` : '20px',
          marginRight: '20px'
        }}
      >
        <Body />
        <Footer />
      </main>
    </div>
  );
};

export default App;
