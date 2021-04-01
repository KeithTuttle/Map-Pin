import React from 'react';

import { AriaAttributes, DOMAttributes } from "react";

import RegisterUser from "../components/register-user.component";

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      class?: string;
    }
  };


  const Register = () => {
    return (
  
        <html lang="en">
            <head>
                <title>Map-Pin</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
               
            </head>
            <body>
                <div class="container">
                    <div class="inner_navcontainer">
                        {/* Top Navbar */}
                        <div class="topnav">
                            <div class="topnav_left">
                                <p class="main_title">Map-Pin</p>
                            </div>
                            <div class="topnav_right">
                                <a href="/contact">Contact Us</a>
                                <a class="active" href="/register">Register</a>
                                <a href="/login">Login</a>
                                <a href="/about">About</a>
                                <a href="/home">Home</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Title */}
                <div class="title">
                    <h1 class="page_title">Register For A&nbsp;</h1>
                    <h1 class="main_title">Map-Pin</h1>
                    <h1 class="page_title">&nbsp;Account</h1>
                </div>
                <div class="container">
                    <div class="inner_navcontainer">
                        <RegisterUser/>
                    </div>
                </div>
            </body>
        </html>
    );
};
export default Register;