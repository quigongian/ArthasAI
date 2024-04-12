// Resources.tsx
"use client";
import React from "react";
import Teamcard from "../components/Teamcard";
import { useQuery } from "@tanstack/react-query";

const TeamPage = () => {
	const fetcher = useQuery({
		queryKey: [`/teampage/api/test`],
		queryFn: async () => {
			const response = await fetch(`/teampage/api/test`);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return response.json();
		},
	});

	const isLoading = fetcher.isLoading;
	const isError = fetcher.isError;
	const data = fetcher.data;

	if (isLoading) {
		return <div>Loading...</div>; // Or any loading indicator you prefer
	}

	if (isError) {
		return <div>Error loading data</div>; // Or any error handling you prefer
	}

	// Correctly destructure the nested data
	const { teamLeads, frontend, backend } = data.data;

	// Define a type for a team member
	type TeamMember = {
		id: string;
		image: string;
		name: string;
		role: string;
		quote: string;
		github: string;
		linkedin: string;
	};

	return (
		<>
			<header></header>
			<main>
				{/* Banner */}
				<div className="pt-9 pb-9">
					<div className="p-10 w-1440 h-302.093 bg-custom-gradient">
						<h1 className="text-center text-accent font-medium pt-4 text-4xl">
							Meet The Arthas AI Team!
						</h1>
						<p className="text-center text-black font-sm p-4">
							{`We are a vibrant and innovative team of software engineers, 
              				each bringing a unique blend of skills, experiences, and passions 
              				to the table. Our team is composed of individuals with a wide range 
              				of backgrounds and expertise, each contributing to our collective mission 
              				of pushing the boundaries of what's possible in the realm of artificial intelligence.`}
						</p>
					</div>
				</div>
				{/* Team Leads */}
				<div className="pb-9">
					<div className="flex flex-col items-center justify-center p-8">
						{/* Team Leads Grid */}
						<div className="box-border bg-card p-12 rounded-[calc(1.5rem-1.5px)] grid grid-cols-2 gap-12 max-w-6xl pt-10">
							<h1 className="text-center text-3xl font-medium col-span-2">
								Team Leads
							</h1>
							{teamLeads.map((lead: TeamMember) => (
								<Teamcard key={lead.id} {...lead} />
							))}
						</div>
					</div>
				</div>
				{/* Frontend Team */}
				<div className="flex flex-col h-full items-center justify-center p-4">
					<div className="box-border bg-card p-12 rounded-[calc(1.5rem-1.5px)]">
						<h1 className="text-center text-3xl font-medium pb-10">
							Frontend Team
						</h1>
						{/* Frontend Team Grid */}
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 mx-auto max-w-7xl">
							{frontend.map((frontend: TeamMember) => (
								<Teamcard key={frontend.id} {...frontend} />
							))}
						</div>
					</div>
				</div>
				{/* Backend Team */}
				<div className="p-9">
					<div className="flex flex-col h-full items-center justify-center p-4">
						<div className="box-border bg-card p-12 rounded-[calc(1.5rem-1.5px)]">
							<h1 className="text-center text-3xl font-medium pb-10">
								Backend Team
							</h1>
							{/* Backend Team Grid */}
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 mx-auto max-w-7xl border-accent">
								{backend.map((backend: TeamMember) => (
									<Teamcard key={backend.id} {...backend} />
								))}
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default TeamPage;
