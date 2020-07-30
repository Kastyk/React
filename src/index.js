import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (module.hot) {
  const hotEmitter = require('webpack/hot/emitter');
  const DEAD_CSS_TIMEOUT = 2000;

  hotEmitter.on('webpackHotUpdate', function (currentHash) {
    document.querySelectorAll('link[href][rel=stylesheet]').forEach((link) => {
      const nextStyleHref = link.href.replace(/(\?\d+)?$/, `?${Date.now()}`);
      const newLink = link.cloneNode();
      newLink.href = nextStyleHref;

      link.parentNode.appendChild(newLink);
      setTimeout(() => {
        link.parentNode.removeChild(link);
      }, DEAD_CSS_TIMEOUT);
    });
  });
}
ReactDOM.render(<App />, document.getElementById('app'));
