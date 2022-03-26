import React from 'react';

// Components
import NextBtn from './NextBtn.jsx';
import Form_1 from './Form_1.jsx';
import Form_2 from './Form_2.jsx';

// axios
import { form_0, form_1 } from '../requests.js';

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
    if (this.state.currForm === 1) {
      form_1.updateUser(user, (err, response) => {
        if (err) {
          console.log(err);
        } else {
          console.log(response);
        }
      });
    }
  }

  createUser(user) {

    // RESEARCH PROMISES & ASYNC AWAIT AFTER TA

    form_0.getUser((err, user) => {
      if (err) {
        console.error(err);
      } else {
        if (!user) {
          form_0.addUser((err, response) => {
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

        {this.state.currForm === 1
        &&
        <Form_1 callback={(name, email, password) => {
          const user = {
            name,
            email,
            password,
            session_id: this.state.user.session_id
          };
          this.updateUser(user);
          this.updateViewableForm();
        }
      }
        userName={this.state.user.name}
        userEmail={this.state.user.email}
        userPass={this.state.user.password}
        />}

        {this.state.currForm === 2
        &&
        <Form_2 callback={(user) => {
          this.updateUser(user);
          this.updateViewableForm();
        }
      }
        userName={this.state.user.name}
        userEmail={this.state.user.email}
        userPass={this.state.user.password}
        />}
      </div>
    );
  }
}

export default App;