import { promises as fs } from 'fs';

export default async function Blogs() {
    const file = await fs.readFile(process.cwd() + '/app/blogs.json', 'utf8');
    const data = JSON.parse(file);
    return (
        <div className="flex flex-col items-center h-full w-full">
            <h1 className="font-semibold text-xl">All Blogs</h1>
        </div>
    )
}