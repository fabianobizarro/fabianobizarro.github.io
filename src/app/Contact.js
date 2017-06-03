import React, { Component } from 'react';

import gs from './globalState';

class Contact extends Component {

    render() {
        console.log(gs);

        return (
            <div classID="contact" id="contact">
                <div className="container has-text-centered">

                    <a href="mailto:fabianobizarro@outlook.com" target="_blank">
                        <i className="fa fa-envelope fa-2x"></i>
                    </a>

                    <a href="https://fabianobizarro.github.io">
                        <i className="fa fa-globe fa-2x"></i>
                    </a>

                    <a href="https://github.com/fabianobizarro" target="_blank">
                        <i className="fa fa-github fa-2x"></i>
                    </a>

                    <a href="https://twitter.com/fabianobizarro" target="_blank">
                        <i className="fa fa-twitter fa-2x"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/fabianobizarro" target="_blank">
                        <i className="fa fa-linkedin fa-2x"></i>
                    </a>

                </div>
            </div>
        );
    }
}

export default Contact;