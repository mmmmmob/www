import matter from "gray-matter";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface PostMeta {
  title: string;
  date: string;
  slug: string;
}

export const Blogs = () => {
  const [posts, setPosts] = useState<PostMeta[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const files = import.meta.glob("../posts/*.md");
      const loadedPosts: PostMeta[] = [];

      for (const path in files) {
        const file: any = await files[path]();
        const text = await fetch(file.default).then((res) => res.text());
        const { data } = matter(text);
        loadedPosts.push({
          title: data.title,
          date: data.date,
          slug: data.slug,
        });
      }

      loadedPosts.sort((a, b) => b.date.localeCompare(a.date));
      setPosts(loadedPosts);
    };

    loadPosts();
  }, []);

  return (
    <div className="prose mx-auto dark:prose-invert">
      <h1>📝 Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to={`/blogs/${post.slug}`}
              className="no-underline hover:underline"
            >
              {post.title}
            </Link>{" "}
            <span className="text-sm text-gray-500">({post.date})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
