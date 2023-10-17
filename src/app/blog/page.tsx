import Link from "next/link";
import { fetchBlogs } from "@/lib/blog";
const revalidate = 5;
const MasterBlogPage = async () => {
  const blogs = await fetchBlogs();
  return (
    <>
      <Link href="/">Back to Home</Link>
      {blogs &&
        blogs.map(({ id, title }, idx) => (
          <div key={idx}>
            <Link prefetch={false} href={`/blog/${id}`}>
              {title}
            </Link>
          </div>
        ))}
    </>
  );
};

export { MasterBlogPage as default, revalidate };
