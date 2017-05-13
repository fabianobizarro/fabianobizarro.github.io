import React, { Component } from 'react';

class Menu extends Component {


    constructor(props){
        super(props);

        this.state = {
            urlCV_enUS: 'https://goo.gl/V5UwnC',
            urlCV_ptBR: 'https://goo.gl/JpW1vw'
        }
    }

    render() {
        return (
            <nav className="nav has-shadow">
                <div className="nav-left">
                    <a className="nav-item is-brand" href="#">
                        Fabiano Bizarro
                    </a>
                </div>

                <span className="nav-toggle" id="menuTogggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>

                <div className="nav-right nav-menu menu-options">
                    <a className="nav-item" href="en-us.html">
                        Resume in English MUDAR AQUI
                    </a>

                    <span className="nav-item">
                        <a className="button is-info" href={this.state.urlCV_enUS} target="_blank">
                            <span className="icon">
                                <i className="fa fa-download"></i>
                            </span>
                            <span>CV - English</span>
                        </a>
                        <a className="button is-info" href={this.state.urlCV_ptBR} target="_blank">
                            <span className="icon">
                                <i className="fa fa-download"></i>
                            </span>
                            <span>CV - Português</span>
                        </a>
                    </span>
                </div>
            </nav>
        );
    }
}

export default Menu;