export const formatTimeAgo = (dateString) => {
	//тек дата
	const now = new Date();
	//дата поста
	const date = new Date(dateString);
	//разница
	const secondPast = (now.getTime() - date.getTime()) / 1000;
	//секунд
	if (secondPast < 60) {
		return `${Math.floor(secondPast)}s ago`;
	}
	//минут
	if (secondPast < 3600) {
		return `${Math.floor(secondPast / 60)}m ago`;
	}
	//часов
	if (secondPast <= 86400) {
		return `${Math.floor(secondPast / 3600)}h ago`;
	}
	//дней
	if (secondPast > 86400) {
		const day = Math.floor(secondPast / 86400);
		return day === 1 ? `${day} day ago ` : `${day} days ago`;
	}
};
