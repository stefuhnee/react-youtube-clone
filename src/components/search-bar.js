'use strict';

// import react and pull off the property of component as the variable component
import React, { Component } from 'react';

// class component -- defines a new class and gives it access to all of the functionality that React.Component has
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  
  // syntax used for defining methods on a class
  render() {
    return (
      <div className="search-bar">
        <input
        value={this.state.term}
        onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}
  // naming convention on/handle, type of element, type of event

/* functional component
const SearchBar = () => {
  return <input />;
};
*/

export default SearchBar;
