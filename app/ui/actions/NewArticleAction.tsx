"use server";

import fs from "node:fs/promises";
import path from "path";
export async function NewArticleAction(prevState : {
  prevState: {
    state : string;
  }
}, formData : FormData ) : Promise<{ status: string }>{
  const file = formData.get("file") as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  let imgPath = path.join(`/uploads/`, file.name);
  // console.log(buffer, imgPath);
  try {
    await fs.writeFile(`./public/uploads/${file.name}`, buffer);
  } catch (err) {
    console.error(`Error writing file: ${err}`);
    return {
      status: "400",
    };
  }
  const data = {
    image: imgPath,
    title: formData.get('title'),
    content: formData.get('content'),
  };
  try {
    const response = await fetch("http://localhost:3000/api/posts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: 'no-store',
      body: JSON.stringify(data),
    });
    const res = await response.json();
    if (response.status !== 200) throw new Error("Invalid login response");
    return {
      status: "200",
    };
  } catch (err) {
    return {
      status: "400",
    };
  }
}
