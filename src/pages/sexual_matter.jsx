import React from 'react';

import Image from '../components/image';

import SexualMatter1 from '../images/sexual_matter_1.png';

function SexualMatter(props) {

  return (
    <div className={""}>
      <article className={""}>
        <section className={"sexual-matter-heading-container"}>
          <h2 className={"sexual-matter-heading flex align-center color-white"}>
            Sexual Matter is a social practice workshop series created in response to the lack of spaces to critically and collectively explore contemporary reflections of erotism and sexual desire
          </h2>
          <p>
            These sessions wish to open a space for collective reflection and experimentation within the subject matter using conversation, meditation and creative writing.
          </p>
        </section>

        <section className={"sexual-matter-section-2"}>
          <h2 className={"sexual-matter-heading pt-3 color-grey"}>
            Upcoming Events
          </h2>
          <p className={"color-grey"}>
            04 December, 2022
            <br/>
            The Lab at Oaklands Rise, London, NW10 6FT
          </p>
        </section>
      </article>

      <Image
        source={SexualMatter1}
        alt="abstract colorful"
        style={{
          position: "absolute",
          zIndex: "-1",
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          height: "80%",
          width: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

export default SexualMatter;
