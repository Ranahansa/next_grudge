import {sql} from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(_req) {
    try{
        const result = await sql`CREATE TABLE Grudges (NAME varchar(255));`;
        return NextResponse.json({result}, {status: 200});
    }catch{
        return NextResponse.json({result: "Error"}, {status: 500});
    }
    
}