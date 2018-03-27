import reducers from '../reducers';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { applyMiddleware, compose } from 'redux';

import { composeWithDevTools } from 'remote-redux-devtools';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    name: 'MyApp', actionsBlacklist: ['REDUX_STORAGE_SAVE']
});


export default function configureStore(initialState) {
    const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk, logger)));
    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers').default)
        );
    }
    return store;
}
