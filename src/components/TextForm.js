import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpper = () => {
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success")
    }

    const handleLower = () => {
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success")
    }

    const handleInverse = () => {
        let splitstring = Text.split("");
        let reversearray = splitstring.reverse();
        let newText = reversearray.join("");
        setText(newText);
        props.showAlert("String inversed Successfully!", "success")
    }

    const handleExtraSpaces = () => {
        setText(Text.replace(/\s+/g, ' ').trim())
        props.showAlert("Extra Spaces Removed Successfully!", "success")
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(Text);
        props.showAlert("Copied to clipboard!", "success")
    }

    const handleClear = () => {
        setText("");
        props.showAlert("Text Cleared Successfully", "warning")
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const [Text, setText] = useState("")

    let text = Text + " ";
    const count = text.split(".").length - 1;


    return (
        <>
            <div className="container" style={{ backgroundColor: props.mode === 'dark' ? '#1a2240' : 'white', color: props.mode === 'light' ? '#1a2240' : 'white' }}>
                <div className="container my-3">
                    <div className="mb-3">
                        <h2 className="mb-3">{props.heading}</h2>
                        <textarea className="form-control" placeholder="Enter text here" value={Text} onChange={handleChange} id="myBox" rows="6" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(24 28 42)' : 'white', color: props.mode === 'light' ? '#1a2240' : 'white' }}></textarea>
                    </div>
                    <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpper}>To UpperCase</button>
                    <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLower}>To LowerCase</button>
                    <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleInverse}>Inverse Text</button>
                    <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                    <button disabled={Text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleClear}>Clear</button>
                </div>

                <div className="container my-3">
                    <h1>Text Summary</h1>
                    <ul className="my-3 mb-3">
                        <li><strong>Words: </strong>{Text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</li>
                        <li><strong>Characters: </strong>{Text.length}</li>
                        <li><strong>Sentence: </strong>{count}</li>
                    </ul>
                    <p> <strong>{0.008 * Text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} minutes</strong> required to read</p>
                    <h2>Preview</h2>
                    <p>{Text.length > 0 ? Text : 'Nothing to Preview!'}</p>
                </div>
            </div>
        </>
    )
}
