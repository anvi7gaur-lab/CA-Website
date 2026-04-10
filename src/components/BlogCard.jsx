import React from 'react';

const BlogCard = ({ blog }) => {
  const date = blog.createdAt?.toDate?.() || new Date();
  const formattedDate = date.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="card overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-r from-blue-400 to-teal-500 flex items-center justify-center">
        <span className="text-6xl">{blog.icon || '📚'}</span>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
            {blog.category}
          </span>
          <span className="text-sm text-gray-500">{formattedDate}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{blog.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{blog.content}</p>
        <button className="text-blue-600 hover:text-blue-700 font-semibold">
          Read More →
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
