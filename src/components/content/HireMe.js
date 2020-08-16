import React from 'react';
import { Helmet } from "react-helmet";

import HireMeSection from './hireme/HireMeSection';
import Tutoring from './hireme/Tutoring';
// shared part
import ContactForm from './index/ContactMe';

function HireMe () {
  return (
    <div id="hireMeSection">
      <Helmet>
        <title>{ `Hire me | 🤝 | Lukas Bunat - FullStack Developer` }</title>
        <meta name="description" content="Being a student, business contractor, company or another developer with an interest in collaboration? I will gladly discuss new opportunities with you!" />
      </Helmet>

      <h1>Hire Me</h1>
      <HireMeSection />
      <Tutoring />
      <ContactForm />
    </div>
  );
}

export default HireMe;
