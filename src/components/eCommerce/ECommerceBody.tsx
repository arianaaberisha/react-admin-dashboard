import ECommerceCard from "./ECommerceCard";
import BestSeller from "./BestSeller";
import Statistics from "./Statistics";
import Profit from "./Profit";
import Expenses from "./Expenses";
import RevenueReports from "./RevenueReport";
import GeneratedLeads from "./GeneratedLeads";
import EarningReports from "./EarningReports";
import PopularProducts from "./PopularProducts";
import OrdersByCountries from "./OrdersByCountries";
import Transactions from "./Transactions";
import Invoice from "./Invoice";


const ECommerceBody: React.FC = () => {
    return (
      <div className="mx-auto space-y-4 ">
        <div className="grid grid-cols-12 gap-2 sm:gap-4 ">
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 relative rounded-lg dark:bg-[#2F3349]">
            <ECommerceCard className="h-full min-h-[200px]">
              <BestSeller />
            </ECommerceCard>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-8 relative rounded-lg dark:bg-[#2F3349]">
            <ECommerceCard className="h-full min-h-[200px]">
             <Statistics />
            </ECommerceCard>
          </div>
        </div>
          <div className="grid grid-cols-12 gap-2 sm:gap-4">
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-2 sm:gap-4 ">
            <div className="flex flex-col md:flex-row gap-2 sm:gap-4">
            <div className="w-full md:w-1/2 dark:bg-[#2F3349]  relative rounded-lg">
            <ECommerceCard className="h-full min-h-[260px]">
             <Profit />
           </ECommerceCard>
           </div>
           <div className="w-full md:w-1/2 pr-4 rounded-lg">
           <ECommerceCard className="h-full min-h-[260px]">
             <Expenses />
          </ECommerceCard>
           </div>
           </div>
         <div className="dark:bg-[#2F3349] rounded-lg">
           <ECommerceCard className="h-full min-h-[225px]">
             <GeneratedLeads />
            </ECommerceCard>
           </div>
         </div>
        <div className="col-span-12 lg:col-span-8 dark:bg-[#2F3349] rounded-lg">
         <ECommerceCard className="h-full min-h-[500px] ">
           <RevenueReports />
          </ECommerceCard>
          </div>
          </div>
            <div className="grid grid-cols-12 gap-2 sm:gap-4">
              <div className="col-span-12 lg:col-span-4 dark:bg-[#2F3349] rounded-lg">
                <ECommerceCard className="p-4 sm:p-6 h-full min-h-[540px]">
                 <EarningReports />
                </ECommerceCard>
              </div>
              <div className="col-span-12 lg:col-span-4 dark:bg-[#2F3349] rounded-lg">
                <ECommerceCard className="h-full min-h-[540px]">
                 <PopularProducts />
                </ECommerceCard>
              </div>
              <div className="col-span-12 lg:col-span-4 dark:bg-[#2F3349] rounded-lg">
                <ECommerceCard className="h-full min-h-[540px]">
                  <OrdersByCountries />
                </ECommerceCard>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-2 sm:gap-4">
              <div className="col-span-12 lg:col-span-4 relative dark:bg-[#2F3349] rounded-lg">
                <ECommerceCard className="h-full min-h-[540px]">
                 <Transactions />
                </ECommerceCard>
              </div>
              <div className="col-span-12 lg:col-span-8 relative dark:bg-[#2F3349] rounded-lg">
                <ECommerceCard className="">
                  <Invoice />
                </ECommerceCard>
              </div>
            </div>
      </div>
    );
  };
  
  export default ECommerceBody;
  