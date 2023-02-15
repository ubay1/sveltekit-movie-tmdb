export const formatNumber = (value: number): number | string => {
	return new Intl.NumberFormat('en-GB').format(value);
};

export const formatDate = (value: Date): string => {
	return new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' }).format(value);
};

export const toHoursAndMinutes = (totalMinutes: number) => {
	const hours = Math.floor(totalMinutes / 60);
	const minutes = totalMinutes % 60;

	return `${hours}h ${minutes}min`;
};
