import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact(props) {

  return (
    <article className={"page-padding"}>
      <section className={"text-column"}>
        <p className={"flex align-center"}>
          <FontAwesomeIcon icon={faEnvelope} className={"contact-icons"}/> julie.dusuel (at) network.rca.ac.uk
        </p>
        <p className={"flex align-center"}>
          <FontAwesomeIcon icon={faInstagram} className={"contact-icons"} /> <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/julie.dusuel/">@julie.dusuel</a>
        </p>
      </section>
    </article>
  );
}

export default Contact;
