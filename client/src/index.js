import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

// Reducers
import reducers from './reducers';

// Scripts
import 'bootstrap';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css';

// Components
import App from './components/App';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(reduxThunk),
));
document.body.style = 'background: #f4f4f4;';
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();
