import React from 'react';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <div className="relative w-screen h-screen overflow-x-hidden ">
      <aside className="fixed top-0 left-0 w-64 h-full border-r border-white shadow-md ">
        <Menu />
      </aside>
      <header className="fixed top-0 left-80 right-5 h-16  text-white flex items-center px-4 shadow-lg">
        <Navbar />
      </header>
      <main className="ml-80 mt-16 h-[calc(100vh-4rem)] overflow-y-auto  p-5">
        <Body />
        <Footer />
      </main>
    </div>
    
  );
};

export default App;