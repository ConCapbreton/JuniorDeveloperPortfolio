import { FaCss3, FaHtml5, FaReact, FaGit, FaNodeJs, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiRedux, SiExpress, SiMongodb } from "react-icons/si";
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
        <div className="tech-icon-labels"><FaHtml5 />HTML</div>
        <div className="tech-icon-labels"><FaCss3 />CSS</div>
        <div className="tech-icon-labels"><IoLogoJavascript />Javascript</div>
        <div className="tech-icon-labels"><SiTypescript />Typescript</div>
        <div className="tech-icon-labels"><FaReact />React</div>
        <div className="tech-icon-labels"><SiRedux />Redux</div>
        <div className="tech-icon-labels"><FaNodeJs />Node.js</div>
        <div className="tech-icon-labels"><SiExpress />Express</div>
        <div className="tech-icon-labels"><SiMongodb />MongoDB</div>
        <div className="tech-icon-labels"><FaSass />SASS</div>
        <div className="tech-icon-labels"><RiTailwindCssFill />Tailwind CSS</div>
        <div className="tech-icon-labels"><FaGit />Git</div>
      </div>
      <hr></hr>
    </div>
  )
}

export default About
