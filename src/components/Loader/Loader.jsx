import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import LoaderWrapper from "./StyledLoader";
export default class LoaderBlock extends Component {
  //other logic
  render() {
    return (
      <LoaderWrapper>
        <Loader
          type="ThreeDots"
          color="#3f51b5"
          height={150}
          width={150}
          timeout={3000}
        />
      </LoaderWrapper>
    );
  }
}
