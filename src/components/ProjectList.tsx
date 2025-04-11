import React, { useState } from "react";


const projects = [
    {
        id: 1,
        name: "Website SEO",
        date: "10 May 2021",
        leader: "Eileen",
        teamSize: 7,
        progress: 38,
        icon: "",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-500"
    },
    {
        id: 2,
        name: "Social Banners",
        date: "03 Jan 2021",
        leader: "Owen",
        teamSize: 5,
        progress: 45,
        icon: "",
        iconBg: "bg-gray-100",
        iconColor: "text-gray-500"
    },
    {
        id: 3,
        name: "Logo Design",
        date: "12 Aug 2021",
        leader: "Keith",
        teamSize: 4,
        progress: 92,
        icon: "",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-500"
    },
    {
        id: 4,
        name: "IOS App Design",
        date: "19 Apr 2021",
        leader: "Merline",
        teamSize: 4,
        progress: 56,
        icon: "",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-500"
    },
    {
        id: 5,
        name: "Figma Dashboards",
        date: "08 Apr 2021",
        leader: "Harmonia",
        teamSize: 3,
        progress: 25,
        icon: "",
        iconBg: "bg-pink-100",
        iconColor: "text-pink-500"
    },
    {
        id: 6,
        name: "Crypto Admin",
        date: "29 Sept 2021",
        leader: "Allyson",
        teamSize: 4,
        progress: 36,
        icon: "",
        iconBg: "bg-orange-100",
        iconColor: "text-orange-500"
    },
    {
        id: 7,
        name: "Create Website",
        date: "20 Mar 2021",
        leader: "Georgie",
        teamSize: 6,
        progress: 72,
        icon: "",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-500"
    },
    {
        id: 8,
        name: "App Design",
        date: "09 Feb 2021",
        leader: "Fred",
        teamSize: 3,
        progress: 89,
        icon: "",
        iconBg: "bg-purple-100",
        iconColor: "text-indigo-500"
    },
    {
        id: 9,
        name: "Angular APIs",
        date: "17 June 2021",
        leader: "Richardo",
        teamSize: 4,
        progress: 77,
        icon: "",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-500"
    },
    {
        id: 10,
        name: "Admin Template",
        date: "06 Oct 2021",
        leader: "Genevra",
        teamSize: 4,
        progress: 100,
        icon: "",
        iconBg: "bg-green-100",
        iconColor: "text-green-500"
    }
];

const ProjectList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);
    
    return(
        <div className="flex flex-col">
            <div className="flex justify-between items-center px-4 py-2">
                <h2 className="text-lg">Project List</h2>
                <input
                    type="text"
                    placeholder="Search Project"
                    className="border rounded-lg px-5 py-2 text-sm"
                />
            </div>
            <div className="px-4 ">
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="w-8 py-5 px-2">
                                <input type="checkbox" className="w-4 h-4 "/>
                            </th>
                            <th className="text-left py-2 px-2 text-sm ">PROJECT</th>
                            <th className="text-left py-2 px-2 text-sm ">LEADER</th>
                            <th className="text-left py-2 px-2 text-sm">TEAM</th>
                            <th className="text-left py-2 px-2 text-sm">PROGRESS</th>
                            <th className="text-left py-2 px-2 text-sm">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentProjects.map((project) => (
                            <tr key={project.id} className="border-b">
                                <td className="py-1.5 px-4">
                                    <input type="checkbox" className="w-4 h-4" />
                                </td>
                                <td className="py-4 px-2">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-6 h-6 ${project.iconBg} rounded flex items-center justify-center`}>
                                            <span className={`${project.iconColor} text-sm`}>{project.icon}</span>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-[#2F2B3DE5]">{project.name}</div>
                                            <div className="text-xs text-gray-500">{project.date}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-1.5 px-2 text-sm">{project.leader}</td>
                                <td className="py-1.5 px-2">
                                    <div className="flex -space-x-1 ">
                                        {[...Array(3)].map((_, i) => (
                                            <div key={i} className="w-6 h-6 rounded-full bg-gray-200">
                                            </div>
                                        ))}
                                        {project.teamSize > 3 && (
                                            <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs">
                                                +{project.teamSize - 3}
                                            </div>
                                        )}
                                    </div>
                                </td>
                                <td className="py-1.5 px-2">
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
                                <td className="py-1.5 px-2">
                                    <button className="text-[#2F2B3DE5] text-lg font-semibold ">⋮</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between items-center px-4 py-2 border-t">
                <div className="text-xs text-gray-500">
                    Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, projects.length)} of {projects.length} entries
                </div>
                <div className="flex gap-1">
                    <button 
                        className="px-2 py-1 border rounded text-sm hover:bg-gray-100"
                        onClick={() => setCurrentPage(1)}
                    >«</button>
                    <button 
                        className="px-2 py-1 border rounded text-sm hover:bg-gray-100"
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    >‹</button>
                    <button 
                        className={`px-2 py-1 text-sm ${currentPage === 1 ? 'bg-[#7367F0] text-white' : 'border hover:bg-gray-100'} rounded`}
                        onClick={() => setCurrentPage(1)}
                    >1</button>
                    <button 
                        className={`px-2 py-1 text-sm ${currentPage === 2 ? 'bg-[#7367F0] text-white' : 'border hover:bg-gray-100'} rounded`}
                        onClick={() => setCurrentPage(2)}
                    >2</button>
                    <button 
                        className="px-2 py-1 border rounded text-sm hover:bg-gray-100"
                        onClick={() => setCurrentPage(p => Math.min(2, p + 1))}
                    >›</button>
                    <button 
                        className="px-2 py-1 border rounded text-sm hover:bg-gray-100"
                        onClick={() => setCurrentPage(2)}
                    >»</button>
                </div>
            </div>
        </div>
    );
}

export default ProjectList