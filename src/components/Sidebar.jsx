import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import {
  FaHome,
  FaUserFriends,
  FaVideo,
  FaUsers,
  FaGamepad,
} from "react-icons/fa";

const MyRow = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-3 hover:text-blue-500 cursor-pointer">
      <div className="text-gray-500">{icon}</div>
      <div className="text-gray-700">{title}</div>
    </div>
  );
};

const Sidebar = () => {
  const sidebarItems = [
    { title: "Dashboard", icon: <AiFillHome size={20} />, },
    { title: "Friends", icon: <FaUserFriends size={20} /> },
    { title: "Videos", icon: <FaVideo size={20} /> },
    { title: "Groups", icon: <FaUsers size={20} /> },
    { title: "Gaming", icon: <FaGamepad size={20} /> },
  ];

  return (
    <div className="w-64 h-screen bg-gray-100 shadow-md p-4">
      <nav className="mt-10">
        <ul className="space-y-10">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <MyRow title={item.title} icon={item.icon} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
