import React from 'react';

const Contact = () => (
  <div classID="contact" id="contact">
    <div className="container has-text-centered">
      <a
        href="mailto:fabianoasbizarro@gmail.com"
        target="_blank"
        rel="noopener"
      >
        <i className="fa fa-envelope fa-2x"></i>
      </a>

      <a href="https://fabianobizarro.github.io" rel="noopener">
        <i className="fa fa-globe fa-2x"></i>
      </a>

      <a
        href="https://github.com/fabianobizarro"
        target="_blank"
        rel="noopener"
      >
        <i className="fa fa-github fa-2x"></i>
      </a>

      <a
        href="https://twitter.com/fabianobizarro"
        target="_blank"
        rel="noopener"
      >
        <i className="fa fa-twitter fa-2x" style={{ color: '#1da1f2' }}></i>
      </a>

      <a
        href="https://www.linkedin.com/in/fabianobizarro"
        target="_blank"
        rel="noopener"
      >
        <i className="fa fa-linkedin fa-2x" style={{ color: '#0084bf' }}></i>
      </a>
    </div>
  </div>
);

export default Contact;
