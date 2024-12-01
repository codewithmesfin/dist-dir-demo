import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';
const blogPosts = [
  {
    id: 1,
    title: 'Building the Future: Our Latest Project in the City',
    content: 'Full blog content for "Building the Future: Our Latest Project in the City"...',
    date: 'November 20, 2024',
    image: '/crane.jpg',
    slug: 'building-the-future-our-latest-project',
  },
  {
    id: 2,
    title: 'How We Ensure Safety on Every Construction Site',
    content: 'Full blog content for "How We Ensure Safety on Every Construction Site"...',
    date: 'November 15, 2024',
    image: '/home.jpg',
    slug: 'safety-on-every-site',
  },
  {
    id: 3,
    title: 'Innovative Solutions in Construction',
    content: 'Full blog content for "Innovative Solutions in Construction"...',
    date: 'November 18, 2024',
    image: '/inov.jpg',
    slug: 'innovative-solutions-in-construction',
  },
  {
    id: 4,
    title: 'Sustainable Building Practices',
    content: 'Full blog content for "Sustainable Building Practices"...',
    date: 'November 22, 2024',
    image: '/sol.jpg',
    slug: 'sustainable-building-practices',
  },
];

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the blog post by slug
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return <div className="text-center text-slate-100">Blog post not found.</div>;
  }

  return (
    <div className="bg-black min-h-screen text-white py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-400 text-sm">{post.date}</p>
        <Image src={post.image} alt={post.title} className="w-full h-64 object-cover my-6 rounded-lg" />
        <div className="text-lg text-slate-100">{post.content}</div>
      </div>
    </div>
  );
};

export default BlogPost;
