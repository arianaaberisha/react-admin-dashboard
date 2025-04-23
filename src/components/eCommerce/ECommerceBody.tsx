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
      <div className="mx-auto p-4 space-y-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 relative rounded-lg dark:bg-[#2F3349]">
            <ECommerceCard className="h-[220px]">
              <BestSeller />
            </ECommerceCard>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-8 relative dark:bg-[#2F3349]">
            <ECommerceCard className="h-[220px]">
             <Statistics />
            </ECommerceCard>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 ">
              <div className="col-span-12 lg:col-span-2 relative dark:bg-[#2F3349]">
                <ECommerceCard className="h-[500px]">
                  <Profit />
                </ECommerceCard>
              </div>
              <div className="col-span-12 lg:col-span-2 relative dark:bg-[#2F3349]">
                <ECommerceCard className="h-[500px]">
                  <Expenses />
                </ECommerceCard>
              </div>
              <div className="col-span-12 lg:col-span-8 relative dark:bg-[#2F3349]">
                <ECommerceCard className="h-[500px]">
                  <RevenueReports/>
                </ECommerceCard>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-2 dark:bg-[#2F3349]">
                <ECommerceCard className=" p-6 h-[500px]">
               <GeneratedLeads />
                </ECommerceCard>
              </div>
              </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 lg:col-span-4 dark:bg-[#2F3349]">
                <ECommerceCard className=" p-6 h-[500px]">
               <EarningReports />
                </ECommerceCard>
              </div>
              <div className="col-span-12 lg:col-span-4 dark:bg-[#2F3349]">
                <ECommerceCard className="h-[500px]">
              <PopularProducts />
                </ECommerceCard>
              </div>
              <div className="col-span-12 lg:col-span-4 dark:bg-[#2F3349]">
                <ECommerceCard className="h-[500px]">
                  <OrdersByCountries />
                </ECommerceCard>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 ">
              <div className="col-span-12 lg:col-span-4 relative dark:bg-[#2F3349]">
                <ECommerceCard className="h-[500px]">
                 <Transactions />
                </ECommerceCard>
              </div>
              <div className="col-span-12 lg:col-span-8 relative dark:bg-[#2F3349]">
                <ECommerceCard className="h-[500px]">
                  <Invoice />
                </ECommerceCard>
              </div>
            </div>
      </div>
    );
  };
  
  export default ECommerceBody;
  