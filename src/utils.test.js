import {
	getHourRotationDegree,
	getMinuteRotationDegree,
	formatTimeInput
} from './utils';

describe('Get Hour Rotation Degree', () => {
	it('Returns correct degree', () => {
		expect(getHourRotationDegree(3)).toBe(90);
	});

	it('Returns correct degree for string inputs', () => {
		expect(getHourRotationDegree('4')).toBe(120);
	});
});

describe('Get Minutes Rotation Degree', () => {
	it('Returns correct degree', () => {
		expect(getMinuteRotationDegree(15)).toBe(90);
	});

	it('Returns correct degree for string inputs', () => {
		expect(getMinuteRotationDegree('30')).toBe(180);
	});
});

describe('Format time input according to specified max', () => {
	it('Adds 0 in front of numbers less than 10 to make them 2 digits', () => {
		expect(formatTimeInput(3, 12)).toBe('03');
	});

	it('Does not Add 0 in front of numbers greater than or equal to 10', () => {
		expect(formatTimeInput(11, 12)).toBe(11);
	});

	it('Converts input to max if value is greater than max', () => {
		expect(formatTimeInput(15, 12)).toBe(12);
	});
});
