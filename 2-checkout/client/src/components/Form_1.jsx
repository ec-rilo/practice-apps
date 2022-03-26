import React from 'react';
import { form_0 } from '../requests.js';

const InputBox = ({ title, ph, dv, callback }) => (
  <li>
    <p>Name: </p>
    <input
    type='text'
    placeholder='Name'
    defaultValue={this.state.phName}
    onChange={(e) => callback(e)}
    />
  </li>
);

class Form_1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      pass: '',
      phName: '',
      phEmail: '',
      phPass: ''
    }
  }

  componentDidMount() {
    form_0.getUser((err, user) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          phName: user.name,
          phEmail: user.email,
          phPass: user.password,
          name: user.name,
          email: user.email,
          pass: user.password,
        });
      }
    });
  }

  render() {
    const { callback } = this.props;

    return(
      <div>
        <h1>Form 1</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          const {name, email, pass} = this.state;

          if (name && email && pass) {
            callback(name, email, pass);
          } else {
            window.alert('ALL fields must be filled out in order to submit!');
          }
        }}>
          <ul>

            <li>
              <p>Name: </p>
              <input
              type='text'
              placeholder='Name'
              defaultValue={this.state.phName}
              onChange={(e) => this.setState({ name: e.target.value })}/>
            </li>
            <li>
            <p>Email: </p>
              <input
              type='text'
              placeholder='Email'
              defaultValue={this.state.phEmail}
              onChange={(e) => this.setState({ email: e.target.value })}/>
            </li>
            <li>
              <p>Password: </p>
              <input
              type='text'
              placeholder='Password'
              defaultValue={this.state.phPass}
              onChange={(e) => this.setState({ pass: e.target.value })}/>
            </li>
          </ul>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form_1;