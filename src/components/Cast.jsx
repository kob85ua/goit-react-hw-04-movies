import React, { Component } from "react";
import servicesAPI from "./../services/servicesApi";
import { imageURL } from "./../services/BaseURL&APIKey";
import {
  GalleryStyled,
  GalleryItemStyled,
  GalleryItemImage,
} from "./Styles/StyledGal&Item";
class Cast extends Component {
  state = {
    credits: [],
    error: null,
  };
  componentDidMount() {
    servicesAPI
      .fetchMovieCredits(this.props.match.params.movieId)
      .then((credits) => this.setState({ credits }))
      .catch((error) => this.setState({ error }));
  }

  render() {
    const { credits, error } = this.state;

    return (
      <div>
        {credits.length > 0 ? (
          <GalleryStyled>
            {credits.map(
              ({ name, id, profile_path }) =>
                profile_path && (
                  <GalleryItemStyled key={id}>
                    <div>
                      <GalleryItemImage
                        src={`${imageURL.w185}${profile_path}`}
                        alt={name}
                      />

                      <span>{name}</span>
                    </div>
                  </GalleryItemStyled>
                )
            )}
          </GalleryStyled>
        ) : (
          <span>We don`t have any info about actors</span>
        )}
        {error && <p>Whoops, something went wrong: {error.message}</p>}
      </div>
    );
  }
}

export default Cast;
