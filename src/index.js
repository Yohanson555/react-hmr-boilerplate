import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
//import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';
import App from 'App';
import configureStore from './state/store';

const store = configureStore();

//registerServiceWorker();

const render = Component => {
    return ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Component />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
};

render(App);


if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(NextApp);
    });
}

serviceWorker.unregister();
