interface DateData {
	weekday: string;
	day: string;
	month: string;
}

export const getDate = (datetime: string): DateData => {
	const date = new Date(datetime);
	const dateString = date.toLocaleString('en', {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
	});

	if (dateString === 'Invalid Date') {
		return {
			weekday: '',
			day: '',
			month: '',
		};
	}

	const [weekday, month, day] = dateString.replace(',', '').split(' ');

	return {
		weekday,
		day,
		month,
	};
};

export const getTime = (datetime: string): string => {
	const date = new Date(datetime);
	const dateString = date.toLocaleString('en', {
		hour12: false,
		hour: '2-digit',
		minute: '2-digit',
	});

	return dateString === 'Invalid Date'
		? ''
		: dateString.replace('24:00', '00:00');
};
