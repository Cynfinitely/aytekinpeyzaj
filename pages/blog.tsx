import Link from "next/link";
import { blogs } from "../data/blog";

const Blog = () => {
  return (
    <div className="grid grid-cols-1 gap-20 p-6 md:grid-cols-3 md:auto-cols-fr">
      {blogs.map((blog) => (
        <div key={blog.id} className="flex flex-col items-center justify-center">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-auto rounded-lg"
          />
          <h2 className="my-2">{blog.title}</h2>
          <p className="my-2 flex-1">{blog.description}</p>
          <Link href={`/blog/${blog.id}`} className="mt-12">
            Devamını Oku
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;