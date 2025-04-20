import { useState } from "react";
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

const Body: React.FC = () => {
  const [isCrmPage, setIsCrmPage] = useState(false); 

  return (
    <div className="mx-auto p-4 space-y-4">
      <div className="flex justify-end mb-4">
        
      </div>

      {isCrmPage ? (
        <CrmBody />
      ) : (
        <>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6 relative rounded-lg bg-[#7367F0] ">
              <GeneralCard className="h-[350px]">
                <WebAnalyticsCard />
              </GeneralCard>
            </div>
            <div className="col-span-12 lg:col-span-3 dark:bg-[#2F3349] dark:rounded-lg">
              <GeneralCard className="h-[350px]">
                <AverageDailySales />
              </GeneralCard>
            </div>
            <div className="col-span-12 lg:col-span-3 dark:bg-[#2F3349] dark:rounded-lg">
              <GeneralCard className="h-[350px]">
                <SalesOverview />
              </GeneralCard>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 ">
            <div className="col-span-12 lg:col-span-6 dark:bg-[#2F3349] dark:rounded-lg">
              <GeneralCard>
                <EarningReports />
              </GeneralCard>
            </div>
            <div className="col-span-12 lg:col-span-6 dark:bg-[#2F3349] dark:rounded-lg">
              <GeneralCard>
                <SupportTracker />
              </GeneralCard>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-4 dark:bg-[#2F3349] dark:rounded-lg">
              <GeneralCard className="h-[500px]">
                <SalesByCountries />
              </GeneralCard>
            </div>
            <div className="col-span-12 lg:col-span-4 dark:bg-[#2F3349] dark:rounded-lg">
              <GeneralCard className="h-[500px]">
                <TotalEarning />
              </GeneralCard>
            </div>
            <div className="col-span-12 lg:col-span-4 dark:bg-[#2F3349] dark:rounded-lg">
              <GeneralCard className="h-[500px]">
                <MonthlyState />
              </GeneralCard>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-4 dark:bg-[#2F3349] dark:rounded-lg">
              <GeneralCard className="h-[550px]">
                <SourceVisits />
              </GeneralCard>
            </div>
            <div className="col-span-12 lg:col-span-8 dark:bg-[#2F3349] dark:rounded-lg">
              <GeneralCard className="h-[550px]">
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


/*
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
import CrmCard from "../components/CRM/CRMCard";
import Order from "../components/CRM/Order";
import Sales from "../components/CRM/Sales";
import TotalProfit from "../components/CRM/TotalProfit";
import TotalSales from "../components/CRM/TotalSales";
import RevenueGrowth from "../components/CRM/RevenueGrowth";

const Body: React.FC = () => {
  const [isCrmPage, setIsCrmPage] = useState(false); // Toggle CRM/Analytics

  return (
    <div className="mx-auto p-4 space-y-4">
      <button onClick={() => setIsCrmPage(!isCrmPage)} className="mb-4">
        Toggle CRM/Analytics View
      </button>

      <div className="grid grid-cols-12 gap-4">
        {isCrmPage ? (
          // Render CRM-specific cards in a 5-card grid
          <div className="col-span-12 grid grid-cols-5 gap-4">
            <div className="col-span-1">
              <CrmCard >
                <Order />
              </CrmCard>
            </div>
            <div className="col-span-1">
              <CrmCard>
                <Sales />
              </CrmCard>
            </div>
            <div className="col-span-1">
              <CrmCard >
                <TotalProfit />
              </CrmCard>
            </div>
            <div className="col-span-1">
              <CrmCard >
                <TotalSales />
              </CrmCard>
            </div>
            <div className="col-span-1">
              <CrmCard>
                <RevenueGrowth />
              </CrmCard>
            </div>
          </div>
        ) : (
          // Render Analytics cards
          <>
            <div className="col-span-12 lg:col-span-6 relative rounded-lg bg-[#7367F0]">
              <GeneralCard>
                <WebAnalyticsCard />
              </GeneralCard>
            </div>
            <div className="col-span-12 lg:col-span-3 dark:bg-[#2F3349]">
              <GeneralCard className="h-[350px]">
                <AverageDailySales />
              </GeneralCard>
            </div>
            <div className="col-span-12 lg:col-span-3 dark:bg-[#2F3349]">
              <GeneralCard className="h-[350px]">
                <SalesOverview />
              </GeneralCard>
            </div>
          </>
        )}
      </div>

      
      {!isCrmPage && (
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-4 dark:bg-[#2F3349]">
            <GeneralCard className="h-[500px]">
              <SalesByCountries />
            </GeneralCard>
          </div>
          <div className="col-span-12 lg:col-span-4 dark:bg-[#2F3349]">
            <GeneralCard className="h-[500px]">
              <TotalEarning />
            </GeneralCard>
          </div>
          <div className="col-span-12 lg:col-span-4 dark:bg-[#2F3349]">
            <GeneralCard className="h-[500px]">
              <MonthlyState />
            </GeneralCard>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
*/