import * as actionTypes from "../actions/actionTypes";

const initialState = {
  authors: [],
  filteredAuthors: [],
  loading: true
};

const authors = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_AUTHORS:
      return {
        ...state,
        authors: state.authors.concat(action.payload),
        filteredAuthors: state.filteredAuthors.concat(action.payload),
        loading: false
      };
    case actionTypes.FILTER_AUTHORS:
      let filterAuthors = query => {
        query = query.toLowerCase();
        let filteredAuthors = this.state.authors.filter(author => {
          return `${author.first_name} ${author.last_name}`
            .toLowerCase()
            .includes(query);
        });
      };
      return {
        ...state,
        filteredAuthors: filterAuthors,
        loading: false
      };

    default:
      return state;
  }
};

export default authors;
