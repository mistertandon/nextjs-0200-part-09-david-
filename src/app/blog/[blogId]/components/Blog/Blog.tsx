type BlogParams = {
  content: { id: string; title: string };
};

const Blog = (props: BlogParams) => {
  const {
    content: { id, title },
  } = props;
  return (
    <>
      {id}
      {title}
    </>
  );
};

export default Blog;
