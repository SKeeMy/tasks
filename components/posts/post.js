import { useState } from 'react'
import styles from '../../styles/Post.module.scss'
import GetLink from '../GetLink'
export default function Post({ post, username, id, setPostId }) {
	const [help, setHelp] = useState(false)
	const handleClickId = () => {
		setPostId(id)
	}
	return (
		<div onClick={handleClickId} className={styles.item}>
			<div className={styles.title}>
				<img src='https://klike.net/uploads/posts/2023-01/1674365337_3-31.jpg' />
				<p>{username}</p>
			</div>

			<div className={styles.description}>
				<GetLink href={'/comments/'} postId={post.id}>
					<h1
						onMouseEnter={() => setHelp(true)}
						onMouseLeave={() => setHelp(false)}>
						{post.title}
					</h1>
				</GetLink>
				<p>{post.body}</p>
			</div>

			{help && <div className={styles.help}>View comments</div>}
		</div>
	)
}
