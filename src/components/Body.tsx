import React, { useState } from "react";
import GeneralCard from "./GeneralCard";
import WebAnalyticsCard from "./WebAnalyticsCard";
import AverageDailySales from "./AverageDailySales";
import SalesOverview from "./SalesOverview";
import EarningReports from "./EarningReports";
import SupportTracker from "./SupportTracker";
import MonthlyState from "./MonthlyState";
import SalesByCountries from "./SalesByCountries";
import TotalEarning from "./TotalEarning";
import SourceVisits from "./SourceVisits";
import ProjectList from "./ProjectList";
import CrmBody from "./CRM/CrmBody";
import ECommerceBody from "./eCommerce/ECommerceBody"; 

const Body: React.FC = () => {
  const [view] = useState<"crm" | "analytics" | "ecommerce">("analytics");

  return (
    <div className="mx-auto space-y-4">
      <div className="flex justify-end gap-2 mb-4">
      </div>

      {view === "crm" && <CrmBody />}
      {view === "ecommerce" && <ECommerceBody />}
      {view === "analytics" && (
        <>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6 relative rounded-lg bg-[#7367F0]">
              <GeneralCard className="h-full min-h-[350px]">
                <WebAnalyticsCard />
              </GeneralCard>
            </div>
            <div className="col-span-12 lg:col-span-3 dark:bg-[#2F3349]">
              <GeneralCard className="h-full min-h-[350px]">
                <AverageDailySales />
              </GeneralCard>
            </div>
            <div className="col-span-12 lg:col-span-3 dark:bg-[#2F3349]">
              <GeneralCard className="h-full min-h-[350px]">
                <SalesOverview />
              </GeneralCard>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6 dark:bg-[#2F3349]">
              <GeneralCard>
                <EarningReports />
              </GeneralCard>
            </div>
            <div className="col-span-12 lg:col-span-6 dark:bg-[#2F3349]">
              <GeneralCard>
                <SupportTracker />
              </GeneralCard>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-4 dark:bg-[#2F3349]">
              <GeneralCard className="h-full min-h-[500px]">
                <SalesByCountries />
              </GeneralCard>
            </div>
            <div className="col-span-12 lg:col-span-4 dark:bg-[#2F3349]">
              <GeneralCard className="h-full min-h-[500px]">
                <TotalEarning />
              </GeneralCard>
            </div>
            <div className="col-span-12 lg:col-span-4 dark:bg-[#2F3349]">
              <GeneralCard className="h-full min-h-[500px]">
                <MonthlyState />
              </GeneralCard>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-4 dark:bg-[#2F3349]">
              <GeneralCard className="h-full min-h-[550px]">
                <SourceVisits />
              </GeneralCard>
            </div>
            <div className="col-span-12 lg:col-span-8 dark:bg-[#2F3349]">
              <GeneralCard className="h-full min-h-[550px]">
                <ProjectList />
              </GeneralCard>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
