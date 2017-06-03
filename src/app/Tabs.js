import React, { Component } from 'react';

import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';

import gs from './globalState';

class Tabs extends Component {

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
        return (
            <section className="section">
                <div className="container">
                    <div className="tabs is-medium is-fullwidth">
                        <ul>
                            {
                                this.state.tabs.map(t => {

                                    return (
                                        <li className={this.isTabSelected(t.type) ? "is-active" : ""} key={t.type}>
                                            <a onClick={e => this.selectTab(t.type)}>
                                                {t.text[gs.lang]}
                                            </a>
                                        </li>
                                    )

                                })
                            }
                        </ul>
                    </div>
                    <div classID="tab-content">
                        {this.content()}
                    </div>
                </div>
            </section>
        );
    }

    content() {
        switch (this.state.selectedTab) {
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

export default Tabs;
