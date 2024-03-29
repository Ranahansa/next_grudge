"use server"

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function addGrudge(formData){

    const name = formData.get('grudgeName');

    try{
        if (!name) throw new Error('Name is required');
        await sql`INSERT INTO Grudges (Name) VALUES (${name});`;
        revalidatePath('/'); // revalidate the home page

    }catch(error){
        console.log(error);
        return {status: 500};
    }
    return {status: 200, body: {message: 'Grudge added'}};
}