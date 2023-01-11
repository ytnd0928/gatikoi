import logo from './logo.svg';
import './App.css';
import { TailwindCss } from './TailwindCss';
// import {Sidebar} from "./Sidebar"

export const App = ()=> {

  

  const contentStyle = {
    color: "pink",
    fontSize: "30px",
    margin: "30px"
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "40px",
    margin: "30px"
  }
  const SidebarStyle = {
    marginTop: "0px"
  }

  return (
    <>
    <div className="app">
    
     
     
      <div class="main">
        <div class="sidebar">
        <h1 style={contentStyle}>TITLE</h1>
        <ul class="sidemenu">
          <li>HOME</li>
          <li>SCHEDULE</li>
          <li>CREATE</li>
          <li>PROFILE</li>
         </ul>
        </div>
      
        
       
        
        <div class="content">
          <h1 style={titleStyle}>ROOM</h1>

          <div class="container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>  
</div>
          
        </div>
     
      </div>
      
    </div>
    
    <TailwindCss />
    </>
  );
}

export default App;
