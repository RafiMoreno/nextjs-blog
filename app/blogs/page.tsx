import BlogItems from "@/components/BlogItems";
import { promises as fs } from "fs";

export default async function Blogs() {
  const file = await fs.readFile(process.cwd() + "/app/blogs.json", "utf8");
  const data = JSON.parse(file);
  return (
    <div className="flex flex-col items-center h-full w-full px-4 gap-2">
      <h1 className="font-semibold text-3xl mb-3 mt-2">All Blogs</h1>
      {data.map((blog: any, index: number) => (
        <BlogItems data={data[index]} />
      ))}
    </div>
  );
}
