import { useTheme } from '@/app/providers/ThemeProvider';
import styles from './styles.module.css';
import { formatDate } from '@/shared/helpers/formatDate';
import ThemeButton from '@/features/theme/ui/ThemeButton/ThemeButton';
import { Link } from 'react-router-dom';

const Header = () => {
	const { isDark } = useTheme();

	return (
		<header
			className={`${styles.header} ${
				isDark ? styles.dark : styles.light
			}`}>
			<div className={styles.info}>
				<Link to={'/'}>
					<h1 className={styles.title}>React News</h1>
					<h5>Simach ProducшеN</h5>
					<p className={styles.date}>{formatDate(new Date())}</p>
				</Link>
			</div>
			<ThemeButton />
		</header>
	);
};

export default Header;
