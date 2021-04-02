import React, { Component, TextareaHTMLAttributes } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { UserWithErrorMessage } from '../viewModels/UserWithErrorMessage';

// defines the type of the props, if any. could also pass in {}
interface IProps {

}

// defines the type of the state
interface RegisterState {
    username: string;
    password: string;
    redirect: boolean;
    usernameError: string;
}

class RegisterUser extends React.Component<IProps, RegisterState> {
    constructor(props: IProps) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            username: '',
            password: '',
            redirect: false,
            usernameError: ''
        }
    }

    handleRedirect() {
        this.setState({
            redirect: true
        })
        window.location.reload();
    }

    onChangeUsername(event: React.FormEvent<HTMLInputElement>) {
        const target = event.target as HTMLInputElement;
        this.setState({
            username: target.value
        });
    }

    onChangePassword(event: React.FormEvent<HTMLInputElement>) {
        const target = event.target as HTMLInputElement;
        this.setState({
            password: target.value
        });
    }

    onSubmit(event: React.FormEvent){
        event.preventDefault();
        this.setState({
            usernameError: ''
        })

        const user = { 
            username: this.state.username, 
            password: this.state.password 
        }
        try{
            axios.post<UserWithErrorMessage>('http://localhost:5000/users/add', user)
            .then(result => {
                console.log(result.data)
                if(result.data.error !== ""){
                    if(result.data.error.includes("username is taken")){
                        this.setState({usernameError: result.data.error});
                    }
                    else {
                        alert(result.data.error);
                    }
                }
                else if(result.data.user === null){
                    alert("unexpected error occured");
                }
                else{
                    localStorage.setItem('user', result.data.user.username);
                    this.handleRedirect();
                }
            })
            .catch(err => console.log(err));
        }
        catch (err){
            console.log(err)
        }
    }

    render(){
        return(
            <div className="container" style={{marginLeft: 'auto', marginRight: 'auto', width: '30%'}}>
                { this.state.redirect ? (<Redirect push to='/'/>) : null }
                <h3>Create Account</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Username: </label>
                    <input  type="text"
                        style={{width: '90%'}}
                        required
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                        {this.state.usernameError.length > 0 &&
                        <div style={{color: 'red', fontWeight: 'bold', paddingBottom: '10px'}}>
                            {this.state.usernameError}
                        </div>
                    }
                    <label>Password: </label>
                    <input  type="text"
                        style={{width: '90%'}}
                        required
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChangePassword}
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