import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(_req) {
    try {
        const result = await sql`CREATE TABLE IF NOT EXISTS Grudges (NAME varchar(255));`;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        // Handle specific errors here
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
