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
        <img src="/assets/shake.svg" alt="" />
      </div>
      <div className="right">
        
        <form onSubmit={handleSubmit} netlify>
        <h2>Write me</h2>
          <input type="email" placeholder="email" inputMode="email" required/>
          <textarea name="" id="" cols="30" rows="10" placeholder="message" required></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks for the message. I will reply ASAP.</span>}
        </form>
      </div>
    </div>
  )
}

