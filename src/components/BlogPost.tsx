import React from 'react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  readTime: string;
}

export function BlogPost({ title, excerpt, imageUrl, date, readTime }: BlogPostProps) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime} read</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{excerpt}</p>
        <button className="mt-4 text-purple-600 font-semibold hover:text-purple-800 transition-colors">
          Read More →
        </button>
      </div>
    </article>
  );
}