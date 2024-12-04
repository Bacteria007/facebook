"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {
    FaUserFriends,
    FaVideo,
    FaUsers,
    FaGamepad,
    FaFacebookMessenger,
    FaBell,
    FaUserCircle,
    FaSearch,
} from "react-icons/fa";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";

const Header = ({ setActivePage }) => {
    const [selectedTab, setSelectedTab] = useState('Home');

    const tabs = [
        { name: 'Home', icon: <AiFillHome className="h-6 w-6" />, },
        { name: 'Friends', icon: <FaUserFriends className="h-6 w-6" />, },
        { name: 'Videos', icon: <FaVideo className="h-6 w-6" />, },
        { name: 'Groups', icon: <FaUsers className="h-6 w-6" />, },
        { name: 'Games', icon: <FaGamepad className="h-6 w-6" />, },
    ];

    const actions = [
        { name: 'Messenger', icon: <FaFacebookMessenger className="h-6 w-6" /> },
        { name: 'Notifications', icon: <FaBell className="h-6 w-6" /> },
        { name: 'Account', icon: <FaUserCircle className="h-6 w-6" /> },
    ];

    return (
        <div className="flex justify-between bg-white p-4 shadow-md">
            {/* Logo and Search */}
            <div className="flex justify-start items-center">
                <Image src="/logo.png" alt="Logo" width={45} height={45} />
                <div className="flex items-center bg-[#f0f2f5] ml-4 shadow-sm rounded-full w-[250px] p-3">
                    <FaSearch size={18} color="#6b7280" />
                    <input
                        className="flex-1 bg-transparent ms-4 border-none outline-none text-gray-700"
                        placeholder="Search here"
                    />
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-10">
                {tabs.map((tab) => (
                    <div
                        className="flex flex-col items-center justify-center cursor-pointer group"
                        onClick={() => {
                            setActivePage(tab.name)
                            setSelectedTab(tab.name)
                        }}

                    >
                        <div
                            className={`${selectedTab === tab.name ? 'text-blue-500' : 'text-gray-500'
                                } group-hover:text-blue-400`}
                        >
                            {tab.icon}
                        </div>
                        {selectedTab === tab.name && (
                            <div className="h-1 w-8 bg-blue-500 rounded-full mt-1" />
                        )}
                    </div>
                ))}
            </div>

            {/* Actions */}
            <div className="flex gap-10">
                {actions.map((action) => (
                    <div
                        key={action.name}
                        className="flex items-center justify-center text-gray-500 cursor-pointer group"
                    >
                        <div className="group-hover:text-blue-400">{action.icon}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Header;
