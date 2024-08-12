import Flag from "react-flagkit";
import { IoIosArrowDown } from "react-icons/io";
import { useCvContext } from "../../context/CvContext";

const Languages = () => {
  const { arrowUp, arrowDown, toggleSection, show, hidden, languages } = useCvContext()
  
  return (
    <>
      <div id="languages-navigator"></div>
      <a href="#languages-navigator" style={{textDecoration: "none", color: "black",}}>
        <div className="cv-section" onClick={toggleSection} >
            <h2 className="languages">LANGUAGES:</h2> 
            <p className="languages">{languages ? "Show less" : "Show more"}</p>
            <a className="languages" style={languages ? arrowDown : arrowUp}>
              <IoIosArrowDown />
            </a>
        </div>
      </a>
      <div className="language-container" style={languages ? show : hidden}>
        <div className="flag-language-div">
          <Flag country="GB" size={70}/>
          <h3>English: mother tongue</h3>
        </div>
        <div className="flag-language-div">
          <Flag country="FR" size={70}/>
          <h3>French: fluent</h3>
        </div>
        <div className="flag-language-div">
          <Flag country="ES" size={70}/>
          <h3>Spanish: fluent</h3>
        </div>
        <p className="languages" id="final-showless" onClick={toggleSection}>Show less of Languages</p>
      </div>
      
    </>
  )
}

export default Languages
