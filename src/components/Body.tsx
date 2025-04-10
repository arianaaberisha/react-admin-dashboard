import GeneralCard from "./GeneralCard";
import WebAnalyticsCard from "./WebAnalyticsCard";
import AverageDailySales from "./AverageDailySales";
import SalesOverview from "./SalesOverview"
import EarningReports from "./EarningReports";
import SupportTracker from "./SupportTracker";
import MonthlyState from "./MonthlyState";
import SalesByCountries from "./SalesByCountries";
import TotalEarning from "./TotalEarning";



const Body: React.FC = () => {
   return (
    <div className="mx-auto p-4 space-y-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="rounded-lg bg-[#7367F0] xl:col-span-6 lg:col-span-6 md:col-span-12 relative">
          <GeneralCard >
            <WebAnalyticsCard />
          </GeneralCard>
        </div>
        <div className="xl:col-span-3 lg:col-span-6 md:col-span-12">
          <GeneralCard className="h-[350px]">
            <AverageDailySales />
          </GeneralCard>
        </div>
        <div className="xl:col-span-3 lg:col-span-6 md:col-span-12">
          <GeneralCard className="h-[350px]">
           <SalesOverview />
          </GeneralCard>
       </div>
       </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="xl:col-span-6 lg:col-span-6 md:col-span-12">  
         <GeneralCard>
           <EarningReports />
         </GeneralCard>
        </div>
        <div className="xl:col-span-6 lg:col-span-6 md:col-span-12">
        <GeneralCard>
          <SupportTracker />
        </GeneralCard>
</div>
</div>

      <div className="grid grid-cols-12 gap-4">
        <div className="xl:col-span-4 lg:col-span-6 md:col-span-12 ">
          <GeneralCard className="h-[500px]">
            <SalesByCountries /></GeneralCard>
        </div>
        <div className="xl:col-span-4 lg:col-span-6 md:col-span-12">
          <GeneralCard className="h-[500px]"><TotalEarning /></GeneralCard>
        </div>
        <div className="xl:col-span-4 lg:col-span-6 md:col-span-12">
          <GeneralCard className="h-[500px]"><MonthlyState /></GeneralCard>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="xl:col-span-6 lg:col-span-6 md:col-span-12">
          <GeneralCard className="h-[300px]"></GeneralCard>
        </div>
        <div className="xl:col-span-6 lg:col-span-6 md:col-span-12">
          <GeneralCard className="h-[300px]"></GeneralCard>
        </div>
      </div>
    </div>
  );
};

export default Body;
