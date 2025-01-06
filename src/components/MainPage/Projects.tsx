import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiRedux, SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaNodeJs } from "react-icons/fa"; 
import { useMenuContext } from "../../context/MenuContext";

const Projects = () => {
  const {menuOff} = useMenuContext()

  return (
    <div id="projects-one" onClick={menuOff}>
      <h1>Projects</h1>
      <div id="projects-two">
      <div className="individual-project">
          <h2>Enhanced Forecast</h2>
          <a href="https://enhancedforecast.netlify.app/" target="_blank"><img id="project-two" className="project-image" src="/img/ProjectExampleTwo.webp" alt="Screenshot of the website enhanced-forecast" width="300px" height="180px"/></a>         
          <div id="tech-icon-labels-holder">
            <div className="tech-icon-labels"><SiTypescript />Typescript</div>
            <div className="tech-icon-labels"><FaReact />React</div>
            <div className="tech-icon-labels"><RiTailwindCssFill />Tailwind CSS</div>
          </div>
          <p>Surf forecasting for the South West of France</p>
          <p>Click the image to visit the site!</p>
        </div>
        <div className="individual-project">
          <h2>Sexton's Surf Shack</h2>
          <a href="https://sextonssurfshack.netlify.app/" target="_blank"><img id="project-one" className="project-image" src="/img/ProjectExampleOne.webp" alt="Screenshot of the website Sexton's Surf Shack" width="300px" height="180px"/></a>                                               
          <div id="tech-icon-labels-holder">
            <div className="tech-icon-labels"><SiTypescript />Typescript</div>
            <div className="tech-icon-labels"><FaReact />React</div>
          </div>
          <p>An accessible, maintainable and updatable E-commerce site.</p>
          <p>Click the image to visit the site!</p>
        </div>
        <div className="individual-project">
          <h2>Foragers</h2>
          <a href="https://concapbreton.github.io/" target="_blank"><img id="project-three" className="project-image" src="/img/foragers.webp" alt="Screenshot of the website Foragers" width="300px" height="180px"/></a>        
          <div id="tech-icon-labels-holder">
            <div className="tech-icon-labels"><IoLogoJavascript />Javascript</div>
            <div className="tech-icon-labels"><FaReact />React</div>
            <div className="tech-icon-labels"><SiRedux />Redux</div>
            <div className="tech-icon-labels"><FaNodeJs />Node.js</div>
            <div className="tech-icon-labels"><SiExpress />Express</div>
            <div className="tech-icon-labels"><SiMongodb />MongoDB</div>
          </div>
          <p>Coming soon! Foragers, a full stack project using MERN to record your mushroom finds!</p>
          <p>Click the image to visit the (provisional) site, frontend only written in vanilla js</p>
        </div>
      </div>
      <hr id="projects-hr"/>
    </div>
  )
}

export default Projects
