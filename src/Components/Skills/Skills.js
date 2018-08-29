import React from 'react';
import skills from './skills';
import { connect } from 'react-redux';

const SkillItem = ({ skill }) => (
    <p className="box">
        <strong> {skill.title} </strong>
        <br />
        {
            skill.items.join(' / ')
        }
    </p>
)

const Skills = ({lang}) => {

    return (
        <div className="animated fadeIn" style={{ paddingTop: "10px" }}>
            <article className="media">

                <div className="media-content">

                    <div className="content is-medium">
                        <div className="columns is-multiline">
                            {
                                skills[lang].map((skill, i) => (
                                    <div className="column is-6" key={i} >
                                        <SkillItem skill={skill} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}

const mapState = (state) => ({
    lang: state.lang
});

const Container = connect(mapState)(Skills);

export default Container;
