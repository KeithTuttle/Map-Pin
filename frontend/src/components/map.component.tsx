import axios from 'axios';
import * as React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import ReactMapGL, { NavigationControl, Marker, MapEvent } from 'react-map-gl';
import Pin from '../viewModels/Pin';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

// eslint-disable-next-line import/no-webpack-loader-syntax
//mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const popover = (latitude: number, longitude: number) => (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover bottom</Popover.Title>
      <Popover.Content>
        Latitude: {latitude.toFixed(2)}
        <br />
        Longitude: {longitude.toFixed(2)}
        <br />
        Current User: {localStorage.getItem("user")}
      </Popover.Content>
    </Popover>
);

enum PinAction { ADD, DELETE, UPDATE};

interface IProps {

}

interface Viewport {
    height: number,
    latitude: number,
    longitude: number,
    width: number,
    zoom: number,
}

interface MapState {
    pinAction: PinAction,
    viewport: Viewport
    pins: Pin[],
    markers: any[]
}

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN || '';

export default class Map extends React.Component<IProps, MapState> {
    constructor(props: IProps) {
        super(props);
        
        this.setPinActionAdd = this.setPinActionAdd.bind(this);
        this.setPinActionDelete = this.setPinActionDelete.bind(this);
        this.setPinActionUpdate = this.setPinActionUpdate.bind(this);
        this.mapClickHandler = this.mapClickHandler.bind(this);
    
        this.state = {
            pinAction: PinAction.ADD,
            viewport: {
                height: 400,
                latitude: 39.4018552,
                longitude: -76.602388,
                width: 400,
                zoom: 14,
            },
            pins: [],
            markers: [
                <OverlayTrigger rootClose trigger="click" placement="bottom" overlay={popover(39.406, -76.610)}>
                    <Marker latitude={39.406} longitude={-76.610} offsetLeft={-20} offsetTop={-10}>
                        <img className="imageHover" src="/assets/pin.jpg" alt="Here" style={{width: 35, height: 35}}/>
                    </Marker>
                </OverlayTrigger>
            ]
        }
    }

    public componentDidMount() {
        var path="";
        if(process.env.NODE_ENV === "development"){ path = "http://localhost:5000"}
        window.addEventListener('resize', this.resize);
        this.resize();
        axios.get(path+'/users/username/' + localStorage.getItem("user"))
            .then(response => {
                console.log(response.data)
                this.setState({
                    pins: response.data.pins
                })
                this.convertMarkers();
            })
    }

    public componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    public updateViewport = (viewport: Viewport) => {
        this.setState(prevState => ({
            viewport: { ...prevState.viewport, ...viewport },
        }));
    };

    public resize = () => {
        this.setState(prevState => ({
            viewport: {
                ...prevState.viewport,
                height: window.innerHeight,
                width: window.innerWidth,
            },
        }));
    };

    public convertMarkers = () => {
        const markers = this.state.markers.slice();
        this.state.pins.forEach(
            (pin: Pin) => markers.push(
                <OverlayTrigger rootClose trigger="click" placement="bottom" overlay={popover(pin.lat, pin.long)}>
                    <Marker latitude={pin.lat} longitude={pin.long} offsetLeft={-20} offsetTop={-10}>
                        <img className="imageHover" src="/assets/pin.jpg" alt="Here" style={{width: 35, height: 35}}/>
                    </Marker>
                </OverlayTrigger>
            ))
        this.setState({
            markers: markers
        })
    }

    public addPin = (event: MapEvent) => {
        var path="";
        if(process.env.NODE_ENV === "development"){ path = "http://localhost:5000"}
        const pins = this.state.pins.slice();
        var newPin: Pin = {
            name: 'temporary',
            lat: event.lngLat[1],
            long: event.lngLat[0],
            description: 'temporary'
        }
        pins.push(newPin)
        axios.post(path+'/users/update/username/' + localStorage.getItem("user"), 
            {
                username: localStorage.getItem("user"),
                pins: pins
            })
        this.setState({
            pins: pins
            })
        this.convertMarkers();
    }

    public deleteMarker = (arr: number[]) => {
        this.setState( prevState => ({
            markers: prevState.markers.filter(marker => marker.props.children.props.latitude !== arr[0] && marker.props.children.props.longitude !== arr[1])
        }))
    }

    setPinActionAdd(){
        this.setState({
            pinAction: PinAction.ADD
        })
    }

    setPinActionDelete(){
        this.setState({
            pinAction: PinAction.DELETE
        })
    }

    setPinActionUpdate(){
        this.setState({
            pinAction: PinAction.UPDATE
        })
    }

    mapClickHandler(){
        if(this.state.pinAction === PinAction.ADD){
            alert("Send to add method")
        }
        if(this.state.pinAction === PinAction.DELETE){
            alert("Send to delete method")
        }
        if(this.state.pinAction === PinAction.UPDATE){
            alert("Send to update method")
        }
    }
    
    public render() {
        const { viewport } = this.state;
         return (
             <span>
                 <button className="btn btn-danger" onClick={this.setPinActionAdd} style={{marginTop: "10px", marginRight: "10px"}} type="button">Add</button>
                 <button className="btn btn-danger" onClick={this.setPinActionDelete} style={{marginTop: "10px", marginRight: "10px"}} type="button">Delete</button>
                 <button className="btn btn-danger" onClick={this.setPinActionUpdate} style={{marginTop: "10px", marginRight: "10px"}} type="button">Update</button>
                 <span>TRACKED ENUM VALUE: {this.state.pinAction}</span>
                 <button className="btn btn-danger" onClick={this.mapClickHandler} style={{marginTop: "10px", marginLeft: "10px"}} type="button">Map Click!</button>
                <ReactMapGL
                        {...viewport}
                        className="map-size"
                        mapboxApiAccessToken={MAPBOX_TOKEN}
                        onViewportChange={(v: Viewport) => this.updateViewport(v)}
                        onClick={(event: MapEvent) => this.addPin(event)}
                    >
                        {this.state.markers}
                        <div>
                            <NavigationControl onViewportChange={this.updateViewport} />
                        </div>
                    </ReactMapGL>
                </span>
            );
        }
    }