import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const userid = searchParams.get("userid");
  const documentid = searchParams.get("documentid");

  let result = null;

  await axios({
    method: "GET",
    params: {},
    headers: {},
    url: "",
  })
    .then((res) => {
      result = res.data;
    })
    .catch((err) => {
      return NextResponse.json({ error: err });
    });

  return NextResponse.json({ userid, documentid, result });
}
