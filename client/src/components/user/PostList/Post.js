import React from 'react'
import styles from './Post.module.scss'
import Button from '../../Button/Button'

function Post(props) {
    const post = props.post // type : 1-교환, 2-판매, 3-구매
    return (
        <a href='/' className={styles.post}>
            <span className={styles.thumbnail}>
                { post.type == 1 ? <div className={styles.type}><Button size='x-small' color='orange'>교환</Button></div>
                : post.type ==2 ? <div className={styles.type}><Button size='x-small' color='blue'>판매</Button></div>
                : <div className={styles.type}><Button size='x-small' color='pink'>구매</Button></div> }
                <img className={styles.poster} src={post.img} />
                <span className={styles.frame}></span>
            </span>
            <span className={styles.subject}>[보유]</span>
            { post.type == 3 ? <strong className={styles.title}>-</strong> : <strong className={styles.title}>{post.have}</strong>}
            <span className={styles.subject}>[희망]</span>
            { post.type == 2 ? <strong className={styles.title}>{post.price}</strong> : <strong className={styles.title}>{post.want}</strong>}
        </a>
    )
}

export default Post