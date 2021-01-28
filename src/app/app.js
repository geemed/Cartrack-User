import React from "react";
import { Provider } from "react-redux";

import AppRouter from "./app.router";
import AppStore from "./app.store";
import { context } from "./app.context"; 

const App = () => {
  const store = AppStore();

  return (
    <Provider context={context} store={store}>
      <AppRouter/>
    </Provider>
  )
}

export default App;