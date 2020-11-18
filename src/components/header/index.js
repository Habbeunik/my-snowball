import React from 'react';
import PropTypes from 'prop-types';

import styles from './header.module.scss';

/**
 * @return {*}
 */
export default function Header() {
	return <div className={styles.container}>Header</div>;
}

Header.propType = {
	title: PropTypes.string
};

Header.defaultProps = {
	title: 'Header'
};
