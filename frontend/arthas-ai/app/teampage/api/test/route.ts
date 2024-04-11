import { NextRequest, NextResponse } from "next/server";
 
export async function GET() {

    const teamLeads = [
        {
            id: "1",
            image: "https://i.pinimg.com/originals/9c/13/5e/9c135e483264e00b70cfc5329c5e55e2.jpg",
            name: "Giancarlo Padron",
            role: "Team Lead",
            quote: `"I worked on..."`,
            github: "https://github.com/quigongian",
            linkedin: "https://linkedin.com/in/gabriela-sebastian-"
        },
        {
            id: "2",
            image: "https://i.pinimg.com/originals/9c/13/5e/9c135e483264e00b70cfc5329c5e55e2.jpg",
            name: "Jose Pujol",
            role: "Team Lead",
            quote: `"I worked on..."`,
            github: "https://github.com/Jose-Codes",
            linkedin: "https://linkedin.com/in/gabriela-sebastian-"
        }
    ]
    const frontend = [
        {
            id: "3",
            image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
            name: "Richard Brito",
            role: "Frontend Developer",
            quote: `"I worked on..."`,
            github: "https://github.com/richardbrrito",
            linkedin: "https://www.linkedin.com/in/richardbrrito/"
        },
        {
            id: "4",
            image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
            name: "Vincent Carrancho",
            role: "Frontend Developer",
            quote: `"I worked on..."`,
            github: "https://github.com/VincentCarrancho",
            linkedin: "https://www.linkedin.com/in/vincentcarrancho/"
        },
        {
            id: "5",
            image: "headshots/Laura-Davalos.jpg",
            name: "Laura Davalos",
            role: "Frontend Developer",
            quote: `"I worked on..."`,
            github: "https://github.com/lauradavalos01",
            linkedin: "https://www.linkedin.com/in/laura-davalos-98056415b/"
        },
        {
            id: "6",
            image: "headshots/Alberto-Guerra.jpg",
            name: "Alberto Guerra",
            role: "Frontend Developer",
            quote: `"I worked on..."`,
            github: "https://github.com/Ezriel1",
            linkedin: "https://www.linkedin.com/in/albertomguerra/"
        },
        {
            id: "7",
            image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
            name: "Alisha Jafry",
            role: "Frontend Developer",
            quote: `"I worked on..."`,
            github: "https://github.com/alishuhh",
            linkedin: "https://www.linkedin.com/in/alishajafry/"
        },
        {
            id: "8",
            image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
            name: "David Moreno",
            role: "Frontend Developer",
            quote: `"I worked on..."`,
            github: "https://github.com/dmoreno0716",
            linkedin: "https://www.linkedin.com/in/dmor/"
        },
        {
            id: "9",
            image: "headshots/Erick-Rivera.jpg",
            name: "Erick Rivera",
            role: "Frontend Developer",
            quote: `"I worked on..."`,
            github: "https://github.com/erk-riv",
            linkedin: "https://www.linkedin.com/in/erick-riv/"
        },
        {
            id: "10",
            image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
            name: "Valentina Rojas",
            role: "Frontend Developer",
            quote: `"I worked on..."`,
            github: "https://github.com/valentinaarojas",
            linkedin: "https://www.linkedin.com/in/valentina-rojas-387b0b224/"
        },
        {
            id: "11",
            image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
            name: "Melvin Santos",
            role: "Frontend Developer",
            quote: `"I worked on..."`,
            github: "https://github.com/melbTech",
            linkedin: "https://www.linkedin.com/in/melvin-santos99/"
        },
        {
            id: "12",
            image: "headshots/Gabriela-Sebastian.jpg",
            name: "Gabriela Sebastian",
            role: "Frontend Developer",
            quote: `"I worked on..."`,
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
            quote: `"I worked on..."`,
            github: "https://github.com/JosephGabrie",
            linkedin: "https://www.linkedin.com/in/jgabrie007/"
        },
        {
            id: "14",
            image: "https://i.pinimg.com/originals/53/32/4b/53324bca1d5759d9c10c4b99847351ae.jpg",
            name: "Gabriel Hübner",
            role: "Backend Developer",
            quote: `"I worked on..."`,
            github: "https://github.com/ghubnerr",
            linkedin: "https://www.linkedin.com/in/gabriel-lucchesi/"
        },
        {
            id: "15",
            image: "https://i.pinimg.com/originals/53/32/4b/53324bca1d5759d9c10c4b99847351ae.jpg",
            name: "Joas Kish",
            role: "Backend Developer",
            quote: `"I worked on..."`,
            github: "https://github.com/Kishimita",
            linkedin: "https://linkedin.com/in/gabriela-sebastian-"
        },
        {
            id: "16",
            image: "https://i.pinimg.com/originals/53/32/4b/53324bca1d5759d9c10c4b99847351ae.jpg",
            name: "Jacob Schuster",
            role: "Backend Developer",
            quote: `"I worked on..."`,
            github: "https://github.com/Jacob8765",
            linkedin: "https://www.linkedin.com/in/jacob-schuster-396947211/"
        },
        {
            id: "17",
            image: "https://i.pinimg.com/originals/53/32/4b/53324bca1d5759d9c10c4b99847351ae.jpg",
            name: "David Ulloa",
            role: "Backend Developer",
            quote: `"I worked on..."`,
            github: "https://github.com/DavidUlloa6310",
            linkedin: "https://www.linkedin.com/in/david-a-ulloa/"
        }
    ]
    
    return NextResponse.json({
        message: "This is a GET request",
        data: {teamLeads: teamLeads, frontend: frontend, backend: backend},
      });
}