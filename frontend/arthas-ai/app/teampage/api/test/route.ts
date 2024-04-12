import { NextRequest, NextResponse } from "next/server";
 
export async function GET() {

    const teamLeads = [
        {
            id: "1",
            image: "headshots/Giancarlo-Padron.jpeg",
            name: "Giancarlo Padron",
            role: "Team Lead",       
            github: "https://github.com/quigongian",
            linkedin: "https://www.linkedin.com/in/giancarlopadron/"
        },
        {
            id: "2",
            image: "headshots/Jose-Pujol.jpg",
            name: "Jose Pujol",
            role: "Team Lead",
            github: "https://github.com/Jose-Codes",
            linkedin: "https://www.linkedin.com/in/josepujol/"
        }
    ]
    const frontend = [
        {
            id: "3",
            image: "headshots/Richard-Brito.png",
            name: "Richard Brito",
            role: "Frontend Developer",
            github: "https://github.com/richardbrrito",
            linkedin: "https://www.linkedin.com/in/richardbrrito/"
        },
        {
            id: "4",
            image: "headshots/Vincent-Carrancho.jpeg",
            name: "Vincent Carrancho",
            role: "Frontend Developer",
            github: "https://github.com/VincentCarrancho",
            linkedin: "https://www.linkedin.com/in/vincentcarrancho/"
        },
        {
            id: "5",
            image: "headshots/Laura-Davalos.jpg",
            name: "Laura Davalos",
            role: "Frontend Developer",
            github: "https://github.com/lauradavalos01",
            linkedin: "https://www.linkedin.com/in/laura-davalos-98056415b/"
        },
        {
            id: "6",
            image: "headshots/Alberto-Guerra.jpg",
            name: "Alberto Guerra",
            role: "Frontend Developer",
            github: "https://github.com/Ezriel1",
            linkedin: "https://www.linkedin.com/in/albertomguerra/"
        },
        {
            id: "7",
            image: "headshots/Alisha-Jafry.jpg",
            name: "Alisha Jafry",
            role: "Frontend Developer",
            github: "https://github.com/alishuhh",
            linkedin: "https://www.linkedin.com/in/alishajafry/"
        },
        {
            id: "8",
            image: "headshots/David-Moreno.jpg",
            name: "David Moreno",
            role: "Frontend Developer",
            github: "https://github.com/dmoreno0716",
            linkedin: "https://www.linkedin.com/in/dmor/"
        },
        {
            id: "9",
            image: "headshots/Erick-Rivera.jpg",
            name: "Erick Rivera",
            role: "Frontend Developer",
            github: "https://github.com/erk-riv",
            linkedin: "https://www.linkedin.com/in/erick-riv/"
        },
        {
            id: "10",
            image: "headshots/Valentina-Rojas.jpeg",
            name: "Valentina Rojas",
            role: "Frontend Developer",
            github: "https://github.com/valentinaarojas",
            linkedin: "https://www.linkedin.com/in/valentina-rojas-387b0b224/"
        },
        {
            id: "11",
            image: "headshots/Melvin-Santos.jpeg",
            name: "Melvin Santos",
            role: "Frontend Developer",
            github: "https://github.com/melbTech",
            linkedin: "https://www.linkedin.com/in/melvin-santos99/"
        },
        {
            id: "12",
            image: "headshots/Gabriela-Sebastian.jpg",
            name: "Gabriela Sebastian",
            role: "Frontend Developer",
            github: "http://github.com/gabsebas",
            linkedin: "https://linkedin.com/in/gabriela-sebastian-"
        }
    ]
    const backend = [
        {
            id: "13",
            image: "headshots/Joseph-Gabrie.jpg",
            name: "Joseph Gabrie",
            role: "Backend Developer",
            github: "https://github.com/JosephGabrie",
            linkedin: "https://www.linkedin.com/in/jgabrie007/"
        },
        {
            id: "14",
            image: "headshots/Gabriel-Hubner.jpeg",
            name: "Gabriel Hübner",
            role: "Backend Developer",
            github: "https://github.com/ghubnerr",
            linkedin: "https://www.linkedin.com/in/gabriel-lucchesi/"
        },
        {
            id: "15",
            image: "headshots/Joas-Kish.jpg",
            name: "Joas Kish",
            role: "Backend Developer",
            github: "https://github.com/Kishimita",
            linkedin: ""
        },
        {
            id: "16",
            image: "headshots/Jacob-Schuster.jpeg",
            name: "Jacob Schuster",
            role: "Backend Developer",
            github: "https://github.com/Jacob8765",
            linkedin: "https://www.linkedin.com/in/jacob-schuster-396947211/"
        },
        {
            id: "17",
            image: "headshots/David-Ulloa.jpeg",
            name: "David\nUlloa",
            role: "Backend Developer",
            github: "https://github.com/DavidUlloa6310",
            linkedin: "https://www.linkedin.com/in/david-a-ulloa/"
        }
    ]
    
    return NextResponse.json({
        message: "This is a GET request",
        data: {teamLeads: teamLeads, frontend: frontend, backend: backend},
      });
}