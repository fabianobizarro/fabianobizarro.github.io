import React from 'react';

const TimeLineItem = ({ children }) => (
  <div className="timeline-item">
    <div className="timeline-marker is-ligth"></div>
    <div className="timeline-content">
      <div className="level" style={{ float: 'left' }}>
        <div className="level-left">
          <div className="level-item">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TimeLineItem;
