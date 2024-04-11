
import { createClient } from '@/app/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {

    const supabase = createClient();

    const documentData = req.body;

    try {
        const { data, error } = await supabase
            .from('document')
            .insert([documentData]); 

        if (error) {
            throw error;
        }

        // Return success response
        return NextResponse.json({
            message: "Successfully added a new document",
            data: data 
        });
    } catch (error) {
        return NextResponse.error();
        
    }
}


