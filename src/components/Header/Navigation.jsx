import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import { StyledNavigation } from "./styledNavigation";
import "./../Styles/NavLink.css";
const Navigation = () => (
  <StyledNavigation>
    <li>
      <NavLink
        exact
        to={routes.home.path}
        className="Navigation-link"
        activeClassName="Navigation-link-active"
      >
        {routes.home.label}
      </NavLink>
    </li>
    <li>
      <NavLink
        exact
        to={routes.movies.path}
        className="Navigation-link"
        activeClassName="Navigation-link-active"
      >
        {routes.movies.label}
      </NavLink>
    </li>
  </StyledNavigation>
);
export default Navigation;
