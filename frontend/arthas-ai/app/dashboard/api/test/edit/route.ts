import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@/app/utils/supabase/server';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
 

    const supabase = createClient();
   
    const documentData = req.body;

    try {
        const { data, error } = await supabase
            .from('document')
            .insert([documentData]); 

        if (error) {
            return res.status(400).json({ error: error.message });
        }

        // Return success response
        return res.status(200).json({
            message: "Successfully added a new document",
            data: data 
        });
    } catch (error) {
        console.error('error:', error);
        return res.status(500).json({ error: 'Unexpected error occurred' });
    }
}


