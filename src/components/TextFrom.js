import React, {useState} from 'react'

export default function TextFrom(props) {
    const [text, setText] = useState("Enter your text here");
    // setText("HEllo")
    const handleOnchange = (event)=>{
        setText(event.target.value);
    }
    const handleUp = ()=>{
        setText(text.toUpperCase());
        props.showAlert("Text coverted to Uppercase" ,"success")
    }
    const handleDown = ()=>{
        setText(text.toLowerCase());
        props.showAlert("Text coverted to Lowercase" ,"success")
    }
    const clearText = ()=>{
        setText("");
        props.showAlert("Text area has cleared" ,"success")
    }
    const copyText = ()=>{
        let copy = document.getElementById('exampleFormControlTextarea1');
        copy.select();
        navigator.clipboard.writeText(copy.value);
        props.showAlert("Copied to clipboard" ,"success")
    }
    return (
        <>
        <div className='container' style={{backgroundColor : props.mode === "dark"?"black":"white"}}>
            <h1 style={{color : props.mode === "dark"?"white":"black"}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnchange} style={{backgroundColor : props.mode === "dark"?"black":"white",color : props.mode === "dark"?"white":"black"}}></textarea>
                <button className='btn btn-primary my-3 mx-2' onClick={handleUp}>Convert to Uppercase</button>
                <button className='btn btn-primary my-3 mx-2' onClick={handleDown}>Convert to Lowercase</button>
                <button className='btn btn-primary my-3 mx-2' onClick={clearText}>Clear Text</button>
                <button className='btn btn-primary my-3 mx-2' onClick={copyText}>Copy Text</button>
            </div>
        </div>
        <div className="container">
            <h1 style={{color : props.mode === "dark"?"white":"black"}}>Your text summary</h1>
            <p style={{color : props.mode === "dark"?"white":"black"}}>{text.length == 0? text.split(" ").length -1:text.split(" ").length} words and {text.length} characters</p>
            <p style={{color : props.mode === "dark"?"white":"black"}}>{0.008 * (text.split(" ").length)} Minutes read</p>
            <h2 style={{color : props.mode === "dark"?"white":"black"}}>Preview of your text</h2>
            <p style={{color : props.mode === "dark"?"white":"black"}}>{text}</p>
        </div>
        </>
  )
}