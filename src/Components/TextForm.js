import React,{useEffect, useState} from 'react'

export default function TextForm(props) {
  const [text , setText] = useState("Enter text here");
  const [btnStyle , setBtnStyle] = useState({});

  useEffect(()=>{
    setBtnStyle({
      backgroundColor: props.mode==='light' ? 'white':
                         props.mode==='red'? 'rgb(63 57 57)' :
                         props.mode==='blue'? 'rgb(76 83 92)':'rgb(93 96 79)',
            color: (props.mode==='dark'||props.mode==='red'|| props.mode==='blue') ? 'white' : 'black',
            borderRadius:'10px'
    })
  },[props.mode])
  const upClick = ()=>{
    setText(text.toUpperCase());
    props.showAlert("Text COVERTED TO UPPERCASE",'success')
  };
  const lowClick = ()=>{
    setText(text.toLowerCase());
    props.showAlert("text converted to lowercase",'success')
  };

  const senClick = ()=>{
    const sentences = text.split('. ').map(sentence => {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
    });
  setText(sentences.join('. '));
  props.showAlert("Text converted to sentence case",'success')
  };

  const capitalClick = ()=>{
    const words = text.split(" ").map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    setText(words.join(' '));
    props.showAlert("Text Converted To Capital Case",'success')
  };

  const alterClick = ()=>{
    const wordss = text.split("").map((word , index) => {
      // return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      return index %2 === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    setText(wordss.join(''));
    props.showAlert("TeXt cOnVeRtEd tO AlTeRnAtE CaSe",'success')
  };

  const copyClicK = ()=>{
    const text = document.querySelector('#myBox');
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text copied to clipboard",'success')
  };

  const clearClick = ()=>{
    setText("");
    props.showAlert("Text cleared",'success')
  };
  const OnChange = (event)=>{
    console.log("Text area changed");
    setText(event.target.value)
  };
  // console.log(text[0])
  return (
    <div style={{color: props.mode==='light' ? 'black' : 'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea 
        className="form-control"
        onChange={OnChange}
        value={text}
        id="myBox" 
        rows="8"
        style={{backgroundColor: props.mode==='light' ? '#FAEDCE' :
                                 props.mode==='red'? 'rgb(96 96 96)':
                                 props.mode==='blue'? 'rgb(161 69 8)':'#697565',
                color:props.mode==='light' ? 'black' : 'white'}}></textarea>
        <button style={btnStyle} className="btn btn-primary my-2" onClick = {upClick}>CONVERT TO UPEERCASE</button>
        <button style={btnStyle} className={`btn btn-primary mx-2`} onClick = {lowClick}>convert to lowercase</button>
        <button style={btnStyle} className={`btn btn-primary mx-2`} onClick = {senClick}>Convert to sentence</button>
        <button style={btnStyle} className={`btn btn-primary mx-2`} onClick = {capitalClick}>Convert To Capital</button>
        <button style={btnStyle} className={`btn btn-primary mx-2`} onClick = {alterClick}>CoNvErT To aLtErNaTe</button>
        <button style={btnStyle} className={`btn btn-primary mx-2`} onClick = {copyClicK}>Copy Text</button>
        <button style={btnStyle} className={`btn btn-primary mx-2`} onClick = {clearClick}>Clear Text</button>
        </div>
        <div className="container my-3">
          <h2>Your text summary</h2>
          <p>{text.trim() === '' ? 0 :text.trim().split(/\s+/).filter(word => word !== '').length} words and {text.length} letters</p>
          <p>You will probably need {0.33 * text.split(" ").length} seconds to read</p>
          <h3>Preview</h3>
          <p>{text}</p>
        </div>
    </div>
  )
}
