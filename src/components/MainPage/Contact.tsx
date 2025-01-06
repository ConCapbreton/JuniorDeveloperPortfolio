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
              <FaPhone />
              <p>(+33) 0626920566</p>
            </div>
            <div className="contact-icon-text">
              <MdOutlineEmail />
              <p>connorsexton@hotmail.com</p>
            </div>
            <div className="contact-icon-text">
              <FaHouse />
              <p>Capbreton, France</p>
            </div>
          </div>
          <div id="form-coming-soon">
            <p>Form coming soon!</p>
            <div id="contact-right">
              <form action="submit">
                <div className="contact-label-input">
                  <label htmlFor="name">Name:</label>
                  <input id="name" type="text" placeholder="Your Name" required disabled></input>
                </div>
                <div className="contact-label-input">
                  <label htmlFor="email">Email:</label>
                  <input id="email" type="email" placeholder="Your Email" required  disabled></input>
                </div>
                <div className="contact-label-input">
                  <label htmlFor="phone">Phone:</label>
                  <input id="phone" type="tel" placeholder="Your Phone Number" required  disabled></input>
                </div>
                <div className="contact-label-input">
                  <label htmlFor="subject">Subject:</label>
                  <input id="subject" type="text" placeholder="Reason for contacting"  disabled></input>
                </div>             
                <div className="contact-label-input">
                <label id="message-label" htmlFor="message">Message:</label>
                <textarea id="message" placeholder="Your Message" rows={6} cols={50} disabled></textarea>  
                </div>          
                <input id="form-submit-button" type="submit" value="submit" disabled/>        
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
