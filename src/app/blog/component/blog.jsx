"use client";
const Post = (props) => {
  const {
    content: { title },
  } = props;

  return (
    <section className="post--container">
      <h3>{title}</h3>
    </section>
  );
};

export default Post;
