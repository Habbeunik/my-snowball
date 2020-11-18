import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './main.scss';

const HomePage = React.lazy(() => import('./pages/home'));
const AboutPage = React.lazy(() => import('./pages/about'));

/**
 * @params { Object } props
 * @return { any } children
 */
function App() {
	return (
		<Router>
			<React.Suspense fallback={<div>Loading Page...</div>}>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/about' component={AboutPage} />
				</Switch>
			</React.Suspense>
		</Router>
	);
}

export default App;
