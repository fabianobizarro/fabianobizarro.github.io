import React, { Component } from 'react';

import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';

class Tabs extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedTab: 'education',
            tabs: [
                // {
                //     type: 'education',
                //     text: {
                //         'ptBR': 'Educação',
                //         'enUS': 'Education'
                //     }
                // }                
                {
                    type: 'education',
                    text: 'Educação'
                },
                {
                    type: 'exp',
                    text: 'Experiência'
                },
                {
                    type: 'skills',
                    text: 'Habilidades'
                }
            ]
        }

        this.selectTab = this.selectTab.bind(this);
    }

    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="tabs is-medium">
                        <ul>
                            <li className="is-active" >
                                <a onClick={e => this.selectTab('education')}>
                                    Educação
                                </a>
                            </li>
                            <li>
                                <a onClick={e => this.selectTab('exp')}>
                                    Experiências
                                </a>
                            </li>
                            <li>
                                <a onClick={e => this.selectTab('skills')}>
                                    Habilidades
                                </a>
                            </li>
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

    isTabSelected(target) {
        return name === this.state.selectedTab;
    }

    selectTab(name) {
        console.log(name);
        this.setState({ selectedTab: name });
    }
}

export default Tabs;
