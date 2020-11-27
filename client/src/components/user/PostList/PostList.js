import React from 'react'
import styles from './PostList.module.scss'
import Post from './Post'

function PostList(props) {
    const posts = props.posts

    return (
        <ul className={styles.list}>
            {posts.map(post => (
                <li><Post post={post}></Post></li>
            ))}
        </ul>
    )
}

export default PostList