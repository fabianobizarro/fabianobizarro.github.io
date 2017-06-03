import React, { Component } from 'react';

import Avatar from './Avatar';
import Contact from './Contact';

class BaseInfo extends Component {
    render() {
        return (
            <section classID="baseInfo" className="section">
                <div className="container">
                    <Avatar />
                    <Contact />
                </div>
            </section>
        );
    }
}

export default BaseInfo;
