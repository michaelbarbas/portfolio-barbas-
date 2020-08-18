import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/nav/navbar"
import Home from './components/home'
import Projects from './components/projects'
import Contact from './components/contact'




class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path='/' component={Home}/>
          <Route path='/projects' component = {Projects}/>
          <Route path='/contact' component = {Contact}/>          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
