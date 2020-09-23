import React from 'react';
import {Link} from 'react-router-dom';

const AboutUs = () => (
  <section id="about-us">
    <p>Company: ThoughtWorks Local</p>
    <p>Location: Xi'an</p>
    <p></p>
    <p>For more information, please</p>
    <p>view our <Link to='/'>website</Link>.</p>
  </section>
);

export default AboutUs;
