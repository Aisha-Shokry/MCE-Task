import React, { Component } from 'react'
import {Login} from '../../redux/actions/AuthActions'
import {Form, Button,Input,FormGroup} from 'reactstrap'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    onEnterDate=(e)=>{
        this.setState({ [e.target.name]: e.target.value });
    }
    onLogin=()=>{
    this.props.Login(this.state.username)
        console.log('loggedIn')   
        this.props.history.push('/UserBoard/Profile')

    }
  render() {
    return (
        <Form>
        <FormGroup>
          <Input type="text" name="username" value={this.state.username} onChange={this.onEnterDate} placeholder="Enter your username" />
        </FormGroup>
        <FormGroup>
          <Input type="password" name="password" value={this.state.password} onChange={this.onEnterDate}  placeholder="Enter your password" />
        </FormGroup>
    
        <Button onClick={this.onLogin}>Login</Button>
      </Form>
    )
  }
}
LoginForm.propTypes = {
  Login: PropTypes.func.isRequired,
};
const mapStateToProps=(state)=>({
    isAuth: state.isAuth,
})

 export default connect(mapStateToProps, {Login})(LoginForm)