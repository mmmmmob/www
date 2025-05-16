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

  return (
    <div className="p-5">
      <button
        className="mb-5 ml-4 text-base hover:underline"
        onClick={() => navigate(-1)}
      >
        🡐 Back
      </button>
      <div className="prose p-5 dark:prose-invert">
        {!post.content && (
          <div className="flex items-center justify-center">
            <div className="loading loading-ring loading-xl"></div>
          </div>
        )}
        <h1 className="break-words max-md:max-w-[1000px] max-sm:max-w-96 max-sm:text-2xl">
          {post.data.title}
        </h1>
        <p className="text-sm text-gray-500">{post.data.date}</p>
        <article>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
};
