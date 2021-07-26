import React, { Component } from "react";
import axios from "../axios.js";

class Row extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  }
  componentDidMount = async () => {
    const request = await axios.get(this.props.fetchUrl);
    this.setState({ movies: request.data.results });
  };
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default Row;
