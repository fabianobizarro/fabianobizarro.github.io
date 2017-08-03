import React, { Component } from 'react';
import { connect } from 'react-redux';
import Education from './Education/Education';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';

export class Tabs extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedTab: 'exp',
            tabs: [
                {
                    type: 'exp',
                    text: {
                        'pt-br': 'Experiência',
                        'en-us': 'Experience'
                    }
                },
                {
                    type: 'education',
                    text: {
                        'pt-br': 'Educação',
                        'en-us': 'Education'
                    }
                },
                {
                    type: 'skills',
                    text: {
                        'pt-br': 'Habilidades',
                        'en-us': 'Skills'
                    }
                }
            ]
        }

        this.selectTab = this.selectTab.bind(this);
    }

    render() {
        let { lang } = this.props;
        return (
            <section className="section">
                <div className="container is-hidden-touch">
                    <div className="tabs is-fullwidth is-medium">
                        <ul>
                            {
                                this.state.tabs.map(t => {

                                    return (
                                        <li className={this.isTabSelected(t.type) ? "is-active" : ""} key={t.type}>
                                            <a onClick={e => this.selectTab(t.type)}>
                                                {t.text[lang]}
                                            </a>
                                        </li>
                                    )

                                })
                            }
                        </ul>
                    </div>
                    <div classID="tab-content">
                        {this.content(this.state.selectedTab)}
                    </div>
                </div>
                <div className="container is-hidden-desktop">
                    {
                        this.state.tabs.map((t, i) => {
                            return (
                                <div key={i}>
                                    <h5 className="title"> {t.text[lang]} </h5>
                                    {this.content(t.type)}
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        );
    }

    content(type) {
        switch (type) {
            case 'education':
                return <Education />;
            case 'skills':
                return <Skills />;
            case 'exp':
                return <Experience />;
            default:
                return null;
        }
    }

    isTabSelected(name) {
        return name === this.state.selectedTab;
    }

    selectTab(name) {
        this.setState({ selectedTab: name });
    }
}

const mapState = (state) => ({
    lang: state
})

const Container = connect(mapState)(Tabs);

export default Container;
