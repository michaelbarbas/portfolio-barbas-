import React from "react";
import "./App.css";
import GitHub from "./image/github.png";
import LinkedIn from "./image/linkedin.png";
import Mail from "./image/mail.png";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="Description">
          <h1 className="Name">Michael Barbas</h1>
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
        </header>
      </div>
    );
  }
}

export default App;
