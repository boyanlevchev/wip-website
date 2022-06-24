import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact(props) {

  return (
    <article className={"page-padding"}>
      <section>
        <p>
          <FontAwesomeIcon icon={faEnvelope} className={"contact-icons"}/> julie.dusuel (at) network.rca.ac.uk
        </p>
        <p>
          <FontAwesomeIcon icon={faInstagram} className={"contact-icons"} /> @julie.dusuel
        </p>
      </section>
    </article>
  );
}

export default Contact;
