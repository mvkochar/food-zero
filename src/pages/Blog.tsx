import React from 'react'
import PostsList from '../components/PostsList/PostsList'
import PostsItem from '../components/PostsItem/PostsItem'
import './css/Blog.css'

type BlogProps = {
    setPageNum: (pageNum: number) => void
}

const Blog = ({ setPageNum }: BlogProps) => {
    React.useEffect(
        () => setPageNum(6), []
    )

    return (
        <>
            <main className='blog-main d-f jc-sb'>
                {
                    PostsList.map((post) => {
                        return (
                            <PostsItem
                                id={post.id}
                                category={post.category}
                                image={post.image}
                                authorPhoto={post.authorPhoto}
                                authorName={post.authorName}
                                date={post.date}
                                time={post.time}
                                comments={post.comments}
                                title={post.title}
                                description={post.description}
                            />
                        )
                    })
                }
            </main>
            <div className="blog-pagination d-f">
                <button className='blog-pagination-action'>Prev</button>
                <button className='blog-pagination-num'>2</button>
                <button className='blog-pagination-num'>3</button>
                <button className='blog-pagination-num'>4</button>
                <button className='blog-pagination-action'>Next</button>
            </div>
        </>
    )
}

export default Blog