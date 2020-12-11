import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import Grid from "./components/Grid";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        {/*Provider digunakan untuk mendistribusikan state dari reducer ke semua child (mirip useReducer tp untuk semua child)*/}
        <Grid />
      </Provider>
    </div>
  );
};

export default App;
