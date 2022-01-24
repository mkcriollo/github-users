import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  // (history);
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="*" component={Error} />
        </Switch>
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
