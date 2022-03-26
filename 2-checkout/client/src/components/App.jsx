import React from 'react';

// Components
import NextBtn from './NextBtn.jsx';

// axios
import requests from '../requests.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        session_id: null,
        name: null,
        email: null,
        password: null,
        line_1: null,
        line_2: null,
        city: null,
        state: null,
        zip_shipping: null,
        phone: null,
        credit_card: null,
        cc_expiry_date: null,
        cc_cvv: null,
        zip_billing: null,
        checkout_complete: 0
      },
      viewableForm: 0,
      currForm: 0
    }
    this.updateUser = this.updateUser.bind(this);
    this.createUser = this.createUser.bind(this);
    this.updateViewableForm = this.updateViewableForm.bind(this);
  }

  updateUser(user) {

  }

  createUser(user) {
    requests.getUser((err, user) => {
      if (err) {
        console.error(err);
      } else {
        if (!user) {
          requests.addUser((err, response) => {
            if (err) {
              console.error(err);
            } else {
              console.log(response);
            }
          });
        } else {
          this.setState({
            user
          });
        }
      }
    });
  }

  updateViewableForm() {
    const currForm = this.state.currForm + 1;
    this.setState({
      currForm
    });
  }

  render() {
    return (
      <div>
        <h1>Multi-Step-Checkout</h1>
        {this.state.currForm === 0
        &&
        <NextBtn callback={() => {
          this.updateViewableForm();
          this.createUser(this.state.user);
        }}
        />}
        {/* {this.state.currForm === 1
        &&
        <NextBtn callback={() => {
          this.updateViewableForm();
          this.createUser(this.state.user);
        }}
        />} */}
      </div>
    );
  }
}

export default App;