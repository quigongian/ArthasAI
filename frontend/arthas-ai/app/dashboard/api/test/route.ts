import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const results = [
      {
        Data: {
          Relevant_Sources: [
            {
              Paper_1: {
                Title: "Attention is All You Need",
                Abstract: "This paper is about...",
              },
              Paper_2: {
                Title: "CLIP: Connecting Text and Images",
                Abstract: "This paper is about...",
              },
              Paper_3: {
                Title: "BERT: Pre-training...",
                Abstract: "This paper is about...",
              },
            },
          ],
        },
      },
    ];
  
    const data = results[0].Data.Relevant_Sources[0];
  
    return NextResponse.json({
      message: "This is a GET request",
      data
    });
  }
  