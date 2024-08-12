import Education from "./Education";
import Languages from "./Languages";
import Experience from "./Experience";
import Other from "./Other";
import { useCvContext } from "../../context/CvContext";


const CvAbout = () => {
  const {education, show, hidden, reset, languages, experience, other} = useCvContext()

  

  return (
    <div id="cv-one">
      <h1 onClick={reset}>Curriculum Vitae</h1>
      <h1 onClick={reset}>Martin Connor Sexton</h1>
      <div id="cv-intro" style={education || languages || experience || other ? hidden : show}>
        <h2>My life before becoming a web developer!</h2>
        <p>I am a versatile manager with a proven track record in new projects, business development and managing companies.</p>
        <p>An Irish and British national, multilingual with 12 years international experience in the field of "Testing, Inspection and Certification".</p>
      </div>
      <Education />
      <Languages />
      <Experience />
      <Other />
    </div>
  )
}

export default CvAbout
