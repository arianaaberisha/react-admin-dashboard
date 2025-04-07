import React, { useState } from "react";
import GeneralCard from "./GeneralCard";
import ChartComponents from "./ChartComponents";
import CardAnalytics1 from "../assets/icons/card-website-analytics-1.png";
import CardAnalytics2 from "../assets/icons/card-website-analytics-2.png";
import CardAnalytics3 from "../assets/icons/card-website-analytics-3.png";

const ViewOne = () => (
  <>
    <div className="p-2 flex justify-between items-center">
      <div>
        <h2 className="text-2xl text-white font-sans font-[500]">
          Website Analytics
        </h2>
        <p className="text-xl text-white font-sans font-[400]">
          Total 28.5% Conversion Rate
        </p>
      </div>
    </div>
    <div className="p-2">
      <p className="text-xl text-white font-sans font-[400]">Traffic</p>
      <br />
      <p className="text-white flex gap-4">
        <span className="flex items-center gap-2">
          <span className="bg-violet-800 p-2 rounded-md shadow-md">28%</span>
          Sessions
        </span>

        <span className="flex items-center gap-2">
          <span className="bg-violet-800 p-2 rounded-md shadow-md">3.1k</span>
          Page Views
        </span>
      </p>
      <br />
      <p className="text-white flex gap-9">
        <span className="flex items-center gap-2">
          <span className="bg-violet-800 p-2 rounded-md shadow-md">1.2k</span>
          Leads
        </span>

        <span className="flex items-center gap-2">
          <span className="bg-violet-800 p-2 rounded-md shadow-md">12%</span>
          Conversions
        </span>
      </p>
    </div>

    <div className="absolute bottom-10 right-12">
      <img src={CardAnalytics1} alt="Icon image" width={200} height={150} />
    </div>
  </>
);

const ViewTwo = () => (
  <>
    <div className="p-2">
      <h2 className="text-2xl text-white font-sans font-[500]">Website Analytics</h2>
      <p className="text-xl text-white">Total 28.5% Conversion Rate</p>
    </div>
    <div className="p-2">
      <p className="text-xl text-white font-sans font-[400]">Spending</p>
      <br />
      <p className="text-white flex gap-8">
        <span className="flex items-center gap-2">
          <span className="bg-violet-800 p-2 rounded-md shadow-md">12h</span>
          Spend
        </span>

        <span className="flex items-center gap-2">
          <span className="bg-violet-800 p-2 rounded-md shadow-md">18</span>
          Order Size
        </span>
      </p>
      <br />
      <p className="text-white flex gap-9">
        <span className="flex items-center gap-2">
          <span className="bg-violet-800 p-2 rounded-md shadow-md">127</span>
          Order
        </span>

        <span className="flex items-center gap-2">
          <span className="bg-violet-800 p-2 rounded-md shadow-md">2.3k</span>
          Items
        </span>
      </p>
    </div>

    <div className="absolute bottom-10 right-12">
      <img src={CardAnalytics2} alt="Icon2 image" width={200} height={150} />
    </div>
  
  </>
);

const ViewThree = () => (
  <>
    <div className="p-2">
      <h2 className="text-2xl text-white font-sans font-[500]">Website Analytics</h2>
      <p className="text-xl text-white">Total 28.5% Conversion Rate</p>
    </div>
    <div className="p-2">
      <p className="text-xl text-white font-sans font-[400]">Revenue Sources</p>
      <br />
      <p className="text-white flex gap-8">
        <span className="flex items-center gap-2">
          <span className="bg-violet-800 p-2 rounded-md shadow-md">268</span>
          Direct
        </span>

        <span className="flex items-center gap-2">
          <span className="bg-violet-800 p-2 rounded-md shadow-md">890</span>
          Organic
        </span>
      </p>
      <br />
      <p className="text-white flex gap-7">
        <span className="flex items-center gap-2">
          <span className="bg-violet-800 p-2 rounded-md shadow-md">62</span>
          Referral
        </span>

        <span className="flex items-center gap-2">
          <span className="bg-violet-800 p-2 rounded-md shadow-md">1.2k</span>
          Campaign
        </span>
      </p>
    </div>

    <div className="absolute bottom-10 right-12">
      <img src={CardAnalytics3} alt="Icon2 image" width={200} height={150} />
    </div>
  
  </>
);

const Body: React.FC = () => {
  const [activeView, setActiveView] = useState(0);

  const renderDots = () => (
    <div className="flex gap-2">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          onClick={() => setActiveView(i)}
          className={`w-2 h-2 rounded-full cursor-pointer ${
            activeView === i ? "bg-white" : "bg-white opacity-50"
          }`}
        ></span>
      ))}
    </div>
  );

  const renderViewContent = () => {
    switch (activeView) {
      case 0:
        return <ViewOne />;
      case 1:
        return <ViewTwo />;
      case 2:
        return <ViewThree />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto p-4 space-y-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="rounded-lg bg-violet-500 xl:col-span-6 lg:col-span-6 md:col-span-12 relative">
          <GeneralCard>
            <div className="absolute top-10 right-12">{renderDots()}</div>
            {renderViewContent()}
          </GeneralCard>
        </div>

        <div className="xl:col-span-3 lg:col-span-6 md:col-span-12">
          <GeneralCard>
            <ChartComponents />
          </GeneralCard>
        </div>

        <div className="xl:col-span-3 lg:col-span-6 md:col-span-12">
          <GeneralCard></GeneralCard>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className=" xl:col-span-6 lg:col-span-6 md:col-span-12">
          <GeneralCard></GeneralCard>
        </div>
        <div className="xl:col-span-6 lg:col-span-6 md:col-span-12">
          <GeneralCard></GeneralCard>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="xl:col-span-4 lg:col-span-6 md:col-span-12">
          <GeneralCard></GeneralCard>
        </div>
        <div className="xl:col-span-4 lg:col-span-6 md:col-span-12">
          <GeneralCard></GeneralCard>
        </div>
        <div className="xl:col-span-4 lg:col-span-6 md:col-span-12">
          <GeneralCard></GeneralCard>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="xl:col-span-6 lg:col-span-6 md:col-span-12">
          <GeneralCard></GeneralCard>
        </div>
        <div className="xl:col-span-6 lg:col-span-6 md:col-span-12">
          <GeneralCard></GeneralCard>
        </div>
      </div>
    </div>
  );
};

export default Body;
