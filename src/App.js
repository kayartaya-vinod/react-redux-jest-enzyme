import React from 'react';
import NameForm from './components/NameForm';
import NameList from './components/NameList';
import 'bootstrap/dist/css/bootstrap.css';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>React + Redux + Jest + Enzyme demo</h1>
        <hr />
        <NameForm />
        <NameList />
      </div>
    </Provider>
  );
}

export default App;
