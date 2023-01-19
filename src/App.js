import React from "react";
import Profile from "./Profile";
import "./App.css"
import Link from "./img/marylin.jpg"
class App extends React.Component{

  render(){
    return (
      <div>
      
  <Profile name="Cathy" bio=" 27 ans" prof="Model" link={<img src={Link} alt="xccv"/>} />
      
      </div>
    )
  }
  }
  
export default App;