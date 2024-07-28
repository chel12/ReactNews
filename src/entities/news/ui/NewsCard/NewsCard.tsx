import { formatTimeAgo } from '@/shared/helpers/formatTimeAgo';
import Image from '@/shared/ui/Image/Image';
import { INews } from '../../model/types';
import styles from './styles.module.css';
import { ReactNode } from 'react';

interface Props {
	item: INews;
	type: 'banner' | 'item';
	viewNewSlot?: (news: INews) => ReactNode;
}

const NewsCard = ({ item, type = 'item', viewNewSlot }: Props) => {
	return (
		<li className={`${styles.card} ${type === 'banner' && styles.banner}`}>
			{type === 'banner' ? (
				<Image image={item.image} />
			) : (
				<div
					className={styles.wrapper}
					style={{ backgroundImage: `url(${item.image})` }}></div>
			)}
			<div className={styles.info}>
				<h3 className={styles.title}>{item.title}</h3>
				<p className={styles.extra}>
					{formatTimeAgo(item.published)} by {item.author}
				</p>
			</div>
			{viewNewSlot ? viewNewSlot(item) : null}
		</li>
	);
};

export default NewsCard;
