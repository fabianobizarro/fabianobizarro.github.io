import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            urlCV_enUS: 'http://bit.ly/cv_fbizarro_en',
            urlCV_ptBR: 'http://bit.ly/cv_fbizarro',
            menuOpened: false
        }

        this.onMenuClick = this.onMenuClick.bind(this);
    }

    render() {
        return (
            <nav className="navbar has-shadow">
                <div className="navbar-brand">
                    <a className="navbar-item" href="#">
                        Fabiano Bizarro
                    </a>

                    <div className={"navbar-burger burger " + (this.state.menuOpened ? "is-active" : "")} id="menuTogggle" onClick={this.onMenuClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className={"navbar-menu " + (this.state.menuOpened ? "is-active" : "")}>

                    <div className="navbar-end">
                        {
                            this.props.lang === 'pt-br'
                                ?
                                <a className="navbar-item is-hidden-desktop-only" href="en-us.html">
                                    Resume in English
                                </a>
                                :
                                <a className="navbar-item is-hidden-desktop-only" href="index.html">
                                    CV in Portuguese
                                </a>
                        }
                        <div className="navbar-item">
                            <div className="field is-grouped">

                                <p className="control">
                                    <a className="button is-primary" href={this.state.urlCV_ptBR} target="_blank">
                                        <span className="icon">
                                            <i className="fa fa-download"></i>
                                        </span>
                                        <span>CV - Português</span>
                                    </a>
                                </p>
                                <p className="control">
                                    <a className="button is-primary" href={this.state.urlCV_enUS} target="_blank">
                                        <span className="icon">
                                            <i className="fa fa-download"></i>
                                        </span>
                                        <span>CV - English</span>
                                    </a>
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        );
    }

    onMenuClick() {
        this.setState((prev) => {
            return { menuOpened: !prev.menuOpened }
        });
    }
}

const mapState = (state) => ({
    lang: state
});

const Container = connect(mapState)(Menu);

export default Container;