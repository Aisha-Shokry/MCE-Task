import React, { Component } from "react";
import { Login } from "../../redux/actions/AuthActions";
import { Form, Button, Input, FormGroup } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: { name: "", password: "" },
      showsucc: false,
      formErrors: {
        name: null,
        password: null,
      },
      showExpAlert: false,
    };
  }

  closealert = (e) => {
    this.setState({ showExpAlert: false });
  };
  onEnterData = (e) => {
    const { name, value } = e.target;
    const { form, formErrors } = this.state;
    let formObj = {};

    formObj = {
      ...form,
      [name]: value,
    };

    this.setState({ form: formObj }, () => {
      if (!Object.keys(formErrors).includes(name)) return;
      let formErrorsObj = {};
      if (name === "name" || name === "password") {
        let refValue = this.state.form[name === "name" ? "password" : "name"];
        const errorMsg = this.validateField(name, value, refValue);
        formErrorsObj = { ...formErrors, [name]: errorMsg };
      } else {
        const errorMsg = this.validateField(
          name,
          name === "name" ? this.state.form["name"] : value
        );
        formErrorsObj = { ...formErrors, [name]: errorMsg };
      }
      this.setState({ formErrors: formErrorsObj });
    });
  };

  validateField = (name, value, refValue) => {
    let errorMsg = null;
    switch (name) {
      case "name":
        if (!value) errorMsg = "*Name is required";
        else if (value.length < 3)
          errorMsg = "Name must be at least 3 Characters";
        break;
      case "password":
        if (!value) errorMsg = "*Password is required";
        break;

      default:
        break;
    }
    return errorMsg;
  };

  validateForm = (form, formErrors, validateFunc) => {
    const errorObj = {};
    Object.keys(formErrors).map((x) => {
      let refValue = null;
      const msg = validateFunc(x, form[x], refValue);
      if (msg) errorObj[x] = msg;
    });
    return errorObj;
  };

  onLogin = () => {
    const { form, formErrors } = this.state;
    const errorObj = this.validateForm(form, formErrors, this.validateField);
    if (Object.keys(errorObj).length !== 0) {
      this.setState({ formErrors: { ...formErrors, ...errorObj } });
      return false;
    } else {
      this.props.Login(form.name);
      console.log("loggedIn");
      this.props.history.push("/UserBoard/Profile");
    }
  };
  render() {
    const { form, formErrors } = this.state;
    return (
      <Form>
        <FormGroup>
          <Input
            type="text"
            name="name"
            value={form.name}
            onChange={this.onEnterData}
            placeholder="Enter your username"
          />
          {formErrors.name && (
            <span className="inquiryerr">{formErrors.name}</span>
          )}
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            value={form.password}
            onChange={this.onEnterData}
            placeholder="Enter your password"
          />
          {formErrors.password && (
            <span className="inquiryerr">{formErrors.password}</span>
          )}
        </FormGroup>

        <Button onClick={this.onLogin}>Login</Button>
      </Form>
    );
  }
}
LoginForm.propTypes = {
  Login: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { Login })(LoginForm);
