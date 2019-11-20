import React from "react";
import '../App.css'
import Mail from '../image/mail.png'

const Contact = (props) => {
    return(
        <div className="container">
            <h4 className = "center">Contact me</h4>
            <pre>(516)-428-9993
            </pre>
            <div class="Mail">
                <a
                  href="mailto:michaelbarbas@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Mail} alt="mail"></img>
                </a>
              </div>
        </div>
    )
}

export default Contact