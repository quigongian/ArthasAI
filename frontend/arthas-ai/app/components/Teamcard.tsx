"use client";
import React from "react";
import { Linkedin, Github } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
} from "@/components/ui/card";

interface TeamCardProps {
    image: string;
    name: string;
    role: string;
    github: string;
    linkedin: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
    image,
    name,
    role,
    github,
    linkedin,
}) => {
    // split the name by the newline character to handle line breaks
    const nameParts = name.split('\n');

    return (
        <Card
            className="flex flex-col justify-between border-card bg-custom-gradient rounded-lg shadow-lg overflow-hidden"
            style={{ width: "205px", height: "335.69px" }}>
            <img
                src={image}
                alt={name}
                className="w-49 h-48 object-cover rounded-t-lg"
                style={{ maxHeight: "250px" }}
            />
            <CardContent className="p-4 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-black">
                    <div>
                        {nameParts.map((part, index) => (
                            <span key={index} className="text-lg font-semibold mb-1">
                                {part}
                                <br />
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center space-x-2">
                        <a target="_blank" href={github} className="w-8 h-8">
                            <Github />
                        </a>
                        <a
                            target="_blank"
                            href={linkedin}
                            aria-label="LinkedIn"
                            className="w-8 h-8">
                            <Linkedin />
                        </a>
                    </div>
                </div>
                <CardDescription className="text-sm mb-2 pt-2 text-gray-600">{role}</CardDescription>
            </CardContent>
        </Card>
    );
};

export default TeamCard;
