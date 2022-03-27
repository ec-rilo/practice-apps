import React from 'react';

// Components
import NextBtn from './NextBtn.jsx';
import Form from './Form.jsx';
import ConfirmationPage from './ConfirmationPage.jsx';

// axios
import { form_0, form_1, form_2, form_3, confirmation_page } from '../requests.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      viewableForm: 0,
      currForm: 0
    }
    this.updateUser = this.updateUser.bind(this);
    this.createUser = this.createUser.bind(this);
    this.updateViewableForm = this.updateViewableForm.bind(this);
    this.updateStateUser = this.updateStateUser.bind(this);
  }

  updateStateUser() {
    form_0.getUser((err, user) => {
      if (err) {
        console.error(err);
      } else {
        this.setState({
          user,
          data: Object.entries(user)
        });
      }
    });
  }

  updateUser(user) {
    const callback = (err, response) => {
      if (err) {
        console.error(err);
      } else {
        console.log(response);
        this.updateStateUser();
      }
    };

    if (this.state.currForm === 1) {
      form_1.updateUser(user, callback);
    } else if (this.state.currForm === 2) {
      form_2.updateUser(user, callback);
    } else if (this.state.currForm === 3) {
      form_3.updateUser(user, callback);
    }
  }

  createUser() {

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
            user,
            data: Object.entries(user)
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

  componentDidMount() {
    form_0.getUser((err, user) => {
      if (err) {
        console.error(err);
      } else {
        if (!user) {
          this.createUser();
        } else {
          this.setState({
            user
          });
        }
      }
    })
  }

  render() {
    const form0 = (<NextBtn callback={() => {
      if (!this.state.user.checkout_complete) {
        this.updateViewableForm();
      } else {
        window.alert('You have already submitted this form!');
      }
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
      />);
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

    const confirmationPage = (
      <ConfirmationPage data={this.state.data} submitHandler={() => {
        confirmation_page.setCheckoutComplete((err, response) => {
          if (err) {
            console.error(err);
          } else {
            console.log(response);
            this.setState({
              user: {
                checkout_complete: true
              },
              currForm: 0
            })
          }
        })
      }}/>
    );

    return (
      <div>
        <h1>Multi-Step-Checkout</h1>
        {this.state.currForm === 0 && form0}
        {this.state.currForm === 1 && form1}
        {this.state.currForm === 2 && form2}
        {this.state.currForm === 3 && form3}
        {this.state.currForm === 4 && confirmationPage}
      </div>
    );
  }
}

export default App;