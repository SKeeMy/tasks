import React from 'react'
import styles from '../../styles/Pagination.module.scss'
import ReactPaginate from 'react-paginate'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Paginate({ activePage, handlePageClick }) {
	const [postLength, setPostLength] = useState([])
	useEffect(() => {
		{
			const loadPosts = async () => {
				const res = await axios.get(
					'https://jsonplaceholder.typicode.com/posts'
				)
				setPostLength(res.data)
			}
			loadPosts()
		}
	}, [])
	const totalPages = Object.keys(postLength).length / 10
	return (
		<ReactPaginate
			previousLabel={'< назад'}
			nextLabel={'вперед >'}
			pageCount={totalPages}
			pageRangeDisplayed={2}
			initialPage={activePage - 1}
			containerClassName={styles.container}
			pageLinkClassName={styles.pagination}
			previousClassName={styles.pagination}
			nextClassName={styles.pagination}
			breakLinkClassName={styles.pagination}
			renderOnZeroPageCount={null}
			onPageChange={handlePageClick}
			activeLinkClassName={styles.active}
			activeClassName={styles.active}
		/>
	)
}
