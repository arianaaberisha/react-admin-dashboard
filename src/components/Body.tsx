const Body: React.FC = () => {
  return (
    <div className=" mx-auto p-4 space-y-4">
      <div className="grid grid-cols-3 gap-4">
      <div className="bg-violet-200 rounded p-4 h-[300px] w-[720px] shadow-lg"></div>
      <div className="bg-white rounded p-4  w-[390px] ml-[220px] shadow-lg"></div>
      <div className="bg-white rounded p-4  w-[390px] ml-[110px] shadow-lg"></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded p-4 shadow-lg h-[300px]"></div>
        <div className="bg-white rounded p-4 shadow-lg h-[300px]"></div>
      </div>

 
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded p-4 shadow-lg h-[300px]"></div>
        <div className="bg-white rounded p-4 shadow-lg h-[300px]"></div>
        <div className="bg-white rounded p-4 shadow-lg h-[300px]"></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded p-4 shadow-lg h-[300px]"></div>
        <div className="bg-white rounded p-4 shadow-lg h-[300px]"></div>
      </div>
    </div>
  );
};

export default Body;
