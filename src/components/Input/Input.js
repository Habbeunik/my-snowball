import React from 'react';
import Proptypes from 'prop-types';
import styles from './input.module.scss';

const Input = ({ label, value, onChange, min, max, name }) => (
	<div className={styles.wrapper}>
		<label className={styles.label} htmlFor={name}>
			{label}
		</label>
		<input
			id={name}
			name={name}
			type='number'
			className={styles.input}
			value={value}
			onChange={e => onChange(e.target.value)}
			min={min}
			max={max}
		/>
	</div>
);

Input.propTypes = {
	label: Proptypes.string,
	value: Proptypes.string,
	onChange: Proptypes.func,
	min: Proptypes.string,
	max: Proptypes.string,
	name: Proptypes.string
};

export default Input;
