import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/main';

import './index.scss';

import App from './features/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
