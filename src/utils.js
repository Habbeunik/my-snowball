export const getHourRotationDegree = hour => (Number(hour) / 12) * 360;

export const getMinuteRotationDegree = min => (Number(min) / 60) * 360;

export const formatTimeInput = (val, max) => {
	if (val > max) {
		val = max;
	}
	const format = Number(val) < 10 ? `0${Number(val)}` : val;

	return format;
};
