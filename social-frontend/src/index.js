import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Routes from './routes';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader'

const Store = configureStore();

Store.subscribe(() => {
    console.log('Store Subscription :', Store.getState());
});
ReactDOM.render(<BrowserRouter><Provider store={Store}><Routes /></Provider></BrowserRouter>, document.getElementById('root'));
if (module.hot) {
    module.hot.accept('./routes', () => {
        ReactDOM.render(<AppContainer>
            <BrowserRouter><Provider store={Store}><Routes /></Provider></BrowserRouter>
        </AppContainer>, document.getElementById('root'))
    });
}
 
registerServiceWorker();
