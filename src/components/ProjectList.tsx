 import React, { useState, useRef, useEffect } from "react";
  import BrandVue from "../assets/icons/Brand-vue.svg";
  import Brand from "../assets/icons/Brand.svg";
  import ReactIcon from "../assets/icons/React.svg";
  import XdIcon from "../assets/icons/brand-adobe-xd.svg";
  import World from "../assets/icons/World.svg";
  import Member1 from "../assets/icons/Avatar1.png";
  import Member2 from "../assets/icons/Avatar2.png";
  import Member3 from "../assets/icons/Avatar3.png";
  import Member4 from "../assets/icons/Avatar4.png";
  import Member5 from "../assets/icons/Avatar5.png";
  import Member6 from "../assets/icons/Avatar6.png";
  import Member7 from "../assets/icons/Avatar7.png";
  import Member8 from "../assets/icons/Avatar8.png";
  import Member9 from "../assets/icons/Avatar9.png";
  import Member10 from "../assets/icons/Avatar10.png";
  import Member11 from "../assets/icons/Avatar11.png";
  import Member12 from "../assets/icons/Avatar12.png";
  import Member13 from "../assets/icons/Avatar13.png";
  import Diamond from "../assets/icons/Diamond.svg";
  import Figma from "../assets/icons/Figma.png";
  
  interface Project {
    id: number;
    name: string;
    date: string;
    leader: string;
    teamMembers: string[];
    progress: number;
    icon: React.ReactNode;
    iconBg: string;
  }
  
  const initialProjects: Project[] = [
    {
      id: 1,
      name: "Website SEO",
      date: "10 May 2021",
      leader: "Eileen",
      teamMembers: [Member1, Member2, Member3, Member4, Member5, Member6, Member7],
      progress: 38,
      icon: <div className="text-red-500 text-sm">ws</div>,
      iconBg: "bg-red-100 rounded-full",
    },
    {
      id: 2,
      name: "Social Banners",
      date: "03 Jan 2021",
      leader: "Owen",
      teamMembers: [Member4, Member1, Member5, Member4, Member5],
      progress: 45,
      icon: <img src={World} alt="World Icon" className="w-5 h-5" />,
      iconBg: "bg-gray-200 rounded-full",
    },
    {
      id: 3,
      name: "Logo Design",
      date: "12 Aug 2021",
      leader: "Keith",
      teamMembers: [Member6, Member5, Member7, Member4],
      progress: 92,
      icon:<img src={Diamond} alt="Diamond Icon" className="w-6 h-6" />,
      iconBg: "bg-orange-100 rounded-full",
    },
    {
      id: 4,
      name: "IOS App Design",
      date: "19 Apr 2021",
      leader: "Merline",
      teamMembers: [Member3, Member8, Member6, Member4],
      progress: 56,
      icon:<img src={Diamond} alt="Diamond Icon" className="w-6 h-6" />,
      iconBg: "bg-orange-100 rounded-full",
    },
    {
      id: 5,
      name: "Figma Dashboards",
      date: "08 Apr 2021",
      leader: "Harmonia",
      teamMembers: [Member9, Member3, Member10],
      progress: 25,
      icon: <img src={Figma} alt="Figma Icon" className="w-6 h-6"/>,
      iconBg: "bg-pink-100",
    },
    {
      id: 6,
      name: "Crypto Admin",
      date: "29 Sept 2021",
      leader: "Allyson",
      teamMembers: [Member5, Member2, Member5, Member4],
      progress: 36,
      icon: <img src={Brand} alt="Brand Icon" className="w-6 h-6" />,
      iconBg: "bg-orange-100 rounded-full",
    },
    {
      id: 7,
      name: "Create Website",
      date: "20 Mar 2021",
      leader: "Georgie",
      teamMembers: [Member3, Member11, Member6, Member4, Member5, Member6],
      progress: 72,
      icon: <img src={ReactIcon} alt="React Icon" className="w-5 h-5" />,
      iconBg: "bg-blue-100 rounded-full",
    },
    {
      id: 8,
      name: "App Design",
      date: "09 Feb 2021",
      leader: "Fred",
      teamMembers: [Member12, Member2, Member10],
      progress: 89,
      icon: <img src={XdIcon} alt="XD Icon" className="w-5 h-5" />,
      iconBg: "bg-purple-100 rounded-full",
    },
    {
      id: 9,
      name: "Angular APIs",
      date: "17 June 2021",
      leader: "Richardo",
      teamMembers: [Member10, Member13, Member1, Member4],
      progress: 77,
      icon: <img src={XdIcon} alt="XD Icon" className="w-5 h-5" />,
      iconBg: "bg-purple-100 rounded-full",
    },
    {
      id: 10,
      name: "Admin Template",
      date: "06 Oct 2021",
      leader: "Genevra",
      teamMembers: [Member9, Member13, Member5, Member4],
      progress: 100,
      icon: <img src={BrandVue} alt="Vue Icon" className="w-5 h-5" />,
      iconBg: "bg-green-100 rounded-full",
    },
  ];
  
  const ProjectList: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>(initialProjects);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProjectIds, setSelectedProjectIds] = useState<number[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const itemsPerPage = 5;
    const selectAllRef = useRef<HTMLInputElement>(null);
  
    const filteredProjects = projects.filter(project =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    const totalPages = Math.max(1, Math.ceil(filteredProjects.length / itemsPerPage));
    const safePage = Math.min(currentPage, totalPages);
    const indexOfLastItem = safePage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProjects = filteredProjects.slice(indexOfFirstItem, indexOfLastItem);
  
    useEffect(() => {
      const currentIds = currentProjects.map(p => p.id);
      if (selectAllRef.current) {
        const selectedOnPage = currentIds.filter(id => selectedProjectIds.includes(id));
        selectAllRef.current.indeterminate =
          selectedOnPage.length > 0 && selectedOnPage.length < currentProjects.length;
      }
    }, [selectedProjectIds, currentProjects]);
  
    const handleDeleteProject = (id: number) => {
      setProjects(prev => prev.filter(p => p.id !== id));
      setSelectedProjectIds(prev => prev.filter(item => item !== id));
    };

    const handleSearchChange = (value: string) => {
      setSearchQuery(value);
      setCurrentPage(1);
    };

    const handleSelectAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentIds = currentProjects.map(project => project.id);
      if (e.target.checked) {
        setSelectedProjectIds(prev => [
          ...prev,
          ...currentIds.filter(id => !prev.includes(id)),
        ]);
      } else {
        setSelectedProjectIds(prev =>
          prev.filter(id => !currentIds.includes(id))
        );
      }
    };
  
    const handleCheckboxChange = (id: number, checked: boolean) => {
      if (checked) {
        setSelectedProjectIds(prev => [...prev, id]);
      } else {
        setSelectedProjectIds(prev => prev.filter(item => item !== id));
      }
    };
  
    return (
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap- sm:gap-0">
          <h2 className="text-lg dark:text-[#E1DEF5E5]">Project List</h2>
          <input
            type="text"
            placeholder="Search Project"
            className="border rounded-lg px-5 py-2 text-sm dark:bg-transparent dark:border-gray-600 dark:text-[#E1DEF5E5] dark:placeholder:text-gray-400"
            value={searchQuery}
            onChange={e => handleSearchChange(e.target.value)}
          />
        </div>
  
        <div className="px-4">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="w-8 py-5 px-2">
                  <input
                    ref={selectAllRef}
                    type="checkbox"
                    className="w-4 h-4"
                    checked={
                      currentProjects.length > 0 &&
                      currentProjects.every(p => selectedProjectIds.includes(p.id))
                    }
                    onChange={handleSelectAllChange}
                  />
                </th>
                <th className="text-left py-2 px-2 text-sm dark:text-[#E1DEF5E5]">PROJECT</th>
                <th className="text-left py-2 px-2 text-sm hidden md:table-cell dark:text-[#E1DEF5E5]">LEADER</th>
                <th className="text-left py-2 px-2 text-sm hidden md:table-cell dark:text-[#E1DEF5E5]">TEAM</th>
                <th className="text-left py-2 px-2 text-sm hidden md:table-cell dark:text-[#E1DEF5E5]">PROGRESS</th>
                <th className="text-left py-2 px-2 text-sm hidden md:table-cell dark:text-[#E1DEF5E5]">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {currentProjects.map(project => (
                <tr key={project.id} className="border-b dark:text-[#E1DEF5E5]">
                  <td className="py-1.5 px-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4"
                      checked={selectedProjectIds.includes(project.id)}
                      onChange={e =>
                        handleCheckboxChange(project.id, e.target.checked)
                      }
                    />
                  </td>
                  <td className="py-4 px-2">
                    <div className="flex items-center gap-2 ">
                      <div className={`w-6 h-6 ${project.iconBg} rounded flex items-center justify-center`}>
                        {project.icon}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">
                          {project.name}
                        </div>
                        <div className="text-xs text-gray-500">{project.date}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 text-sm hidden md:table-cell ">{project.leader}</td>
                  <td className="px-2 hidden md:table-cell">
                    <div className="flex -space-x-1">
                      {project.teamMembers.slice(0, 3).map((imgSrc, index) => (
                        <img
                          key={index}
                          src={imgSrc}
                          alt={`Team member ${index + 1}`}
                          className="w-8 h-8 rounded-full object-cover border-2 border-white dark:border-[#2F3349]"
                        />
                      ))}
                      {project.teamMembers.length > 3 && (
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center border-2 border-white text-xs dark:bg-gray-600 dark:text-white dark:border-[#2F3349]">
                          +{project.teamMembers.length - 3}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="py-1.5 px-2 hidden md:table-cell">
                    <div className="flex items-center gap-1">
                      <div className="flex-1 h-1.5 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-[#7367F0] rounded-full"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm">{project.progress}%</span>
                    </div>
                  </td>
                  <td className="py-1.5 px-2 hidden md:table-cell">
                    <button
                      aria-label={`Delete ${project.name}`}
                      title="Delete"
                      onClick={() => handleDeleteProject(project.id)}
                      className="bg-transparent border-none p-1 text-[#2F2B3DE5] dark:bg-transparent dark:text-[#ffffff]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18M19 6l-1 14H6L5 6h14zM10 11v6M14 11v6" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
              {currentProjects.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-6 text-sm text-gray-500">
                    No projects found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
  
        <div className="flex justify-between items-center px-4 py-2 border-t">
          <div className="text-xs text-gray-500">
            Showing {filteredProjects.length === 0 ? 0 : indexOfFirstItem + 1} to{" "}
            {Math.min(indexOfLastItem, filteredProjects.length)} of {filteredProjects.length} entries
          </div>
          <div className="flex gap-1">
            <button
              className="px-2 py-1 border rounded text-sm hover:bg-gray-100 dark:bg-transparent dark:text-[#E1DEF5E5] dark:border-gray-600 dark:hover:bg-white/10"
              onClick={() => setCurrentPage(1)}
            >
              «
            </button>
            <button
              className="px-2 py-1 border rounded text-sm hover:bg-gray-100 dark:bg-transparent dark:text-[#E1DEF5E5] dark:border-gray-600 dark:hover:bg-white/10"
              onClick={() => setCurrentPage(Math.max(1, safePage - 1))}
            >
              ‹
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`px-2 py-1 text-sm ${
                  safePage === page
                    ? "bg-[#7367F0] text-white"
                    : "border hover:bg-gray-100 dark:bg-transparent dark:text-[#E1DEF5E5] dark:border-gray-600 dark:hover:bg-white/10"
                } rounded`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button
              className="px-2 py-1 border rounded text-sm hover:bg-gray-100 dark:bg-transparent dark:text-[#E1DEF5E5] dark:border-gray-600 dark:hover:bg-white/10"
              onClick={() => setCurrentPage(Math.min(totalPages, safePage + 1))}
            >
              ›
            </button>
            <button
              className="px-2 py-1 border rounded text-sm hover:bg-gray-100 dark:bg-transparent dark:text-[#E1DEF5E5] dark:border-gray-600 dark:hover:bg-white/10"
              onClick={() => setCurrentPage(totalPages)}
            >
              »
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectList;
  