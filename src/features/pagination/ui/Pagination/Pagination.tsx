import { IPaginationProps } from "../../model";
import PaginationButtons from "../PaginationButtons/PaginationButtons";




interface Props {
	children: React.ReactNode;
	top?: boolean;
	bottom?: boolean;
}

const Pagination = ({
	top,
	bottom,
	children,
	...paginationsProps
}: Props & IPaginationProps) => {
	return (
		<>
			{top && <PaginationButtons {...paginationsProps} />}
			{children}
			{bottom && <PaginationButtons {...paginationsProps} />}
		</>
	);
};

export default Pagination;
