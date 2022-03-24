import React from 'react';

class PopupCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: '',
      definition: ''
    }
  }

  render() {
    return(
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.editNote(this.state.word, this.state.definition, this.props.note._id);
      }}>
        <p>Edit Word</p>
        <input
        type='text'
        placeholder='Word'
        onChange={(e) => this.setState({ word: e.target.value })}
        />
        <p>Edit Definition</p>
        <input
        type='text'
        placeholder='definition'
        onChange={(e) => this.setState({ definition: e.target.value })}
        />
      </form>
    );
  }
}

export default PopupCard;