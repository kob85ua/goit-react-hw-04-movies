import React, { Component, Suspense } from "react";
import { Route, Link, Switch } from "react-router-dom";
import servicesAPI from "./../services/servicesApi";
import { imageURL } from "./../services/BaseURL&APIKey";
import routes from "./../routes";
import LoaderBlock from "./Loader/Loader";
import Button from "./Button/Button";
import { StyledDetails, DetailsText } from "./Styles/StyledDetails";
class MovieDetailsPage extends Component {
  state = { movie: null };
  componentDidMount() {
    servicesAPI
      .fetchMoviesDetails(this.props.match.params.movieId)
      .then((movie) => this.setState({ movie }));
  }
  
  componentDidUpdate(prevProps, prevState) {
    
    this.props.location.state = prevProps.location.state;
  }
  handleGoBack = () => {
    const { state } = this.props.location;
    const { isExact } = this.props.match;
    if (state !== undefined && state.from) {
      return this.props.history.push(state.from);
    } else if (!isExact) {
      console.log(this.props.location.search);
      return this.props.history.push(routes.movies.path);
    }
    this.props.history.push(routes.home.path);
  };
  render() {
    const { movie } = this.state;
    const { match } = this.props;
    return (
      <>
        {movie && (
          <div>
            <Button onBtnClick={this.handleGoBack} />

            <StyledDetails>
              <img
                src={`${imageURL.w300}${movie.poster_path}`}
                alt={movie.original_title}
              />
              <DetailsText>
                <h1>{movie.original_title}</h1>
                <span>User Score: {movie.vote_average * 10}%</span>
                <h2>Overview</h2>
                <div>{movie.overview}</div>
                <h3>Genres</h3>
                <ul>
                  {movie.genres.map(({ name, id }) => (
                    <li key={id}>{name}</li>
                  ))}
                </ul>
              </DetailsText>
            </StyledDetails>
            <div>
              Additional Information
              <ul>
                <li>
                  <Link to={`${match.url}${routes.reviews.path}`}>
                    {routes.reviews.label}
                  </Link>
                </li>
                <li>
                  <Link to={`${match.url}${routes.cast.path}`}>
                    {routes.cast.label}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
        <Suspense fallback={<LoaderBlock />}>
          <Switch>
            <Route
              path={`${match.path}${routes.reviews.path}`}
              component={routes.reviews.component}
            />
            <Route
              path={`${match.path}${routes.cast.path}`}
              component={routes.cast.component}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default MovieDetailsPage;
