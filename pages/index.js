import { useState, useEffect } from 'react'
import PostList from '../components/posts/PostList'
import Search from '../components/search/Search'
import Paginate from '../components/Paginate/Paginate'
import Link from 'next/link'

export default function Index() {
	const storedActivePage =
		typeof window !== 'undefined'
			? window.localStorage.getItem('activePageItem')
			: ''
	const initialPage = storedActivePage ? parseInt(storedActivePage, 10) : 1

	const [activePage, setActivePage] = useState(initialPage)
	const handlePageClick = page => {
		setActivePage(page.selected + 1)
	}
	const storedSearchValue =
		typeof window !== 'undefined'
			? window.localStorage.getItem('searchItem')
			: ''
	const initialSearchValue = storedSearchValue || ''
	const [searchValue, setSearchValue] = useState(initialSearchValue)

	useEffect(() => {
		window.localStorage.setItem('activePageItem', activePage.toString())
	}, [activePage])

	useEffect(() => {
		window.localStorage.setItem('searchItem', searchValue)
	}, [searchValue])
	const currentPage = activePage - 1

	const [postId, setPostId] = useState('')
	console.log(postId)

	return (
		<div className='container'>
			<Search searchValue={searchValue} setSearchValue={setSearchValue} />
			<div className='content'>
				<PostList
					setActivePage={setActivePage}
					activePage={activePage}
					searchValue={searchValue}
					initialPage={currentPage}
					setPostId={setPostId}
					postId={postId}
				/>
			</div>

			{activePage && (
				<Paginate
					initialPage={currentPage}
					activePage={activePage}
					handlePageClick={handlePageClick}
				/>
			)}
		</div>
	)
}
