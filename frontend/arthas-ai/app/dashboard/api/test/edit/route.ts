
import { createClient } from '@/app/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
    const supabase = createClient();

    // parse the document data
    const documentData = req.json();

    // get userid and other custom values 
    const userid = req.nextUrl.searchParams.get("userid")
    const collectionid = req.nextUrl.searchParams.get("collection_id")
    const documentTitle = req.nextUrl.searchParams.get("documentTitle")
    

    // transform the contents of the document into the format that the database expects
    const {data, error} = await supabase.from("document").insert({
        collection_id: collectionid,
        created_at: new Date().toISOString(),
        document_title: documentTitle,
        id: uuidv4(),
        owner: userid,
        last_modified: new Date().toISOString(),
    });

    if(error){
        return NextResponse.json({
            message: "Failed to add document",
            error: error,
        });
    }

    // return success response
    return NextResponse.json(
        {
            message: "Sucessfully added a new document",
            data: data,
        },
        {status: 200}
    );
  
    
}


