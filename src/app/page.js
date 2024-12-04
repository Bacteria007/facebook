"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import HomePage from '../pages/HomePage';
import VideosPage from '../pages/Videos';
import GroupsPage from '../pages/Groups';
import GamesPage from '../pages/Games';
import FriendsPage from '../pages/Friends';

export default function Home() {
  const [activePage, setActivePage] = useState("Home");

  // Map the active page to its corresponding component
  const renderActivePage = () => {
    switch (activePage) {
      case "Home":
        return <HomePage />;
      case "Videos":
        return <VideosPage />;
      case "Friends":
        return <FriendsPage />;
      case "Games":
        return <GamesPage />;
      case "Groups":
        return <GroupsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      {/* Sticky Header */}
      <div className="sticky top-0 z-50">
        <Header setActivePage={setActivePage} />
      </div>
      <main className="flex h-[calc(100vh-64px)]">
        {/* Left Sidebar */}
        <div className="w-64 sticky top-0 h-full">
          <Sidebar setActivePage={setActivePage} />
        </div>
        
        {/* Scrollable Middle Section */}
        <div className="flex-1 bg-white overflow-y-auto p-4">
          {renderActivePage()}
        </div>
        
        {/* Right Sidebar */}
        <div className="w-64 sticky top-0 h-full">
          <Sidebar setActivePage={setActivePage} />
        </div>
      </main>
    </div>
  );
}
