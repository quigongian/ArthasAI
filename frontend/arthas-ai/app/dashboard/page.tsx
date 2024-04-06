// Resources.tsx
"use client";

import React, { useState } from "react";
import Pagetab from "../components/Pagetab";
import SearchPage from "../components/SearchPageComp";
import DashboardComp from "../components/DashboardComp";

const handleClick1 = () => {
  window.scrollTo({ top: 30, behavior: "smooth" });
};

const handleClick2 = () => {
  window.scrollTo({ top: 60, behavior: "smooth" });
};

const handleClick3 = () => {
  window.scrollTo({ top: 90, behavior: "smooth" });
};

const Home = () => {
  const [currentView, setCurrentView] = useState("search");

  const renderContent = () => {
    if (currentView === "search") return <SearchPage />;
    if (currentView === "dash") return <DashboardComp />;
  };

  return (
    <div>
      <Pagetab currentView={currentView} setCurrentView={setCurrentView} />
      {renderContent()}
    </div>
  );
};

export default Home;
