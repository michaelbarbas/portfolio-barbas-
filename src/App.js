import React from "react";
import "./App.css";
import GitHub from "./image/GitHub-Mark-32px.png";
import LinkedIn from "./image/LinkedIn.png";

function App() {
  return (
    <div className="App">
      <header className="Description">
        <h1 className="Name">
          Michael Barbas

    
          <div class="img">
            
            <img src={GitHub} alt="GitHub"></img>
            <img src={LinkedIn} alt="LinkedIn"></img>
          </div>
        </h1>
      </header>
    </div>
  );
}

export default App;
