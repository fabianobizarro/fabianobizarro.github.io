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

const App = () => {
    return (
        <div>
            <Menu />
            <BaseInfo />
            <Tabs />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("container"));