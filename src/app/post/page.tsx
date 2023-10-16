import Link from "next/link";
import { fetchBlogs } from "@/lib/posts";
const Post = () => {

  const blogs = fetchBlogs();
  return (
    <>
      Hello from Post
      <Link href="/">Back to Home</Link>
    </>
  );
};

export { Post as default };
