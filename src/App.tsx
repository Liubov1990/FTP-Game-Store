import React, { ReactNode, ComponentType } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor} from "./redux/store";
import { HashRouter, Switch, Route } from "react-router-dom";
// constants
import { routing } from "./constants";
// components
import FailureSnackbar from "./components/Snackbar";
import NoPage from "./pages/PageNotFound";
// styles
import "./styles/reset.css";

type Props = Provider["props"] & { children: ReactNode };
export const StoreProviderOverride = Provider as unknown as ComponentType<Props>

function App() {
  return (
    <StoreProviderOverride store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FailureSnackbar />
        <HashRouter>
          <Switch>
            {routing.map(path => {
              const { default: Page } = require(`./pages/${path.page}`);
              return (
                <Route exact={path.exact} key={path.link} path={path.link}>
                  <Page />
                </Route>
              );
            })}
            <Route component={NoPage} />
          </Switch>
        </HashRouter>
      </PersistGate>
    </StoreProviderOverride>
  );
}
export default App;