import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store';
import { CssBaseline, Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';

const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <Container maxWidth="lg">
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Container>
    </Provider>
);


ReactDOM.render(
    <Root />,
    document.getElementById('root')
);
