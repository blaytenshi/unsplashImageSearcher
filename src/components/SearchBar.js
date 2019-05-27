import React from "react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };

    this.onInputChangeUnboundThis.bind(this);
  }

  onInputChangeUnboundThis(event) {
    console.log("THIS", this); // logging out 'this' will show that it's 'undefined'
    console.log("EVENT VALUE", event.target.value);
    // this doesn't work! because there's no reference to 'this' for the onInputChangeUnbound() function
    // this is due to the fact that the onInputChange function has no 'this'
    // explicityly defined inside the function.
    this.setState({
      term: event.target.value
    });
    // Q: What if i wanna use this function format?
    // A: Then you would have to add the line below in the
    //    constructor() function of this component:
    //    onInputChange.bind(this);
  }

  onInputChangeBoundThis = event => {
    // this will actually log out the <SearchBar> component itself
    // that's because arrow functions implicitly binds the 'this' of wherever the
    // function is declared. Since this onInputChangeBoundThis() is declared inside
    // the SearchBar class, the 'this' of the SearchBar class is bound to this
    // function
    console.log("THIS", this);
    console.log("EVENT VALUE", event.target.value);
    this.setState({
      term: event.target.value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.handleSearchWithTerm(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              value={this.state.term}
              type="text"
              onChange={this.onInputChangeBoundThis}
            />
          </div>
        </form>
      </div>
    );
  }
}
