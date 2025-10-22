import CardsTitle from '@/Components/Shared/MiniComponents/CardsTitle';
import React from 'react';
import BlogsCard from './BlogsCard';

const HomeBlogs = async() => {
    const res = await fetch("http://localhost:4000/blogs")
    const blogs = await res.json();

    return (
        <div>
            <CardsTitle title={"Latest"} titleColor={"Blog"} shortDisc={"We tackle interesting topics every day in 2023."}></CardsTitle>
            <div className='grid grid-cols-5 gap-4'>
                {
                    blogs.slice(0,5).map(blog=>(
                        <BlogsCard blog={blog}></BlogsCard>
                    ))
                }
            </div>
        </div>
    );
};

export default HomeBlogs;