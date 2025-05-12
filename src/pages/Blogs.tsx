import matter from "gray-matter";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export interface PostMetadata {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
}

export const Blogs = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<PostMetadata[]>([]);

  const loadBlogPosts = async () => {
    const files = import.meta.glob("../blogs/*.md");
    const loadedPosts: PostMetadata[] = [];
    for (const path in files) {
      const file = (await files[path]()) as { default: string };
      const text = await fetch(file.default).then((res) => res.text());
      const { data } = matter(text) as unknown as { data: PostMetadata }; // gray-matter return unknown type
      loadedPosts.push({
        title: data.title,
        date: data.date,
        slug: data.slug,
        excerpt: data.excerpt,
      });
    }
    // Sort posts by date
    loadedPosts.sort((a, b) => b.date.localeCompare(a.date));
    setPosts(loadedPosts);
  };

  useEffect(() => {
    loadBlogPosts();
  }, []);

  return (
    <div className="prose dark:prose-invert">
      <button
        className="mb-5 ml-4 text-base hover:underline"
        onClick={() => navigate(-1)}
      >
        🡐 Back
      </button>
      <h1 className="mx-5 font-fkDisplay">
        📌 <span className="underline underline-offset-4">Blogs</span>
      </h1>
      <div className="list-none">
        {posts.map((post) => (
          <div key={post.slug} className="mb-5">
            <div className="flex items-center justify-between px-5">
              <Link
                to={`/blogs/${post.slug}`}
                className="no-underline hover:underline"
              >
                {post.title}
              </Link>{" "}
              <span className="text-sm font-light text-gray-500">
                {post.date}
              </span>
            </div>

            <p className="px-5 text-sm italic text-gray-500">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
