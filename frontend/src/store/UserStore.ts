import { EventEmitter } from 'events';
import { User } from '../viewModels/UserWithErrorMessage';
import Dispatcher from './dispatcher';

class UserStore extends EventEmitter {
    user: User | null = null;
     constructor(){
         super();
     }

     setUser(user: User | null){
         console.log("setting user to: " + user?.username);
        this.user = user;

        this.emit("change");
     }

     getUser(){
         console.log("getting the user");
         return this.user;
     }

     //not type safe
     handleActions(action: any){
        switch(action.type){
            case "SET_USER": {
                this.setUser(action.user);
            }
        }
     }
}

const userStore = new UserStore;
Dispatcher.register(userStore.handleActions.bind(userStore));

export default userStore;
