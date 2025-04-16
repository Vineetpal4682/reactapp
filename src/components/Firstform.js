import React,{useState} from 'react'


export default function Firstform(props) 
{
  const [textVar, setTextVar] = useState('');

  const makeup =()=> {
    console.log('makeup');  
        setTextVar(textVar.toLocaleUpperCase());  
        props.setAlert("Converted to Upper case.","success");  
    }
  const makeClear =(event)=> {
      console.log('makeuptext'); 
       setTextVar("");    
       props.setAlert("All text clear!!","success");  
    }

  const makeLower =()=> {
      console.log('makeup');  
          setTextVar(textVar.toLocaleLowerCase());
          props.setAlert("Converted to Lower case.","success");     
      }

  const makeuptext =(event)=> {
        console.log('makeuptext'); 
         setTextVar(event.target.value); 
           
      }    
  return (
    <>
  <div className="container">     
      <h1>{props.textHeadding}</h1>
      <div className="input-group">
          <span className="input-group-text">With textarea</span>
          <textarea onChange={makeuptext} className="form-control" aria-label="With textarea" id="myText" rows="8" value={textVar}></textarea> 
      </div>  
      <button className="btn btn-primary mx-1" onClick={makeup}>Convert Upper</button>  
      <button className="btn btn-primary mx-1" onClick={makeLower}>Convert Lower</button>
      <button className="btn btn-primary mx-1" onClick={makeClear}>Clear</button>  
  </div>
 <div className="container my-5">
  <h1>Type Summary</h1>
  <p>{textVar.split(" ").length} words and {textVar.length} characters</p>
  <p>{textVar.split(" ").length*0.008} minutes to taken in reading...</p>
<h2>Preview</h2>
  <p>{textVar.length> 0 ?textVar:'Enter Somthing above to preview here!!!' }</p>

 </div>

</>
  )
}
