import { Blog } from "./components";
import { fetchBlogs, fetchBlogById } from "@/lib/blog";
type BlogParams = {
  params: {
    blogId: string;
  };
};
const revalidate = 5;
const BlogPage = async ({ params: { blogId } }: BlogParams) => {
  const blog = await fetchBlogById(blogId);

  return (
    <>
      <Blog content={blog} />
    </>
  );
};

const generateStaticParams = async () => {
  const blogs = await fetchBlogs();

  return blogs.map(({ id }) => ({
    blogId: id.toString(),
  }));
};

export { BlogPage as default, generateStaticParams, revalidate };
