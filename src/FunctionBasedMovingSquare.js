

import {React, useState} from "react"
import './Style.css';
const MovingBox1=()=>{
  const [color, setColor]=useState("blue");
  const [i, setI] = useState(0)
  const [count, setCount]=useState(0);
  const[alert, setAlert] =useState(false);
  const [running, setRunning] = useState (false);
  const  colors= ["blue", "yellow", "green", "grey", "red"]; 
 
   const nextColor=(e)=>{
   e.target.classList.add("animated");
        setCount(count+1)
         setColor((color)=>{
         let newColor = colors[i];
          setI(i + 1);
          setRunning(!running);
           if(i > colors.length){
             setI(0);
           }
          
         return (newColor);
        });  
      };
      
      const removeAnimation=(e)=>{
        e.target.classList.remove("animated")
        setAlert(true)
        setCount(0); 
        setColor(colors[0]) 
      }
      
      const stopProp= e =>{
      e.stopPropagation();
      }
      
      return (
        
       <div className="app">
         <p className="heading">Function Based Moving Square</p>
        {alert && <PopUpTable text="Game Over"/>}
       <button className={`button ${"animated"} ${running ?  "running" : "paused"}`} 
       onAnimationEnd={removeAnimation} style={{ backgroundColor: color }}
       onClick={nextColor}>
       <p onClick={stopProp}>
       {count}
      </p>
      </button> 
      </div>
  );
  }
  const PopUpTable = () => {
  const handelDelete = (e) =>{
    e.target.parentElement.style.display = "none"
  }
  return (  
      <div className="popUpTable">
          <p>GAME OVER</p>
          <span onClick={handelDelete}>X</span>
        </div>   
  );
}

  export default MovingBox1