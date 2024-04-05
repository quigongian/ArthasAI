import { BoxIcon } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
    const [isClick, setisClick] = useState(false);

    const toggleNavBar = () => {
        setisClick(!isClick);
    };

    return (
        <>
            <nav className="bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="/" className="text-white">
                                    <BoxIcon></BoxIcon> 
                                    {/**LOGO GOES HERE */}
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:flex flex-grow">
                            <div className="ml-4 flex items-center justify-end space-x-20 flex-grow">
                                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                    Home
                                </a>
                                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                    About
                                </a>
                                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                    Team
                                </a>
                                <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                    TRY ARTHAS AI
                                </a>
                            </div>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                onClick={toggleNavBar}>
                                {isClick ? (
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {isClick && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-x-20 sm:px-3">
                            <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Home
                            </a>
                            <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                About
                            </a>
                            <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Team
                            </a>
                            <a href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                TRY ARTHAS AI
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
=======
import { useAuth } from "../utils/providers/authProvider";
import { createClient } from "../utils/supabase/client";
import { BoxIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
    const { setTheme } = useTheme()
    const auth = useAuth();
    const supabase = createClient();
    const [isNavbarVisible, setIsNavbarVisible] = useState(false); // Start with navbar hidden

    const toggleNavbar = () => {
        setIsNavbarVisible(!isNavbarVisible);
    };

<<<<<<< HEAD
	return (
		<>
			<nav className="bg-white border-2 sticky top-0 z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center">
							<div className="flex-shrink-0">
								<Link href="/" className="text-black">
									<BoxIcon></BoxIcon>
								</Link>
							</div>
						</div>
						<div className="hidden md:flex flex-grow ">
							<div className="ml-4 flex items-center justify-end space-x-20 flex-grow">
								<Link
									href="/"
									className="text-black hover:bg-secondary hover:text-black rounded-lg p-2">
									Home
								</Link>
								<Link
									href="/about"
									className="text-black hover:bg-secondary hover:text-black rounded-lg p-2">
									About Us
								</Link>
								<Link
									href="/teampage"
									className="text-black hover:bg-secondary hover:text-black rounded-lg p-2">
									Our Team
								</Link>
								{auth.user?.email === undefined ? (
									<Link
										href="/document/4df63cc6-1918-45d0-a7df-aac5a62a54bc"
										className="text-black hover:bg-secondary hover:text-black rounded-lg p-2">
										Try Arthas!
									</Link>
								) : (
									<Link
										href="/"
										className="text-black hover:bg-secondary hover:text-black rounded-lg p-2"
										onClick={() => {
											supabase.auth.signOut();
										}}>
										Logout
									</Link>
								)}
							</div>
						</div>
						<div className="md:hidden flex items-center">
							<button
								className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
								onClick={toggleNavBar}>
								{isClick ? (
									<svg
										className="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								) : (
									<svg
										className="h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 6h16M4 12h16m-7 6h7"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>
				{isClick && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-x-20 sm:px-3">
							<Link
								href="/"
								className="text-black hover:bg-secondary hover:text-black rounded-lg p-2">
								Home
							</Link>
							<Link
								href="/about"
								className="text-black hover:bg-secondary hover:text-black rounded-lg p-2">
								About Us
							</Link>
							<Link
								href="/teampage"
								className="text-black hover:bg-secondary hover:text-black rounded-lg p-2">
								Our Team
							</Link>
							<Link
								href="/document/4df63cc6-1918-45d0-a7df-aac5a62a54bc"
								className="text-black hover:bg-secondary hover:text-black rounded-lg p-2">
								Try Arthas!
							</Link>
						</div>
					</div>
				)}
			</nav>
		</>
	);
>>>>>>> development
=======
    return (
        <>
            <nav className={`bg-custom-gradient border-2 sticky top-0 z-50 backdrop-filter backdrop-blur-lg ${isNavbarVisible ? "" : "hidden"}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link href="/" className="text-black">
                                    <BoxIcon></BoxIcon>
                                </Link>
                            </div>
                        </div>
                        <div className="flex-grow flex justify-center">
                        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
                            <div className="ml-4 flex items-center space-x-20">
                                <Link
                                    href="/"
                                    className="text-black hover:bg-secondary hover:text-black rounded-lg p-2">
                                    Home
                                </Link>
                                <Link
                                    href="/about"
                                    className="text-black hover:bg-secondary hover:text-black rounded-lg p-2">
                                    About
                                </Link>
                                <Link
                                    href="/teampage"
                                    className="text-black hover:bg-secondary hover:text-black rounded-lg p-2">
                                    Our Team
                                </Link>
                                {auth.user?.email === undefined ? (
                                    <Link
                                        href="/document/4df63cc6-1918-45d0-a7df-aac5a62a54bc"
                                        className="text-black hover:bg-secondary hover:text-black rounded-lg p-2">
                                        Try Arthas!
                                    </Link>
                                ) : (
                                    <Link
                                        href="/"
                                        className="text-black hover:bg-secondary hover:text-black rounded-lg p-2"
                                        onClick={() => {
                                            supabase.auth.signOut();
                                        }}>
                                        Logout
                                    </Link>
                                )}
                            </div>
                        </div>

						<button>
										
						</button>
                        <div className="flex items-center">
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                onClick={toggleNavbar}>
                                {isNavbarVisible ? (
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Toggle button when navbar is hidden */}
            {!isNavbarVisible && (
                <div className="fixed top-4 left-4 ">
                    <button
                        className="inline-flex items-center justify-center p-2 rounded-md text-black bg-gray-200 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={toggleNavbar}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            )}
        </>
    );
>>>>>>> 5a9b5f17090a92a1a951051e4888e1e2110749df
};

export default Navbar;
