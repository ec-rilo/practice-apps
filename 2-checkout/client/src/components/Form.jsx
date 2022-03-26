import React from 'react';
import { form_0 } from '../requests.js';

// Components
import InputBox from './InputBox.jsx';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.newState;

    this.allKeysArePopulated = this.allKeysArePopulated.bind(this);
  }

  allKeysArePopulated(user) {
    let allArePopulated = true;
    for (let key in user) {
      if (user[key] === '') {
        allArePopulated = false;
        break;
      }
    }

    return allArePopulated;
  }

  componentDidMount() {
    form_0.getUser((err, user) => {
      if (err) {
        console.log(err);
      } else {
        const newUser = Object.assign({}, user);

        for (let key in newUser) {
          const newKey = 'default_' + key;
          newUser[newKey] = user[key];
        }

        this.setState(newUser);
      }
    });
  }

  render() {
    const { callback, data } = this.props;

    return(
      <div>
        <h1>Form {this.props.formNum}</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          const user = this.state;
          const allKeysArePopulated = this.allKeysArePopulated(user);

          if (allKeysArePopulated) {
            callback(user);
          } else {
            console.log(this.state);
            window.alert('ALL fields must be filled out in order to submit!');
          }
        }}>
          <ul>
            {data.map((data, index) => {
              const key = data.propName
              const defaultKey = 'default_' + key;
              return (
                <InputBox
                  key={index}
                  title={data.title}
                  placeholderName={data.placeholderName}
                  defaultVal={this.state[defaultKey]}
                  callback={(e) => this.setState({ [key]: e.target.value })}
                />
              );
            })}
          </ul>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;