"use client";
import React from "react";
import Pagetab from "./Pagetab";
import { Search} from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface SearchResultsProps {
  titles: string[]; // to map through titles 
  abstracts: string[];
}


const SearchResults:React.FC<SearchResultsProps> = ({ titles, abstracts }) => {
	return (
		<div>
			{/* <Pagetab/> */}

			{/*Header*/}
			<div>
				{/* Search Bar */}
				<div className="flex justify-center w-full items-center bg-background pt-8">
					<form className="bg-background w-full max-w-4xl p-2">
						<div className="relative">
							<Search className="absolute left-3.5 top-2.5 h-4 w-4 text-black" />
							<Input
								type="search"
								placeholder="What is AI?"
								className="pl-10 pr-4 py-3 rounded-lg w-full border border-black"
							/>
						</div>
					</form>
				</div>

				{/* List of results */}
			</div>
			<div className="flex w-full justify-center pt-8 pb-10 bg-background">
				<div className="w-full max-w-4xl p-2 rounded-lg border bg-background">
					<div className="divide-y divide-gray-200">
						{titles.map((t, index) => (
							<div key={index} className="pt-2 pb-2 pl-4">
								<h3 className="text-xl font-medium text-foreground">
									{t}
								</h3>
								<p className="text-foreground mt-1">{abstracts[index]}</p>
								<div className="flex mt-3">
									<Link href="/document/4df63cc6-1918-45d0-a7df-aac5a62a54bc">
										<button className="px-8 py-0 mr-8 text-foreground bg-card rounded-lg">
											Edit
										</button>
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchResults;
