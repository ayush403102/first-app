import { useRouter } from 'next/router';



const Blog = () => {
  const router = useRouter();
  const blogNumber = router.query.Blog;
  return (
    <h1>Blog { blogNumber }</h1>
  )
}

export default Blog;