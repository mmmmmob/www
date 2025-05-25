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
  draft?: boolean;
}

export interface Post {
  meta: PostMetadata;
  content: string;
}

/**
 * Retrieves all post slugs from the posts directory. To be using as all possible slugs at build time with generateStaticParams()
 *
 * This function scans the posts directory for Markdown files,
 * extracts their filenames (without the `.md` extension), and
 * returns an array of slugs corresponding to each post.
 *
 * @returns An array of strings, each representing a post slug.
 */
export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

/**
 * Retrieves a list of all post metadata for SSG injection after HTML generated at build, sorted by date in descending order.
 *
 * This function reads all Markdown files in the posts directory, extracts their frontmatter metadata,
 * and returns an array of {@link PostMetadata} objects. The returned list is sorted so that the most
 * recent posts appear first.
 *
 * @returns An array of {@link PostMetadata} objects representing all posts.
 */
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
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Retrieves a post by its slug.
 *
 * @param slug - The unique identifier (slug) of the post to retrieve.
 * @returns A Promise that resolves to the {@link Post} object if found, or `null` if the post does not exist.
 */
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
