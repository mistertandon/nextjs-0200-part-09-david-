import fs from "fs";
import path from "path";
const fetchBlogs = () => {
  const blogDirectory = path.join(process.cwd(), "blogposts");
  const blogsList = fs.readdirSync(blogDirectory);
  console.log("blogsList", blogsList);
};

export { fetchBlogs };
