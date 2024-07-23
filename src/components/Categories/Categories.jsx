import React from 'react';
import styles from './styles.module.css';
const Categories = ({
	categories,
	setSelectedCategory,
	selectedCategories,
}) => {
	return (
		<div className={styles.categories}>
			<button
				onClick={() => setSelectedCategory(null)}
				className={!selectedCategories ? styles.active : styles.item}>
				All
			</button>

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
