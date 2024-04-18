'use client'

import React from "react";
import { Icon } from '@iconify/react';
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <Icon icon="mdi:blog-outline" width="128" height="128"></Icon>
      <h1 className="font-bold text-xl">Welcome to the Blogs App</h1>
      <h2 className="font-semibold text-md">Created using Next JS</h2>
      <Link href="/blogs"><button className="bg-black text-white font-bold px-5 py-2 mt-4 rounded-lg">See All Blogs</button></Link>
    </div>
  );
}
