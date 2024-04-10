import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const results = [
      {
        Data: {
          Relevant_Sources: [
            
              {
                Title: "Attention is All You Need",
                Abstract: "This paper is about...",
              },
              {
                Title: "CLIP: Connecting Text and Images",
                Abstract: "This paper is about...",
              },
              {
                Title: "BERT: Pre-training...",
                Abstract: "This paper is about...",
              },
            
          ],
        },
      },
    ];
  
    const data = results[0].Data.Relevant_Sources;
  
    return NextResponse.json({
      message: "This is a GET request",
      data
    });
  }
  