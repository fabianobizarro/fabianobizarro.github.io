import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLanguage } from '../actions';

export class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urlCV_enUS: 'https://bit.ly/2XjDEis',
      urlCV_ptBR: 'https://bit.ly/2xacWxO',
      menuOpened: false,
    };

    this.onMenuClick = this.onMenuClick.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  render() {
    return (
      <nav className="navbar has-shadow">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            Fabiano Bizarro
          </a>

          <div
            className={
              'navbar-burger burger ' +
              (this.state.menuOpened ? 'is-active' : '')
            }
            id="menuTogggle"
            onClick={this.onMenuClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div
          className={
            'navbar-menu ' + (this.state.menuOpened ? 'is-active' : '')
          }
        >
          <div className="navbar-end">
            {this.props.lang === 'pt-br' ? (
              <a
                className="navbar-item is-hidden-desktop-only"
                href="?lang=en-us"
                data-lang="en-us"
              >
                Resume in English
              </a>
            ) : (
              <a
                className="navbar-item is-hidden-desktop-only"
                href="?lang=pt-br"
                data-lang="pt-br"
                // onClick={this.changeLanguage}
              >
                CV in Portuguese
              </a>
            )}
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a
                    className="button is-primary"
                    href={this.state.urlCV_ptBR}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon">
                      <i className="fa fa-download"></i>
                    </span>
                    <span>CV - Português</span>
                  </a>
                </p>
                <p className="control">
                  <a
                    className="button is-primary"
                    href={this.state.urlCV_enUS}
                    target="_blank"
                    rel="noreferrer"
                  >
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

  changeLanguage(e) {
    e.preventDefault();
    this.props.changeLanguage(e.target.dataset.lang);
  }

  onMenuClick() {
    this.setState(prev => {
      return { menuOpened: !prev.menuOpened };
    });
  }
}

const mapState = state => ({
  lang: state.lang,
});

const mapDisptchToProps = dispatch => ({
  changeLanguage: lang => {
    dispatch(changeLanguage(lang));
  },
});

const Container = connect(mapState, mapDisptchToProps)(Menu);

export default Container;
