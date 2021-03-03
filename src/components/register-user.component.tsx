import React, { Component, TextareaHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { isConstructorDeclaration } from 'typescript';
import axios from 'axios';

// defines the type of the props, if any. could also pass in {}
interface IProps {

}

// defines the type of the state
interface RegisterState {
    username: string;
}

class RegisterUser extends React.Component<IProps, RegisterState> {
    constructor(props: IProps) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            username: ''
        }
    }

    onChangeUsername(event: React.FormEvent<HTMLInputElement>) {
        const target = event.target as HTMLInputElement;
        this.setState({
            username: target.value
        });
    }

    onSubmit(event: React.FormEvent){
        event.preventDefault();

        const user = { 
            username: this.state.username 
        }

        console.log(user)
        axios.post('http://localhost:5000/users/add', user)
        .then(result => console.log(result.data))
        .catch(err => console.log(err));

        this.setState({
            username: ""
        })
    }

    render(){
        return(
            <div className="container">
                <h3>Create Account</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Username: </label>
                    <input  type="text"
                        style={{width: '50%'}}
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                </div>
                <div className="form-group">
                    <input type="submit" value="Register" className="btn btn-primary" />
                </div>
                </form>
            </div>
        );      
    }
}

export default RegisterUser;