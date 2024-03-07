import { useRouter } from "next/router";
import { blogs } from "../../data/blog";
import styles from "../../styles/BlogDetail.module.scss";

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    return <p>No blog found</p>;
  }

  return (
    <div className={styles.blog}>

      <h2 className={styles.blog__title}>{blog.title}</h2>
      <img
        src={blog.imageUrl}
        alt={blog.title}
        className={styles.blog__image}
      />
      <p className={styles.blog__description}>{blog.description}</p>

    </div>
  );
};

export default BlogPost;
