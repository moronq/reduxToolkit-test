import React from 'react';
import './App.module.scss';
import Counter from "./Components/Counter/Counter";
import {store} from "./store/store";
import {Provider} from "react-redux";

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <Counter/>
          </div>
      </Provider>
  );
}

export default App;
