"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";

export default function Create() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const date = new Date();
  let currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} WIB`;
  const updateBlogList = async () => {
    const response = await fetch("/api/blogApi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        publication_date: currentDate,
        content: content,
      }),
    });
    router.push("/blogs");
  };
  return (
    <div className="flex flex-col p-2">
      <Link href="/blogs" className="flex flex-row items-center">
        <button className="bg-black text-white font-black px-5 py-2 rounded-full mb-6">
          &lt;
        </button>
        <p className="font-bold pl-1 py-2 rounded-full mb-6">Return to Blogs</p>
      </Link>
      <h1 className="text-3xl font-bold">Create New Blog</h1>
      <div className="flex flex-col">
        <label className="font-semibold">Title</label>
        <input
          type="text"
          className="border-2 border-black w-1/2 rounded-lg p-1 max-lg:w-full"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold">Content</label>
        <textarea
          className="border-2 border-black w-2/3 rounded-lg p-1 resize-none h-96 max-lg:w-full"
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button
        onClick={updateBlogList}
        className="bg-black text-white font-bold px-5 py-2 mt-4 rounded-lg w-1/12 max-sm:w-1/4 max-lg:w-1/6"
      >
        Post
      </button>
    </div>
  );
}
