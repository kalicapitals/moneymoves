   // src/app/blog/[id].tsx
   import { useRouter } from 'next/router';
   import { blogPosts } from './blogPosts'; // Adjust the import based on your file structure

   const BlogPost = () => {
     const router = useRouter();
     const { id } = router.query;

     // Find the blog post by ID
     const post = blogPosts.find((post) => post.id === parseInt(id as string));

     if (!post) {
       return <div>Post not found</div>;
     }

     return (
       <div className="max-w-6xl mx-auto p-8">
         <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
         <p className="text-gray-600 mb-4">{post.date}</p>
         <div className="text-lg">{post.content}</div>
       </div>
     );
   };

   export default BlogPost;