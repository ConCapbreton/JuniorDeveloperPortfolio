import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { useMenuContext } from "../../context/MenuContext";
import { Link } from "react-router-dom";

const About = () => {
const {menuOff} = useMenuContext()

  return (
    <div id="about-div" onClick={menuOff}>
      <h1>Hi, I'm Martin Connor Sexton, <br></br>a Web Developer</h1>
      <div id="image-container">
        <img src="/img/ProfilePic.webp" alt="Profile Picture of Martin Connor Sexton" width="180px" height="250px"></img>
        <p>I love exploring and creating, I'm a lifelong learner and I am passionate about living in the South West of France!<br /><br />Click here to see my <Link to="CV">CV!</Link> Or see below for my <a href="#projects-one">coding projects!</a></p>
      </div> 
      <div id="tech-icon-labels-holder">
        <div className="tech-icon-labels"><a><FaHtml5 /></a>HTML</div>
        <div className="tech-icon-labels"><a><FaCss3 /></a>CSS</div>
        <div className="tech-icon-labels"><a><IoLogoJavascript /></a>Javascript</div>
        <div className="tech-icon-labels"><a><SiTypescript /></a>Typescript</div>
        <div className="tech-icon-labels"><a><RiTailwindCssFill /></a>Tailwind CSS</div>
        <div className="tech-icon-labels"><a><FaReact /></a>React</div>
      </div>
      <hr></hr>
    </div>
  )
}

export default About
