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
	isDark,
	...paginationsProps
}: Props & IPaginationProps) => {
	return (
		<>
			{top && <Pagination isDark={isDark} {...paginationsProps} />}
			{children}
			{bottom && <Pagination isDark={isDark} {...paginationsProps} />}
		</>
	);
};

export default PaginationWrapper;
