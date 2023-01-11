import React, {useState} from "react";

const HeadTail=()=>{
    const [value, setValue] = useState("");
    const[ar,setAr]=useState([]);
    const [arr,setArr]=useState([""]);
    const[plz,setPlz]=useState("");
    
    const handleChange=(e)=>
    {
      setPlz("")
      setValue(e.target.value)
      setArr ([...arr,e.target.value])
    }
    
    const n=arr.map((k)=>
    {
        return(
            <span>{k}</span>
        )
    })
   
    const onButton=()=>
    {
         if(arr.length<1)
         {
          setPlz("Please select a value from dropdown")
         }
         else{
          setPlz("")
          setArr([])
          setValue(" ")
         }
    }
     return(
        <div>
          <br></br>
          <label>
          Head Or Tail?
           </label>

          <select value={value}
           placeholder="select" 
           onChange={handleChange}>

          <option value=" ">Select</option>
          <option value="H">Head</option>
          <option value="T">Tail</option>
          </select>
          <br></br>
          <br></br>
          
          <button onClick={onButton}>Submit</button><br></br>
          <br></br>

          <div>{n}</div> <br></br>
          <div>{plz}</div>
        </div>
     )
}
export default HeadTail