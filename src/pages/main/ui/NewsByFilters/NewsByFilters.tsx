import styles from './styles.module.css';
import { useAppSelector } from '@/app/appStore';
import { NewsFilters } from '@/widgets/news';
import { useGetCategoriesQuery } from '@/entities/category/api/categoriesApi';
import NewsListWithPagination from '../NewsListWithPagination/NewsListWithPagination';
import { useGetNewsQuery } from '@/entities/news/api/newsApi';
import { useDebounce } from '@/shared/hooks/useDebounce';

const NewsByFilters = () => {
	const filters = useAppSelector((state) => state.news.filters);
	const { data } = useGetCategoriesQuery(null);
	const news = useAppSelector((state) => state.news.news);
	const debouncedKeywords = useDebounce(filters.keywords, 2000);
	const { isLoading } = useGetNewsQuery({
		...filters,
		keywords: debouncedKeywords,
	});

	return (
		<section className={styles.section}>
			<NewsFilters
				filters={filters}
				categories={data?.categories || []}
			/>
			<NewsListWithPagination
				isLoading={isLoading}
				news={news}
				filters={filters}
			/>
		</section>
	);
};

export default NewsByFilters;
