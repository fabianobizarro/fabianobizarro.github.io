import React from 'react';
import { connect } from 'react-redux';
import TimeLineItem from '../TimeLineItem';
import experiences from './experience';

export const Experience = ({ lang }) => (
  <div className="animated fadeIn" style={{ paddingTop: '10px' }}>
    <article className="media">
      <div className="media-content">
        <div className="content is-medium timeline">
          {experiences[lang].map((e, i) => (
            <TimeLineItem key={i}>
              <p className="heading">{e.period}</p>
              <p>
                <strong> {e.title} </strong> <br />
                {e.company}
              </p>
            </TimeLineItem>
          ))}
        </div>
      </div>
    </article>
  </div>
);

const mapState = state => ({
  lang: state.lang,
});

const container = connect(mapState)(Experience);

export default container;
