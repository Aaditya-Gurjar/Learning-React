import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContextProvider'
import Spinner from './Spinner'


function Blog() {
    const { posts, loading } = useContext(AppContext)
    console.log(posts, loading);
    return (
        <div className='w-11/12 max-w-[550px] py-3 flex flex-col justify-center items-center max-h-full gap-y-7 mt-[68px]'>
            {loading ? (<Spinner />) : (
                posts.length === 0 ? (<p> No Post Found </p>) :
                    (posts.map((post) => (
                        <div key={post.id}>
                            <p className='font-bold text-xs' >{post.title}</p>
                            <p className='text-[12px] mt-2 '>BY <span className='italic'>{post.author}</span>on <span className='font-bold underline'>{post.category}</span></p>
                            <p className='text-[12px] mb-2'>Posted on {post.date}</p>
                            <p className='text-sm'>{post.content}</p>
                            <div className='text-xs underline font-bold text-blue-500 flex gap-3'>
                                {post.tags.map((tag, index) => {
                                    return <span key={index}>{`#${tag}`}</span>
                                })}
                            </div>
                        </div>
                    )))

            )}
        </div>
    )
}


export default Blog