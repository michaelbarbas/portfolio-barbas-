import React from "react";

import Mail from '../image/mail.png'

const Contact = (props) => {
    return(
        <div className="container">
            <h4 className = "center">Contact me</h4>
            <p>Currently I am seeking an opportunity in software engineering. I am always looking for work to do, if you have any questions or ideas, I would be more than happy to help.
              Email or contact me at the following number.
            </p>
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