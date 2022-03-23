import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }

  render() {
    const { filterNotes } = this.props;

    return(
      <form onSubmit={(e) => {
        e.preventDefault();
        filterNotes(this.state.text);
      }}>
        <input type='text' onChange={(e) => this.setState({ text: e.target.value })}/>
        <button type='submit'>Search</button>
      </form>
    );
  }
}

export default SearchForm;