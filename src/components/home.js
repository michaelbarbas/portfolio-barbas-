import React from "react";

import GitHub from "../image/github.png";     //
import LinkedIn from "../image/linkedin.png"; //img


const Home = () => {
  return (
    
    <div className="container">
      <h4 className="center">Home</h4>
      <div class="Roles">
        <div class="Role">
          <pre class="mod_1">Engineer | Student</pre>
        </div>
      </div>
      <div class="SocialMedia">
        <div class="Github">
          <a
            href="https://github.com/mbarbas11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHub} alt="github"></img>
          </a>
        </div>
        <div class="Linkedin">
          <a
            href="https://www.linkedin.com/in/michael-barbas-30a147150/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="linkedin"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
