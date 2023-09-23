import { useState } from "react";
import "./contact.scss"

export default function Contact() {
  const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  } 
  
  
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="../src/assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="email" inputMode="email" />
          <textarea name="" id="" cols="30" rows="10" placeholder="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks for the message. I will reply ASAP.</span>}
        </form>
      </div>
    </div>
  )
}

