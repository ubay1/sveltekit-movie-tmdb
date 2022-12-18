export const FormatNumber = (value: number): number => {
	return Number(new Intl.NumberFormat('id-ID').format(value));
};
