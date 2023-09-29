import React from 'react'
import styles from '../../styles/Loading.module.scss'

export default function Loading() {
	return (
		<div className={styles.loader}>
			<div className={styles.ring}></div>
			<span>Loading...</span>
		</div>
	)
}
