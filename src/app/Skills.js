import React, { Component } from 'react';

class Skills extends Component {


    constructor(props) {
        super(props);

        this.state = {}
    }


    render() {
        return (
            <div className="animated fadeIn" style={{ paddingTop: "10px" }}>
                <article className="media">

                    <div className="media-content">

                        <div className="content is-medium">

                            <div className="columns">
                                <div className="column">
                                    <p>
                                        <strong>Idiomas</strong>
                                        <br /> Português (Nativo)
                                        <br /> Inglês (Intermediário)
                                    </p>
                                </div>
                                <div className="column">
                                    <p>
                                        <strong>Linguagens de Programação</strong>
                                        <br /> C# / Javascript
                                        <br /> Conhecimento básico: PHP, Java
                                    </p>
                                </div>
                            </div>

                            <div className="columns">
                                <div className="column">
                                    <p>
                                        <strong>Banco de dados</strong>
                                        <br /> MongoDB / SQL Server / MySQL
                                    </p>
                                </div>
                                <div className="column">
                                    <p>
                                        <strong>Plataformas</strong>
                                        <br /> .NET / ASP .NET / Node.js / Docker
                                    </p>
                                </div>
                            </div>

                            <div className="columns">
                                <div className="column">
                                    <p>
                                        <strong>Frameworks</strong>
                                        <br /> ASP .NET MVC / Windows Forms / Express.js / Entity Framework / Ionic
                                    </p>
                                </div>
                                <div className="column">
                                    <p>
                                        <strong>Front-End</strong>
                                        <br /> AngularJS / jQuery / Bootstrap
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default Skills;