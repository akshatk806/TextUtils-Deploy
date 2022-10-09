import React,{useState} from 'react'

export default function TextForm(props) {
    
    const handleUppercaseClick=()=>{
        // console.log("Uppercase button clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success");
    }

    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleLowercaseClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowecase","success");
    }

    const handleClearText=()=>{
        let newText="";
        setText(newText)
        props.showAlert("Text clear successfully","success");
    }

    const copyText=()=>{
        let text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard","success");
    }
    
    const [text,setText]=useState('');
    return (
        <>
            <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
                <div className="mb-3">
                    {/* <h2>{props.heading} - {text}</h2> */}
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#3c4349':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8" placeholder="Enter text here"></textarea>
                    <button className="btn btn-sm btn-success mt-1" onClick={copyText}>Copy to Clipboard</button>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUppercaseClick}>Convert to Uppercase</button>
                <button className="btn btn-danger mx-1" onClick={handleLowercaseClick}>Convert to Lowercase</button>
                <button className="btn btn-info mx-1" onClick={handleClearText}>Clear Text</button>
            </div>

            <div className="container my-3" style={{backgroundColor: props.mode==='dark'?'#3c4349':'white',color:props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ")[text.split(" ").length-1]===""?text.split(" ").length-1:text.split(" ").length} words and {text.length} characters</p>
                <p>{text===""?0:0.008*text.split(" ").length} Minutes read</p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
