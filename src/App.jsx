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
          <p class="trim-image-to-circle">
            
         
          </p>    
          <p class="trim-image-to-circle2"></p>
</div>
          
        </div>
     
      </div>
      
    </div>
    
    <TailwindCss />
    </>
  );
}

export default App;
