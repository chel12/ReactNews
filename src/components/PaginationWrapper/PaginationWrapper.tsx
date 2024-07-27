import { IPaginationProps } from '../../interfaces';
import Pagination from '../Pagination/Pagination';
interface Props {
	children: React.ReactNode;
	top?: boolean;
	bottom?: boolean;
}

const PaginationWrapper = ({
	top,
	bottom,
	children,
	...paginationsProps
}: Props & IPaginationProps) => {
	return (
		<>
			{top && <Pagination  {...paginationsProps} />}
			{children}
			{bottom && <Pagination  {...paginationsProps} />}
		</>
	);
};

export default PaginationWrapper;
