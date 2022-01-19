import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Auth0Provider, withAuthenticationRequired } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { createBrowserHistory } from "history";

// export const history = createBrowserHistory();

// const ProtectedRoute = ({ component, ...args }) => (
//   <Route component={withAuthenticationRequired(component)} {...args} />
// );

// const onRedirectCallback = (appState) => {
//   history.replace(appState?.returnTo || "/login");
// };

function App() {
  // (history);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
