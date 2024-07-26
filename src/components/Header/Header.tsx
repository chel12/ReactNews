import { formatDate } from '../../helpers/formatDate';
import styles from './styles.module.css';
interface Props {
	isDark: boolean;
}
const Header = ({ isDark }: Props) => {
	return (
		<header
			className={`${styles.header} ${
				isDark ? styles.dark : styles.light
			}`}>
			<h1 className={styles.title}>React News</h1>
			<h5>Simach ProducшеN</h5>
			<p className={styles.date}>{formatDate(new Date())}</p>
		</header>
	);
};

export default Header;
