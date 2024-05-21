import { useRouter } from "next/router";
import { blogs } from "../../data/blog";

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    return <p>No blog found</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
      <img
        src={blog.imageUrl}
        alt={blog.title}
        className="w-full h-auto rounded-lg"
      />
      <div
        className="mt-4"
        dangerouslySetInnerHTML={{ __html: blog.text }}
      />
    </div>
  );
};

export default BlogPost;