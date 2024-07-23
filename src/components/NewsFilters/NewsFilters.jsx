import React from 'react';
import styles from './styles.module.css';
import { useFetch } from '../../helpers/hooks/useFetch';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import { getCategories } from '../../api/apiNews';

const NewsFilters = ({ filters, changeFilter }) => {
	const { data: dataCategories } = useFetch(getCategories);

	return (
		<div className={styles.filters}>
			{dataCategories ? (
				<Categories
					categories={dataCategories.categories}
					selectedCategories={filters.category}
					setSelectedCategory={(category) =>
						changeFilter('category', category)
					}
				/>
			) : null}
			<Search
				keywords={filters.keywords}
				setKeywords={(keywords) => changeFilter('keywords', keywords)}
			/>
		</div>
	);
};

export default NewsFilters;
