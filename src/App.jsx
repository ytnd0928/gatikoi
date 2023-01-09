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
    margin: "3px"
  }
  const SidebarStyle = {
    marginTop: "0px"
  }

  return (
    <div className="App">
    
      <h1 style={contentStyle}>TITLE</h1>
      <h1 style={titleStyle}>ROOM</h1>
      <TailwindCss style={SidebarStyle}></TailwindCss>
    </div>
  );
}

export default App;
