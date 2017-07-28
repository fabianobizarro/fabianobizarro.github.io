import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (

            <footer className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                        <p>
                            <a className="icon" href="https://github.com/fabianobizarro/fabianobizarro.github.io">
                                <i className="fa fa-github"></i>
                            </a>
                            - 
                            Feito com dedicação. E com <a href="https://github.com/jgthms/bulma">Bulma</a> + <a href="https://facebook.github.io/react/">React</a>
                        </p>
                    </div>
                </div>
            </footer>

        );
    }
}

export default Footer;