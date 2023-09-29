import React from 'react'
import styles from '../../styles/Comment.module.scss'

export default function Comment({ comment }) {
	return (
		<div className={styles.item}>
			<div className={styles.title}>
				<img src='https://klike.net/uploads/posts/2023-01/1674365337_3-31.jpg' />
				<p>{comment.email}</p>
				<p className={styles.commentNum}>Comment post of {comment.postId}</p>
			</div>
			<div className={styles.description}>
				<h1>{comment.name}</h1>
				<p>{comment.body}</p>
			</div>
		</div>
	)
}
