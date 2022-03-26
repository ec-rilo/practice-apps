import React from 'react';

// Components
import NextBtn from './NextBtn.jsx';
import Form from './Form.jsx';

// axios
import { form_0, form_1, form_2, form_3 } from '../requests.js';

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
    } else if (this.state.currForm === 3) {
      form_3.updateUser(user, (err, response) => {
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

      const form0 = (<NextBtn callback={() => {
        this.updateViewableForm();
        this.createUser(this.state.user);
      }} />);

      const form1 = (
        <Form
        formNum={this.state.currForm}
        callback={(user) => {
          this.updateUser(user);
          this.updateViewableForm();
        }}
        newState={
          {
            name: '',
            email: '',
            password: ''
          }
        }
        data={
          [
            {
              propName: 'name',
              title: 'Name: ',
              placeholderName: 'Name',
            },
            {
              propName: 'email',
              title: 'Email: ',
              placeholderName: 'Email',
            },
            {
              propName: 'password',
              title: 'Password: ',
              placeholderName: 'Password',
            }
          ]
        }
        />
      );

      const form2 =
      (<Form
      formNum={this.state.currForm}
      callback={(user) => {
        this.updateUser(user);
        this.updateViewableForm();
      }}
      newState={
        {
          line_1: '',
          line_2: '',
          city: '',
          state: '',
          zip_shipping: '',
          phone: '',
        }
      }
      data={
        [
          {
            propName: 'line_1',
            title: 'Line 1: ',
            placeholderName: 'Line 1',
          },
          {
            propName: 'line_2',
            title: 'Line 2: ',
            placeholderName: 'Line 2',
          },
          {
            propName: 'city',
            title: 'City: ',
            placeholderName: 'City',
          },
          {
            propName: 'state',
            title: 'State: ',
            placeholderName: 'State',
          },
          {
            propName: 'zip_shipping',
            title: 'Zip: ',
            placeholderName: 'Zip',
          },
          {
            propName: 'phone',
            title: 'Phone: ',
            placeholderName: 'Phone',
          }
        ]
      }
      />);

      const form3 =
      (<Form
      formNum={this.state.currForm}
      callback={(user) => {
        this.updateUser(user);
        this.updateViewableForm();
      }}
      newState={
        {
          credit_card: '',
          expiry_date: '',
          cvv: '',
          zip_billing: '',
        }
      }
      data={
        [
          {
            propName: 'credit_card',
            title: 'Credit Card Number: ',
            placeholderName: 'Credit Card Number',
          },
          {
            propName: 'expiry_date',
            title: 'Expiration Date: ',
            placeholderName: 'Expiration Date',
          },
          {
            propName: 'cvv',
            title: 'CVV: ',
            placeholderName: 'CVV',
          },
          {
            propName: 'zip_billing',
            title: 'ZIP: ',
            placeholderName: 'ZIP',
          }
        ]
      }
      />);

    return (
      <div>
        <h1>Multi-Step-Checkout</h1>
        {this.state.currForm === 0 && form0}
        {this.state.currForm === 1 && form1}
        {this.state.currForm === 2 && form2}
        {this.state.currForm === 3 && form3}

      </div>
    );
  }
}

export default App;