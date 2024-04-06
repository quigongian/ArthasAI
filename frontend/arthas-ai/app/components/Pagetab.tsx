"use client";
import React from "react";
import Link from "next/link";

type PagetabProps = {
	currentView: string;
	setCurrentView: React.Dispatch<React.SetStateAction<string>>;
};

const Pagetab: React.FC<PagetabProps> = ({ currentView, setCurrentView }) => {
	const handleLinkClick = (view: string) => {
		setCurrentView(view);
	};

	return (
		<div className="!bg-background top-0 flex items-center gap-4 border-y-[0.5px] border-gray-300 bg-background px-8 md:px-8 bg-gray-50 px-8">
			<nav className="hidden px-8 flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
				<Link
					className={`!text-foreground transition-colors text-m pb-4 pt-6 ${
						currentView === "search"
							? "underline decoration-accent underline-offset-[18px] decoration-[3px]"
							: ""
					}`}
					href="#"
					onClick={() => handleLinkClick("search")}>
					Search
				</Link>
				<Link
					className={`!text-foreground transition-colors text-m pb-4 pt-6 ${
						currentView === "dash"
							? "underline decoration-accent underline-offset-[18px] decoration-[3px]"
							: ""
					}`}
					href="#"
					onClick={() => handleLinkClick("dash")}>
					Dashboard
				</Link>
			</nav>
		</div>
	);
};

export default Pagetab;
