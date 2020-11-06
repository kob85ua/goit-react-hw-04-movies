import React, { Component } from "react";
import servicesAPI from "./../services/servicesApi";
import {StyledTextField} from "./Styles/StyledTextField"

class Reviews extends Component {
  state = { reviews: [], error: null };
  componentDidMount() {
    servicesAPI
      .fetchMovieReviews(this.props.match.params.movieId)
      .then((reviews) => this.setState({ reviews }))
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { reviews, error } = this.state;

    return (
      <div>
        {reviews.length > 0 ? (
          <StyledTextField>
            {reviews.map(({ author, id, content }) => (
              <li key={id}>
                <h4>{author}:</h4>
                <div>{content}</div>
              </li>
            ))}
          </StyledTextField>
        ) : (
          <span>We don`t have any reviews for this movie</span>
        )}
        {error && <p>Whoops, something went wrong: {error.message}</p>}
      </div>
    );
  }
}

export default Reviews;
