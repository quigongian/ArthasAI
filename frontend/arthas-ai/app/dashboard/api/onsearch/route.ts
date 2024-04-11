import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
    // need to make call to jose's backend and transform data to send to wherever user input is being stored
    const searchQuery = req.body; 
    console.log("Received search query:", searchQuery);
   
    
}