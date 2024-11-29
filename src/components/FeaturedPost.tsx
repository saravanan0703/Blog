import React from 'react';

interface FeaturedPostProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
}

export function FeaturedPost({ title, excerpt, imageUrl, date }: FeaturedPostProps) {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-xl">
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <span className="text-purple-300 text-sm">{date}</span>
        <h2 className="text-2xl font-bold text-white mt-2">{title}</h2>
        <p className="text-gray-200 mt-2">{excerpt}</p>
      </div>
    </div>
  );
}