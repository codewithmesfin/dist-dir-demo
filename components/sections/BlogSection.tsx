import React from 'react';
import Link from 'next/link';
import { blogs } from '@/data';
import Image from 'next/image';
const BlogSection = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-100">Our Blogs</h1>
          <p className="text-lg text-slate-100 mt-4">Stay up to date with our latest construction projects, industry news, and insights.</p>
        </div>
        <div className="w-24 h-1 bg-orange-400 mx-auto -mt-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8">
          {blogs.map((post) => (
            <div key={post.id} className="bg-white shadow-lg rounded-xl overflow-hidden">
              <Image src={post.image} alt={post.title} width={300} height={300} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link href={`/blog/${post.slug}`} passHref
                     className="text-primary font-semibold hover:text-primary-foreground">Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="hover:bg-transparent transition-all px-4 md:px-10 md:py-3 rounded-md font-semibold border bg-orange-400 shadow-slate-100 text-slate-100 shadow-lg">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
