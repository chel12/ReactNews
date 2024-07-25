import React, { forwardRef } from 'react';
import styles from './styles.module.css';
const Categories = forwardRef(
	({ categories, setSelectedCategory, selectedCategories }, ref) => {
		return (
			<div className={styles.categories} ref={ref}>
				<button
					onClick={() => setSelectedCategory(null)}
					className={
						!selectedCategories ? styles.active : styles.item
					}>
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
	}
);

Categories.displayName = 'Categories';

export default Categories;
