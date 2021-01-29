import React, { useState } from 'react';

import PornLoadingImage from '../images/wip-porn-loading-image.jpg';

import BackArrow from '../components/back_arrow';
import StickyNote from '../components/sticky_note';
import WhiteBoard from '../components/white_board';
import Video from '../components/video';
import Image from '../components/image';

function ThePornProject(props) {

  const [ sexRaceAndColonies ] = useState({
    reference: <span>
                  <span>Review essay KAYA DAVIES HAYON,</span>
                  <span className={"bold italic"}>Sexe, race et colonies and the Aesthetics-Ethics Debate in the Francophone Postcolonial Visual Field. </span>
                  <span>Bulletin of Francophone Postcolonial Studies A Biannual Publication, 11.1, Spring 2020, ISSN 2044-4109 (Online).</span>
                  <a href={'http://sfps.org.uk/wp-content/uploads/2020/03/11.1-online.pdf'}>http://sfps.org.uk/wp-content/uploads/2020/03/11.1-online.pdf</a>
                </span>,
    content: <span className={"italic"}>"It is quite surprising that a book that seems so keenly aware of — and indeed is premised upon an analysis of — the relationship between images and the perpetuation of damaging ideas about sexualized and racialized bodies should show so little critical awareness of its own format and material status. In response to Artières’s criticisms, Pascal Blanchard has argued that it is the researcher’s responsibility to take an objective distance from the material examined, and that the images needed to be included not as peripheral material, but as ‘des sources informatives centrales pour la comprehension du système colonial’.11 It is perhaps easier to have a distance from images like these if you are not a descendant of colonial violence. However, this justification does not really explain why the critical text does not, for the most part, engage with the individual images. It also does not deal adequately with the issue of who — in a moral and ethical sense — can claim ownership to these images and thereby has the right to decide how and when they should be reproduced."</span>
  })

  console.log()
  return(
    <div className={"page-size porn-page"}
          style={{backgroundColor: "#F24726"}}>
      <div
        className={"w-100 porn-navbar"}>
        <BackArrow destination={"/"}/>
        <div className={"margins"}>
          <h1>The porn project</h1>
        </div>
      </div>


      <WhiteBoard>
        {/* Videos */}
        <Video  title={"My Body, My Rules"}
                source={"https://player.vimeo.com/video/142807045"}
                top={50}
                left={400}
                height={100}
                width={200}/>


        {/* Images */}
        <Image  title={"Furry character giving felatio"}
                source={PornLoadingImage}
                height={400}
                top={200}
                left={400}/>


        {/* Sticky Note References */}
        <StickyNote bgColor={"#C4208A"}
                    width={90}
                    top={300}
                    left={50}
                    fontSize={6}
                    textColor={"white"}
                    reference={sexRaceAndColonies.reference}
                    content={sexRaceAndColonies.content}/>

        <StickyNote bgColor={"#0819BD"}
                    width={240}
                    top={300}
                    left={190}
                    fontSize={17}
                    textColor={"white"}
                    content={"Long term project to build an interactive VR porn game. Questioning sexual representations, sexual desire and body representations away from the straight white male gaze. Looking at accessibility and tech through the angle of Virtual Reality."}/>


      </WhiteBoard>
      </div>
  );
}

export default ThePornProject;
