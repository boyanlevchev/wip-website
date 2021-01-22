import React, { useState } from 'react';

import PornLoadingImage from '../images/wip-porn-loading-image.jpg';
import BackArrow from '../components/back_arrow';
import StickyNote from '../components/sticky_note';

function ThePornProject(props) {

  const [ sexRaceAndColonies ] = useState({
    reference: <span>Review essay KAYA DAVIES HAYON, <span className={"bold italic"}>Sexe, race et colonies and the Aesthetics-Ethics Debate in the Francophone Postcolonial Visual Field. </span> Bulletin of Francophone Postcolonial Studies A Biannual Publication, 11.1, Spring 2020, ISSN 2044-4109 (Online). <a href={'http://sfps.org.uk/wp-content/uploads/2020/03/11.1-online.pdf'}>http://sfps.org.uk/wp-content/uploads/2020/03/11.1-online.pdf</a></span>,
    content: <span className={"italic"}>"It is quite surprising that a book that seems so keenly aware of — and indeed is premised upon an analysis of — the relationship between images and the perpetuation of damaging ideas about sexualized and racialized bodies should show so little critical awareness of its own format and material status. In response to Artières’s criticisms, Pascal Blanchard has argued that it is the researcher’s responsibility to take an objective distance from the material examined, and that the images needed to be included not as peripheral material, but as ‘des sources informatives centrales pour la comprehension du système colonial’.11 It is perhaps easier to have a distance from images like these if you are not a descendant of colonial violence. However, this justification does not really explain why the critical text does not, for the most part, engage with the individual images. It also does not deal adequately with the issue of who — in a moral and ethical sense — can claim ownership to these images and thereby has the right to decide how and when they should be reproduced."</span>
  })

  console.log()
  return(
    <div className={"margins"}>
      <BackArrow destination={"/"}/>

      <h1>The porn project</h1>

      <iframe className={"my-body-my-rules"} src={"https://player.vimeo.com/video/142807045"} title={"my body, my rule"} width={"640"} height={"360"} frameBorder={"0"} allow={"autoplay; fullscreen; picture-in-picture"} allowFullScreen></iframe>

      <img src={PornLoadingImage} alt="Furry character givign felatio" className={"porn-loading-image"}/>

      <StickyNote position={"sex-race-and-colonies"} bgColor={"bg-transparent-yellow"} reference={sexRaceAndColonies.reference} content={sexRaceAndColonies.content}/>
    </div>
  );
}

export default ThePornProject;
