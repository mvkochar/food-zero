import React from 'react'
import classes from './PostsItem.module.css'

type PostsItemProps = {
    id: number
    image: string
    category: string
    authorPhoto: string
    authorName: string
    date: string
    time: string
    comments: number
    title: string
    description: string
}

const PostsItem = ({ id, image, category, authorPhoto, authorName, date,
    time, comments, title, description }: PostsItemProps) => {

    return (
        <div className={classes.posts_item}>
            <div className={classes.posts_item_main} style={{ background: `url('${image}') no-repeat` }}>
                <h6 className={classes.posts_item_category}>{category}</h6>
            </div>
            <div className={classes.posts_item_info}>
                <div><img src={authorPhoto} alt="author" /></div>
                <div>{authorName}</div>
                <div className={classes.posts_item_divider}></div>
                <div>{date}</div>
                <div className={classes.posts_item_divider}></div>
                <div>{time}</div>
                <div className={classes.posts_item_divider}></div>
                <div>{comments}</div>
            </div>
            <h4 className={classes.posts_item_title}>{title}</h4>
            <p className={classes.posts_item_desc}>{description}</p>
            <div className={classes.posts_item_more}>
                <div className={classes.item_more_title}>Read More</div>
                <a href="" className={classes.item_more_link}><img src="/images/arrow-right.png" alt="arrow-right" /></a>
            </div>
        </div>
    )
}

export default PostsItem