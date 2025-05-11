import matter from "gray-matter";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

export const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState({ content: "", data: {} as any });

  useEffect(() => {
    const files = import.meta.glob("../posts/*.md");

    const loadPost = async () => {
      const match = Object.entries(files).find(([path]) =>
        path.includes(`${slug}.md`),
      );

      if (!match) return;

      const file: any = await match[1](); // load module
      const text = await fetch(file.default).then((r) => r.text());
      const { content, data } = matter(text);
      setPost({ content, data });
    };

    loadPost();
  }, [slug]);

  if (!post.content) return <p>Loading...</p>;

  return (
    <div className="prose mx-auto dark:prose-invert">
      <h1>{post.data.title}</h1>
      <p className="text-sm text-gray-500">{post.data.date}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
};
