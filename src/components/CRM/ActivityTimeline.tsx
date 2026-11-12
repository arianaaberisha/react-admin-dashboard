import React from "react";
import ListDetails from "../Icons/List-details";
import Invoice from "../../assets/icons/InvoicesPdf.png";
import Member1 from "../../assets/icons/Avatar6.png";
import Member2 from "../../assets/icons/Avatar7.png";
import Member3 from "../../assets/icons/Avatar11.png";
import Member from "../../assets/icons/Avatar12.png";

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
    description: "Project meeting with John @10:15am",
    time: "45 min ago",
    type: "meeting",
    clientName: "Lester McCarthy(Client)",
    clientTitle: "CEO of Acme Inc",
    extraContent: (
      <div className="mt-1 flex items-center gap-1 text-[13px] font-[400] text-[#2F2B3DB2] dark:text-gray-400">
        <img src={Member} className="w-10 h-10 rounded-full" alt="client" />
        <span>{"CEO of Acme Inc"}</span>
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

const DOT_COLORS = {
  paid: "bg-[#7367F0]",
  meeting: "bg-[#28C76F]",
  project: "bg-[#00BAD1]",
} as const;

type TimelineEventProps = { item: TimelineItem };

const TimelineEvent: React.FC<TimelineEventProps> = ({ item }) => (
  <li className="relative pl-8 mt-1">
    <div className="absolute left-1 w-px bg-[#2F2B3D1F] dark:bg-gray-600 top-5 bottom-0"></div>
    <span
      className={`absolute top-0 left-0 w-3 h-3 rounded-full ${DOT_COLORS[item.type]}`}
    ></span>
    <time className="absolute top-0 right-0 text-[13px] text-[#2F2B3D66] font-[400] dark:text-gray-400">
      {item.time}
    </time>
    <div className="pr-16">
      <div className="text-[15px] text-[#2F2B3DE5] font-[500] dark:text-[#E1DEF5E5]">{item.title}</div>
      <div className="text-[15px] font-[400] text-[#2F2B3DB2] dark:text-gray-400 mt-1">
        {item.description}
      </div>

      {item.file && (
        <div className="mt-2 inline-flex items-center font-medium text-[#2F2B3DB2] dark:text-gray-400 \
           dark:bg-gray-700 bg-[#2F2B3D0F] \
          px-2 py-1 rounded text-[15px] gap-1">
          <img src={Invoice} className="w-5 h-5" alt="file icon" />
          {item.file}
        </div>
      )}

      {item.clientName && (
        <div className="mt-2 text-[13px] font-[500] text-[#2F2B3DB2] dark:text-gray-400">
          <span className="font-semibold">{item.clientName}</span>
        </div>
      )}

      {item.extraContent}

      {item.people && (
        <div className="flex mt-2">
          {item.people.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="member"
              className={`w-12 h-12 rounded-full border-2 border-white -ml-2 ${i === 0 ? "ml-0" : ""}`}
            />
          ))}
          <span className="w-12 h-12 flex items-center justify-center border-2 border-white rounded-full bg-[#EEEDF0] \
            text-[15px] text-[#2F2B3DE5] font-[400] -ml-2">
            +{6 - item.people.length}
          </span>
        </div>
      )}
    </div>
  </li>
);

const ActivityTimeline: React.FC = () => (
  <div className="p-6 w-full mt-4">
    <div className="flex items-center gap-3 mb-6 pl-4">
      <ListDetails className="w-5 h-5 dark:stroke-white" />
      <h2 className="text-[18px] font-[500] text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">
        Activity Timeline
      </h2>
    </div>
    <ul className="relative pl-4">
      {timelineData.map((item, index) => (
        <TimelineEvent key={index} item={item} />
      ))}
    </ul>
  </div>
);

export default ActivityTimeline;
