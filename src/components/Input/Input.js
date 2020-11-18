import React from 'react';
import Proptypes from 'prop-types';
import styles from './input.module.scss';

const Input = ({ label, value, onChange, min, max }) => (
	<div className={styles.wrapper}>
		<label className={styles.label}>{label}</label>
		<input
			type='number'
			className={styles.input}
			value={value}
			onChange={onChange}
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
	max: Proptypes.string
};

export default Input;
