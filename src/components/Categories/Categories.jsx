import React from 'react';
import styles from './styles.module.css';
const Categories = ({
	categories,
	setSelectedCategory,
	selectedCategories,
}) => {
	return (
		<div className={styles.categories}>
			{categories.map((category) => {
				return (
					<button
						onClick={() => setSelectedCategory(category)}
						className={
							selectedCategories === category
								? styles.active
								: styles.item
						}
						key={category}>
						{category}
					</button>
				);
			})}
		</div>
	);
};

export default Categories;
