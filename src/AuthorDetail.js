import React, { Component } from "react";
import axios from "axios";
import * as actionCreators from "./store/actions/index";
import { connect } from "react-redux";
// Components
import BookTable from "./BookTable";
import Loading from "./Loading";

// const instance = axios.create({
//   baseURL: "https://the-index-api.herokuapp.com"
// });

class AuthorDetail extends Component {
  // state = {
  //   author: null,
  //   loading: true
  // };

  componentDidMount() {
    const authorID = this.props.match.params.authorID;
    this.props.fetchAuthorDetail(authorID);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.authorID !== this.props.match.params.authorID) {
      this.getAuthor();
    }
  }

  // getAuthor = () => {
  //   const authorID = this.props.match.params.authorID;
  //   this.props.fetchAuthorDetail(authorID);
  // };

  render() {
    if (this.props.loading) {
      return <Loading />;
    } else {
      const author = this.props.author;
      const authorName = `${author.first_name} ${author.last_name}`;
      return (
        <div className="author">
          <div>
            <h3>{authorName}</h3>
            <img
              src={author.imageUrl}
              className="img-thumbnail img-fluid"
              alt={authorName}
            />
          </div>
          <BookTable books={author.books} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    author: state.rootAuthor.author,
    loading: state.rootAuthor.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAuthorDetail: authorID =>
      dispatch(actionCreators.fetchAuthorDetail(authorID))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorDetail);
