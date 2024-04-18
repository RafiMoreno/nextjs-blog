import { Blog } from "../app/interfaces";

type Props = {
  data: Blog;
};

export default function BlogItems({ data }: Props){
    return(
        <div className="flex flex-col p-4 border-solid border-2 rounded-xl border-black max-h-32">
            <p className="text-2xl font-bold">{data.title}</p>
            <p className="text-sm text-gray-400 font-semibold">{data.publication_date}</p>
            <p className="max-h-6 text-ellipsis overflow-hidden">{data.content}</p>
        </div>
    )
}