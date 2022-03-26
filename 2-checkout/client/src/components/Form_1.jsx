import React from 'react';
import { form_0 } from '../requests.js';

// Components
import InputBox from './InputBox.jsx';

class Form_1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      pass: ''
    }
  }

  componentDidMount() {
    form_0.getUser((err, user) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          name: user.name,
          email: user.email,
          password: user.password,
        });
      }
    });
  }

  render() {
    const { callback } = this.props;

    const data = [
      {
        propName: 'name',
        title: 'Name: ',
        placeholderName: 'Name',
        defaultVal: this.state.name,
        callback: (e) => this.setState({ name: e.target.value })
      },
      {
        propName: 'email',
        title: 'Email: ',
        placeholderName: 'Email',
        defaultVal: this.state.email,
        callback: (e) => this.setState({ email: e.target.value })
      },
      {
        propName: 'password',
        title: 'Password: ',
        placeholderName: 'Password',
        defaultVal: this.state.password,
        callback: (e) => this.setState({ password: e.target.value })
      }
    ];

    return(
      <div>
        <h1>Form 1</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          const {name, email, password} = this.state;

          if (name && email && password) {
            callback(name, email, password);
          } else {
            window.alert('ALL fields must be filled out in order to submit!');
          }
        }}>
          <ul>
          {data.map((data, index) => {
              const prop = data.propName;
              return (
                <InputBox
                  key={index}
                  title={data.title}
                  placeholderName={data.placeholderName}
                  defaultVal={data.defaultVal}
                  callback={(e) => this.setState({ [prop]: e.target.value })}
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

export default Form_1;