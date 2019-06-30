/**
 * 
 *  todo: 2) Add HMR as such:
 *        * if (process.env.NODE_ENV !== "production") {
 *        *   if (module.hot) {
 *        *     module.hot.accept('./reducers', () => {
 *        *       store.replaceReducer(rootReducer)
 *        *     })
 *        *   }
 *        * }
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore, { history } from './configureStore'
import App from './containers/App';
import 'semantic-ui-less/semantic.less'
// import {unregister} from './serviceWorker';

const preloadedState = {};
const store = configureStore(preloadedState);

ReactDOM.render(
  <Provider store={store}>
          <App history={history} />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

