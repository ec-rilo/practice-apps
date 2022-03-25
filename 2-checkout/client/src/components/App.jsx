import React from 'react';

// Components
import NextBtn from './NextBtn.jsx';

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
    this.updateViewableForm = this.updateViewableForm(this);
  }

  updateUser(user) {

  }

  createUser(user) {

  }

  updateViewableForm() {

  }

  render() {
    return (
      <div>
        <h1>Multi-Step-Checkout</h1>
      </div>
    );
  }
}

export default App;