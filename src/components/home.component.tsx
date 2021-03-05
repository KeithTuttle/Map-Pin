import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Map from './map.component'

export default class Home extends Component {
    render(){
        return(
            <div id="mapbox">
                <Map></Map>
            </div>
        );
    }
}