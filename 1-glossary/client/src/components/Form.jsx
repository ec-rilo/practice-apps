import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: '',
      definition: ''
    }
  }

  render() {
    const {addNote} = this.props;
    return(
      <form onSubmit={(e) => {
        e.preventDefault();
        addNote(this.state.word, this.state.definition);
      }}>
        <input
        type='text'
        placeholder='Word'
        onChange={(e) => this.setState({ word: e.target.value })}
        />
        <input
        type='text'
        placeholder='Definition'
        onChange={(e) => this.setState({ definition: e.target.value })}
        />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default Form;