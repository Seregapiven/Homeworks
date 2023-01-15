import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import theme from './theme';

import { Provider } from 'react-redux';
import store from './store';
import { getUsers } from './store/actions/users';

store.dispatch(getUsers());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
            <App />
            </Provider>
        </ThemeProvider>
    </BrowserRouter>

);

