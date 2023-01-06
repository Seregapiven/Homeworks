import './common/css/normalize.css';
import './common/css/skeleton.css';
import './common/css/dark-theme.css';
import './index.css';

import App from './components/App/App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
