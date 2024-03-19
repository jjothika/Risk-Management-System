import React from "react";
import './Contact.css';
const Contact = () => {
    return(
      <div>
      <h1>Contact Us</h1>
      <section>
      <h2>Get in Touch</h2>
      <p>If you have any questions or would like to learn more about our risk management services, please contact us using the form below:</p>
      <form>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required/>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required/>
      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
      <button type="submit">Submit</button>
      </form>
      </section>
      <footer>
      <p>Thank you for considering XYZ Risk Management for your risk management needs.</p>
      </footer>
      </div>
        
      
   
    )
}
export default Contact;