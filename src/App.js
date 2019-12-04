import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/navbar"
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'




class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path='/' component={Home}/>
          <Route path='/about' component = {About}/>
          <Route path='/contact' component = {Contact}/>          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
