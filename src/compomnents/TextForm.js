import React, {useState} from 'react'

export default function TextForm(prop) {
  
  const upCase = (e)=>{
    e.preventDefault();
    let newText = text.toUpperCase();
    setText(newText)
    prop.showAlert("Converted to Uppercase","success")
  }
  const loCase = (e)=>{
    e.preventDefault();
    let newText = text.toLowerCase();
    setText(newText)
    prop.showAlert("Converted to Lowercase","success")
  }
  const clearCase = (e)=>{
    e.preventDefault();
    let newText = "";
    setText(newText)
    prop.showAlert("Text cleared","success")
  }
  const copyTxt = (e)=>{
    e.preventDefault();
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    prop.showAlert("Copied to Clipboard","success")
  }
  const remExtraSpace = (e)=>{
    e.preventDefault();
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    prop.showAlert("Removed the extra spaces","success")
  }
  const honChange = (event)=>{
    setText(event.target.value)
  }
    
  const [text,setText] = useState("");
  return (
    <>
    <div className='container'>
        <form>
             <div className="form-group">
                <h3>{prop.heading}</h3>
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={honChange} style={{backgroundColor: prop.mode==='dark'?'#445069':'white',color: prop.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button className=" btn btn-primary my-3 mx-1" onClick={upCase}>Convert to Uppercase</button>
            <button className=" btn btn-primary my-3 mx-1" onClick={loCase}>Convert to Lowercase</button>
            <button className=" btn btn-primary my-3 mx-1" onClick={clearCase}>Clear Text</button>
            <button className=" btn btn-primary my-3 mx-1" onClick={copyTxt}>Copy Text</button>
            <button className=" btn btn-primary my-3 mx-1" onClick={remExtraSpace}>Remove Extra Space</button>
        </form>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{text.split(".").length} sentences</p>
        <p>On average, it takes {0.008*text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter some text in the box to preview here.'}</p>
    </div>

    </>
  )
}
