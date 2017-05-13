import React, { Component } from 'react';

class Contact extends Component {

    render() {
        return (
            <div classID="contact">
                <article className="media" classID="contact">
                    <div className="media-content">
                        <div className="content info">

                            <div className="columnsr">
                                {/*<div className="column">
                                    <ul className="no-point">
                                        
                                        <li>
                                            <span className="icon">
                                                <i className="fa fa-phone"></i>
                                            </span> (31) 99904-3366
                                        </li>
                                    </ul>
                                </div>*/}
                                <div className="columnr">
                                    <ul className="no-point">
                                        <li>
                                            <span className="icon">
                                                <i className="fa fa-home"></i>
                                            </span> Ipatinga, MG, Brasil
                                        </li>
                                        <li>
                                            <span className="icon">
                                                <i className="fa fa-envelope"></i>
                                            </span>
                                            <a href="mailto:fabianobizarro@outlook.com" target="_blank">fabianobizarro@outlook.com</a>
                                        </li>
                                        <li>
                                            <span className="icon">
                                                <i className="fa fa-globe"></i>
                                            </span>
                                            <a href="https://fabianobizarro.github.io">fabianobizarro.github.io</a>
                                        </li>
                                        <li>
                                            <span className="icon">
                                                <i className="fa fa-github"></i>
                                            </span>
                                            <a href="https://github.com/fabianobizarro" target="_blank">fabianobizarro</a>
                                        </li>
                                        <li> <span className="icon">
                                            <i className="fa fa-linkedin"></i>
                                        </span>
                                            <a href="https://www.linkedin.com/in/fabianobizarro" target="_blank">LinkedIn</a>
                                        </li>

                                    </ul>

                                </div>
                            </div>

                        </div>
                    </div>
                </article>

            </div>
        );
    }
}

export default Contact;