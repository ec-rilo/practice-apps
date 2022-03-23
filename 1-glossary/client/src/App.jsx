// JS files and Packages
import React from "react";
import request from './requests.js';

// Components
import List from './components/List.jsx';
import Form from './components/Form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    }

    this.addNote = this.addNote.bind(this);
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
              console.log(data);
              this.setState({
                notes: data
              });
            }
          });
        }
      });
    } else {
      console.log('You must enter a word AND definition!');
    }
  }

  componentDidMount() {
    request.fetchNotes((err, data) => {
      if (err) {
        console.error(err);
      } else {
        this.setState({
          notes: data
        });
      }
    });
  }

  render() {
    return(
      <div>
        <Form addNote={this.addNote}/>
        <h1>Glossary</h1>
        <List notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;