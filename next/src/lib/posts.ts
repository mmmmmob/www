import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "/src/posts");

export interface PostMetadata {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  image?: string;
}

export interface Post {
  meta: PostMetadata;
  content: string;
}

export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPostsList(): PostMetadata[] {
  const slugs = getAllPostSlugs();

  return slugs
    .map((slug) => {
      const filePath = path.join(postsDirectory, `${slug}.md`);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      return {
        ...(data as PostMetadata),
        slug,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    meta: {
      ...(data as PostMetadata),
      slug,
    },
    content,
  };
}
