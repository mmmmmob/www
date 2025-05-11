import matter from "gray-matter";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface PostMetadata {
  title: string;
  date: string;
  slug: string;
}

export const Blogs = () => {
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
