import { getDate, getTime } from './dateTime';

describe('getDate', () => {
	it('should return the correct date object', () => {
		expect(getDate('2017-02-16 12:00:00')).toMatchObject({
			day: '16',
			weekday: 'Thursday',
			month: 'February',
		});
	});

	it('should return an object with empty strings if the date is invalid', () => {
		const emptyDate = {
			weekday: '',
			day: '',
			month: '',
		};

		expect(getDate('')).toMatchObject(emptyDate);
		expect(getDate('xxxx')).toMatchObject(emptyDate);
	});
});

describe('getTime', () => {
	it('should return the correct formated time', () => {
		expect(getTime('2017-02-16 12:00:00')).toBe('12:00');
	});

	it('should return an empty string if the date is invalid', () => {
		expect(getTime('')).toBe('');
		expect(getTime('xxxx')).toBe('');
	});

	it('should return format 24:00 as 00:00', () => {
		expect(getTime('2017-02-16 24:00:00')).toBe('00:00');
	});
});
