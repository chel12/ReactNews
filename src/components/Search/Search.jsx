import React from 'react';
import styles from './styles.module.css';

const Search = ({ keywords, setKeywords }) => {
	return (
		<div className={styles.search}>
			<input
				type="text"
				value={keywords}
				onChange={(e) => setKeywords(e.target.value)}
				className={styles.input}
				placeholder="search"
			/>
		</div>
	);
};

export default Search;
