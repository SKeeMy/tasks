import React from 'react'
import styles from '../../styles/Search.module.scss'

export default function Search({ setSearchValue, searchValue }) {
	const handleChange = event => {
		const { value } = event.target
		setSearchValue(value)
	}
	return (
		<div>
			<div className={styles.form}>
				<form>
					<input
						type='text'
						placeholder='Search for post'
						value={searchValue}
						onChange={handleChange}
					/>
				</form>
			</div>
		</div>
	)
}
