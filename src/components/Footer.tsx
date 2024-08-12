import { IoLogoLinkedin } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { useMenuContext } from "../context/MenuContext";

const Footer = () => {
  const {menuHide, CV} = useMenuContext()

  return (
    <div id="footer-div">
        <p style={CV === "CV" ? menuHide : {}}>Martin Connor Sexton:</p>
        <a href="https://www.linkedin.com/in/connor-sexton-37024a26/" target="_blank"> <IoLogoLinkedin /> </a>
        <a href="https://github.com/ConCapbreton" target="_blank"> <FaGithub /> </a>
        <a href="mailto:connorsexton@hotmail.com" target="_blank"> <MdOutlineEmail /> </a>
    </div>
  )
}

export default Footer
