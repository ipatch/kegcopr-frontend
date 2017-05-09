import { createStore, applyMiddleware } from 'redux';
// redux-thunk - helps us handle asynchronous actions / Promises
import thunk from 'redux-thunk';
import reducers from '../reducers';

const middleWare = [thunk];

const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;
