import React from "react";

import Mail from '../image/mail.png'

const Contact = (props) => {
    return(
        <div className="container">
            <h4 className = "center">Contact me</h4>
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