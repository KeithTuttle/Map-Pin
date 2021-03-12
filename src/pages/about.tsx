import React from 'react';

import { AriaAttributes, DOMAttributes } from "react";



declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      class?: string;
    }
  };


  const About = () => {
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
                                <a class="active"  href="/about">About</a>
                                <a href="/register">Register</a>
                                <a href="/home">Home</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Title */}
                <div class="title">
                    <h1 class="page_title">About&nbsp;</h1>
                    <h1 class="main_title">Map-Pin</h1>
                </div>
            </body>
        </html>
    );
};
export default About;