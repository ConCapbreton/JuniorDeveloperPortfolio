import { IoIosArrowDown } from "react-icons/io";
import { useCvContext } from "../../context/CvContext";

const Experience = () => {
  const { arrowUp, arrowDown, toggleSection, show, hidden, experience } = useCvContext()
  
  return (
    <>
      <div id="experience-navigator"></div>
      <a href={experience ? "#experience-navigator" : "#cv-one"} style={{textDecoration: "none", color: "black",}}>
        <div className="cv-section" onClick={toggleSection} >
            <h2 className="experience" id="experience">PROFESSIONAL EXPERIENCE:</h2> 
            <p className="experience">{experience ? "Show less" : "Show more"}</p>
            <a className="experience" style={experience ? arrowDown : arrowUp}>
              <IoIosArrowDown />
            </a>
        </div>
       </a> 
      <div className="experience-container" style={experience ? show : hidden}>
        <h3>Technical Assistant, Support and Conformity Team</h3>
        <h4><a href="https://www.bayer.com/en/agriculture-overview" target="_blank">Bayer Seeds</a> (Adecco) | Peyrehorade, France</h4>
        <h4>2022 - 2024</h4>
        <p>Responsible for implementing DIMO Maint, a CMMS (Computer Managed Maintenance System) for the Laboratory operation, including:</p>
        <ul>
          <li>asset management (including building a data base of equipment and partners),</li>
          <li>preventative interventions,</li>
          <li>corrective interventions (requests for interventions and work orders),</li>
          <li>management of maintenance contracts,</li>
          <li>management of spare parts.</li>
        </ul>
        <hr></hr>
        <h3> Regional General Manager for East Asia</h3>
        <h4><a href="https://www.ahkgroup.com/" target="_blank">Alfred H Knight</a> | Singapore</h4>
        <h4>2017 - 2021</h4>
        <p>Responsible for:</p>
        <ul>
          <li>5 companies in the region, </li>
          <li>a team of &gt;100,</li>
          <li>operations management for the weighing sampling and quality determination of metals and minerals commodities in 12 countries,</li>
          <li>business development: increased regional profits by 60%</li>
          <li>finance and local compliance: P&L / EBITDA, cash-flow, CAPEX, licensing.</li>
        </ul>
        <hr></hr>
        <h3> Chief Executive Officer</h3>
        <h4><a href="https://www.ahkgroup.com/" target="_blank">Alfred H Knight</a> | Lubumbashi, Democratic Republic of Congo</h4>
        <h4>2014 - 2017</h4>
        <p>Responsible for:</p>
        <ul>
          <li>the proposal team that successfully tendered for a large contract allowing the establishment of the Group's first business entity and operation in the country,</li>
          <li>project management to deliver a new laboratory and inspection operation (successfully completed on time and within budget),</li>
          <li>recruitment and training of &gt;80 personnel,</li>
          <li>ongoing management of the newly established business and operations (including business development, finance, local compliance etc).</li>
        </ul>
        <hr></hr>
        <h3>Business Development Manager</h3>
        <h4><a href="https://www.ahkgroup.com/" target="_blank">Alfred H Knight</a> | Richards Bay, South Africa</h4>
        <h4>2011 - 2014</h4>
        <p>Responsible for:</p>
        <ul>
          <li>business development in 4 countries (South Africa, Botswana, Mozambique and Namibia),</li>
          <li>acting as a key contact point for clients and the UK head office,</li>
          <li>installation and ongoing management of the inhouse software used for all communication, reporting and invoicing of client appointments.</li>
        </ul>
        <hr></hr>
        <h3>Univsersity Graduate Program</h3>
        <h4><a href="https://www.ahkgroup.com/" target="_blank">Alfred H Knight</a> | Prescot, United Kingdom</h4>
        <h4>2010 - 2011</h4>
        <p className="experience" id="final-showless" onClick={toggleSection}><a href="#cv-one">Show less of Profesional Experience</a></p>
      </div>
    </>
  )
}

export default Experience
