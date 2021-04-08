import React, { Component } from 'react';
import Map from './map.component';
import EditPin from './edit-pin.component';
import { Redirect } from 'react-router-dom';
import userStore from '../store/UserStore';

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

    componentWillMount() {
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

    render(){
        console.log("RENDER HOME: " + this.state.username);
        if (this.state.username == "" 
        || this.state.username == undefined 
        || this.state.username == null) {
            return (
                <Redirect push to='/register' />
            );
        }
        else {
            return (
                <div id="mapbox" className="text-center">
                        <EditPin></EditPin>
                        <Map></Map>
                </div>
            );
        }
    }
}