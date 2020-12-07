import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from '@material-ui/core';
import {Provider} from 'react-redux';
import App from './App';

import theme from "./styles/theme";
import store from './redux/configureStore';




ReactDOM.render(
      <ThemeProvider theme={theme}>
          <Provider store={store}>
              <App/>
          </Provider>
      </ThemeProvider>,
  document.getElementById('root')
);
