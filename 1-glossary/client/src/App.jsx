// JS files and Packages
import React from "react";
import request from './requests.js';

// Components
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
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
        <h1>Glossary</h1>
        <List notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;