// JS files and Packages
import React from "react";
import request from './requests.js';

// Components
import List from './components/List.jsx';
import Form from './components/Form.jsx';
import SearchForm from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      viewableNotes: []
    }

    this.addNote = this.addNote.bind(this);
    this.filterNotes = this.filterNotes.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  filterNotes(word) {
    word = word.toLowerCase();

    let notes = this.state.notes.slice();
    let singleNoteArr = [];

    for(let i = 0; i < notes.length; i++) {
      const currNoteWord = notes[i].word.toLowerCase();
      if (currNoteWord === word) {
        singleNoteArr.push(notes[i]);
        break;
      }
    }

    if (singleNoteArr.length !== 0) {
      this.setState({
        viewableNotes: singleNoteArr
      });
    } else {
      this.setState({
        viewableNotes: this.state.notes
      });
    }
  }

  addNote(word, definition) {
    const wordData = { word, definition };

    if (word && definition) {
      request.postNote(wordData, (err, response) => {
        if (err) {
          console.error(err);
        } else {
          request.fetchNotes((err, data) => {
            if (err) {
              console.error(err);
            } else {
              this.setState({
                notes: data,
                viewableNotes: data
              });
            }
          });
        }
      });
    } else {
      console.log('You must enter a word AND definition!');
    }
  }

  removeNote(id) {
    request.deleteNote(id, (err, response) => {
      if (err) {
        console.error(err);
      } else {
        request.fetchNotes((err, data) => {
          if (err) {
            console.error(err);
          } else {
            this.setState({
              notes: data,
              viewableNotes: data
            });
          }
        });
      }
    });
  }

  editNote(word, definition, id) {
    if (word && definition) {

    } else {
      console.log('To edit a note please enter a word AND definition!');
    }
  }

  componentDidMount() {
    request.fetchNotes((err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log(data);
        this.setState({
          notes: data,
          viewableNotes: data
        });
      }
    });
  }

  render() {
    return(
      <div>
        <h1>Add a Note</h1>
        <Form addNote={this.addNote}/>
        <h1>Search for Note</h1>
        <SearchForm filterNotes={this.filterNotes}/>
        <h1>Glossary</h1>
        <List notes={this.state.viewableNotes} removeNote={this.removeNote}/>
      </div>
    );
  }
}

export default App;