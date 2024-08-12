import { Link } from "react-router-dom"
import { useMenuContext } from "../context/MenuContext"

const Hamburger = () => {
  const { hamburgerShow, toggleHamburgerMenu, menuShow, menuHide } = useMenuContext()

  return (
    <>
      <div id="hamburger-menu-options" style={hamburgerShow ? menuShow : menuHide}>
          <a href="#about-div" onClick={toggleHamburgerMenu}>About</a>
          <a href="#projects-one" onClick={toggleHamburgerMenu}>Projects</a>
          <Link to="CV" id="hamburger-link">CV</Link>
          <a href="#contact-one" onClick={toggleHamburgerMenu}>Contact</a>
      </div>
    </>
  )
}

export default Hamburger
