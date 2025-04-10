import Link from "../assets/icons/Link.svg"
import ShoppingCart2 from "../assets/icons/ShoppingCart2.svg"

const SalesOverview: React.FC = () => {
    return (
<div className="p-2">
      <div className="flex justify-between items-center mb-2 font-publicSans">
        <div className="text-gray-500 text-md">Sales Overview</div>
        
        <div className="text-green-500 text-md font-semibold ">+18.2%</div>
      </div>

      <div className="text-3xl font-semibold text-gray-800 mb-16 font-publicSans">$42.5k</div>
      <div className="flex justify-center items-center space-x-4 font-publicSans">
   
        <div className="flex flex-col items-center w-20 ">
          <img src={ShoppingCart2} className="w-6 h-18 mb-2" />
          <div className="text-sm text-gray-600">Order</div>
          <div className="text-lg font-semibold text-gray-800">62.2%</div>
          <div className="text-xs text-gray-400">6,440</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-px h-20 bg-gray-300 relative">
            <div className="absolute bottom-7 left-1/2 -translate-x-1/2 bg-white border border-gray-300 text-[10px] rounded-full px-2 py-[2px] shadow">
              VS
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-24">
          <img src={Link} className="w-5 h-5 mb-1" />
          <div className="text-sm text-gray-600">Visits</div>
          <div className="text-lg font-semibold text-gray-800">25.5%</div>
          <div className="text-xs text-gray-400">12,749</div>
        </div>
      </div>
      <div className="mt-4 h-2 w-full bg-gray-200 rounded-full overflow-hidden flex">
        <div className="h-full bg-[#00BAD1]" style={{ width: "62.2%" }}></div>
        <div className="h-full bg-[#666CFF]" style={{ width: "37.8%" }}></div>
      </div>
    </div>
    );
}

export default SalesOverview