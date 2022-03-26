import React from 'react';
import { form_0 } from '../requests.js';

// Components
import InputBox from './InputBox.jsx';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.newState;

    this.allKeysArePopulated = this.allKeysArePopulated.bind(this);
    this.addDefaultKeys = this.addDefaultKeys.bind(this);
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

  addDefaultKeys(user) {
    for (let key in user) {
      const newKey = 'default_' + key;
      user[newKey] = user[key];
    }

    return user;
  }

  addKeys(target, source) {
    this.props.data.forEach((obj) => {
      const key = obj.propName;
      target[key] = source[key];
    });
  }

  componentDidMount() {
    form_0.getUser((err, user) => {
      if (err) {
        console.log(err);
      } else {
        const newUser = {};

        this.addKeys(newUser, user);

        this.addDefaultKeys(newUser);
        newUser.formSubmitted = false;

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
            this.setState({
              formSubmitted: true
            })
            callback(user);
          } else {
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