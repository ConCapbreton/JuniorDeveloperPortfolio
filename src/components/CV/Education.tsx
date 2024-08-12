
import { IoIosArrowDown } from "react-icons/io";
import { useCvContext } from "../../context/CvContext";

const Education = () => {
  const { education, arrowUp, arrowDown, toggleSection, show, hidden, } = useCvContext()
  
  return (
    <>
      <div id="education-navigator"></div>
      <a href="#education-navigator" style={{textDecoration: "none", color: "black",}}>
        <div className="cv-section" onClick={toggleSection}>
            <h2 className="education">EDUCATION:</h2> 
            <p className="education">{education ? "Show less" : "Show more"}</p>
            <a className="education" style={education ? arrowDown : arrowUp}><IoIosArrowDown /></a>
        </div>
      </a>
      <div style={education ? show : hidden}>
        <div className="cert-container">
          <h3>Responsive Web Design Certificate</h3>
          <a href="https://www.freecodecamp.org/certification/fccced7bab9-33f9-4e02-bd96-e25a370f7fb6/responsive-web-design" target="_blank">
          <img id="responsive-web-design" className="coding-certs" src="./src/assets/img/webdesign.jpeg" alt="Responsive Web Design Certificate from FreeCodeCamp" />
          </a>
          <h3>JavaScript Algorithms and Data Structures (Beta) Certificate</h3>
          <a href="https://www.freecodecamp.org/certification/fccced7bab9-33f9-4e02-bd96-e25a370f7fb6/javascript-algorithms-and-data-structures-v8" target="_blank">
          <img id="javascript-cert" className="coding-certs" src="./src/assets/img/javscriptcert.jpeg" alt="JavaScript Algorithms and Data Structures (Beta) Certificate from FreeCodeCamp" />
          </a>
        </div>
        <div className="school-container">
          <h3>University of York, UK</h3>
          <h4>2005 - 2009</h4>
          <p>Bachelor of Science Honours Degree, Biology (with a year in Europe)</p>
          <p>Grade: 2:1</p> 
          <h3>Giggleswick School, UK</h3>
          <h4>1999 - 2004</h4>
          <p>Biology A level: A Grade</p>
          <p>Chemistry A level: A Grade</p>
          <p>Spanish A level: B Grade</p>
        </div>
        <p className="education" id="final-showless" onClick={toggleSection}>Show less of Education</p>
      </div>
    </>
  )
}

export default Education
