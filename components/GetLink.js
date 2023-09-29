import { useRouter } from 'next/router'
import React from 'react'

const GetLink = ({ postId, children, href }) => {
	const router = useRouter()
	const handleClick = event => {
		event.preventDefault()
		router.push(`${href}${postId}`)
	}

	return (
		<a href={`${href}${postId}`} onClick={handleClick}>
			{children}
		</a>
	)
}

export default GetLink
