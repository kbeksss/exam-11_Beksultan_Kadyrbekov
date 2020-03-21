import React, {Component} from 'react';
import {Button, Col, Form, FormGroup} from "reactstrap";
import {connect} from "react-redux";
import {registerUser} from "../../store/actions/usersActions";
import FormElement from "../../components/UI/Form/FormElement";

class Register extends Component {
    state = {
        username: '',
        password: '',
        name: '',
        phone: ''
    };
    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    submitFormHandler = (e) => {
        e.preventDefault();
        this.props.registerUser({...this.state});
    };
    getFieldError = fieldName => {

        try{
            return this.props.error.errors[fieldName].message;
        } catch(e){
            return undefined;
        }
    };
    render() {
        return (
            <>
                <h2>Register new user</h2>
                <Form onSubmit={this.submitFormHandler}>
                    <FormElement
                        propertyName='username'
                        title='Username'
                        value={this.state.username}
                        onChange={this.inputChangeHandler}
                        error={this.getFieldError('username')}
                        placeholder='Enter your username'
                        autoComplete='new-username'
                    />
                    <FormElement
                        propertyName='password'
                        title='Password'
                        type='password'
                        value={this.state.password}
                        onChange={this.inputChangeHandler}
                        error={this.getFieldError('password')}
                        placeholder='Enter your password'
                        autoComplete='new-password'
                    />
                    <FormElement
                        propertyName='name'
                        title='Your name'
                        type='text'
                        value={this.state.name}
                        onChange={this.inputChangeHandler}
                        error={this.getFieldError('name')}
                        placeholder='Enter you name'
                    />
                    <FormElement
                        propertyName='phone'
                        title='Your phone number'
                        value={this.state.phone}
                        type='text'
                        onChange={this.inputChangeHandler}
                        error={this.getFieldError('name')}
                        placeholder='Enter your phone'
                    />
                    <FormGroup>
                        <Col sm={{offset: 2, size: 10}}>
                            <Button type='submit' color='primary'>
                                Register
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </>
        );
    }
}

const mapStateToProps = state => ({
    error: state.users.registerError,
    loading: state.users.registerLoading,
});

const mapDispatchToProps = dispatch => ({
    registerUser: userData => dispatch(registerUser(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register) ;
