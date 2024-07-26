import styles from './styles.module.css';
import Slider from '../Slider/Slider';
import { useFetch } from '../../helpers/hooks/useFetch';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import { getCategories } from '../../api/apiNews';
import { CategoriesApiResponse, IFilters } from '../../interfaces';

interface Props {
	filters: IFilters;
	changeFilter: (key: string, value: string | number | null) => void;
}

const NewsFilters = ({ filters, changeFilter }: Props) => {
	const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(
		getCategories
	);

	return (
		<div className={styles.filters}>
			{dataCategories ? (
				<Slider step={300}>
					<Categories
						categories={dataCategories.categories}
						selectedCategories={filters.category}
						setSelectedCategory={(category) =>
							changeFilter('category', category)
						}
					/>
				</Slider>
			) :
			null}
			
			<Search
				keywords={filters.keywords}
				setKeywords={(keywords) => changeFilter('keywords', keywords)}
			/>
		</div>
	);
};

export default NewsFilters;
