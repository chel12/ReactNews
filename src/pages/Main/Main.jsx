import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import { getNews } from '../../api/apiNews';
import NewsList from '../../components/NewsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';
import Pagination from '../../components/Pagination/Pagination';
const Main = () => {
	const [news, setNews] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = 10;
	const pageSize = 10;

	const fetchNews = async (currentPage) => {
		try {
			setIsLoading(true);
			const response = await getNews(currentPage, pageSize);
			setNews(response.news);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchNews(currentPage);
	}, [currentPage]);

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};
	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};
	const handlePageClick = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<main className={styles.main}>
			{news.length > 0 ? (
				<NewsBanner item={news[0]} />
			) : (
				<Skeleton count={1} type={'banner'} />
			)}

			<Pagination
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				handlePageClick={handlePageClick}
				currentPage={currentPage}
				totalPages={totalPages}
			/>

			{!isLoading ? (
				<NewsList news={news} />
			) : (
				<Skeleton count={10} type={'item'} />
			)}

			<Pagination
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				handlePageClick={handlePageClick}
				currentPage={currentPage}
				totalPages={totalPages}
			/>
		</main>
	);
};

export default Main;
