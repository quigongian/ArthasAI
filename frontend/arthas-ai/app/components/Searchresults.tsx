"use client";
import React, { useState } from "react";
import { Search} from "lucide-react";
import { Input } from "@/components/ui/input";
import ResultsCard from './ResultsCard';
import { useQuery } from "@tanstack/react-query";


interface SearchResultItem {
	Title: string;
	Abstract: string;
  }

interface Result {
	title: string;
	abstract: string;
  }

const SearchResults = () => {
	const [searchSubmitted, setSearchSubmitted] = useState(false);
	const fetcher = useQuery({
		queryKey: [`/dashboard/api/test/results`],
		queryFn: async () => {
			const response = await fetch(`/dashboard/api/test/results`);
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
		return <div>Loading...</div>; 
	}

	if (isError) {
		return <div>Error loading data</div>; 
	}

	console.log(data); // check if response is shaped the way we want

	// create an array of object results
	const results = data?.data.map((item: SearchResultItem) => ({
		title: item.Title,
		abstract: item.Abstract,
	  })) 
	return (
		<div>
		{/* Search Bar */}
		<div className="flex justify-center w-full items-center bg-background pt-8">
			<form className="bg-background w-full max-w-4xl p-2">
			<div className="relative">
				<Search className="absolute left-3.5 top-2.5 h-4 w-4 text-black" />
				<Input
				type="search"
				placeholder="Search for more papers.."
				className="pl-10 pr-4 py-3 rounded-lg w-full border border-black"
				/>
			</div>
			</form>
		</div>

		{/* List of results */}
		<div className="flex w-full justify-center pt-8 pb-10 bg-background">
			<div className="w-full max-w-4xl p-2 rounded-lg border bg-background">
			<div className="divide-y divide-gray-200">
				{results.map((result: Result, index: number) => (
				<ResultsCard
					key={index}
					title={result.title}
					abstract={result.abstract}
				/>
				))}
			</div>
			</div>
		</div>
		</div>
	);
};

export default SearchResults;
