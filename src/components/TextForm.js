import React,{useState} from 'react'
export default function TextForm(props) {
const handleonchange=(event)=>{
 setText(event.target.value)
}
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText)
props.showAlert("converted to uppercase","success")
  }
  const handleloClick=()=>{
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase","success")
  }
  const handleclClick=()=>{
    let newText=""
    setText(newText)
    props.showAlert("clear text sucessfully","success")

  }
  
  const handleboldClick = () => {
    const isbold = text.includes('bold');
    const newText = isbold ? text.replace('bold', '') : `${text} bold `;
    setText(newText);
    props.showAlert("converted to bold","success")

  };
  const handleitClick = () => {
    const isitalic = text.includes('italic');
    const newText = isitalic? text.replace('italic', '') : `${text} italic `;
    setText(newText);
    props.showAlert("converted to italics","success")

  };
  const handleunderline = () => {
    const isitalic = text.includes('underline');
    const newText = isitalic? text.replace('underline', '') : `${text} underline `;
    setText(newText);
    props.showAlert("text are underlinded","success")

  };

const handlecopy=()=>{
  var text=document.getElementById("mybox");
  text.select("");
  navigator.clipboard.writeText(text.value);
  props.showAlert("copied","success")

}
  
  const[text,setText]=useState('enter text here');
  return (
    <>
    <div className='container'>
    <h1>{props.heading}  </h1>
<div className="mb-3">

  <textarea className="form-control"   value={text} style={{ backgroundColor:props.mode==='dark'?'black':'white', fontStyle: text.includes('italic') ? 'italic' : 'normal' ,fontWeight: text.includes('bold') ? 'bold' : 'normal', textDecoration:text.includes('underline') ? 'underline' : 'normal'}} onChange={handleonchange} id="mybox" rows="9"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleloClick}>convert to lowercase</button>
<button className="btn btn-primary mx-1" onClick={handlecopy}>copy</button>

    </div>
    <div className='container my-3'>
    <button className="btn btn-primary My-2" onClick={handleclClick}>clear</button>
    <button className="btn btn-primary mx-2" onClick={handleitClick}>I</button>
    <button className="btn btn-primary mx-2" onClick={handleboldClick}>B</button>
    <button className="btn btn-primary mx-2" onClick={handleunderline}>u</button>

      <h1>your text summary</h1>
      <p>{text.split(" ").length} words ,{text.length}characters ,{text.split(".").length} lines</p>
      <p>{0.008 * text.split(" ").length} minutes read </p>
      <h2>preview</h2>
      <p style={{ fontStyle: text.includes('italic') ? 'italic' : 'normal',fontWeight: text.includes('bold') ? 'bold' : 'normal', textDecoration:text.includes('underline') ? 'underline' : 'normal' }} >{text}</p>

    </div>
    </>
  )
}
