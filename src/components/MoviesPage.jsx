import React, { Component } from "react";
import { Link } from "react-router-dom";

import getQueryParams from "./../utils/getQueryParams";

import servicesAPI from "./../services/servicesApi";

import Searchbar from "./Searchbar/Searchbar";

import routes from "./../routes";
import LoaderBlock from "./Loader/Loader";
import Button from "./Button/Button";

import { imageURL } from "./../services/BaseURL&APIKey";
import {
  GalleryStyled,
  GalleryItemStyled,
  GalleryItemImage,
} from "./Styles/StyledGal&Item";
class MoviesPage extends Component {
  state = { movies: [], error: null, isLoading: false };
  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      this.fetchMoviesMethod(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchMoviesMethod(nextQuery);
    }
  }
  handleChangeQuery = (query) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
    this.setState({ movies: [] });
  };

  fetchMoviesMethod = (query) => {
    this.setState({ isLoading: true });
    servicesAPI
      .fetchMovies(query)
      .then((movies) => this.setState({ movies: movies }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };
  handleGoBack = () => {
    this.props.history.push(routes.home.path);
  };

  render() {
    const { movies, isLoading, error } = this.state;
    const { match } = this.props;
    return (
      <>
        <Searchbar onSubmit={this.handleChangeQuery}> </Searchbar>
        <Button onBtnClick={this.handleGoBack} />
        {movies.length > 0 && (
          <GalleryStyled>
            {movies.map((movie) => (
              <GalleryItemStyled key={movie.id}>
                <Link
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  <div>
                    <GalleryItemImage
                      src={`${imageURL.w185}${movie.poster_path}`}
                      alt={movie.original_title}
                    />
                    {movie.original_title}
                  </div>
                </Link>
              </GalleryItemStyled>
            ))}
          </GalleryStyled>
        )}
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && <LoaderBlock></LoaderBlock>}
      </>
    );
  }
}

export default MoviesPage;
