import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./store/reducer/index";
import rootSaga from "./store/saga/index";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import "./assets/css/style.css";
import "./assets/sass/style.scss";

import reportWebVitals from "./reportWebVitals";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

// const sagaMiddleware = createSagaMiddleware();

// const middlewares = [sagaMiddleware];

// const store = createStore(rootReducer, applyMiddleware(...middlewares));

// sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
