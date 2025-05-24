import { BackButton } from "@/components/snippets/BackButton";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

// this page will be rendering as a static page on server
// generate all possible static params after called read filename function in lib
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// generate SEO metadata for each slug (from url path) and inject into static page
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.excerpt,
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt,
      images: [
        {
          url: `https://theppitak.me/api/og?title=${post.meta.title}`,
          alt: post.meta.title,
        },
      ],
      type: "article",
      url: `https://theppitak.me/blogs/${post.meta.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.excerpt,
      images: [`https://theppitak.me/api/og?title=${post.meta.title}`],
    },
  };
}

export default async function BlogPost(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();
  return (
    <>
      <div className="p-5">
        <BackButton />
        <div className="prose dark:prose-invert p-5">
          {!post && (
            <div className="flex items-center justify-center">
              <div className="loading loading-ring loading-xl"></div>
            </div>
          )}
          <h1 className="break-words max-md:max-w-[1000px] max-sm:max-w-96 max-sm:text-2xl">
            {post.meta.title}
          </h1>
          <p className="text-sm text-gray-500">{post.meta.date}</p>
          <article>
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>
        </div>
      </div>
    </>
  );
}
