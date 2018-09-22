import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import createSagaMiddleware from 'redux-saga'
import countSaga from './sagas/countSaga'
import reducer from './store/reducer'
const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))
store.subscribe(()=> {
    console.log(store.getState())
})
sagaMiddleware.run(countSaga)

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, rootElement);
registerServiceWorker();
