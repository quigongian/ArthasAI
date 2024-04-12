import { NextRequest, NextResponse } from "next/server";

import axios from "axios";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const title = searchParams.get("title");
  const abstract = searchParams.get("abstract");
  const userid = searchParams.get("userid");
  const documentid = searchParams.get("documentid");
  const searchQuery = searchParams.get("search");  // Getting the search query from the URL

  let result = null;

  await axios({
    method: "GET",
    params: { query: searchQuery },
    headers: {},
    url: "http://localhost:8000/search",  
  })
    .then((res) => {
      result = res.data;
    })
    .catch((err) => {
      return NextResponse.json({ error: err });
    });

  return NextResponse.json({ userid, documentid, result, title, abstract });
}

// working with mock data
// export async function GET() {
//     const results = [
//       {
//         Data: {
//           Relevant_Sources: [
            
//               {
//                 Title: "Attention is All You Need",
//                 Abstract: "This paper is about...",
//               },
//               {
//                 Title: "CLIP: Connecting Text and Images",
//                 Abstract: "This paper is about...",
//               },
//               {
//                 Title: "BERT: Pre-training...",
//                 Abstract: "This paper is about...",
//               },
            
//           ],
//         },
//       },
//     ];
  
//     const data = results[0].Data.Relevant_Sources;
  
//     return NextResponse.json({
//       message: "This is a GET request",
//       data
//     });
//   }