
import CrmCard from "./CRMCard";
import Order from "./Order";
import TotalProfit from "./TotalProfit";
import Sales from "./Sales";
import TotalSales from "./TotalSales";
import RevenueGrowth from "./RevenueGrowth";
import EarningReports from "./EarningReports";
import MonthSales from "./MonthSales";
import SalesByCountries from "../SalesByCountries";
import ProjectStatus from "./ProjectStatus";
import ActiveProject from "./ActiveProject";
import LastTransaction from "./LastTransaction";
import ActivityTimeline from "./ActivityTimeline";

const CrmBody: React.FC = () => {
  return (
    <div className="mx-auto p-4 space-y-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 sm:col-span-6 lg:col-span-2 relative rounded-lg dark:bg-[#2F3349]">
          <CrmCard className="h-[220px]">
            <Order />
          </CrmCard>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-2 relative dark:bg-[#2F3349]">
          <CrmCard className="h-[220px]">
            <Sales />
          </CrmCard>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-2 relative dark:bg-[#2F3349]">
          <CrmCard className="h-[220px]">
            <TotalProfit />
          </CrmCard>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-2 relative dark:bg-[#2F3349]">
          <CrmCard className="h-[220px]">
            <TotalSales />
          </CrmCard>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 relative dark:bg-[#2F3349]">
          <CrmCard className="h-[220px]">
            <RevenueGrowth />
          </CrmCard>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 ">
            <div className="col-span-12 lg:col-span-8 relative dark:bg-[#2F3349] ">
              <CrmCard className="h-[500px]">
                <EarningReports />
              </CrmCard>
            </div>
            <div className="col-span-12 lg:col-span-4 relative dark:bg-[#2F3349]">
              <CrmCard className="h-[500px]">
                <MonthSales />
              </CrmCard>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-4 dark:bg-[#2F3349]">
              <CrmCard className=" p-6 h-[500px]">
                <SalesByCountries />
              </CrmCard>
            </div>
            <div className="col-span-12 lg:col-span-4 dark:bg-[#2F3349]">
              <CrmCard className="h-[500px]">
            <ProjectStatus />
              </CrmCard>
            </div>
            <div className="col-span-12 lg:col-span-4 dark:bg-[#2F3349]">
              <CrmCard className="h-[500px]">
                <ActiveProject />
              </CrmCard>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 ">
            <div className="col-span-12 lg:col-span-6 relative dark:bg-[#2F3349]">
              <CrmCard className="h-[500px]">
                <LastTransaction />
              </CrmCard>
            </div>
            <div className="col-span-12 lg:col-span-6 relative dark:bg-[#2F3349]">
              <CrmCard className="h-[500px]">
                <ActivityTimeline />
              </CrmCard>
            </div>
          </div>
    </div>
  );
};

export default CrmBody;
