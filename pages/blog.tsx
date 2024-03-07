import Link from "next/link";
import styles from "../styles/Blog.module.scss";
import { blogs } from "../data/blog";

const Blog = () => {
  return (
    <div className={styles.blog}>
      {blogs.map((blog) => (
        <div key={blog.id} className={styles.blog__item}>
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className={styles.blog__image}
          />
          <h2 className={styles.blog__title}>{blog.title}</h2>
          <p className={styles.blog__description}>{blog.description}</p>
          <Link href={`/blog/${blog.id}`} className={`${styles.primaryButton} ${styles.blog__link}`}>
            Devamını Oku
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
