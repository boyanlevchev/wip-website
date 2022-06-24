// import React, { useState } from 'react';
import React from 'react';

// import BackArrow from '../../components/back_arrow';
// import StickyNote from '../components/sticky_note';
// import WhiteBoard from '../components/white_board';
// import Video from '../components/video';
// import Image from '../components/image';


//         //Import images like this, and then use the name you create to plug it into the Image component
//        // ⬇︎ NAME ⬇︎   //      //  ⬇︎ SOURCE IN RELATION TO THIS PAGE i.e. to get to the images folder, you have to go back <- one folder, and then enter the images folder
// import PornLoadingImage from '../images/wip-porn-loading-image.jpg';
// import PornSketch2 from '../images/porn-sketch2.jpg';
// import PornSketch4 from '../images/porn-sketch4.jpg';

// import OverlayImage from '../images/overlay-image.jpg';

function ThePornProject(props) {
  // const [ overlayOpen, setOverlayOpen ] = useState(true);

  // const [ sexRaceAndColonies ] = useState({
  //   reference: <span>
  //                 <span>Review essay KAYA DAVIES HAYON,</span>
  //                 <span className={"bold italic"}>Sexe, race et colonies and the Aesthetics-Ethics Debate in the Francophone Postcolonial Visual Field. </span>
  //                 <span>Bulletin of Francophone Postcolonial Studies A Biannual Publication, 11.1, Spring 2020, ISSN 2044-4109 (Online).</span>
  //                 <a href={'http://sfps.org.uk/wp-content/uploads/2020/03/11.1-online.pdf'}>http://sfps.org.uk/wp-content/uploads/2020/03/11.1-online.pdf</a>
  //               </span>,
  //   content: <span className={"italic"}>"It is quite surprising that a book that seems so keenly aware of — and indeed is premised upon an analysis of — the relationship between images and the perpetuation of damaging ideas about sexualized and racialized bodies should show so little critical awareness of its own format and material status. In response to Artières’s criticisms, Pascal Blanchard has argued that it is the researcher’s responsibility to take an objective distance from the material examined, and that the images needed to be included not as peripheral material, but as ‘des sources informatives centrales pour la comprehension du système colonial’.11 It is perhaps easier to have a distance from images like these if you are not a descendant of colonial violence. However, this justification does not really explain why the critical text does not, for the most part, engage with the individual images. It also does not deal adequately with the issue of who — in a moral and ethical sense — can claim ownership to these images and thereby has the right to decide how and when they should be reproduced."</span>
  // })

  // const [ museumUrbanDetritusPornography ] = useState({
  //   reference:  <span>
  //                 <span className={"bold"}>Museum, urban detritus and pornography ]Beatriz Preciado 30 \ PostOp workshop. Feminismopornopunk seminar, Arteleku 2008.</span>
  //               </span>,
  //   content:  <span>
  //               <span className={"italic"}>"The art market wants porn, but it doesn't want porn when it comes from feminism. Everything needs to be kept in its place. The art world likes the odd splash of recycled pornographic codes, provided they are kept well away from their function of social critique, existing more as mere aesthetic residues. The Barbican likes Jeff Koons, and testicles (even hairy ones) are art provided they are drawn properly by solemn gentlemen. Paris Hilton’s nudity as sculpted by Daniel Edwards singularly transcends the sordid world of pornography, and a little bit of meat always helps highlight the YBAs’ transgression. Let's not demand too much from Western art historiography; it’s already had quite enough to cope with in recent years what with having to acclimatise itself to the critical interferences of different sexual, racial and cultural minorities."</span>
  //               <span className={"italic"}>... "Feminist artists are asked to publicly expound on difference, body, skin, maternity, domestic work, gender violence, the everyday, pain, precarious living conditions, love, family, bulimia and anorexia, immigration, ablation, breast cancer, intimacy... and all the aspects of sex and sexuality that we recognise as being culturally more feminine. Not on pornography, though — apart from being crude and repetitive, pornography is a man's thing."</span>
  //             </span>
  // })

  // const [ lesEtudiesSavantesSurLePornographie ] = useState({
  //   reference:  <span>
  //                 <span className={"bold"}>PORNO 1. L’ESSOR DES « PORN STUDIES »: LES ETUDES SAVANTES SUR LA PORNOGRAPHIE, SES SOUS-GENRES ET SON IMPACT SOCIAL ET MORAL, </span>
  //                 <span>20 JUILLET 2017 PAR FRÉDÉRIC JOIGNOT.</span>
  //                 <a href={'https://www.lemonde.fr/blog/fredericjoignot/author/fredericjoignot/'} className={"color-white word-wrap"}>https://www.lemonde.fr/blog/fredericjoignot/author/fredericjoignot/</a>
  //               </span>,
  //   content:  <span>
  //               <span className={"italic"}>"Le terme de « pornographie » dérive du grec pornographia, associant pornê (prostituée) et graphein (écrire, et plus largement décrire, représenter)."</span>
  //             </span>
  // })

  // const [ myBodyMyRulesTitle ] = useState(<span><a href="https://vimeo.com/142807045" className={"color-black"}>My Body My Rules</a> from <a href="https://vimeo.com/emiliejouvet" className={"color-black"}>emilie jouvet</a> on <a href="https://vimeo.com" className={"color-black"}>Vimeo</a>.</span>)






  // console.log()
  return(
    <div className={"full-size porn-page"}
          style={{
            backgroundColor: "#F24726"
          }}>
      <div
        className={"w-100 porn-navbar"}>
        {/* <BackArrow destination={"/"}/> */}
        <div className={"margins"}>
          <h1>The porn project</h1>
        </div>
      </div>

      {/* overlayOpen &&
        <div className={"blurred-overlay"}>
          <div>
            <p>This page contains explicit content. If you are sure you want to continue, press "OK"</p>
            <button className={"custom-button"} onClick={() => setOverlayOpen(false)}>OK</button>
          </div>
        </div>
      */}

      <div className={"blurred-overlay"}>
        <div>
          <p>This page is still being built, please come back again soon!</p>
        </div>
      </div>

    {/*Whiteboard goes here once live*/}

    </div>
  );
}

export default ThePornProject;


 // <WhiteBoard>
 //        {/* Videos */}
 //        <Video  title={"My Body, My Rules"}
 //                source={"https://player.vimeo.com/video/142807045"}
 //                top={0}
 //                left={480}
 //                height={120}
 //                width={170}
 //                vimeo
 //                zIndex={5}
 //                titleSize={12}
 //                descriptionSize={7}
 //                vimeoDescription={'"MY BODY MY RULES" Prix du jury Meilleurs documentaire, Festival Cheries-cheris Paris 2017 2eme prix Long-métrage, Porn Film Festival Berlin, 2017 Eloigné des diktats de la beauté féminine actuelle...'}
 //                vimeoTitle={myBodyMyRulesTitle}/>


 //        {/* Images */}
 //        <Image  title={"Furry character giving felatio"}
 //                source={PornLoadingImage}
 //                height={400}
 //                top={200}
 //                left={500}/>

 //        <Image  title={"Culd different participants enter certain VR spaces to meet and interact with others? How would they appear to each other?"}
 //                source={PornSketch2}
 //                height={80}
 //                top={500}
 //                left={1000}/>

 //        <Image  title={"Could it be live performance?"}
 //                source={PornSketch4}
 //                height={80}
 //                top={320}
 //                left={1040}/>


 //        {/* Reference Sticky Notes */}
 //        <StickyNote bgColor={"#C4208A"}
 //                    width={100}
 //                    top={300}
 //                    left={50}
 //                    fontSize={6}
 //                    textColor={"white"}
 //                    reference={sexRaceAndColonies.reference}
 //                    content={sexRaceAndColonies.content}
 //                    additionalClass={"reference-sticky-note"}/>

 //        <StickyNote bgColor={"#1826B7"}
 //                    width={140}
 //                    top={580}
 //                    left={480}
 //                    fontSize={6}
 //                    textColor={"white"}
 //                    reference={lesEtudiesSavantesSurLePornographie.reference}
 //                    content={lesEtudiesSavantesSurLePornographie.content}
 //                    additionalClass={"reference-sticky-note"}/>

 //        <StickyNote bgColor={"transparent"}
 //                    width={190}
 //                    top={60}
 //                    left={1230}
 //                    fontSize={11}
 //                    textColor={"white"}
 //                    reference={museumUrbanDetritusPornography.reference}
 //                    content={museumUrbanDetritusPornography.content}
 //                    additionalClass={"reference-sticky-note"}/>


 //        {/* Normal Sticky Notes */}
 //        <StickyNote bgColor={"#0819BD"}
 //                    width={220}
 //                    top={300}
 //                    left={330}
 //                    fontSize={15}
 //                    textColor={"white"}
 //                    content={"Long term project to build an interactive VR porn game. Questioning sexual representations, sexual desire and body representations away from the straight white male gaze. Looking at accessibility and tech through the angle of Virtual Reality."}
 //                    />

 //        <StickyNote bgColor={"#C32B69"}
 //                    width={80}
 //                    top={80}
 //                    left={80}
 //                    fontSize={12}
 //                    textColor={"white"}
 //                    content={"Youth culture - fantasising about under-age and the idea of vulnerable women"}/>

 //        <StickyNote bgColor={"#1B1B1B"}
 //                    width={40}
 //                    top={340}
 //                    left={150}
 //                    fontSize={9}
 //                    textColor={"white"}
 //                    centered
 //                    shadow
 //                    content={"Porn and racial stereotypes"}/>

 //        <StickyNote bgColor={"#1B1B1B"}
 //                    width={70}
 //                    top={540}
 //                    left={210}
 //                    fontSize={9}
 //                    textColor={"white"}
 //                    content={"Sex is often linked to creativity - what does this say about our modern creativity?"}/>

 //        <StickyNote bgColor={"#F2F1F2"}
 //                    width={40}
 //                    top={520}
 //                    left={400}
 //                    fontSize={11}
 //                    textColor={"black"}
 //                    shadow
 //                    centered
 //                    content={"What is porn?"}/>

 //        <StickyNote bgColor={"#9510AC"}
 //                    width={60}
 //                    top={280}
 //                    left={630}
 //                    fontSize={12}
 //                    textColor={"white"}
 //                    content={"Everyone watches it but no one wants to speak about it."}/>

 //        <StickyNote bgColor={"#F2F3F5"}
 //                    width={40}
 //                    top={470}
 //                    left={680}
 //                    centered
 //                    shadow
 //                    fontSize={8}
 //                    textColor={"black"}
 //                    content={"What happened to our fantasises?"}/>

 //        <StickyNote bgColor={"#F2F3F5"}
 //                    width={30}
 //                    top={420}
 //                    left={970}
 //                    fontSize={7}
 //                    textColor={"black"}
 //                    content={"Sex chat rooms - interactions, role play"}/>

 //        <StickyNote bgColor={"#FDD3E1"}
 //                    width={40}
 //                    top={530}
 //                    left={940}
 //                    centered
 //                    fontSize={10}
 //                    textColor={"black"}
 //                    shadow
 //                    content={"Game/ Interaction"}/>

 //        <StickyNote bgColor={"#FDD3E1"}
 //                    width={50}
 //                    top={590}
 //                    left={1040}
 //                    centered
 //                    fontSize={8}
 //                    textColor={"black"}
 //                    shadow
 //                    content={"Create new representations / embodiment"}/>

 //        <StickyNote bgColor={"#1E1EAE"}
 //                    width={70}
 //                    top={610}
 //                    left={930}
 //                    centered
 //                    bold
 //                    fontSize={10}
 //                    textColor={"white"}
 //                    content={"VR Porn space"}/>

 //        <StickyNote bgColor={"#F2F3F5"}
 //                    width={50}
 //                    top={560}
 //                    left={830}
 //                    fontSize={8}
 //                    textColor={"black"}
 //                    shadow
 //                    content={"What place is porn taking for people who can't have sex?"}/>


 //      </WhiteBoard>
