(this.webpackJsonpmappin=this.webpackJsonpmappin||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(21),i=a.n(r),o=(a(76),a(77),a(18)),c=a(9),l=(a(78),a(10)),u=a(12),d=a(8),h=a(14),m=a(13),b=a(65),j=new(a(66).Dispatcher),g=new(function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).user=null,e}return Object(u.a)(a,[{key:"setUser",value:function(e){console.log("setting user to: "+(null===e||void 0===e?void 0:e.username)),this.user=e,this.emit("change")}},{key:"getUser",value:function(){return console.log("getting the user"),this.user}},{key:"handleActions",value:function(e){switch(e.type){case"SET_USER":this.setUser(e.user)}}}]),a}(b.EventEmitter));j.register(g.handleActions.bind(g));var p=g;function v(e){j.dispatch({type:"SET_USER",user:e})}var O,f=function e(){Object(l.a)(this,e),this.username="",this.pins=[]},x=a(2),w=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).clearUsername=n.clearUsername.bind(Object(d.a)(n)),n.state={username:""},n}return Object(u.a)(a,[{key:"clearUsername",value:function(){localStorage.removeItem("user"),this.setState({username:""});var e=new f;e.username="",v(e)}},{key:"componentDidMount",value:function(){var e=this;p.on("change",(function(){var t,a=null===(t=p.getUser())||void 0===t?void 0:t.username;void 0==a&&(a=""),e.setState({username:a})}))}},{key:"render",value:function(){return Object(x.jsxs)("nav",{className:"container topnav navbar navbar-dark bg-dark navbar-expand-lg",children:[Object(x.jsx)(o.b,{to:"/",className:"main_title navbar-brand",children:"MapPin"}),Object(x.jsxs)("div",{className:"collpase navbar-collapse",children:[""==this.state.username&&Object(x.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(x.jsx)("li",{className:"navbar-item",children:Object(x.jsx)(o.b,{style:{color:"white"},to:"/contact",className:"nav-link",children:"Contact Us "})}),Object(x.jsx)("li",{className:"navbar-item",children:Object(x.jsx)(o.b,{style:{color:"white"},to:"/register",className:"nav-link",children:"Register"})}),Object(x.jsx)("li",{className:"navbar-item",children:Object(x.jsx)(o.b,{style:{color:"white"},to:"/login",className:"nav-link",children:"Log-In"})})]}),""!=this.state.username&&Object(x.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(x.jsx)("li",{className:"navbar-item",children:Object(x.jsx)(o.b,{style:{color:"white"},to:"/contact",className:"nav-link",children:"Contact Us "})}),Object(x.jsx)("li",{className:"navbar-item",children:Object(x.jsxs)(o.b,{style:{color:"white"},to:"/login",className:"nav-link",onClick:this.clearUsername,children:[" Logout ",this.state.username]})})]})]})]})}}]),a}(s.a.Component),y=a(25),S=a(22),C=a.n(S),k=a(127),N=a(126),U=a(30),A=function(e,t){return Object(x.jsxs)(k.a,{id:"popover-basic",children:[Object(x.jsx)(k.a.Title,{as:"h3",children:"Popover bottom"}),Object(x.jsxs)(k.a.Content,{children:["Latitude: ",e.toFixed(2),Object(x.jsx)("br",{}),"Longitude: ",t.toFixed(2),Object(x.jsx)("br",{}),"Current User: ",localStorage.getItem("user")]})]})};!function(e){e[e.ADD=0]="ADD",e[e.DELETE=1]="DELETE",e[e.UPDATE=2]="UPDATE"}(O||(O={}));var E=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).updateViewport=function(e){n.setState((function(t){return{viewport:Object(y.a)(Object(y.a)({},t.viewport),e)}}))},n.resize=function(){n.setState((function(e){return{viewport:Object(y.a)(Object(y.a)({},e.viewport),{},{height:window.innerHeight,width:window.innerWidth})}}))},n.convertMarkers=function(){var e=n.state.markers.slice();n.state.pins.forEach((function(t){return e.push(Object(x.jsx)(N.a,{rootClose:!0,trigger:"click",placement:"bottom",overlay:A(t.lat,t.long),children:Object(x.jsx)(U.a,{latitude:t.lat,longitude:t.long,offsetLeft:-20,offsetTop:-10,children:Object(x.jsx)("img",{className:"imageHover",src:"/assets/pin.jpg",alt:"Here",style:{width:35,height:35}})})}))})),n.setState({markers:e})},n.addPin=function(e){var t=n.state.pins.slice(),a={name:"temporary",lat:e.lngLat[1],long:e.lngLat[0],description:"temporary"};t.push(a),C.a.post("http://localhost:5000/users/update/username/"+localStorage.getItem("user"),{username:localStorage.getItem("user"),pins:t}),n.setState({pins:t}),n.convertMarkers()},n.deleteMarker=function(e){n.setState((function(t){return{markers:t.markers.filter((function(t){return t.props.children.props.latitude!==e[0]&&t.props.children.props.longitude!==e[1]}))}}))},n.setPinActionAdd=n.setPinActionAdd.bind(Object(d.a)(n)),n.setPinActionDelete=n.setPinActionDelete.bind(Object(d.a)(n)),n.setPinActionUpdate=n.setPinActionUpdate.bind(Object(d.a)(n)),n.mapClickHandler=n.mapClickHandler.bind(Object(d.a)(n)),n.state={pinAction:O.ADD,viewport:{height:400,latitude:39.4018552,longitude:-76.602388,width:400,zoom:14},pins:[],markers:[Object(x.jsx)(N.a,{rootClose:!0,trigger:"click",placement:"bottom",overlay:A(39.406,-76.61),children:Object(x.jsx)(U.a,{latitude:39.406,longitude:-76.61,offsetLeft:-20,offsetTop:-10,children:Object(x.jsx)("img",{className:"imageHover",src:"/assets/pin.jpg",alt:"Here",style:{width:35,height:35}})})})]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",this.resize),this.resize(),C.a.get("http://localhost:5000/users/username/"+localStorage.getItem("user")).then((function(t){console.log(t.data),e.setState({pins:t.data.pins}),e.convertMarkers()}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"setPinActionAdd",value:function(){this.setState({pinAction:O.ADD})}},{key:"setPinActionDelete",value:function(){this.setState({pinAction:O.DELETE})}},{key:"setPinActionUpdate",value:function(){this.setState({pinAction:O.UPDATE})}},{key:"mapClickHandler",value:function(){this.state.pinAction===O.ADD&&alert("Send to add method"),this.state.pinAction===O.DELETE&&alert("Send to delete method"),this.state.pinAction===O.UPDATE&&alert("Send to update method")}},{key:"render",value:function(){var e=this,t=this.state.viewport;return Object(x.jsxs)("span",{children:[Object(x.jsx)("button",{className:"btn btn-danger",onClick:this.setPinActionAdd,style:{marginTop:"10px",marginRight:"10px"},type:"button",children:"Add"}),Object(x.jsx)("button",{className:"btn btn-danger",onClick:this.setPinActionDelete,style:{marginTop:"10px",marginRight:"10px"},type:"button",children:"Delete"}),Object(x.jsx)("button",{className:"btn btn-danger",onClick:this.setPinActionUpdate,style:{marginTop:"10px",marginRight:"10px"},type:"button",children:"Update"}),Object(x.jsxs)("span",{children:["TRACKED ENUM VALUE: ",this.state.pinAction]}),Object(x.jsx)("button",{className:"btn btn-danger",onClick:this.mapClickHandler,style:{marginTop:"10px",marginLeft:"10px"},type:"button",children:"Map Click!"}),Object(x.jsxs)(U.c,Object(y.a)(Object(y.a)({},t),{},{className:"map-size",mapboxApiAccessToken:"pk.eyJ1IjoiYXR1dHRsZSIsImEiOiJja2x1bTdjOWIwMGwwMnhvMGdyN25jZ3I2In0.w195Lbtc6bu0CESgOWeAGw",onViewportChange:function(t){return e.updateViewport(t)},onClick:function(t){return e.addPin(t)},children:[this.state.markers,Object(x.jsx)("div",{children:Object(x.jsx)(U.b,{onViewportChange:this.updateViewport})})]}))]})}}]),a}(n.Component),P=a(128),D=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)(P.a,{variant:"success",children:"Edit Your Pins!"})})}}]),a}(n.Component),L=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n,s;return Object(l.a)(this,a),(s=t.call(this,e)).state={username:null===(n=p.getUser())||void 0===n?void 0:n.username},s}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.on("change",(function(){var t,a=null===(t=p.getUser())||void 0===t?void 0:t.username;void 0==a?(console.log("home name is undefined - in if"),e.setState({username:""})):(console.log("home set the state"),e.setState({username:a}),console.log("home state: "+e.state.username))}))}},{key:"getUserFromLocalStorage",value:function(e){console.log("getting user from local storage"),C.a.get("http://localhost:5000/users/username/".concat(e)).then((function(e){console.log("result from getting user from local storage: "+e.data),v(e.data),console.log(p.getUser)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){if(""!=this.state.username&&void 0!=this.state.username&&null!=this.state.username||null!=localStorage.getItem("user")){var e=localStorage.getItem("user");return null!=e&&null==p.getUser()&&this.getUserFromLocalStorage(e),Object(x.jsxs)("div",{id:"mapbox",className:"text-center",children:[Object(x.jsx)(D,{}),Object(x.jsx)(E,{})]})}return Object(x.jsx)(c.a,{push:!0,to:"/register"})}}]),a}(s.a.Component),T=a(27),M=a.n(T),F=a(28),I=a.n(F),R=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(d.a)(n)),n.onChangePassword=n.onChangePassword.bind(Object(d.a)(n)),n.onSubmit=n.onSubmit.bind(Object(d.a)(n)),n.state={username:"",password:"",redirect:!1,usernameError:""},n}return Object(u.a)(a,[{key:"onChangeUsername",value:function(e){var t=e.target;this.setState({username:t.value})}},{key:"onChangePassword",value:function(e){var t=e.target;this.setState({password:t.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({usernameError:""});var a=I()(M.a),n={username:this.state.username,password:this.state.password};try{C.a.post("http://localhost:5000/users/add",n).then((function(e){if(console.log(e.data),""!==e.data.error){if(!e.data.error.includes("username is taken"))return a.fire(Object(x.jsx)("p",{children:"Login Failed"}),Object(x.jsx)("span",{children:e.data.error}),"error");t.setState({usernameError:e.data.error})}else{if(null===e.data.user)return a.fire(Object(x.jsx)("p",{children:"Registration Failed"}),Object(x.jsx)("span",{children:"unexpected error occured"}),"error");v(e.data.user),localStorage.setItem("user",e.data.user.username),t.setState({redirect:!0})}})).catch((function(e){return console.log(e)}))}catch(s){console.log(s)}}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"container",style:{marginLeft:"auto",marginRight:"auto",width:"30%"},children:[this.state.redirect?Object(x.jsx)(c.a,{push:!0,to:"/"}):null,Object(x.jsx)("h3",{children:"Create Account"}),Object(x.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Username: "}),Object(x.jsx)("input",{type:"text",style:{width:"90%"},required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername}),this.state.usernameError.length>0&&Object(x.jsx)("div",{style:{color:"red",fontWeight:"bold",paddingBottom:"10px"},children:this.state.usernameError}),Object(x.jsx)("label",{children:"Password: "}),Object(x.jsx)("input",{type:"password",style:{width:"90%"},required:!0,className:"form-control",value:this.state.password,onChange:this.onChangePassword})]}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{type:"submit",value:"Register",className:"btn btn-primary"})})]})]})}}]),a}(s.a.Component),H=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChangeUsername=n.onChangeUsername.bind(Object(d.a)(n)),n.onChangePassword=n.onChangePassword.bind(Object(d.a)(n)),n.onSubmit=n.onSubmit.bind(Object(d.a)(n)),n.state={username:"",password:"",users:[],redirect:!1,wrongUsername:"",wrongPassword:""},n}return Object(u.a)(a,[{key:"onChangeUsername",value:function(e){var t=e.target;this.setState({username:t.value})}},{key:"onChangePassword",value:function(e){var t=e.target;this.setState({password:t.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),this.setState({wrongPassword:"",wrongUsername:""});var a={username:this.state.username,password:this.state.password};C.a.post("http://localhost:5000/users/login",a).then((function(e){if(console.log(e),""!==e.data.error)e.data.error.includes("Username")&&t.setState({wrongUsername:e.data.error}),e.data.error.includes("Password")&&t.setState({wrongPassword:e.data.error});else{var a;if(null===e.data.user)return I()(M.a).fire(Object(x.jsx)("p",{children:"Login Failed"}),Object(x.jsx)("span",{children:"User was not found"}),"error");v(e.data.user),localStorage.setItem("user",null===(a=e.data.user)||void 0===a?void 0:a.username),t.setState({redirect:!0})}})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"container",style:{marginLeft:"auto",marginRight:"auto",width:"30%"},children:[this.state.redirect?Object(x.jsx)(c.a,{to:{pathname:"/"}}):null,Object(x.jsx)("h3",{children:"Sign in to Your Account"}),Object(x.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{children:"Username: "}),Object(x.jsx)("input",{type:"text",style:{width:"90%"},required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername}),this.state.wrongUsername.length>0&&Object(x.jsx)("div",{style:{color:"red",fontWeight:"bold",paddingBottom:"10px"},children:this.state.wrongUsername}),Object(x.jsx)("label",{children:"Password: "}),Object(x.jsx)("input",{type:"password",style:{width:"90%"},required:!0,className:"form-control",value:this.state.password,onChange:this.onChangePassword}),this.state.wrongPassword.length>0&&Object(x.jsx)("div",{style:{color:"red",fontWeight:"bold",paddingBottom:"10px"},children:this.state.wrongPassword})]}),Object(x.jsx)("div",{className:"form-group",children:Object(x.jsx)("input",{type:"submit",value:"Login",className:"btn btn-primary"})})]})]})}}]),a}(s.a.Component),W=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChangeFirstName=n.onChangeFirstName.bind(Object(d.a)(n)),n.onChangeLastName=n.onChangeLastName.bind(Object(d.a)(n)),n.onChangeEmail=n.onChangeEmail.bind(Object(d.a)(n)),n.onChangeMessage=n.onChangeMessage.bind(Object(d.a)(n)),n.onSubmit=n.onSubmit.bind(Object(d.a)(n)),n.state={firstName:"",lastName:"",email:"",message:"",status:"Submit"},n}return Object(u.a)(a,[{key:"onChangeFirstName",value:function(e){var t=e.target;this.setState({firstName:t.value})}},{key:"onChangeLastName",value:function(e){var t=e.target;this.setState({lastName:t.value})}},{key:"onChangeEmail",value:function(e){var t=e.target;this.setState({email:t.value})}},{key:"onChangeMessage",value:function(e){var t=e.target;this.setState({message:t.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=I()(M.a);this.setState({status:"Sending"}),C()({method:"POST",url:"http://localhost:5000/users/contact",data:this.state}).then((function(e){return"sent"===e.data.status?(t.setState({firstName:"",lastName:"",email:"",message:"",status:"Submit"}),a.fire(Object(x.jsx)("p",{children:"Message Sent!"}),Object(x.jsx)("span",{children:"Thank you for your email, we look forward to hearing from you!"}),"success")):"failed"===e.data.status?a.fire(Object(x.jsx)("p",{children:"Message Failed!"}),Object(x.jsx)("span",{children:"Uh oh! Something went wrong and we did not recieve your message"}),"error"):void 0}))}},{key:"render",value:function(){var e=this.state.status;return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsxs)("div",{className:"title",children:[Object(x.jsx)("h1",{className:"page_title",children:"Contact the\xa0"}),Object(x.jsx)("h1",{className:"main_title",children:"Map-Pin"}),Object(x.jsx)("h1",{className:"page_title",children:"\xa0Team"})]}),Object(x.jsx)("div",{style:{marginTop:"18px"},children:Object(x.jsx)("div",{className:"inner_navcontainer",children:Object(x.jsx)("div",{className:"inner_contactcontainer",children:Object(x.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(x.jsx)("label",{htmlFor:"fname",children:"First Name"}),Object(x.jsx)("input",{type:"text",id:"fname",name:"firstname",placeholder:"Your first name...",required:!0,className:"form-control",value:this.state.firstName,onChange:this.onChangeFirstName}),Object(x.jsx)("label",{htmlFor:"lname",children:"Last Name"}),Object(x.jsx)("input",{type:"text",id:"lname",name:"lastname",placeholder:"Your last name...",required:!0,className:"form-control",value:this.state.lastName,onChange:this.onChangeLastName}),Object(x.jsx)("label",{htmlFor:"email",children:"E-mail"}),Object(x.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Your e-mail...",required:!0,className:"form-control",value:this.state.email,onChange:this.onChangeEmail}),Object(x.jsx)("label",{htmlFor:"message",children:"What do you need to share?"}),Object(x.jsx)("textarea",{id:"message",name:"message",placeholder:"Write your message here...",required:!0,className:"form-control",value:this.state.message,onChange:this.onChangeMessage}),Object(x.jsx)("button",{type:"submit",style:{marginTop:"20px"},children:e})]})})})})]})}}]),a}(s.a.Component);var q=function(){return Object(x.jsxs)(o.a,{children:[Object(x.jsx)(w,{}),Object(x.jsx)("br",{}),Object(x.jsx)(c.b,{path:"/",exact:!0,component:L}),Object(x.jsx)(c.b,{path:"/register",exact:!0,component:R}),Object(x.jsx)(c.b,{path:"/login",exact:!0,component:H}),Object(x.jsx)(c.b,{path:"/contact",exact:!0,component:W})]})};i.a.render(Object(x.jsx)(q,{}),document.getElementById("root"))},76:function(e,t,a){},78:function(e,t,a){}},[[121,1,2]]]);
//# sourceMappingURL=main.fd076388.chunk.js.map