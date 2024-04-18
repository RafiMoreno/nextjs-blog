import { promises as fs } from "fs";

export default async function Page({ params }: { params: { id: string } }) {
    const file = await fs.readFile(process.cwd() + "/app/blogs.json", "utf8");
    const data = JSON.parse(file);
    return (
        <div className="flex flex-col p-4">
            <p className="text-5xl font-bold">{data[params.id].title}</p>
            <p className="text-md text-gray-400 font-semibold">{data[params.id].publication_date}</p>
            <p className="mt-7">{data[params.id].content}</p>
        </div>
    )
  }