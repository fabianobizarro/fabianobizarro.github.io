import React from 'react';


const TimeLineItem = ({ children }) => (
    <div className="timeline-item">
        <div className="timeline-left">
            <a href="#" className="timeline-icon"></a>
        </div>
        <div className="timeline-content">
            <div className="level">
                <div className="level-left">
                    <div className="level-item">
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default TimeLineItem;