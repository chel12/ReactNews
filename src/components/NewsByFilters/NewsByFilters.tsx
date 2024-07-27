import styles from './styles.module.css';
import NewsList from '../NewsList/NewsList';
import {  TOTAL_PAGES } from '../../constant/constant';
import NewsFilters from '../NewsFilters/NewsFilters';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper';
import { useGetNewsQuery } from '../../store/services/newsApi';
import { useAppDispatch, useAppSelector } from '../../store';
import { setFilters } from '../../store/slices/newsSlice';

const NewsByFilters = () => {
	const dispatch = useAppDispatch();
	const filters = useAppSelector((state) => state.news.filters);

	const debouncedKeywords = useDebounce(filters.keywords, 2000);
	const { data, isLoading } = useGetNewsQuery({
		...filters,
		keywords: debouncedKeywords,
	});

	const handleNextPage = () => {
		if (filters.page_number < TOTAL_PAGES) {
			dispatch(
				setFilters({
					key: 'page_number',
					value: filters.page_number + 1,
				})
			);
		}
	};
	const handlePreviousPage = () => {
		if (filters.page_number > 1) {
			dispatch(
				setFilters({
					key: 'page_number',
					value: filters.page_number - 1,
				})
			);
		}
	};
	const handlePageClick = (pageNumber: number) => {
		dispatch(
			setFilters({
				key: 'page_number',
				value: pageNumber,
			})
		);
	};

	return (
		<section className={styles.section}>
			<NewsFilters filters={filters} />
			<PaginationWrapper
				top
				bottom
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				handlePageClick={handlePageClick}
				currentPage={filters.page_number}
				totalPages={TOTAL_PAGES}>
				<NewsList isLoading={isLoading} news={data?.news} />
			</PaginationWrapper>
		</section>
	);
};

export default NewsByFilters;
