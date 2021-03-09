import React from 'react';

import Avatar from './Avatar';
import Contact from './Contact';

const BaseInfo = () => (
  <section classID="baseInfo" className="section" style={{ paddingBottom: 0 }}>
    <div className="container">
      <Avatar />
      <Contact />
    </div>
  </section>
);

export default BaseInfo;
