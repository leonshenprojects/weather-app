import { getDate, getTime } from './dateTime';

const desiredDate = {
    date: '16',
    day: 'Thursday',
    month: 'February',
}

const emptyDate = {
    date: '',
    day: '',
    month: '',  
}

describe('getDate', () => {
	it('should return the correct date object', () => {
		expect(getDate('2017-02-16 12:00:00')).toMatchObject(desiredDate);
	});

    it('should return an object with empty strings if the input is an empty string', () => {
        expect(getDate('')).toMatchObject(emptyDate);
    });

    it('should return an object with empty strings if the date is invalid', () => {
        expect(getDate('xxxx')).toMatchObject(emptyDate);
    });
});

describe('getTime', () => {
    it('should return the correct formated time', () => {
        expect(getTime('2017-02-16 12:00:00')).toMatch('12:00');
    });

    it('should return an empty string if the input is an empty string', () => {
        expect(getTime('')).toMatch('');
    });

    it('should return an empty string if the date is invalid', () => {
        expect(getTime('xxxx')).toMatch('');
    });

    it('should return format 24:00 as 00:00', () => {
        expect(getTime('2017-02-16 24:00:00')).toMatch('00:00');
    });
});
