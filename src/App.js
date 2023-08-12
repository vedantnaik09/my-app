import "./App.css";
import Alert from "./components/Alert";
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  

} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null)
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
    
  }

  // const toggleMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //   } else {
  //     setMode("light");
  //     showAlert("Light mode has been enabled","success")
  //   }
  // };
  
  const changeColor = (color) =>{   
      document.body.style.backgroundColor = color;
      setMode("dark")
      if(color!=='white')
      {
      showAlert("Dark mode has been enabled","success")
      document.title= "TextUtils - DarkMode"}
    else
    {
    showAlert("Light mode has been enabled","success")
    document.title= "TextUtils - LightMode"
    }
  }

  const [mode, setMode] = useState("light");
  return (
    <>
    <BrowserRouter>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        // toggleMode={toggleMode}
        changeColor={changeColor}
        setMode={setMode}
      />
      <Alert alert={alert}/>
      <div className="container">
      
      <Routes>
      <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
        </Routes>
        
         </div>
         </BrowserRouter>
    </>
  );
}

export default App;
