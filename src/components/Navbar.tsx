const Navbar = () => {
    return (
      <header className="fixed top-0 left-[280px] right-0 h-[72px] bg-white shadow-md flex items-center px-6">
        <input type="text" placeholder="Search..." className="w-1/3 p-2 border rounded-md" />
        <div className="ml-auto flex space-x-4">
          <span className="text-gray-600 cursor-pointer">🔔</span>
          <span className="text-gray-600 cursor-pointer">⚙️</span>
          <span className="text-gray-600 cursor-pointer">👤</span>
        </div>
      </header>
    );
  };
  
  export default Navbar;
  