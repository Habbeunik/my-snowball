import Input from 'components/Input';
import React, { useCallback, useMemo, useState } from 'react';
import {
	getHourRotationDegree,
	getMinuteRotationDegree,
	formatTimeInput
} from 'utils';

import './main.scss';

function App() {
	const [hour, setHour] = useState('12');
	const [min, setMin] = useState('00');

	const hourDegree = useMemo(() => getHourRotationDegree(hour), [hour]);
	const minutesDegree = useMemo(() => getMinuteRotationDegree(min), [min]);

	const handleHourChange = useCallback(
		val => {
			setHour(formatTimeInput(val, 12));
		},
		[setHour]
	);
	const handleMinChange = useCallback(
		val => {
			setMin(formatTimeInput(val, 59));
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
