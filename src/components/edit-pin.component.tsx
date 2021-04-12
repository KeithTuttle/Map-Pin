import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Popup from 'reactjs-popup';

export default class EditPin extends Component {
    
    render(){
        return(<div>
            <Popup trigger={<button> Edit your Pins!</button>} position="right center">
                <div><button>Add Pin</button> <button>Delete Pins</button> <button>Change Pin Info</button></div>
            </Popup>
             </div>
        );
    }
}
// My thought Process for making pin button work. When the buttons are clicked, a value is changed. Say we have the variable editStatus =0
// If we click the edit button and do add pin, then we change that value to 1, and that will trigger an if statement allowing the screen
//to be clicked and add the pins. Then when you leave the page or hit done, it resets the value to zero. The same concept applies for the
// other 2 buttons. For change pin info, we can save that for last but it doesnt seem too hard. Also when we figure out the album piece,
// We can have another pop up when we click and add the info to our pin, and just have an "Add to which album", value.