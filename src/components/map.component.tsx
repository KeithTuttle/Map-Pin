import * as React from 'react';
import ReactMapGL, { NavigationControl } from 'react-map-gl';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN || '';
const initialState = {
    viewport: {
        height: 400,
        latitude: 39.4018552,
        longitude: -76.602388,
        width: 400,
        zoom: 14,
    },
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

    public render() {
        const { viewport } = this.state;
        return (
            <ReactMapGL
                {...viewport}
                className="map-size"
                mapboxApiAccessToken={MAPBOX_TOKEN}
                onViewportChange={(v: Viewport) => this.updateViewport(v)}
            >
                <div>
                    <NavigationControl onViewportChange={this.updateViewport} />
                </div>
            </ReactMapGL>
        );
    }
}