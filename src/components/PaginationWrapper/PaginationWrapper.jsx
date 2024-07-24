
import Pagination from '../Pagination/Pagination';

const PaginationWrapper = ({ top, bottom, children, ...paginationsProps }) => {
	return (
		<>
			{top && <Pagination {...paginationsProps} />}
			{children}
			{bottom && <Pagination {...paginationsProps} />}
		</>
	);
};

export default PaginationWrapper;
