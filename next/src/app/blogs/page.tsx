import { BackButton } from "@/components/snippets/BackButton";
import { getAllPostsList } from "@/lib/posts";
import Link from "next/link";

// this page will be rendering as a static page on server
export default function Blogs() {
  const posts = getAllPostsList();

  return (
    <div className="p-5">
      <BackButton to="/" label="Home" />
      <h1 className="font-fkDisplay mx-5 mb-5 text-5xl font-bold max-md:text-4xl">
        📌 <span className="underline underline-offset-4">Blogs</span>
      </h1>
      <div className="list-none">
        {posts.map((post) => (
          <div key={post.slug} className="py-5">
            <div className="mb-3 flex items-center justify-between px-5">
              <Link
                href={`/blogs/${post.slug}`}
                className="max-w-[800px] truncate text-lg font-medium no-underline hover:underline max-lg:max-w-[600px] max-md:max-w-[400px] max-sm:max-w-52"
              >
                {post.title}
              </Link>
              <span className="text-sm font-light text-gray-500">
                {post.date}
              </span>
            </div>
            <p className="px-5 text-sm text-gray-500 italic">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
