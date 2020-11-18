import Input from 'components/Input';
import React, { useCallback, useMemo, useState } from 'react';

import './main.scss';

const getHourRotationDegree = hour => `${(Number(hour) / 12) * 360}°`;
const getMinuteRotationDegree = min => `${(Number(min) / 60) * 360}°`;

const formatTimeInput = (val, max) => {
	if (val > max) {
		val = max;
	}
	const format = Number(val) < 10 ? `0${Number(val)}` : val;

	return format;
};

function App() {
	const [hour, setHour] = useState('12');
	const [min, setMin] = useState('00');

	const hourDegree = useMemo(() => getHourRotationDegree(hour), [hour]);
	const minutesDegree = useMemo(() => getMinuteRotationDegree(min), [min]);

	const handleHourChange = useCallback(
		e => {
			setHour(formatTimeInput(e.target.value, 12));
		},
		[setHour]
	);
	const handleMinChange = useCallback(
		e => {
			setMin(formatTimeInput(e.target.value, 59));
		},
		[setMin]
	);

	return (
		<div className='container'>
			<h1>My Snowball App</h1>
			<div className='inputWrapper'>
				<Input
					label='Hour'
					value={hour}
					onChange={handleHourChange}
					min='1'
					max='12'
				/>
				<span className='timeSeperator'>:</span>
				<Input
					label='Minute'
					value={min}
					onChange={handleMinChange}
					min='0'
					max='60'
				/>
			</div>
			<div>
				<div className='degreeDisplay'>
					<span>Hour Degree - </span>
					<span>{hourDegree}</span>
				</div>
				<div className='degreeDisplay'>
					<span>Minutes Degree - </span>
					<span>{minutesDegree}</span>
				</div>
			</div>
		</div>
	);
}

export default App;
