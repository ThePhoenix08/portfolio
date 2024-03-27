import React from 'react'
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import './contact.scss';

const Contact = () => {
  return (
    <section id="contact">
      <p>Get in Touch</p>
      <p className="heading">Contact Me</p>
      <div className="container">
        <div className="contactBox">
          <a href="mailto: vighneshbrahme.workonly@gmail.com">
            <IoIosMail />
            <p>vighneshbrahme.workonly@gmail.com</p>
          </a>
        </div>
        <div className="contactBox">
          <a href="https://www.linkedin.com/in/vighneshbrahme/">
            <FaLinkedin />
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact