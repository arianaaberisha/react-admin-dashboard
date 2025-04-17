import React, { useState, useEffect } from "react";
import { Motion, spring } from "react-motion";
import CardAnalytics1 from "../assets/icons/card-website-analytics-1.png";
import CardAnalytics2 from "../assets/icons/card-website-analytics-2.png";
import CardAnalytics3 from "../assets/icons/card-website-analytics-3.png";

export const ViewOne = () => {
  return (
    <div className="relative flex flex-col md:flex-row md:items-start p-6">
      <div className="md:flex-1 ">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl text-white font-medium">
              Website Analytics
            </h2>
            <p className="text-xl text-white font-[400]">
              Total 28.5% Conversion Rate
            </p>
          </div>
        </div>
        <div>
          <p className="text-xl text-white">Traffic</p>
          <br />
          <div className="flex flex-col gap-4 text-white">
            <div className="flex gap-4">
              <span className="flex items-center gap-2">
                <span className="bg-[#6258CC] p-2 rounded-md shadow-md">
                  28%
                </span>
                Sessions
              </span>
              <span className="flex items-center gap-2">
                <span className="bg-[#6258CC] p-2 rounded-md ">
                  3.1k
                </span>
                Page Views
              </span>
            </div>
            <div className="flex gap-9">
              <span className="flex items-center gap-2">
                <span className="bg-[#6258CC] p-2 rounded-md shadow-md">
                  1.2k
                </span>
                Leads
              </span>
              <span className="flex items-center gap-2">
                <span className="bg-[#6258CC] p-2 rounded-md shadow-md">
                  12%
                </span>
                Conversions
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-0 md:absolute md:top-[25%] md:right-[15%] 
lg:mt-0 lg:absolute lg:top-[20%] lg:right-[5%] ">
        <img src={CardAnalytics1} alt="Analytics Card 1" width={200} height={150} />
      </div>
    </div>
  );
};

export const ViewTwo = () => {
  return (
    <div className="relative flex flex-col md:flex-row md:items-start p-6">
      <div className="md:flex-1">
        <div className="mb-4">
          <h2 className="text-2xl text-white font-sans font-[500]">
            Website Analytics
          </h2>
          <p className="text-xl text-white">Total 28.5% Conversion Rate</p>
        </div>
        <div>
          <p className="text-xl text-white font-sans font-[400]">Spending</p>
          <br />
          <div className="flex flex-col gap-4 text-white">
            <div className="flex gap-8">
              <span className="flex items-center gap-2">
                <span className="bg-[#6258CC] p-2 rounded-md shadow-md">
                  12h
                </span>
                Spend
              </span>
              <span className="flex items-center gap-2">
                <span className="bg-[#6258CC] p-2 rounded-md shadow-md">
                  18
                </span>
                Order Size
              </span>
            </div>
            <div className="flex gap-9">
              <span className="flex items-center gap-2">
                <span className="bg-[#6258CC] p-2 rounded-md shadow-md">
                  127
                </span>
                Order
              </span>
              <span className="flex items-center gap-2">
                <span className="bg-[#6258CC] p-2 rounded-md shadow-md">
                  2.3k
                </span>
                Items
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-0 md:absolute md:top-[30%] md:right-[15%]">
        <img src={CardAnalytics2} alt="Analytics Card 2" width={200} height={150} />
      </div>
    </div>
  );
};

export const ViewThree = () => {
  return (
    <div className="relative flex flex-col md:flex-row md:items-start p-6">
      <div className="md:flex-1">
        <div className="mb-4">
          <h2 className="text-2xl text-white font-sans font-[500]">
            Website Analytics
          </h2>
          <p className="text-xl text-white">Total 28.5% Conversion Rate</p>
        </div>
        <div>
          <p className="text-xl text-white font-sans font-[400]">
            Revenue Sources
          </p>
          <br />
          <div className="flex flex-col gap-4 text-white">
            <div className="flex gap-8">
              <span className="flex items-center gap-2">
                <span className="bg-[#6258CC] p-2 rounded-md shadow-md">
                  268
                </span>
                Direct
              </span>
              <span className="flex items-center gap-2">
                <span className="bg-[#6258CC] p-2 rounded-md shadow-md">
                  890
                </span>
                Organic
              </span>
            </div>
            <div className="flex gap-7">
              <span className="flex items-center gap-2">
                <span className="bg-[#6258CC] p-2 rounded-md shadow-md">
                  62
                </span>
                Referral
              </span>
              <span className="flex items-center gap-2">
                <span className="bg-[#6258CC] p-2 rounded-md shadow-md">
                  1.2k
                </span>
                Campaign
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-0 md:absolute md:top-[30%] md:right-[15%]">
        <img src={CardAnalytics3} alt="Analytics Card 3" width={200} height={150} />
      </div>
    </div>
  );
};

type WebAnalyticsCardProps = {};

const WebAnalyticsCard: React.FC<WebAnalyticsCardProps> = () => {
  const [activeView, setActiveView] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection(1);
      setActiveView((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeView]);

  const changeView = (newView: number) => {
    setDirection(newView > activeView ? 1 : -1);
    setActiveView(newView);
  };

  const renderDots = () => (
    <div className="flex gap-2 absolute top-0 right-0 z-10 p-6">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          onClick={() => changeView(i)}
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
    <div className="relative overflow-hidden z-0">
      {renderDots()}
      <Motion
        key={activeView}
        defaultStyle={{ x: direction * 100 }}
        style={{ x: spring(0, { stiffness: 120, damping: 14 }) }}
      >
        {({ x }: { x: number }) => (
          <div
            style={{
              transform: `translateX(${x}%)`,
              transition: "transform 0.2s ease",
            }}
          >
            {renderViewContent()}
          </div>
        )}
      </Motion>
    </div>
  );
};

export default WebAnalyticsCard;
