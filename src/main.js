// import the base sass file
import './style.css';
import 'bulma';
import 'animate.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './app/Menu';
import BaseInfo from './app/BaseInfo';
import Tabs from './app/Tabs';
import Footer from './app/Footer';

import gs from './app/globalState';

const App = (props) => {
    
    gs.lang = props.lang;

    return (
        <div>
            <Menu />
            <BaseInfo />
            <Tabs />
            <Footer />
        </div>
    )
}

let containerElement = document.getElementById("container");
let lang = containerElement.getAttribute('lang');

ReactDOM.render(<App lang={lang} />, containerElement);