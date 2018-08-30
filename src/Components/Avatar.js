import React, { Component } from 'react';
import { connect } from 'react-redux';

export const Avatar = ({ lang }) =>
    (
        <div classID="avatar" className="has-text-centered">
            <figure className="image is-128x128 center">
                <img src="https://avatars3.githubusercontent.com/u/10547541?v=3&s=466" className="circle" />
            </figure>
            <h1 className="title" style={{ marginTop: "10px" }}>Fabiano Bizarro</h1>
            <h2 className="subtitle">
                {lang === "pt-br" ? "Desenvolvedor" : "Developer"}
            </h2>
        </div>
    );

const mapState = (state) => ({
    lang: state.lang
});

const Container = connect(mapState)(Avatar);

export default Container;
