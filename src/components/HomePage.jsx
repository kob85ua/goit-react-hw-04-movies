import React, { Component } from "react";
import { Link } from "react-router-dom";
import servicesAPI from "./../services/servicesApi";
import routes from "./../routes";
import { imageURL } from "./../services/BaseURL&APIKey";
import {
  GalleryStyled,
  GalleryItemStyled,
  GalleryItemImage,
} from "./Styles/StyledGal&Item";
class HomePage extends Component {
  state = {
    movies: [],
    error: null,
  };
  componentDidMount() {
    servicesAPI
      .fetchPopularMovies()
      .then((popularMovies) => this.setState({ movies: popularMovies }))
      .catch((error) => this.setState({ error }));
  }
  render() {
    const { movies, error } = this.state;

    return (
      <>
        <h2>Trending today</h2>
        {movies.length > 0 && (
          <GalleryStyled>
            {movies.map((movie) => (
              <GalleryItemStyled key={movie.id}>
                <Link
                  to={{
                    pathname: `${routes.movies.path}/${movie.id}`,
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
      </>
    );
  }
}

export default HomePage;
