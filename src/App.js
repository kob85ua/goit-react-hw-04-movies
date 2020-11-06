import React, { Component, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import routes from "./routes";
import LoaderBlock from "./components/Loader/Loader";

class App extends Component {
  render() {
    return (
      <Layout>
        <Suspense fallback={<LoaderBlock />}>
          <Switch>
            <Route
              path={routes.home.path}
              exact
              component={routes.home.component}
            />
            <Route
              path={routes.movies.path}
              exact
              component={routes.movies.component}
            />
            <Route
              path={routes.details.path}
              component={routes.details.component}
            />

            <Redirect to="/" />
          </Switch>
        </Suspense>
      </Layout>
    );
  }
}

export default App;
