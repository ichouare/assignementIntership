import { query } from "@/db/index";
import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs/promises";


export async function GET(req: Request
    , { params }: { params: Promise<{ id: string }> }
)
{
    console.log("GET method started");
    const {id} = (await params)
    const  Query = "SELECT * FROM Articles WHERE id = $1";
    const {rows} =  await query(Query, [id])
    return  new Response(JSON.stringify({ message: rows }), { status: 200});
}


export async function DELETE(
req: Request,
    { params }: { params: Promise<{ id: string }> }
  )
{
    try{
        const {id} = (await params)
        const Query = "DELETE  FROM Articles  WHERE id = $1";
        await query(Query, [id])
        return new Response('DELETE  Success!', { status: 200 });
    }catch (err : any) {
        return new Response(`Error: ${err?.message}`, { status: 500 });
    }
}



export async function PUT(req:NextRequest, 
    { params }: { params: Promise<{ id: string }> }
)
{
    try{
        const {id} = (await params)
        const res = await req.json();
        // console.log(res);
        // const id = res?.id;
        const image = res?.image;
        const title = res?.title;
        const content = res?.content;
        let Query = "SELECT * FROM Articles WHERE id = $1";
        const check_if_exist = await query(Query, [id])
        if(!check_if_exist.rows.length) {
            return new Response(`this element is not exist`, { status: 400 });
        }
        // console.log("------>", check_if_exist);
        try {

            Query = "UPDATE Articles SET img = $2, title = $3, content = $4 WHERE id = $1";
            const res = await query(Query, [id, image, title, content])
            console.log(res)
        } catch (err) {
            console.log("ERR=> ", err)
        }
        return new Response('update Success!', { status: 201 });
    }catch (err : any) {
        return new Response(`Error: ${err?.message}`, { status: 500 });
    }
}