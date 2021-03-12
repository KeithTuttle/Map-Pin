import { render } from '@testing-library/react';
import * as React from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
import ReactMapGL, { NavigationControl, Marker, MapEvent } from 'react-map-gl';
import { MouseEvent } from 'react-mapbox-gl/lib/geojson-layer';

const popover = (latitude: number, longitude: number) => (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover bottom</Popover.Title>
      <Popover.Content>
        Latitude: {latitude.toFixed(2)}
        <br />
        Longitude: {longitude.toFixed(2)}
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
    markers: [
        <OverlayTrigger rootClose trigger="click" placement="bottom" overlay={popover(39.406, -76.610)}>
            <Marker latitude={39.406} longitude={-76.610} offsetLeft={-20} offsetTop={-10}>
                <img className="imageHover" src="/assets/pin.jpg" alt="Here" style={{width: 35, height: 35}}/>
            </Marker>
        </OverlayTrigger>
    ],
};
type State = typeof initialState;
type Viewport = typeof initialState.viewport;

export default class Map extends React.Component<{}, State> {
    public state: State = initialState;

    public componentDidMount() {
        window.addEventListener('resize', this.resize);
        this.resize();
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

    public addMarker = (event: MapEvent) => {
        this.setState( prevState => ({
            markers: prevState.markers.concat(
                <Marker latitude={event.lngLat[1]} longitude={event.lngLat[0]} offsetLeft={-20} offsetTop={-10}>
                    <img className="imageHover" src="/assets/pin.jpg" alt="Here" style={{width: 35, height: 35}} onClick={(event) => 
                        //alert('latitude: ' + event.lngLat[1] + '\nlongitude: ' + event.lngLat[0])
                        //this.deleteMarker([event.lngLat[1], event.lngLat[0]])
                        console.log(event)
                    }
                    />
                </Marker>
                )
            })
        )
    }

    public deleteMarker = (arr: number[]) => {
        console.log()
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
                onClick={(event: MapEvent) => this.addMarker(event)}
            >
                {this.state.markers}
                <div>
                    <NavigationControl onViewportChange={this.updateViewport} />
                </div>
            </ReactMapGL>
        );
    }
}