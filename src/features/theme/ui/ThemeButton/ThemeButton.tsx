
import { useTheme } from '@/app/providers/ThemeProvider';
import styles from './styles.module.css';
import { themeIcons } from '@/shared/assets';

const ThemeButton = () => {
	const { isDark, toggleTheme } = useTheme();

	return (
		<img
			className={styles.icon}
			src={isDark ? themeIcons.light : themeIcons.dark}
			alt="theme"
			width={30}
			onClick={toggleTheme}
		/>
	);
};

export default ThemeButton;
