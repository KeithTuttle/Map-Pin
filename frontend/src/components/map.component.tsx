import axios from 'axios';
import * as React from 'react';
import { Button, Modal, OverlayTrigger, Popover } from 'react-bootstrap';
import ReactMapGL, { NavigationControl, Marker, MapEvent } from 'react-map-gl';
import Pin from '../viewModels/Pin';
import 'mapbox-gl/dist/mapbox-gl.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import mapboxgl from 'mapbox-gl';
import { UserWithErrorMessage } from '../viewModels/UserWithErrorMessage';

// eslint-disable-next-line import/no-webpack-loader-syntax
//mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

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
    markers: any[],
    showUpdateModal: boolean,
    showDeleteModal: boolean,
    showShareModal: boolean,
    newDescription: string,
    recipientUsername: string,
    currentPin: Pin | null,
    userNotFound: string
}

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN || '';

export default class Map extends React.Component<IProps, MapState> {
    constructor(props: IProps) {
        super(props);
        
        this.setPinActionAdd = this.setPinActionAdd.bind(this);
        this.setPinActionDelete = this.setPinActionDelete.bind(this);
        this.setPinActionUpdate = this.setPinActionUpdate.bind(this);
        this.mapClickHandler = this.mapClickHandler.bind(this);
        this.handleUpdateShow = this.handleUpdateShow.bind(this);
        this.handleUpdateClose = this.handleUpdateClose.bind(this);
        this.handleDeleteShow = this.handleDeleteShow.bind(this);
        this.handleDeleteClose = this.handleDeleteClose.bind(this);
        this.onNewDescriptionChange = this.onNewDescriptionChange.bind(this);
        this.updatePin = this.updatePin.bind(this);
        this.deletePin = this.deletePin.bind(this);
        this.sharePin = this.sharePin.bind(this);
        this.handleShareShow = this.handleShareShow.bind(this);
        this.handleShareClose = this.handleShareClose.bind(this);
    
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
            markers: [],
            showUpdateModal: false,
            showDeleteModal: false,
            showShareModal: false,
            newDescription: "",
            currentPin: null,
            recipientUsername: "",
            userNotFound: ""
        }
    }

    popover = (pin: Pin) => (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Details</Popover.Title>
          <Popover.Content>
            Latitude: {pin.lat.toFixed(4)}
            <br />
            Longitude: {pin.long.toFixed(4)}
            <br />
            Current User: {localStorage.getItem("user")}
            <br />
            <span>Description: {pin.description}</span>
            <br />
            <button className="btn btn-danger" onClick={this.handleUpdateShow} style={{marginTop: "10px", marginRight: "10px"}} type="button">Update</button>
            <button className="btn btn-danger" onClick={this.handleDeleteShow} style={{marginTop: "10px", marginRight: "10px"}} type="button">Delete</button>
            <button className="btn btn-danger" onClick={this.handleShareShow} style={{marginTop: "10px", marginRight: "10px"}} type="button">Share</button>
          </Popover.Content>
        </Popover>
    );

    handleUpdateShow(){
        this.setState({
            showUpdateModal: true,
        });
    }
    handleUpdateClose(){
        this.setState({
            showUpdateModal: false
        });
    }
    handleDeleteShow(){
        this.setState({
            showDeleteModal: true,
        });
    }
    handleDeleteClose(){
        this.setState({
            showDeleteModal: false
        });
    }
    handleShareShow(){
        this.setState({
            showShareModal: true,
        });
    }
    handleShareClose(){
        this.setState({
            showShareModal: false
        });
    }

    onNewDescriptionChange(value: string){
        this.setState({
            newDescription: value
        })
    }
    onRecipientUsernameChange(value: string){
        this.setState({
            recipientUsername: value
        })
    }

    public componentDidMount() {
        var path="";
        if(process.env.NODE_ENV === "development"){ path = "http://localhost:5000"}
        window.addEventListener('resize', this.resize);
        this.resize();
        axios.get(path+'/users/username/' + localStorage.getItem("user"))
            .then(response => {
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
                <OverlayTrigger rootClose trigger="click" placement="bottom" overlay={this.popover(pin)}>
                    <Marker latitude={pin.lat} longitude={pin.long} offsetLeft={-20} offsetTop={-10}>
                        <img onClick={() => this.setState({ currentPin: pin})} className="imageHover" src="/assets/pin.jpg" alt="Here" style={{width: 35, height: 35}}/>
                    </Marker>
                </OverlayTrigger>
            ))
        this.setState({
            markers: markers
        })
    }

    public removeMarkers = () => {
        var markers: any[] = [];
        this.state.pins.forEach(
            (pin: Pin) => markers.push(
                <OverlayTrigger rootClose trigger="click" placement="bottom" overlay={this.popover(pin)}>
                    <Marker latitude={pin.lat} longitude={pin.long} offsetLeft={-20} offsetTop={-10}>
                        <img onClick={() => this.setState({ currentPin: pin})} className="imageHover" src="/assets/pin.jpg" alt="Here" style={{width: 35, height: 35}}/>
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
            name: `lng${event.lngLat[0]}`,
            lat: event.lngLat[1],
            long: event.lngLat[0],
            description: 'Edit me!'
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
            markers: prevState.markers.filter(marker => marker.props.children.props.longitude !== arr[0] && marker.props.children.props.latitude !== arr[1])
        }))
    }

    updatePin(){
        var path="";
        if(process.env.NODE_ENV === "development"){ path = "http://localhost:5000"}
        if(this.state.currentPin != undefined){
            var updatedPin: Pin = {
                description: this.state.newDescription,
                lat: this.state.currentPin.lat,
                long: this.state.currentPin.long,
                name: 'temporary'
            }
            var newPinList: Pin[] = this.state.pins.filter(p => p.lat !== updatedPin.lat && p.long !== updatedPin.long);
            newPinList.push(updatedPin);
            const MySwal = withReactContent(Swal)
            axios.post(path+'/users/update/username/' + localStorage.getItem("user"), 
            {
                username: localStorage.getItem("user"),
                pins: newPinList
            }).then((response) => {
                this.setState({
                    pins: newPinList
                })
                this.convertMarkers();
                this.handleUpdateClose();
                this.setState({
                    currentPin: null,
                    newDescription: ""
                })
                return MySwal.fire(<p>Pin Updated!</p>,<span><div>Your pin description has been updated to:</div><b>{updatedPin.description}</b></span>, "success");
            });
        }
    }

    deletePin(){
        var path="";
        if(process.env.NODE_ENV === "development"){ path = "http://localhost:5000"}
        if(this.state.currentPin != undefined){
            var updatedPin: Pin = {
                description: this.state.currentPin.description,
                lat: this.state.currentPin.lat,
                long: this.state.currentPin.long,
                name: 'temporary'
            }
            var newPinList: Pin[] = this.state.pins.filter(p => p.lat !== updatedPin.lat && p.long !== updatedPin.long);
            const MySwal = withReactContent(Swal)
            axios.post(path+'/users/update/username/' + localStorage.getItem("user"), 
            {
                username: localStorage.getItem("user"),
                pins: newPinList
            }).then((response) => {
                this.setState({
                    pins: newPinList
                })
                this.handleDeleteClose();
                this.setState({
                    currentPin: null,
                    newDescription: ""
                });
                this.removeMarkers();
                return MySwal.fire(<p>Pin Deleted!</p>,<span><div>Your pin has successfully been deleted!</div></span>, "success");
            });
        }
    }

    sharePin(){
        var path="";
        if(process.env.NODE_ENV === "development"){ path = "http://localhost:5000"}
        if(this.state.currentPin != undefined){
            var sharedPin: Pin = {
                description: `from ${localStorage.getItem("user")}: ${this.state.currentPin.description}`,
                lat: this.state.currentPin.lat,
                long: this.state.currentPin.long,
                name: 'SharedPin'
            }
            var newPinList: Pin[] = [sharedPin];
            const MySwal = withReactContent(Swal)
            axios.post<UserWithErrorMessage>(path+'/users/share/username/' + this.state.recipientUsername, 
            {
                username: this.state.recipientUsername,
                pins: newPinList
            }).then((result) => {
                if(result.data.error !== ""){
                    if(result.data.error.includes("Username")){
                        this.setState({
                            userNotFound: "User was not found"
                        });
                        return;
                    }
                    return MySwal.fire(<p>Uh Oh!</p>,<span>There was an unexpected error! Contact the MapPin team!</span>, "error");
                }
                else if(result.data.user === null){
                    return MySwal.fire(<p>Error Occured!</p>,<span>User was not found</span>, "error");
                }
                else{
                    this.handleShareClose();
                    this.setState({
                        currentPin: null,
                        recipientUsername: ""
                    })
                    return MySwal.fire(<p>Pin Shared!</p>,<span><div>Your pin was successfully shared!</div></span>, "success");
                }
            }).catch(err => console.log(err));
        }
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

    mapClickHandler(event: MapEvent){
        if(this.state.pinAction === PinAction.ADD){
            this.addPin(event);
        }
        if(this.state.pinAction === PinAction.DELETE){
            var lngLat = [event.lngLat[0], event.lngLat[1]];
            this.deleteMarker(lngLat);
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
                <ReactMapGL
                        {...viewport}
                        className="map-size"
                        mapboxApiAccessToken={MAPBOX_TOKEN}
                        onViewportChange={(v: Viewport) => this.updateViewport(v)}
                        onClick={(event: MapEvent) => this.mapClickHandler(event)}
                    >
                        {this.state.markers}
                        <div>
                            <NavigationControl onViewportChange={this.updateViewport} />
                        </div>
                    </ReactMapGL>

                    <Modal show={this.state.showUpdateModal} onHide={this.handleUpdateClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Update Pin Information</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>Update the description of your pin:</div>
                            <input type="text"
                                   placeholder={this.state.currentPin?.description}
                                   value={this.state.newDescription}
                                   onChange={e => this.onNewDescriptionChange(e.target.value)}></input>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleUpdateClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={this.updatePin}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={this.state.showDeleteModal} onHide={this.handleDeleteClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Delete Pin</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <b>Are you sure you want to delete this pin?</b>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleDeleteClose}>
                                Close
                            </Button>
                            <Button variant="danger" onClick={this.deletePin}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <Modal show={this.state.showShareModal} onHide={this.handleShareClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Share Pin</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>Enter the recipient's username:</div>
                            <input type="text"
                                   placeholder={"Recipient's username"}
                                   value={this.state.recipientUsername}
                                   onChange={e => this.onRecipientUsernameChange(e.target.value)}></input>
                            <div style={{color: 'red', fontWeight: 'bold', paddingTop: '0px'}}>
                                {this.state.userNotFound}
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleShareClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={this.sharePin}>
                                Share
                            </Button>
                        </Modal.Footer>
                    </Modal>
            </span>
            );
        }
    }