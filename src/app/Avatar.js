import React, { Component } from 'react';

class Avatar extends Component {

    render() {
        return (
            <div classID="avatar" className="has-text-centered">
                <figure className="image is-128x128 center">
                    <img src="https://avatars3.githubusercontent.com/u/10547541?v=3&s=466" className="circle" />
                </figure>

                <h1 className="title">Fabiano Bizarro</h1>
                <h2 className="subtitle">Desenvolvedor</h2>
            </div>
        );
    }
}

export default Avatar;