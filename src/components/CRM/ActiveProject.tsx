import React from "react";
import Laravel from '../Icons/Laravel';
import Figma from "../../assets/icons/Figma2.png";
import BrandVue from "../../assets/icons/Brand-vue.svg";
import ReactIcon from "../../assets/icons/React.svg";
import Bootstrap from "../Icons/Bootstrap";
import Diamond from '../../assets/icons/Diamond.svg';

const projects = [
  { name: "Laravel", category: "eCommerce", icon: <Laravel className="w-10 h-10 mr-3"/>, progress: 65, color: "bg-red-500" },
  { name: "Figma", category: "App UI Kit", icon: <img src={Figma} className="w-6 h-9 mr-5 ml-2"/>, progress: 86, color: "bg-blue-500" },
  { name: "VueJs", category: "Calendar App", icon: <img src={BrandVue} className="w-10 h-10 mr-3"/>, progress: 90, color: "bg-green-500" },
  { name: "React", category: "Dashboard", icon: <img src={ReactIcon} className="w-10 h-10 mr-3"/>, progress: 37, color: "bg-[#00BAD1]" },
  { name: "Bootstrap", category: "Website", icon: <Bootstrap className="w-10 h-10 mr-3"/>, progress: 22, color: "bg-[#7367F0]" },
  { name: "Sketch", category: "Website Design", icon: <img src={Diamond} className="w-10 h-10 mr-3"/>, progress: 29, color: "bg-orange-500" },
];

const ActiveProject: React.FC = () => {
  return (
    <div className="p-6">
      <div className="p-2 font-medium">
        <h2 className="text-lg font-[500] text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">Active Project</h2>
        <p className="text-md text-gray-500 dark:text-gray-400">Average 72% Completed</p>
      </div>

      <div className="flex flex-col p-1">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col space-y-2 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {project.icon}
                <div className="flex flex-col">
                  <p className="text-md text-[#2F2B3DE5] font-semibold dark:text-[#E1DEF5E5]">{project.name}</p>
                  <p className="text-sm text-[#2F2B3DB2] dark:text-gray-400">{project.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 justify-end w-50">
                <div className="w-40 bg-gray-200 dark:bg-gray-700 rounded h-2">
                  <div
                    className={`h-2 rounded ${project.color}`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <div className="text-gray-400 text-md font-semibold">
                  {project.progress}%
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveProject;
