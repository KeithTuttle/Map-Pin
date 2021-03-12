import React, { Component } from 'react';
import Map from './map.component';
import EditPin from './edit-pin.component';

export default class Home extends Component {
    render(){
        return(
            <div id="mapbox">
                <EditPin></EditPin>
                <Map></Map>
            </div>
        );
    }
}