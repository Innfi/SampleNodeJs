import React, { Component } from 'react';
import { Link } from 'react-router-dom';


interface LoginState {
    email: string;
    password: string;
    errors: any;
}

class Login extends Component<LoginState> {
    state: LoginState = {
        email: '',
        password: '',
        errors: {}
    };

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        console.log(userData);
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="container">
                <div style={{ marginTop: "4rem" }} className="row">
                    <div className="col s8 offset-s2">
                        <Link to="/" className="btn-flat waves-effect">
                            <i className="material-icons left">keyboard_backspace</i>
                            Back to home
                        </Link>
                        <div className="col s12" style={{ paddingLeft: "11.250px"}}>
                            <h4>
                                <b>Login</b> below
                            </h4>
                            <p className="grey-text text-darken-1">
                                <Link to="/register">Register</Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input onChange={this.onChange} 
                                        value={this.state.email} 
                                        error={errors.email}
                                        id="email" 
                                        type="email" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}