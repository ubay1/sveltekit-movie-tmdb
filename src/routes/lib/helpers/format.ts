export const FormatNumber = (value: number): number => {
	return Number(new Intl.NumberFormat('id-ID').format(value));
};

export const toHoursAndMinutes = (totalMinutes: number) => {
	const hours = Math.floor(totalMinutes / 60);
	const minutes = totalMinutes % 60;

	return `${hours}h ${minutes}min`;
};
