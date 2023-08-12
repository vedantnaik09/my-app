import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("UpperCase button was clicked");
        let newText= text.toUpperCase();        
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }
    const handleLoClick = ()=>{
        console.log("Lower Case button was clicked");
        let newText= text.toLowerCase();        
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value)
    }
    const handleReplace = (event)=>{
        console.log("On replace");
        let newText= text.replace(/a/g,"e")
        setText(newText)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    
    const [text,setText] = useState("Enter text here");
  return (
    <>
    <div className='container'  style={{color:props.mode==='light'?'black':'white'}}>       
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value ={text} onChange={handleOnChange} id="myBox" rows="8" 
            style={{color:props.mode==='light'?'black':'white', 
            backgroundColor:props.mode==='light'?'white':'grey'}}>

            </textarea >
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleReplace}>Replace a with e</button>
        <button className="btn btn-primary mx-2" onClick={speak}>Speak</button>

    </div>
    <div className='container my-3'  style={{color:props.mode==='light'?'black':'white'}}>       
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * (text.split(" ").length)} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length===0?'Enter something':text}</p>
        
    </div>
    </>
  )
}
