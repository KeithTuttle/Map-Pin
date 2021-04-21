import React, { Component } from 'react';
import Map from './map.component';
import EditPin from './edit-pin.component';
import { Redirect } from 'react-router-dom';
import userStore from '../store/UserStore';
import * as UserActions from '../store/actions/userActions';
import axios from 'axios';
import { User } from '../viewModels/UserWithErrorMessage';

interface IProps {

}

// defines the type of the state
interface HomeState {
    username: string | undefined;
}

export default class Home extends React.Component<IProps, HomeState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            username: userStore.getUser()?.username,
        }
    }

    componentDidMount() {
        userStore.on("change", () => {
            let name = userStore.getUser()?.username;
            if (name == undefined) {
                console.log("home name is undefined - in if")
                this.setState({
                    username: ''
                });
            }
            else{
                console.log("home set the state");
                this.setState({
                    username: name
                });
                console.log("home state: " + this.state.username);
            }
            
        });
    }

    getUserFromLocalStorage(username: string){
        console.log("getting user from local storage")
        axios.get<User>(`http://localhost:5000/users/username/${username}`)
            .then(result => {
                console.log("result from getting user from local storage: " + result.data);
                UserActions.setUser(result.data);
                console.log(userStore.getUser);
            })
        .catch(err => console.log(err));
    }

    render(){
        if ((this.state.username == "" 
        || this.state.username == undefined 
        || this.state.username == null)
        && localStorage.getItem("user") == null) {
            return (
                <Redirect push to='/register' />
            );
        }
        else {
            var username = localStorage.getItem("user");
            if(username != null && userStore.getUser() == null){
                this.getUserFromLocalStorage(username);
            }
            return (
                <div id="mapbox" className="text-center">
                        <EditPin></EditPin>
                        <Map></Map>
                </div>
            );
        }
    }
}