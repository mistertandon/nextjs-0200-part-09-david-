import fs from "fs";
import path from "path";

const fetchBlogs = async () => {
  const blogDirectory = path.join(process.cwd(), "blogposts");
  const blogFiles = fs.readdirSync(blogDirectory);
  const blogFilesData = blogFiles.map((fileName) => {
    const blogFilePath = path.join(blogDirectory, fileName);
    const blogFileData = JSON.parse(fs.readFileSync(blogFilePath, "utf-8"));
    return blogFileData;
  });

  return blogFilesData;
};

const fetchBlogById = async (blogId: any) => {
  const blogs = await fetchBlogs();
  const blog = blogs.find(({ id }) => id == blogId);
  return blog;
};

export { fetchBlogs, fetchBlogById };
