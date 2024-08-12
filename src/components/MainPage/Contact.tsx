import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { useMenuContext } from "../../context/MenuContext";

const Contact = () => {
  const {menuOff} = useMenuContext()

  return (
    <div id="contact-one" onClick={menuOff}>
      <h1>Contact</h1>
      <div id="contact-two">

          <div id="contact-left">
            <h2>I'm always available for interesting coding projects and profesional opportunities!</h2>
            <div className="contact-icon-text">
              <a><FaPhone /></a>
              <p>(+33) 0626920566</p>
            </div>
            <div className="contact-icon-text">
              <a><MdOutlineEmail /></a>
              <p>connorsexton@hotmail.com</p>
            </div>
            <div className="contact-icon-text">
              <a><FaHouse /></a>
              <p>Capbreton, France</p>
            </div>
          </div>

          <div id="form-coming-soon">
            <p>Form coming soon!</p>
            <div id="contact-right">
              <form action="submit">
                <div className="contact-label-input">
                  <label htmlFor="name">Name:</label>
                  <input id="name" type="text" required placeholder="Your Name"></input>
                </div>
                <div className="contact-label-input">
                  <label htmlFor="email">Email:</label>
                  <input id="email" type="email" placeholder="Your Email" required></input>
                </div>
                <div className="contact-label-input">
                  <label htmlFor="phone">Phone:</label>
                  <input id="phone" type="tel" placeholder="Your Phone Number" required></input>
                </div>
                <div className="contact-label-input">
                  <label htmlFor="subject">Subject:</label>
                  <input id="subject" type="text" placeholder="Reason for contacting"></input>
                </div>             
                <div className="contact-label-input">
                <label id="message-label" htmlFor="message">Message:</label>
                <textarea id="message" placeholder="Your Message" rows={6} cols={50}></textarea>  
                </div>          
                <button id="form-submit-button">Submit</button>        
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
