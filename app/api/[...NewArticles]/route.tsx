import { query } from "@/db/index";
import { NextRequest, NextResponse } from "next/server";



export async function GET(req: Request, { params }: { params: { NewArticles: string[] } }) {
    try{
        const slug  = await params.NewArticles[1]
        console.log("parmas----------->",  slug)
        const { rows } = await query("SELECT * FROM Articles WHERE id <> $1 ORDER BY create_at LIMIT 4 ", [slug]);
      
        const res = JSON.stringify({ message: rows });
        return new Response(res, { status: 200 });
    }catch(err : any | undefined){
      return new Response(`Error: ${err?.message}`, { status: 400 });
    }
  }
  