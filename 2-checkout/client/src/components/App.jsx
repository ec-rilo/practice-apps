import React from 'react';

// Components
import NextBtn from './NextBtn.jsx';
import Form_1 from './Form_1.jsx';
import Form_2 from './Form_2.jsx';

// axios
import { form_0, form_1, form_2 } from '../requests.js';

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
          console.error(err);
        } else {
          console.log(response);
        }
      });
    } else if (this.state.currForm === 2) {
      form_2.updateUser(user, (err, response) => {
        if(err) {
          console.error(err);
        } else {
          console.log(response);
        }
      })
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
    let form;

    if (this.state.currForm === 0) {
      form = (<NextBtn callback={() => {
        this.updateViewableForm();
        this.createUser(this.state.user);
      }} />);
    } else if (this.state.currForm === 1) {
      form =
      (<Form_1 callback={(user) => {
          this.updateUser(user);
          this.updateViewableForm();
        }
      } />);
    } else if (this.state.currForm === 2) {
      form =
      (<Form_2 callback={(user) => {
        this.updateUser(user);
        this.updateViewableForm();
      }
    }/>);
    }

    return (
      <div>
        <h1>Multi-Step-Checkout</h1>
        {form}
      </div>
    );
  }
}

export default App;