import Link from "next/link";
import { fetchBlogs } from "@/lib/blog";
import Blog from "./component/blog";
const BlogPage = () => {
  const blogs = fetchBlogs();
  return (
    <>
      <Link href="/">Back to Home</Link>
      {blogs && blogs.map((blog, idx) => <Blog content={blog} key={idx} />)}
    </>
  );
};

export { BlogPage as default };
