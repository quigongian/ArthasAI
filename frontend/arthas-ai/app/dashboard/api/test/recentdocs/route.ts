import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/app/utils/supabase/server";


export async function GET(){
    // define a return type
    // fetch from supabase to get the whole document table (document_id, document_title, last_modified, created_At)
    const supabase = createClient();
    try {
      // Fetch recently viewed documents from the Supabase table
      const { data: documents, error } = await supabase
        .from('document')
        .select('*')
        .order('last_modified', { ascending: false }) // Order by last modified date, descending
  
      if (error) {
        throw error;
      }
  
      // Return the fetched documents
      return NextResponse.json({
        message: "Successfully fetched recently viewed documents",
        data: documents
      });
    } catch (error) {
      // Handle any errors
      return NextResponse.error();
    }
}
