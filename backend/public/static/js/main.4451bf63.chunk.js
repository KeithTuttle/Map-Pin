(this.webpackJsonpmappin=this.webpackJsonpmappin||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(20),i=a.n(r),o=(a(75),a(76),a(22)),c=a(10),l=(a(77),a(13)),h=a(15),d=a(6),u=a(17),j=a(16),b=a(66),m=new(a(67).Dispatcher),p=new(function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).user=null,e}return Object(h.a)(a,[{key:"setUser",value:function(e){this.user=e,this.emit("change")}},{key:"getUser",value:function(){return this.user}},{key:"handleActions",value:function(e){switch(e.type){case"SET_USER":this.setUser(e.user)}}}]),a}(b.EventEmitter));m.register(p.handleActions.bind(p));var g=p;function O(e){m.dispatch({type:"SET_USER",user:e})}var v=function e(){Object(l.a)(this,e),this.username="",this.pins=[]},x=a(2),f=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).clearUsername=n.clearUsername.bind(Object(d.a)(n)),n.state={username:""},n}return Object(h.a)(a,[{key:"clearUsername",value:function(){localStorage.removeItem("user"),this.setState({username:""});var e=new v;e.username="",O(e)}},{key:"componentDidMount",value:function(){var e=this;g.on("change",(function(){var t,a=null===(t=g.getUser())||void 0===t?void 0:t.username;void 0==a&&(a=""),e.setState({username:a})}))}},{key:"render",value:function(){return Object(x.jsxs)("nav",{className:"container topnav navbar navbar-dark bg-dark navbar-expand-lg",children:[Object(x.jsx)(o.b,{to:"/",className:"main_title navbar-brand",children:"MapPin"}),Object(x.jsxs)("div",{className:"collpase navbar-collapse",children:[""==this.state.username&&Object(x.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(x.jsx)("li",{className:"navbar-item",children:Object(x.jsx)(o.b,{style:{color:"white"},to:"/contact",className:"nav-link",children:"Contact Us "})}),Object(x.jsx)("li",{className:"navbar-item",children:Object(x.jsx)(o.b,{style:{color:"white"},to:"/register",className:"nav-link",children:"Register"})}),Object(x.jsx)("li",{className:"navbar-item",children:Object(x.jsx)(o.b,{style:{color:"white"},to:"/login",className:"nav-link",children:"Log-In"})})]}),""!=this.state.username&&Object(x.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(x.jsx)("li",{className:"navbar-item",children:Object(x.jsx)(o.b,{style:{color:"white"},to:"/",className:"nav-link",children:"Map "})}),Object(x.jsx)("li",{className:"navbar-item",children:Object(x.jsx)(o.b,{style:{color:"white"},to:"/contact",className:"nav-link",children:"Contact Us "})}),Object(x.jsx)("li",{className:"navbar-item",children:Object(x.jsxs)(o.b,{style:{color:"white"},to:"/login",className:"nav-link",onClick:this.clearUsername,children:[" Logout ",this.state.username]})})]})]})]})}}]),a}(s.a.Component),w=a(33),S=a(14),y=a.n(S),C=a(112),k=a(110),N=a(111),U=a(113),P=a(42),D=(a(102),a(26)),M=a.n(D),A=a(27),E=a.n(A),F=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).popover=function(e){return Object(x.jsxs)(C.a,{id:"popover-basic",children:[Object(x.jsx)(C.a.Title,{as:"h3",children:"Details"}),Object(x.jsxs)(C.a.Content,{children:["Latitude: ",e.lat.toFixed(4),Object(x.jsx)("br",{}),"Longitude: ",e.long.toFixed(4),Object(x.jsx)("br",{}),"Current User: ",localStorage.getItem("user"),Object(x.jsx)("br",{}),Object(x.jsxs)("span",{children:["Description: ",e.description]}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{className:"btn btn-danger",onClick:n.handleUpdateShow,style:{marginTop:"10px",marginRight:"10px"},type:"button",children:"Update"}),Object(x.jsx)("button",{className:"btn btn-danger",onClick:n.handleDeleteShow,style:{marginTop:"10px",marginRight:"10px"},type:"button",children:"Delete"}),Object(x.jsx)("button",{className:"btn btn-danger",onClick:n.handleShareShow,style:{marginTop:"10px",marginRight:"10px"},type:"button",children:"Share"})]})]})},n.updateViewport=function(e){n.setState((function(t){return{viewport:Object(w.a)(Object(w.a)({},t.viewport),e)}}))},n.resize=function(){n.setState((function(e){return{viewport:Object(w.a)(Object(w.a)({},e.viewport),{},{height:window.innerHeight,width:window.innerWidth})}}))},n.convertMarkers=function(){var e=n.state.markers.slice();n.state.pins.forEach((function(t){return e.push(Object(x.jsx)(k.a,{rootClose:!0,trigger:"click",placement:"bottom",overlay:n.popover(t),children:Object(x.jsx)(P.a,{latitude:t.lat,longitude:t.long,offsetLeft:-20,offsetTop:-10,children:Object(x.jsx)("img",{onClick:function(){return n.setState({currentPin:t})},className:"imageHover",src:"/assets/pin.jpg",alt:"Here",style:{width:35,height:35}})})}))})),n.setState({markers:e})},n.removeMarkers=function(){var e=[];n.state.pins.forEach((function(t){return e.push(Object(x.jsx)(k.a,{rootClose:!0,trigger:"click",placement:"bottom",overlay:n.popover(t),children:Object(x.jsx)(P.a,{latitude:t.lat,longitude:t.long,offsetLeft:-20,offsetTop:-10,children:Object(x.jsx)("img",{onClick:function(){return n.setState({currentPin:t})},className:"imageHover",src:"/assets/pin.jpg",alt:"Here",style:{width:35,height:35}})})}))})),n.setState({markers:e})},n.addPin=function(e){var t=n.state.pins.slice(),a={name:"lng".concat(e.lngLat[0]),lat:e.lngLat[1],long:e.lngLat[0],description:"Edit me!"};t.push(a),y.a.post("/users/update/username/"+localStorage.getItem("user"),{username:localStorage.getItem("user"),pins:t}),n.setState({pins:t}),n.convertMarkers()},n.deleteMarker=function(e){n.setState((function(t){return{markers:t.markers.filter((function(t){return t.props.children.props.longitude!==e[0]&&t.props.children.props.latitude!==e[1]}))}}))},n.handleUpdateShow=n.handleUpdateShow.bind(Object(d.a)(n)),n.handleUpdateClose=n.handleUpdateClose.bind(Object(d.a)(n)),n.handleDeleteShow=n.handleDeleteShow.bind(Object(d.a)(n)),n.handleDeleteClose=n.handleDeleteClose.bind(Object(d.a)(n)),n.handleShareAllClose=n.handleShareAllClose.bind(Object(d.a)(n)),n.handleShareAllShow=n.handleShareAllShow.bind(Object(d.a)(n)),n.onNewDescriptionChange=n.onNewDescriptionChange.bind(Object(d.a)(n)),n.updatePin=n.updatePin.bind(Object(d.a)(n)),n.deletePin=n.deletePin.bind(Object(d.a)(n)),n.sharePin=n.sharePin.bind(Object(d.a)(n)),n.shareAll=n.shareAll.bind(Object(d.a)(n)),n.handleShareShow=n.handleShareShow.bind(Object(d.a)(n)),n.handleShareClose=n.handleShareClose.bind(Object(d.a)(n)),n.state={viewport:{height:400,latitude:39.4018552,longitude:-76.602388,width:400,zoom:14},pins:[],markers:[],showUpdateModal:!1,showDeleteModal:!1,showShareModal:!1,showShareAll:!1,newDescription:"",currentPin:null,recipientUsername:"",userNotFound:""},n}return Object(h.a)(a,[{key:"handleUpdateShow",value:function(){this.setState({showUpdateModal:!0})}},{key:"handleUpdateClose",value:function(){this.setState({showUpdateModal:!1})}},{key:"handleDeleteShow",value:function(){this.setState({showDeleteModal:!0})}},{key:"handleDeleteClose",value:function(){this.setState({showDeleteModal:!1})}},{key:"handleShareShow",value:function(){this.setState({showShareModal:!0})}},{key:"handleShareClose",value:function(){this.setState({showShareModal:!1})}},{key:"handleShareAllShow",value:function(){this.setState({showShareAll:!0})}},{key:"handleShareAllClose",value:function(){this.setState({showShareAll:!1})}},{key:"onNewDescriptionChange",value:function(e){this.setState({newDescription:e})}},{key:"onRecipientUsernameChange",value:function(e){this.setState({recipientUsername:e})}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",this.resize),this.resize(),y.a.get("/users/username/"+localStorage.getItem("user")).then((function(t){e.setState({pins:t.data.pins}),e.convertMarkers()}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"updatePin",value:function(){var e=this;if(void 0!=this.state.currentPin){var t={description:this.state.newDescription,lat:this.state.currentPin.lat,long:this.state.currentPin.long,name:"temporary"},a=this.state.pins.filter((function(e){return e.lat!==t.lat&&e.long!==t.long}));a.push(t);var n=E()(M.a);y.a.post("/users/update/username/"+localStorage.getItem("user"),{username:localStorage.getItem("user"),pins:a}).then((function(s){return e.setState({pins:a}),e.convertMarkers(),e.handleUpdateClose(),e.setState({currentPin:null,newDescription:""}),n.fire(Object(x.jsx)("p",{children:"Pin Updated!"}),Object(x.jsxs)("span",{children:[Object(x.jsx)("div",{children:"Your pin description has been updated to:"}),Object(x.jsx)("b",{children:t.description})]}),"success")}))}}},{key:"deletePin",value:function(){var e=this;if(void 0!=this.state.currentPin){var t={description:this.state.currentPin.description,lat:this.state.currentPin.lat,long:this.state.currentPin.long,name:"temporary"},a=this.state.pins.filter((function(e){return e.lat!==t.lat&&e.long!==t.long})),n=E()(M.a);y.a.post("/users/update/username/"+localStorage.getItem("user"),{username:localStorage.getItem("user"),pins:a}).then((function(t){return e.setState({pins:a}),e.handleDeleteClose(),e.setState({currentPin:null,newDescription:""}),e.removeMarkers(),n.fire(Object(x.jsx)("p",{children:"Pin Deleted!"}),Object(x.jsx)("span",{children:Object(x.jsx)("div",{children:"Your pin has successfully been deleted!"})}),"success")}))}}},{key:"sharePin",value:function(){var e=this;if(void 0!=this.state.currentPin){var t=[{description:this.state.currentPin.description,lat:this.state.currentPin.lat,long:this.state.currentPin.long,name:"SharedPin"}],a=E()(M.a);y.a.post("/users/share/username/"+this.state.recipientUsername,{username:this.state.recipientUsername,pins:t}).then((function(t){return""!==t.data.error?t.data.error.includes("Username")?void e.setState({userNotFound:"User was not found"}):a.fire(Object(x.jsx)("p",{children:"Uh Oh!"}),Object(x.jsx)("span",{children:"There was an unexpected error! Contact the MapPin team!"}),"error"):null===t.data.user?a.fire(Object(x.jsx)("p",{children:"Error Occured!"}),Object(x.jsx)("span",{children:"User was not found"}),"error"):(e.handleShareClose(),e.setState({currentPin:null,recipientUsername:"",userNotFound:""}),a.fire(Object(x.jsx)("p",{children:"Pin Shared!"}),Object(x.jsx)("span",{children:Object(x.jsx)("div",{children:"Your pin was successfully shared!"})}),"success"))})).catch((function(e){return console.log(e)}))}}},{key:"shareAll",value:function(){var e=this;var t=E()(M.a);y.a.post("/users/share/username/"+this.state.recipientUsername,{username:this.state.recipientUsername,pins:this.state.pins}).then((function(a){return""!==a.data.error?a.data.error.includes("Username")?void e.setState({userNotFound:"User was not found"}):t.fire(Object(x.jsx)("p",{children:"Uh Oh!"}),Object(x.jsx)("span",{children:"There was an unexpected error! Contact the MapPin team!"}),"error"):null===a.data.user?t.fire(Object(x.jsx)("p",{children:"Error Occured!"}),Object(x.jsx)("span",{children:"User was not found"}),"error"):(e.handleShareAllClose(),e.setState({currentPin:null,recipientUsername:"",userNotFound:""}),t.fire(Object(x.jsx)("p",{children:"Pin Shared!"}),Object(x.jsx)("span",{children:Object(x.jsx)("div",{children:"Your pin was successfully shared!"})}),"success"))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e,t=this,a=this.state.viewport;return Object(x.jsxs)("span",{children:[Object(x.jsx)("div",{style:{width:"95%"},children:Object(x.jsx)("div",{className:"d-flex justify-content-end",children:Object(x.jsx)("button",{className:"btn btn-danger",onClick:this.handleShareAllShow,type:"button",children:"Share All"})})}),Object(x.jsxs)(P.c,Object(w.a)(Object(w.a)({},a),{},{className:"map-size",mapboxApiAccessToken:"pk.eyJ1IjoiYXR1dHRsZSIsImEiOiJja2x1bTdjOWIwMGwwMnhvMGdyN25jZ3I2In0.w195Lbtc6bu0CESgOWeAGw",onViewportChange:function(e){return t.updateViewport(e)},onClick:function(e){return t.addPin(e)},children:[this.state.markers,Object(x.jsx)("div",{children:Object(x.jsx)(P.b,{onViewportChange:this.updateViewport})})]})),Object(x.jsxs)(N.a,{show:this.state.showUpdateModal,onHide:this.handleUpdateClose,children:[Object(x.jsx)(N.a.Header,{closeButton:!0,children:Object(x.jsx)(N.a.Title,{children:"Update Pin Information"})}),Object(x.jsxs)(N.a.Body,{children:[Object(x.jsx)("div",{children:"Update the description of your pin:"}),Object(x.jsx)("input",{type:"text",placeholder:null===(e=this.state.currentPin)||void 0===e?void 0:e.description,value:this.state.newDescription,onChange:function(e){return t.onNewDescriptionChange(e.target.value)}})]}),Object(x.jsxs)(N.a.Footer,{children:[Object(x.jsx)(U.a,{variant:"secondary",onClick:this.handleUpdateClose,children:"Close"}),Object(x.jsx)(U.a,{variant:"primary",onClick:this.updatePin,children:"Save Changes"})]})]}),Object(x.jsxs)(N.a,{show:this.state.showDeleteModal,onHide:this.handleDeleteClose,children:[Object(x.jsx)(N.a.Header,{closeButton:!0,children:Object(x.jsx)(N.a.Title,{children:"Delete Pin"})}),Object(x.jsx)(N.a.Body,{children:Object(x.jsx)("b",{children:"Are you sure you want to delete this pin?"})}),Object(x.jsxs)(N.a.Footer,{children:[Object(x.jsx)(U.a,{variant:"secondary",onClick:this.handleDeleteClose,children:"Close"}),Object(x.jsx)(U.a,{variant:"danger",onClick:this.deletePin,children:"Delete"})]})]}),Object(x.jsxs)(N.a,{show:this.state.showShareModal,onHide:this.handleShareClose,children:[Object(x.jsx)(N.a.Header,{closeButton:!0,children:Object(x.jsx)(N.a.Title,{children:"Share Pin"})}),Object(x.jsxs)(N.a.Body,{children:[Object(x.jsx)("div",{children:"Enter the recipient's username:"}),Object(x.jsx)("input",{type:"text",placeholder:"Recipient's username",value:this.state.recipientUsername,onChange:function(e){return t.onRecipientUsernameChange(e.target.value)}}),Object(x.jsx)("div",{style:{color:"red",fontWeight:"bold",paddingTop:"0px"},children:this.state.userNotFound})]}),Object(x.jsxs)(N.a.Footer,{children:[Object(x.jsx)(U.a,{variant:"secondary",onClick:this.handleShareClose,children:"Close"}),Object(x.jsx)(U.a,{variant:"primary",onClick:this.sharePin,children:"Share"})]})]}),Object(x.jsxs)(N.a,{show:this.state.showShareAll,onHide:this.handleShareAllClose,children:[Object(x.jsx)(N.a.Header,{closeButton:!0,children:Object(x.jsx)(N.a.Title,{children:"Share Pins"})}),Object(x.jsxs)(N.a.Body,{children:[Object(x.jsx)("div",{children:"Enter the recipient's username:"}),Object(x.jsx)("input",{type:"text",placeholder:"Recipient's username",value:this.state.recipientUsername,onChange:function(e){return t.onRecipientUsernameChange(e.target.value)}}),Object(x.jsx)("div",{style:{color:"red",fontWeight:"bold",paddingTop:"0px"},children:this.state.userNotFound})]}),Object(x.jsxs)(N.a.Footer,{children:[Object(x.jsx)(U.a,{variant:"secondary",onClick:this.handleShareAllClose,children:"Close"}),Object(x.jsx)(U.a,{variant:"primary",onClick:this.shareAll,children:"Share All"})]})]})]})}}]),a}(n.Component),L=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n,s;return Object(l.a)(this,a),(s=t.call(this,e)).state={username:null===(n=g.getUser())||void 0===n?void 0:n.username},s}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.on("change",(function(){var t,a=null===(t=g.getUser())||void 0===t?void 0:t.username;void 0==a?e.setState({username:""}):e.setState({username:a})}))}},{key:"getUserFromLocalStorage",value:function(e){y.a.get("".concat("","/users/username/").concat(e)).then((function(e){O(e.data)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){if(""!=this.state.username&&void 0!=this.state.username&&null!=this.state.username||null!=localStorage.getItem("user")){var e=localStorage.getItem("user");return null!=e&&null==g.getUser()&&this.getUserFromLocalStorage(e),Object(x.jsx)("div",{id:"mapbox",className:"text-center",children:Object(x.jsx)(F,{})})}return Object(x.jsx)(c.a,{push:!0,to:"/register"})}}]),a}(s.a.Component),T=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(d.a)(n)),n.onChangePassword=n.onChangePassword.bind(Object(d.a)(n)),n.onSubmit=n.onSubmit.bind(Object(d.a)(n)),n.state={username:"",password:"",redirect:!1,usernameError:""},n}return Object(h.a)(a,[{key:"onChangeUsername",value:function(e){var t=e.target;this.setState({username:t.value})}},{key:"onChangePassword",value:function(e){var t=e.target;this.setState({password:t.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({usernameError:""});var a=E()(M.a),n={username:this.state.username,password:this.state.password};try{y.a.post("/users/add",n).then((function(e){if(""!==e.data.error){if(!e.data.error.includes("username is taken"))return a.fire(Object(x.jsx)("p",{children:"Login Failed"}),Object(x.jsx)("span",{children:e.data.error}),"error");t.setState({usernameError:e.data.error})}else{if(null===e.data.user)return a.fire(Object(x.jsx)("p",{children:"Registration Failed"}),Object(x.jsx)("span",{children:"unexpected error occured"}),"error");O(e.data.user),localStorage.setItem("user",e.data.user.username),t.setState({redirect:!0})}})).catch((function(e){return console.log(e)}))}catch(s){console.log(s)}}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"container",style:{marginLeft:"auto",marginRight:"auto",width:"30%"},children:[this.state.redirect?Object(x.jsx)(c.a,{push:!0,to:"/"}):null,Object(x.jsx)("h3",{children:"Create Account"}),Object(x.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Username: "}),Object(x.jsx)("input",{type:"text",style:{width:"90%"},required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername}),this.state.usernameError.length>0&&Object(x.jsx)("div",{style:{color:"red",fontWeight:"bold",paddingBottom:"10px"},children:this.state.usernameError}),Object(x.jsx)("label",{children:"Password: "}),Object(x.jsx)("input",{type:"password",style:{width:"90%"},required:!0,className:"form-control",value:this.state.password,onChange:this.onChangePassword})]}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{type:"submit",value:"Register",className:"btn btn-primary"})})]})]})}}]),a}(s.a.Component),I=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(d.a)(n)),n.onChangePassword=n.onChangePassword.bind(Object(d.a)(n)),n.onSubmit=n.onSubmit.bind(Object(d.a)(n)),n.state={username:"",password:"",users:[],redirect:!1,wrongUsername:"",wrongPassword:""},n}return Object(h.a)(a,[{key:"onChangeUsername",value:function(e){var t=e.target;this.setState({username:t.value})}},{key:"onChangePassword",value:function(e){var t=e.target;this.setState({password:t.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({wrongPassword:"",wrongUsername:""});var a={username:this.state.username,password:this.state.password};y.a.post("/users/login",a).then((function(e){if(""!==e.data.error)e.data.error.includes("Username")&&t.setState({wrongUsername:e.data.error}),e.data.error.includes("Password")&&t.setState({wrongPassword:e.data.error});else{var a;if(null===e.data.user)return E()(M.a).fire(Object(x.jsx)("p",{children:"Login Failed"}),Object(x.jsx)("span",{children:"User was not found"}),"error");O(e.data.user),localStorage.setItem("user",null===(a=e.data.user)||void 0===a?void 0:a.username),t.setState({redirect:!0})}})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"container",style:{marginLeft:"auto",marginRight:"auto",width:"30%"},children:[this.state.redirect?Object(x.jsx)(c.a,{to:{pathname:"/"}}):null,Object(x.jsx)("h3",{children:"Sign in to Your Account"}),Object(x.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Username: "}),Object(x.jsx)("input",{type:"text",style:{width:"90%"},required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername}),this.state.wrongUsername.length>0&&Object(x.jsx)("div",{style:{color:"red",fontWeight:"bold",paddingBottom:"10px"},children:this.state.wrongUsername}),Object(x.jsx)("label",{children:"Password: "}),Object(x.jsx)("input",{type:"password",style:{width:"90%"},required:!0,className:"form-control",value:this.state.password,onChange:this.onChangePassword}),this.state.wrongPassword.length>0&&Object(x.jsx)("div",{style:{color:"red",fontWeight:"bold",paddingBottom:"10px"},children:this.state.wrongPassword})]}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{type:"submit",value:"Login",className:"btn btn-primary"})})]})]})}}]),a}(s.a.Component),R=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChangeFirstName=n.onChangeFirstName.bind(Object(d.a)(n)),n.onChangeLastName=n.onChangeLastName.bind(Object(d.a)(n)),n.onChangeEmail=n.onChangeEmail.bind(Object(d.a)(n)),n.onChangeMessage=n.onChangeMessage.bind(Object(d.a)(n)),n.onSubmit=n.onSubmit.bind(Object(d.a)(n)),n.state={firstName:"",lastName:"",email:"",message:"",status:"Submit"},n}return Object(h.a)(a,[{key:"onChangeFirstName",value:function(e){var t=e.target;this.setState({firstName:t.value})}},{key:"onChangeLastName",value:function(e){var t=e.target;this.setState({lastName:t.value})}},{key:"onChangeEmail",value:function(e){var t=e.target;this.setState({email:t.value})}},{key:"onChangeMessage",value:function(e){var t=e.target;this.setState({message:t.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=E()(M.a);this.setState({status:"Sending"}),y()({method:"POST",url:"/users/contact",data:this.state}).then((function(e){return"sent"===e.data.status?(t.setState({firstName:"",lastName:"",email:"",message:"",status:"Submit"}),a.fire(Object(x.jsx)("p",{children:"Message Sent!"}),Object(x.jsx)("span",{children:"Thank you for your email, we look forward to hearing from you!"}),"success")):"failed"===e.data.status?a.fire(Object(x.jsx)("p",{children:"Message Failed!"}),Object(x.jsx)("span",{children:"Uh oh! Something went wrong and we did not recieve your message"}),"error"):void 0}))}},{key:"render",value:function(){var e=this.state.status;return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("div",{className:"title",children:[Object(x.jsx)("h1",{className:"page_title",children:"Contact the\xa0"}),Object(x.jsx)("h1",{className:"main_title",children:"Map-Pin"}),Object(x.jsx)("h1",{className:"page_title",children:"\xa0Team"})]}),Object(x.jsx)("div",{style:{marginTop:"18px"},children:Object(x.jsx)("div",{className:"inner_navcontainer",children:Object(x.jsx)("div",{className:"inner_contactcontainer",children:Object(x.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(x.jsx)("label",{htmlFor:"fname",children:"First Name"}),Object(x.jsx)("input",{type:"text",id:"fname",name:"firstname",placeholder:"Your first name...",required:!0,className:"form-control",value:this.state.firstName,onChange:this.onChangeFirstName}),Object(x.jsx)("label",{htmlFor:"lname",children:"Last Name"}),Object(x.jsx)("input",{type:"text",id:"lname",name:"lastname",placeholder:"Your last name...",required:!0,className:"form-control",value:this.state.lastName,onChange:this.onChangeLastName}),Object(x.jsx)("label",{htmlFor:"email",children:"E-mail"}),Object(x.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Your e-mail...",required:!0,className:"form-control",value:this.state.email,onChange:this.onChangeEmail}),Object(x.jsx)("label",{htmlFor:"message",children:"What do you need to share?"}),Object(x.jsx)("textarea",{id:"message",name:"message",placeholder:"Write your message here...",required:!0,className:"form-control",value:this.state.message,onChange:this.onChangeMessage}),Object(x.jsx)("button",{type:"submit",style:{marginTop:"20px"},children:e})]})})})})]})}}]),a}(s.a.Component);var H=function(){return Object(x.jsxs)(o.a,{children:[Object(x.jsx)(f,{}),Object(x.jsx)("br",{}),Object(x.jsx)(c.b,{path:"/",exact:!0,component:L}),Object(x.jsx)(c.b,{path:"/register",exact:!0,component:T}),Object(x.jsx)(c.b,{path:"/login",exact:!0,component:I}),Object(x.jsx)(c.b,{path:"/contact",exact:!0,component:R})]})};i.a.render(Object(x.jsx)(H,{}),document.getElementById("root"))},75:function(e,t,a){},77:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.4451bf63.chunk.js.map