import React from 'react';

const Body: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-white rounded p-4 h-[500px] shadow-lg">1</div>
      <div className="bg-white rounded p-4  shadow-lg">2</div>
      <div className="bg-white rounded p-4  shadow-lg">3</div>

      <div className="bg-white rounded p-4 shadow-lg h-[500px]">4</div>
      <div className="bg-white rounded p-4 shadow-lg">5</div>
      <div className="bg-white rounded p-4 shadow-lg">6</div>

      <div className="bg-white rounded p-4 shadow-lg h-[500px]">7</div>
      <div className="bg-white rounded p-4 shadow-lg">8</div>
      <div className="bg-white rounded p-4 shadow-lg">9</div>
    </div>
  );
};

export default Body;

