import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { useMenuContext } from "../../context/MenuContext";

const Projects = () => {
  const {menuOff} = useMenuContext()

  return (
    <div id="projects-one" onClick={menuOff}>
      <h1>Projects</h1>
      <div id="projects-two">
        <div className="individual-project">
          <img id="project-one" className="project-image" src="/img/ProjectExampleOne.jpg" />
          <br />                                                ./src/assets/img/
          <label htmlFor="project-one">Project One</label>
          <div id="tech-icon-labels-holder">
            <div className="tech-icon-labels"><a><IoLogoJavascript /></a>Javascript</div>
            <div className="tech-icon-labels"><a><SiTypescript /></a>Typescript</div>
            <div className="tech-icon-labels"><a><RiTailwindCssFill /></a>Tailwind CSS</div>
          </div>
          <p>Description</p>
          <p>Click the image to visit the site!</p>
        </div>
        <div className="individual-project">
          <img id="project-two" className="project-image" src="/img/ProjectExampleTwo.jpg" />
          <br />
          <label htmlFor="project-two">Project Two</label>
          <div id="tech-icon-labels-holder">
            <div className="tech-icon-labels"><a><IoLogoJavascript /></a>Javascript</div>
            <div className="tech-icon-labels"><a><SiTypescript /></a>Typescript</div>
            <div className="tech-icon-labels"><a><RiTailwindCssFill /></a>Tailwind CSS</div>
          </div>
          <p>Description</p>
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
          <p>Description</p>
          <p>Click the image to visit the site!</p>
        </div>
      </div>
      <hr id="projects-hr"/>
    </div>
  )
}

export default Projects
