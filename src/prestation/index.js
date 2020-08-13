import React, { Fragment } from "react";
import ListPrestationsContainer from "./components/ListPrestationsContainer";

export default class PrestationComponent extends React.Component {
  render() {
    return (
      <Fragment>
        <div>List Prestation</div>
        <ListPrestationsContainer />
      </Fragment>
      )
  }
}

