import axios from 'axios';
import * as React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import ReactMapGL, { NavigationControl, Marker, MapEvent } from 'react-map-gl';
import { Redirect } from 'react-router-dom';

const popover = (latitude: number, longitude: number) => (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover bottom</Popover.Title>
      <Popover.Content>
        Latitude: {latitude.toFixed(2)}
        <br />
        Longitude: {longitude.toFixed(2)}
        <br />
        Current User: {localStorage.user}
      </Popover.Content>
    </Popover>
);

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN || '';
const initialState = {
    viewport: {
        height: 400,
        latitude: 39.4018552,
        longitude: -76.602388,
        width: 400,
        zoom: 14,
    },
    pins: [
        {
            'name': 'intitial',
            'latitude': 39.406,
            'longitude': -76.610,
            'description': 'intitial'
        }
    ],
    markers: [
        <OverlayTrigger rootClose trigger="click" placement="bottom" overlay={popover(39.406, -76.610)}>
            <Marker latitude={39.406} longitude={-76.610} offsetLeft={-20} offsetTop={-10}>
                <img className="imageHover" src="/assets/pin.jpg" alt="Here" style={{width: 35, height: 35}}/>
            </Marker>
        </OverlayTrigger>
    ]
};
type State = typeof initialState;
type Viewport = typeof initialState.viewport;

export default class Map extends React.Component<{}, State> {
    public state: State = initialState;

    public componentDidMount() {
        window.addEventListener('resize', this.resize);
        this.resize();
        axios.get('http://localhost:5000/users/username/' + localStorage.user)
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
            (pin: {name: string, latitude: number, longitude: number, description: string}) => markers.push(
                <OverlayTrigger rootClose trigger="click" placement="bottom" overlay={popover(pin.latitude, pin.longitude)}>
                    <Marker latitude={pin.latitude} longitude={pin.longitude} offsetLeft={-20} offsetTop={-10}>
                        <img className="imageHover" src="/assets/pin.jpg" alt="Here" style={{width: 35, height: 35}}/>
                    </Marker>
                </OverlayTrigger>
            ))
        this.setState({
            markers: markers
        })
    }

    public addPin = (event: MapEvent) => {
        const pins = this.state.pins.slice();
        pins.push({
            'name': 'temporary',
            'latitude': event.lngLat[1],
            'longitude': event.lngLat[0],
            'description': 'temporary'
        })
        axios.post('http://localhost:5000/users/update/username/' + localStorage.user, 
            {
                username: localStorage.user,
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
    
    public render() {
        const { viewport } = this.state;
         return (
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
            );
        }
    }