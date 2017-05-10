// @flow
import React, { Component } from 'react';
// need to figure out how to import PropTypes
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import LoginForm from '../../components/LoginForm';
import Navbar from '../../components/Navbar';
// import { Field, reduxForm } from 'redux-form';
// import { Link } from 'react-router-dom';
// import { css, StyleSheet } from 'aphrodite';
// import Input from '../../components/Input';

// const styles = StyleSheet.create({
//   card: {
//     maxWidth: '500px',
//     padding: '3rem 4rem',
//     margin: '2rem auto',
//   },
// });

// type Props = {
//   onSubmit: () => void,
//   handleSubmit: () => void,
//   submitting: boolean,
// }

type Props = {
  login: () => void,
}

class Login extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  props: Props

  handleLogin = (data) => this.props.login(data, this.context.router);

  render() {
    return (
      <div style={{ flex: '1' }}>
        <Navbar />
        <LoginForm onSubmit={this.handleLogin} />
      </div>
    );
  }
}

export default connect(null, { login })(Login);

// class LoginForm extends Component {
  // props: Props

  // This function is the one you're passing into the form, and it'll be called
  // to handle form submission.
  // Do anything you want here, I think

  // handleSubmit = (data) => this.props.onSubmit(data);

  // handleSubmit: (data) => this.props.onSubmit(data);

//   handleSubmit = (data) => { console.log('submitted!') }
//
//
//   render() {
//     // Correct here, handleSubmit is injected by the call to reduxForm()
//     // at the bottom.
//     const { handleSubmit, submitting } = this.props;
//
//     return (
//       <form
//         className={`card ${css(styles.card)}`}
//         onSubmit={handleSubmit(this.handleSubmit)}
//       >
//         <h3 style={{ marginBottom: '2rem', textAlign: 'center' }}>Login to Keg Cop R</h3>
//         <Field name="email" type="text" component={Input} placeholder="Email" />
//         <Field name="password" type="password" component={Input} placeholder="Password" />
//         <button
//           type="submit"
//           disabled={submitting}
//           className="btn btn-block btn-primary"
//         >
//           {submitting ? 'Logging in...' : 'Login'}
//         </button>
//         <hr style={{ margin: '2rem 0' }} />
//         <Link to="/signup" className="btn btn-block btn-secondary">
//           Create a new account
//         </Link>
//       </form>
//     );
//   }
// }
//
// const validate = (values) => {
//   const errors = {};
//   if (!values.email) {
//     errors.email = 'Required';
//   }
//   if (!values.password) {
//     errors.password = 'Required';
//   }
//   return errors;
// };
//
// export default reduxForm({
//   form: 'login',
//   validate,
// })(LoginForm);
