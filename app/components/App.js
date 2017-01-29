import React, { PropTypes } from 'react';
import { footer } from '../styles/footer.sass';
const App = ({ children }) =>
	<div>
		This is before children
		{ children }
		<footer className={footer}>
			This is the footer (in App.js and /styles/footer.sass)
		</footer>
	</div>;

App.propTypes = {
	children: PropTypes.object
};

export default App;
