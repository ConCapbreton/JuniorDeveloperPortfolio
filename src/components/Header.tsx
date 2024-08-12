import { Link } from "react-router-dom"
import { IoArrowBack } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Hamburger from "./Hamburger";
import { useMenuContext } from "../context/MenuContext";

const Header = () => {
  const { hamburgerShow, toggleHamburgerMenu, hamburgerColumnCorretion, menuOff, menu, CV } = useMenuContext()

  const hamburger = menu ?  
    <div id="header-div">
        <nav id="nav">
          <div id="hamburger-column" style={hamburgerShow ? hamburgerColumnCorretion : {}}>
            <RxHamburgerMenu className="hamburger-icon" style={hamburgerShow ? {color: "var(--icons)"} : {}} onClick={toggleHamburgerMenu}/>
            <Hamburger />
          </div>
        </nav>
      </div>
    :
    <div id="header-div">
        <nav id="nav">
            <a href="#about-div">About</a>
            <a href="#projects-one">Projects</a>
            <Link to="CV">CV</Link>
            <a href="#contact-one">Contact</a>
        </nav>
      </div>


  const content = CV === "CV" ?
    <div id="header-div">
          <nav id="nav-cv">
              <Link to="" onClick={menuOff}><IoArrowBack style={{fontSize: "25px"}}/><p>Return to main page</p></Link>              
          </nav>
      </div>
  :
  hamburger

  return content
}

export default Header