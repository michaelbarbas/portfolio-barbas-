import React from "react";
import "../App.css";
import styled_comp from "styled-components";
import "./home.css";

const ProjectStyle = styled_comp.div`
  font-family: sans-serif;

  .grid {
    margin: 20px 0 0 0;
    padding: 0;
    list-style: none;
    display: block;
    text-align: center;
    width: 100%;
  }
  
  .grid:after,
  .item:before {
    content: '';
      display: table;
  }
  
  .grid:after {
    clear: both;
  }
  
  .grid li {
    width: 150px;
    height: 150px;
    display: inline-block;
   
    
  }

  .item {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: relative;
    cursor: default;
    box-shadow: 
      inset 0 0 0 0 rgba(0,0,0, 0.4),
      inset 0 0 0 16px rgba(255,255,255,0.0),
      0 1px 2px rgba(0,0,0,0.1);
    transition: all 0.4s ease-in-out;
    
  }

  

  .info {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    opacity: 0;
    transition: all 0.4s ease-in-out;
    transform: scale(0);
    backface-visibility: hidden;
    
  }

  .info h3 {
    color: #fff;
    text-transform: uppercase;
    position: relative;
    letter-spacing: 2px;
    font-size: 22px;
    margin: 0 18px;
    padding: 50px 0 0 0;
    height: 80px;
    text-shadow: 
      0 0 1px #fff, 
      0 1px 2px rgba(0,0,0,0.3);
  }
  
  .info p {
    color: #fff;
    padding: 0px 5px;
    font-style: italic;
    margin: 0 30px;
    font-size: 12px;
  }
  
  .info p a {
    display: block;
    color: rgba(255,255,255,0.7);
    font-style: normal;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 9px;
    letter-spacing: 1px;
    padding-top: 4px;
  }
  
  .info p a:hover {
    color: #b42222;
  }

  .item:hover {
    box-shadow: 
      inset 0 0 0 110px rgba(0,0,0, 0.4),
      0 1px 2px rgba(0,0,0,0.1);
  }

  .item:hover .info {
    opacity: 1;
    transform: scale(1);	
  }

}
`;

const Home = () => {
  return (
    <ProjectStyle>
      <ul class="grid">
        <li>
          <div class="item img-1">
            <div class="info">
              <h3>Github</h3>
              <p>
                Michael Barbas
                <a href="https://github.com/mbarbas11">View on Github</a>
              </p>
            </div>
          </div>
          <div class="item img-2">
            <div class="info">
              <h3>LinkedIn</h3>
              <p>
                Michael Barbas
                <a href="https://github.com/mbarbas11">View on LinkedIn</a>
              </p>
            </div>
          </div>
          <div class="item img-3">
            <div class="info">
              <h3>Medium</h3>

              <p>
                Michael Barbas
                <a href="https://github.com/mbarbas11">View on Medium</a>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </ProjectStyle>
  );
};

export default Home;
