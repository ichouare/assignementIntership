import { query } from "@/db/index";
import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs/promises";

export async function GET(req: Request) {
  type Result = {
    // Your database type here
    id: number;
    title: string;
    content: string;
    create_at: Date;
  };
  try{
      const { rows } = await query("SELECT * FROM Articles ORDER BY create_at  ");

      
      
      const res = JSON.stringify({ message: rows });
      return new Response(res, { status: 200 });
  }catch(err : any | undefined){
    return new Response(`Error: ${err?.message}`, { status: 400 });
  }
}

export async function POST(req: NextRequest) {
try{
    // const formData = await req.formData()
    console.log("Posts create operation started");
    const res = await req.json();
    // console.log(req);
    console.log(res);
    const img = res?.image;
    const title = res?.title;
    const content = res?.content;
    console.log("image", img, "title", title, content); 
    const Query = "INSERT INTO Articles (img, title, content) VALUES ($1, $2, $3);"
    //make query to insert new articles
    const response =  await query(Query, [img, title, content])
    console.log("response",response)
    return new Response('Success!', { status: 201 });
}catch (err : any) {
    return new Response(`Error: ${err?.message}`, { status: 500 });
}
}


// export async function PUT(req:NextRequest)
// {
//     try{
//         const res = await req.json();
//         // console.log(res);
//         const id = res?.id;
//         const title = res?.title;
//         const content = res?.content;
//         console.log(title, content, id);
//         const Query = "UPDATE Articles SET title = $2, content = $3 WHERE id = $1";
//         await query(Query, [id, title, content])
//         return new Response('update Success!', { status: 201 });
//     }catch (err : any) {
//         return new Response(`Error: ${err?.message}`, { status: 500 });
//     }
// }

// export async function DELETE(req:NextRequest)
// {
//     try{
//         const res = await req.json();
//         console.log(res);
//         const id = res?.id;
//         const Query = "DELETE  FROM Articles  WHERE id = $1";
//         await query(Query, [id])
//         return new Response('DELETE  Success!', { status: 200 });
//     }catch (err : any) {
//         return new Response(`Error: ${err?.message}`, { status: 500 });
//     }
// }

// console.log(title, content)
//   const dd = await query(
    //     "INSERT INTO Articles (title, content) VALUES ($1, $2)",
    //     [title, content],
    //     (err, result) => {
        //       console.log("res=> ", result);
        //       if (result.rowCount) {
            //         return new Response("Success!", {
//           status: 200,
//         });
//       } else if (err) {
    //         console.log(err);
    //         return new Response(`Webhook error: ${err.message}`, {
        //           status: 400,
        //         });
        //       } else {
            //         console.log("CCCCCCCCCCCC");
            //       }
            //     }
            //   );
            // console.log("dd => ", dd)