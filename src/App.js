import './App.css';
import Navbar from './components/Navbar.js';
// import About from './components/About.js';
import TextFrom from './components/TextFrom.js';
// import Alert from './components/Alert.js';
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App(props) {
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
      setAlert({
          msg:message,
          type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  const [mode,setmode]= useState("light");
  const toggleMode = ()=>{
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode enabled" ,"success")
    }
    else if(mode === "dark"){
      setmode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Dark mode disabled" ,"success")
    }
  }
  return (
    <>
    <Navbar title = "TextUtils" about = "About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <TextFrom heading = "Enter the text to analyze below" mode={mode} showAlert = {showAlert}/>
    {/* <About /> */}
      {/* <Router>
      <Navbar title = "TextUtils" about = "About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <Routes>
          <Route path="/about"
            element = {<About />}>
          </Route>
          <Route path="/"
             element = {<TextFrom heading = "Enter the text to analyze below" mode={mode} showAlert = {showAlert}/>}>
          </Route>
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
