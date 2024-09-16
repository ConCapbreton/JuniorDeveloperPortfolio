import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa"; 
import { useMenuContext } from "../../context/MenuContext";

const Projects = () => {
  const {menuOff} = useMenuContext()

  return (
    <div id="projects-one" onClick={menuOff}>
      <h1>Projects</h1>
      <div id="projects-two">
      <div className="individual-project">
          <a href="https://enhancedforecast.netlify.app/" target="_blank"><img id="project-two" className="project-image" src="/img/ProjectExampleTwo.jpg" /></a>
          <br />
          <label htmlFor="project-two">Enhanced Forecast</label>
          <div id="tech-icon-labels-holder">
            <div className="tech-icon-labels"><a><IoLogoJavascript /></a>Javascript</div>
            <div className="tech-icon-labels"><a><SiTypescript /></a>Typescript</div>
            <div className="tech-icon-labels"><a><RiTailwindCssFill /></a>Tailwind CSS</div>
          </div>
          <p>Surf forecasting for the South West of France</p>
          <p>Click the image to visit the site!</p>
        </div>
        <div className="individual-project">
          <a href="https://sextonssurfshack.netlify.app/" target="_blank"><img id="project-one" className="project-image" src="/img/ProjectExampleOne.jpg" /></a>
          <br />                                                
          <label htmlFor="project-one">Sexton's Surf Shack</label>
          <div id="tech-icon-labels-holder">
            <div className="tech-icon-labels"><a><SiTypescript /></a>Typescript</div>
            <div className="tech-icon-labels"><a><FaReact /></a>React</div>
          </div>
          <p>An accessible, maintainable and updatable E-commerce site.</p>
          <p>Click the image to visit the site!</p>
        </div>
        <div className="individual-project">
          <img id="project-three" className="project-image" src="/img/ProjectExampleThree.jpg" />
          <br />
          <label htmlFor="project-three">Project Three</label>
          <div id="tech-icon-labels-holder">
            <div className="tech-icon-labels"><a><IoLogoJavascript /></a>Javascript</div>
            <div className="tech-icon-labels"><a><SiTypescript /></a>Typescript</div>
            <div className="tech-icon-labels"><a><RiTailwindCssFill /></a>Tailwind CSS</div>
          </div>
          <p>Coming soon!</p>
          <p>Click the image to visit the site (eventually)!</p>
        </div>
      </div>
      <hr id="projects-hr"/>
    </div>
  )
}

export default Projects
