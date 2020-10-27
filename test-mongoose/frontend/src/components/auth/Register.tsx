import React, { Component, MouseEvent, ReactNode } from 'react';
import { Link } from 'react-router-dom';


interface RegisterState {
    name: string;
    email: string;
    password: string;
    password2: string;
    errors: any;
}

class Register extends Component<RegisterState> {
    state: RegisterState = {
        name: '',
        email: '',
        password: '',
        password2: '',
        errors: {}
    };

    onChange = (e: any) => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = (e: any) => { 
        e.preventDefault();

        const newUser: object = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        console.log(newUser);
    }

    render(): ReactNode {
        const { errors } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col s8 offset-s2">
                        <Link to="/" className="btn-flat waves-effect">
                            <i className="material-icons left">keyboard_backspace</i>
                            back to home
                        </Link>
                        <div className="col s12" style={{ paddingLeft: "11.250.px"}}>
                            <h4>
                                <b>Register</b> below
                            </h4>
                            <p className="grey-text text-darken-1">
                                Already have an account? <Link to="/login">Login</Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input onChange={this.onChange} 
                                        value={this.state.name} 
                                        id="name" 
                                        type="text" />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={this.onChange} 
                                        value={this.state.email} 
                                        id="email" 
                                        type="email" />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={this.onChange} 
                                        value={this.state.password} 
                                        id="password" 
                                        type="password" />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={this.onChange} 
                                        value={this.state.password2} 
                                        id="password2" 
                                        type="password" />
                                <label htmlFor="password">Confirm Password</label>
                            </div>
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <button style={{width: "150px", borderRadius: "3px",
                                        letterSpacing: "1.5px", marginTop: "1rem" }} 
                                    type="submit" className="btn btn-large waves-effect 
                                        waves-light hoverable blue accent-3">
                                Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;