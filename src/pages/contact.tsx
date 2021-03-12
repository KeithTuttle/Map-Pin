import React from 'react';

import { AriaAttributes, DOMAttributes } from "react";



declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      class?: string;
      for?: string;
      style?: CSSProperties;
    }
  };


  const Contact = () => {
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
                                <a class="active"  href="/contact">Contact Us</a>
                                <a href="/register">Register</a>
                                <a href="/login">Login</a>
                                <a href="/about">About</a>
                                <a href="/home">Home</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Title */}
                <div class="title">
                    <h1 class="page_title">Contact The&nbsp;</h1>
                    <h1 class="main_title">Map-Pin</h1>
                    <h1 class="page_title">&nbsp;Team</h1>
                </div>
                {/* Contact Form*/}
                <div class="container">
                    <div class="inner_navcontainer">
                        <div class="inner_contactcontainer">
                            <form>
                                <label for="fname">First Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="Your first name..."></input>

                                <label for="lname">Last Name</label>
                                <input type="text" id="lname" name="lastname" placeholder="Your last name..."></input>

                                <label for="email">E-mail</label>
                                <input type="email" id="email" name="email" placeholder="Your e-mail..."></input>

                                <label for="message">What do you need to share?</label>
                                <textarea id="message" name="message" placeholder="Write your message here..."></textarea>

                                <input type="submit" value="Submit"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
};
export default Contact;