
import { themeIcons } from '../../assets';
import { formatDate } from '../../helpers/formatDate';
import styles from './styles.module.css';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
	const { isDark, toggleTheme } = useTheme();

	return (
		<header
			className={`${styles.header} ${
				isDark ? styles.dark : styles.light
			}`}>
			<div className={styles.info}>
				<h1 className={styles.title}>React News</h1>
				<h5>Simach ProducшеN</h5>
				<p className={styles.date}>{formatDate(new Date())}</p>
			</div>
			<img
				className={styles.icon}
				src={isDark ? themeIcons.light : themeIcons.dark}
				alt="theme"
				width={30}
				onClick={toggleTheme}
			/>
		</header>
	);
};

export default Header;
