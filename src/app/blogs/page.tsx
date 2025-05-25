import { BackButton } from "@/components/snippets/BackButton";
import { getAllPostsList } from "@/lib/posts";
import Link from "next/link";

// this page will be rendering as a static page on server
export default function Blogs() {
  const posts = getAllPostsList();

  const emptyPost = posts.length === 0;

  return (
    <div className="w-full p-5">
      <BackButton to="/" label="Home" />
      <h1 className="font-fkDisplay mx-5 my-5 text-5xl font-bold max-md:text-4xl">
        📌 <span className="underline underline-offset-4">Blogs</span>
      </h1>
      {emptyPost ? (
        <div className="flex h-96 items-center justify-center max-sm:p-10">
          <h1 className="font-mono text-3xl">
            Please wait, first entry is being added.
          </h1>
        </div>
      ) : (
        <div className="list-none">
          {posts.map((post) => (
            <Link
              href={`/blogs/${post.slug}`}
              key={post.slug}
              className="mx-10 py-5"
            >
              <div className="mb-2 flex items-center justify-between px-5">
                <p className="max-w-[800px] truncate text-lg font-medium no-underline hover:underline max-lg:max-w-[600px] max-md:max-w-[400px] max-sm:max-w-52">
                  {post.title}
                </p>
                <span className="text-sm font-light text-gray-500">
                  {post.date}
                </span>
              </div>
              <p className="mb-4 px-5 text-sm text-gray-500 italic">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
