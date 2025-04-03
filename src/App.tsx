import React from 'react';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <div className="relative w-screen h-screen overflow-x-hidden  bg-gray-100 ">
      <aside className="fixed top-0 left-0 w-64 h-full border-r border-white bg-white shadow-md ">
        <Menu />
      </aside>
     
      <header className="fixed top-0 left-80 right-10 h-16 text-white bg-white flex items-center px-4 shadow-lg">
        <Navbar />
      </header>
      
      <main className="ml-[290px] mt-16 h-[calc(100vh-4rem)] overflow-y-auto  p-5">
        <Body />
        <Footer />
      </main>
    </div>
    
  );
};

export default App;