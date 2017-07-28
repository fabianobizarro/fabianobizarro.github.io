import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            urlCV_enUS: 'https://goo.gl/V5UwnC',
            urlCV_ptBR: 'https://goo.gl/JpW1vw',
            menuOpened: false
        }

        this.onMenuClick = this.onMenuClick.bind(this);
    }

    render() {
        return (
            <nav className="nav has-shadow">
                <div className="nav-left">
                    <a className="nav-item is-brand" href="#">
                        Fabiano Bizarro
                    </a>
                </div>

                <span className={"nav-toggle " + (this.state.menuOpened ? "is-active" : "")} id="menuTogggle" onClick={this.onMenuClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>

                <div className={"nav-right nav-menu menu-options " + (this.state.menuOpened ? "is-active" : "")}>

                    {
                        
                        this.props.lang === 'pt-br'
                            ?
                            <a className="nav-item" href="en-us.html">
                                Resume in English
                            </a>
                            :
                            <a className="nav-item" href="index.html">
                                CV in Portuguese
                            </a>
                    }


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