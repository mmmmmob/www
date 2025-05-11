import matter from "gray-matter";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";
import { PostMetadata } from "./Blogs";

interface PostEntry {
  content: string;
  data: PostMetadata;
}

export const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const initialEntry: PostEntry = {
    content: "",
    data: {
      title: "",
      date: "",
      slug: "",
      excerpt: "",
    },
  };
  const [post, setPost] = useState<PostEntry>(initialEntry);

  const files = import.meta.glob("../blogs/*.md");

  const loadEntry = async () => {
    const match = Object.entries(files).find(([path]) =>
      path.includes(`${slug}.md`),
    );

    if (!match) {
      navigate("/404", { replace: true });
      return;
    }

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
    <div className="prose p-10 lg:prose-xl dark:prose-invert">
      <h1>{post.data.title}</h1>
      <p className="text-sm text-gray-500">{post.data.date}</p>
      <article>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
};
