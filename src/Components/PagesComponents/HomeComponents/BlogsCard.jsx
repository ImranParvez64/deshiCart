import React from 'react';

const BlogsCard = ({blog}) => {
    return (
        <div className='space-y-4'>
            <img className='w-full rounded-sm' src={blog.cover_img} alt="" />
            <h1 className='text-xl font-semibold text-gray-500'>{blog.title}</h1>
            <p>Read more</p>
        </div>
    );
};

export default BlogsCard;