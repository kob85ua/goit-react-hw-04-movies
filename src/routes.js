import { lazy } from "react";
export default {
  home: {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() =>
      import("./components/HomePage" /* webpackChunkName:"home_page" */)
    ),
  },
  movies: {
    path: "/movies",
    label: "Movies",
    exact: true,
    component: lazy(() =>
      import("./components/MoviesPage" /* webpackChunkName:"movies_page" */)
    ),
  },
  details: {
    path: "/movies/:movieId",
    label: "MovieDetails",
    exact: true,
    component: lazy(() =>
      import(
        "./components/MovieDetailsPage" /* webpackChunkName:"details_page" */
      )
    ),
  },
  cast: {
    path: "/cast",
    label: "Cast",
    exact: true,
    component: lazy(() =>
      import("./components/Cast" /* webpackChunkName:"cast" */)
    ),
  },
  reviews: {
    path: "/reviews",
    label: "Reviews",
    exact: true,
    component: lazy(() =>
      import("./components/Reviews" /*webpackChunkName:"reviews"*/)
    ),
  },
};
