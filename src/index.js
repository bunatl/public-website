import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Work offline, caching content
// Tutorial: https://www.youtube.com/watch?v=ksXwaWHCW6k
serviceWorker.unregister();
