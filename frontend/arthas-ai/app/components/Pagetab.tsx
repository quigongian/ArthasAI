"use client";
import React from "react";
import Link from "next/link";

export default function Pagetab({ currentView, setCurrentView }) {
  const handleLinkClick = (view) => {
    setCurrentView(view);
  };

  return (
    <header className=" top-0 flex items-center gap-4 border-y-[0.5px] border-gray-300 bg-background px-8 md:px-8 bg-gray-50 px-8">
      <nav className="hidden px-8 flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          className={`text-gray-500 transition-colors text-m pb-4 pt-6 ${
            currentView === "search"
              ? " text-gray-800 underline underline-offset-[18px] decoration-[3px]"
              : ""
          }`}
          href="#"
          onClick={() => handleLinkClick("search")}
        >
          Search
        </Link>
        <Link
          className={`text-gray-500 transition-colors text-m pb-4 pt-6 ${
            currentView === "dash"
              ? "text-gray-800 underline underline-offset-[18px] decoration-[3px]"
              : ""
          }`}
          href="#"
          onClick={() => handleLinkClick("dash")}
        >
          Dashboard
        </Link>
      </nav>
    </header>
  );
}
