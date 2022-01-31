import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// constants
import { routing } from "./constants";
// components
import FailureSnackbar from "./components/Snackbar";
import NoPage from "./pages/PageNotFound";
// styles
import "./styles/reset.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FailureSnackbar />
        <Router>
          <Switch>
            {routing.map(path => {
              const { default: Page } = require(`./pages/${path.page}`);
              return (
                <Route exact={path.exact} key={path.link} path={path.link}>
                  <Page />
                </Route>
              );
            })}
            <Route component={NoPage}/>
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
