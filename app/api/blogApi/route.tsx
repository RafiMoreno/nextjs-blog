import { promises as fs } from "fs";

export async function POST(req: Request) {
  const jsonData = await fs.readFile(process.cwd() + "/app/blogs.json", "utf8");
  const objectData = JSON.parse(jsonData);
  const body = await req.json();
  console.log(body);
  objectData.push(body);
  const updatedData = JSON.stringify(objectData);
  await fs.writeFile(process.cwd() + "/app/blogs.json", updatedData);

  return new Response("OK");
}
