import React, { Component } from 'react';

class Education extends Component {

    render() {
        return (
            <div className="animated fadeIn" style={{ paddingTop: "10px" }}>
                <article className="media">

                    <div className="media-content">

                        <div className="content is-medium">

                            <p>
                                Graduação
                                <br />
                                <strong>Bacharelado - Sistemas de Informação</strong>
                                <br />
                                Centro Universitário do Leste de Minas Gerais - Unileste MG
                                <br />
                                <span className="tag">Fevereiro/2013 - Dezembro/2016</span>
                                <br />
                            </p>

                            <p>
                                Ensino Médio/Curso Técnico
                                <br />
                                <strong>Técnico - Informática Industrial</strong>
                                <br /> Escola Técnica JK
                                <br />
                                <span className="tag">Fevereiro/2010 - Dezembro/2012</span>
                                <br />
                            </p>


                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default Education;