"use server";

import fs from "node:fs/promises";
import path from "path";

export async function editArticleAction(prevState : {
  prevState: {
    state : string;
  }
}, formData : FormData) : Promise<{ status: string }> {


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

const id : FormDataEntryValue | null = formData?.get("id")
  const data = {
    image: imgPath,
    title: formData.get('title'),
    content: formData.get('content'),
  };
  try {
    const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      cache: 'no-store',
    });
    // const res = await response.json();
    console.log(response.status)
    if (response.status !== 201) throw new Error("Invalid login response");
    return {
      status: "200",
    };
  } catch (err) {
    return {
      status: "400",
    };
  }
}
