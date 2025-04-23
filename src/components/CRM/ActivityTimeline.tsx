import React, { useRef, useEffect, useState } from "react";
import Invoice from "../../assets/icons/InvoicesPdf.png"
import Member1 from "../../assets/icons/Avatar6.png";
import Member2 from "../../assets/icons/Avatar7.png";
import Member3 from "../../assets/icons/Avatar11.png";
import Member from "../../assets/icons/Avatar12.png";
import ListDetails from '../Icons/List-details';

type TimelineItem = {
  title: string;
  description: string;
  time: string;
  type: "paid" | "meeting" | "project";
  file?: string;
  people?: string[];
  clientName?: string;
  clientTitle?: string;
  extraContent?: React.ReactNode;
};

const timelineData: TimelineItem[] = [
  {
    title: "12 Invoices have been paid",
    description: "Invoices have been paid to the company",
    time: "12 min ago",
    type: "paid",
    file: "invoices.pdf",
  },
  {
    title: "Client Meeting",
    description: "Project meeting with john @10:15am",
    time: "45 min ago",
    type: "meeting",
    clientName: "Lester McCarthy",
    clientTitle: "CEO of Pixinvent",
    extraContent: (
      <div className="mt-1 flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
        <img src={Member} className="w-10 h-10 rounded-full" />
        <span>CEO of Pixinvent</span>
      </div>
    ),
  },
  {
    title: "Create a new project for client",
    description: "6 team members in a project",
    time: "2 Days Ago",
    type: "project",
    people: [Member1, Member2, Member3],
  },
];

const getDotColor = (type: TimelineItem["type"]) => {
  switch (type) {
    case "paid":
      return "bg-[#7367F0]";
    case "meeting":
      return "bg-green-500";
    case "project":
      return "bg-sky-500";
  }
};

const ActivityTimeline: React.FC = () => {
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [dividerHeights, setDividerHeights] = useState<number[]>([]);

  useEffect(() => {
    const heights: number[] = [];
    for (let i = 0; i < timelineData.length - 1; i++) {
      const currentDot = dotRefs.current[i];
      const nextDot = dotRefs.current[i + 1];
      if (currentDot && nextDot) {
        const currentRect = currentDot.getBoundingClientRect();
        const nextRect = nextDot.getBoundingClientRect();
        const gap = nextRect.top - currentRect.bottom;
        heights.push(gap);
      } else {
        heights.push(50); 
      }
    }
    setDividerHeights(heights);
  }, [timelineData.length]);

  return (
    <div className="p-6 w-full mt-4">
      <div className="flex justify-start mb-6 items-center gap-3">
      <ListDetails className="w-5 h-5 ml-4 dark:stroke-white"/>
        <h2 className="text-lg text-[#2F2B3DE5] dark:text-[#E1DEF5E5] font-[500]">Activity Timeline</h2>
        
      </div>

      <div className="pl-4 flex flex-col justify-between">
        <div className="space-y-2">
          {timelineData.map((item, index) => (
            <div key={index} className="flex gap-4 items-start relative">
              <div
                className="flex flex-col items-center z-10"
                ref={(el) => {
                  dotRefs.current[index] = el;
                }}
              >
                <span className={`w-3 h-3 rounded-full ${getDotColor(item.type)}`}></span>
                <div
                  className="w-px bg-gray-300"
                  style={{ height: index < dividerHeights.length ? dividerHeights[index] : 20 }}
                />
              </div>
              <div className="flex-1">
                <div className="font-medium  dark:text-[#E1DEF5E5]">{item.title}</div>
                <div className="text-sm text-gray-500 mt-1  dark:text-gray-400">{item.description}</div>

                {item.file && (
                  <div className="mt-2 inline-flex items-center font-[500] text-gray-600 border dark:text-gray-400 border-gray-200 bg-gray-200 dark:bg-gray-700 dark:border-transparent px-2 py-1 rounded text-sm gap-1 cursor-pointer w-fit">
                    <img src={Invoice} className="w-5 h-5"/>
                    {item.file}
                  </div>
                )}

                {item.clientName && (
                  <div className="mt-2 text-sm text-gray-700  dark:text-gray-400">
                    <span className="font-semibold ">{item.clientName}</span>
                  </div>
                )}

                {item.extraContent && item.clientTitle  && <div>{item.extraContent}</div>}

                {item.people && (
                  <div className="flex mt-2 ">
                    {item.people.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt="member"
                        className={`w-12 h-12 rounded-full border-2  border-white -ml-2 ${i === 0 ? "ml-0" : ""}`}
                      />
                    ))}
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-sm font-medium border-2 border-white -ml-2 ">
                      +{6 - item.people.length}
                    </span>
                  </div>
                )}

                <div className="text-sm flex justify-end text-gray-400 mt-1 ">{item.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityTimeline;
