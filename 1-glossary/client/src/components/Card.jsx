import React from 'react';

import PopupCard from './PopupCard.jsx';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popupActive: false
    }
  }

  render() {
    const { note, removeNote, editNote } = this.props;

    return(
      <div>
        <h2>{note.word}</h2>
        <p>{note.definition}</p>
        <div>
          <button onClick={() => this.setState({ popupActive: !this.state.popupActive })}>Edit</button>
          <button onClick={() => removeNote(note._id)}>Delete</button>
        </div>
        {this.state.popupActive && <PopupCard note={note} editNote={editNote}/>}
      </div>
    );
  }
}

export default Card;