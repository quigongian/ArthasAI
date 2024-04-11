
import { createClient } from '@/app/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
    const supabase = createClient();

    // parse the document data
    const documentData = req.json();
    // transform the contents of the document into the format that the database expects
    const {data, error} = await supabase.from("document").insert({
        collection_id: uuidv4(),
        created_at: new Date().toISOString(),
        document_title: "Document 1",
        id: uuidv4(),
        owner: uuidv4(),
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


