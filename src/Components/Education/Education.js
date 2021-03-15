import React from 'react';
import education from './education.json';
import TimeLineItem from '../TimeLineItem';
import { connect } from 'react-redux';

export const Education = ({ lang }) => (
  <div className="animated fadeIn" style={{ paddingTop: '10px' }}>
    <article className="media">
      <div className="media-content">
        <div className="content is-medium timeline">
          {education[lang].map((e, i) => (
            <TimeLineItem key={i}>
              <p className="heading"> {e.period} </p>
              <p> {e.type} </p>
              <p>
                {' '}
                <strong>{e.title}</strong>{' '}
              </p>
              <p> {e.place} </p>
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

const Container = connect(mapState)(Education);

export default Container;
