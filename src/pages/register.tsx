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
                {/* Top Navbar*/}
                <div class="topnav">
                    <a href="/register">Home</a>
                    <a href="/about">About</a>
                    <a class="active" href="/register">Register</a>
                    <a href="/contact">Contact Us</a>
                </div>
                {/* Title */}
                <div>
                    <h1 class="page_title">Register for Map-Pin</h1>
                    <div>
                        {RegisterUser}
                    </div>
                </div>
            </body>
        </html>
    );
};
export default Register;