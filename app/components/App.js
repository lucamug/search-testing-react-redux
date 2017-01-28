import React, { PropTypes } from 'react';
import { footer } from '../styles/footer.sass';
const App = ({ children }) =>
    <div>
        { children }
        <footer className={footer}>
        </footer>
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
