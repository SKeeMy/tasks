import Post from './post'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '../../styles/Post.module.scss'
import Loading from '../Loading/Loading'

function PostList({ searchValue, activePage, setPostId }) {
	const [loading, setLoading] = useState(false)
	let username = 'User Name'
	const [posts, setPosts] = useState([])
	useEffect(() => {
		if (searchValue !== '') {
			setLoading(true)

			const loadPosts = async () => {
				try {
					const res = await axios.get(
						`https://jsonplaceholder.typicode.com/posts?title_like=${searchValue}`
					)
					setPosts(res.data)
				} catch (error) {
					console.log(error)
				} finally {
					setLoading(false)
				}
			}

			loadPosts()
		}
	}, [searchValue])

	useEffect(() => {
		setLoading(true)

		const loadPosts = async () => {
			try {
				const res = await axios.get(
					`https://jsonplaceholder.typicode.com/posts?_page=${activePage}&_limit=10`
				)
				setPosts(res.data)
				console.log(res.data)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}

		loadPosts()
	}, [activePage])
	return (
		<div className={styles.container}>
			{loading ? (
				<Loading />
			) : (
				posts.map(post => (
					<Post
						key={post.id}
						post={post}
						id={post.id}
						setPostId={setPostId}
						username={username}
					/>
				))
			)}
		</div>
	)
}

export default PostList
