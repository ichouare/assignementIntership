"use server";

import fs from "node:fs/promises";
import path from "path";

export async function editArticleAction(prevState : {
  prevState: {
    state : string;
  }
}, formData : FormData) : Promise<{ status: string }> {


  // console.log(formData)


const id : FormDataEntryValue | null = formData?.get("id")
  const data = {
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
