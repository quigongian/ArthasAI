"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";

interface searchBarProps {
	setSearchSubmitted: (value: boolean) => void;
}

export default function SearchBar({ setSearchSubmitted }: searchBarProps) {
	const [searchInput, setSearchInput] = useState("");

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			e.preventDefault();
			setSearchSubmitted(true);
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};

	return (
		<form className="flex flex-col items-center  mt-40 flex-grow">
			{/* Logo */}
			<h1 className="logo text-4xl font-medium">ARTHAS AI</h1>

			<div
				style={{
					width: "90vw",
					maxWidth: "65%",
				}}
				className="flex mt-8  w-4/5 rounded-[10px] bg-gradient-to-r from-[#155E23] via-[#1E4786] to-[#FA7A18] p-[2px] items-center sm:max-w-xl lg:max-w-2xl">
				<div className="flex bg-background rounded-[8px] px-5 py-8 w-full items-center">
					<Search className="h-5 mr-3 text-accent" />
					<input
						type="text"
						className="focus:outline-none flex-grow bg-background text-accent placeholder-accent"
						placeholder="Search for papers..."
						value={searchInput}
						onChange={handleInputChange}
						onKeyDown={handleKeyDown}
					/>
				</div>
			</div>
			{/* Recommemdation Buttons */}
			<div className="pt-12 flex flex-col items-center">
				<div className="grid grid-cols-3 gap-4">
					<button className="rec-btn bg-secondary text-foreground border">
						What is AI?
					</button>
					<button className="rec-btn bg-secondary text-foreground border">
						A search example here
					</button>
					<button className="rec-btn bg-secondary text-foreground border">
						A search example here. Another one
					</button>
				</div>
				<div className="grid grid-cols-2 gap-4 mt-4">
					<button className="rec-btn bg-secondary text-foreground border">
						Another search example can be put here
					</button>
					<button className="rec-btn bg-secondary text-foreground border">
						example can be put here
					</button>
				</div>
			</div>
		</form>
	);
}
