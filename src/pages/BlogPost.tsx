import matter from "gray-matter";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { PostMeta } from "./Blogs";

interface PostEntry {
  content: string;
  data: PostMeta;
}

export const BlogPost = () => {
  const { slug } = useParams();
  const initialEntry: PostEntry = {
    content: "",
    data: {
      title: "",
      date: "",
      slug: "",
    },
  };
  const [post, setPost] = useState<PostEntry>(initialEntry);

  const files = import.meta.glob("../blogs/*.md");

  const loadEntry = async () => {
    const match = Object.entries(files).find(([path]) =>
      path.includes(`${slug}.md`),
    );

    if (!match) return;

    const file = (await match[1]()) as { default: string };
    const text = await fetch(file.default).then((r) => r.text());
    const { content, data } = matter(text) as unknown as PostEntry;
    setPost({ content, data });
  };

  useEffect(() => {
    loadEntry();
  }, [slug]);

  if (!post.content)
    return <span className="loading loading-ring loading-lg"></span>;

  return (
    <div className="prose mx-auto dark:prose-invert">
      <h1>{post.data.title}</h1>
      <p className="text-sm text-gray-500">{post.data.date}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
};
