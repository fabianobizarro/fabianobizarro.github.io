import React, { Component } from 'react';

import Avatar from './Avatar';
import Contact from './Contact';

class BaseInfo extends Component {
    render() {
        return (
            <section classID="baseInfo" className="section">
                <div className="container">

                    <div className="columns is-mobile">
                        <div className="column">
                            <Avatar />
                        </div>
                        <div className="column">
                            <Contact />
                        </div>
                    </div>
                    
                </div>
            </section>
        );
    }
}

export default BaseInfo;
