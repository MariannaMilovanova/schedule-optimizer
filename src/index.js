import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DesiredSchedule from './components/ScheduleForm/DesiredSchedule';
import RealSchedule from './components/ScheduleForm/RealSchedule';
import HomePage from './components/HomePage/HomePage';
import GraphPage from './components/GraphPage/GraphPage';
import logger from 'redux-logger';
import reducers from './reducers';
import './style/index.css';

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/desired" component={DesiredSchedule} />
          <Route path="/graph" component={GraphPage} />
          <Route path="/real" component={RealSchedule} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
