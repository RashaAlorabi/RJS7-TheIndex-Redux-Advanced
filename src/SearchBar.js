import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import * as actionCreators from "./store/actions/index";
import { connect } from "react-redux";
class SearchBar extends Component {
  // state = { query: "" };

  // handleChange = event => {
  //   this.setState({ query: event.target.value });
  //   this.props.changeHandler(event.target.value);
  // };

  render() {
    return (
      <div className="form-group col-lg-6 col-12 mx-auto">
        <div className="input-group my-3">
          <input
            className="form-control"
            type="text"
            // value={this.state.value}
            onChange={event => this.props.filterAuthors(event.target.value)}
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.rootAuthors.author,
    loading: state.rootAuthors.loading,
    filteredAuthors: state.rootAuthors.author
  };
};

const mapDispatchToProps = dispatch => {
  return {
    filterAuthors: query => dispatch(actionCreators.filterAuthors(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
