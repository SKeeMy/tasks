import { useRouter } from 'next/router'
import React from 'react'
import Comment from '../../components/comment/comment'
import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../../styles/Comment.module.scss'
import GetLink from '../../components/GetLink'
import Loading from '../../components/Loading/Loading'

export default function () {
	const [comments, setComments] = useState([])
	const [loading, setLoading] = useState(false)
	const { query } = useRouter()

	useEffect(() => {
		setLoading(true)
		const loadComments = async () => {
			try {
				const res = await axios.get(
					`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`
				)
				setComments(res.data)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}

		loadComments()
	}, [query])

	return loading ? (
		<Loading />
	) : (
		<div className={styles.container}>
			{comments.map(comment => (
				<Comment key={comment.id} comment={comment} />
			))}
			<div className={styles.button}>
				<GetLink href='/' postId=''>
					<button>Back</button>
				</GetLink>
			</div>
		</div>
	)
}
