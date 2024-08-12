import { IoIosArrowDown } from "react-icons/io";
import { useCvContext } from "../../context/CvContext";

const Other = () => {
  const { arrowUp, arrowDown, toggleSection, show, hidden, other } = useCvContext()
  
  return (
    <>
      <div id="other-navigator"></div>
      <a href={other ? "#other-navigator" : "#cv-one"} style={{textDecoration: "none", color: "black",}}>
        <div className="cv-section" onClick={toggleSection} >
            <h2 className="other">OTHER SKILLS AND INTERESTS:</h2> 
            <p className="other">{other ? "Show less" : "Show more"}</p>
            <a className="other" style={other ? arrowDown : arrowUp}>
              <IoIosArrowDown />
            </a>
        </div>
      </a>
      <div className="other-container" style={other ? show : hidden}>
        <p>Full, clean UK <strong>driving license</strong></p>
        <p><strong>Publication:</strong> <a href="https://www.nature.com/articles/ismej201155">Population genomics of Sinorhizobium medicae based on low-coverage sequencing of sympatric isolates.</a> Xavier Bailly, Elisa Giuntini, M Connor Sexton, Ryan PJ Lower, Peter W Harrison, Nitin Kumar and J Peter W Young (2011). The ISME Journal (2011), 1–13</p>
        <p>Spoke on the panel for “Prevailing themes and new frontiers in the hard commodity sector” at the Exporta Trade and Finance conference in Cape Town in 2013.</p>
        <p>Walked 1000 km during 40 days on the <strong>Camino de Santiago de Compostela</strong> Pilgrimage raising over 500 GBP for my selected charities in 2022</p>
        <p>Surfing, tennis and playing guitar</p>
        <img id="surf-pic" src="/img/surfpic.JPG" alt="Surf Pic taken by Pierre Mesnage @pimphotographie" />
        <p className="other" id="final-showless" onClick={toggleSection}><a href="#cv-one">Show less of Other Skills and Interests</a></p>
      </div>
    </>
  )
}

export default Other
