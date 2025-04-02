 const Menu = () => {
    return (
      <div className="w-[280px] fixed left-0 top-0 h-screen bg-white shadow-md flex flex-col p-4 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Vuexy</h1>
        <ul className="space-y-4">
          <li className="text-lg font-medium hover:text-blue-500 cursor-pointer">Dashboards</li>
          <li className="text-lg font-medium hover:text-blue-500 cursor-pointer">Layouts</li>
          <li className="text-lg font-medium hover:text-blue-500 cursor-pointer">Front Pages</li>
        </ul>
      </div>
    );
  };
  
  export default Menu;
  