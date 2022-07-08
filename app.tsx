import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/state";
import Repository from "./src/components/Repository";
function App() {
  return (
    <Provider store={store}>
      <h1>Search For a Package</h1>
      <Repository />
    </Provider>
  );
}
export default App;
